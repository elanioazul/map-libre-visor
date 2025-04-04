import { Component, inject } from '@angular/core';
import { TreeModule, TreeNodeSelectEvent, TreeNodeUnSelectEvent } from 'primeng/tree';
import { servicesGeocatalog } from '../../../core/consts/config';
import { transformGeocatalogToTreeNode } from '../../utils/tree-node.utils';
import {GeocatalogTreeNode } from '../../../core/interfaces/geocatalog-tree.interface';
import { TocgeocatalogService } from '../../services/tocgeocatalog.service';
@Component({
  selector: 'app-geocatalog',
  standalone: true,
  imports: [TreeModule],
  templateUrl: './geocatalog.component.html',
  styleUrl: './geocatalog.component.scss'
})
export class GeocatalogComponent {
  treeNodes: GeocatalogTreeNode[] = transformGeocatalogToTreeNode(servicesGeocatalog);

  tocGeocatalogService = inject(TocgeocatalogService);

  selectedNodes: GeocatalogTreeNode[] = this.tocGeocatalogService.nodesInToc();

  onNodeSelection(event: TreeNodeSelectEvent): void {
    console.log(event);
    //console.log(this.selectedNodes);
    //console.log(this.treeNodes);
    this.tocGeocatalogService.add$.next(event.node)


  }
  onNodeUnSelection(event: TreeNodeUnSelectEvent): void {
    console.log(event);
    //console.log(this.selectedNodes);
    //console.log(this.treeNodes);
    this.tocGeocatalogService.remove$.next(event.node)

  }
}

import { Component } from '@angular/core';
import { TreeModule, TreeNodeSelectEvent, TreeNodeUnSelectEvent } from 'primeng/tree';
import { servicesGeocatalog } from '../../../core/consts/config';
import { transformGeocatalogToTreeNode } from '../../utils/tree-node.utils';
import {GeocatalogTreeNode } from '../../../core/interfaces/geocatalog-tree.interface';
@Component({
  selector: 'app-geocatalog',
  standalone: true,
  imports: [TreeModule],
  templateUrl: './geocatalog.component.html',
  styleUrl: './geocatalog.component.scss'
})
export class GeocatalogComponent {
  treeNodes: GeocatalogTreeNode[] = transformGeocatalogToTreeNode(servicesGeocatalog);
  selectedNodes: GeocatalogTreeNode[] = [];

  onNodeSelection(event: TreeNodeSelectEvent): void {
    console.log(event);
    //console.log(this.selectedNodes);

  }
  onNodeUnSelection(event: TreeNodeUnSelectEvent): void {
    console.log(event);
    //console.log(this.selectedNodes);

  }
}

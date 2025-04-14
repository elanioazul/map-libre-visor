import { Component, computed, inject, Injector, OnInit, signal } from '@angular/core';
import { TreeModule, TreeNodeSelectEvent, TreeNodeUnSelectEvent } from 'primeng/tree';
import {GeocatalogTreeNode } from '../../../core/interfaces/geocatalog-tree.interface';
import { TocgeocatalogService } from '../../services/tocgeocatalog.service';
import { toObservable } from '@angular/core/rxjs-interop';
@Component({
  selector: 'app-geocatalog',
  standalone: true,
  imports: [TreeModule],
  templateUrl: './geocatalog.component.html',
  styleUrl: './geocatalog.component.scss'
})
export class GeocatalogComponent implements OnInit {
  private injector = inject(Injector);
  tocGeocatalogService = inject(TocgeocatalogService);

  selectedNodesState = computed(() => this.tocGeocatalogService.nodesInToc());
  selectedNodesLocal: GeocatalogTreeNode[] = []; //writable and readable comp property for the [(selection)] so can be in sync

  constructor() {}

  ngOnInit(): void {
    toObservable(this.selectedNodesState, {
      injector: this.injector
    }).subscribe((nodes: GeocatalogTreeNode[]) => {
      this.selectedNodesLocal = nodes;
    });
  }

  onNodeSelection(event: TreeNodeSelectEvent): void {
    this.tocGeocatalogService.add$.next(event.node)

  }

  onNodeUnSelection(event: TreeNodeUnSelectEvent): void {
    this.tocGeocatalogService.remove$.next(event.node)

  }
}

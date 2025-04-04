import { computed, Injectable, signal } from '@angular/core';
import { GeocatalogTreeNode } from '../../core/interfaces/geocatalog-tree.interface';
import { Subject, take } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
interface TocState {
  nodes: GeocatalogTreeNode[]
}
@Injectable({
  providedIn: 'root'
})
export class TocgeocatalogService {

  //state
  private state = signal<TocState>({
    nodes: []
  })

  //selectos
  nodesInToc = computed(() => this.state().nodes)

  //sources
  add$ = new Subject<GeocatalogTreeNode>
  remove$ = new Subject<GeocatalogTreeNode>
  toggle$ = new Subject<GeocatalogTreeNode>

  constructor() {
    //reducers
    this.add$.pipe(takeUntilDestroyed()).subscribe((node) =>
      this.state.update((state) => ({
        ...state,
        nodes: [
          ...state.nodes,
          node
        ]
      }))
    );
    this.remove$.pipe(takeUntilDestroyed()).subscribe((removedNode) =>
      this.state.update((state) => ({
        ...state,
        nodes: state.nodes.filter(
          (node) => node.data?.name !== removedNode.data?.name
        )
      }))
    );
    this.toggle$.pipe(takeUntilDestroyed()).subscribe((nodeBeingToggle) =>
      this.state.update((state) => ({
        ...state,
        nodes: state.nodes.map((node) =>
          node.data?.name === nodeBeingToggle.data?.name
            ? { ...node, checked: !node.checked }
            : node
        )
      }))
    )
  }
}

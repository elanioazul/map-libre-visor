import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ScreensizeService } from '../../core/services/screensize.service';
import { UiLayoutService } from '../../core/services/ui-layout.service';
import { TreeModule, TreeNodeSelectEvent, TreeNodeUnSelectEvent } from 'primeng/tree';
import { servicesGeocatalog } from '../../core/consts/config';
import { transformGeocatalogToTreeNode } from '../utils/tree-node.utils';
import {GeocatalogTreeNode } from '../../core/interfaces/geocatalog-tree.interface';

@Component({
  selector: 'app-visor-menu',
  standalone: true,
  imports: [ButtonModule, TreeModule],
  templateUrl: './visor-menu.component.html',
  styleUrl: './visor-menu.component.scss'
})
export class VisorMenuComponent {
  treeNodes: GeocatalogTreeNode[] = transformGeocatalogToTreeNode(servicesGeocatalog);
  selectedNodes: GeocatalogTreeNode[] = [];

  screenSizeService = inject(ScreensizeService);
  uiLayoutService = inject(UiLayoutService);

  @ViewChild("offmenu") offmenu!: ElementRef<HTMLElement>;
  @ViewChild("toogleBtn") toogleBtn!: ElementRef<HTMLElement>;

  constructor() {}

  onNodeSelection(event: TreeNodeSelectEvent): void {
    console.log(event);
    //console.log(this.selectedNodes);

  }
  onNodeUnSelection(event: TreeNodeUnSelectEvent): void {
    console.log(event);
    //console.log(this.selectedNodes);

  }

  toggle() {
    if (this.offmenu && this.offmenu.nativeElement) {
      const element = this.offmenu.nativeElement;
      element.classList.toggle("off-menu-opened");
      this.uiLayoutService.toggleMenu();
    }
  }

}

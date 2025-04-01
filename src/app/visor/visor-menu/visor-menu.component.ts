import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ScreensizeService } from '../../core/services/screensize.service';
import { UiLayoutService } from '../../core/services/ui-layout.service';

@Component({
  selector: 'app-visor-menu',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './visor-menu.component.html',
  styleUrl: './visor-menu.component.scss'
})
export class VisorMenuComponent {

  screenSizeService = inject(ScreensizeService);
  uiLayoutService = inject(UiLayoutService);

  @ViewChild("offmenu") offmenu!: ElementRef<HTMLElement>;
  @ViewChild("toogleBtn") toogleBtn!: ElementRef<HTMLElement>;

  constructor() {}

  toggle() {
    if (this.offmenu && this.offmenu.nativeElement) {
      const element = this.offmenu.nativeElement;
      element.classList.toggle("off-menu-opened");
      this.uiLayoutService.toggleMenu();
    }
  }

}

import { Component, ElementRef, ViewChild } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-visor-menu',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './visor-menu.component.html',
  styleUrl: './visor-menu.component.scss'
})
export class VisorMenuComponent {

  @ViewChild("offmenu") offmenu!: ElementRef<HTMLElement>;
  @ViewChild("toogleBtn") toogleEle!: ElementRef<HTMLElement>;

  constructor() {}

  toggle() {
    if (this.offmenu && this.offmenu.nativeElement) {
      const element = this.offmenu.nativeElement;
      element.classList.toggle("off-menu-opened");
    }
  }

}

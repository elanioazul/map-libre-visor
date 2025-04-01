import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ScreensizeService } from '../../core/services/screensize.service';
import { UiLayoutService } from '../../core/services/ui-layout.service';

@Component({
  selector: 'app-visor-header',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './visor-header.component.html',
  styleUrl: './visor-header.component.scss'
})
export class VisorHeaderComponent {

  screenSizeService = inject(ScreensizeService);
  uiLayoutService = inject(UiLayoutService);

  toggleMode(): void {
    const element = document.querySelector('html');
    element?.classList.toggle('my-app-dark');
    this.uiLayoutService.toggleDarkMode();
  }

  openMenu(): void {
    const elem = document.querySelector('#off-menu');
    elem?.classList.toggle('off-menu-opened')
    this.uiLayoutService.toggleMenu();
  }

}

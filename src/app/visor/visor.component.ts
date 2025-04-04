import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { VisorFooterComponent } from './visor-footer/visor-footer.component';
import { VisorHeaderComponent } from './visor-header/visor-header.component';
import { VisorMapComponent } from './visor-map/visor-map.component';
import { VisorMenuComponent } from './visor-menu/visor-menu.component';

@Component({
  selector: 'app-visor',
  standalone: true,
  imports: [
    ButtonModule,
    VisorFooterComponent,
    VisorHeaderComponent,
    VisorMapComponent,
    VisorMenuComponent
  ],
  templateUrl: './visor.component.html',
  styleUrl: './visor.component.scss',
})
export class VisorComponent {}

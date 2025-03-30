import { Component, computed, inject } from '@angular/core';
import { ScreensizeService } from '../../core/services/screensize.service';
@Component({
  selector: 'app-visor-footer',
  standalone: true,
  imports: [],
  templateUrl: './visor-footer.component.html',
  styleUrl: './visor-footer.component.scss'
})
export class VisorFooterComponent {
  screenSizeService = inject(ScreensizeService);

  sizeState = computed(() => this.screenSizeService.size())
  constructor() {
    console.log(this.sizeState());

  }

}

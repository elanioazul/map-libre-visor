import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScreensizeService } from './core/services/screensize.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  //templateUrl: './app.component.html',
  template: '<router-outlet></router-outlet>',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'visor';

  screenSizeService = inject(ScreensizeService);

  ngOnInit(): void {
		this.screenSizeService.getDeviceSize();
	}
}

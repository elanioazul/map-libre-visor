import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-visor-header',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './visor-header.component.html',
  styleUrl: './visor-header.component.scss'
})
export class VisorHeaderComponent {

  toggleMode(): void {
    const element = document.querySelector('html');
    element?.classList.toggle('my-app-dark');
  }

}

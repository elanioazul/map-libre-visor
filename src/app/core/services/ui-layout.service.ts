import { computed, Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiLayoutService {

  isMenuOpen = signal(false);

  isDarkMode = signal(false);

  constructor() { }

  toggleMenu() {
    this.isMenuOpen.update((val) => !val);
  }

  toggleDarkMode() {
    this.isDarkMode.update((val) => !val);
  }


}

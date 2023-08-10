import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  menuItems = {
    base: [
      { name: 'Compteur', path: '/counter' },
      { name: 'Cycle de vie', path: '/life-cycle' },
      { name: 'Fetch', path: '/fetch' },
    ],
  };
}

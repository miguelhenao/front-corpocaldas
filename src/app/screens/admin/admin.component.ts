import { Component } from '@angular/core';

import { MENU_ITEMS } from '../../helpers/constants/menu-items';
import { MenuItem } from '../../helpers/constants/types';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  menuItems: MenuItem[] = MENU_ITEMS;

  constructor() {}

  logout(): void {}
}

import { Component, Input } from '@angular/core';
import { eThemeLeptonComponents } from '../../enums/components';

@Component({
  selector: 'abp-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  @Input() isNavbarExpanded: boolean;

  @Input() smallScreen;

  navItemsComponentKey = eThemeLeptonComponents.NavItems;
}

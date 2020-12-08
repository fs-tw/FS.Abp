import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'abp-navbar-mobile',
  templateUrl: './navbar-mobile.component.html',
})
export class NavbarMobileComponent {
  @Input()
  isNavbarExpanded: boolean;
  @Input()
  isMenuExpanded: boolean;

  @Output()
  navbarIconClick = new EventEmitter<boolean>();
  @Output()
  menuIconClick = new EventEmitter<boolean>();
}

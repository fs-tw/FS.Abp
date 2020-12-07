import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { eThemeLeptonComponents } from '../../enums';
import { SubscriptionService } from '@abp/ng.core';
import { Store } from '@ngxs/store';
import { LayoutStateService } from '../../services';

@Component({
  selector: 'abp-header',
  templateUrl: './header.component.html',
  providers: [SubscriptionService],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements AfterViewInit {
  isNavbarExpanded$ = this.layoutStateService.getIsNavbarExpanded$();
  isMenuExpanded$ = this.layoutStateService.getIsMenuExpanded$();
  smallScreen$ = this.layoutStateService.getSmallScreen$();
  isMenuPlacementTop$ = this.layoutStateService.getIsMenuPlacementTop$();
  logoComponentKey = eThemeLeptonComponents.Logo;
  navbarComponentKey = eThemeLeptonComponents.Navbar;
  navbarMobileComponentKey = eThemeLeptonComponents.NavbarMobile;
  sidebarComponentKey = eThemeLeptonComponents.Sidebar;

  @ViewChild('navbarBrand', { read: ElementRef })
  navbarBrandRef: ElementRef<any>;
  constructor(
    private subscription: SubscriptionService,
    private renderer: Renderer2,
    private store: Store,
    private layoutStateService: LayoutStateService,
  ) {}

  ngAfterViewInit() {
    this.layoutStateService.listenMouseMove([this.navbarBrandRef]);
  }

  navbarIconClick(navbarStatus: boolean) {
    this.layoutStateService.setIsNavbarExpanded(navbarStatus);
  }

  menuIconClick(menuStatus: boolean) {
    this.layoutStateService.setIsMenuExpanded(menuStatus);
  }
}

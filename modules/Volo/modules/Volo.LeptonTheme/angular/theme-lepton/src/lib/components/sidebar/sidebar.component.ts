import { AfterViewInit, Component, ElementRef, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { eThemeLeptonComponents } from '../../enums';
import { LayoutStateService } from '../../services';
import { SubscriptionService } from '@abp/ng.core';

@Component({
  selector: 'abp-sidebar',
  templateUrl: './sidebar.component.html',
  providers: [SubscriptionService],
  encapsulation: ViewEncapsulation.None,
})
export class SidebarComponent implements AfterViewInit {
  @Input()
  isMenuExpanded: boolean;
  @Input()
  smallScreen: boolean;
  @Input()
  isMenuPlacementTop: boolean;

  routesComponentKey = eThemeLeptonComponents.Routes;
  mouseOnSidebar$ = this.layoutStateService.getMenuOnSideBar$();
  isSidebarCollapsed$ = this.layoutStateService.getIsSidebarCollapsed$();

  @ViewChild('navbarSidebar', { read: ElementRef })
  navbarSidebarRef: ElementRef<any>;

  constructor(private layoutStateService: LayoutStateService) {}

  onClickLink() {
    if (this.smallScreen) {
      this.layoutStateService.setIsMenuExpanded(false);
      this.layoutStateService.setIsNavbarExpanded(false);
    }
  }
  onClickMenuIcon(isSidebarCollapsed: boolean) {
    this.layoutStateService.onClickMenuIcon(isSidebarCollapsed);
  }

  ngAfterViewInit() {
    this.layoutStateService.listenMouseMove([this.navbarSidebarRef]);
    this.layoutStateService.listenResize();
  }
}

import { ModuleWithProviders } from '@angular/core';
import { MSAllNavComponent } from './ms/_widgets/all-nav/all-nav.component';
import { MSSearchComponent } from './ms/_widgets/search/search.component';
import { MSLangsComponent } from './ms/_widgets/langs/langs.component';
import { MSUserComponent } from './ms/_widgets/user/user.component';
import { MSNoticeComponent } from './ms/_widgets/notice/notice.component';
import { MSRegionComponent } from './ms/_widgets/region/region.component';
import { MSLayoutComponent } from './ms/ms.component';
import { MSSidebarComponent } from './ms/components/sidebar/sidebar.component';
import { MSTopbarComponent } from './ms/components/topbar/topbar.component';
import { MSHelpComponent } from './ms/shared/help/help.component';
import { MSPageNavComponent } from './ms/shared/page-nav/page-nav.component';
import { MSPageBarComponent } from './ms/shared/page-bar/page-bar.component';
import { MSPageSingleComponent } from './ms/shared/page-single/page-single.component';
import { MSServiceLayoutComponent } from './ms/shared/service-layout/service-layout.component';
import { MSLinkToDirective } from './ms/shared/link-to/link-to.directive';
export declare const MS_WIDGETS: (typeof MSAllNavComponent | typeof MSLangsComponent | typeof MSNoticeComponent | typeof MSRegionComponent | typeof MSSearchComponent | typeof MSUserComponent)[];
export declare const MS_COMPONENTS: (typeof MSAllNavComponent | typeof MSLangsComponent | typeof MSNoticeComponent | typeof MSRegionComponent | typeof MSSearchComponent | typeof MSUserComponent | typeof MSSidebarComponent | typeof MSTopbarComponent | typeof MSLayoutComponent)[];
export declare const MS_SHARED_COMPONENTS: (typeof MSHelpComponent | typeof MSLinkToDirective | typeof MSPageBarComponent | typeof MSPageNavComponent | typeof MSPageSingleComponent | typeof MSServiceLayoutComponent)[];
export declare class LayoutModule {
    static forRoot(): ModuleWithProviders<LayoutModule>;
    constructor();
}

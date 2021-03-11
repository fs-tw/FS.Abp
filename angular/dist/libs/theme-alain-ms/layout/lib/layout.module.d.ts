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
import * as i0 from "@angular/core";
import * as i1 from "./ms/ms.component";
import * as i2 from "./ms/components/sidebar/sidebar.component";
import * as i3 from "./ms/components/topbar/topbar.component";
import * as i4 from "./ms/_widgets/all-nav/all-nav.component";
import * as i5 from "./ms/_widgets/search/search.component";
import * as i6 from "./ms/_widgets/langs/langs.component";
import * as i7 from "./ms/_widgets/user/user.component";
import * as i8 from "./ms/_widgets/notice/notice.component";
import * as i9 from "./ms/_widgets/region/region.component";
import * as i10 from "@abp/ng.core";
import * as i11 from "@angular/router";
import * as i12 from "@angular/forms";
import * as i13 from "@angular/cdk/drag-drop";
import * as i14 from "./ms/shared/shared.module";
import * as i15 from "ng-zorro-antd/spin";
import * as i16 from "ng-zorro-antd/anchor";
import * as i17 from "ng-zorro-antd/auto-complete";
import * as i18 from "ng-zorro-antd/avatar";
import * as i19 from "ng-zorro-antd/divider";
import * as i20 from "ng-zorro-antd/input";
import * as i21 from "ng-zorro-antd/icon";
import * as i22 from "@delon/theme";
import * as i23 from "@delon/theme/theme-btn";
import * as i24 from "./ms/shared/help/help.component";
import * as i25 from "./ms/shared/page-nav/page-nav.component";
import * as i26 from "./ms/shared/page-bar/page-bar.component";
import * as i27 from "./ms/shared/page-single/page-single.component";
import * as i28 from "./ms/shared/panel/panel.component";
import * as i29 from "./ms/shared/service-layout/service-layout.component";
import * as i30 from "./ms/shared/link-to/link-to.directive";
export declare const MS_WIDGETS: (typeof MSAllNavComponent | typeof MSLangsComponent | typeof MSNoticeComponent | typeof MSRegionComponent | typeof MSSearchComponent | typeof MSUserComponent)[];
export declare const MS_COMPONENTS: (typeof MSAllNavComponent | typeof MSLangsComponent | typeof MSNoticeComponent | typeof MSRegionComponent | typeof MSSearchComponent | typeof MSUserComponent | typeof MSSidebarComponent | typeof MSTopbarComponent | typeof MSLayoutComponent)[];
export declare const MS_SHARED_COMPONENTS: (typeof MSHelpComponent | typeof MSLinkToDirective | typeof MSPageBarComponent | typeof MSPageNavComponent | typeof MSPageSingleComponent | typeof MSServiceLayoutComponent)[];
export declare class LayoutModule {
    static forRoot(): ModuleWithProviders<LayoutModule>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDef<LayoutModule, never>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<LayoutModule, [typeof i1.MSLayoutComponent, typeof i2.MSSidebarComponent, typeof i3.MSTopbarComponent, typeof i4.MSAllNavComponent, typeof i5.MSSearchComponent, typeof i6.MSLangsComponent, typeof i7.MSUserComponent, typeof i8.MSNoticeComponent, typeof i9.MSRegionComponent], [typeof i10.CoreModule, typeof i11.RouterModule, typeof i12.FormsModule, typeof i13.DragDropModule, typeof i14.MSSharedModule, typeof i15.NzSpinModule, typeof i16.NzAnchorModule, typeof i17.NzAutocompleteModule, typeof i18.NzAvatarModule, typeof i19.NzDividerModule, typeof i20.NzInputModule, typeof i21.NzIconModule, typeof i22.AlainThemeModule, typeof i23.ThemeBtnModule], [typeof i1.MSLayoutComponent, typeof i2.MSSidebarComponent, typeof i3.MSTopbarComponent, typeof i4.MSAllNavComponent, typeof i5.MSSearchComponent, typeof i6.MSLangsComponent, typeof i7.MSUserComponent, typeof i8.MSNoticeComponent, typeof i9.MSRegionComponent, typeof i24.MSHelpComponent, typeof i25.MSPageNavComponent, typeof i26.MSPageBarComponent, typeof i27.MSPageSingleComponent, typeof i28.MSPanelComponent, typeof i29.MSServiceLayoutComponent, typeof i30.MSLinkToDirective]>;
    static ɵinj: i0.ɵɵInjectorDef<LayoutModule>;
}
//# sourceMappingURL=layout.module.d.ts.map
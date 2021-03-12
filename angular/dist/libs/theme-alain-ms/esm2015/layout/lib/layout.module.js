import { DragDropModule } from '@angular/cdk/drag-drop';
import { CoreModule } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// import { I18NService } from '@core';
import { AlainThemeModule } from '@delon/theme';
import { ThemeBtnModule } from '@delon/theme/theme-btn';
import { NzAnchorModule } from 'ng-zorro-antd/anchor';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSpinModule } from 'ng-zorro-antd/spin';
//import { MS_COMPONENTS, MS_SHARED_COMPONENTS } from './ms/index';
import { MSSharedModule } from './ms/shared/shared.module';
import { LAYOUT_INIT_PROVIDERS } from './providers/init.provider';
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
import { MSPanelComponent } from './ms/shared/panel/panel.component';
import { MSServiceLayoutComponent } from './ms/shared/service-layout/service-layout.component';
import { MSLinkToDirective } from './ms/shared/link-to/link-to.directive';
import * as i0 from "@angular/core";
import * as i1 from "@delon/theme";
// import { default as en_US } from './ms/_i18n/en-US';
// import { default as zh_CN } from './ms/_i18n/zh-CN';
// import { default as zh_TW } from './ms/_i18n/zh-TW';
export const MS_WIDGETS = [MSAllNavComponent, MSSearchComponent, MSLangsComponent, MSUserComponent, MSNoticeComponent, MSRegionComponent];
export const MS_COMPONENTS = [MSLayoutComponent, MSSidebarComponent, MSTopbarComponent, ...MS_WIDGETS];
export const MS_SHARED_COMPONENTS = [
    MSHelpComponent,
    MSPageNavComponent,
    MSPageBarComponent,
    MSPageSingleComponent,
    MSPanelComponent,
    MSServiceLayoutComponent,
    MSLinkToDirective,
];
//const MS_COMPONENTS=[]
export class LayoutModule {
    constructor() {
        // i18n.load('zh-CN', zh_CN);
        // i18n.load('zh-TW', zh_TW);
        // i18n.load('en-US', en_US);
    }
    static forRoot() {
        return {
            ngModule: LayoutModule,
            providers: [
                LAYOUT_INIT_PROVIDERS
                //LAYOUT_MENU_PROVIDERS
            ]
        };
    }
}
LayoutModule.ɵfac = function LayoutModule_Factory(t) { return new (t || LayoutModule)(); };
LayoutModule.ɵmod = i0.ɵɵdefineNgModule({ type: LayoutModule });
LayoutModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[
            CoreModule,
            RouterModule,
            FormsModule,
            DragDropModule,
            MSSharedModule,
            NzSpinModule,
            NzAnchorModule,
            NzAutocompleteModule,
            NzAvatarModule,
            NzDividerModule,
            NzInputModule,
            NzIconModule,
            AlainThemeModule.forChild(),
            ThemeBtnModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(LayoutModule, { declarations: [MSLayoutComponent, MSSidebarComponent, MSTopbarComponent, MSAllNavComponent, MSSearchComponent, MSLangsComponent, MSUserComponent, MSNoticeComponent, MSRegionComponent], imports: [CoreModule,
        RouterModule,
        FormsModule,
        DragDropModule,
        MSSharedModule,
        NzSpinModule,
        NzAnchorModule,
        NzAutocompleteModule,
        NzAvatarModule,
        NzDividerModule,
        NzInputModule,
        NzIconModule, i1.AlainThemeModule, ThemeBtnModule], exports: [MSLayoutComponent, MSSidebarComponent, MSTopbarComponent, MSAllNavComponent, MSSearchComponent, MSLangsComponent, MSUserComponent, MSNoticeComponent, MSRegionComponent, MSHelpComponent,
        MSPageNavComponent,
        MSPageBarComponent,
        MSPageSingleComponent,
        MSPanelComponent,
        MSServiceLayoutComponent,
        MSLinkToDirective] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LayoutModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CoreModule,
                    RouterModule,
                    FormsModule,
                    DragDropModule,
                    MSSharedModule,
                    NzSpinModule,
                    NzAnchorModule,
                    NzAutocompleteModule,
                    NzAvatarModule,
                    NzDividerModule,
                    NzInputModule,
                    NzIconModule,
                    AlainThemeModule.forChild(),
                    ThemeBtnModule,
                ],
                declarations: [...MS_COMPONENTS],
                exports: [...MS_COMPONENTS, MS_SHARED_COMPONENTS]
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=layout.module.js.map
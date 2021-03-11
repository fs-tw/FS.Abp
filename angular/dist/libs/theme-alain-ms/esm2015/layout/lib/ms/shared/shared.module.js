import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AlainThemeModule } from '@delon/theme';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { MSHelpComponent } from './help/help.component';
import { MSLinkToDirective } from './link-to/link-to.directive';
import { MSPageBarComponent } from './page-bar/page-bar.component';
import { MSPageNavComponent } from './page-nav/page-nav.component';
import { MSPageSingleComponent } from './page-single/page-single.component';
import { MSPanelComponent } from './panel/panel.component';
import { MSServiceLayoutComponent } from './service-layout/service-layout.component';
import { LocalizationModule } from '@abp/ng.core';
import * as i0 from "@angular/core";
import * as i1 from "@delon/theme";
const COMPONENTS = [
    MSHelpComponent,
    MSLinkToDirective,
    MSPageBarComponent,
    MSPageNavComponent,
    MSPageSingleComponent,
    MSPanelComponent,
    MSServiceLayoutComponent,
];
export class MSSharedModule {
}
MSSharedModule.ɵfac = function MSSharedModule_Factory(t) { return new (t || MSSharedModule)(); };
MSSharedModule.ɵmod = i0.ɵɵdefineNgModule({ type: MSSharedModule });
MSSharedModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[CommonModule, RouterModule, FormsModule, AlainThemeModule.forChild(), NzPopoverModule, NzIconModule, NzOutletModule, LocalizationModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MSSharedModule, { declarations: [MSHelpComponent,
        MSLinkToDirective,
        MSPageBarComponent,
        MSPageNavComponent,
        MSPageSingleComponent,
        MSPanelComponent,
        MSServiceLayoutComponent], imports: [CommonModule, RouterModule, FormsModule, i1.AlainThemeModule, NzPopoverModule, NzIconModule, NzOutletModule, LocalizationModule], exports: [MSHelpComponent,
        MSLinkToDirective,
        MSPageBarComponent,
        MSPageNavComponent,
        MSPageSingleComponent,
        MSPanelComponent,
        MSServiceLayoutComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MSSharedModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, RouterModule, FormsModule, AlainThemeModule.forChild(), NzPopoverModule, NzIconModule, NzOutletModule, LocalizationModule],
                declarations: COMPONENTS,
                exports: COMPONENTS,
            }]
    }], null, null); })();
//# sourceMappingURL=shared.module.js.map
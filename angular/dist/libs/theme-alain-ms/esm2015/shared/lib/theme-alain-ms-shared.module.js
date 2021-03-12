import { NgModule } from '@angular/core';
import { CoreModule } from '@abp/ng.core';
import { SHARED_DELON_MODULES } from './shared-delon.module';
import { SHARED_ZORRO_MODULES } from './shared-zorro.module';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import * as i0 from "@angular/core";
import * as i1 from "@delon/abc/st";
import * as i2 from "@delon/abc/sv";
import * as i3 from "@delon/abc/se";
import * as i4 from "@delon/abc/page-header";
import * as i5 from "@delon/chart/custom";
import * as i6 from "ng-zorro-antd/button";
import * as i7 from "ng-zorro-antd/message";
import * as i8 from "ng-zorro-antd/dropdown";
import * as i9 from "ng-zorro-antd/grid";
import * as i10 from "ng-zorro-antd/checkbox";
import * as i11 from "ng-zorro-antd/tooltip";
import * as i12 from "ng-zorro-antd/popover";
import * as i13 from "ng-zorro-antd/select";
import * as i14 from "ng-zorro-antd/icon";
import * as i15 from "ng-zorro-antd/affix";
import * as i16 from "ng-zorro-antd/alert";
import * as i17 from "ng-zorro-antd/modal";
import * as i18 from "ng-zorro-antd/table";
import * as i19 from "ng-zorro-antd/drawer";
import * as i20 from "ng-zorro-antd/tabs";
import * as i21 from "ng-zorro-antd/input";
import * as i22 from "ng-zorro-antd/date-picker";
import * as i23 from "ng-zorro-antd/time-picker";
import * as i24 from "ng-zorro-antd/input-number";
import * as i25 from "ng-zorro-antd/breadcrumb";
import * as i26 from "ng-zorro-antd/list";
import * as i27 from "ng-zorro-antd/switch";
import * as i28 from "ng-zorro-antd/radio";
import * as i29 from "ng-zorro-antd/form";
import * as i30 from "ng-zorro-antd/avatar";
import * as i31 from "ng-zorro-antd/spin";
import * as i32 from "ng-zorro-antd/card";
import * as i33 from "ng-zorro-antd/divider";
import * as i34 from "ng-zorro-antd/progress";
import * as i35 from "ng-zorro-antd/popconfirm";
import * as i36 from "ng-zorro-antd/upload";
import * as i37 from "ng-zorro-antd/anchor";
import * as i38 from "ng-zorro-antd/skeleton";
import * as i39 from "ng-zorro-antd/core/outlet";
import * as i40 from "ng-zorro-antd/tree";
const declarationsWithExports = [];
const ABPMODULES = [
    CoreModule,
    ThemeSharedModule,
    NgxValidateCoreModule
];
export class BaseThemeSharedModule {
}
BaseThemeSharedModule.ɵfac = function BaseThemeSharedModule_Factory(t) { return new (t || BaseThemeSharedModule)(); };
BaseThemeSharedModule.ɵmod = i0.ɵɵdefineNgModule({ type: BaseThemeSharedModule });
BaseThemeSharedModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[
            ...SHARED_DELON_MODULES,
            ...SHARED_ZORRO_MODULES,
            ...ABPMODULES,
        ], i1.STModule, i2.SVModule, i3.SEModule, i4.PageHeaderModule, i5.G2CustomModule, i6.NzButtonModule, i7.NzMessageModule, i8.NzDropDownModule, i9.NzGridModule, i10.NzCheckboxModule, i11.NzToolTipModule, i12.NzPopoverModule, i13.NzSelectModule, i14.NzIconModule, i15.NzAffixModule, i16.NzAlertModule, i17.NzModalModule, i18.NzTableModule, i19.NzDrawerModule, i20.NzTabsModule, i21.NzInputModule, i22.NzDatePickerModule, i23.NzTimePickerModule, i24.NzInputNumberModule, i25.NzBreadCrumbModule, i26.NzListModule, i27.NzSwitchModule, i28.NzRadioModule, i29.NzFormModule, i30.NzAvatarModule, i31.NzSpinModule, i32.NzCardModule, i33.NzDividerModule, i34.NzProgressModule, i35.NzPopconfirmModule, i36.NzUploadModule, i37.NzAnchorModule, i38.NzSkeletonModule, i39.NzOutletModule, i40.NzTreeModule, CoreModule,
        ThemeSharedModule,
        NgxValidateCoreModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(BaseThemeSharedModule, { imports: [i1.STModule, i2.SVModule, i3.SEModule, i4.PageHeaderModule, i5.G2CustomModule, i6.NzButtonModule, i7.NzMessageModule, i8.NzDropDownModule, i9.NzGridModule, i10.NzCheckboxModule, i11.NzToolTipModule, i12.NzPopoverModule, i13.NzSelectModule, i14.NzIconModule, i15.NzAffixModule, i16.NzAlertModule, i17.NzModalModule, i18.NzTableModule, i19.NzDrawerModule, i20.NzTabsModule, i21.NzInputModule, i22.NzDatePickerModule, i23.NzTimePickerModule, i24.NzInputNumberModule, i25.NzBreadCrumbModule, i26.NzListModule, i27.NzSwitchModule, i28.NzRadioModule, i29.NzFormModule, i30.NzAvatarModule, i31.NzSpinModule, i32.NzCardModule, i33.NzDividerModule, i34.NzProgressModule, i35.NzPopconfirmModule, i36.NzUploadModule, i37.NzAnchorModule, i38.NzSkeletonModule, i39.NzOutletModule, i40.NzTreeModule, CoreModule,
        ThemeSharedModule,
        NgxValidateCoreModule], exports: [i1.STModule, i2.SVModule, i3.SEModule, i4.PageHeaderModule, i5.G2CustomModule, i6.NzButtonModule, i7.NzMessageModule, i8.NzDropDownModule, i9.NzGridModule, i10.NzCheckboxModule, i11.NzToolTipModule, i12.NzPopoverModule, i13.NzSelectModule, i14.NzIconModule, i15.NzAffixModule, i16.NzAlertModule, i17.NzModalModule, i18.NzTableModule, i19.NzDrawerModule, i20.NzTabsModule, i21.NzInputModule, i22.NzDatePickerModule, i23.NzTimePickerModule, i24.NzInputNumberModule, i25.NzBreadCrumbModule, i26.NzListModule, i27.NzSwitchModule, i28.NzRadioModule, i29.NzFormModule, i30.NzAvatarModule, i31.NzSpinModule, i32.NzCardModule, i33.NzDividerModule, i34.NzProgressModule, i35.NzPopconfirmModule, i36.NzUploadModule, i37.NzAnchorModule, i38.NzSkeletonModule, i39.NzOutletModule, i40.NzTreeModule, CoreModule,
        ThemeSharedModule,
        NgxValidateCoreModule] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseThemeSharedModule, [{
        type: NgModule,
        args: [{
                declarations: [...declarationsWithExports],
                imports: [
                    ...SHARED_DELON_MODULES,
                    ...SHARED_ZORRO_MODULES,
                    ...ABPMODULES,
                ],
                exports: [
                    ...SHARED_DELON_MODULES,
                    ...SHARED_ZORRO_MODULES,
                    ...declarationsWithExports,
                    ...ABPMODULES,
                ],
            }]
    }], null, null); })();
export class ThemeAlainMsSharedModule {
    static forRoot() {
        return {
            ngModule: ThemeAlainMsSharedModule,
            providers: [],
        };
    }
}
ThemeAlainMsSharedModule.ɵfac = function ThemeAlainMsSharedModule_Factory(t) { return new (t || ThemeAlainMsSharedModule)(); };
ThemeAlainMsSharedModule.ɵmod = i0.ɵɵdefineNgModule({ type: ThemeAlainMsSharedModule });
ThemeAlainMsSharedModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[BaseThemeSharedModule], BaseThemeSharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ThemeAlainMsSharedModule, { imports: [BaseThemeSharedModule], exports: [BaseThemeSharedModule] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ThemeAlainMsSharedModule, [{
        type: NgModule,
        args: [{
                imports: [BaseThemeSharedModule],
                exports: [BaseThemeSharedModule],
            }]
    }], null, null); })();
//# sourceMappingURL=theme-alain-ms-shared.module.js.map
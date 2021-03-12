import { ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, ɵsetClassMetadata, NgModule } from '@angular/core';
import { CoreModule } from '@abp/ng.core';
import { PageHeaderModule } from '@delon/abc/page-header';
import { SEModule } from '@delon/abc/se';
import { STModule } from '@delon/abc/st';
import { SVModule } from '@delon/abc/sv';
import { G2CustomModule } from '@delon/chart/custom';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzAnchorModule } from 'ng-zorro-antd/anchor';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTreeModule } from 'ng-zorro-antd/tree';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { UiExtensionsModule } from '@fs-tw/theme-alain-ms/shared/extensions';

const SHARED_DELON_MODULES = [STModule, SVModule, SEModule, PageHeaderModule, G2CustomModule];

const SHARED_ZORRO_MODULES = [
    NzButtonModule,
    NzMessageModule,
    NzDropDownModule,
    NzGridModule,
    NzCheckboxModule,
    NzToolTipModule,
    NzPopoverModule,
    NzSelectModule,
    NzIconModule,
    NzAffixModule,
    NzAlertModule,
    NzModalModule,
    NzTableModule,
    NzDrawerModule,
    NzTabsModule,
    NzInputModule,
    NzDatePickerModule,
    NzTimePickerModule,
    NzInputNumberModule,
    NzBreadCrumbModule,
    NzListModule,
    NzSwitchModule,
    NzRadioModule,
    NzFormModule,
    NzAvatarModule,
    NzSpinModule,
    NzCardModule,
    NzDividerModule,
    NzProgressModule,
    NzPopconfirmModule,
    NzUploadModule,
    NzAnchorModule,
    NzSkeletonModule,
    NzOutletModule,
    NzTreeModule,
];

const declarationsWithExports = [];
const ABPMODULES = [
    CoreModule,
    ThemeSharedModule,
    NgxValidateCoreModule
];
class BaseThemeSharedModule {
}
BaseThemeSharedModule.ɵfac = function BaseThemeSharedModule_Factory(t) { return new (t || BaseThemeSharedModule)(); };
BaseThemeSharedModule.ɵmod = ɵɵdefineNgModule({ type: BaseThemeSharedModule });
BaseThemeSharedModule.ɵinj = ɵɵdefineInjector({ imports: [[
            ...SHARED_DELON_MODULES,
            ...SHARED_ZORRO_MODULES,
            ...ABPMODULES,
        ], STModule, SVModule, SEModule, PageHeaderModule, G2CustomModule, NzButtonModule, NzMessageModule, NzDropDownModule, NzGridModule, NzCheckboxModule, NzToolTipModule, NzPopoverModule, NzSelectModule, NzIconModule, NzAffixModule, NzAlertModule, NzModalModule, NzTableModule, NzDrawerModule, NzTabsModule, NzInputModule, NzDatePickerModule, NzTimePickerModule, NzInputNumberModule, NzBreadCrumbModule, NzListModule, NzSwitchModule, NzRadioModule, NzFormModule, NzAvatarModule, NzSpinModule, NzCardModule, NzDividerModule, NzProgressModule, NzPopconfirmModule, NzUploadModule, NzAnchorModule, NzSkeletonModule, NzOutletModule, NzTreeModule, CoreModule,
        ThemeSharedModule,
        NgxValidateCoreModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(BaseThemeSharedModule, { imports: [STModule, SVModule, SEModule, PageHeaderModule, G2CustomModule, NzButtonModule, NzMessageModule, NzDropDownModule, NzGridModule, NzCheckboxModule, NzToolTipModule, NzPopoverModule, NzSelectModule, NzIconModule, NzAffixModule, NzAlertModule, NzModalModule, NzTableModule, NzDrawerModule, NzTabsModule, NzInputModule, NzDatePickerModule, NzTimePickerModule, NzInputNumberModule, NzBreadCrumbModule, NzListModule, NzSwitchModule, NzRadioModule, NzFormModule, NzAvatarModule, NzSpinModule, NzCardModule, NzDividerModule, NzProgressModule, NzPopconfirmModule, NzUploadModule, NzAnchorModule, NzSkeletonModule, NzOutletModule, NzTreeModule, CoreModule,
        ThemeSharedModule,
        NgxValidateCoreModule], exports: [STModule, SVModule, SEModule, PageHeaderModule, G2CustomModule, NzButtonModule, NzMessageModule, NzDropDownModule, NzGridModule, NzCheckboxModule, NzToolTipModule, NzPopoverModule, NzSelectModule, NzIconModule, NzAffixModule, NzAlertModule, NzModalModule, NzTableModule, NzDrawerModule, NzTabsModule, NzInputModule, NzDatePickerModule, NzTimePickerModule, NzInputNumberModule, NzBreadCrumbModule, NzListModule, NzSwitchModule, NzRadioModule, NzFormModule, NzAvatarModule, NzSpinModule, NzCardModule, NzDividerModule, NzProgressModule, NzPopconfirmModule, NzUploadModule, NzAnchorModule, NzSkeletonModule, NzOutletModule, NzTreeModule, CoreModule,
        ThemeSharedModule,
        NgxValidateCoreModule] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(BaseThemeSharedModule, [{
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
class ThemeAlainMsSharedModule {
    static forRoot() {
        return {
            ngModule: ThemeAlainMsSharedModule,
            providers: [],
        };
    }
}
ThemeAlainMsSharedModule.ɵfac = function ThemeAlainMsSharedModule_Factory(t) { return new (t || ThemeAlainMsSharedModule)(); };
ThemeAlainMsSharedModule.ɵmod = ɵɵdefineNgModule({ type: ThemeAlainMsSharedModule });
ThemeAlainMsSharedModule.ɵinj = ɵɵdefineInjector({ imports: [[BaseThemeSharedModule], BaseThemeSharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(ThemeAlainMsSharedModule, { imports: [BaseThemeSharedModule], exports: [BaseThemeSharedModule] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ThemeAlainMsSharedModule, [{
        type: NgModule,
        args: [{
                imports: [BaseThemeSharedModule],
                exports: [BaseThemeSharedModule],
            }]
    }], null, null); })();

const declarationsWithExports$1 = [];
// #region third libs
const ABPMODULES$1 = [
    CoreModule,
    UiExtensionsModule
];
// #endregion
class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = ɵɵdefineNgModule({ type: SharedModule });
SharedModule.ɵinj = ɵɵdefineInjector({ imports: [[
            ...SHARED_DELON_MODULES,
            ...SHARED_ZORRO_MODULES,
            ...ABPMODULES$1,
        ], STModule, SVModule, SEModule, PageHeaderModule, G2CustomModule, NzButtonModule, NzMessageModule, NzDropDownModule, NzGridModule, NzCheckboxModule, NzToolTipModule, NzPopoverModule, NzSelectModule, NzIconModule, NzAffixModule, NzAlertModule, NzModalModule, NzTableModule, NzDrawerModule, NzTabsModule, NzInputModule, NzDatePickerModule, NzTimePickerModule, NzInputNumberModule, NzBreadCrumbModule, NzListModule, NzSwitchModule, NzRadioModule, NzFormModule, NzAvatarModule, NzSpinModule, NzCardModule, NzDividerModule, NzProgressModule, NzPopconfirmModule, NzUploadModule, NzAnchorModule, NzSkeletonModule, NzOutletModule, NzTreeModule, CoreModule,
        UiExtensionsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(SharedModule, { imports: [STModule, SVModule, SEModule, PageHeaderModule, G2CustomModule, NzButtonModule, NzMessageModule, NzDropDownModule, NzGridModule, NzCheckboxModule, NzToolTipModule, NzPopoverModule, NzSelectModule, NzIconModule, NzAffixModule, NzAlertModule, NzModalModule, NzTableModule, NzDrawerModule, NzTabsModule, NzInputModule, NzDatePickerModule, NzTimePickerModule, NzInputNumberModule, NzBreadCrumbModule, NzListModule, NzSwitchModule, NzRadioModule, NzFormModule, NzAvatarModule, NzSpinModule, NzCardModule, NzDividerModule, NzProgressModule, NzPopconfirmModule, NzUploadModule, NzAnchorModule, NzSkeletonModule, NzOutletModule, NzTreeModule, CoreModule,
        UiExtensionsModule], exports: [STModule, SVModule, SEModule, PageHeaderModule, G2CustomModule, NzButtonModule, NzMessageModule, NzDropDownModule, NzGridModule, NzCheckboxModule, NzToolTipModule, NzPopoverModule, NzSelectModule, NzIconModule, NzAffixModule, NzAlertModule, NzModalModule, NzTableModule, NzDrawerModule, NzTabsModule, NzInputModule, NzDatePickerModule, NzTimePickerModule, NzInputNumberModule, NzBreadCrumbModule, NzListModule, NzSwitchModule, NzRadioModule, NzFormModule, NzAvatarModule, NzSpinModule, NzCardModule, NzDividerModule, NzProgressModule, NzPopconfirmModule, NzUploadModule, NzAnchorModule, NzSkeletonModule, NzOutletModule, NzTreeModule, CoreModule,
        UiExtensionsModule] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(SharedModule, [{
        type: NgModule,
        args: [{
                //declarations: [...declarationsWithExports],
                imports: [
                    ...SHARED_DELON_MODULES,
                    ...SHARED_ZORRO_MODULES,
                    ...ABPMODULES$1,
                ],
                exports: [
                    ...SHARED_DELON_MODULES,
                    ...SHARED_ZORRO_MODULES,
                    //...declarationsWithExports,
                    ...ABPMODULES$1,
                ],
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { BaseThemeSharedModule, SHARED_DELON_MODULES, SHARED_ZORRO_MODULES, SharedModule, ThemeAlainMsSharedModule };
//# sourceMappingURL=fs-tw-theme-alain-ms-shared.js.map

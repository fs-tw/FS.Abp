import { NgModule } from '@angular/core';
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
import { NzTagModule } from 'ng-zorro-antd/tag';
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
    NzTagModule
];

const declarationsWithExports = [];
const ABPMODULES = [
    CoreModule,
    ThemeSharedModule,
    NgxValidateCoreModule
];
class BaseThemeSharedModule {
}
BaseThemeSharedModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];
class ThemeAlainMsSharedModule {
    static forRoot() {
        return {
            ngModule: ThemeAlainMsSharedModule,
            providers: [],
        };
    }
}
ThemeAlainMsSharedModule.decorators = [
    { type: NgModule, args: [{
                imports: [BaseThemeSharedModule],
                exports: [BaseThemeSharedModule],
            },] }
];

const declarationsWithExports$1 = [];
// #region third libs
const ABPMODULES$1 = [
    CoreModule,
    UiExtensionsModule
];
// #endregion
class SharedModule {
}
SharedModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { BaseThemeSharedModule, SHARED_DELON_MODULES, SHARED_ZORRO_MODULES, SharedModule, ThemeAlainMsSharedModule };
//# sourceMappingURL=fs-tw-theme-alain-ms-shared.js.map

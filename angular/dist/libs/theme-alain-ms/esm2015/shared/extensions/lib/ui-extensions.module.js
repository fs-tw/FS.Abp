import { CoreModule } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { NzTableListDirective } from './directives/nz-table-list.directive';
import { ExtensibleTableComponent } from './components/extensible-table/extensible-table.component';
import { GridActionsComponent } from './components/grid-actions/grid-actions.component';
import { PageToolbarComponent } from './components/page-toolbar/page-toolbar.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { UiExtensionsModule as AbpUiExtensionsModule } from '@abp/ng.theme.shared/extensions';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { NzTableRowDetailDirective } from './directives/nz-table-row-detail.directive';
import { SVModule } from '@delon/abc/sv';
import * as i0 from "@angular/core";
const declarationsWithExports = [
    ExtensibleTableComponent,
    NzTableRowDetailDirective,
    GridActionsComponent,
    PageToolbarComponent,
    NzTableListDirective,
];
const ZORRO_MODULES = [
    NzButtonModule,
    NzDropDownModule,
    NzIconModule,
    NzTableModule
];
export class BaseUiExtensionsModule {
}
BaseUiExtensionsModule.ɵfac = function BaseUiExtensionsModule_Factory(t) { return new (t || BaseUiExtensionsModule)(); };
BaseUiExtensionsModule.ɵmod = i0.ɵɵdefineNgModule({ type: BaseUiExtensionsModule });
BaseUiExtensionsModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[
            CoreModule,
            ThemeSharedModule,
            NgxValidateCoreModule,
            AbpUiExtensionsModule,
            SVModule,
            ...ZORRO_MODULES,
        ], AbpUiExtensionsModule,
        SVModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(BaseUiExtensionsModule, { declarations: [ExtensibleTableComponent,
        NzTableRowDetailDirective,
        GridActionsComponent,
        PageToolbarComponent,
        NzTableListDirective], imports: [CoreModule,
        ThemeSharedModule,
        NgxValidateCoreModule,
        AbpUiExtensionsModule,
        SVModule, NzButtonModule,
        NzDropDownModule,
        NzIconModule,
        NzTableModule], exports: [ExtensibleTableComponent,
        NzTableRowDetailDirective,
        GridActionsComponent,
        PageToolbarComponent,
        NzTableListDirective, AbpUiExtensionsModule,
        SVModule] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseUiExtensionsModule, [{
        type: NgModule,
        args: [{
                exports: [
                    ...declarationsWithExports,
                    AbpUiExtensionsModule,
                    SVModule
                ],
                declarations: [
                    ...declarationsWithExports
                ],
                imports: [
                    CoreModule,
                    ThemeSharedModule,
                    NgxValidateCoreModule,
                    AbpUiExtensionsModule,
                    SVModule,
                    ...ZORRO_MODULES,
                ],
            }]
    }], null, null); })();
export class UiExtensionsModule {
}
UiExtensionsModule.ɵfac = function UiExtensionsModule_Factory(t) { return new (t || UiExtensionsModule)(); };
UiExtensionsModule.ɵmod = i0.ɵɵdefineNgModule({ type: UiExtensionsModule });
UiExtensionsModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[BaseUiExtensionsModule], BaseUiExtensionsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(UiExtensionsModule, { imports: [BaseUiExtensionsModule], exports: [BaseUiExtensionsModule] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UiExtensionsModule, [{
        type: NgModule,
        args: [{
                exports: [BaseUiExtensionsModule],
                imports: [BaseUiExtensionsModule],
            }]
    }], null, null); })();
//# sourceMappingURL=ui-extensions.module.js.map
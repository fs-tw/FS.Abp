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
import * as i0 from "@angular/core";
const declarationsWithExports = [
    ExtensibleTableComponent,
    GridActionsComponent,
    PageToolbarComponent,
    NzTableListDirective
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
            ...ZORRO_MODULES,
        ], AbpUiExtensionsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(BaseUiExtensionsModule, { declarations: [ExtensibleTableComponent,
        GridActionsComponent,
        PageToolbarComponent,
        NzTableListDirective], imports: [CoreModule,
        ThemeSharedModule,
        NgxValidateCoreModule,
        AbpUiExtensionsModule, NzButtonModule,
        NzDropDownModule,
        NzIconModule,
        NzTableModule], exports: [ExtensibleTableComponent,
        GridActionsComponent,
        PageToolbarComponent,
        NzTableListDirective, AbpUiExtensionsModule] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseUiExtensionsModule, [{
        type: NgModule,
        args: [{
                exports: [
                    ...declarationsWithExports,
                    AbpUiExtensionsModule
                ],
                declarations: [
                    ...declarationsWithExports
                ],
                imports: [
                    CoreModule,
                    ThemeSharedModule,
                    NgxValidateCoreModule,
                    AbpUiExtensionsModule,
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
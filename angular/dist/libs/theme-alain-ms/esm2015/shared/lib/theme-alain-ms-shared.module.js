import { NgModule } from '@angular/core';
import { CoreModule } from '@abp/ng.core';
import { SHARED_DELON_MODULES } from './shared-delon.module';
import { SHARED_ZORRO_MODULES } from './shared-zorro.module';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { NgxValidateCoreModule } from '@ngx-validate/core';
const declarationsWithExports = [];
const ABPMODULES = [
    CoreModule,
    ThemeSharedModule,
    NgxValidateCoreModule
];
export class BaseThemeSharedModule {
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
export class ThemeAlainMsSharedModule {
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
//# sourceMappingURL=theme-alain-ms-shared.module.js.map
import { NgModule } from '@angular/core';
import { FORMMANAGEMENT_ROUTE_PROVIDERS } from './providers/route.provider';
import { EXTENSIONS_PROVIDERS } from './providers/extensions.provider';
export class FormmanagementConfigModule {
    static forRoot() {
        return {
            ngModule: FormmanagementConfigModule,
            providers: [FORMMANAGEMENT_ROUTE_PROVIDERS, EXTENSIONS_PROVIDERS],
        };
    }
}
FormmanagementConfigModule.decorators = [
    { type: NgModule }
];
//# sourceMappingURL=form-management-config.module.js.map
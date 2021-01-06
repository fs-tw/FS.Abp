import { NgModule } from '@angular/core';
import { ROUTE_PROVIDERS } from './providers/route.provider';
import { STYLES_PROVIDERS } from './providers/styles.provider';
export class CrmNgAlainConfigModule {
    static forRoot() {
        return {
            ngModule: CrmNgAlainConfigModule,
            providers: [ROUTE_PROVIDERS, STYLES_PROVIDERS],
        };
    }
}
CrmNgAlainConfigModule.decorators = [
    { type: NgModule, args: [{
                imports: []
            },] }
];
//# sourceMappingURL=crm-config.module.js.map
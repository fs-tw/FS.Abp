import { NgModule } from '@angular/core';
import { EXTENSIONS_PROVIDERS } from './providers/extensions.provider';
import { CMS_ROUTE_PROVIDERS } from './providers/route.provider';
export class CmsConfigModule {
    static forRoot() {
        return {
            ngModule: CmsConfigModule,
            providers: [CMS_ROUTE_PROVIDERS, EXTENSIONS_PROVIDERS,],
        };
    }
}
CmsConfigModule.decorators = [
    { type: NgModule }
];
//# sourceMappingURL=cms-config.module.js.map
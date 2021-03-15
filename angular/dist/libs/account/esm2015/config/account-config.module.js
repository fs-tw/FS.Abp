import { NgModule } from '@angular/core';
import { ACCOUNT_ROUTE_PROVIDERS } from './providers/route.provider';
export class AccountConfigModule {
    static forRoot() {
        return {
            ngModule: AccountConfigModule,
            providers: [ACCOUNT_ROUTE_PROVIDERS],
        };
    }
}
AccountConfigModule.decorators = [
    { type: NgModule }
];
//# sourceMappingURL=account-config.module.js.map
import { NgModule } from '@angular/core';
import { ACCOUNT_ROUTE_PROVIDERS } from './providers/route.provider';
import * as i0 from "@angular/core";
export class AccountConfigModule {
    static forRoot() {
        return {
            ngModule: AccountConfigModule,
            providers: [ACCOUNT_ROUTE_PROVIDERS],
        };
    }
}
AccountConfigModule.ɵfac = function AccountConfigModule_Factory(t) { return new (t || AccountConfigModule)(); };
AccountConfigModule.ɵmod = i0.ɵɵdefineNgModule({ type: AccountConfigModule });
AccountConfigModule.ɵinj = i0.ɵɵdefineInjector({});
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AccountConfigModule, [{
        type: NgModule
    }], null, null); })();
//# sourceMappingURL=account-config.module.js.map
import { Injectable } from '@angular/core';
import { EnvironmentService } from '@abp/ng.core';
import * as i0 from "@angular/core";
import * as i1 from "@abp/ng.core";
export class ManageProfileGuard {
    constructor(environmentService) {
        this.environmentService = environmentService;
    }
    canActivate(_, __) {
        const env = this.environmentService.getEnvironment();
        if (env.oAuthConfig.responseType === 'code') {
            window.location.href = `${env.oAuthConfig.issuer}/Account/Manage?returnUrl=${window.location.href}`;
            return false;
        }
        else {
            return true;
        }
    }
}
ManageProfileGuard.ɵfac = function ManageProfileGuard_Factory(t) { return new (t || ManageProfileGuard)(i0.ɵɵinject(i1.EnvironmentService)); };
ManageProfileGuard.ɵprov = i0.ɵɵdefineInjectable({ token: ManageProfileGuard, factory: ManageProfileGuard.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ManageProfileGuard, [{
        type: Injectable
    }], function () { return [{ type: i1.EnvironmentService }]; }, null); })();
//# sourceMappingURL=manage-profile.guard.js.map
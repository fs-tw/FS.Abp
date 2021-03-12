//import { AuthService } from '@abp/ng.core';
import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../services/auth.service";
export class AuthenticationFlowGuard {
    constructor(authService) {
        this.authService = authService;
    }
    canActivate() {
        if (this.authService.isInternalAuth)
            return true;
        this.authService.initLogin();
        return false;
    }
}
AuthenticationFlowGuard.ɵfac = function AuthenticationFlowGuard_Factory(t) { return new (t || AuthenticationFlowGuard)(i0.ɵɵinject(i1.AuthService)); };
AuthenticationFlowGuard.ɵprov = i0.ɵɵdefineInjectable({ token: AuthenticationFlowGuard, factory: AuthenticationFlowGuard.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthenticationFlowGuard, [{
        type: Injectable
    }], function () { return [{ type: i1.AuthService }]; }, null); })();
//# sourceMappingURL=authentication-flow.guard.js.map
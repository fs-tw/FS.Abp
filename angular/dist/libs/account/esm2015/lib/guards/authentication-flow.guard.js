//import { AuthService } from '@abp/ng.core';
import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';
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
AuthenticationFlowGuard.decorators = [
    { type: Injectable }
];
AuthenticationFlowGuard.ctorParameters = () => [
    { type: AuthService }
];
//# sourceMappingURL=authentication-flow.guard.js.map
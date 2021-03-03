import { Injectable } from '@angular/core';
import { EnvironmentService } from '@abp/ng.core';
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
ManageProfileGuard.decorators = [
    { type: Injectable }
];
ManageProfileGuard.ctorParameters = () => [
    { type: EnvironmentService }
];
//# sourceMappingURL=manage-profile.guard.js.map
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { EnvironmentService } from '@abp/ng.core';
export declare class ManageProfileGuard implements CanActivate {
    private environmentService;
    constructor(environmentService: EnvironmentService);
    canActivate(_: ActivatedRouteSnapshot, __: RouterStateSnapshot): boolean;
}

import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { EnvironmentService } from '@abp/ng.core';
import * as i0 from "@angular/core";
export declare class ManageProfileGuard implements CanActivate {
    private environmentService;
    constructor(environmentService: EnvironmentService);
    canActivate(_: ActivatedRouteSnapshot, __: RouterStateSnapshot): boolean;
    static ɵfac: i0.ɵɵFactoryDef<ManageProfileGuard, never>;
    static ɵprov: i0.ɵɵInjectableDef<ManageProfileGuard>;
}
//# sourceMappingURL=manage-profile.guard.d.ts.map
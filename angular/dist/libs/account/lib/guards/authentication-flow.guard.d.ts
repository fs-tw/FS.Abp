import { AuthService } from '../services/auth.service';
import { CanActivate } from '@angular/router';
import * as i0 from "@angular/core";
export declare class AuthenticationFlowGuard implements CanActivate {
    private authService;
    constructor(authService: AuthService);
    canActivate(): boolean;
    static ɵfac: i0.ɵɵFactoryDef<AuthenticationFlowGuard, never>;
    static ɵprov: i0.ɵɵInjectableDef<AuthenticationFlowGuard>;
}
//# sourceMappingURL=authentication-flow.guard.d.ts.map
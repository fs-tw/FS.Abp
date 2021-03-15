import { AuthService } from '../services/auth.service';
import { CanActivate } from '@angular/router';
export declare class AuthenticationFlowGuard implements CanActivate {
    private authService;
    constructor(authService: AuthService);
    canActivate(): boolean;
}

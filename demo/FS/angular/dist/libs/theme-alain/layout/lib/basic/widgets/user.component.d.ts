import { Router } from '@angular/router';
import { ConfigStateService, CurrentUserDto } from '@abp/ng.core';
import { AuthService } from '@fs-tw/account';
import { Observable } from 'rxjs';
export declare class HeaderUserComponent {
    private authService;
    private router;
    private configStateService;
    currentUser$: Observable<CurrentUserDto>;
    constructor(authService: AuthService, router: Router, configStateService: ConfigStateService);
    initLogin(): void;
    logout(): void;
}

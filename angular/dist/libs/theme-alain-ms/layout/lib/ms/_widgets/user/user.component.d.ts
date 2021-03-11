import { Router } from '@angular/router';
import { SettingsService } from '@delon/theme';
import { MSTopbarService } from '../../services/topbar.service';
import { AuthService } from '@fs-tw/account';
import { ConfigStateService, CurrentUserDto } from '@abp/ng.core';
import { Observable } from 'rxjs';
export declare class MSUserComponent {
    private authService;
    private router;
    private configStateService;
    settings: SettingsService;
    currentUser$: Observable<CurrentUserDto>;
    constructor(authService: AuthService, router: Router, configStateService: ConfigStateService, srv: MSTopbarService, settings: SettingsService);
    initLogin(): void;
    logout(): void;
}

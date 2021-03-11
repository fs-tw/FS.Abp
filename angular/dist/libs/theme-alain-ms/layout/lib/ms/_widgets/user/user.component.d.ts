import { Router } from '@angular/router';
import { SettingsService } from '@delon/theme';
import { MSTopbarService } from '../../services/topbar.service';
import { AuthService } from '@fs-tw/account';
import { ConfigStateService, CurrentUserDto } from '@abp/ng.core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class MSUserComponent {
    private authService;
    private router;
    private configStateService;
    settings: SettingsService;
    currentUser$: Observable<CurrentUserDto>;
    constructor(authService: AuthService, router: Router, configStateService: ConfigStateService, srv: MSTopbarService, settings: SettingsService);
    initLogin(): void;
    logout(): void;
    static ɵfac: i0.ɵɵFactoryDef<MSUserComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<MSUserComponent, "ms-user", never, {}, {}, never, never>;
}
//# sourceMappingURL=user.component.d.ts.map
import { Router } from '@angular/router';
import { ITokenService } from '@delon/auth';
import { SettingsService } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import { MSTopbarMessage, MSTopbarNavLink, MSTopbarService } from '../../services/topbar.service';
export declare class MSNoticeComponent {
    private srv;
    private router;
    private tokenService;
    settings: SettingsService;
    msg: NzMessageService;
    get list(): MSTopbarMessage[];
    get l(): MSTopbarNavLink;
    constructor(srv: MSTopbarService, router: Router, tokenService: ITokenService, settings: SettingsService, msg: NzMessageService);
    logout(): void;
}

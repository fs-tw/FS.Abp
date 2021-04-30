import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DA_SERVICE_TOKEN, ITokenService } from '@delon/auth';
import { SettingsService } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import { MSTopbarMessage, MSTopbarNavLink, MSTopbarService } from '../../services/topbar.service';

@Component({
  selector: 'ms-notice',
  templateUrl: './notice.component.html',
  host: {
    '[class.alain-ms__topbar-item]': 'true',
    '[class.alain-ms__topbar-dd]': 'true',
    '[class.alain-ms__notice]': 'true',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MSNoticeComponent {
  get list(): MSTopbarMessage[] {
    return this.srv.messages.map((i) => {
      i.link = this.l.messageUrl + i.id;
      return i;
    });
  }

  get l(): MSTopbarNavLink {
    return this.srv.getNav('message');
  }

  constructor(
    private srv: MSTopbarService,
    private router: Router,
    @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService,
    public settings: SettingsService,
    public msg: NzMessageService,
  ) {}

  logout(): void {
    this.tokenService.clear();
    this.router.navigateByUrl(this.tokenService.login_url!);
  }
}

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
// import { UserService } from '@core';
import { SettingsService } from '@delon/theme';
import { MSTopbarService } from '../../services/topbar.service';
import { AuthService } from '@fs-tw/account';
import { ConfigStateService,CurrentUserDto } from '@abp/ng.core';
import { Observable } from 'rxjs';

@Component({
  selector: 'ms-user',
  templateUrl: './user.component.html',
  host: {
    '[class.alain-ms__topbar-item]': 'true',
    '[class.alain-ms__topbar-dd]': 'true',
    '[class.alain-ms__user]': 'true',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MSUserComponent {
  currentUser$: Observable<CurrentUserDto> = this.configStateService.getOne$('currentUser');
  
  constructor(
    private authService: AuthService,
    private router: Router,
    private configStateService: ConfigStateService,
    srv: MSTopbarService,
    public settings: SettingsService
  ) {
  }

  initLogin() {
    this.authService.initLogin();
  }

  logout() {
    this.authService.logout().subscribe(() => {
      console.log( this.router.url);
      this.router.navigate(['/'], { state: { redirectUrl: this.router.url } });
    });
  }
}

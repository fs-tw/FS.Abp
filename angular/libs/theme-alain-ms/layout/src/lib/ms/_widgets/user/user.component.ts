import { ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';
import { Router } from '@angular/router';
// import { UserService } from '@core';
import { SettingsService } from '@delon/theme';
import { MSTopbarService } from '../../services/topbar.service';
import { AuthService } from '@abp/ng.core';
import { ConfigStateService,CurrentUserDto,NAVIGATE_TO_MANAGE_PROFILE } from '@abp/ng.core';
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
    @Inject(NAVIGATE_TO_MANAGE_PROFILE) public navigateToManageProfile,
    private configStateService: ConfigStateService,
    public settings: SettingsService
  ) {
  }

  navigateToLogin() {
    this.authService.navigateToLogin();
  }

  logout() {
    this.authService.logout().subscribe();
  }
}

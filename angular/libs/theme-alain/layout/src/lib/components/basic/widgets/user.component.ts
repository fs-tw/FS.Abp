import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DA_SERVICE_TOKEN, ITokenService } from '@delon/auth';
import { SettingsService, User } from '@delon/theme';
import {
  AuthService,
  ConfigStateService,
  CurrentUserDto
} from '@abp/ng.core';
import { Observable } from 'rxjs';

@Component({
  selector: 'header-user',
  template: `
    <div *ngIf="(currentUser$ | async)?.isAuthenticated"
      class="alain-default__nav-item d-flex align-items-center px-sm"
      nz-dropdown
      nzPlacement="bottomRight"
      [nzDropdownMenu]="userMenu"
    >
      <!-- <nz-avatar [nzSrc]="user.avatar" nzSize="small" class="mr-sm"></nz-avatar> -->
      {{ (currentUser$ | async)?.userName }}
    </div>
    <nz-dropdown-menu #userMenu="nzDropdownMenu">
      <div nz-menu class="width-sm">
        <div nz-menu-item routerLink="/pro/account/center">
          <i nz-icon nzType="user" class="mr-sm"></i>
          {{ 'AbpAccount::ManageYourProfile' | abpLocalization }}
        </div>
        <li nz-menu-divider></li>
        <div nz-menu-item (click)="logout()">
          <i nz-icon nzType="logout" class="mr-sm"></i>
          {{ 'AbpUi::Logout' | abpLocalization }}
        </div>
      </div>
    </nz-dropdown-menu>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderUserComponent {
  currentUser$: Observable<CurrentUserDto> = this.configState.getOne$('currentUser');
  get user(): User {
    return this.settings.user;
  }

  constructor(
    //@Inject(NAVIGATE_TO_MANAGE_PROFILE) public navigateToManageProfile,
    private authService: AuthService,
    private configState: ConfigStateService,
    private settings: SettingsService,
    private router: Router,
    @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService
  ) {}

  // logout(): void {
  //   this.tokenService.clear();
  //   this.router.navigateByUrl(this.tokenService.login_url!);
  // }

  navigateToLogin() {
    //this.authService.navigateToLogin();
  }

  logout() {
    //this.authService.logout().subscribe();
  }
}

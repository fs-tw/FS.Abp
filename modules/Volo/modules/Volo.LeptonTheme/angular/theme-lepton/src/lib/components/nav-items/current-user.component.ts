import {
  AuthService,
  ConfigStateService,
  EnvironmentService,
  SessionStateService,
} from '@abp/ng.core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { eThemeLeptonComponents } from '../../enums/components';

@Component({
  selector: 'abp-current-user',
  // tslint:disable-next-line: component-max-inline-declarations
  templateUrl: 'current-user.component.html',
})
export class CurrentUserComponent {
  currentUser$ = this.configState.getOne$('currentUser');

  selectedTenant$ = this.sessionState.getTenant$();

  currentUserImageComponentKey = eThemeLeptonComponents.CurrentUserImage;

  get smallScreen(): boolean {
    return window.innerWidth < 992;
  }

  get manageProfileUrl() {
    return `${this.issuer}/Account/Manage?returnUrl=${window.location.href}`;
  }

  get securityLogsUrl() {
    return `${this.issuer}/Account/SecurityLogs?returnUrl=${window.location.href}`;
  }

  get issuer() {
    return this.environment.getEnvironment().oAuthConfig.issuer;
  }

  constructor(
    private authService: AuthService,
    private router: Router,
    private sessionState: SessionStateService,
    private configState: ConfigStateService,
    private environment: EnvironmentService,
  ) {}

  initLogin() {
    this.authService.initLogin();
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/'], { state: { redirectUrl: this.router.url } });
    });
  }
}

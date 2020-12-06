import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { SettingsService } from '@delon/theme';
import { Router } from '@angular/router';
import { UserService } from '@fs/theme.ng-alain-ms/core';
import { MSTopbarService } from '../../services/topbar.service';
import { Observable } from 'rxjs';
import { ConfigStateService, SessionStateService, GetAppConfiguration } from '@abp/ng.core';
import { Select } from '@ngxs/store'
import { OAuthService } from 'angular-oauth2-oidc';
import { Store} from '@ngxs/store'
import { Navigate, RouterState } from '@ngxs/router-plugin';

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
  private _l: any;

  mainLinks: any[] = [];
  subLinks: any[] = [];

  @Input()
  set l(res: any) {
    this._l = res;
    this.mainLinks = (res.links as any[]).slice(0, 3);
    this.subLinks = (res.links as any[]).slice(3);
  }
  get l() {
    return this._l;
  }

  userName:string = '-';
  //@Select(ConfigState.getOne('currentUser'))  
  userInfo$ =this.configStateService.getOne$('currentUser');
  tenantDetails$=this.sessionStateService.getTenant$();

  constructor(
    srv: MSTopbarService,
    private router: Router,
    public settings: SettingsService,
    public userSrv: UserService,
    private store: Store,
    private oAuthService: OAuthService,
    private sessionStateService :SessionStateService,
    private configStateService:ConfigStateService
  ) {
    this.l = srv.getNav('user');
    this.userInfo$.subscribe(x=>{
      this.userName = x.userName;
    });
  }

  // logout() {
  //   this.userSrv.logout();
  //   this.router.navigateByUrl(this.userSrv.login_url);
  // }
  logout() {
    this.oAuthService.logOut();
    this.store.dispatch(
      new Navigate(['/'], null, {
        state: { redirectUrl: this.store.selectSnapshot(RouterState).state.url }
      })
    );
    this.store.dispatch(new GetAppConfiguration());
  }
  get hasLoggedIn(): boolean {
    return this.oAuthService.hasValidAccessToken();
  }
}

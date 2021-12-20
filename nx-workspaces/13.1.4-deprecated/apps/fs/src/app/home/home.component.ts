import { AuthService } from '@abp/ng.core';
import { Component,Injector } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { Fs } from '@fs-tw/cms-kit-management/proxy/cms-kit-management'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  get hasLoggedIn(): boolean {
    return this.oAuthService.hasValidAccessToken();
  }

  constructor(
    private oAuthService: OAuthService, private authService: AuthService,
    private Injector :Injector
    ) {


    }

  login() {
    // let service=this.Injector.get(Fs.CmsKitManagement.MediatR.Command.CommandService);
    // service.test1Command({
    //   application: '123',
    //   name: '456'
    // }).subscribe(x=>{
    //   console.log(x);
    // })
    this.authService.navigateToLogin();
  }
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
// import { UserService } from '@core';
import { SettingsService } from '@delon/theme';
import { MSTopbarService } from '../../services/topbar.service';
import { AuthService } from '@fs-tw/account';
import { ConfigStateService } from '@abp/ng.core';
export class MSUserComponent {
    constructor(authService, router, configStateService, srv, settings) {
        this.authService = authService;
        this.router = router;
        this.configStateService = configStateService;
        this.settings = settings;
        this.currentUser$ = this.configStateService.getOne$('currentUser');
    }
    initLogin() {
        this.authService.initLogin();
    }
    logout() {
        this.authService.logout().subscribe(() => {
            this.router.navigate(['/'], { state: { redirectUrl: this.router.url } });
        });
    }
}
MSUserComponent.decorators = [
    { type: Component, args: [{
                selector: 'ms-user',
                template: "<ng-template #loginBtnTpl>\r\n  <a (click)=\"initLogin()\"  class=\"alain-ms__topbar-item-btn\">{{'AbpAccount::Login' | abpLocalization}}</a>\r\n</ng-template>\r\n\r\n<div *ngIf=\"(currentUser$ | async) as currentUser\">\r\n  <div *ngIf=\"currentUser.isAuthenticated; else loginBtnTpl\">\r\n\r\n\r\n    <span class=\"alain-ms__topbar-item-btn\">\r\n      <!-- <nz-avatar [nzSrc]=\"settings.user.avatar\" nzSize=\"small\"></nz-avatar> -->\r\n      {{ currentUser.userName }}\r\n    </span>\r\n    <div class=\"alain-ms__topbar-dd-menu width-md\">\r\n      <div class=\"alain-ms__user-hd\">\r\n        <div class=\"d-flex\">\r\n          <!-- <nz-avatar [nzSrc]=\"settings.user.avatar\" nzSize=\"small\"></nz-avatar> -->\r\n          <span class=\"ml-md\">{{ currentUser.userName }}</span>\r\n        </div>\r\n        <!-- <div class=\"mt-sm\">\r\n          <ng-container *ngFor=\"let i of mainLinks; let last = last\">\r\n            <a [link-to]=\"i\">{{ i.text }}</a>\r\n            <nz-divider *ngIf=\"!last\" nzType=\"vertical\"></nz-divider>\r\n          </ng-container>\r\n        </div> -->\r\n      </div>\r\n      <div class=\"alain-ms__user-bd\">\r\n        <!-- <a *ngFor=\"let i of subLinks\" [link-to]=\"i\" class=\"alain-ms__user-bd-item\">\r\n          <i nz-icon nzType=\"safety\"></i>{{ i.text }}\r\n        </a> -->\r\n        <a routerLink=\"/account/manage-profile\" class=\"alain-ms__user-bd-item\">\r\n          <i nz-icon nzType=\"safety\"></i>{{ 'AbpAccount::ManageYourProfile' | abpLocalization }}\r\n        </a>\r\n      </div>\r\n      <div class=\"alain-ms__user-fd\">\r\n        <a (click)=\"logout()\" class=\"d-block pt-sm pb-xs text-center\">{{ 'AbpUi::Logout' | abpLocalization }}</a>\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </div>\r\n</div>\r\n\r\n",
                host: {
                    '[class.alain-ms__topbar-item]': 'true',
                    '[class.alain-ms__topbar-dd]': 'true',
                    '[class.alain-ms__user]': 'true',
                },
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
MSUserComponent.ctorParameters = () => [
    { type: AuthService },
    { type: Router },
    { type: ConfigStateService },
    { type: MSTopbarService },
    { type: SettingsService }
];
//# sourceMappingURL=user.component.js.map
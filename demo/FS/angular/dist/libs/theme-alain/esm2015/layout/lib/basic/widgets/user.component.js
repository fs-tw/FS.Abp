import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigStateService } from '@abp/ng.core';
import { AuthService } from '@fs-tw/account';
export class HeaderUserComponent {
    constructor(authService, router, configStateService) {
        this.authService = authService;
        this.router = router;
        this.configStateService = configStateService;
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
HeaderUserComponent.decorators = [
    { type: Component, args: [{
                selector: 'header-user',
                template: "<ng-template #loginBtnTpl>\r\n    <div class=\"alain-default__nav-item d-flex align-items-center px-sm\" nz-dropdown nzPlacement=\"bottomRight\"\r\n        (click)=\"initLogin()\">\r\n        {{'AbpAccount::Login' | abpLocalization}}\r\n    </div>\r\n</ng-template>\r\n<ng-container *ngIf=\"(currentUser$ | async)?.isAuthenticated; else loginBtnTpl\">\r\n    <div class=\"alain-default__nav-item d-flex align-items-center px-sm\" nz-dropdown nzPlacement=\"bottomRight\"\r\n        [nzDropdownMenu]=\"userMenu\">\r\n        <!-- <nz-avatar [nzSrc]=\"user.avatar\" nzSize=\"small\" class=\"mr-sm\"></nz-avatar> -->\r\n        {{ (currentUser$ | async)?.userName }}\r\n    </div>\r\n    <nz-dropdown-menu #userMenu=\"nzDropdownMenu\">\r\n        <div nz-menu class=\"width-sm\">\r\n            <div nz-menu-item routerLink=\"/account/manage-profile\">\r\n                <i nz-icon nzType=\"user\" class=\"mr-sm\"></i>\r\n                {{ 'AbpAccount::ManageYourProfile' | abpLocalization }}\r\n            </div>\r\n            <li nz-menu-divider></li> \r\n            <div nz-menu-item (click)=\"logout()\">\r\n                <i nz-icon nzType=\"logout\" class=\"mr-sm\"></i>\r\n                {{ 'AbpUi::Logout' | abpLocalization }}\r\n            </div>\r\n        </div>\r\n    </nz-dropdown-menu>\r\n</ng-container>",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
HeaderUserComponent.ctorParameters = () => [
    { type: AuthService },
    { type: Router },
    { type: ConfigStateService }
];
//# sourceMappingURL=user.component.js.map
import { CoreModule, LazyModuleFactory } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { NgModule } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { AccountRoutingModule } from './account-routing.module';
import { AuthWrapperComponent } from './components/auth-wrapper/auth-wrapper.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { LoginComponent } from './components/login/login.component';
import { ManageProfileComponent } from './components/manage-profile/manage-profile.component';
import { PersonalSettingsComponent } from './components/personal-settings/personal-settings.component';
import { RegisterComponent } from './components/register/register.component';
import { TenantBoxComponent } from './components/tenant-box/tenant-box.component';
import { ACCOUNT_OPTIONS } from './tokens/options.token';
import { accountOptionsFactory } from './utils/factory-utils';
import { AuthenticationFlowGuard } from './guards/authentication-flow.guard';
import { ManageProfileGuard } from './guards/manage-profile.guard';
export class AccountModule {
    static forChild(options) {
        return {
            ngModule: AccountModule,
            providers: [
                AuthenticationFlowGuard,
                ManageProfileGuard,
                { provide: ACCOUNT_OPTIONS, useValue: options },
                {
                    provide: 'ACCOUNT_OPTIONS',
                    useFactory: accountOptionsFactory,
                    deps: [ACCOUNT_OPTIONS],
                },
            ],
        };
    }
    static forLazy(options) {
        return new LazyModuleFactory(AccountModule.forChild(options));
    }
}
AccountModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    AuthWrapperComponent,
                    LoginComponent,
                    RegisterComponent,
                    TenantBoxComponent,
                    ChangePasswordComponent,
                    ManageProfileComponent,
                    PersonalSettingsComponent,
                ],
                imports: [
                    CoreModule,
                    AccountRoutingModule,
                    ThemeSharedModule,
                    NgbDropdownModule,
                    NgxValidateCoreModule,
                ],
                exports: [],
            },] }
];
//# sourceMappingURL=account.module.js.map
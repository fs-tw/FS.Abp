import { DynamicLayoutComponent, AuthGuard, ReplaceableRouteContainerComponent, } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ManageProfileComponent } from './components/manage-profile/manage-profile.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthenticationFlowGuard } from './guards/authentication-flow.guard';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    {
        path: '',
        component: DynamicLayoutComponent,
        children: [
            {
                path: 'login',
                component: ReplaceableRouteContainerComponent,
                canActivate: [AuthenticationFlowGuard],
                data: {
                    replaceableComponent: {
                        key: "Account.LoginComponent" /* Login */,
                        defaultComponent: LoginComponent,
                    },
                },
            },
            {
                path: 'register',
                component: ReplaceableRouteContainerComponent,
                canActivate: [AuthenticationFlowGuard],
                data: {
                    replaceableComponent: {
                        key: "Account.RegisterComponent" /* Register */,
                        defaultComponent: RegisterComponent,
                    },
                },
            },
            {
                path: 'manage-profile',
                component: ReplaceableRouteContainerComponent,
                canActivate: [AuthGuard],
                data: {
                    replaceableComponent: {
                        key: "Account.ManageProfileComponent" /* ManageProfile */,
                        defaultComponent: ManageProfileComponent,
                    },
                },
            },
        ],
    },
];
export class AccountRoutingModule {
}
AccountRoutingModule.ɵfac = function AccountRoutingModule_Factory(t) { return new (t || AccountRoutingModule)(); };
AccountRoutingModule.ɵmod = i0.ɵɵdefineNgModule({ type: AccountRoutingModule });
AccountRoutingModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[RouterModule.forChild(routes)], RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AccountRoutingModule, { imports: [i1.RouterModule], exports: [RouterModule] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AccountRoutingModule, [{
        type: NgModule,
        args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule],
            }]
    }], null, null); })();
//# sourceMappingURL=account-routing.module.js.map
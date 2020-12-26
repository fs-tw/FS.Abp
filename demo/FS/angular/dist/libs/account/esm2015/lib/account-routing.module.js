import { DynamicLayoutComponent, AuthGuard, ReplaceableRouteContainerComponent, } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ManageProfileComponent } from './components/manage-profile/manage-profile.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthenticationFlowGuard } from './guards/authentication-flow.guard';
const ɵ0 = {
    replaceableComponent: {
        key: "Account.LoginComponent" /* Login */,
        defaultComponent: LoginComponent,
    },
}, ɵ1 = {
    replaceableComponent: {
        key: "Account.RegisterComponent" /* Register */,
        defaultComponent: RegisterComponent,
    },
}, ɵ2 = {
    replaceableComponent: {
        key: "Account.ManageProfileComponent" /* ManageProfile */,
        defaultComponent: ManageProfileComponent,
    },
};
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
                data: ɵ0,
            },
            {
                path: 'register',
                component: ReplaceableRouteContainerComponent,
                canActivate: [AuthenticationFlowGuard],
                data: ɵ1,
            },
            {
                path: 'manage-profile',
                component: ReplaceableRouteContainerComponent,
                canActivate: [AuthGuard],
                data: ɵ2,
            },
        ],
    },
];
export class AccountRoutingModule {
}
AccountRoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule],
            },] }
];
export { ɵ0, ɵ1, ɵ2 };
//# sourceMappingURL=account-routing.module.js.map
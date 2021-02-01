import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EnterpriseModule } from './enterprise/enterprise.module';
const ɵ0 = EnterpriseModule.forEarly;
const routes = [
    { path: '', pathMatch: 'full', redirectTo: 'enterprise' },
    {
        path: '',
        //canActivate: [AuthGuard, PermissionGuard],
        children: [
            {
                path: 'enterprise',
                loadChildren: ɵ0
            },
        ]
    }
];
// @dynamic
export class CrmNgAlainRoutingModule {
}
CrmNgAlainRoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule],
            },] }
];
export { ɵ0 };
//# sourceMappingURL=crm-ng-alain-routing.module.js.map
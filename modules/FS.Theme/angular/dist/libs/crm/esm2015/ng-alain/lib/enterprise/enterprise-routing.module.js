import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LayoutComponent } from './layout/layout.component';
const routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                component: MainComponent
            }
        ],
    }
];
export class EnterpriseRoutingModule {
}
EnterpriseRoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule]
            },] }
];
//# sourceMappingURL=enterprise-routing.module.js.map
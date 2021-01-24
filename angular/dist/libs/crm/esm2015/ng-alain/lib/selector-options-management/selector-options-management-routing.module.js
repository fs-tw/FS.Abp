import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { LayoutComponent } from './components/layout/layout.component';
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
export class SelectorOptionsManagementRoutingModule {
}
SelectorOptionsManagementRoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule]
            },] }
];
//# sourceMappingURL=selector-options-management-routing.module.js.map
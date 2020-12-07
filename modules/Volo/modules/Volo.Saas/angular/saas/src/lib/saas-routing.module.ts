import {
  AuthGuard,
  DynamicLayoutComponent,
  PermissionGuard,
  ReplaceableComponents,
  ReplaceableRouteContainerComponent,
} from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditionsComponent } from './components/editions/editions.component';
import { TenantsComponent } from './components/tenants/tenants.component';
import { eSaasComponents } from './enums/components';
import { SaasExtensionsGuard } from './guards/extensions.guard';

const routes: Routes = [
  { path: '', redirectTo: 'tenants', pathMatch: 'full' },
  {
    path: '',
    component: DynamicLayoutComponent,
    canActivate: [AuthGuard, PermissionGuard, SaasExtensionsGuard],
    children: [
      {
        path: 'tenants',
        component: ReplaceableRouteContainerComponent,
        data: {
          requiredPolicy: 'Saas.Tenants',
          replaceableComponent: {
            key: eSaasComponents.Tenants,
            defaultComponent: TenantsComponent,
          } as ReplaceableComponents.RouteData<TenantsComponent>,
        },
      },
      {
        path: 'editions',
        component: ReplaceableRouteContainerComponent,
        data: {
          requiredPolicy: 'Saas.Editions',
          replaceableComponent: {
            key: eSaasComponents.Editions,
            defaultComponent: EditionsComponent,
          } as ReplaceableComponents.RouteData<EditionsComponent>,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaasRoutingModule {}

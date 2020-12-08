import {
  AuthGuard,
  DynamicLayoutComponent,
  PermissionGuard,
  ReplaceableComponents,
  ReplaceableRouteContainerComponent,
} from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiResourcesComponent } from './components/api-resources/api-resources.component';
import { ClientsComponent } from './components/clients/clients.component';
import { IdentityResourcesComponent } from './components/identity-resources/identity-resources.component';
import { eIdentityServerComponents } from './enums/components';
import { IdentityServerExtensionsGuard } from './guards/extensions.guard';
import { ApiScopesComponent } from './components/api-scopes/api-scopes.component';

const routes: Routes = [
  { path: '', redirectTo: 'identity-resources', pathMatch: 'full' },
  {
    path: '',
    component: DynamicLayoutComponent,
    canActivate: [AuthGuard, PermissionGuard, IdentityServerExtensionsGuard],
    children: [
      {
        path: 'identity-resources',
        component: ReplaceableRouteContainerComponent,
        data: {
          requiredPolicy: 'IdentityServer.IdentityResource',
          replaceableComponent: {
            defaultComponent: IdentityResourcesComponent,
            key: eIdentityServerComponents.IdentityResources,
          } as ReplaceableComponents.RouteData<IdentityResourcesComponent>,
        },
      },
      {
        path: 'clients',
        component: ReplaceableRouteContainerComponent,
        data: {
          requiredPolicy: 'IdentityServer.Client',
          replaceableComponent: {
            defaultComponent: ClientsComponent,
            key: eIdentityServerComponents.Clients,
          } as ReplaceableComponents.RouteData<ClientsComponent>,
        },
      },
      {
        path: 'api-resources',
        component: ReplaceableRouteContainerComponent,
        data: {
          requiredPolicy: 'IdentityServer.ApiResource',
          replaceableComponent: {
            defaultComponent: ApiResourcesComponent,
            key: eIdentityServerComponents.ApiResources,
          } as ReplaceableComponents.RouteData<ApiResourcesComponent>,
        },
      },
      {
        path: 'api-scopes',
        component: ReplaceableRouteContainerComponent,
        data: {
          requiredPolicy: 'IdentityServer.ApiScope',
          replaceableComponent: {
            defaultComponent: ApiScopesComponent,
            key: eIdentityServerComponents.ApiScopes,
          } as ReplaceableComponents.RouteData<ApiScopesComponent>,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IdentityServerRoutingModule {}

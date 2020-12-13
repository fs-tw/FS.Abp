import {
  AuthGuard,
  DynamicLayoutComponent,
  PermissionGuard,
  ReplaceableComponents,
  ReplaceableRouteContainerComponent,
} from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClaimsComponent } from './components/claims/claims.component';
import { OrganizationUnitsComponent } from './components/organization-units/organization-units.component';
import { RolesComponent } from './components/roles/roles.component';
import { SecurityLogsComponent } from './components/security-logs/security-logs.component';
import { UsersComponent } from './components/users/users.component';
import { eIdentityComponents } from './enums/components';
import { IdentityExtensionsGuard } from './guards/extensions.guard';

const routes: Routes = [
  { path: '', redirectTo: 'roles', pathMatch: 'full' },
  {
    path: '',
    component: DynamicLayoutComponent,
    canActivate: [AuthGuard, PermissionGuard, IdentityExtensionsGuard],
    children: [
      {
        path: 'roles',
        component: ReplaceableRouteContainerComponent,
        data: {
          requiredPolicy: 'AbpIdentity.Roles',
          replaceableComponent: {
            key: eIdentityComponents.Roles,
            defaultComponent: RolesComponent,
          } as ReplaceableComponents.RouteData<RolesComponent>,
        },
      },
      {
        path: 'users',
        component: ReplaceableRouteContainerComponent,
        data: {
          requiredPolicy: 'AbpIdentity.Users',
          replaceableComponent: {
            key: eIdentityComponents.Users,
            defaultComponent: UsersComponent,
          } as ReplaceableComponents.RouteData<UsersComponent>,
        },
      },
      {
        path: 'claim-types',
        component: ReplaceableRouteContainerComponent,
        data: {
          requiredPolicy: 'AbpIdentity.ClaimTypes',
          replaceableComponent: {
            key: eIdentityComponents.Claims,
            defaultComponent: ClaimsComponent,
          } as ReplaceableComponents.RouteData<ClaimsComponent>,
        },
      },
      {
        path: 'organization-units',
        component: ReplaceableRouteContainerComponent,
        data: {
          requiredPolicy: 'AbpIdentity.OrganizationUnits',
          replaceableComponent: {
            key: eIdentityComponents.OrganizationUnits,
            defaultComponent: OrganizationUnitsComponent,
          } as ReplaceableComponents.RouteData<OrganizationUnitsComponent>,
        },
      },
      {
        path: 'security-logs',
        component: ReplaceableRouteContainerComponent,
        data: {
          requiredPolicy: 'AbpIdentity.SecurityLogs',
          replaceableComponent: {
            key: eIdentityComponents.SecurityLogs,
            defaultComponent: SecurityLogsComponent,
          } as ReplaceableComponents.RouteData<SecurityLogsComponent>,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IdentityRoutingModule {}

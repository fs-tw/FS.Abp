import {
  AuthGuard,
  DynamicLayoutComponent,
  PermissionGuard,
} from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'codes', pathMatch: 'full' },
  {
    path: '',
    component: DynamicLayoutComponent,
    canActivate: [AuthGuard, PermissionGuard],
    children: [
      {
        path: 'codes',
        loadChildren: () =>
          import('@fs-tw/coding-management/admin/modules/codes').then(
            (m) => m.CodesModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class CodingManagementAdminRoutingModule {}

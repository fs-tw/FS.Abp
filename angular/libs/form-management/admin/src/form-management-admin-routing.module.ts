import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard, PermissionGuard } from '@abp/ng.core';
//import { VersionsModule } from './versions/versions.module';
import { FormsComponent } from '@fs-tw/form-management/admin/shared';
const routes: Routes = [
  { path: '', pathMatch: 'full',redirectTo: 'forms', },
  {
    path: '',
    //canActivate: [AuthGuard, PermissionGuard],
    children: [
      {
        path: 'forms',
        component: FormsComponent,
      },
      // {
      //   path: 'versions',
      //   loadChildren: VersionsModule.forEarly,
      // },
    ],
  },
];
// @dynamic
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormManagementAdminRoutingModule {}

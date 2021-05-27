import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard, PermissionGuard } from '@abp/ng.core';
//import { VersionsModule } from './versions/versions.module';
//import { FormManagementModule } from './form-management/form-management.module';
import { FormsComponent } from '@fs-tw/form-management/admin/shared';

const routes: Routes = [
  { path: '', pathMatch: 'full',redirectTo: 'forms', },
  {
    path: 'forms',
    //loadChildren: FormManagementModule.forEarly
    //canActivate: [AuthGuard, PermissionGuard],
  },
];
// @dynamic
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormManagementAdminRoutingModule {}

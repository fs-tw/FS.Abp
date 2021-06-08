import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'form', },
  {
    path: 'form',
    loadChildren: ()=>import('@fs-tw/form-management/admin/modules/form-management').then(m=>m.FormManagementModule)
    //canActivate: [AuthGuard, PermissionGuard],
  },
];
// @dynamic
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormManagementAdminRoutingModule {}

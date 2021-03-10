import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard, PermissionGuard } from '@abp/ng.core';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'sample' },
  {
    path: '',
    //canActivate: [AuthGuard, PermissionGuard],
    children: [
      {
        //path: 'sample',
        //loadChildren: Sample.forEarly
      },
    ]
  }
];
// @dynamic
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BcpmAdminRoutingModule { }

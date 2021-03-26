import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard, PermissionGuard } from '@abp/ng.core';
import {VersionsModule} from './versions/versions.module';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'versions' },
  {
    path: '',
    //canActivate: [AuthGuard, PermissionGuard],
    children: [
      {
        path: 'versions',
        loadChildren: VersionsModule.forEarly
      },
    ]
  }
];
// @dynamic
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormmanagementAdminRoutingModule { }

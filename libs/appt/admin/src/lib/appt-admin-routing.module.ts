import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { PostModule } from './post/post.module';
import { AuthGuard, PermissionGuard } from '@abp/ng.core';
//import { TagManagementModule } from './tag-management/tag-management.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'post' },
  {
    path: '',
    canActivate: [AuthGuard, PermissionGuard],
    // children: [
    //   {
    //     path: 'post',
    //     loadChildren: PostModule.forEarly
    //   },
    //   {
    //     path: 'tag',
    //     loadChildren: TagManagementModule.forEarly
    //   }
    // ],
  }
];
// @dynamic
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApptAdminRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard, PermissionGuard } from '@abp/ng.core';
import { PostModule } from './post/post.module';
import { TagManagementModule } from './tag-management/tag-management.module'
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'post' },
  {
    path: '',
    canActivate: [AuthGuard, PermissionGuard],
    children: [
      {
        path: 'post',
        loadChildren: PostModule.forEarly
      },
      {
        path: 'tag',
        loadChildren: TagManagementModule.forEarly
      },
      // {
      //   path: 'storage',
      //   loadChildren: StorageModule.forEarly
      // }
    ],
  }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CmsAdminRoutingModule { }

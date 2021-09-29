import {
  AuthGuard,
  DynamicLayoutComponent,
  PermissionGuard
} from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', redirectTo: 'blogs', pathMatch: 'full' },
  {
    path: '',
    component: DynamicLayoutComponent,
    canActivate: [AuthGuard, PermissionGuard],
    children: [
      {
        path: 'blogs',
        loadChildren: () =>
          import('@fs-tw/cms-kit-management/admin/modules/blogs').then(
            (m) => m.BlogsModule
          ),
      },
      {
        path: 'comments',
        loadChildren: () =>
          import('@fs-tw/cms-kit-management/admin/modules/comments').then(
            (m) => m.CommentsModule
          ),
      },
      {
        path: 'pages',
        loadChildren: () =>
          import('@fs-tw/cms-kit-management/admin/modules/pages').then(
            (m) => m.PagesModule
          ),
      },
      {
        path: 'tags',
        loadChildren: () =>
          import('@fs-tw/cms-kit-management/admin/modules/tags').then(
            (m) => m.TagsModule
          ),
      },
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class CmsKitManagementAdminRoutingModule {}

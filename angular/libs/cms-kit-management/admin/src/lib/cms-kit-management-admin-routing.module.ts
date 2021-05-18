import {
  AuthGuard,
  DynamicLayoutComponent,
  PermissionGuard,
  ReplaceableComponents,
  ReplaceableRouteContainerComponent,
} from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BlogPostsComponent, BlogsComponent, CommentsComponent, PagesComponent, TagsComponent } from '@fs-tw/cms-kit-management/admin/shared';

const routes: Routes = [
  { path: '', redirectTo: 'blogs', pathMatch: 'full' },
  {
    path: '',
    component: DynamicLayoutComponent,
    canActivate: [AuthGuard, PermissionGuard],
    children: [
      {
        path: 'blog-posts',
        component: BlogPostsComponent,
      },
      {
        path: 'blogs',
        component: BlogsComponent,
      },
      {
        path: 'pages',
        component: PagesComponent
      },
      {
        path: 'tags',
        component:TagsComponent
      },
      {
        path: 'comments',
        component:CommentsComponent
      }   
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class CmsKitManagementAdminRoutingModule {}

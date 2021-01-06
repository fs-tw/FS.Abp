import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsModule } from './news/news.module';
import { AuthGuard, PermissionGuard } from '@abp/ng.core';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'news' },
  {
    path: '',
    //canActivate: [AuthGuard, PermissionGuard],
    children: [
      {
        path: 'news',
        loadChildren: NewsModule.forEarly
      },      
    ],
  }
];
// @dynamic
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CmsTheProjectRoutingModule { }

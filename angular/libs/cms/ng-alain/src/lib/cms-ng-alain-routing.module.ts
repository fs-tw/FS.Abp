import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynamicLayoutComponent, AuthGuard, PermissionGuard } from '@abp/ng.core';
import { LayoutPassportComponent, LayoutDefaultComponent } from '@fs/ng-alain/basic';

import { PostModule } from './post/post.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'blog' },
  {
      path: '',
      component: LayoutDefaultComponent,
      canActivate: [AuthGuard, PermissionGuard],
      children: [         
          {
              path: 'post',
              loadChildren: ()=>PostModule
          },          
      ],
  }
];
// @dynamic
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmsNgAlainRoutingModule { }

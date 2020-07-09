import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynamicLayoutComponent, AuthGuard, PermissionGuard } from '@abp/ng.core';
import { LayoutPassportComponent, LayoutDefaultComponent } from '@fs/ng-alain/basic';
import * as module from './modules';
import { PostModule } from './post/post.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'post' },
  {
      path: '',
      component: DynamicLayoutComponent,
      canActivate: [AuthGuard, PermissionGuard],
      children: [         
        module.loadPostModuleRoute(),   
      ],
  }
];
// @dynamic
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmsNgAlainRoutingModule { }

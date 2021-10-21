import { Injectable, Injector, NgModule } from '@angular/core';
import { Resolve, RouterModule, Routes } from '@angular/router';
import { ReplaceableComponentsService } from '@abp/ng.core';
import { Observable } from 'rxjs';
import * as _ from 'lodash';
import { QuillEditorComponent } from '@fs-tw/theme-alain/extensions';

@Injectable({ providedIn: 'root' })
export class ReplaceComponentsResolver implements Resolve<boolean> {
  replaceableComponents: Array<any> = [
    {
      name: "html",
      component: QuillEditorComponent,
    }
  ];
  options: Array<any>;

  constructor(injector: Injector, private replaceableComponentsService: ReplaceableComponentsService) {
    this.options = [];
  }

  resolve(): boolean | Observable<boolean> | Promise<boolean> {
    let result = _.uniqBy(this.options.concat(this.replaceableComponents), 'name');
    result.forEach((item) => {
      this.replaceableComponentsService.add({
        key: item.name,
        component: item.component,
      });
    });
    return true;
  }
}

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'account',
    loadChildren: () => import('@abp/ng.account').then(m => m.AccountModule.forLazy()),
  },
  {
    path: 'identity',
    loadChildren: () => import('@abp/ng.identity').then(m => m.IdentityModule.forLazy()),
  },
  {
    path: 'tenant-management',
    loadChildren: () =>
      import('@abp/ng.tenant-management').then(m => m.TenantManagementModule.forLazy()),
  },
  {
    path: 'setting-management',
    loadChildren: () =>
      import('@abp/ng.setting-management').then(m => m.SettingManagementModule.forLazy()),
  },
  {
    path: 'cms-kit-management',
    resolve: { ReplaceComponentsResolver: ReplaceComponentsResolver },
    loadChildren: () =>
      import('@fs-tw/cms-kit-management/admin').then(m => m.CmsKitManagementAdminModule.forLazy()),
  },
  {
    path: 'coding-management',
    loadChildren: () =>
      import('@fs-tw/coding-management/admin').then(m => m.CodingManagementAdminModule.forLazy()),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
  providers: [ReplaceComponentsResolver]
})
export class AppRoutingModule {}

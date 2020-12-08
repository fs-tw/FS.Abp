import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'identity',
    loadChildren: () =>
      import('@volo/abp.ng.identity').then((m) => m.IdentityModule.forLazy()),
  },
  {
    path: 'saas',
    loadChildren: () =>
      import('@volo/abp.ng.saas').then((m) => m.SaasModule.forLazy()),
  },
  {
    path: 'setting-management',
    loadChildren: () =>
      import('@abp/ng.setting-management').then((m) =>
        m.SettingManagementModule.forLazy()
      ),
  },
  {
    path: 'file-management',
    loadChildren: () =>
      import('@volo/abp.ng.file-management').then((m) =>
        m.FileManagementModule.forLazy()
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'account',
    loadChildren: () =>
      import('@abp/ng.account').then((m) => m.AccountModule.forLazy()),
  },
  {
    path: 'identity',
    loadChildren: () =>
      import('@abp/ng.identity').then((m) => m.IdentityModule.forLazy()),
  },
  {
    path: 'tenant-management',
    loadChildren: () =>
      import('@abp/ng.tenant-management').then((m) =>
        m.TenantManagementModule.forLazy()
      ),
  },
  {
    path: 'setting-management',
    loadChildren: () =>
      import('@abp/ng.setting-management').then((m) =>
        m.SettingManagementModule.forLazy()
      ),
  },
  {
    path: 'cms-kit-management',
    loadChildren: () =>
      import('@fs-tw/cms-kit-management/admin').then((m) =>
        m.CmsKitManagementAdminModule.forLazy()
      ),
  },
  {
    path: 'audit-logs',
    loadChildren: () =>
      import('@fs-tw/abp/audit-logging').then((m) =>
        m.AuditLoggingModule.forLazy()
      ),
  },
  // {
  //   path: 'coding-management',
  //   loadChildren: () =>
  //     import('@fs-tw/coding-management/admin').then((m) =>
  //       m.CodingManagementAdminModule.forLazy()
  //     ),
  // },
  // {
  //   path: 'audit-log-management',
  //   loadChildren: () =>
  //     import('@fs-tw/audit-log-management/admin').then((m) =>
  //       m.AuditLogManagementAdminModule.forLazy()
  //     ),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

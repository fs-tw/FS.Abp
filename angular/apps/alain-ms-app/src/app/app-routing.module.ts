import { AuthGuard, PermissionGuard } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
    canActivate: [AuthGuard, PermissionGuard],
  },
  {
    path: 'account',
    loadChildren: () =>
      import('@volo/abp.ng.account/public').then((m) =>
        m.AccountPublicModule.forLazy()
      ),
  },
  {
    path: 'identity',
    loadChildren: () =>
      import('@volo/abp.ng.identity').then((m) => m.IdentityModule.forLazy()),
    canActivate: [AuthGuard, PermissionGuard],
  },
  {
    path: 'language-management',
    loadChildren: () =>
      import('@volo/abp.ng.language-management').then((m) =>
        m.LanguageManagementModule.forLazy()
      ),
    canActivate: [AuthGuard, PermissionGuard],
  },
  {
    path: 'saas',
    loadChildren: () =>
      import('@volo/abp.ng.saas').then((m) => m.SaasModule.forLazy()),
    canActivate: [AuthGuard, PermissionGuard],
  },
  {
    path: 'audit-logs',
    loadChildren: () =>
      import('@volo/abp.ng.audit-logging').then((m) =>
        m.AuditLoggingModule.forLazy()
      ),
    canActivate: [AuthGuard, PermissionGuard],
  },
  {
    path: 'identity-server',
    loadChildren: () =>
      import('@volo/abp.ng.identity-server').then((m) =>
        m.IdentityServerModule.forLazy()
      ),
    canActivate: [AuthGuard, PermissionGuard],
  },
  {
    path: 'text-template-management',
    loadChildren: () =>
      import('@volo/abp.ng.text-template-management').then((m) =>
        m.TextTemplateManagementModule.forLazy()
      ),
    canActivate: [AuthGuard, PermissionGuard],
  },
  {
    path: 'setting-management',
    loadChildren: () =>
      import('@abp/ng.setting-management').then((m) =>
        m.SettingManagementModule.forLazy()
      ),
    canActivate: [AuthGuard, PermissionGuard],
  },
  {
    path: 'form-management',
    loadChildren: () =>
      import('@fs-tw/form-management/admin/modules/form-management').then((m) =>
        m.FormManagementModule.forLazy()
      ),
    canActivate: [AuthGuard, PermissionGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
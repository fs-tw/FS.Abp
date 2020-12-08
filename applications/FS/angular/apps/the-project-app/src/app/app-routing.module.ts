import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'setting-management',
    loadChildren: () =>
      import('@abp/ng.setting-management').then((m) => m.SettingManagementModule.forLazy()),
  },
  {
    path: 'about-sample',
    loadChildren: () => import('./about-sample/about-sample.module').then(m => m.AboutSampleModule),
  },
  {
    path: 'contact-sample',
    loadChildren: () => import('./contact-sample/contact-sample.module').then(m => m.ContactSampleModule),
  },
  {
    path: 'platform-sample',
    loadChildren: () => import('./platform-sample/platform-sample.module').then(m => m.PlatformSampleModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true, scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule { }

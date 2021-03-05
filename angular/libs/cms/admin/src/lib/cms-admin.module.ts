import { NgModule, ModuleWithProviders, NgModuleFactory } from '@angular/core';
import { LazyModuleFactory, CoreModule } from '@abp/ng.core';
import { CmsAdminRoutingModule } from './cms-admin-routing.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CoreModule,
    CmsAdminRoutingModule,
  ],
  exports: [
    SharedModule,
  ],
})
export class CmsAdminModule {
  static forChild(): ModuleWithProviders<CmsAdminModule> {
    return {
      ngModule: CmsAdminModule,
      providers: [],
    };
  }

  static forLazy(): NgModuleFactory<CmsAdminModule> {
    return new LazyModuleFactory(CmsAdminModule.forChild());
  }

}

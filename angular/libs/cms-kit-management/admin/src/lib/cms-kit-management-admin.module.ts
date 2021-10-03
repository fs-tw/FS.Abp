import { ModuleWithProviders, NgModule, NgModuleFactory } from '@angular/core';
import { CoreModule, LazyModuleFactory } from '@abp/ng.core';
import { CmsKitManagementAdminRoutingModule } from './cms-kit-management-admin-routing.module';
import { CmsKitManagementSharedModule } from '@fs-tw/cms-kit-management/shared';

@NgModule({
  imports: [
    CoreModule,
    CmsKitManagementSharedModule,
    CmsKitManagementAdminRoutingModule
  ],
  providers:[
  ]
})
export class CmsKitManagementAdminModule {
  static forChild(): ModuleWithProviders<CmsKitManagementAdminModule> {
    return {
      ngModule: CmsKitManagementAdminModule,
      providers: [],
    };
  }

  static forLazy(): NgModuleFactory<CmsKitManagementAdminModule> {
    return new LazyModuleFactory(CmsKitManagementAdminModule.forChild());
  }
  static forEarly(): NgModuleFactory<CmsKitManagementAdminModule> {
    return new LazyModuleFactory(CmsKitManagementAdminModule.forChild());
  }

}

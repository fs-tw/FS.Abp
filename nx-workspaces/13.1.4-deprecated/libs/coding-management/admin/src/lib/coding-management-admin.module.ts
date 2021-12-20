import { ModuleWithProviders, NgModule, NgModuleFactory } from '@angular/core';
import { CoreModule, LazyModuleFactory } from '@abp/ng.core';
import { CodingManagementAdminRoutingModule } from './coding-management-admin-routing.module';
import { CodingManagementSharedModule } from '@fs-tw/coding-management/shared';

@NgModule({
  imports: [
    CoreModule,
    CodingManagementSharedModule,
    CodingManagementAdminRoutingModule
  ],
  providers:[
  ]
})
export class CodingManagementAdminModule {
  static forChild(): ModuleWithProviders<CodingManagementAdminModule> {
    return {
      ngModule: CodingManagementAdminModule,
      providers: [],
    };
  }

  static forLazy(): NgModuleFactory<CodingManagementAdminModule> {
    return new LazyModuleFactory(CodingManagementAdminModule.forChild());
  }
  static forEarly(): NgModuleFactory<CodingManagementAdminModule> {
    return new LazyModuleFactory(CodingManagementAdminModule.forChild());
  }

}

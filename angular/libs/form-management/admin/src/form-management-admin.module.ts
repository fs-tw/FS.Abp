import { NgModule, ModuleWithProviders, NgModuleFactory } from '@angular/core';
import { LazyModuleFactory, CoreModule } from '@abp/ng.core';
import { FormManagementAdminRoutingModule } from './form-management-admin-routing.module';
import { FormManagementAdminSharedModule } from '@fs-tw/form-management/admin/shared';

@NgModule({
  imports: [
    FormManagementAdminSharedModule,
    CoreModule,
    //FormManagementAdminRoutingModule,
  ],
  exports: [
    FormManagementAdminSharedModule,
  ],
})
export class FormManagementAdminModule {
  static forChild(): ModuleWithProviders<FormManagementAdminModule> {
    return {
      ngModule: FormManagementAdminModule,
      providers: [],
    };
  }

  static forLazy(): NgModuleFactory<FormManagementAdminModule> {
    return new LazyModuleFactory(FormManagementAdminModule.forChild());
  }

}

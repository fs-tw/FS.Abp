import { NgModule, ModuleWithProviders, NgModuleFactory } from '@angular/core';
import { LazyModuleFactory, CoreModule } from '@abp/ng.core';
import { FormManagementAdminRoutingModule } from './form-management-admin-routing.module';
//import { SharedModule } from '@fs-tw/theme-alain';

@NgModule({
  imports: [
    //SharedModule,
    CoreModule,
    FormManagementAdminRoutingModule,
  ],
  exports: [
    //SharedModule,
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

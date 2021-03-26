import { NgModule, ModuleWithProviders, NgModuleFactory } from '@angular/core';
import { LazyModuleFactory, CoreModule } from '@abp/ng.core';
import { FormmanagementAdminRoutingModule } from './form-management-admin-routing.module';
import { SharedModule } from '@fs-tw/cms/admin/shared';

@NgModule({
  imports: [
    SharedModule,
    CoreModule,
    FormmanagementAdminRoutingModule,
  ],
  exports: [
    SharedModule,
  ],
})
export class FormmanagementAdminModule {
  static forChild(): ModuleWithProviders<FormmanagementAdminModule> {
    return {
      ngModule: FormmanagementAdminModule,
      providers: [],
    };
  }

  static forLazy(): NgModuleFactory<FormmanagementAdminModule> {
    return new LazyModuleFactory(FormmanagementAdminModule.forChild());
  }

}

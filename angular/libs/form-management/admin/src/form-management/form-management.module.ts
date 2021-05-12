import { NgModule, ModuleWithProviders, NgModuleFactory } from '@angular/core';
import { LazyModuleFactory, CoreModule } from '@abp/ng.core';
import { FormManagementRoutingModule } from './form-management-routing.module';
import { FormManagementAdminSharedModule } from '@fs-tw/form-management/admin/shared';
import { MainComponent } from './component/main/main.component';
import { ThemeAlainSharedModule } from '@fs-tw/theme-alain/shared';

@NgModule({
  declarations: [MainComponent],
  imports: [
    FormManagementAdminSharedModule,
    CoreModule,
    FormManagementRoutingModule,
    ThemeAlainSharedModule
  ],
  exports: [
  ],
})
export class FormManagementModule {
  static forChild(): ModuleWithProviders<FormManagementModule> {
    return {
      ngModule: FormManagementModule,
      providers: [],
    };
  }

  static forLazy(): NgModuleFactory<FormManagementModule> {
    return new LazyModuleFactory(FormManagementModule.forChild());
  }
  static forEarly(): NgModuleFactory<FormManagementModule> {
    return new LazyModuleFactory(FormManagementModule.forChild());
  }
}

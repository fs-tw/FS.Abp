import { NgModule, NgModuleFactory, ModuleWithProviders } from '@angular/core';
import { CoreModule, LazyModuleFactory } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { FormManagementComponent } from './components/form-management.component';
import { FormManagementRoutingModule } from './form-management-routing.module';

@NgModule({
  declarations: [FormManagementComponent],
  imports: [CoreModule, ThemeSharedModule, FormManagementRoutingModule],
  exports: [FormManagementComponent],
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
}

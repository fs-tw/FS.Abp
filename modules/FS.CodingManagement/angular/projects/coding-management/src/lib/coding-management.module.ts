import { NgModule, NgModuleFactory, ModuleWithProviders } from '@angular/core';
import { CoreModule, LazyModuleFactory } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { CodingManagementComponent } from './components/coding-management.component';
import { CodingManagementRoutingModule } from './coding-management-routing.module';

@NgModule({
  declarations: [CodingManagementComponent],
  imports: [CoreModule, ThemeSharedModule, CodingManagementRoutingModule],
  exports: [CodingManagementComponent],
})
export class CodingManagementModule {
  static forChild(): ModuleWithProviders<CodingManagementModule> {
    return {
      ngModule: CodingManagementModule,
      providers: [],
    };
  }

  static forLazy(): NgModuleFactory<CodingManagementModule> {
    return new LazyModuleFactory(CodingManagementModule.forChild());
  }
}

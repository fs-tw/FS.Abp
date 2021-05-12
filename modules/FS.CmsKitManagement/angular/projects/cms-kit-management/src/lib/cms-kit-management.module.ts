import { NgModule, NgModuleFactory, ModuleWithProviders } from '@angular/core';
import { CoreModule, LazyModuleFactory } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { CmsKitManagementComponent } from './components/cms-kit-management.component';
import { CmsKitManagementRoutingModule } from './cms-kit-management-routing.module';

@NgModule({
  declarations: [CmsKitManagementComponent],
  imports: [CoreModule, ThemeSharedModule, CmsKitManagementRoutingModule],
  exports: [CmsKitManagementComponent],
})
export class CmsKitManagementModule {
  static forChild(): ModuleWithProviders<CmsKitManagementModule> {
    return {
      ngModule: CmsKitManagementModule,
      providers: [],
    };
  }

  static forLazy(): NgModuleFactory<CmsKitManagementModule> {
    return new LazyModuleFactory(CmsKitManagementModule.forChild());
  }
}

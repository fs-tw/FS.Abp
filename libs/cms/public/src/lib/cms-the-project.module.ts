import { NgModule, ModuleWithProviders, NgModuleFactory } from '@angular/core';
//import { NgAlainBasicModule } from '@fs-tw/theme-ng-alain/basic';
import { LazyModuleFactory, CoreModule } from '@abp/ng.core';
import { CmsTheProjectRoutingModule } from './cms-the-project-routing.module';
// import { SharedModule } from './shared/shared.module';
import { CmsTheProjectSharedModule } from '@fs-tw/cms/the-project/shared'

@NgModule({
  imports: [
    CoreModule,
    CmsTheProjectRoutingModule,
    CmsTheProjectSharedModule,
  ],
  exports: [
    CmsTheProjectSharedModule,
  ],
})
export class CmsTheProjectModule {
  static forChild(): ModuleWithProviders<CmsTheProjectModule> {
    return {
      ngModule: CmsTheProjectModule,
      providers: [],
    };
  }

  static forLazy(): NgModuleFactory<CmsTheProjectModule> {
    return new LazyModuleFactory(CmsTheProjectModule.forChild());
  }

}

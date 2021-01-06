import { NgModule, ModuleWithProviders, NgModuleFactory } from '@angular/core';
import { LazyModuleFactory, CoreModule } from '@abp/ng.core';
import { CrmNgAlainRoutingModule } from './crm-ng-alain-routing.module';
//import { SharedModule } from '@fs-tw/crm/ng-alain/shared';

@NgModule({
  imports: [
    //SharedModule,
    CoreModule,
    CrmNgAlainRoutingModule
  ]
})
export class CrmNgAlainModule {
  static forChild(): ModuleWithProviders<CrmNgAlainModule> {
    return {
      ngModule: CrmNgAlainModule,
      providers: [],
    };
  }

  static forLazy(): NgModuleFactory<CrmNgAlainModule> {
    return new LazyModuleFactory(CrmNgAlainModule.forChild());
  }

}

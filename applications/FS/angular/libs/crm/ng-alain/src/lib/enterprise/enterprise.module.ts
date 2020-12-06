import { NgModule, ModuleWithProviders, NgModuleFactory } from '@angular/core';
import { SharedModule } from '@fs/crm/ng-alain/shared';

import { EnterpriseRoutingModule } from './enterprise-routing.module';
import { LazyModuleFactory } from '@abp/ng.core';
import { MainComponent } from './main/main.component';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [MainComponent, LayoutComponent],
  imports: [
    SharedModule,
    EnterpriseRoutingModule
  ]
})
export class EnterpriseModule { 
  static forChild(): ModuleWithProviders<EnterpriseModule> {
    return {
      ngModule: EnterpriseModule,
      providers: [],
    };
  }

  static forLazy(): NgModuleFactory<EnterpriseModule> {
    return new LazyModuleFactory(EnterpriseModule.forChild());
  }  
  static forEarly(): NgModuleFactory<EnterpriseModule> {
    return new LazyModuleFactory(EnterpriseModule.forChild());
  }   
}

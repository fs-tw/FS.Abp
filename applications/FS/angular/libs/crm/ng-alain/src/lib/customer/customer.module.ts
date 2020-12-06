import { NgModule, ModuleWithProviders, NgModuleFactory } from '@angular/core';
import { SharedModule } from '@fs/crm/ng-alain/shared';

import { CustomerRoutingModule } from './customer-routing.module';
import { LazyModuleFactory } from '@abp/ng.core';
import { MainComponent } from './main/main.component';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [MainComponent, LayoutComponent],
  imports: [
    SharedModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { 
  static forChild(): ModuleWithProviders<CustomerModule> {
    return {
      ngModule: CustomerModule,
      providers: [],
    };
  }

  static forLazy(): NgModuleFactory<CustomerModule> {
    return new LazyModuleFactory(CustomerModule.forChild());
  }  
  static forEarly(): NgModuleFactory<CustomerModule> {
    return new LazyModuleFactory(CustomerModule.forChild());
  }   
}

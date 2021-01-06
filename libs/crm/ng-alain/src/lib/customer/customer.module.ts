import { NgModule, ModuleWithProviders, NgModuleFactory } from '@angular/core';
//import { SharedModule } from '@fs-tw/crm/ng-alain/shared';

import { CustomerRoutingModule } from './customer-routing.module';
import { LazyModuleFactory } from '@abp/ng.core';
// import { MainComponent } from './main/main.component';
import { LayoutComponent } from './layout/layout.component';
//import { STModule } from '@delon/abc/st';
//import { NzModalModule } from 'ng-zorro-antd/modal';
import { CoreModule } from '@abp/ng.core';
import { MainComponent } from './main/main.component';
//import { RouterModule } from '@angular/router';
//import { SharedModule } from 'libs/crm/ng-alain/shared/src';

@NgModule({
  declarations: [LayoutComponent, MainComponent],
  imports: [CoreModule, CustomerRoutingModule],
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

import { NgModule, ModuleWithProviders, NgModuleFactory } from '@angular/core';
import { SharedModule } from '@fs/crm/ng-alain/shared';

import { EmployeeRoutingModule } from './employee-routing.module';
import { LazyModuleFactory } from '@abp/ng.core';
import { MainComponent } from './main/main.component';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [MainComponent, LayoutComponent],
  imports: [
    SharedModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { 
  static forChild(): ModuleWithProviders<EmployeeModule> {
    return {
      ngModule: EmployeeModule,
      providers: [],
    };
  }

  static forLazy(): NgModuleFactory<EmployeeModule> {
    return new LazyModuleFactory(EmployeeModule.forChild());
  }  
  static forEarly(): NgModuleFactory<EmployeeModule> {
    return new LazyModuleFactory(EmployeeModule.forChild());
  }   
}

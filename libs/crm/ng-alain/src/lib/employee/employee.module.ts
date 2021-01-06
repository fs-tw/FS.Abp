import { NgModule, ModuleWithProviders, NgModuleFactory } from '@angular/core';
import { SharedModule } from '@fs-tw/crm/ng-alain/shared';

import { EmployeeRoutingModule } from './employee-routing.module';
import { LazyModuleFactory } from '@abp/ng.core';
import { MainComponent } from './main/main.component';
import { LayoutComponent } from './layout/layout.component';
import { STModule } from '@delon/abc/st';
import { NzModalModule} from 'ng-zorro-antd/modal'


@NgModule({
  declarations: [MainComponent, LayoutComponent],
  imports: [
    NzModalModule,
    STModule,
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

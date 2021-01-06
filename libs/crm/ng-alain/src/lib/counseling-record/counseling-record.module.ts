import { NgModule, ModuleWithProviders, NgModuleFactory } from '@angular/core';
import { SharedModule } from '@fs-tw/crm/ng-alain/shared';

import { CounselingRecordRoutingModule } from './counseling-record-routing.module';
import { LazyModuleFactory } from '@abp/ng.core';
import { MainComponent } from './main/main.component';
import { LayoutComponent } from './layout/layout.component';
import {STModule} from '@delon/abc/st';


@NgModule({
  declarations: [MainComponent, LayoutComponent],
  imports: [
    STModule,
    SharedModule,
    CounselingRecordRoutingModule
  ]
})
export class CounselingRecordModule { 
  static forChild(): ModuleWithProviders<CounselingRecordModule> {
    return {
      ngModule: CounselingRecordModule,
      providers: [],
    };
  }

  static forLazy(): NgModuleFactory<CounselingRecordModule> {
    return new LazyModuleFactory(CounselingRecordModule.forChild());
  }  
  static forEarly(): NgModuleFactory<CounselingRecordModule> {
    return new LazyModuleFactory(CounselingRecordModule.forChild());
  }   
}

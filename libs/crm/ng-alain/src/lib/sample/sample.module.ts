import { NgModule, ModuleWithProviders, NgModuleFactory } from '@angular/core';

import { SampleRoutingModule } from './Sample-routing.module';
import { MainComponent } from './main/main.component';
import { LayoutComponent } from './layout/layout.component';
import { LazyModuleFactory } from '@abp/ng.core';
import { SharedModule } from '@fs-tw/crm/ng-alain/shared';
import { STModule} from '@delon/abc/st';

@NgModule({
  declarations: [MainComponent, LayoutComponent],
  imports: [
    STModule,
    SharedModule,
    SampleRoutingModule,
  ]
})
export class SampleModule {
  static forChild(): ModuleWithProviders<SampleModule> {
    return {
      ngModule: SampleModule,
      providers: [],
    };
  }

  static forLazy(): NgModuleFactory<SampleModule> {
    return new LazyModuleFactory(SampleModule.forChild());
  }  
  static forEarly(): NgModuleFactory<SampleModule> {
    return new LazyModuleFactory(SampleModule.forChild());
  }    
 }

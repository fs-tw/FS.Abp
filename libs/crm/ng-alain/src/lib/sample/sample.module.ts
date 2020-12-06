import { NgModule, ModuleWithProviders, NgModuleFactory } from '@angular/core';

import { SampleRoutingModule } from './Sample-routing.module';
import { MainComponent } from './main/main.component';
import { LayoutComponent } from './layout/layout.component';
import { LazyModuleFactory } from '@abp/ng.core';
import { SharedModule } from '@fs/crm/ng-alain/shared';

@NgModule({
  declarations: [MainComponent, LayoutComponent],
  imports: [
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

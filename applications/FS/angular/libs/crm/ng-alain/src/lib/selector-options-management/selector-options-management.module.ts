import { NgModule, ModuleWithProviders, NgModuleFactory } from '@angular/core';

import { SelectorOptionsManagementRoutingModule } from './selector-options-management-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { MainComponent } from './components/main/main.component';
import { LazyModuleFactory } from '@abp/ng.core';
import { SharedModule } from '@fs/crm/ng-alain/shared';
import { EditVocabularyComponent } from './components/entry/edit-vocabulary/edit-vocabulary.component';

@NgModule({
  declarations: [LayoutComponent, MainComponent, EditVocabularyComponent],
  imports: [
    SharedModule,
    SelectorOptionsManagementRoutingModule
  ]
})
export class SelectorOptionsManagementModule { 
  static forChild(): ModuleWithProviders<SelectorOptionsManagementModule> {
    return {
      ngModule: SelectorOptionsManagementModule,
      providers: [],
    };
  }

  static forLazy(): NgModuleFactory<SelectorOptionsManagementModule> {
    return new LazyModuleFactory(SelectorOptionsManagementModule.forChild());
  }  
  static forEarly(): NgModuleFactory<SelectorOptionsManagementModule> {
    return new LazyModuleFactory(SelectorOptionsManagementModule.forChild());
  }    

}

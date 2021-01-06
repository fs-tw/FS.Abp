import { NgModule, ModuleWithProviders, NgModuleFactory } from '@angular/core';

import { SelectorOptionsManagementRoutingModule } from './selector-options-management-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { MainComponent } from './components/main/main.component';
import { LazyModuleFactory } from '@abp/ng.core';
import { SharedModule } from '@fs-tw/crm/ng-alain/shared';
import { EditVocabularyComponent } from './components/entry/edit-vocabulary/edit-vocabulary.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzInputModule} from 'ng-zorro-antd/input';
import { SEModule} from '@delon/abc/se';
import { CoreModule } from '@abp/ng.core';

@NgModule({
  declarations: [LayoutComponent, MainComponent, EditVocabularyComponent],
  imports: [
    CoreModule,
    SEModule,
    NzInputModule,
    NzDropDownModule,
    NzSelectModule,
    NzTableModule,
    NzGridModule,
    SharedModule,
    SelectorOptionsManagementRoutingModule,
  ],
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

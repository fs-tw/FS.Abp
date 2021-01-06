import { NgModule, ModuleWithProviders, NgModuleFactory } from '@angular/core';
import { CpManagementRoutingModule } from './cp-management-routing.module';
import { SharedModule } from '@fs-tw/crm/ng-alain/shared';
import { LazyModuleFactory } from '@abp/ng.core';
import { LayoutComponent } from './components/layout/layout.component';
import { MainComponent } from './components/main/main.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { SVModule} from '@delon/abc/sv';
import { NzTagModule} from 'ng-zorro-antd/tag';

@NgModule({
  declarations: [LayoutComponent, MainComponent],
  imports: [
    NzGridModule,
    NzTabsModule,
    NzSelectModule,
    NzTableModule,
    NzCollapseModule,
    NzDividerModule,
    SVModule,
    NzTagModule,
    SharedModule,
    CpManagementRoutingModule,
  ],
})
export class CpManagementModule {
  static forChild(): ModuleWithProviders<CpManagementModule> {
    return {
      ngModule: CpManagementModule,
      providers: [],
    };
  }

  static forLazy(): NgModuleFactory<CpManagementModule> {
    return new LazyModuleFactory(CpManagementModule.forChild());
  }
  static forEarly(): NgModuleFactory<CpManagementModule> {
    return new LazyModuleFactory(CpManagementModule.forChild());
  }
}

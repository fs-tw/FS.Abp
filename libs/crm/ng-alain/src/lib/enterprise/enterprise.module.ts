import { NgModule, ModuleWithProviders, NgModuleFactory } from '@angular/core';
import { AlainThemeModule } from '@delon/theme';

import { EnterpriseRoutingModule } from './enterprise-routing.module';
import { LazyModuleFactory } from '@abp/ng.core';
import { MainComponent } from './main/main.component';
import { LayoutComponent } from './layout/layout.component';
import { STModule } from '@delon/abc/st';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { CoreModule } from '@abp/ng.core';
import { ThemeSharedModule} from '@abp/ng.theme.shared'

@NgModule({
  declarations: [MainComponent, LayoutComponent],
  imports: [
    CoreModule,
    ThemeSharedModule,
    //NzSelectModule,

    AlainThemeModule.forChild(),

    NzDrawerModule,
    STModule,
    NzModalModule,

    EnterpriseRoutingModule,
  ],
})
export class EnterpriseModule {
  static forChild(): ModuleWithProviders<EnterpriseModule> {
    return {
      ngModule: EnterpriseModule,
      providers: [],
    };
  }

  static forLazy(): NgModuleFactory<EnterpriseModule> {
    return new LazyModuleFactory(EnterpriseModule.forChild());
  }
  static forEarly(): NgModuleFactory<EnterpriseModule> {
    return new LazyModuleFactory(EnterpriseModule.forChild());
  }
}

import { NgModule, ModuleWithProviders, NgModuleFactory } from '@angular/core';
import { LazyModuleFactory, CoreModule } from '@abp/ng.core';
import { ApptAdminRoutingModule } from './appt-admin-routing.module';
import { SharedModule } from '@fs-tw/appt/admin/shared';


@NgModule({
  imports: [
    SharedModule,
    CoreModule,
    ApptAdminRoutingModule,

  ],
  exports: [
    SharedModule,
  ],
})
export class ApptAdminModule {
  static forChild(): ModuleWithProviders<ApptAdminModule> {
    return {
      ngModule: ApptAdminModule,
      providers: [],
    };
  }

  static forLazy(): NgModuleFactory<ApptAdminModule> {
    return new LazyModuleFactory(ApptAdminModule.forChild());
  }

}

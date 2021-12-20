import { ModuleWithProviders, NgModule, NgModuleFactory } from '@angular/core';
import { CoreModule, LazyModuleFactory } from '@abp/ng.core';
import { AuditLogManagementAdminRoutingModule } from './audit-log-management-admin-routing.module';
import { AuditLogManagementSharedModule } from '@fs-tw/audit-log-management/shared';

@NgModule({
  imports: [
    CoreModule,
    AuditLogManagementSharedModule,
    AuditLogManagementAdminRoutingModule
  ],
  providers:[
  ]
})
export class AuditLogManagementAdminModule {
  static forChild(): ModuleWithProviders<AuditLogManagementAdminModule> {
    return {
      ngModule: AuditLogManagementAdminModule,
      providers: [
      ],
    };
  }

  static forLazy(): NgModuleFactory<AuditLogManagementAdminModule> {
    return new LazyModuleFactory(AuditLogManagementAdminModule.forChild());
  }
  static forEarly(): NgModuleFactory<AuditLogManagementAdminModule> {
    return new LazyModuleFactory(AuditLogManagementAdminModule.forChild());
  }

}

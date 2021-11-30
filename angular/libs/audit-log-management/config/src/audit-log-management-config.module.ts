import { Injectable, Injector, ModuleWithProviders, NgModule } from '@angular/core';
import { AUDIT_LOG_MANAGEMENT_ROUTE_PROVIDERS } from './providers/route.provider';

@NgModule({
  imports: [],
  providers: [],
})
export class AuditLogManagementConfigModule {
  static forRoot(): ModuleWithProviders<AuditLogManagementConfigModule> {
    return {
      ngModule: AuditLogManagementConfigModule,
      providers: [
        AUDIT_LOG_MANAGEMENT_ROUTE_PROVIDERS,
      ],
    };
  }
}

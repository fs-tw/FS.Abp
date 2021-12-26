import { ModuleWithProviders, NgModule } from '@angular/core';
import { AUDIT_LOGGING_ROUTE_PROVIDERS } from './providers/route.provider';

@NgModule()
export class AuditLoggingConfigModule {
  static forRoot(): ModuleWithProviders<AuditLoggingConfigModule> {
    return {
      ngModule: AuditLoggingConfigModule,
      providers: [AUDIT_LOGGING_ROUTE_PROVIDERS],
    };
  }
}

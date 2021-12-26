import { NgModule, NgModuleFactory, ModuleWithProviders } from '@angular/core';
import { CoreModule, LazyModuleFactory } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { AuditLoggingComponent } from './components/audit-logging.component';
import { AuditLoggingRoutingModule } from './audit-logging-routing.module';

@NgModule({
  declarations: [AuditLoggingComponent],
  imports: [CoreModule, ThemeSharedModule, AuditLoggingRoutingModule],
  exports: [AuditLoggingComponent],
})
export class AuditLoggingModule {
  static forChild(): ModuleWithProviders<AuditLoggingModule> {
    return {
      ngModule: AuditLoggingModule,
      providers: [],
    };
  }

  static forLazy(): NgModuleFactory<AuditLoggingModule> {
    return new LazyModuleFactory(AuditLoggingModule.forChild());
  }
}

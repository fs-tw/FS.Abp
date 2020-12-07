import { CoreModule } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { EntityChangeDetailsComponent } from './components/entity-change-details.component';
import { EntityChangeModalComponent } from './components/entity-change-modal.component';
import { ENTITY_DETAILS_PROVIDERS, ENTITY_HISTORY_PROVIDERS } from './providers';
import { AUDIT_LOGGING_ROUTE_PROVIDERS } from './providers/route.provider';

@NgModule({
  entryComponents: [EntityChangeModalComponent],
  declarations: [EntityChangeDetailsComponent, EntityChangeModalComponent],
  exports: [EntityChangeDetailsComponent, EntityChangeModalComponent],
  imports: [CoreModule, ThemeSharedModule],
})
export class AuditLoggingConfigModule {
  static forRoot(): ModuleWithProviders<AuditLoggingConfigModule> {
    return {
      ngModule: AuditLoggingConfigModule,
      providers: [
        AUDIT_LOGGING_ROUTE_PROVIDERS,
        ENTITY_DETAILS_PROVIDERS,
        ENTITY_HISTORY_PROVIDERS,
      ],
    };
  }
}

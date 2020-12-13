import { CoreModule, LazyModuleFactory } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { ModuleWithProviders, NgModule, NgModuleFactory } from '@angular/core';
import { NgbDatepickerModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxsModule } from '@ngxs/store';
import { CommercialUiModule } from '@volo/abp.commercial.ng.ui';
import { AuditLoggingRoutingModule } from './audit-logging-routing.module';
import { AuditLogsComponent } from './components/audit-logs/audit-logs.component';
import { EntityChangesComponent } from './components/entity-change/entity-changes.component';
import { AverageExecutionDurationWidgetComponent } from './components/widgets/average-execution-duration-widget.component';
import { ErrorRateWidgetComponent } from './components/widgets/error-rate-widget.component';
import { AuditLoggingExtensionsGuard } from './guards/extensions.guard';
import { AuditLoggingConfigOptions } from './models/config-options';
import { AuditLoggingState } from './states/audit-logging.state';
import {
  AUDIT_LOGGING_ENTITY_ACTION_CONTRIBUTORS,
  AUDIT_LOGGING_ENTITY_PROP_CONTRIBUTORS,
  AUDIT_LOGGING_TOOLBAR_ACTION_CONTRIBUTORS,
} from './tokens/extensions.token';

@NgModule({
  declarations: [
    AuditLogsComponent,
    EntityChangesComponent,
    ErrorRateWidgetComponent,
    AverageExecutionDurationWidgetComponent,
  ],
  exports: [
    AuditLogsComponent,
    EntityChangesComponent,
    ErrorRateWidgetComponent,
    AverageExecutionDurationWidgetComponent,
  ],
  imports: [
    AuditLoggingRoutingModule,
    NgxsModule.forFeature([AuditLoggingState]),
    CoreModule,
    CommercialUiModule,
    ThemeSharedModule,
    NgbNavModule,
    NgbDatepickerModule,
  ],
  entryComponents: [EntityChangesComponent],
})
export class AuditLoggingModule {
  static forChild(
    options: AuditLoggingConfigOptions = {},
  ): ModuleWithProviders<AuditLoggingModule> {
    return {
      ngModule: AuditLoggingModule,
      providers: [
        {
          provide: AUDIT_LOGGING_ENTITY_ACTION_CONTRIBUTORS,
          useValue: options.entityActionContributors,
        },
        {
          provide: AUDIT_LOGGING_TOOLBAR_ACTION_CONTRIBUTORS,
          useValue: options.toolbarActionContributors,
        },
        {
          provide: AUDIT_LOGGING_ENTITY_PROP_CONTRIBUTORS,
          useValue: options.entityPropContributors,
        },
        AuditLoggingExtensionsGuard,
      ],
    };
  }

  static forLazy(options: AuditLoggingConfigOptions = {}): NgModuleFactory<AuditLoggingModule> {
    return new LazyModuleFactory(AuditLoggingModule.forChild(options));
  }
}

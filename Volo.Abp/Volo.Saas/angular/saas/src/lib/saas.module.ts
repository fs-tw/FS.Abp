import { CoreModule, LazyModuleFactory } from '@abp/ng.core';
import { FeatureManagementModule } from '@abp/ng.feature-management';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { ModuleWithProviders, NgModule, NgModuleFactory } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { NgxsModule } from '@ngxs/store';
import { CommercialUiModule } from '@volo/abp.commercial.ng.ui';
import { EditionsComponent } from './components/editions/editions.component';
import { TenantsComponent } from './components/tenants/tenants.component';
import { EditionsUsageWidgetComponent } from './components/widgets/editions-usage-widget.component';
import { LatestTenantsWidgetComponent } from './components/widgets/latest-tenants-widget.component';
import { SaasExtensionsGuard } from './guards/extensions.guard';
import { SaasConfigOptions } from './models/config-options';
import { SaasRoutingModule } from './saas-routing.module';
import { SaasState } from './states/saas.state';
import {
  SAAS_CREATE_FORM_PROP_CONTRIBUTORS,
  SAAS_EDIT_FORM_PROP_CONTRIBUTORS,
  SAAS_ENTITY_ACTION_CONTRIBUTORS,
  SAAS_ENTITY_PROP_CONTRIBUTORS,
  SAAS_TOOLBAR_ACTION_CONTRIBUTORS,
} from './tokens/extensions.token';

@NgModule({
  declarations: [
    TenantsComponent,
    EditionsComponent,
    EditionsUsageWidgetComponent,
    LatestTenantsWidgetComponent,
  ],
  exports: [
    TenantsComponent,
    EditionsComponent,
    EditionsUsageWidgetComponent,
    LatestTenantsWidgetComponent,
  ],
  imports: [
    SaasRoutingModule,
    NgxsModule.forFeature([SaasState]),
    NgxValidateCoreModule,
    CoreModule,
    CommercialUiModule,
    ThemeSharedModule,
    NgbDropdownModule,
    FeatureManagementModule,
  ],
})
export class SaasModule {
  static forChild(options: SaasConfigOptions = {}): ModuleWithProviders<SaasModule> {
    return {
      ngModule: SaasModule,
      providers: [
        {
          provide: SAAS_ENTITY_ACTION_CONTRIBUTORS,
          useValue: options.entityActionContributors,
        },
        {
          provide: SAAS_TOOLBAR_ACTION_CONTRIBUTORS,
          useValue: options.toolbarActionContributors,
        },
        {
          provide: SAAS_ENTITY_PROP_CONTRIBUTORS,
          useValue: options.entityPropContributors,
        },
        {
          provide: SAAS_CREATE_FORM_PROP_CONTRIBUTORS,
          useValue: options.createFormPropContributors,
        },
        {
          provide: SAAS_EDIT_FORM_PROP_CONTRIBUTORS,
          useValue: options.editFormPropContributors,
        },
        SaasExtensionsGuard,
      ],
    };
  }

  static forLazy(options: SaasConfigOptions = {}): NgModuleFactory<SaasModule> {
    return new LazyModuleFactory(SaasModule.forChild(options));
  }
}

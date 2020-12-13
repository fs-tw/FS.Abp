import { CoreModule, LazyModuleFactory } from '@abp/ng.core';
import { PermissionManagementModule } from '@abp/ng.permission-management';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { ModuleWithProviders, NgModule, NgModuleFactory } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbDatepickerModule, NgbDropdownModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { CommercialUiModule } from '@volo/abp.commercial.ng.ui';
import { ApiResourcesComponent } from './components/api-resources/api-resources.component';
import { ClientsComponent } from './components/clients/clients.component';
import { IdentityResourcesComponent } from './components/identity-resources/identity-resources.component';
import { PicklistComponent } from './components/picklist/picklist.component';
import { IdentityServerExtensionsGuard } from './guards/extensions.guard';
import { IdentityServerRoutingModule } from './identity-server-routing.module';
import { IdentityServerConfigOptions } from './models/config-options';
import {
  IDENTITY_SERVER_CREATE_FORM_PROP_CONTRIBUTORS,
  IDENTITY_SERVER_EDIT_FORM_PROP_CONTRIBUTORS,
  IDENTITY_SERVER_ENTITY_ACTION_CONTRIBUTORS,
  IDENTITY_SERVER_ENTITY_PROP_CONTRIBUTORS,
  IDENTITY_SERVER_TOOLBAR_ACTION_CONTRIBUTORS,
} from './tokens/extensions.token';
import { IdentityServerEntityBaseComponent } from './components/identity-server-entity-base/identity-server-entity-base.component';
import { ApiScopesComponent } from './components/api-scopes/api-scopes.component';

import { IdentityServerModalTabComponent } from './modals/identity-server-modal/tabs/identity-server-modal-tab.component';
import { IdentityServerModalComponent } from './modals/identity-server-modal/identity-server-modal.component';
import { IdentityServerModalClaimsTabComponent } from './modals/identity-server-modal/tabs/identity-server-modal-claims-tab/identity-server-modal-claims-tab.component';
import { IdentityServerModalInfoTabComponent } from './modals/identity-server-modal/tabs/identity-server-modal-info-tab/identity-server-modal-info-tab.component';
import { IdentityServerModalPropertiesTabComponent } from './modals/identity-server-modal/tabs/identity-server-modal-properties-tab/identity-server-modal-properties-tab.component';
import { IdentityServerModalSecretsTabComponent } from './modals/identity-server-modal/tabs/identity-server-modal-secrets-tab/identity-server-modal-secrets-tab.component';
import { ClientsModalUrisTabComponent } from './components/clients/modal-tabs/clients-modal-uris-tab/clients-modal-uris-tab.component';
import { IdentityServerModalTabGroupComponent } from './modals/identity-server-modal/tabs/identity-server-modal-tab-group.component';
import { ClientsModalResourcesTabComponent } from './components/clients/modal-tabs/clients-modal-resources-tab/clients-modal-resources-tab.component';
import { IdentityServerModalFreeTextValuesTabComponent } from './modals/identity-server-modal/tabs/identity-server-modal-free-text-values-tab/identity-server-modal-free-text-values-tab.component';
// tslint:disable-next-line:max-line-length
import { ClientsModalTokensTabComponent } from './components/clients/modal-tabs/clients-modal-tokens-tab/clients-modal-tokens-tab.component';
// tslint:disable-next-line:max-line-length
import { ClientsModalGrantTypesTabComponent } from './components/clients/modal-tabs/clients-modal-grant-types-tab/clients-modal-grant-types-tab.component';

const tabs = [
  IdentityServerModalComponent,
  IdentityServerModalInfoTabComponent,
  IdentityServerModalTabGroupComponent,
  IdentityServerModalTabComponent,
  IdentityServerModalClaimsTabComponent,
  IdentityServerModalPropertiesTabComponent,
  IdentityServerModalSecretsTabComponent,
  IdentityServerModalFreeTextValuesTabComponent,
];

const clientTabs = [
  ClientsModalUrisTabComponent,
  ClientsModalResourcesTabComponent,
  ClientsModalTokensTabComponent,
  ClientsModalGrantTypesTabComponent,
];

@NgModule({
  declarations: [
    IdentityResourcesComponent,
    PicklistComponent,
    ClientsComponent,
    ApiResourcesComponent,
    IdentityServerEntityBaseComponent,
    ApiScopesComponent,
    ...tabs,
    ...clientTabs,
  ],
  exports: [
    IdentityResourcesComponent,
    PicklistComponent,
    ClientsComponent,
    ApiResourcesComponent,
    IdentityServerEntityBaseComponent,
    ApiScopesComponent,
    ...tabs,
    ...clientTabs,
  ],
  imports: [
    IdentityServerRoutingModule,
    CoreModule,
    CommercialUiModule,
    ThemeSharedModule,
    PermissionManagementModule,
    NgbDropdownModule,
    NgbNavModule,
    NgxValidateCoreModule,
    NgbDatepickerModule,
    ReactiveFormsModule,
  ],
})
export class IdentityServerModule {
  static forChild(
    options: IdentityServerConfigOptions = {},
  ): ModuleWithProviders<IdentityServerModule> {
    return {
      ngModule: IdentityServerModule,
      providers: [
        {
          provide: IDENTITY_SERVER_ENTITY_ACTION_CONTRIBUTORS,
          useValue: options.entityActionContributors,
        },
        {
          provide: IDENTITY_SERVER_TOOLBAR_ACTION_CONTRIBUTORS,
          useValue: options.toolbarActionContributors,
        },
        {
          provide: IDENTITY_SERVER_ENTITY_PROP_CONTRIBUTORS,
          useValue: options.entityPropContributors,
        },
        {
          provide: IDENTITY_SERVER_CREATE_FORM_PROP_CONTRIBUTORS,
          useValue: options.createFormPropContributors,
        },
        {
          provide: IDENTITY_SERVER_EDIT_FORM_PROP_CONTRIBUTORS,
          useValue: options.editFormPropContributors,
        },
        IdentityServerExtensionsGuard,
      ],
    };
  }

  static forLazy(options: IdentityServerConfigOptions = {}): NgModuleFactory<IdentityServerModule> {
    return new LazyModuleFactory(IdentityServerModule.forChild(options));
  }
}

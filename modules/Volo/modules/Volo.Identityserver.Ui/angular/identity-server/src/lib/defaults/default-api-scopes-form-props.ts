import { ePropType, FormProp } from '@abp/ng.theme.shared/extensions';
import { Validators } from '@angular/forms';
import { ApiScopeWithDetailsDto } from '../proxy/api-scope/dtos/models';

export const DEFAULT_API_SCOPES_CREATE_FORM_PROPS = FormProp.createMany<ApiScopeWithDetailsDto>([
  {
    type: ePropType.String,
    name: 'name',
    displayName: 'AbpIdentityServer::Name',
    id: 'name',
    validators: () => [Validators.required],
  },
  {
    type: ePropType.String,
    name: 'displayName',
    displayName: 'AbpIdentityServer::DisplayName',
    id: 'displayName',
  },
  {
    type: ePropType.String,
    name: 'description',
    displayName: 'AbpIdentityServer::Description',
    id: 'description',
  },
  {
    type: ePropType.Boolean,
    name: 'required',
    displayName: 'AbpIdentityServer::Required',
    id: 'required',
    defaultValue: false,
  },
  {
    type: ePropType.Boolean,
    name: 'enabled',
    displayName: 'AbpIdentityServer::Enabled',
    id: 'enabled',
    defaultValue: false,
  },
  {
    type: ePropType.Boolean,
    name: 'showInDiscoveryDocument',
    displayName: 'AbpIdentityServer::ShowInDiscoveryDocument',
    id: 'showInDiscoveryDocument',
    defaultValue: false,
  },
  {
    type: ePropType.Boolean,
    name: 'emphasize',
    displayName: 'AbpIdentityServer::Emphasize',
    id: 'emphasize',
    defaultValue: false,
  },
]);

export const DEFAULT_API_SCOPES_EDIT_FORM_PROPS = DEFAULT_API_SCOPES_CREATE_FORM_PROPS.filter(
  prop => prop.name !== 'name',
);

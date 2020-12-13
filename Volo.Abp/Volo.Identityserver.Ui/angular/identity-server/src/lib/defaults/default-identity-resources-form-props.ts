import { ePropType, FormProp } from '@abp/ng.theme.shared/extensions';
import { Validators } from '@angular/forms';
import { IdentityResourceWithDetailsDto } from '../proxy/identity-resource/dtos/models';

export const DEFAULT_IDENTITY_RESOURCES_CREATE_FORM_PROPS = FormProp.createMany<
  IdentityResourceWithDetailsDto
>([
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
    name: 'enabled',
    displayName: 'AbpIdentityServer::Enabled',
    id: 'enabled',
    defaultValue: true,
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
    name: 'emphasize',
    displayName: 'AbpIdentityServer::Emphasize',
    id: 'emphasize',
    defaultValue: false,
  },
  {
    type: ePropType.Boolean,
    name: 'showInDiscoveryDocument',
    displayName: 'AbpIdentityServer::ShowInDiscoveryDocument',
    id: 'showInDiscoveryDocument',
    defaultValue: true,
  },
]);

export const DEFAULT_IDENTITY_RESOURCES_EDIT_FORM_PROPS = DEFAULT_IDENTITY_RESOURCES_CREATE_FORM_PROPS;

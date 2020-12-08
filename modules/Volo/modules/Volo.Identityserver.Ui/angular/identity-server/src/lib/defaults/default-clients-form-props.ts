import { ePropType, FormProp } from '@abp/ng.theme.shared/extensions';
import { Validators } from '@angular/forms';
import { ClientWithDetailsDto } from '../proxy/client/dtos/models';

export const DEFAULT_CLIENTS_CREATE_FORM_PROPS = FormProp.createMany<ClientWithDetailsDto>([
  {
    type: ePropType.String,
    name: 'clientId',
    displayName: 'AbpIdentityServer::ClientId',
    id: 'Client_ClientId',
    validators: () => [Validators.required],
  },
  {
    type: ePropType.String,
    name: 'clientName',
    displayName: 'AbpIdentityServer::ClientName',
    id: 'Client_ClientName',
    validators: () => [Validators.required],
  },
  {
    type: ePropType.Text,
    name: 'description',
    displayName: 'AbpIdentityServer::Description',
    id: 'Client_Description',
  },
  {
    type: ePropType.String,
    name: 'clientUri',
    displayName: 'AbpIdentityServer::ClientUri',
    id: 'Client_ClientUri',
  },
  {
    type: ePropType.String,
    name: 'logoUri',
    displayName: 'AbpIdentityServer::LogoUri',
    id: 'Client_LogoUri',
  },
  {
    type: ePropType.Boolean,
    name: 'requireConsent',
    displayName: 'AbpIdentityServer::RequireConsent',
    id: 'Client_RequireConsent',
    defaultValue: false,
  },
]);

export const DEFAULT_CLIENTS_EDIT_FORM_PROPS = DEFAULT_CLIENTS_CREATE_FORM_PROPS.filter(
  prop => prop.name !== 'clientId',
).concat(
  FormProp.createMany<ClientWithDetailsDto>([
    {
      type: ePropType.Boolean,
      name: 'requireRequestObject',
      displayName: 'AbpIdentityServer::RequireRequestObject',
      id: 'Client_RequireRequestObject',
      defaultValue: false,
    },
    {
      type: ePropType.Boolean,
      name: 'allowRememberConsent',
      displayName: 'AbpIdentityServer::AllowRememberConsent',
      id: 'Client_AllowRememberConsent',
      defaultValue: true,
    },

    {
      type: ePropType.Boolean,
      name: 'enabled',
      displayName: 'AbpIdentityServer::Enabled',
      id: 'Client_Enabled',
      defaultValue: false,
    },
    {
      type: ePropType.Boolean,
      name: 'allowOfflineAccess',
      displayName: 'AbpIdentityServer::AllowOfflineAccess',
      id: 'Client_AllowOfflineAccess',
      defaultValue: false,
    },
    {
      type: ePropType.String,
      name: 'frontChannelLogoutUri',
      displayName: 'AbpIdentityServer::FrontChannelLogoutUri',
      id: 'Client_FrontChannelLogoutUri',
    },
    {
      type: ePropType.Boolean,
      name: 'frontChannelLogoutSessionRequired',
      displayName: 'AbpIdentityServer::FrontChannelLogoutSessionRequired',
      id: 'Client_FrontChannelLogoutSessionRequired',
    },
    {
      type: ePropType.String,
      name: 'backChannelLogoutUri',
      displayName: 'AbpIdentityServer::BackChannelLogoutUri',
      id: 'Client_BackChannelLogoutUri',
    },
    {
      type: ePropType.Boolean,
      name: 'backChannelLogoutSessionRequired',
      displayName: 'AbpIdentityServer::BackChannelLogoutSessionRequired',
      id: 'Client_BackChannelLogoutSessionRequired',
      defaultValue: true,
    },
    {
      type: ePropType.String,
      name: 'allowedIdentityTokenSigningAlgorithms',
      displayName: 'AbpIdentityServer::AllowedIdentityTokenSigningAlgorithms',
      id: 'Client_AllowedIdentityTokenSigningAlgorithms',
    },
  ]),
);

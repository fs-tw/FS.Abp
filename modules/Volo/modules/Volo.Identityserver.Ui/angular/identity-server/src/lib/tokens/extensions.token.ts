import {
  CreateFormPropContributorCallback,
  EditFormPropContributorCallback,
  EntityActionContributorCallback,
  EntityPropContributorCallback,
  ToolbarActionContributorCallback,
} from '@abp/ng.theme.shared/extensions';
import { InjectionToken } from '@angular/core';
import { DEFAULT_API_RESOURCES_ENTITY_ACTIONS } from '../defaults/default-api-resources-entity-actions';
import { DEFAULT_API_RESOURCES_ENTITY_PROPS } from '../defaults/default-api-resources-entity-props';
import {
  DEFAULT_API_RESOURCES_CREATE_FORM_PROPS,
  DEFAULT_API_RESOURCES_EDIT_FORM_PROPS,
} from '../defaults/default-api-resources-form-props';
import { DEFAULT_API_RESOURCES_TOOLBAR_ACTIONS } from '../defaults/default-api-resources-toolbar-actions';
import { DEFAULT_CLIENTS_ENTITY_ACTIONS } from '../defaults/default-clients-entity-actions';
import { DEFAULT_CLIENTS_ENTITY_PROPS } from '../defaults/default-clients-entity-props';
import {
  DEFAULT_CLIENTS_CREATE_FORM_PROPS,
  DEFAULT_CLIENTS_EDIT_FORM_PROPS,
} from '../defaults/default-clients-form-props';
import { DEFAULT_CLIENTS_TOOLBAR_ACTIONS } from '../defaults/default-clients-toolbar-actions';
import { DEFAULT_IDENTITY_RESOURCES_ENTITY_ACTIONS } from '../defaults/default-identity-resources-entity-actions';
import { DEFAULT_IDENTITY_RESOURCES_ENTITY_PROPS } from '../defaults/default-identity-resources-entity-props';
import {
  DEFAULT_IDENTITY_RESOURCES_CREATE_FORM_PROPS,
  DEFAULT_IDENTITY_RESOURCES_EDIT_FORM_PROPS,
} from '../defaults/default-identity-resources-form-props';
import { DEFAULT_IDENTITY_RESOURCES_TOOLBAR_ACTIONS } from '../defaults/default-identity-resources-toolbar-actions';
import { eIdentityServerComponents } from '../enums/components';
import { ApiResourceWithDetailsDto } from '../proxy/api-resource/dtos/models';
import { ClientWithDetailsDto } from '../proxy/client/dtos/models';
import { IdentityResourceWithDetailsDto } from '../proxy/identity-resource/dtos/models';
import { DEFAULT_API_SCOPES_ENTITY_PROPS } from '../defaults/default-api-scopes-entity-props';
import { ApiScopeWithDetailsDto } from '../proxy/api-scope/dtos/models';
import { DEFAULT_API_SCOPES_ENTITY_ACTIONS } from '../defaults/default-api-scopes-entity-actions';
import { DEFAULT_API_SCOPES_TOOLBAR_ACTIONS } from '../defaults/default-api-scopes-toolbar-actions';
import {
  DEFAULT_API_SCOPES_CREATE_FORM_PROPS,
  DEFAULT_API_SCOPES_EDIT_FORM_PROPS,
} from '../defaults/default-api-scopes-form-props';

export const DEFAULT_IDENTITY_SERVER_ENTITY_ACTIONS = {
  [eIdentityServerComponents.ApiResources]: DEFAULT_API_RESOURCES_ENTITY_ACTIONS,
  [eIdentityServerComponents.Clients]: DEFAULT_CLIENTS_ENTITY_ACTIONS,
  [eIdentityServerComponents.IdentityResources]: DEFAULT_IDENTITY_RESOURCES_ENTITY_ACTIONS,
  [eIdentityServerComponents.ApiScopes]: DEFAULT_API_SCOPES_ENTITY_ACTIONS,
};

export const DEFAULT_IDENTITY_SERVER_TOOLBAR_ACTIONS = {
  [eIdentityServerComponents.ApiResources]: DEFAULT_API_RESOURCES_TOOLBAR_ACTIONS,
  [eIdentityServerComponents.Clients]: DEFAULT_CLIENTS_TOOLBAR_ACTIONS,
  [eIdentityServerComponents.IdentityResources]: DEFAULT_IDENTITY_RESOURCES_TOOLBAR_ACTIONS,
  [eIdentityServerComponents.ApiScopes]: DEFAULT_API_SCOPES_TOOLBAR_ACTIONS,
};

export const DEFAULT_IDENTITY_SERVER_ENTITY_PROPS = {
  [eIdentityServerComponents.ApiResources]: DEFAULT_API_RESOURCES_ENTITY_PROPS,
  [eIdentityServerComponents.Clients]: DEFAULT_CLIENTS_ENTITY_PROPS,
  [eIdentityServerComponents.IdentityResources]: DEFAULT_IDENTITY_RESOURCES_ENTITY_PROPS,
  [eIdentityServerComponents.ApiScopes]: DEFAULT_API_SCOPES_ENTITY_PROPS,
};

export const DEFAULT_IDENTITY_SERVER_CREATE_FORM_PROPS = {
  [eIdentityServerComponents.ApiResources]: DEFAULT_API_RESOURCES_CREATE_FORM_PROPS,
  [eIdentityServerComponents.Clients]: DEFAULT_CLIENTS_CREATE_FORM_PROPS,
  [eIdentityServerComponents.IdentityResources]: DEFAULT_IDENTITY_RESOURCES_CREATE_FORM_PROPS,
  [eIdentityServerComponents.ApiScopes]: DEFAULT_API_SCOPES_CREATE_FORM_PROPS,
};

export const DEFAULT_IDENTITY_SERVER_EDIT_FORM_PROPS = {
  [eIdentityServerComponents.ApiResources]: DEFAULT_API_RESOURCES_EDIT_FORM_PROPS,
  [eIdentityServerComponents.Clients]: DEFAULT_CLIENTS_EDIT_FORM_PROPS,
  [eIdentityServerComponents.IdentityResources]: DEFAULT_IDENTITY_RESOURCES_EDIT_FORM_PROPS,
  [eIdentityServerComponents.ApiScopes]: DEFAULT_API_SCOPES_EDIT_FORM_PROPS,
};

export const IDENTITY_SERVER_ENTITY_ACTION_CONTRIBUTORS = new InjectionToken<
  EntityActionContributors
>('IDENTITY_SERVER_ENTITY_ACTION_CONTRIBUTORS');

export const IDENTITY_SERVER_TOOLBAR_ACTION_CONTRIBUTORS = new InjectionToken<
  ToolbarActionContributors
>('IDENTITY_SERVER_TOOLBAR_ACTION_CONTRIBUTORS');

export const IDENTITY_SERVER_ENTITY_PROP_CONTRIBUTORS = new InjectionToken<EntityPropContributors>(
  'IDENTITY_SERVER_ENTITY_PROP_CONTRIBUTORS',
);

export const IDENTITY_SERVER_CREATE_FORM_PROP_CONTRIBUTORS = new InjectionToken<
  CreateFormPropContributors
>('IDENTITY_SERVER_CREATE_FORM_PROP_CONTRIBUTORS');

export const IDENTITY_SERVER_EDIT_FORM_PROP_CONTRIBUTORS = new InjectionToken<
  EditFormPropContributors
>('IDENTITY_SERVER_EDIT_FORM_PROP_CONTRIBUTORS');

// Fix for TS4023 -> https://github.com/microsoft/TypeScript/issues/9944#issuecomment-254693497
type EntityActionContributors = Partial<{
  [eIdentityServerComponents.ApiResources]: EntityActionContributorCallback<
    ApiResourceWithDetailsDto
  >[];
  [eIdentityServerComponents.Clients]: EntityActionContributorCallback<ClientWithDetailsDto>[];
  [eIdentityServerComponents.IdentityResources]: EntityActionContributorCallback<
    IdentityResourceWithDetailsDto
  >[];
  [eIdentityServerComponents.ApiScopes]: EntityActionContributorCallback<ApiScopeWithDetailsDto>[];
}>;
type ToolbarActionContributors = Partial<{
  [eIdentityServerComponents.ApiResources]: ToolbarActionContributorCallback<
    ApiResourceWithDetailsDto[]
  >[];
  [eIdentityServerComponents.Clients]: ToolbarActionContributorCallback<ClientWithDetailsDto[]>[];
  [eIdentityServerComponents.IdentityResources]: ToolbarActionContributorCallback<
    IdentityResourceWithDetailsDto[]
  >[];
  [eIdentityServerComponents.ApiScopes]: ToolbarActionContributorCallback<
    ApiScopeWithDetailsDto[]
  >[];
}>;
type EntityPropContributors = Partial<{
  [eIdentityServerComponents.ApiResources]: EntityPropContributorCallback<
    ApiResourceWithDetailsDto
  >[];
  [eIdentityServerComponents.Clients]: EntityPropContributorCallback<ClientWithDetailsDto>[];
  [eIdentityServerComponents.IdentityResources]: EntityPropContributorCallback<
    IdentityResourceWithDetailsDto
  >[];
  [eIdentityServerComponents.ApiScopes]: EntityPropContributorCallback<ApiScopeWithDetailsDto>[];
}>;
type CreateFormPropContributors = Partial<{
  [eIdentityServerComponents.ApiResources]: CreateFormPropContributorCallback<
    ApiResourceWithDetailsDto
  >[];
  [eIdentityServerComponents.Clients]: CreateFormPropContributorCallback<ClientWithDetailsDto>[];
  [eIdentityServerComponents.IdentityResources]: CreateFormPropContributorCallback<
    IdentityResourceWithDetailsDto
  >[];
  [eIdentityServerComponents.ApiScopes]: CreateFormPropContributorCallback<
    ApiScopeWithDetailsDto
  >[];
}>;
type EditFormPropContributors = Partial<{
  [eIdentityServerComponents.ApiResources]: EditFormPropContributorCallback<
    ApiResourceWithDetailsDto
  >[];
  [eIdentityServerComponents.Clients]: EditFormPropContributorCallback<ClientWithDetailsDto>[];
  [eIdentityServerComponents.IdentityResources]: EditFormPropContributorCallback<
    IdentityResourceWithDetailsDto
  >[];
  [eIdentityServerComponents.ApiScopes]: CreateFormPropContributorCallback<
    ApiScopeWithDetailsDto
  >[];
}>;

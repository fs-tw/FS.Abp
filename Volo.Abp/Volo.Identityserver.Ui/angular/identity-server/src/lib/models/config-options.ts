import {
  CreateFormPropContributorCallback,
  EditFormPropContributorCallback,
  EntityActionContributorCallback,
  EntityPropContributorCallback,
  ToolbarActionContributorCallback,
} from '@abp/ng.theme.shared/extensions';
import { eIdentityServerComponents } from '../enums/components';
import { ApiResourceWithDetailsDto } from '../proxy/api-resource/dtos/models';
import { ClientWithDetailsDto } from '../proxy/client/dtos/models';
import { IdentityResourceWithDetailsDto } from '../proxy/identity-resource/dtos/models';
import { ApiScopeWithDetailsDto } from '../proxy/api-scope/dtos/models';

export type IdentityServerEntityActionContributors = Partial<{
  [eIdentityServerComponents.ApiResources]: EntityActionContributorCallback<
    ApiResourceWithDetailsDto
  >[];
  [eIdentityServerComponents.Clients]: EntityActionContributorCallback<ClientWithDetailsDto>[];
  [eIdentityServerComponents.IdentityResources]: EntityActionContributorCallback<
    IdentityResourceWithDetailsDto
  >[];
  [eIdentityServerComponents.ApiScopes]: EntityActionContributorCallback<ApiScopeWithDetailsDto>[];
}>;

export type IdentityServerToolbarActionContributors = Partial<{
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

export type IdentityServerEntityPropContributors = Partial<{
  [eIdentityServerComponents.ApiResources]: EntityPropContributorCallback<
    ApiResourceWithDetailsDto
  >[];
  [eIdentityServerComponents.Clients]: EntityPropContributorCallback<ClientWithDetailsDto>[];
  [eIdentityServerComponents.IdentityResources]: EntityPropContributorCallback<
    IdentityResourceWithDetailsDto
  >[];
  [eIdentityServerComponents.ApiScopes]: EntityPropContributorCallback<ApiScopeWithDetailsDto>[];
}>;

export type IdentityServerCreateFormPropContributors = Partial<{
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

export type IdentityServerEditFormPropContributors = Partial<{
  [eIdentityServerComponents.ApiResources]: EditFormPropContributorCallback<
    ApiResourceWithDetailsDto
  >[];
  [eIdentityServerComponents.Clients]: EditFormPropContributorCallback<ClientWithDetailsDto>[];
  [eIdentityServerComponents.IdentityResources]: EditFormPropContributorCallback<
    IdentityResourceWithDetailsDto
  >[];
  [eIdentityServerComponents.ApiScopes]: EditFormPropContributorCallback<ApiScopeWithDetailsDto>[];
}>;

export interface IdentityServerConfigOptions {
  entityActionContributors?: IdentityServerEntityActionContributors;
  toolbarActionContributors?: IdentityServerToolbarActionContributors;
  entityPropContributors?: IdentityServerEntityPropContributors;
  createFormPropContributors?: IdentityServerCreateFormPropContributors;
  editFormPropContributors?: IdentityServerEditFormPropContributors;
}

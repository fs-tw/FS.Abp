import {
  CreateFormPropContributorCallback,
  EditFormPropContributorCallback,
  EntityActionContributorCallback,
  EntityPropContributorCallback,
  ToolbarActionContributorCallback,
} from '@abp/ng.theme.shared/extensions';
import { eSaasComponents } from '../enums/components';
import { EditionDto, SaasTenantDto } from '../proxy/host/dtos/models';

export type SaasEntityActionContributors = Partial<{
  [eSaasComponents.Editions]: EntityActionContributorCallback<EditionDto>[];
  [eSaasComponents.Tenants]: EntityActionContributorCallback<SaasTenantDto>[];
}>;

export type SaasToolbarActionContributors = Partial<{
  [eSaasComponents.Editions]: ToolbarActionContributorCallback<EditionDto[]>[];
  [eSaasComponents.Tenants]: ToolbarActionContributorCallback<SaasTenantDto[]>[];
}>;

export type SaasEntityPropContributors = Partial<{
  [eSaasComponents.Editions]: EntityPropContributorCallback<EditionDto>[];
  [eSaasComponents.Tenants]: EntityPropContributorCallback<SaasTenantDto>[];
}>;

export type SaasCreateFormPropContributors = Partial<{
  [eSaasComponents.Editions]: CreateFormPropContributorCallback<EditionDto>[];
  [eSaasComponents.Tenants]: CreateFormPropContributorCallback<SaasTenantDto>[];
}>;

export type SaasEditFormPropContributors = Partial<{
  [eSaasComponents.Editions]: EditFormPropContributorCallback<EditionDto>[];
  [eSaasComponents.Tenants]: EditFormPropContributorCallback<SaasTenantDto>[];
}>;

export interface SaasConfigOptions {
  entityActionContributors?: SaasEntityActionContributors;
  toolbarActionContributors?: SaasToolbarActionContributors;
  entityPropContributors?: SaasEntityPropContributors;
  createFormPropContributors?: SaasCreateFormPropContributors;
  editFormPropContributors?: SaasEditFormPropContributors;
}

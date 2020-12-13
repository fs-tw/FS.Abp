import {
  CreateFormPropContributorCallback,
  EditFormPropContributorCallback,
  EntityActionContributorCallback,
  EntityPropContributorCallback,
  ToolbarActionContributorCallback,
} from '@abp/ng.theme.shared/extensions';
import { InjectionToken } from '@angular/core';
import { DEFAULT_EDITIONS_ENTITY_ACTIONS } from '../defaults/default-editions-entity-actions';
import { DEFAULT_EDITIONS_ENTITY_PROPS } from '../defaults/default-editions-entity-props';
import {
  DEFAULT_EDITIONS_CREATE_FORM_PROPS,
  DEFAULT_EDITIONS_EDIT_FORM_PROPS,
} from '../defaults/default-editions-form-props';
import { DEFAULT_EDITIONS_TOOLBAR_ACTIONS } from '../defaults/default-editions-toolbar-actions';
import { DEFAULT_TENANTS_ENTITY_ACTIONS } from '../defaults/default-tenants-entity-actions';
import { DEFAULT_TENANTS_ENTITY_PROPS } from '../defaults/default-tenants-entity-props';
import {
  DEFAULT_TENANTS_CREATE_FORM_PROPS,
  DEFAULT_TENANTS_EDIT_FORM_PROPS,
} from '../defaults/default-tenants-form-props';
import { DEFAULT_TENANTS_TOOLBAR_ACTIONS } from '../defaults/default-tenants-toolbar-actions';
import { eSaasComponents } from '../enums/components';
import { EditionDto, SaasTenantDto } from '../proxy/host/dtos/models';

export const DEFAULT_SAAS_ENTITY_ACTIONS = {
  [eSaasComponents.Editions]: DEFAULT_EDITIONS_ENTITY_ACTIONS,
  [eSaasComponents.Tenants]: DEFAULT_TENANTS_ENTITY_ACTIONS,
};

export const DEFAULT_SAAS_TOOLBAR_ACTIONS = {
  [eSaasComponents.Editions]: DEFAULT_EDITIONS_TOOLBAR_ACTIONS,
  [eSaasComponents.Tenants]: DEFAULT_TENANTS_TOOLBAR_ACTIONS,
};

export const DEFAULT_SAAS_ENTITY_PROPS = {
  [eSaasComponents.Editions]: DEFAULT_EDITIONS_ENTITY_PROPS,
  [eSaasComponents.Tenants]: DEFAULT_TENANTS_ENTITY_PROPS,
};

export const DEFAULT_SAAS_CREATE_FORM_PROPS = {
  [eSaasComponents.Editions]: DEFAULT_EDITIONS_CREATE_FORM_PROPS,
  [eSaasComponents.Tenants]: DEFAULT_TENANTS_CREATE_FORM_PROPS,
};

export const DEFAULT_SAAS_EDIT_FORM_PROPS = {
  [eSaasComponents.Editions]: DEFAULT_EDITIONS_EDIT_FORM_PROPS,
  [eSaasComponents.Tenants]: DEFAULT_TENANTS_EDIT_FORM_PROPS,
};

export const SAAS_ENTITY_ACTION_CONTRIBUTORS = new InjectionToken<EntityActionContributors>(
  'SAAS_ENTITY_ACTION_CONTRIBUTORS',
);

export const SAAS_TOOLBAR_ACTION_CONTRIBUTORS = new InjectionToken<ToolbarActionContributors>(
  'SAAS_TOOLBAR_ACTION_CONTRIBUTORS',
);

export const SAAS_ENTITY_PROP_CONTRIBUTORS = new InjectionToken<EntityPropContributors>(
  'SAAS_ENTITY_PROP_CONTRIBUTORS',
);

export const SAAS_CREATE_FORM_PROP_CONTRIBUTORS = new InjectionToken<CreateFormPropContributors>(
  'SAAS_CREATE_FORM_PROP_CONTRIBUTORS',
);

export const SAAS_EDIT_FORM_PROP_CONTRIBUTORS = new InjectionToken<EditFormPropContributors>(
  'SAAS_EDIT_FORM_PROP_CONTRIBUTORS',
);

// Fix for TS4023 -> https://github.com/microsoft/TypeScript/issues/9944#issuecomment-254693497
type EntityActionContributors = Partial<{
  [eSaasComponents.Editions]: EntityActionContributorCallback<EditionDto>[];
  [eSaasComponents.Tenants]: EntityActionContributorCallback<SaasTenantDto>[];
}>;
type ToolbarActionContributors = Partial<{
  [eSaasComponents.Editions]: ToolbarActionContributorCallback<EditionDto[]>[];
  [eSaasComponents.Tenants]: ToolbarActionContributorCallback<SaasTenantDto[]>[];
}>;
type EntityPropContributors = Partial<{
  [eSaasComponents.Editions]: EntityPropContributorCallback<EditionDto>[];
  [eSaasComponents.Tenants]: EntityPropContributorCallback<SaasTenantDto>[];
}>;
type CreateFormPropContributors = Partial<{
  [eSaasComponents.Editions]: CreateFormPropContributorCallback<EditionDto>[];
  [eSaasComponents.Tenants]: CreateFormPropContributorCallback<SaasTenantDto>[];
}>;
type EditFormPropContributors = Partial<{
  [eSaasComponents.Editions]: EditFormPropContributorCallback<EditionDto>[];
  [eSaasComponents.Tenants]: EditFormPropContributorCallback<SaasTenantDto>[];
}>;

import {
  EntityActionContributorCallback,
  EntityPropContributorCallback,
  ToolbarActionContributorCallback,
} from '@abp/ng.theme.shared/extensions';
import { InjectionToken } from '@angular/core';
import { DEFAULT_TEXT_TEMPLATES_ENTITY_PROPS } from '../defaults/default-text-tamplates-entity-props';
import { DEFAULT_TEXT_TEMPLATES_ENTITY_ACTIONS } from '../defaults/default-text-templates-entity-actions';
import { DEFAULT_TEXT_TEMPLATES_TOOLBAR_ACTIONS } from '../defaults/default-text-templates-toolbar-actions';
import { eTextTemplateManagementComponents } from '../enums/components';
import { TemplateDefinitionDto } from '../proxy/text-templates/models';

export const DEFAULT_TEXT_TEMPLATE_MANAGEMENT_ENTITY_ACTIONS = {
  [eTextTemplateManagementComponents.TextTemplates]: DEFAULT_TEXT_TEMPLATES_ENTITY_ACTIONS,
};

export const DEFAULT_TEXT_TEMPLATE_MANAGEMENT_TOOLBAR_ACTIONS = {
  [eTextTemplateManagementComponents.TextTemplates]: DEFAULT_TEXT_TEMPLATES_TOOLBAR_ACTIONS,
};

export const DEFAULT_TEXT_TEMPLATE_MANAGEMENT_ENTITY_PROPS = {
  [eTextTemplateManagementComponents.TextTemplates]: DEFAULT_TEXT_TEMPLATES_ENTITY_PROPS,
};

export const TEXT_TEMPLATE_MANAGEMENT_ENTITY_ACTION_CONTRIBUTORS = new InjectionToken<
  EntityActionContributors
>('TEXT_TEMPLATE_MANAGEMENT_ENTITY_ACTION_CONTRIBUTORS');

export const TEXT_TEMPLATE_MANAGEMENT_TOOLBAR_ACTION_CONTRIBUTORS = new InjectionToken<
  ToolbarActionContributors
>('TEXT_TEMPLATE_MANAGEMENT_TOOLBAR_ACTION_CONTRIBUTORS');

export const TEXT_TEMPLATE_MANAGEMENT_ENTITY_PROP_CONTRIBUTORS = new InjectionToken<
  EntityPropContributors
>('TEXT_TEMPLATE_MANAGEMENT_ENTITY_PROP_CONTRIBUTORS');

// Fix for TS4023 -> https://github.com/microsoft/TypeScript/issues/9944#issuecomment-254693497
type EntityActionContributors = Partial<{
  [eTextTemplateManagementComponents.TextTemplates]: EntityActionContributorCallback<
    TemplateDefinitionDto
  >[];
}>;
type ToolbarActionContributors = Partial<{
  [eTextTemplateManagementComponents.TextTemplates]: ToolbarActionContributorCallback<
    TemplateDefinitionDto[]
  >[];
}>;
type EntityPropContributors = Partial<{
  [eTextTemplateManagementComponents.TextTemplates]: EntityPropContributorCallback<
    TemplateDefinitionDto
  >[];
}>;

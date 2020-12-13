import {
  EntityActionContributorCallback,
  EntityPropContributorCallback,
  ToolbarActionContributorCallback,
} from '@abp/ng.theme.shared/extensions';
import { eTextTemplateManagementComponents } from '../enums/components';
import { TemplateDefinitionDto } from '../proxy/text-templates/models';

export type TextTemplateManagementEntityActionContributors = Partial<{
  [eTextTemplateManagementComponents.TextTemplates]: EntityActionContributorCallback<
    TemplateDefinitionDto
  >[];
}>;

export type TextTemplateManagementToolbarActionContributors = Partial<{
  [eTextTemplateManagementComponents.TextTemplates]: ToolbarActionContributorCallback<
    TemplateDefinitionDto[]
  >[];
}>;

export type TextTemplateManagementEntityPropContributors = Partial<{
  [eTextTemplateManagementComponents.TextTemplates]: EntityPropContributorCallback<
    TemplateDefinitionDto
  >[];
}>;

export interface TextTemplateManagementConfigOptions {
  entityActionContributors?: TextTemplateManagementEntityActionContributors;
  toolbarActionContributors?: TextTemplateManagementToolbarActionContributors;
  entityPropContributors?: TextTemplateManagementEntityPropContributors;
}

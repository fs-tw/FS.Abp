import { ToolbarAction } from '@abp/ng.theme.shared/extensions';
import { TemplateDefinitionDto } from '../proxy/text-templates/models';

export const DEFAULT_TEXT_TEMPLATES_TOOLBAR_ACTIONS = ToolbarAction.createMany<
  TemplateDefinitionDto[]
>([]);

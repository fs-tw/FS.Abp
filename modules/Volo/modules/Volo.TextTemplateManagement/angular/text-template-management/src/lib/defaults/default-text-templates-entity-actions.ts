import { EntityAction } from '@abp/ng.theme.shared/extensions';
import { TextTemplatesComponent } from '../components/text-templates/text-templates.component';
import { TemplateDefinitionDto } from '../proxy/text-templates/models';

export const DEFAULT_TEXT_TEMPLATES_ENTITY_ACTIONS = EntityAction.createMany<TemplateDefinitionDto>(
  [
    {
      text: 'TextTemplateManagement::EditContents',
      action: data => {
        const component = data.getInjected(TextTemplatesComponent);
        component.editContents(data.record);
      },
      permission: 'TextTemplateManagement.TextTemplates.EditContents',
    },
  ],
);

import { EntityProp, ePropType } from '@abp/ng.theme.shared/extensions';
import { TemplateDefinitionDto } from '../proxy/text-templates/models';

export const DEFAULT_TEXT_TEMPLATES_ENTITY_PROPS = EntityProp.createMany<TemplateDefinitionDto>([
  {
    type: ePropType.String,
    name: 'displayName',
    displayName: 'TextTemplateManagement::Name',
    columnWidth: 300,
  },
  {
    type: ePropType.Boolean,
    name: 'isInlineLocalized',
    displayName: 'TextTemplateManagement::IsInlineLocalized',
    columnWidth: 150,
  },
  {
    type: ePropType.Boolean,
    name: 'isLayout',
    displayName: 'TextTemplateManagement::IsLayout',
    columnWidth: 150,
  },
  {
    type: ePropType.String,
    name: 'layout',
    displayName: 'TextTemplateManagement::Layout',
    columnWidth: 300,
  },
  {
    type: ePropType.String,
    name: 'defaultCultureName',
    displayName: 'TextTemplateManagement::DefaultCultureName',
    columnWidth: 150,
  },
]);

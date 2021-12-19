import { EntityProp, ePropType } from '@abp/ng.theme.shared/extensions';
import { Fs } from '@fs-tw/cms-kit-management/proxy/cms-kit-management';

export function GetDefaults(x: any,): EntityProp<Fs.CmsKitManagement.Contents.Dtos.ContentDefinitionDto>[]
{
  console.log(x)
  return CONTENT_DEFINITION_ENTITY_PROPS;
}

export const CONTENT_DEFINITION_ENTITY_PROPS = EntityProp.createMany<Fs.CmsKitManagement.Contents.Dtos.ContentDefinitionDto>([
  {
    type: ePropType.String,
    name: 'entityType',
    displayName: 'CmsKit::EntityType',
    sortable: true,
    columnWidth: 90,
  },
  {
    type: ePropType.String,
    name: 'displayName',
    displayName: 'CmsKit::DisplayName',
    sortable: true,
    columnWidth: 90,
  }
]);

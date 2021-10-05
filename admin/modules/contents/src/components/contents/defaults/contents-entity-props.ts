import { EntityProp, ePropType } from '@abp/ng.theme.shared/extensions';
import { Fs } from '@fs-tw/cms-kit-management/proxy/cms-kit-management';

export const CONTENTS_ENTITY_PROPS = EntityProp.createMany<Fs.CmsKitManagement.Contents.Dtos.ContentDto>([
  {
    type: ePropType.String,
    name: 'entityType',
    displayName: 'CmsKit::EntityType',
    sortable: true,
    columnWidth: 90,
  },
  {
    type: ePropType.String,
    name: 'value',
    displayName: 'CmsKit::Value',
    sortable: true,
    columnWidth: 90,
  }
]);

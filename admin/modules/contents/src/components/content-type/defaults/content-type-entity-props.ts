import { EntityProp, ePropType } from '@abp/ng.theme.shared/extensions';
import { Fs } from '@fs-tw/cms-kit-management/proxy/cms-kit-management';

export const CONTENT_TYPE_ENTITY_PROPS = EntityProp.createMany<Fs.CmsKitManagement.Contents.Dtos.ContentTypeDto>([
  {
    type: ePropType.String,
    name: 'displayName',
    displayName: 'CmsKit::DisplayName',
    sortable: true,
    columnWidth: 90,
  },
  {
    type: ePropType.String,
    name: 'type',
    displayName: 'CmsKit::Type',
    sortable: true,
    columnWidth: 90,
  }
]);

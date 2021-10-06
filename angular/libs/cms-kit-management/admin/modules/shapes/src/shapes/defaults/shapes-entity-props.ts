import { EntityProp, ePropType } from '@abp/ng.theme.shared/extensions';
import { Fs } from '@fs-tw/cms-kit-management/proxy/cms-kit-management';

export const SHAPES_ENTITY_PROPS = EntityProp.createMany<Fs.CmsKitManagement.Shapes.Dtos.ShapeDto>([
  {
    type: ePropType.String,
    name: 'entityType',
    displayName: 'CmsKit::EntityType',
    sortable: true,
    columnWidth: 90,
  }
]);

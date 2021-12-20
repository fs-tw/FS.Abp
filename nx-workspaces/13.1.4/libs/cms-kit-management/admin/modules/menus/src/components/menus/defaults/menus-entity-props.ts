import { EntityProp, ePropType } from '@abp/ng.theme.shared/extensions';
import { Volo } from '@fs-tw/cms-kit-management/proxy/cms-kit';

export const MENUS_ENTITY_PROPS = EntityProp.createMany<Volo.CmsKit.Menus.MenuItemDto>([
  {
    type: ePropType.String,
    name: 'displayName',
    displayName: 'CmsKit::DisplayName',
    sortable: true,
    columnWidth: 90,
  },{
    type: ePropType.Boolean,
    name: 'isActive',
    displayName: 'CmsKit::IsActive',
    sortable: true,
    columnWidth: 90,
  },{
    type: ePropType.String,
    name: 'url',
    displayName: 'CmsKit::Url',
    sortable: true,
    columnWidth: 90,
  },{
    type: ePropType.String,
    name: 'target',
    displayName: 'CmsKit::Target',
    sortable: true,
    columnWidth: 90,
  },
]);

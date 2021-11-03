import {
  EntityProp,
  ePropType,
  EntityPropList,
} from '@abp/ng.theme.shared/extensions';
import { Volo } from '@fs-tw/cms-kit-management/proxy/cms-kit';

export const BLOGS_ENTITY_PROPS =
  EntityProp.createMany<Volo.CmsKit.Admin.Blogs.BlogDto>([
    {
      type: ePropType.String,
      name: 'name',
      displayName: 'Name',
      sortable: true,
      columnWidth: 50,
    },
    {
      type: ePropType.String,
      name: 'slug',
      displayName: 'CmsKit::Slug',
      sortable: true,
      columnWidth: 50,
    },
  ]);

export const BLOGS_ENTITY_PROPS_CON = (
  propList: EntityPropList<Volo.CmsKit.Admin.Blogs.BlogDto>
) => {
  
};

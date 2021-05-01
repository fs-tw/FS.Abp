import { EntityProp, ePropType } from '@abp/ng.theme.shared/extensions';
import { Volo } from '@fs-tw/cms-kit-management/proxy';

export const DEFAULT_BLOGS_ENTITY_PROPS = EntityProp.createMany<Volo.CmsKit.Admin.Blogs.BlogDto>([
  {
    type: ePropType.String,
    name: 'name',
    displayName: 'CmsKit::Name',
    sortable: true,
    columnWidth: 90,
  },
  {
    type: ePropType.String,
    name: 'slug',
    displayName: 'CmsKit::Slug',
    sortable: true,
    columnWidth: 90,
  }
]);

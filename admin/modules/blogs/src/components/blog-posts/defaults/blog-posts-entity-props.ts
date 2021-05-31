import { EntityProp, ePropType } from '@abp/ng.theme.shared/extensions';
import { Volo } from '@fs-tw/cms-kit-management/proxy';

export const BLOG_POSTS_ENTITY_PROPS = EntityProp.createMany<Volo.CmsKit.Admin.Blogs.BlogPostListDto>([
  {
    type: ePropType.String,
    name: 'blogName',
    displayName: 'CmsKit::Blog',
    sortable: true,
    columnWidth: 90,
  },
  {
    type: ePropType.String,
    name: 'title',
    displayName: 'CmsKit::Title',
    sortable: true,
    columnWidth: 90,
  },
  {
    type: ePropType.String,
    name: 'slug',
    displayName: 'CmsKit::Slug',
    sortable: true,
    columnWidth: 90,
  },
  {
    type: ePropType.DateTime,
    name: 'creationTime',
    displayName: 'CmsKit::CreationTime',
    sortable: true,
    columnWidth: 90,
  }  
]);

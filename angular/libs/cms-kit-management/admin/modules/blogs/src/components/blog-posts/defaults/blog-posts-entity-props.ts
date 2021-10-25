import { EntityProp, ePropType } from '@abp/ng.theme.shared/extensions';
import { Volo } from '@fs-tw/cms-kit-management/proxy/cms-kit';

export const BLOG_POSTS_ENTITY_PROPS = EntityProp.createMany<Volo.CmsKit.Admin.Blogs.BlogPostDto>([
  {
    type: ePropType.String,
    name: 'blogName',
    displayName: 'Blog Name',
    sortable: true,
    columnWidth: 90,
  },
  {
    type: ePropType.String,
    name: 'title',
    displayName: 'Title',
    sortable: true,
    columnWidth: 90,
  },
  {
    type: ePropType.String,
    name: 'slug',
    displayName: 'Slug',
    sortable: true,
    columnWidth: 90,
  },
  {
    type: ePropType.String,
    name: 'shortDescription',
    displayName: 'Short Description',
    sortable: true,
    columnWidth: 90,
  },
  {
    type: ePropType.String,
    name: 'content',
    displayName: 'Content',
    sortable: true,
    columnWidth: 90,
  }
]);

import { EntityProp, ePropType } from '@abp/ng.theme.shared/extensions';
import { Volo } from '@fs-tw/cms-kit-management/proxy';

export const PAGES_ENTITY_PROPS = EntityProp.createMany<Volo.CmsKit.Admin.Pages.PageDto>([
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
    type: ePropType.String,
    name: 'content',
    displayName: 'CmsKit::Content',
    sortable: true,
    columnWidth: 90,
  },
  {
    type: ePropType.String,
    name: 'script',
    displayName: 'CmsKit::Script',
    sortable: true,
    columnWidth: 90,
  },
  {
    type: ePropType.String,
    name: 'style',
    displayName: 'CmsKit::Style',
    sortable: true,
    columnWidth: 90,
  }
]);

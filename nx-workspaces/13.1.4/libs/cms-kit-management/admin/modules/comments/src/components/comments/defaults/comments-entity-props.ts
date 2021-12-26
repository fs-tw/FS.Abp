import { EntityProp, ePropType } from '@abp/ng.theme.shared/extensions';
import { Volo } from '@fs-tw/cms-kit-management/proxy/cms-kit';

export const COMMENTS_ENTITY_PROPS = EntityProp.createMany<Volo.CmsKit.Admin.Comments.CommentWithAuthorDto>([
  {
    type: ePropType.String,
    name: 'entityType',
    displayName: 'CmsKit::EntityType',
    sortable: true,
    columnWidth: 90,
  },
  {
    type: ePropType.String,
    name: 'text',
    displayName: 'CmsKit::Text',
    sortable: true,
    columnWidth: 90,
  },
]);

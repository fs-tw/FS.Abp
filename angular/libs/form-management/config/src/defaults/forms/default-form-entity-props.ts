import { EntityProp, ePropType } from '@abp/ng.theme.shared/extensions';
import { Volo } from '@fs-tw/form-management/proxy';

export const DEFAULT_FORM_ENTITY_PROPS = EntityProp.createMany<Volo.Forms.Forms.FormDto>([
  {
    type: ePropType.String,
    name: 'title',
    displayName: 'Forms::Title',
    sortable: true,
    columnWidth: 90,
  },
  {
    type: ePropType.String,
    name: 'description',
    displayName: 'Forms::Description',
    sortable: true,
    columnWidth: 90,
  },
  {
    type: ePropType.DateTime,
    name: 'lastModificationTime',
    displayName: 'Forms::UpdatedAt',
    sortable: true,
    columnWidth: 90,
  },
  {
    type: ePropType.DateTime,
    name: 'creationTime',
    displayName: 'Forms::CreatedAt',
    sortable: true,
    columnWidth: 90,
  }
]);

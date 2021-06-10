import { EntityAction } from '@abp/ng.theme.shared/extensions';
import { Volo } from '@fs-tw/form-management/proxy';
import { notify } from '@fs-tw/theme-alain/shared/extensions';

export const FORMS_ENTITY_ACTIONS = EntityAction.createMany<Volo.Forms.Forms.FormDto>(
  [
    {
      text: 'Forms::Edit',
      action: notify('Edit'),
      permission: 'Forms.Form',
      //icon: 'fa fa-plus',
    },
    {
      text: 'Forms::Delete',
      action: notify('Delete'),
      permission: 'Forms.Form.Delete',
      //visible: data => !data.record.isStatic,
    },
  ]
);

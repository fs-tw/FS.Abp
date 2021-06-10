import { EntityAction } from '@abp/ng.theme.shared/extensions';
import { Volo } from '@fs-tw/form-management/proxy';
import { EntityActionList } from '@abp/ng.theme.shared/extensions';
import { notify } from '@fs-tw/theme-alain/shared/extensions';

const VIEW_ACTION = EntityAction.create<Volo.Forms.Forms.FormDto>({
  text: 'Forms::View',
  action: notify('View'),
  permission: 'Forms.Form',
  //icon: 'fa fa-plus',
});

export const FORMS_ENTITY_ACTIONS = (
  actionList: EntityActionList<Volo.Forms.Forms.FormDto>
) => {
  actionList.addTail(VIEW_ACTION);
};

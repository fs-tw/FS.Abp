import { ToolbarAction } from '@abp/ng.theme.shared/extensions';
import { Volo } from '@fs-tw/form-management/proxy';
import { notify } from '@fs-tw/theme-alain/shared/extensions';

export const FORMS_TOOLBAR_ACTIONS = ToolbarAction.createMany<
  Volo.Forms.Forms.FormDto[]
>([
  {
    text: '新增',
    action: notify('Create'),
    permission: 'Forms.Form',
    icon: 'fa fa-plus',
  },
]);

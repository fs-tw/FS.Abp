import { ToolbarAction } from '@abp/ng.theme.shared/extensions';
import { Volo } from '@fs-tw/form-management/proxy';
import { ExtensionsService } from '../../extensions/extensions.service';
import { eFormsComponents } from '../../enums/components';

export const DEFAULT_FORM_TOOLBAR_ACTIONS = ToolbarAction.createMany<
  Volo.Forms.Forms.FormDto[]
>([
  {
    text: '新增',
    action: (data) => {
      const service = data.getInjected(ExtensionsService);
      service.Action(eFormsComponents.Form, {
        method: 'Create',
      });
    },
    permission: 'Forms.Form',
    icon: 'fa fa-plus',
  },
]);

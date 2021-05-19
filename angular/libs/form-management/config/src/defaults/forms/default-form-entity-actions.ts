import { ToolbarAction } from '@abp/ng.theme.shared/extensions';
import { Volo } from '@fs-tw/form-management/proxy';
import { eFormsComponents } from '../../enums/components';
import { EXTENSIONS_IDENTIFIER } from '@abp/ng.theme.shared/extensions';
import { ExtensionsService } from '../../extensions/extensions.service';

export const DEFAULT_FORM_ENTITY_ACTIONS = ToolbarAction.createMany<Volo.Forms.Forms.FormDto>([
  {
    text: 'Forms::View',
    action: data => {
      const service = data.getInjected(ExtensionsService);
      service.Action(eFormsComponents.Form, { method: 'View', data });
    },
    permission: 'Forms.Form',
    //icon: 'fa fa-plus',
  },
  {
    text: 'Forms::Edit',
    action: data => {
      const service = data.getInjected(ExtensionsService);
      service.Action(eFormsComponents.Form, { method: 'Edit', data });
    },
    permission: 'Forms.Form',
    //icon: 'fa fa-plus',
  },
  {
    text: 'Forms::Delete',
    action: data => {
      const service = data.getInjected(ExtensionsService);
      service.Action(eFormsComponents.Form, { method: 'Delete', data });
    },
    permission: 'Forms.Form.Delete',
    //visible: data => !data.record.isStatic,
  },
]);

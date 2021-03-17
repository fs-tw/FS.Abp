import { EntityProp, ePropType } from '@abp/ng.theme.shared/extensions';
import {Fs} from '@fs-tw/form-management/proxy';
import { of } from 'rxjs';

export const DEFAULT_ITEM_ENTITY_PROPS = EntityProp.createMany<Fs.FormManagement.Forms.Dtos.ItemDto>([

      {
        type: ePropType.String,
        name: 'no',
        displayName: 'FormManagement::FS.Item.No',
        sortable: true,
        columnWidth: 100,
      },
      {
        type: ePropType.String,
        name: 'question',
        displayName: 'FormManagement::FS.Item.Question',
        sortable: true,
        columnWidth: 100,
      },
      {
        type: ePropType.String,
        name: 'groupid',
        displayName:'FormManagement::FS.Item.GroupId',
        sortable: true,
        columnWidth: 100,
      }
]);

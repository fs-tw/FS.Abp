import { EntityProp, ePropType } from '@abp/ng.theme.shared/extensions';
import {Fs} from '@fs-tw/form-management/proxy';
import { of } from 'rxjs';

export const DEFAULT_RECORDITEM_ENTITY_PROPS = EntityProp.createMany<Fs.FormManagement.Records.Dtos.RecordItemDto>([
     
      {
        type: ePropType.String,
        name: 'asnwer',
        displayName: 'FormManagement::FS.RecordItem.Asnwer',
        sortable: true,
        columnWidth: 100,
      },
      {
        type: ePropType.String,
        name: 'itemid',
        displayName: 'FormManagement::FS.RecordItem.ItemId',
        sortable: true,
        columnWidth: 100,
      },
]);

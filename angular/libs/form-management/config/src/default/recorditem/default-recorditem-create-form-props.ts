import { ePropType, FormProp } from '@abp/ng.theme.shared/extensions';
import {Fs} from '@fs-tw/form-management/proxy';

export const DEFAULT_RECORDITEM_CREATE_FORM_PROPS = FormProp.createMany<Fs.FormManagement.Records.Dtos.RecordItemDto>([
  
   {
    type: ePropType.String,
    name: 'asnwer',
    displayName: 'FormManagement::FS.RecordItem.Asnwer',
    id: 'asnwer',
    defaultValue: ""
  },
  {
    type: ePropType.String,
    name: 'itemid',
    displayName: 'FormManagement::FS.RecordItem.ItemId',
    id: 'itemid',
    defaultValue: ""
  },
  
]);
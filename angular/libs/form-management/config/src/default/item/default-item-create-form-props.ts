import { ePropType, FormProp } from '@abp/ng.theme.shared/extensions';
import {Fs} from '@fs-tw/form-management/proxy';

export const DEFAULT_ITEM_CREATE_FORM_PROPS = FormProp.createMany<Fs.FormManagement.Forms.Dtos.ItemDto>([
  
   {
    type: ePropType.String,
    name: 'no',
    displayName: 'FormManagement::FS.Item.No',
    id: 'no',
    defaultValue: ""
  },
  {
    type: ePropType.String,
    name: 'question',
    displayName: 'FormManagement::FS.Item.Question',
    id: 'question',
    defaultValue: ""
  },
  {
    type: ePropType.String,
    name: 'groupid',
    displayName:'FormManagement::FS.Item.GroupId',
    id: 'groupid',
    defaultValue: "",
  }

]);
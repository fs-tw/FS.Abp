import { ePropType, FormProp } from '@abp/ng.theme.shared/extensions';
import {Fs} from '@fs-tw/form-management/proxy';

export const DEFAULT_GROUP_CREATE_FORM_PROPS = FormProp.createMany<Fs.FormManagement.Forms.Dtos.GroupDto>([
  
   {
    type: ePropType.String,
    name: 'code',
    displayName: 'FormManagement::FS.Group.Code',
    id: 'code',
    defaultValue: ""
  },
  {
    type: ePropType.String,
    name: 'parentid',
    displayName: 'FormManagement::FS.Group.ParentId',
    id: 'parentid',
    defaultValue: ""
  },
  {
    type: ePropType.String,
    name: 'level',
    displayName:'FormManagement::FS.Group.Level',
    id: 'level',
    defaultValue: "",
  },
  {
    type: ePropType.String,
    name: 'displayname',
    displayName:'FormManagement::FS.Group.DisplayName',
    id: 'displayname',
    defaultValue: "",
  },
  {
    type: ePropType.String,
    name: 'formalid',
    displayName:'FormManagement::FS.Group.FormalId',
    id: 'formalid',
    defaultValue: "",
  },
 
]);
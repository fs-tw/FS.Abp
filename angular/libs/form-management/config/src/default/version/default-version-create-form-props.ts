import { ePropType, FormProp } from '@abp/ng.theme.shared/extensions';
import {Fs} from '@fs-tw/form-management/proxy';

export const DEFAULT_VERSION_CREATE_FORM_PROPS = FormProp.createMany<Fs.FormManagement.Documents.Dtos.VersionDto>([
  
   {
    type: ePropType.String,
    name: 'no',
    displayName: 'FormManagement::FS.Version.No',
    id: 'no',
    defaultValue: ""
  },
  {
    type: ePropType.String,
    name: 'prevversionid',
    displayName: 'FormManagement::FS.Version.PrevVersionId',
    id: 'prevversionid',
    defaultValue: ""
  },
  {
    type: ePropType.String,
    name: 'nextversionid',
    displayName:'FormManagement::FS.Version.NextVersionId',
    id: 'nextversionid',
    defaultValue: "",
  },
  {
    type: ePropType.String,
    name: 'documentdefinitionid',
    displayName:'FormManagement::FS.Version.DocumentDefinitionId',
    id: 'documentdefinitionid',
    defaultValue: "",
  },

]);
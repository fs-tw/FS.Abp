import { ePropType, FormProp } from '@abp/ng.theme.shared/extensions';
import {Fs} from '@fs-tw/form-management/proxy';

export const DEFAULT_RECORD_CREATE_FORM_PROPS = FormProp.createMany<Fs.FormManagement.Records.Dtos.RecordDto>([
  
   {
    type: ePropType.String,
    name: 'formalid',
    displayName: 'FormManagement::FS.Record.FormalId',
    id: 'formalid',
    defaultValue: ""
  },
  
]);
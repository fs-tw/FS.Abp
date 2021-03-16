import { ePropType, FormProp } from '@abp/ng.theme.shared/extensions';
import {} from '@fs-tw/form-management/proxy';

export const DEFAULT_DOCUMENTDEFINITION_CREATE_FORM_PROPS = FormProp.createMany<Fs.Theme.Banners.Dtos.BannerDto>([
  
   {
    type: ePropType.String,
    name: 'no',
    displayName: 'FormManagement::FS.DocumentDefinition.No',
    id: 'no',
    defaultValue: ""
  },
  {
    type: ePropType.String,
    name: 'displayname',
    displayName: 'FormManagement::FS.DocumentDefinition.DisplayName',
    id: 'displayname',
    defaultValue: ""
  },
  {
    type: ePropType.String,
    name: 'currentversionid',
    displayName:'FormManagement::FS.DocumentDefinition.CurrentVersionId',
    id: 'currentversionid',
    defaultValue: "",
  }

]);
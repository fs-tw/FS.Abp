import { ePropType, FormProp } from '@abp/ng.theme.shared/extensions';
import { Fs } from '@fs-tw/theme/proxy';

export const DEFAULT_WEBSITEDEFINITION_CREATE_FORM_PROPS = FormProp.createMany<Fs.Theme.WebSites.Dtos.WebSiteDefinitionDto>([
  
   {
    type: ePropType.String,
    name: 'no',
    displayName: 'Theme::FS.WebSiteDefinition.No',
    id: 'no',
    defaultValue: ""
  },
  {
    type: ePropType.String,
    name: 'displayName',
    displayName: 'Theme::FS.WebSiteDefinition.DisplayName',
    id: 'displayName',
    defaultValue: ""
  },
  {
    type: ePropType.String,
    name: 'description',
    displayName:'Theme::FS.WebSiteDefinition.Description',
    id: 'description',
    defaultValue: "",
  }
]);
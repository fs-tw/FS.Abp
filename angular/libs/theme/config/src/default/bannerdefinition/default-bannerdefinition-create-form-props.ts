import { ePropType, FormProp } from '@abp/ng.theme.shared/extensions';
import { Fs } from '@fs-tw/theme/proxy';

export const DEFAULT_BANNERDEFINITION_CREATE_FORM_PROPS = FormProp.createMany<Fs.Theme.Banners.Dtos.BannerDefinitionDto>([
  
   {
    type: ePropType.String,
    name: 'no',
    displayName: 'Theme::FS.BannerDefinition.No',
    id: 'no',
    defaultValue: ""
  },
  {
    type: ePropType.String,
    name: 'displayName',
    displayName: 'Theme::FS.BannerDefinition.DisplayName',
    id: 'displayName',
    defaultValue: ""
  },
  {
    type: ePropType.String,
    name: 'description',
    displayName:'Theme::FS.BannerDefinition.Description',
    id: 'description',
    defaultValue: "",
  },
  {
    type: ePropType.String,
    name: 'disable',
    displayName:'Theme::FS.BannerDefinition.Disable',
    id: 'disable',
    defaultValue: "",
  }
]);
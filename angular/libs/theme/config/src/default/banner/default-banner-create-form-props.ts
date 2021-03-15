import { ePropType, FormProp } from '@abp/ng.theme.shared/extensions';
import { Fs } from '@fs-tw/theme/proxy';

export const DEFAULT_BANNER_CREATE_FORM_PROPS = FormProp.createMany<Fs.Theme.Banners.Dtos.BannerDto>([
  
   {
    type: ePropType.String,
    name: 'no',
    displayName: 'Theme::FS.Banner.No',
    id: 'no',
    defaultValue: ""
  },
  {
    type: ePropType.String,
    name: 'displayName',
    displayName: 'Theme::FS.Banner.DisplayName',
    id: 'displayName',
    defaultValue: ""
  },
  {
    type: ePropType.String,
    name: 'description',
    displayName:'Theme::FS.Banner.Description',
    id: 'description',
    defaultValue: "",
  },
  {
    type: ePropType.String,
    name: 'disable',
    displayName:'Theme::FS.Banner.Disable',
    id: 'disable',
    defaultValue: "",
  },
  {
    type: ePropType.String,
    name: 'bannerconfig',
    displayName:'Theme::FS.Banner.BannerConfig',
    id: 'bannerconfig',
    defaultValue: "",
  },
  {
    type: ePropType.String,
    name: 'bannerdefinitionid',
    displayName:'Theme::FS.Banner.BannerDefinitionId',
    id: 'bannerdefinitionid',
    defaultValue: "",
  },
]);
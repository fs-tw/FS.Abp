import { ePropType, FormProp } from '@abp/ng.theme.shared/extensions';
import { Fs } from '@fs-tw/cms/proxy';

export const DEFAULT_TAG_CREATE_FORM_PROPS = FormProp.createMany<Fs.Cms.Tags.Dtos.TagDto>([
  
   {
    type: ePropType.String,
    name: 'no',
    displayName: 'Cms::FS.Tag.No',
    id: 'no',
    defaultValue: ""
  },
  {
    type: ePropType.String,
    name: 'displayName',
    displayName: 'Cms::FS.Tag.DisplayName',
    id: 'displayName',
    defaultValue: ""
  },
  {
    type: ePropType.String,
    name: 'description',
    displayName: 'Cms::FS.Tag.Description',
    id: 'description',
    defaultValue: "",
  },
  {
    type: ePropType.String,
    name: 'disable',
    displayName: 'Cms::FS.Tag.Disable',
    id: 'disable',
    defaultValue: "",
  },
]);
import { ePropType, FormProp } from '@abp/ng.theme.shared/extensions';
import { Fs } from 'libs/cms/proxy/src';

export const DEFAULT_BLOG_CREATE_FORM_PROPS = FormProp.createMany<Fs.Cms.Blogs.Dtos.BlogDto>([
  
   {
    type: ePropType.String,
    name: 'no',
    displayName: 'Cms::FS.Blog.No',
    id: 'no',
    defaultValue: ""
  },
  {
    type: ePropType.String,
    name: 'displayName',
    displayName: 'Cms::FS.Blog.DisplayName',
    id: 'displayName',
    defaultValue: ""
  },
  {
    type: ePropType.String,
    name: 'description',
    displayName:'Cms::FS.Blog.Description',
    id: 'description',
    defaultValue: "",
  },
  {
    type: ePropType.String,
    name: 'disable',
    displayName: 'Cms::FS.Blog.Disable',
    id: 'disable',
    defaultValue: "",
  },
  {
    type: ePropType.String,
    name: 'disable',
    displayName: 'Cms::FS.Blog.BlogConfig',
    id: 'disable',
    defaultValue: "",
  },
]);
import { ePropType, FormProp } from '@abp/ng.theme.shared/extensions';
import { Fs } from '@fs-tw/cms/proxy';
import { of } from 'rxjs';

export const DEFAULT_BLOG_CREATE_FORM_PROPS = FormProp.createMany<Fs.Cms.Blogs.Dtos.BlogDto>([  
  {
    type: ePropType.Number,
    name: 'sequence',
    displayName: 'Cms::FS.Blog.Sequence',
    id: 'sequence',
    defaultValue: "",
  },
  //  {
  //   type: ePropType.String,
  //   name: 'no',
  //   displayName: 'Cms::FS.Blog.No',
  //   id: 'no',
  //   defaultValue: ""
  // },
  {
    type: ePropType.String,
    name: 'displayName',
    displayName: 'Cms::FS.Blog.DisplayName',
    id: 'displayName',
    defaultValue: "" ,  
    disabled:(data)=>{
      return data.record.no == "CmsBlogNotClassified"
    }
  },
  {
    type: ePropType.Text,
    name: 'description',
    displayName:'Cms::FS.Blog.Description',
    id: 'description',
    defaultValue: "",
  },
  {
    type: ePropType.Boolean,
    name: 'disable',
    displayName: 'Cms::FS.Blog.Disable',
    id: 'disable',
    defaultValue: false,    
  },
  {
    type: ePropType.String,
    name: 'url',
    displayName: 'Cms::FS.Blog.Url',
    id: 'url',
    defaultValue: "",
  },
  {
    type: ePropType.String,    
    name: 'listStyle',
    displayName: 'Cms::FS.Blog.ListStyle',
    id: 'listStyle',
    defaultValue: "",  
  },


  
]);
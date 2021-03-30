import { ePropType, FormProp } from '@abp/ng.theme.shared/extensions';
import { Fs } from '@fs-tw/cms/proxy';

export const DEFAULT_POST_CREATE_FORM_PROPS = FormProp.createMany<Fs.Cms.Posts.Dtos.PostDto>([
  
   {
    type: ePropType.String,
    name: 'BlogId',
    displayName: 'Cms::FS.Post.BlogId',
    id: 'BlogId',
    defaultValue: ""
  },
  {
    type: ePropType.String,
    name: 'Title',
    displayName: 'Cms::FS.Post.Title',
    id: 'Title',
    defaultValue: ""
  },
  {
    type: ePropType.String,
    name: 'Subtitle',
    displayName: 'Cms::FS.Post.Subtitle',
    id: 'Subtitle',
    defaultValue: "",
  },
  {
    type: ePropType.String,
    name: 'Url',
    displayName: 'Cms::FS.Post.Url',
    id: 'Url',
    defaultValue: "",
  },
  {
    type: ePropType.String,
    name: 'Content',
    displayName: 'Cms::FS.Post.Content',
    id: 'Content',
    defaultValue: "",
  },
  {
    type: ePropType.String,
    name: 'Disable',
    displayName: 'Cms::FS.Post.Disable',
    id: 'Disable',
    defaultValue: "",
  },
  {
    type: ePropType.String,
    name: 'StartTime',
    displayName: 'Cms::FS.Post.StartTime',
    id: 'StartTime',
    defaultValue: "",
  },
  {
    type: ePropType.String,
    name: 'EndTime',
    displayName: 'Cms::FS.Post.EndTime',
    id: 'EndTime',
    defaultValue: "",
  },
  {
    type: ePropType.Number,
    name: 'Sequence',
    displayName: 'Cms::FS.Post.Sequence',
    id: 'Sequence',
    defaultValue: "",
  },
  {
    type: ePropType.String,
    name: 'DisplayMode',
    displayName: 'Cms::FS.Post.DisplayMode',
    id: 'DisplayMode',
    defaultValue: "",
  },
  {
    type: ePropType.String,
    name: 'Sequence',
    displayName: 'Cms::FS.Post.Sequence',
    id: 'Sequence',
    defaultValue: "",
  },
  {
    type: ePropType.String,
    name: 'AttachmentFileUrls',
    displayName: 'Cms::FS.Post.AttachmentFileUrls',
    id: 'AttachmentFileUrls',
    defaultValue: "",
  },
  {
    type: ePropType.String,
    name: 'postimages',
    displayName: 'Cms::FS.Post.PostImages',
    id: 'postimages',
    defaultValue: "",
  },
]);
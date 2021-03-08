import { EntityProp, ePropType } from '@abp/ng.theme.shared/extensions';
import { Fs } from 'libs/cms/proxy/src';
import { of } from 'rxjs';

export const DEFAULT_POST_ENTITY_PROPS = EntityProp.createMany<Fs.Cms.Posts.Dtos.PostDto>([
   
    {
        type: ePropType.String,
        name: 'blogid',
        displayName: 'Cms::FS.Post.BlogId',
        sortable: true,
        columnWidth: 100,
    },
    {
        type: ePropType.String,
        name: 'title',
        displayName: 'Cms::FS.Post.Title',
        sortable: true,
        columnWidth: 100,
    },
    {
        type: ePropType.String,
        name: 'subtitle',
        displayName: 'Cms::FS.Post.Subtitle',
        sortable: true,
        columnWidth: 150,
    },
    {
        type: ePropType.String,
        name: 'url',
        displayName: 'Cms::FS.Post.Url',
        sortable: true,
        columnWidth: 150,
    },
    {
        type: ePropType.String,
        name: 'content',
        displayName: 'Cms::FS.Post.Content',
        sortable: true,
        columnWidth: 150,
    },
    {
        type: ePropType.String,
        name: 'disable',
        displayName: 'Cms::FS.Post.Disable',
        sortable: true,
        columnWidth: 150,
    },
    {
        type: ePropType.String,
        name: 'starttime',
        displayName: 'Cms::FS.Post.StartTime',
        sortable: true,
        columnWidth: 150,
    },
    {
        type: ePropType.String,
        name: 'endtime',
        displayName: 'Cms::FS.Post.EndTime',
        sortable: true,
        columnWidth: 150,
    },
    {
        type: ePropType.String,
        name: 'displaymode',
        displayName: 'Cms::FS.Post.DisplayMode',
        sortable: true,
        columnWidth: 150,
    },
    {
        type: ePropType.String,
        name: 'sequence',
        displayName: 'Cms::FS.Post.Sequence',
        sortable: true,
        columnWidth: 150,
    },
    {
        type: ePropType.String,
        name: 'attachmentfileurls',
        displayName: 'Cms::FS.Post.AttachmentFileUrls',
        sortable: true,
        columnWidth: 150,
    },
    {
        type: ePropType.String,
        name: 'postimages',
        displayName: 'Cms::FS.Post.PostImages',
        sortable: true,
        columnWidth: 150,
    }
]);

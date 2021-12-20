import { ToolbarAction } from '@abp/ng.theme.shared/extensions';
import { Volo } from '@fs-tw/cms-kit-management/proxy/cms-kit';
import { notify } from '@fs-tw/components/extensions';

export const BLOG_POST_ENTITY_ACTIONS = ToolbarAction.createMany<Volo.CmsKit.Admin.Blogs.BlogPostDto>(
  [
    {
      text: 'CmsKit::Edit',
      action: notify('Edit'),
    },
    {
      text: '上傳圖片',
      action: notify('MediaDescriptor')
    },
    {
      text: 'CmsKit::Delete',
      action: notify('Delete'),
    },
  ]
);

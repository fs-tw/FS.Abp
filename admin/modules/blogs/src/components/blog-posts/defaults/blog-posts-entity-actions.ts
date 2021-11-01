import { ToolbarAction } from '@abp/ng.theme.shared/extensions';
import { Volo } from '@fs-tw/cms-kit-management/proxy/cms-kit';
import { notify } from '@fs-tw/components/extensions';

export function AddToolbarAction(data: Array<string>): ToolbarAction<Volo.CmsKit.Admin.Pages.PageDto>[]
{
  return ToolbarAction.createMany<Volo.CmsKit.Admin.Pages.PageDto>(
    [
      ...BLOG_POSTS_ENTITY_ACTIONS,
      ...data.map(x => {
        return new ToolbarAction({
          text: x,
          action: notify(x)
        })
      })
    ]
  );
}

export const BLOG_POSTS_ENTITY_ACTIONS = ToolbarAction.createMany<Volo.CmsKit.Admin.Blogs.BlogPostDto>(
  [
    {
      text: 'CmsKit::Edit',
      action: notify('Edit'),
    },
    {
      text: 'CmsKit::Delete',
      action: notify('Delete'),
    },
  ]
);

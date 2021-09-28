import { ToolbarAction } from '@abp/ng.theme.shared/extensions';
import { Volo } from '@fs-tw/cms-kit-management/proxy/cms-kit';
import { notify } from '@fs-tw/theme-alain/shared/extensions';

export const COMMENTS_TOOLBAR_ACTIONS = ToolbarAction.createMany<
  Volo.CmsKit.Admin.Comments.CommentWithAuthorDto[]
>([
  {
    text: '新增評論',
    action: notify('Create'),
    icon: 'fa fa-plus',
  },
]);

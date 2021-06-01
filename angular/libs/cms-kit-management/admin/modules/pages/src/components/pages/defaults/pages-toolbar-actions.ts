import { ToolbarAction } from '@abp/ng.theme.shared/extensions';
import { Volo } from '@fs-tw/cms-kit-management/proxy';
import { notify } from '@fs-tw/theme-alain/shared/extensions';

export const PAGES_TOOLBAR_ACTIONS = ToolbarAction.createMany<
  Volo.CmsKit.Admin.Pages.PageDto[]
>([
  {
    text: 'CmsKit::NewPage',
    action: notify('Create'),
    permission: 'CmsKit.Pages.Create',
    icon: 'fa fa-plus',
  },
]);

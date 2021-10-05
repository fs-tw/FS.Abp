import { ToolbarAction } from '@abp/ng.theme.shared/extensions';
import { Fs } from '@fs-tw/cms-kit-management/proxy/cms-kit-management';
import { notify } from '@fs-tw/theme-alain/extensions';

export const CONTENT_TYPE_TOOLBAR_ACTIONS = ToolbarAction.createMany<
  Fs.CmsKitManagement.Contents.Dtos.ContentTypeDto[]
>([
  {
    text: 'CmsKit::NewContentType',
    action: notify('Create'),
    permission: 'CmsKit.Contents.Create',
    icon: 'fa fa-plus',
  },
]);

import { ToolbarAction } from '@abp/ng.theme.shared/extensions';
import { Fs } from '@fs-tw/cms-kit-management/proxy/cms-kit-management';
import { notify } from '@fs-tw/theme-alain/extensions';

export const CONTENT_TYPE_ENTITY_ACTIONS = ToolbarAction.createMany<Fs.CmsKitManagement.Contents.Dtos.ContentTypeDto>(
  [
    {
      text: 'CmsKit::Edit',
      action: notify('Edit'),
      permission: 'CmsKit.Contents.Update',
    },
    {
      text: 'CmsKit::Delete',
      action: notify('Delete'),
      permission: 'CmsKit.Contents.Delete',
    },
  ]
);

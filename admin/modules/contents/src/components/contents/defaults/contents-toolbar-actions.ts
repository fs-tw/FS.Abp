import { ToolbarAction } from '@abp/ng.theme.shared/extensions';
import { Fs } from '@fs-tw/cms-kit-management/proxy/cms-kit-management';
import { notify } from '@fs-tw/components/extensions';

export const CONTENTS_TOOLBAR_ACTIONS = ToolbarAction.createMany<
  Fs.CmsKitManagement.Contents.Dtos.EntityContentDto[]
>([
]);

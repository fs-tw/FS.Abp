import { ToolbarAction } from '@abp/ng.theme.shared/extensions';
import { Fs } from '@fs-tw/cms-kit-management/proxy/cms-kit-management';
import { notify } from '@fs-tw/theme-alain/extensions';

export const ATTACH_MENTMEDIA_TOOLBAR_ACTIONS = ToolbarAction.createMany<
    Fs.CmsKitManagement.MediaDescriptors.Dtos.AttachmentMediaDto[]
>([
]);

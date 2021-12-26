import { ToolbarAction } from '@abp/ng.theme.shared/extensions';
import { Volo } from '@fs-tw/cms-kit-management/proxy/cms-kit';
import { notify } from '@fs-tw/components/extensions';

export const MEDIA_DESCRIPTORS_TOOLBAR_ACTIONS = ToolbarAction.createMany<
Volo.CmsKit.Admin.MediaDescriptors.MediaDescriptorDto[]
>([
    {
        text: 'CmsKit::NewMediaDescriptor',
        action: notify('Create'),
        icon: 'fa fa-plus',
    },
]);

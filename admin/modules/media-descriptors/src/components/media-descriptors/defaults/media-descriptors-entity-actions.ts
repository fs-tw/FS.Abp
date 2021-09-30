import { ToolbarAction } from '@abp/ng.theme.shared/extensions';
import { Volo } from '@fs-tw/cms-kit-management/proxy/cms-kit';
import { notify } from '@fs-tw/theme-alain/extensions';

export const MEDIA_DESCRIPTORS_ENTITY_ACTIONS = ToolbarAction.createMany<Volo.CmsKit.Admin.MediaDescriptors.MediaDescriptorDto>(
  [
    {
      text: 'CmsKit::Delete',
      action: notify('Delete'),
    },
  ]
);

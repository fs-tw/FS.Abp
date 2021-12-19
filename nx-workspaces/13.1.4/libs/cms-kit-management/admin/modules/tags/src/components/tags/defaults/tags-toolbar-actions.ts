import { ToolbarAction } from '@abp/ng.theme.shared/extensions';
import { Volo } from '@fs-tw/cms-kit-management/proxy/cms-kit';
import { notify } from '@fs-tw/components/extensions';

export const TAGS_TOOLBAR_ACTIONS = ToolbarAction.createMany<
  Volo.CmsKit.Tags.TagDto[]
>([
  {
    text: 'CmsKit::NewTag',
    action: notify('Create'),
    icon: 'fa fa-plus',
  },
]);

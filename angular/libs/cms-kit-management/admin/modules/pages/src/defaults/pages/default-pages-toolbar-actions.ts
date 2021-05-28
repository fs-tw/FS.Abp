import { ToolbarAction } from '@abp/ng.theme.shared/extensions';
import { Volo } from '@fs-tw/cms-kit-management/proxy';
import { PagesComponent } from '../../components/pages/pages.component';

export const DEFAULT_PAGES_TOOLBAR_ACTIONS = ToolbarAction.createMany<
  Volo.CmsKit.Admin.Pages.PageDto[]
>([
  {
    text: 'CmsKit::NewPage',
    action: (data) => {
      const component = data.getInjected(PagesComponent);
      component.onAdd();
    },
    permission: 'CmsKit.Pages.Create',
    icon: 'fa fa-plus',
  },
]);

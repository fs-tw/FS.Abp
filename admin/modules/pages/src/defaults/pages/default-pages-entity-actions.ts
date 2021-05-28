import { ToolbarAction } from '@abp/ng.theme.shared/extensions';
import { Volo } from '@fs-tw/cms-kit-management/proxy';
import { PagesComponent } from '../../components/pages/pages.component';

export const DEFAULT_PAGES_ENTITY_ACTIONS = ToolbarAction.createMany<Volo.CmsKit.Admin.Pages.PageDto>([
  {
    text: 'CmsKit::Edit',
    action: data => {
      const component = data.getInjected(PagesComponent);
      component.onEdit(data.record.id);
    },
    permission: 'CmsKit.Pages.Update',
    //icon: 'fa fa-plus',
  },
  {
    text: 'CmsKit::Delete',
    action: data => {
      const component = data.getInjected(PagesComponent);
      component.delete(data.record.id);
    },
    permission: 'CmsKit.Pages.Delete',
    //visible: data => !data.record.isStatic,
  },
]);

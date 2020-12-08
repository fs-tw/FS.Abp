import { ToolbarAction } from '@abp/ng.theme.shared/extensions';
import { EditionsComponent } from '../components/editions/editions.component';
import { EditionDto } from '../proxy/host/dtos/models';

export const DEFAULT_EDITIONS_TOOLBAR_ACTIONS = ToolbarAction.createMany<EditionDto[]>([
  {
    text: 'Saas::NewEdition',
    action: data => {
      const component = data.getInjected(EditionsComponent);
      component.onAddEdition();
    },
    permission: 'Saas.Editions.Create',
    icon: 'fa fa-plus',
  },
]);

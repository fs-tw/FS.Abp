import { EntityAction } from '@abp/ng.theme.shared/extensions';
import { SHOW_ENTITY_HISTORY } from '@volo/abp.commercial.ng.ui';
import { EditionsComponent } from '../components/editions/editions.component';
import { EditionDto } from '../proxy/host/dtos/models';

export const DEFAULT_EDITIONS_ENTITY_ACTIONS = EntityAction.createMany<EditionDto>([
  {
    text: 'Saas::Edit',
    action: data => {
      const component = data.getInjected(EditionsComponent);
      component.onEditEdition(data.record.id);
    },
    permission: 'Saas.Editions.Update',
  },
  {
    text: 'Saas::Features',
    action: data => {
      const component = data.getInjected(EditionsComponent);
      component.openFeaturesModal(data.record.id);
    },
    permission: 'Saas.Editions.ManageFeatures',
  },
  {
    text: 'Saas::ChangeHistory',
    action: data => {
      const showHistory = data.getInjected(SHOW_ENTITY_HISTORY);
      showHistory(data.record.id, 'Volo.Saas.Edition');
    },
    permission: 'Saas.Editions.ViewChangeHistory',
    visible: data => Boolean(data.getInjected(SHOW_ENTITY_HISTORY, null)),
  },
  {
    text: 'Saas::Delete',
    action: data => {
      const component = data.getInjected(EditionsComponent);
      component.delete(data.record);
    },
    permission: 'Saas.Editions.Delete',
  },
]);

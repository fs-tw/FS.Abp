import { EntityAction } from '@abp/ng.theme.shared/extensions';
import { SHOW_ENTITY_HISTORY } from '@volo/abp.commercial.ng.ui';
import { TenantsComponent } from '../components/tenants/tenants.component';
import { SaasTenantDto } from '../proxy/host/dtos/models';

export const DEFAULT_TENANTS_ENTITY_ACTIONS = EntityAction.createMany<SaasTenantDto>([
  {
    text: 'Saas::Edit',
    action: data => {
      const component = data.getInjected(TenantsComponent);
      component.onEditTenant(data.record.id);
    },
    permission: 'Saas.Tenants.Update',
  },
  {
    text: 'Saas::ConnectionStrings',
    action: data => {
      const component = data.getInjected(TenantsComponent);
      component.onEditConnectionString(data.record.id);
    },
    permission: 'Saas.Tenants.ManageConnectionStrings',
  },
  {
    text: 'Saas::Features',
    action: data => {
      const component = data.getInjected(TenantsComponent);
      component.openFeaturesModal(data.record.id);
    },
    permission: 'Saas.Tenants.ManageFeatures',
  },
  {
    text: 'Saas::ChangeHistory',
    action: data => {
      const showHistory = data.getInjected(SHOW_ENTITY_HISTORY);
      showHistory(data.record.id, 'Volo.Saas.Tenant');
    },
    permission: 'Saas.Tenants.ViewChangeHistory',
    visible: data => Boolean(data.getInjected(SHOW_ENTITY_HISTORY, null)),
  },
  {
    text: 'Saas::Delete',
    action: data => {
      const component = data.getInjected(TenantsComponent);
      component.delete(data.record.id, data.record.name);
    },
    permission: 'Saas.Tenants.Delete',
  },
]);

import { ToolbarAction } from '@abp/ng.theme.shared/extensions';
import { TenantsComponent } from '../components/tenants/tenants.component';
import { SaasTenantDto } from '../proxy/host/dtos/models';

export const DEFAULT_TENANTS_TOOLBAR_ACTIONS = ToolbarAction.createMany<SaasTenantDto[]>([
  {
    text: 'Saas::ManageHostFeatures',
    action: data => {
      const component = data.getInjected(TenantsComponent);
      component.openFeaturesModal(null);
    },
    permission: 'Saas.Tenants.ManageFeatures',
    icon: 'fa fa-cog',
  },
  {
    text: 'Saas::NewTenant',
    action: data => {
      const component = data.getInjected(TenantsComponent);
      component.onAddTenant();
    },
    permission: 'Saas.Tenants.Create',
    icon: 'fa fa-plus',
  },
]);

import { EntityAction } from '@abp/ng.theme.shared/extensions';
import { SHOW_ENTITY_HISTORY } from '@volo/abp.commercial.ng.ui';
import { IdentityResourcesComponent } from '../components/identity-resources/identity-resources.component';
import { IdentityResourceWithDetailsDto } from '../proxy/identity-resource/dtos/models';

export const DEFAULT_IDENTITY_RESOURCES_ENTITY_ACTIONS = EntityAction.createMany<
  IdentityResourceWithDetailsDto
>([
  {
    text: 'AbpIdentityServer::Edit',
    action: data => {
      const component = data.getInjected(IdentityResourcesComponent);
      component.onEdit(data.record.id);
    },
    permission: 'IdentityServer.IdentityResource.Update',
  },
  {
    text: 'AbpIdentityServer::ChangeHistory',
    action: data => {
      const showHistory = data.getInjected(SHOW_ENTITY_HISTORY);
      showHistory(data.record.id, 'Volo.Abp.IdentityServer.IdentityResources.IdentityResource');
    },
    permission:
      'AuditLogging.ViewChangeHistory:Volo.Abp.IdentityServer.IdentityResources.IdentityResource',
    visible: data => Boolean(data.getInjected(SHOW_ENTITY_HISTORY, null)),
  },
  {
    text: 'AbpIdentityServer::Delete',
    action: data => {
      const component = data.getInjected(IdentityResourcesComponent);
      component.delete(data.record.id, data.record.name);
    },
    permission: 'IdentityServer.IdentityResource.Delete',
  },
]);

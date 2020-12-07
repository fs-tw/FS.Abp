import { EntityAction } from '@abp/ng.theme.shared/extensions';
import { SHOW_ENTITY_HISTORY } from '@volo/abp.commercial.ng.ui';
import { ApiResourcesComponent } from '../components/api-resources/api-resources.component';
import { ApiResourceWithDetailsDto } from '../proxy/api-resource/dtos/models';

export const DEFAULT_API_RESOURCES_ENTITY_ACTIONS = EntityAction.createMany<
  ApiResourceWithDetailsDto
>([
  {
    text: 'AbpIdentityServer::Edit',
    action: data => {
      const component = data.getInjected(ApiResourcesComponent);
      component.onEdit(data.record.id);
    },
    permission: 'IdentityServer.ApiResource.Update',
  },
  {
    text: 'AbpIdentityServer::ChangeHistory',
    action: data => {
      const showHistory = data.getInjected(SHOW_ENTITY_HISTORY);
      showHistory(data.record.id, 'Volo.Abp.IdentityServer.ApiResources.ApiResource');
    },
    permission: 'AuditLogging.ViewChangeHistory:Volo.Abp.IdentityServer.ApiResources.ApiResource',
    visible: data => Boolean(data.getInjected(SHOW_ENTITY_HISTORY, null)),
  },
  {
    text: 'AbpIdentityServer::Delete',
    action: data => {
      const component = data.getInjected(ApiResourcesComponent);
      component.delete(data.record.id, data.record.name);
    },
    permission: 'IdentityServer.ApiResource.Delete',
  },
]);

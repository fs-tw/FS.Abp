import { EntityAction } from '@abp/ng.theme.shared/extensions';
import { SHOW_ENTITY_HISTORY } from '@volo/abp.commercial.ng.ui';
import { ClientsComponent } from '../components/clients/clients.component';
import { ClientWithDetailsDto } from '../proxy/client/dtos/models';

export const DEFAULT_CLIENTS_ENTITY_ACTIONS = EntityAction.createMany<ClientWithDetailsDto>([
  {
    text: 'AbpIdentityServer::Edit',
    action: data => {
      const component = data.getInjected(ClientsComponent);
      component.onEdit(data.record.id);
    },
    permission: 'IdentityServer.Client.Update',
  },
  {
    text: 'AbpIdentityServer::Permission:ManagePermissions',
    action: data => {
      const component = data.getInjected(ClientsComponent);
      component.openPermissionsModal(data.record.clientId);
    },
    permission: 'IdentityServer.Client.ManagePermissions',
  },
  {
    text: 'AbpIdentityServer::ChangeHistory',
    action: data => {
      const showHistory = data.getInjected(SHOW_ENTITY_HISTORY);
      showHistory(data.record.id, 'Volo.Abp.IdentityServer.Clients.Client');
    },
    permission: 'AuditLogging.ViewChangeHistory:Volo.Abp.IdentityServer.Clients.Client',
    visible: data => Boolean(data.getInjected(SHOW_ENTITY_HISTORY, null)),
  },
  {
    text: 'AbpIdentityServer::Delete',
    action: data => {
      const component = data.getInjected(ClientsComponent);
      component.delete(data.record);
    },
    permission: 'IdentityServer.Client.Delete',
  },
]);

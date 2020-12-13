import { ToolbarAction } from '@abp/ng.theme.shared/extensions';
import { ClientsComponent } from '../components/clients/clients.component';
import { ClientWithDetailsDto } from '../proxy/client/dtos/models';

export const DEFAULT_CLIENTS_TOOLBAR_ACTIONS = ToolbarAction.createMany<ClientWithDetailsDto[]>([
  {
    text: 'AbpIdentityServer::CreateANewClient',
    action: data => {
      const component = data.getInjected(ClientsComponent);
      component.onAdd();
    },
    permission: 'IdentityServer.Client.Create',
    icon: 'fa fa-plus',
  },
]);

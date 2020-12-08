import { ToolbarAction } from '@abp/ng.theme.shared/extensions';
import { ApiScopeWithDetailsDto } from '../proxy/api-scope/dtos/models';
import { ApiScopesComponent } from '../components/api-scopes/api-scopes.component';

export const DEFAULT_API_SCOPES_TOOLBAR_ACTIONS = ToolbarAction.createMany<
  ApiScopeWithDetailsDto[]
>([
  {
    text: 'AbpIdentityServer::CreateANewScope',
    action: data => {
      const component = data.getInjected(ApiScopesComponent);
      component.onAdd();
    },
    permission: 'IdentityServer.ApiScope.Create',
    icon: 'fa fa-plus',
  },
]);

import { EntityAction } from '@abp/ng.theme.shared/extensions';
import { SHOW_ENTITY_HISTORY } from '@volo/abp.commercial.ng.ui';
import { ApiScopeWithDetailsDto } from '../proxy/api-scope/dtos/models';
import { ApiScopesComponent } from '../components/api-scopes/api-scopes.component';

export const DEFAULT_API_SCOPES_ENTITY_ACTIONS = EntityAction.createMany<ApiScopeWithDetailsDto>([
  {
    text: 'AbpIdentityServer::Edit',
    action: data => {
      const component = data.getInjected(ApiScopesComponent);
      component.onEdit(data.record.id);
    },
    permission: 'IdentityServer.ApiScope.Update',
  },
  {
    text: 'AbpIdentityServer::ChangeHistory',
    action: data => {
      const showHistory = data.getInjected(SHOW_ENTITY_HISTORY);
      showHistory(data.record.id, 'Volo.Abp.IdentityServer.ApiScopes.ApiScope');
    },
    permission: 'AuditLogging.ViewChangeHistory:Volo.Abp.IdentityServer.ApiScopes.ApiScope',
    visible: data => Boolean(data.getInjected(SHOW_ENTITY_HISTORY, null)),
  },
  {
    text: 'AbpIdentityServer::Delete',
    action: data => {
      const component = data.getInjected(ApiScopesComponent);
      component.delete(data.record.id, data.record.name);
    },
    permission: 'IdentityServer.ApiScope.Delete',
  },
]);

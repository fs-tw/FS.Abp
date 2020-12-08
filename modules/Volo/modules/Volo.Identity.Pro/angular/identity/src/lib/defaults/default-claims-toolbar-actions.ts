import { ToolbarAction } from '@abp/ng.theme.shared/extensions';
import { ClaimsComponent } from '../components/claims/claims.component';
import { ClaimTypeDto } from '../proxy/identity/models';

export const DEFAULT_CLAIMS_TOOLBAR_ACTIONS = ToolbarAction.createMany<ClaimTypeDto[]>([
  {
    text: 'AbpIdentity::NewClaimType',
    action: data => {
      const component = data.getInjected(ClaimsComponent);
      component.onAdd();
    },
    permission: 'AbpIdentity.ClaimTypes.Create',
    icon: 'fa fa-plus',
  },
]);

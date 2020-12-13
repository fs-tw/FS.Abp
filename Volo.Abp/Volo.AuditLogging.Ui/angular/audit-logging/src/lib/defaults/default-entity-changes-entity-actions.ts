import { EntityAction } from '@abp/ng.theme.shared/extensions';
import { SHOW_ENTITY_HISTORY } from '@volo/abp.commercial.ng.ui';
import { EntityChangeDto } from '../proxy/audit-logging/models';
import { SHOW_ENTITY_DETAILS } from '../tokens/entity-details.token';

export const DEFAULT_ENTITY_CHANGES_ENTITY_ACTIONS = EntityAction.createMany<EntityChangeDto>([
  {
    text: 'AbpAuditLogging::ChangeDetails',
    action: data => {
      const showDetails = data.getInjected(SHOW_ENTITY_DETAILS);
      showDetails(data.record.id);
    },
    icon: 'fa fa-search',
  },
  {
    text: 'AbpAuditLogging::FullChangeHistory',
    action: data => {
      const showHistory = data.getInjected(SHOW_ENTITY_HISTORY);
      showHistory(data.record.entityId, data.record.entityTypeFullName);
    },
    icon: 'fa fa-history',
  },
]);

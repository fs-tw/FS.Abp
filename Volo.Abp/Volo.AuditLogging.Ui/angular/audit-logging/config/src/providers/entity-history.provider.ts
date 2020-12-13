import { SHOW_ENTITY_HISTORY } from '@volo/abp.commercial.ng.ui';
import { EntityChangeModalService } from '../services/entity-change-modal.service';

export const ENTITY_HISTORY_PROVIDERS = [
  {
    provide: SHOW_ENTITY_HISTORY,
    useFactory: bindShowHistory,
    deps: [EntityChangeModalService],
  },
];

export function bindShowHistory(service: EntityChangeModalService) {
  return service.showHistory.bind(service);
}

import { SHOW_ENTITY_DETAILS } from '@volo/abp.ng.audit-logging';
import { EntityChangeModalService } from '../services/entity-change-modal.service';

export const ENTITY_DETAILS_PROVIDERS = [
  {
    provide: SHOW_ENTITY_DETAILS,
    useFactory: bindShowDetails,
    deps: [EntityChangeModalService],
  },
];

export function bindShowDetails(service: EntityChangeModalService) {
  return service.showDetails.bind(service);
}

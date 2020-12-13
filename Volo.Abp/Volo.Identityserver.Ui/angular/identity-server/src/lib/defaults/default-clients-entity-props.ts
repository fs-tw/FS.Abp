import { EntityProp, ePropType } from '@abp/ng.theme.shared/extensions';
import { ClientWithDetailsDto } from '../proxy/client/dtos/models';

export const DEFAULT_CLIENTS_ENTITY_PROPS = EntityProp.createMany<ClientWithDetailsDto>([
  {
    type: ePropType.String,
    name: 'clientId',
    displayName: 'AbpIdentityServer::ClientId',
    sortable: true,
  },
]);

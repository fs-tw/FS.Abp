import { EntityProp, ePropType } from '@abp/ng.theme.shared/extensions';
import { ApiResourceWithDetailsDto } from '../proxy/api-resource/dtos/models';

export const DEFAULT_API_RESOURCES_ENTITY_PROPS = EntityProp.createMany<ApiResourceWithDetailsDto>([
  {
    type: ePropType.String,
    name: 'name',
    displayName: 'AbpIdentityServer::Name',
    sortable: true,
    columnWidth: 250,
  },
  {
    type: ePropType.String,
    name: 'displayName',
    displayName: 'AbpIdentityServer::DisplayName',
    sortable: true,
    columnWidth: 350,
  },
  {
    type: ePropType.String,
    name: 'description',
    displayName: 'AbpIdentityServer::Description',
    sortable: true,
    columnWidth: 450,
  },
]);

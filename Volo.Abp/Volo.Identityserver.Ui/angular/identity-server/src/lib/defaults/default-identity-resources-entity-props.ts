import { EntityProp, ePropType } from '@abp/ng.theme.shared/extensions';
import { IdentityResourceWithDetailsDto } from '../proxy/identity-resource/dtos/models';

export const DEFAULT_IDENTITY_RESOURCES_ENTITY_PROPS = EntityProp.createMany<
  IdentityResourceWithDetailsDto
>([
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

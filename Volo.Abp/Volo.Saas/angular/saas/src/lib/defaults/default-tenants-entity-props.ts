import { EntityProp, ePropType } from '@abp/ng.theme.shared/extensions';
import { SaasTenantDto } from '../proxy/host/dtos/models';

export const DEFAULT_TENANTS_ENTITY_PROPS = EntityProp.createMany<SaasTenantDto>([
  {
    type: ePropType.String,
    name: 'name',
    displayName: 'Saas::TenantName',
    sortable: true,
    columnWidth: 370,
  },
  {
    type: ePropType.String,
    name: 'editionName',
    displayName: 'Saas::EditionName',
    columnWidth: 370,
  },
]);

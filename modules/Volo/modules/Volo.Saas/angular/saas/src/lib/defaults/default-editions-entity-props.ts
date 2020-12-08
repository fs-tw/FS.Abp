import { EntityProp, ePropType } from '@abp/ng.theme.shared/extensions';
import { EditionDto } from '../proxy/host/dtos/models';

export const DEFAULT_EDITIONS_ENTITY_PROPS = EntityProp.createMany<EditionDto>([
  {
    type: ePropType.String,
    name: 'displayName',
    displayName: 'Saas::EditionName',
    sortable: true,
  },
]);

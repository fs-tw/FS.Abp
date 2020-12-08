import { EntityProp, ePropType } from '@abp/ng.theme.shared/extensions';
import { of } from 'rxjs';
import { ClaimsComponent } from '../components/claims/claims.component';
import { ClaimTypeDto } from '../proxy/identity/models';

export const DEFAULT_CLAIMS_ENTITY_PROPS = EntityProp.createMany<ClaimTypeDto>([
  {
    type: ePropType.String,
    name: 'name',
    displayName: 'AbpIdentity::Name',
    sortable: true,
    columnWidth: 250,
  },
  {
    type: ePropType.String,
    name: 'valueType',
    displayName: 'AbpIdentity::ValueType',
    sortable: true,
    columnWidth: 200,
    valueResolver: data => of(data.getInjected(ClaimsComponent).getTypeName(data.record.valueType)),
  },
  {
    type: ePropType.String,
    name: 'description',
    displayName: 'AbpIdentity::Description',
    sortable: true,
    columnWidth: 250,
  },
  {
    type: ePropType.String,
    name: 'regex',
    displayName: 'AbpIdentity::Regex',
    sortable: true,
    columnWidth: 200,
  },
  {
    type: ePropType.Boolean,
    name: 'required',
    displayName: 'AbpIdentity::Required',
    sortable: true,
    columnWidth: 150,
  },
  {
    type: ePropType.Boolean,
    name: 'isStatic',
    displayName: 'AbpIdentity::IsStatic',
    sortable: true,
    columnWidth: 150,
  },
]);

import { ePropType, FormProp } from '@abp/ng.theme.shared/extensions';
import { Validators } from '@angular/forms';
import { OrganizationUnitWithDetailsDto } from '../proxy/identity/models';

export const DEFAULT_ORGANIZATION_UNITS_CREATE_FORM_PROPS = FormProp.createMany<
  OrganizationUnitWithDetailsDto
>([
  {
    type: ePropType.String,
    name: 'displayName',
    displayName: 'AbpIdentity::DisplayName',
    id: 'organization-unit-display-name',
    validators: () => [Validators.required, Validators.maxLength(256)],
  },
]);

export const DEFAULT_ORGANIZATION_UNITS_EDIT_FORM_PROPS = DEFAULT_ORGANIZATION_UNITS_CREATE_FORM_PROPS;

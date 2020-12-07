import { getPasswordValidators } from '@abp/ng.theme.shared';
import { ePropType, FormProp } from '@abp/ng.theme.shared/extensions';
import { Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { TenantsComponent } from '../components/tenants/tenants.component';
import { SaasTenantDto } from '../proxy/host/dtos/models';

export const DEFAULT_TENANTS_CREATE_FORM_PROPS = FormProp.createMany<SaasTenantDto>([
  {
    type: ePropType.String,
    name: 'name',
    id: 'name',
    displayName: 'Saas::TenantName',
    validators: () => [Validators.required, Validators.maxLength(256)],
  },
  {
    type: ePropType.String,
    name: 'editionId',
    displayName: 'Saas::Edition',
    id: 'edition',
    options: data =>
      data.getInjected(TenantsComponent).editions$.pipe(
        map(editions => [
          {
            key: '',
            value: '',
          },
          ...editions.map(edition => ({
            key: edition.displayName,
            value: edition.id,
          })),
        ]),
      ),
  },
  {
    type: ePropType.Email,
    name: 'adminEmailAddress',
    displayName: 'Saas::DisplayName:AdminEmailAddress',
    id: 'admin-email-address',
    validators: () => [Validators.required, Validators.maxLength(256), Validators.email],
  },
  {
    type: ePropType.Password,
    name: 'adminPassword',
    displayName: 'Saas::DisplayName:AdminPassword',
    id: 'admin-password',
    autocomplete: 'new-password',
    validators: data => [Validators.required, ...getPasswordValidators({ get: data.getInjected })],
  },
]);

export const DEFAULT_TENANTS_EDIT_FORM_PROPS = DEFAULT_TENANTS_CREATE_FORM_PROPS.slice(0, 2);

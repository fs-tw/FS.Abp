import { ePropType, FormProp } from '@abp/ng.theme.shared/extensions';
import { Validators } from '@angular/forms';
import { EditionDto } from '../proxy/host/dtos/models';

export const DEFAULT_EDITIONS_CREATE_FORM_PROPS = FormProp.createMany<EditionDto>([
  {
    type: ePropType.String,
    name: 'displayName',
    displayName: 'Saas::EditionName',
    validators: () => [Validators.required, Validators.maxLength(256)],
  },
]);

export const DEFAULT_EDITIONS_EDIT_FORM_PROPS = DEFAULT_EDITIONS_CREATE_FORM_PROPS;

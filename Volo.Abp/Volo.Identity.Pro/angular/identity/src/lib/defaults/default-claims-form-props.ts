import { ePropType, FormProp } from '@abp/ng.theme.shared/extensions';
import { Validators } from '@angular/forms';
import { of } from 'rxjs';
import { ClaimTypeDto } from '../proxy/identity/models';

export const DEFAULT_CLAIMS_CREATE_FORM_PROPS = FormProp.createMany<ClaimTypeDto>([
  {
    type: ePropType.String,
    name: 'name',
    displayName: 'AbpIdentity::Name',
    id: 'name',
    validators: () => [Validators.required, Validators.maxLength(256)],
  },
  {
    type: ePropType.Boolean,
    name: 'required',
    displayName: 'AbpIdentity::Required',
    id: 'required',
    defaultValue: false,
  },
  {
    type: ePropType.String,
    name: 'regex',
    displayName: 'AbpIdentity::Regex',
    id: 'regex',
  },
  {
    type: ePropType.String,
    name: 'regexDescription',
    displayName: 'AbpIdentity::RegexDescription',
    id: 'regex-description',
  },
  {
    type: ePropType.String,
    name: 'description',
    displayName: 'AbpIdentity::Description',
    id: 'description',
  },
  {
    type: ePropType.Number,
    name: 'valueType',
    displayName: 'AbpIdentity::ValueType',
    id: 'value-type',
    defaultValue: 0,
    options: () =>
      of([
        { key: 'String', value: 0 },
        { key: 'Int', value: 1 },
        { key: 'Boolean', value: 2 },
        { key: 'DateTime', value: 3 },
      ]),
  },
]);

export const DEFAULT_CLAIMS_EDIT_FORM_PROPS = DEFAULT_CLAIMS_CREATE_FORM_PROPS;

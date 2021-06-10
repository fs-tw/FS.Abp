import { ePropType, FormProp } from '@abp/ng.theme.shared/extensions';
import { Validators } from '@angular/forms';
import { Volo } from '@fs-tw/form-management/proxy';

export const FORMS_CREATE_FORM_PROPS = FormProp.createMany<Volo.Forms.Forms.FormDto>(
  [
    {
      type: ePropType.String,
      name: 'title',
      id: 'title',
      displayName: 'Forms::Title',
    },
    {
      type: ePropType.String,
      name: 'description',
      id: 'description',
      displayName: 'Forms::Description',
    },
  ]
);

export const FORMS_EDIT_FORM_PROPS = FORMS_CREATE_FORM_PROPS;

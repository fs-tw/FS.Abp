import { ePropType, FormProp } from '@abp/ng.theme.shared/extensions';
import { Validators } from '@angular/forms';
import { Fs } from '@fs-tw/cms-kit-management/proxy/cms-kit-management';
import { of } from 'rxjs';

export const CONTENT_DEFINITION_CREATE_FORM_PROPS = FormProp.createMany<Fs.CmsKitManagement.Contents.Dtos.ContentDefinitionDto>([
  {
    type: ePropType.String,
    name: 'entityType',
    id:'entityType',
    displayName: 'CmsKit::EntityType',
    validators: () => [Validators.required],
    options: (data) => of([
      { key: "Content", value: "Content" }
    ])
  },
  {
    type: ePropType.String,
    name: 'displayName',
    id: 'displayName',
    displayName: 'CmsKit::DisplayName',
    validators: () => [Validators.required],
  },
]);

export const CONTENT_DEFINITION_EDIT_FORM_PROPS = CONTENT_DEFINITION_CREATE_FORM_PROPS;

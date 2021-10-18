import { ePropType, FormProp } from '@abp/ng.theme.shared/extensions';
import { Validators } from '@angular/forms';
import { Fs } from '@fs-tw/cms-kit-management/proxy/cms-kit-management';
import { of } from 'rxjs';

export const CONTENTS_CREATE_FORM_PROPS = FormProp.createMany<Fs.CmsKitManagement.Contents.Dtos.EntityContentDto>([
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
    name: 'contentTypeId',
    id: 'contentTypeId',
    displayName: 'CmsKit::ContentTypeId',
    validators: () => [Validators.required],
  },
  {
    type: ePropType.String,
    name: 'value',
    id: 'value',
    displayName: 'CmsKit::Value',
    validators: () => [Validators.required],
  }
]);

export const CONTENTS_EDIT_FORM_PROPS = CONTENTS_CREATE_FORM_PROPS;

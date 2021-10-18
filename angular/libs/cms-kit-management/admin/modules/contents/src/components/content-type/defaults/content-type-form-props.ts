import { ePropType, FormProp } from '@abp/ng.theme.shared/extensions';
import { Validators } from '@angular/forms';
import { Fs } from '@fs-tw/cms-kit-management/proxy/cms-kit-management';
import { of } from 'rxjs';

export const CONTENT_TYPE_CREATE_FORM_PROPS = FormProp.createMany<Fs.CmsKitManagement.Contents.Dtos.ContentPropertyDto>([
  {
    type: ePropType.String,
    name: 'contentDefinitionId',
    id:'contentDefinitionId',
    displayName: 'CmsKit::ContentDefinitionId',
    validators: () => [Validators.required],
  },
  {
    type: ePropType.String,
    name: 'displayName',
    id: 'displayName',
    displayName: 'CmsKit::DisplayName',
    validators: () => [Validators.required],
  },
  {
    type: ePropType.String,
    name: 'type',
    id: 'type',
    displayName: 'CmsKit::Type',
    validators: () => [Validators.required],
    options: (data) => of([
      { key: "Content", value: "Content" }
    ])
  }
]);

export const CONTENT_TYPE_EDIT_FORM_PROPS = CONTENT_TYPE_CREATE_FORM_PROPS;

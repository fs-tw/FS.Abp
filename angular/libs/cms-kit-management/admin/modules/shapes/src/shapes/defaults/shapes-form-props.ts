import { ePropType, FormProp } from '@abp/ng.theme.shared/extensions';
import { Validators } from '@angular/forms';
import { Fs } from '@fs-tw/cms-kit-management/proxy/cms-kit-management';
import { of } from 'rxjs';

export const SHAPES_CREATE_FORM_PROPS = FormProp.createMany<Fs.CmsKitManagement.Shapes.Dtos.ShapeDto>([
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
    name: 'contentDefinitionId',
    id: 'contentDefinitionId',
    displayName: 'CmsKit::ContentDefinitionId',
    validators: () => [Validators.required],
  },
]);

export const SHAPES_EDIT_FORM_PROPS = SHAPES_CREATE_FORM_PROPS;

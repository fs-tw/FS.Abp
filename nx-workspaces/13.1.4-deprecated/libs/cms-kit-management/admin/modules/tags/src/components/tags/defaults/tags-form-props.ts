import { ePropType, FormProp } from '@abp/ng.theme.shared/extensions';
import { Validators } from '@angular/forms';
import { Volo } from '@fs-tw/cms-kit-management/proxy/cms-kit';
import { of } from 'rxjs';

export const TAGS_CREATE_FORM_PROPS = FormProp.createMany<Volo.CmsKit.Tags.TagDto>([
  {
    type: ePropType.Enum,
    name: 'entityType',
    id:'entityType',
    displayName: 'CmsKit::EntityType',
    validators: () => [Validators.required],
    options: (data) => of([
      { key: "BlogPost", value: "BlogPost" }
    ])
  },
  {
    type: ePropType.String,
    name: 'name',
    id: 'name',
    displayName: 'CmsKit::Name',
    validators: () => [Validators.required],
  }
]);

export const TAGS_EDIT_FORM_PROPS = TAGS_CREATE_FORM_PROPS;

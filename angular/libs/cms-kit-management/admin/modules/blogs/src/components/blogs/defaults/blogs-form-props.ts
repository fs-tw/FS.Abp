import { ePropType, FormProp } from '@abp/ng.theme.shared/extensions';
import { Validators } from '@angular/forms';
import { Volo } from '@fs-tw/cms-kit-management/proxy/cms-kit';

export const BLOGS_CREATE_FORM_PROPS = FormProp.createMany<Volo.CmsKit.Admin.Blogs.BlogDto>([
  {
    type: ePropType.String,
    name: 'name',
    id:'name',
    displayName: 'CmsKit::Name',
    validators: () => [Validators.required],
  },
  {
    type: ePropType.String,
    name: 'slug',
    id: 'slug',
    displayName: 'CmsKit::Slug',
    validators: () => [Validators.required],
  }
]);

export const BLOGS_EDIT_FORM_PROPS = BLOGS_CREATE_FORM_PROPS;

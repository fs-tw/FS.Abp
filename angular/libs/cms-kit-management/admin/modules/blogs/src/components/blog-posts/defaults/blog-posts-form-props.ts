import { ePropType, FormProp } from '@abp/ng.theme.shared/extensions';
import { Validators } from '@angular/forms';
import { Fs } from '@fs-tw/cms-kit-management/proxy/cms-kit-management';

export const BLOG_POSTS_CREATE_FORM_PROPS = FormProp.createMany<Fs.CmsKitManagement.Blogs.Dtos.BlogPostDto>([
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

export const BLOG_POSTS_EDIT_FORM_PROPS = BLOG_POSTS_CREATE_FORM_PROPS;

import { ePropType, FormProp } from '@abp/ng.theme.shared/extensions';
import { Validators } from '@angular/forms';
import { Volo } from '@fs-tw/cms-kit-management/proxy/cms-kit';

export const BLOG_POST_CREATE_FORM_PROPS = FormProp.createMany<Volo.CmsKit.Admin.Blogs.BlogPostDto>([
  {
    type: ePropType.Hidden,
    name: 'blogId',
    id:'blogId',
    displayName: 'Blog Id',
    validators: () => [Validators.required],
  },
  {
    type: ePropType.String,
    name: 'title',
    id: 'title',
    displayName: 'Title',
    validators: () => [Validators.required],
  },
  {
    type: ePropType.Hidden,
    name: 'slug',
    id: 'slug',
    displayName: 'Slug',
  },
  {
    type: ePropType.String,
    name: 'shortDescription',
    id: 'shortDescription',
    displayName: 'Short Description'
  },
  {
    type: "html" as ePropType,
    name: 'content',
    id: 'content',
    displayName: 'Content',
  }
]);

export const BLOG_POST_EDIT_FORM_PROPS = FormProp.createMany<Volo.CmsKit.Admin.Blogs.BlogPostDto>([
  {
    type: ePropType.Hidden,
    name: 'blogId',
    id:'blogId',
    displayName: 'Blog Id',
    validators: () => [Validators.required],
  },
  {
    type: ePropType.String,
    name: 'title',
    id: 'title',
    displayName: 'Title',
    validators: () => [Validators.required],
  },
  {
    type: ePropType.Hidden,
    name: 'slug',
    id: 'slug',
    displayName: 'Slug',
  },
  {
    type: ePropType.String,
    name: 'shortDescription',
    id: 'shortDescription',
    displayName: 'Short Description'
  },
  {
    type: "html" as ePropType,
    name: 'content',
    id: 'content',
    displayName: 'Content',
  }
]);

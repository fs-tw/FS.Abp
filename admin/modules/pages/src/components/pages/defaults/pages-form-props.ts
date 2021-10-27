import {
  ePropType,
  FormProp,
  FormPropOptions,
} from '@abp/ng.theme.shared/extensions';
import { Validators } from '@angular/forms';
import { Volo } from '@fs-tw/cms-kit-management/proxy/cms-kit';

export function CreateFormProp<R>(
  options: FormPropOptions<R>[]
): FormProp<R>[] {
  return FormProp.createMany<R>(options);
}

export const PAGES_CREATE_FORM_PROPS =
  FormProp.createMany<Volo.CmsKit.Admin.Pages.PageDto>([
    {
      type: ePropType.String,
      name: 'title',
      id: 'title',
      displayName: 'CmsKit::Title',
      validators: () => [Validators.required],
    },
    {
      type: ePropType.String,
      name: 'slug',
      id: 'slug',
      displayName: 'CmsKit::Slug',
      validators: () => [Validators.required],
    },
    {
      type: 'html',
      name: 'content',
      id: 'content',
      displayName: 'CmsKit::Content',
    } as any,
    {
      type: ePropType.String,
      name: 'script',
      id: 'script',
      displayName: 'CmsKit::Script',
    },
    {
      type: ePropType.String,
      name: 'style',
      id: 'style',
      displayName: 'CmsKit::Style',
    },
  ]);

export const PAGES_EDIT_FORM_PROPS = PAGES_CREATE_FORM_PROPS;

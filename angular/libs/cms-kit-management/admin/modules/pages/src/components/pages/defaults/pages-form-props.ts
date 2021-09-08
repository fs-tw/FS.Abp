import { ePropType, FormProp } from '@abp/ng.theme.shared/extensions';
import { Validators } from '@angular/forms';
import { Volo } from '@fs-tw/cms-kit-management/proxy/cms-kit';

export const PAGES_CREATE_FORM_PROPS = FormProp.createMany<Volo.CmsKit.Admin.Pages.PageDto>([
  {
    type: ePropType.String,
    name: 'title',
    id:'title',
    displayName: 'CmsKit::Title',
    //defaultValue:''
  },
  {
    type: ePropType.String,
    name: 'slug',
    id: 'slug',
    displayName: 'CmsKit::Slug',
    //defaultValue:''
  },
  {
    type: ePropType.String,
    name: 'content',
    id: 'content',
    displayName: 'CmsKit::Content',
    // defaultValue:''
  },
  {
    type: ePropType.String,
    name: 'script',
    id: 'script',
    displayName: 'CmsKit::Script',
    // defaultValue:''
  },
  {
    type: ePropType.String,
    name: 'style',
    id: 'style',
    displayName: 'CmsKit::Style',
    // defaultValue:''
  }
]);

export const DEFAULT_PAGES_EDIT_FORM_PROPS = PAGES_CREATE_FORM_PROPS;

import { ePropType, FormProp } from '@abp/ng.theme.shared/extensions';
import { Validators } from '@angular/forms';
import { Volo } from '@fs-tw/cms-kit-management/proxy/cms-kit';
import { of } from 'rxjs';

export const PAGES_CREATE_FORM_PROPS = FormProp.createMany<Volo.CmsKit.Admin.Pages.PageDto>([
  {
    type: ePropType.String,
    name: 'title',
    id:'title',
    displayName: 'CmsKit::Title',
    validators: () => [Validators.required]
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
    displayName: 'CmsKit::Style'
    // options: data => {
    //   //const localization = data.getInjected(LocalizationService);

    //   return of([
    //     {
    //       key: 'Saas::Enum:TenantActivationState.Active',
    //       value: 1,
    //     },
    //     {
    //       key: 'Saas::Enum:TenantActivationState.ActiveWithLimitedTime',
    //       value: 2,
    //     },
    //     {
    //       key: 'Saas::Enum:TenantActivationState.Passive',
    //       value: 3,
    //     },
    //   ]);
    // },
  }
] );

export const PAGES_EDIT_FORM_PROPS = PAGES_CREATE_FORM_PROPS;

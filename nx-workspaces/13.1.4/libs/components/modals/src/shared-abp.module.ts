import { CoreModule } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { UiExtensionsModule } from '@abp/ng.theme.shared/extensions'
import { ThemeAlainUiExtensionsModule } from '@fs-tw/components/extensions';

export const SHARED_ABP_MODULES = [
    CoreModule,
    ThemeSharedModule,
    NgxValidateCoreModule,
    UiExtensionsModule,
    ThemeAlainUiExtensionsModule
];

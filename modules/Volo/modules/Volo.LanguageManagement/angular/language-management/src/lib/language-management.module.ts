import { CoreModule, LazyModuleFactory } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { ModuleWithProviders, NgModule, NgModuleFactory } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { NgxsModule } from '@ngxs/store';
import { CommercialUiModule } from '@volo/abp.commercial.ng.ui';
import { LanguageTextsComponent } from './components/language-texts/language-texts.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { LanguageManagementExtensionsGuard } from './guards/extensions.guard';
import { LanguageManagementRoutingModule } from './language-management-routing.module';
import { LanguageManagementConfigOptions } from './models/config-options';
import { LanguageManagementState } from './states/language-management.state';
import {
  LANGUAGE_MANAGEMENT_CREATE_FORM_PROP_CONTRIBUTORS,
  LANGUAGE_MANAGEMENT_EDIT_FORM_PROP_CONTRIBUTORS,
  LANGUAGE_MANAGEMENT_ENTITY_ACTION_CONTRIBUTORS,
  LANGUAGE_MANAGEMENT_ENTITY_PROP_CONTRIBUTORS,
  LANGUAGE_MANAGEMENT_TOOLBAR_ACTION_CONTRIBUTORS,
} from './tokens/extensions.token';

@NgModule({
  declarations: [LanguagesComponent, LanguageTextsComponent],
  exports: [LanguagesComponent, LanguageTextsComponent],
  imports: [
    LanguageManagementRoutingModule,
    NgxsModule.forFeature([LanguageManagementState]),
    CoreModule,
    CommercialUiModule,
    ThemeSharedModule,
    NgbDropdownModule,
    NgxValidateCoreModule,
  ],
})
export class LanguageManagementModule {
  static forChild(
    options: LanguageManagementConfigOptions = {},
  ): ModuleWithProviders<LanguageManagementModule> {
    return {
      ngModule: LanguageManagementModule,
      providers: [
        {
          provide: LANGUAGE_MANAGEMENT_ENTITY_ACTION_CONTRIBUTORS,
          useValue: options.entityActionContributors,
        },
        {
          provide: LANGUAGE_MANAGEMENT_TOOLBAR_ACTION_CONTRIBUTORS,
          useValue: options.toolbarActionContributors,
        },
        {
          provide: LANGUAGE_MANAGEMENT_ENTITY_PROP_CONTRIBUTORS,
          useValue: options.entityPropContributors,
        },
        {
          provide: LANGUAGE_MANAGEMENT_CREATE_FORM_PROP_CONTRIBUTORS,
          useValue: options.createFormPropContributors,
        },
        {
          provide: LANGUAGE_MANAGEMENT_EDIT_FORM_PROP_CONTRIBUTORS,
          useValue: options.editFormPropContributors,
        },
        LanguageManagementExtensionsGuard,
      ],
    };
  }

  static forLazy(
    options: LanguageManagementConfigOptions = {},
  ): NgModuleFactory<LanguageManagementModule> {
    return new LazyModuleFactory(LanguageManagementModule.forChild(options));
  }
}

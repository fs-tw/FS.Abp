import { CoreModule, LazyModuleFactory } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { ModuleWithProviders, NgModule, NgModuleFactory } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { NgxsModule } from '@ngxs/store';
import { CommercialUiModule } from '@volo/abp.commercial.ng.ui';
import { AbstractTemplateContentComponent } from './components/abstract-template-content/abstract-template-content.component';
import { InlineTemplateContentComponent } from './components/inline-template-content/inline-template-content.component';
import { TemplateContentsComponent } from './components/template-contents/template-contents.component';
import { TextTemplatesComponent } from './components/text-templates/text-templates.component';
import { TextTemplateManagementExtensionsGuard } from './guards/extensions.guard';
import { TextTemplateManagementConfigOptions } from './models/config-options';
import { TextTemplateManagementState } from './state/text-template-management.state';
import { TextTemplateManagementRoutingModule } from './text-template-management-routing.module';
import {
  TEXT_TEMPLATE_MANAGEMENT_ENTITY_ACTION_CONTRIBUTORS,
  TEXT_TEMPLATE_MANAGEMENT_ENTITY_PROP_CONTRIBUTORS,
  TEXT_TEMPLATE_MANAGEMENT_TOOLBAR_ACTION_CONTRIBUTORS,
} from './tokens/extensions.token';

@NgModule({
  declarations: [
    TextTemplatesComponent,
    TemplateContentsComponent,
    InlineTemplateContentComponent,
    AbstractTemplateContentComponent,
  ],
  exports: [
    TextTemplatesComponent,
    TemplateContentsComponent,
    InlineTemplateContentComponent,
    AbstractTemplateContentComponent,
  ],
  imports: [
    TextTemplateManagementRoutingModule,
    NgxsModule.forFeature([TextTemplateManagementState]),
    NgxValidateCoreModule,
    CoreModule,
    CommercialUiModule,
    ThemeSharedModule,
    NgbDropdownModule,
  ],
})
export class TextTemplateManagementModule {
  static forChild(
    options: TextTemplateManagementConfigOptions = {},
  ): ModuleWithProviders<TextTemplateManagementModule> {
    return {
      ngModule: TextTemplateManagementModule,
      providers: [
        {
          provide: TEXT_TEMPLATE_MANAGEMENT_ENTITY_ACTION_CONTRIBUTORS,
          useValue: options.entityActionContributors,
        },
        {
          provide: TEXT_TEMPLATE_MANAGEMENT_TOOLBAR_ACTION_CONTRIBUTORS,
          useValue: options.toolbarActionContributors,
        },
        {
          provide: TEXT_TEMPLATE_MANAGEMENT_ENTITY_PROP_CONTRIBUTORS,
          useValue: options.entityPropContributors,
        },
        TextTemplateManagementExtensionsGuard,
      ],
    };
  }

  static forLazy(
    options: TextTemplateManagementConfigOptions = {},
  ): NgModuleFactory<TextTemplateManagementModule> {
    return new LazyModuleFactory(TextTemplateManagementModule.forChild(options));
  }
}

import { NgModule, APP_INITIALIZER } from '@angular/core';
import { TextTemplateManagementConfigService } from './services/text-template-management-config.service';
import { noop } from '@abp/ng.core';
import { TextTemplateManagementSettingsComponent } from './components/text-template-management-settings.component';

@NgModule({
  declarations: [TextTemplateManagementSettingsComponent],
  providers: [{ provide: APP_INITIALIZER, deps: [TextTemplateManagementConfigService], multi: true, useFactory: noop }],
  exports: [TextTemplateManagementSettingsComponent],
  entryComponents: [TextTemplateManagementSettingsComponent],
})
export class TextTemplateManagementConfigModule {}

import { NgModule } from '@angular/core';
import { TextTemplateManagementComponent } from './components/text-template-management.component';
import { TextTemplateManagementRoutingModule } from './text-template-management-routing.module';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { CoreModule } from '@abp/ng.core';

@NgModule({
  declarations: [TextTemplateManagementComponent],
  imports: [CoreModule, ThemeSharedModule, TextTemplateManagementRoutingModule],
  exports: [TextTemplateManagementComponent],
})
export class TextTemplateManagementModule {}

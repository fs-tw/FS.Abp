import { NgModule } from '@angular/core';
import { ThemeAlainSharedModule } from '@fs-tw/theme-alain/shared';
import { CoreModule } from '@abp/ng.core';
import { PageModule } from '@abp/ng.components/page';
import { FormsComponent } from './components/forms/forms.component';

let COMPONENT = [];

let MODAL_COMPONENT = [];

@NgModule({
  declarations: [...COMPONENT, ...MODAL_COMPONENT, FormsComponent],
  imports: [CoreModule, PageModule, ThemeAlainSharedModule],
  exports: [ThemeAlainSharedModule, ...COMPONENT, ...MODAL_COMPONENT, FormsComponent],
})
export class CmsKitManagementAdminSharedModule {}

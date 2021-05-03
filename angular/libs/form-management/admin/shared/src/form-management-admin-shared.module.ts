import { NgModule } from '@angular/core';
import { ThemeAlainSharedModule } from '@fs-tw/theme-alain/shared';
import { CoreModule } from '@abp/ng.core';
import { PageModule } from '@abp/ng.components/page';

let COMPONENT = [];

let MODAL_COMPONENT = [];

@NgModule({
  declarations: [...COMPONENT, ...MODAL_COMPONENT],
  imports: [CoreModule, PageModule, ThemeAlainSharedModule],
  exports: [ThemeAlainSharedModule, ...COMPONENT, ...MODAL_COMPONENT],
})
export class CmsKitManagementAdminSharedModule {}

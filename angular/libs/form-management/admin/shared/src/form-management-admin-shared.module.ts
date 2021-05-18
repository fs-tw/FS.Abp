import { NgModule } from '@angular/core';
import { ThemeAlainSharedModule } from '@fs-tw/theme-alain/shared';
import { CoreModule } from '@abp/ng.core';
import { PageModule } from '@abp/ng.components/page';
import { FormsComponent } from './components/forms/forms.component';
import { PageHeaderDefaultDirective } from './directives/page-header-default/page-header-default.directive';
import { PageHeaderDefaultComponent } from './directives/page-header-default/page-header-default.component';
import { LayoutModule} from '@fs-tw/theme-alain-ms/layout'

let COMPONENT = [
  PageHeaderDefaultDirective
];

let MODAL_COMPONENT = [];

@NgModule({
  declarations: [...COMPONENT, ...MODAL_COMPONENT, FormsComponent,PageHeaderDefaultComponent],
  imports: [CoreModule, PageModule, ThemeAlainSharedModule,LayoutModule],
  exports: [ThemeAlainSharedModule, ...COMPONENT, ...MODAL_COMPONENT, FormsComponent],
})
export class FormManagementAdminSharedModule {}

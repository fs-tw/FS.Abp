import { CoreModule } from '@abp/ng.core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommercialUiModule } from '@volo/abp.commercial.ng.ui';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { UiExtensionsModule } from '@fs-tw/theme-alain-ms/shared/extensions'
import { ThemeAlainMsSharedModule } from '@fs-tw/theme-alain-ms/shared';
@NgModule({
  declarations: [],
  imports: [
    CoreModule,
    ThemeSharedModule,
    CommercialUiModule,
    NgbDropdownModule,
    NgxValidateCoreModule,
    UiExtensionsModule,
    ThemeAlainMsSharedModule
  ],
  exports: [
    CoreModule,
    ThemeSharedModule,
    //ThemeLeptonModule,
    CommercialUiModule,
    NgbDropdownModule,
    NgxValidateCoreModule,
    UiExtensionsModule,
    ThemeAlainMsSharedModule
  ],
  providers: []
})
export class SharedModule {}

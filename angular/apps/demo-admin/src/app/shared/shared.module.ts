import { CoreModule } from '@abp/ng.core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommercialUiModule } from '@volo/abp.commercial.ng.ui';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { ThemeAlainSharedModule } from '@fs-tw/theme-alain/shared'

@NgModule({
  declarations: [],
  imports: [
    CoreModule,
    ThemeSharedModule,
    CommercialUiModule,
    NgbDropdownModule,
    NgxValidateCoreModule
  ],
  exports: [
    CoreModule,
    ThemeSharedModule,
    ThemeAlainSharedModule,
    CommercialUiModule,
    NgbDropdownModule,
    NgxValidateCoreModule,
  ],
  providers: []
})
export class SharedModule {}

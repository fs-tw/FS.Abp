import { CoreModule } from '@abp/ng.core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
// import { NgxValidateCoreModule } from '@ngx-validate/core';
// import { NgAlainSharedModule } from '@fs-tw/theme.ng-alain/shared';
// import { LayoutModule } from '@fs-tw/theme.ng-alain/layout';
import { ThemeAlainModule } from '@fs-tw/theme-alain';
import { NgxValidateCoreModule } from '@ngx-validate/core';

@NgModule({
  declarations: [],
  imports: [
    CoreModule,
    ThemeSharedModule,
    ThemeAlainModule,
    NgbDropdownModule,
    NgxValidateCoreModule
  ],
  exports: [
    CoreModule,
    ThemeSharedModule,
    ThemeAlainModule,
    NgbDropdownModule,
    NgxValidateCoreModule
  ],
  providers: [],
})
export class SharedModule {}

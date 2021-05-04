import { CoreModule } from '@abp/ng.core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { ThemeUnifyModule } from '@fs-tw/theme-unify';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { NgxValidateCoreModule } from '@ngx-validate/core';

@NgModule({
  declarations: [],
  imports: [
    CoreModule,
    ThemeSharedModule,
    ThemeUnifyModule,
    NgbDropdownModule,
    NgxValidateCoreModule,
  ],
  exports: [
    CoreModule,
    ThemeSharedModule,
    ThemeUnifyModule,
    NgbDropdownModule,
    NgxValidateCoreModule,
  ],
  providers: [],
})
export class SharedModule {}

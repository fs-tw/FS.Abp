import { CoreModule } from '@abp/ng.core';
import { NgModule } from '@angular/core';
//import { ThemeBasicModule } from '@abp/ng.theme.basic';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { NgAlainMsSharedModule } from '@fs/theme.ng-alain-ms/shared';
import { LayoutModule } from '@fs/theme.ng-alain-ms/layout';
import { ThemeNgAlainMsModule } from '@fs/theme.ng-alain-ms';

@NgModule({
  declarations: [],
  imports: [
    CoreModule,
    ThemeSharedModule,
    //ThemeBasicModule,
    NgxValidateCoreModule,
    LayoutModule,
    ThemeNgAlainMsModule
  ],
  exports: [
    CoreModule,
    ThemeSharedModule,
    //ThemeBasicModule,
    NgxValidateCoreModule,
    LayoutModule,
    ThemeNgAlainMsModule
  ],
  providers: [],
})
export class SharedModule {}

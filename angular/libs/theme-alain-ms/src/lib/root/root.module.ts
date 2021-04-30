import { NgModule } from '@angular/core';
import { BaseRootModule } from '@fs-tw/theme-alain';
import { LayoutModule } from '@fs-tw/theme-alain-ms/layout';
import { APPINIT_PROVIDES } from './providers/startup.service';

@NgModule({
  imports: [LayoutModule.forRoot(),BaseRootModule],
  exports: [BaseRootModule],
  providers: [
    //...APPINIT_PROVIDES
  ]
})
export class RootModule { }


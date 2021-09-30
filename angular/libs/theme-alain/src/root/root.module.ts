import { NgModule } from '@angular/core';
import { BaseRootModule } from './base-root.module';
import { LayoutModule } from '@fs-tw/theme-alain/layout';

@NgModule({
  imports: [BaseRootModule],
  exports: [LayoutModule,BaseRootModule],
  providers: [
    //...APPINIT_PROVIDES
  ],
})
export class RootModule {}

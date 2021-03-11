import { CommonModule } from '@angular/common';
import { CoreModule } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { SHARED_DELON_MODULES } from './shared-delon.module';
import { SHARED_ZORRO_MODULES } from './shared-zorro.module';
import { UiExtensionsModule } from '@fs-tw/theme-alain-ms/shared/extensions';

const declarationsWithExports = [
];

// #region third libs

const ABPMODULES = [
  CoreModule,
  UiExtensionsModule
];

// #endregion

@NgModule({
  //declarations: [...declarationsWithExports],
  imports: [
    ...SHARED_DELON_MODULES,
    ...SHARED_ZORRO_MODULES,
    ...ABPMODULES,
  ],
  exports: [
    ...SHARED_DELON_MODULES,
    ...SHARED_ZORRO_MODULES,
    //...declarationsWithExports,
    ...ABPMODULES,
  ],
})
export class SharedModule {}

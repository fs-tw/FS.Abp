import { NgModule } from '@angular/core';
import { ThemeAlainMsSharedModule } from '@fs-tw/theme-alain-ms/shared';
import { UiExtensionsModule } from '@fs-tw/theme-alain-ms/shared/extensions'
import { GetFileByIdPipe } from './pipe/get-file.pipe';
const COMPONENT = [GetFileByIdPipe]

@NgModule({
  declarations: [...COMPONENT],
  imports: [
    ThemeAlainMsSharedModule,
    UiExtensionsModule
  ],
  exports: [
    ...COMPONENT,
    ThemeAlainMsSharedModule,
    UiExtensionsModule
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { ThemeAlainMsSharedModule } from '@fs-tw/theme-alain-ms/shared';
import { UiExtensionsModule } from '@fs-tw/theme-alain-ms/shared/extensions'
import { ImagePickerComponent } from './components/image-picker/image-picker.component';
import { GetFileByIdPipe } from './pipe/get-file.pipe';
const COMPONENT = [
  GetFileByIdPipe,
  ImagePickerComponent
]

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

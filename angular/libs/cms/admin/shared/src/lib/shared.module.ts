import { NgModule } from '@angular/core';
import { ThemeAlainSharedModule } from '@fs-tw/theme-alain/shared';
import { ImagePickerComponent } from './components/image-picker/image-picker.component';
import { GetFileByIdPipe } from './pipe/get-file.pipe';
const COMPONENT = [
  GetFileByIdPipe,
  ImagePickerComponent
]

@NgModule({
  declarations: [...COMPONENT],
  imports: [
    ThemeAlainSharedModule
  ],
  exports: [
    ...COMPONENT,
    ThemeAlainSharedModule
  ]
})
export class SharedModule { }

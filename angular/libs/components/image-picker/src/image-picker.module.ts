import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { ImagePickerComponent } from './components/image-picker/image-picker.component';

const COMPONENTS = [
  ImagePickerComponent
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NzModalModule,
    NzUploadModule,
    NzIconModule
  ],
  declarations: [
    ...COMPONENTS
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class ImagePickerModule {}

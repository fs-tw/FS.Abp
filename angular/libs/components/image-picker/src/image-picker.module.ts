import { Injector, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzUploadModule } from 'ng-zorro-antd/upload';

import { ImagePickerComponent } from './components/image-picker/image-picker.component';
import { ImagePicker } from './models';
import { IMAGE_PICKER_TOKEN } from '.';

const COMPONENTS = [
  ImagePickerComponent
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NzModalModule,
    NzUploadModule,
  ],
  declarations: [
    ...COMPONENTS
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class ImagePickerModule {
  static forRoot(options: ImagePicker.ImagePickerToken = null): ModuleWithProviders<ImagePickerModule> {
    return {
      ngModule: ImagePickerModule,
      providers: [
        {
          provide: IMAGE_PICKER_TOKEN,
          useFactory: configure_IMAGE_PICKER_TOKEN,
          deps: [Injector, options],
        }
        // NG_ALAIN_THEME_STYLES_PROVIDERS,
        // NG_ALAIN_MS_THEME_NAV_ITEM_PROVIDERS,
      ],
    };
  }
}

function configure_IMAGE_PICKER_TOKEN(options: ImagePicker.ImagePickerToken) {
  let result = {
    Api: options.Api,
    Environment: options.Environment,
    Notify: options.Notify
  };
  return result;
}

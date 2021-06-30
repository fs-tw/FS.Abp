import { NgModule } from '@angular/core';
import { CoreModule } from '@abp/ng.core';
import { FsNgAlainImagePickerComponent } from './components/fs-ng-alain-image-picker.component';
import { SHARED_ZORRO_MODULES } from './shared-zorro.module';
import { ImageUrlTempPipe } from './pipes/image-url.pipe';

const exportedDeclarations = [FsNgAlainImagePickerComponent];

@NgModule({
  declarations: [...exportedDeclarations,ImageUrlTempPipe],
  exports: [...exportedDeclarations],
  imports: [CoreModule, SHARED_ZORRO_MODULES],
})
export class FsNgAlainImagePickerModule {}

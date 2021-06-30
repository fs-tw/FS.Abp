import { NgModule } from '@angular/core';
import { CoreModule } from '@abp/ng.core';
import { PickCoverImageComponent } from './components/pick-cover-image.component';
import { FsNgAlainImagePickerModule } from '@fs-tw/components/image-picker';
import { SHARED_ZORRO_MODULES } from './shared-zorro.module';

const exportedDeclarations = [PickCoverImageComponent];

@NgModule({
  declarations: [...exportedDeclarations],
  exports: [...exportedDeclarations],
  imports: [CoreModule, FsNgAlainImagePickerModule, ...SHARED_ZORRO_MODULES],
})
export class PickCoverImageModule {}

import { NgModule } from '@angular/core';
import { CoreModule } from '@abp/ng.core';
import { FsQuillEditorComponent } from './components/quill-editor.component';
import { FsNgAlainImagePickerModule } from '@fs-tw/components/image-picker';
import { QuillModule } from 'ngx-quill';
import { SHARED_ZORRO_MODULES } from './shared-zorro.module';

const exportedDeclarations = [FsQuillEditorComponent];

@NgModule({
  declarations: [...exportedDeclarations],
  exports: [...exportedDeclarations],
  imports: [CoreModule,QuillModule,FsNgAlainImagePickerModule,...SHARED_ZORRO_MODULES],
})
export class QuillEditorModule {}

import { NgModule } from '@angular/core';
import { CoreModule } from '@abp/ng.core';
import { ThemeAlainSharedModule } from '@fs-tw/theme-alain/shared';
import { FsQuillEditorComponent } from './components/quill-editor.component';
import { QuillModule } from 'ngx-quill';

const exportedDeclarations = [FsQuillEditorComponent];

@NgModule({
  declarations: [...exportedDeclarations],
  exports: [...exportedDeclarations],
  imports: [CoreModule, ThemeAlainSharedModule,QuillModule],
})
export class QuillEditorModule {}

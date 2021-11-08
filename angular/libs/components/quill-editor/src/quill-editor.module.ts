import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { QuillEditorComponent } from './components/quill-editor/quill-editor.component';
import { CoreModule } from '@abp/ng.core';
import { ImagePickerModule } from '@fs-tw/components/image-picker';

const COMPONENTS = [
  QuillEditorComponent
]

@NgModule({
  imports: [
    CoreModule,
    FormsModule,
    ImagePickerModule,
    QuillModule.forRoot(),
  ],
  declarations: [
    ...COMPONENTS
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class ThemeQuillEditorModule {
  static forRoot(): ModuleWithProviders<ThemeQuillEditorModule> {
    return {
      ngModule: ThemeQuillEditorModule,
      providers: [
      ],
    };
  }
}
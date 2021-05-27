import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { QuillModule, QUILL_CONFIG_TOKEN } from 'ngx-quill';

@NgModule({
  declarations: [HomeComponent],
  imports: [SharedModule, HomeRoutingModule, QuillModule],
  providers: [
    {
      provide: QUILL_CONFIG_TOKEN,
      useValue: {
        modules: {
          toolbar: {
            // handlers: {
            //   image: (state: boolean) => image(state),
            // },
            container: [
              ['bold', 'italic', 'underline', 'strike'], // toggled buttons
              ['blockquote', 'code-block'],
  
              [{ header: 1 }, { header: 2 }], // custom button values
              [{ list: 'ordered' }, { list: 'bullet' }],
              [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
              [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
              [{ header: [1, 2, 3, false] }],
  
              [{ color: [] }, { background: [] }], // dropdown with defaults from theme
              // [{ font: [] }],
              [{ align: [] }],
  
              ['clean'], // remove formatting button
  
              ['link', 'image', 'video'], // link and image, video
            ],
          },
        },
      },
    },
  ],
})
export class HomeModule {}
export function image(_: boolean): void {
  let fileInput = this.container.querySelector(
    'input.ql-image[type=file]',
  );
  if (fileInput == null) {
    fileInput = document.createElement('input');
    fileInput.setAttribute('type', 'file');
    fileInput.setAttribute(
      'accept',
      this.quill.uploader.options.mimetypes.join(', '),
    );
    fileInput.classList.add('ql-image');
    fileInput.addEventListener('change', () => {
      const range = this.quill.getSelection(true);
      this.quill.uploader.upload(range, fileInput.files);
      fileInput.value = '';
    });
    this.container.appendChild(fileInput);
  }
  fileInput.click();
}

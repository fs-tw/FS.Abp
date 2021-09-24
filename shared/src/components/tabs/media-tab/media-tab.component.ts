import {
  ChangeDetectionStrategy,
  Component,
  Injector
} from '@angular/core';
import { ModalTabComponent } from '@fs-tw/components/modals';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { EnvironmentService } from '@abp/ng.core';

@Component({
  selector: 'fs-media-tab',
  templateUrl: './media-tab.component.html',
  providers: [
    {
      provide: ModalTabComponent,
      useExisting: MediaTabComponent,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediaTabComponent extends ModalTabComponent {
  CoverImageMediaFiles: NzUploadFile[] = [];

  constructor(injector: Injector, environmentService: EnvironmentService) {
    super();
  }

  ngOnInit(): void {}

  isValid() {
    return true;
  }

  getValue() {
    let coverImageMediaFile = this.CoverImageMediaFiles.find(Boolean);
    return { coverImageMediaFile };
  }

  // beforeUpload = (file: NzUploadFile): Observable<boolean> => {
  //   //file.url="https://www.instagram.com/static/images/homepage/screenshot3.jpg/f0c687aa6ec2.jpg";
  //   //file.thumbUrl="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png";

  //   let getBase64 = new Observable<string>((observer) => {
  //     const reader = new FileReader();
  //     reader.onload= () => {
  //       observer.next(reader.result.toString());
  //       observer.complete();
  //     };
  //     reader.onerror=(error)=>observer.error(error);
  //     reader.readAsDataURL(file as any);
  //     return { unsubscribe() {} };
  //   }).pipe(take(1));

  //   return getBase64.pipe(
  //     map((d) => {
  //       file.thumbUrl = d;
  //       file.url = d;
  //       this.CoverImageMediaFiles = [file];
  //       return false;
  //     })
  //   );
  // };
  // previewImage: string | undefined = '';
  // previewVisible = false;
  // handlePreview = async (file: NzUploadFile) => {
  //   this.previewImage = file.thumbUrl;
  //   this.previewVisible = true;
  // };
  addFile(data) {
    this.CoverImageMediaFiles = [data];
  }
}

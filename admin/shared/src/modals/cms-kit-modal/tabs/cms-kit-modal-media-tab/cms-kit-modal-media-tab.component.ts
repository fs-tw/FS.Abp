import {
  ChangeDetectionStrategy,
  Component,
  Injector,
  OnInit,
} from '@angular/core';
import { ModalTabComponent } from '@fs-tw/theme-alain/shared';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { EnvironmentService } from '@abp/ng.core';

function getBase64(file: File): Promise<string | ArrayBuffer | null> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

@Component({
  selector: 'fs-tw-cms-kit-modal-media-tab',
  templateUrl: './cms-kit-modal-media-tab.component.html',
  providers: [
    {
      provide: ModalTabComponent,
      useExisting: CmsKitModalMediaTabComponent,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CmsKitModalMediaTabComponent extends ModalTabComponent {

  CoverImageMediaFiles: NzUploadFile[]=[];

  constructor(injector: Injector, environmentService: EnvironmentService) {
    super();
  }

  ngOnInit(): void {
  }

  isValid() {
    return true;
  }

  getValue() {
    let coverImageMediaFile = this.CoverImageMediaFiles.find(Boolean);
    return { coverImageMediaFile };
  }

  beforeUpload = (file: NzUploadFile): boolean => {
    this.CoverImageMediaFiles = [file];
    return false;
  };
}

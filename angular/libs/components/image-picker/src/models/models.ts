import { Observable } from 'rxjs';
import type { EntityDto } from '@abp/ng.core';

export namespace ImagePicker {
  export class ImageFile {
    fileName: string;
    fileUrl: string;
    fileUid: string
  
    constructor(fileUid: string = '', fileName: string = '', fileUrl: string = '') {
      this.fileUid = fileUid;
      this.fileName = fileName;
      this.fileUrl = fileUrl;
    }
  }
  
  export class ViewImage {
    image: ImageFile;
    isVisabled: boolean;
  
    constructor() {
      this.image = new ImageFile();
      this.isVisabled = false;
    }
  }

  export class UploadFile extends File {
    uid: string;
  }

  export interface MediaDescriptorDto extends EntityDto<string> {
    name?: string;
    mimeType?: string;
    size: number;
  }

  export interface ImagePickerForm {
    name: string;
    form: FormData;
  }

  export type ImagePickerApi = {
    uploadImage(entityType: string, files: Array<File>):
      Observable<string[]>
  }

  export type Environment = {
    getApiUrl(key?: string): string
  }

  export type Notify = {
    success(title: string, content: string);
    error(title: string, content: string);
  }

  export type ImagePickerToken = {
    Api: ImagePickerApi;
    Environment: Environment;
    Notify: Notify;
  };
}

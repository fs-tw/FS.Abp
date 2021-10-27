import { Observable } from 'rxjs';

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

  export type ImagePickerApi = {
    uploadImage(input: FormData): Observable<string[]>
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

import { Component, Input, OnInit, TemplateRef, Output, EventEmitter } from '@angular/core';

import { NzUploadFile } from 'ng-zorro-antd/upload';
import { FileService } from '../../../shared'
import { ToasterService } from '@abp/ng.theme.shared';
import { ConfigStateService,EnvironmentService } from '@abp/ng.core';

export class ImageFile {
  fileName: string;
  fileUrl: string;

  constructor(fileName: string = '', fileUrl: string = '') {
    this.fileName = fileName;
    this.fileUrl = fileUrl;
  }
}

export class SaveFile {
  isUpload: boolean;
  file: File;
  fileName: string;
  fileUrl: string;

  constructor(fileName: string, fileUrl: string, file: File) {
    this.fileName = fileName;
    this.fileUrl = fileUrl;
    this.file = file;

    this.isUpload = this.file != null;
  }
}

class ViewImage {
  image: ImageFile;
  isVisabled: boolean;

  constructor() {
    this.image = new ImageFile();
    this.isVisabled = false;
  }
}

@Component({
  selector: 'image-picker',
  templateUrl: './image-picker.component.html',
  styleUrls: ['./image-picker.component.css']
})
export class ImagePickerComponent implements OnInit {

  /** 縮圖寬度，單位 px，預設 104px */
  @Input() imageWidth: string = '104px';

  /** 縮圖高度，單位 px ，預設 104px */
  @Input() imageHeight: string = '104px';

  /** 外框寬度，單位 px ，預設 104px */
  @Input() borderWidth: string = '104px';

  /** 外框高度，單位 px ，預設 104px */
  @Input() borderHeight: string = '104px';

  /** 上傳最大數量 */
  @Input() maxImageCount: number = null;

  /** 是否可同時選多張圖片 */
  @Input() isMultiple: boolean = true;

  /** 顯示圖片 Template ，縮圖比例功能會失效 */
  @Input() imageTemplate: TemplateRef<any>;

  /** 上傳圖片 Template，可完整替換成其他形式，如︰按鈕上傳 */
  @Input() uploadTemplate: TemplateRef<any>;
  
  /** 上傳按鈕文字 Template，若 uploadTemplate 有值則無效 */
  @Input() uploadTextTemplate: TemplateRef<any>;

  /** 是否排列在同一行，同一行時行寬同 imageWidth */
  @Input() inLine: boolean = true;

  /** 上傳按鈕顯示於前面 */
  @Input() showFrontButton: boolean = true;

  /** 原已上傳圖片 */
  @Input() existFiles: ImageFile[] = [];

  /** 原已上傳圖片被刪除的檔名 */
  private deleteFiles: string[] = [];

  /** 本次上傳所顯示圖片 */
  showFiles: ImageFile[] = [];

  /** 本次上傳圖片 */
  private uploadFiles: NzUploadFile[] = [];

  /** 顯示預覽圖 modal */
  viewImage: ViewImage = new ViewImage();

  get canUpload(): boolean {
    let imageNumber = this.existFiles.length + this.uploadFiles.length;
    return this.maxImageCount == null || imageNumber < this.maxImageCount;
  }

  constructor(
    private toasterService: ToasterService,
    private environmentService:EnvironmentService,
    private fileService: FileService
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.existFiles = this.existFiles
      .filter(x => x.fileUrl)
      .map(x => new ImageFile(x.fileName, this.fileService.getFileUrl(x.fileUrl)));

    this.uploadFiles = [];
    this.showFiles = [];
    this.deleteFiles = [];
  }

  clear() {
    this.existFiles = [];
    this.deleteFiles = [];
    this.uploadFiles = [];
    this.showFiles = [];
  }

  // private getHttpUrl(url: string): string {
  //   let result = url;
  //   if (url.includes("http")) return result;

  //   return this.environmentService.getApiUrl() + url;
  // }

  beforeUpload = (file: NzUploadFile): boolean => {
    let isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      this.toasterService.error("圖片格式須為 jpg 或 png");
      return false;
    }

    let fileName = file.name;

    let hasExistImage = this.existFiles.findIndex(x => x.fileName == fileName) > -1;
    let hasShowImage = this.showFiles.findIndex(x => x.fileName == fileName) > -1;
    if (hasExistImage || hasShowImage) return false;


    let imgFile: any = file;
    this.getBase64(imgFile, (img) => {
      if (!this.canUpload) {
        this.toasterService.error("圖片數已達上限");
        return;
      }

      this.uploadFiles.push(imgFile);
      this.showFiles.push(new ImageFile(fileName, img));
    });

    return false;
  };

  private getBase64(img: File, callback: (img: string) => void): void {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result!.toString()));
    reader.readAsDataURL(img);
  }

  deleteFile(fileName: string) {
    let inExistImage = this.existFiles.findIndex(x => x.fileName == fileName) > -1;
    let inShowImage = this.showFiles.findIndex(x => x.fileName == fileName) > -1;

    // 現有圖片刪除
    if (inExistImage) {
      this.existFiles = this.existFiles.filter(x => x.fileName != fileName);
      this.deleteFiles.push(fileName);
      return;
    }

    // 上傳圖片刪除
    if (inShowImage) {
      this.showFiles = this.showFiles.filter(x => x.fileName != fileName);
      this.uploadFiles = this.uploadFiles.filter(x => x.name != fileName);
    }

  }

  controllModal(state: boolean, image: ImageFile = new ImageFile()) {  
    this.viewImage.image = image;
    this.viewImage.isVisabled = state;
  }

  getDeleteFileNames(): string[] {
    return this.deleteFiles;
  }


  getNewUploadFiles():SaveFile[]{
    let updateFiles: SaveFile[] = this.uploadFiles.map((x: any) => new SaveFile(x.name, '', x));
    return updateFiles;
  }

  getUploadFiles(): SaveFile[] {
    let existFiles = this.existFiles.filter(x => !this.deleteFiles.includes(x.fileName)).map(x => new SaveFile(x.fileName, x.fileUrl, null));
    let updateFiles: SaveFile[] = this.uploadFiles.map((x: any) => new SaveFile(x.name, '', x));
    
    return existFiles.concat(updateFiles);
  }

}

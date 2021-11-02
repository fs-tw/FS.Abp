import { Component, Injector, Input, OnInit, TemplateRef, ChangeDetectorRef } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';

import { ImagePicker } from '../../models/models';
import { IMAGE_PICKER_TOKEN } from '../../token/token';


@Component({
  selector: 'fs-image-picker',
  templateUrl: './image-picker.component.html',
  styleUrls: ['./image-picker.component.css']
})
export class ImagePickerComponent implements OnInit {

  /** 縮圖寬度，單位 px，最小 104px */
  @Input() imageWidth: string = '104px';

  /** 縮圖高度，單位 px ，最小 104px */
  @Input() imageHeight: string = '104px';

  /** 上傳最大數量 */
  @Input() maxImageCount: number = null;

  /** 顯示圖片 Template ，縮圖比例功能會失效 */
  @Input() imageTemplate: TemplateRef<any>;

  /** 上傳圖片 Template */
  @Input() uploadTemplate: TemplateRef<any>;

  /** 是否排列在同一行，同一行時行寬同 imageWidth */
  @Input() inLine: boolean = true;

  /** 上傳按鈕顯示於前面 */
  @Input() showFrontButton: boolean = false;

  /** 上傳按鈕顯示於後面 */
  @Input() showBackendButton: boolean = true;

  /** 原已上傳圖片 */
  @Input() existFiles: ImagePicker.ImageFile[] = [];

  /** 限制上傳格式 */
  @Input() limitImageType: string[] = [
    'image/jpeg',
    'image/png'
  ];

  /** 上傳格式錯誤時顯示文字 */
  @Input() validImageTypeFailText: string = "圖片格式須為 jpg 或 png";

  /** EntityType參數 */
  @Input() shortEntityType: string;

  /** 原已上傳圖片被刪除的檔名 */
  private deleteFiles: string[] = [];

  /** 本次上傳所顯示圖片 */
  showFiles: ImagePicker.ImageFile[] = [];

  /** 本次上傳圖片 */
  private uploadFiles: ImagePicker.UploadFile[] = [];

  /** 顯示預覽圖 modal */
  viewImage: ImagePicker.ViewImage = new ImagePicker.ViewImage();

  get canUpload(): boolean {
    let imageNumber = this.existFiles.length + this.uploadFiles.length;
    return this.maxImageCount == null || imageNumber < this.maxImageCount;
  }

  token: ImagePicker.ImagePickerToken;

  constructor(
    injector: Injector,
    private cdr: ChangeDetectorRef
  ) {
    this.token = injector.get(IMAGE_PICKER_TOKEN);
  }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.existFiles = this.existFiles
      .filter(x => x.fileUrl)
      .map(x => new ImagePicker.ImageFile(x.fileUid, x.fileName, this.getHttpUrl(x.fileUrl)));

    this.uploadFiles = [];
    this.showFiles = [];
  }

  clear() {
    this.existFiles = [];
    this.deleteFiles = [];
    this.uploadFiles = [];
    this.showFiles = [];
  }

  private getHttpUrl(url: string): string {
    let result = url;
    if (_.startsWith(url, 'http') || _.startsWith(url, 'asset')) return result;

    // Further 取得檔案 api
    return this.token.Environment.getApiUrl() + url;
  }

  beforeUpload = (file: ImagePicker.UploadFile): boolean => {
    let validFileType = this.limitImageType.includes(file.type);
    if (!validFileType) {
      this.token.Notify.error("錯誤", this.validImageTypeFailText);
      return false;
    }

    let fileName = file.name;

    let hasExistImage = this.existFiles.findIndex(x => x.fileName == fileName) > -1;
    let hasShowImage = this.showFiles.findIndex(x => x.fileName == fileName) > -1;
    if (hasExistImage || hasShowImage) return false;


    this.getBase64(file, (img) => {
      if (!this.canUpload) {
        this.token.Notify.error("錯誤", "圖片數已達上限");
        return;
      }

      this.uploadFiles.push(file);
      this.showFiles.push(new ImagePicker.ImageFile(file.uid, fileName, img));
      this.cdr.detectChanges();
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

  controllModal(state: boolean, image: ImagePicker.ImageFile = new ImagePicker.ImageFile()) {
    this.viewImage.image = image;
    this.viewImage.isVisabled = state;
  }

  uploadImage(): Observable<string[]> {
    let uploadFiles: File[] = this.uploadFiles;

    let saveImageAction = uploadFiles.length > 0 ?
      this.token.Api.uploadImage(this.shortEntityType, uploadFiles) :
      of([] as string[])

    let files = this.existFiles.filter(x => !this.deleteFiles.includes(x.fileName));
    let allFiles = files.concat(this.showFiles);
    
    return saveImageAction
      .pipe(
        map((uploadResults) => {
          allFiles = allFiles.map(y => {
            let fileIndex = this.uploadFiles.findIndex(z => z.uid == y.fileUid);
            if (fileIndex > -1) y.fileUid = uploadResults[fileIndex];
            return y;
          })

          return allFiles.map(x => x.fileUid);
        })
      );
  }

}

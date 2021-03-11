import { Component, Input, OnInit } from '@angular/core';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { Confirmation, ConfirmationService, ToasterService } from '@abp/ng.theme.shared';

// import { Confirmation, ConfirmationService,ToasterService } from '@abp/ng.theme.shared';
// import { Store } from '@ngxs/store';
// import { NzModalRef } from 'ng-zorro-antd/modal';
// import { FileService } from '@fs-tw/theme-core';

@Component({
  selector: 'fs-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  @Input()
  existFileUrls: string[] = [];

  fileList: NzUploadFile[] = [];

  constructor(
    private confirmationService: ConfirmationService
  ) {

  }

  ngOnInit() {

  }

  beforeUpload = (file: NzUploadFile): boolean => {
    let exist = this.existFileUrls.findIndex(x => x == file.name) > -1 ||
      this.fileList.findIndex(x => x.name == file.name) > -1;
    if (exist) return false;
    this.fileList = this.fileList.concat(file);
    return false;
  };

  delete(url) {
    this.confirmationService
    .warn('確認刪除嗎？', '系統訊息')
    .subscribe((status: Confirmation.Status) => {
      if (status === Confirmation.Status.confirm) {
        this.existFileUrls = this.existFileUrls.filter(x => x != url);
      }
    });
  }

  // fileUrl: string[] = [];
  // tplModal: NzModalRef;
  // loading: boolean = false;
  // fileList: NzUploadFile[] = [];
  // constructor(
  //   private toasterService: ToasterService,
  //   private confirmationService: ConfirmationService,
  //   private fileService: FileService,
  //   private store: Store,
  // ) { }

  // ngOnInit(): void {
  // }

  // getUrl(x: string) {    
  //   if (x.includes('http')) {
  //     return x;
  //   } else {
  //     return this.fileService.getFileByName(x);
  //   }
  // }

  // getFileName(x: string) {
  //   let splitStr = x.split("\\");
  //   return splitStr[splitStr.length - 1];
  // }
  

  // save(): string[] {
  //   this.loading = true;
  //   const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
  //   const formData = new FormData();
  //   let urlList: string[] = this.existFileUrls;
  //   this.fileList.forEach((file: any) => {
  //     let url = `cms\\posts\\${randomName}\\${file.name}`;
  //     urlList.push(url);
  //     formData.append('files[]', file, url);
  //   });    
  //   this.fileService.uploadFileByFormData(formData).subscribe(() => {
  //   }, (error) => {
  //     this.loading = false;
  //     this.toasterService.error("上傳失敗");
  //   });
  //   return urlList;
  // }
}

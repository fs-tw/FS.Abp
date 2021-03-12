import { Component, Input, OnInit } from '@angular/core';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { Confirmation, ConfirmationService, ToasterService } from '@abp/ng.theme.shared';

export class FileInfo {
  fileName: string;
  fileUrl: string;

  constructor(fileName: string = '', fileUrl: string = '') {
    this.fileName = fileName;
    this.fileUrl = fileUrl;
  }
}

export class FileData {
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

@Component({
  selector: 'fs-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  @Input()
  existFiles: FileInfo[] = [];

  fileList: NzUploadFile[] = [];


  constructor(
    private confirmationService: ConfirmationService
  ) {

  }

  ngOnInit() {

  }

  beforeUpload = (file: NzUploadFile): boolean => {
    let exist = this.existFiles.findIndex(x => x.fileName == file.name) > -1 ||
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
          this.existFiles = this.existFiles.filter(x => x != url);
        }
      });
  }

  getNewUploadFiles(): FileData[] {
    let updateFiles: FileData[] = this.fileList.map((x: any) => new FileData(x.name, '', x));
    return updateFiles;
  }
}

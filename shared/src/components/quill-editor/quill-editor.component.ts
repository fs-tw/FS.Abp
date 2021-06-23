import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FsNgAlainImagePickerComponent } from '@fs-tw/theme-alain/shared';
import { RestService, EnvironmentService } from '@abp/ng.core';
import { Observable } from 'rxjs';

import { Volo } from '@fs-tw/cms-kit-management/proxy';

@Component({
  selector: 'fs-quill-editor',
  templateUrl: './quill-editor.component.html'
})
export class FsQuillEditorComponent implements OnInit {

  @ViewChild(FsNgAlainImagePickerComponent) imagePicker: FsNgAlainImagePickerComponent;

  @Input()
  content: string;

  @Output()
  contentChange: EventEmitter<string> = new EventEmitter();

  @Input()
  entityType: string = "blogpost";

  @Input()
  modalTitle: string = "上傳圖片";

  isVisible: boolean;
  loading: boolean = false;

  editor: any;
  
  constructor(
    private restService: RestService,
    private environmentService: EnvironmentService
  ) {
    
  }

  ngOnInit(): void {
  }

  onEditorCreate(editor) {
    let vm = this;
    let toolbar = editor.getModule('toolbar');
    toolbar.handlers['image'] = function (x) {
      vm.isVisible = true;

      // clear image picker
      for(let img of vm.imagePicker.showFiles){
        vm.imagePicker.deleteFile(img.fileName)
      }

      vm.editor = editor;
    };
  }

  uploadFile(): Observable<Volo.CmsKit.Admin.MediaDescriptors.MediaDescriptorDto> {
    let files = this.imagePicker.getUploadFiles();
    if (files.length < 1) return;

    let file = files[0];

    let formdata = new FormData();
    formdata.append('inputStream.name', file.name);
    formdata.append('inputStream.file', file as any, file.name);
    
    return this.restService.request<
      any,
      Volo.CmsKit.Admin.MediaDescriptors.MediaDescriptorDto
    >(
      {
        method: 'POST',
        url: `/api/cms-kit-admin/media/${this.entityType}`,
        body: formdata,
      },
      { apiName: 'CmsKitAdmin' }
    );
  }

  handleOk() {
    this.loading = true;
    this.uploadFile()
      .subscribe((x) => {
        this.loading = false;
        
        let url = `${this.environmentService.getApiUrl('cms-kit')}/api/cms-kit/media/${x.id}`
        
        let range = this.editor.getSelection(true);
        this.editor.insertEmbed(
          range.index,
          'image',
          url,
          'user'
        );

        this.handleClose();
      });

    
  }

  handleClose() {
    if (this.loading) return;

    this.isVisible = false;
  }

  onChange() {
    this.contentChange.emit(this.content);
  }

}

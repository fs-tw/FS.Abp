import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import * as _ from 'lodash';
import { Fs } from '@fs-tw/cms/proxy';

import { PageService } from '../../../providers/page.service';
import { ImageFile, ImagePickerComponent } from '../../image-picker/image-picker.component';

// import { ConfigStateService } from '@abp/ng.core';
// import { NzUploadFile } from 'ng-zorro-antd/upload';
// import { Observable } from 'rxjs';
// import * as _ from 'lodash';

// import { ConfirmationService,ToasterService } from '@abp/ng.theme.shared';
// import { BlogDto } from '@fs-tw/cms/proxy';
// import { FileService } from '@fs-tw/theme-core';

// import { PageService } from '../../../providers/page.service';
// import { Store } from '@ngxs/store';

@Component({
  selector: 'fs-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.less']
})
export class CreateComponent implements OnInit {

  @ViewChild("DefaultImagePicker") defaultImagePicker : ImagePickerComponent;

  @Input()
  blogId: string;

  @Output()
  onSave = new EventEmitter();

  isVisible = false;

  data: Fs.Cms.Blogs.Dtos.BlogDto;
  defaultImages: ImageFile[] = [];

  constructor(
    private pageService: PageService
  ) {

  }


  ngOnInit() {

  }

  showModal() {
    this.data = {
      no: "",
      displayName: "",
      description: "",
      parentId: null,
      disable: false,
      listStyle: "",
      sequence: 0,
      url: "",
      iconUrl: ""
    } as Fs.Cms.Blogs.Dtos.BlogDto;

    this.defaultImages = [];

    if (this.blogId) {
      this.pageService.getBlogById(this.blogId).subscribe((x) => {
        this.data = x;

        // 已上傳圖片
        this.defaultImages = [new ImageFile('test', 'https://dummyimage.com/140x98/000/fff')];
        // if (x.iconUrl) this.defaultImages.push(new ImageFile(x.iconUrl, 'http://' + x.iconUrl));
      });
    }

    this.isVisible = true;
  }

  handleCancel() {
    this.isVisible = false;
  }

  save() {
    // 補上傳、刪除檔案 api
    let uploadImageInfos = this.defaultImagePicker.getUploadFiles();
    let deleteImageNames = this.defaultImagePicker.getDeleteFileNames();

    const formData = new FormData();
    for(let item of uploadImageInfos) {
      if (item.isUpload) formData.append('files[]', item.file, '');
    }
    console.log(uploadImageInfos, deleteImageNames);


    let input: Fs.Cms.Blogs.Dtos.BlogDto = _.cloneDeep(this.data);
    
    let action: Observable<any>;
    if (!this.blogId) {
      input.no = input.displayName;
      action = this.pageService.createBlog(input);
    } else {
      action = this.pageService.updateBlog(this.blogId, input);
    }

    action.subscribe(() => {
      this.onSave.emit();
      this.handleCancel();
    }, (error) => {
      console.error(error);
    });
  }


  // @Input() input: BlogDto;
  // @Output() onSave = new EventEmitter();
  // @Input() isParent = false;


  // i: BlogDto = {
  //   enable: true
  // } as BlogDto;

  // uploadFile: NzUploadFile = null;
  // iconUrl: string;
  // hasImg: boolean = false;

  // constructor(
  //   private store: Store,
  //   private configStateService: ConfigStateService,
  //   private toasterService: ToasterService,
  //   private pageService: PageService,
  //   private cmsFileService: FileService
  // ) { }

  // ngOnInit() {

  // }

  

  // getImageUrl(img: string) {
  //   return this.cmsFileService.getFileByName(img);
  //   // return this.configStateService.getApiUrl() + "/api/themes/file/" + img.replace(/\\/g, "%5C") + "?p=" +  Math.floor(Math.random()*999)+1;
  // }

  // handleCancel() {
  //   this.isVisible = false;
  // }

  // save() {
  //   let act: Observable<any>;
  //   if (!this.input) {
  //     act = this.pageService.createBlog(this.i);
  //   }
  //   else {
  //     act = this.pageService.updateBlog({ ...this.input, ...this.i }, this.input.codesId)
  //   }
  //   act.subscribe(x => {
  //     this.handleCancel();

  //     if (this.uploadFile) {
  //       this.saveImage(x);
  //       return;
  //     }

  //     this.onSave.emit();
  //     if (this.input) {
  //       this.toasterService.success("更新成功！");
  //       return;
  //     }
  //     this.toasterService.success("新增成功！");
  //   })
  // }

  // //#region 圖片上傳
  // saveImage(blog: BlogDto) {
  //   const formData = new FormData();
  //   let file: any = this.uploadFile;
  //   let fileExName = file.type === 'image/png' ? ".png" : ".jpg";
  //   let url = `cms\\blog\\${blog.codesId}\\icon${fileExName}`;
  //   formData.append('files[]', file, `cms\\blog\\${blog.codesId}\\icon${fileExName}`);
    
  //   this.cmsFileService.uploadFileByFormData(formData).subscribe(x=>{
  //     blog.iconUrl = url
  //     this.pageService.updateBlog(blog, blog.codesId)
  //       .subscribe((x) => {
  //         this.onSave.emit();
  //         if (this.input) {
  //           this.toasterService.success("更新成功！");
  //           return;
  //         }
  //         this.toasterService.success("新增成功！");
  //       }, error => {
  //         this.toasterService.error("上傳更新失敗")
  //       })
  //   });   
  // }

  // beforeUpload = (file: NzUploadFile): boolean => {
  //   let isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  //   if (!isJpgOrPng) {
  //     this.toasterService.error("圖片格式須為 jpg 或 png");
  //     return
  //   }

  //   let imgFile: any = file;
  //   this.getBase64(imgFile, (img) => {
  //     this.uploadFile = file;
  //     this.iconUrl = img;
  //     this.hasImg = true;
  //   });

  //   return false;
  // };

  // private getBase64(img: File, callback: (img: string) => void): void {
  //   const reader = new FileReader();
  //   reader.addEventListener('load', () => callback(reader.result!.toString()));
  //   reader.readAsDataURL(img);
  // }

  // resetIcon() {
  //   this.uploadFile = null;
  //   this.iconUrl = "assets/img/info.png";
  //   this.i.iconUrl = "";
  //   this.hasImg = false;
  // }
  // //#endregion

}

import { ConfigStateService,EnvironmentService } from '@abp/ng.core';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { BlogDto, PostImageDto } from '@fs-tw/cms/proxy';
// import { Confirmation, ConfirmationService, ToasterService } from '@abp/ng.theme.shared';
// import { Store } from '@ngxs/store';
// import { forkJoin, Observable } from 'rxjs';
// import { FileService } from '@fs-tw/theme-core';
// import { PageService } from '../../providers/page.service';
// import { PostsStateService } from '../../providers/post/poststate.service';
// import { UploadFileComponent } from '../upload-file/upload-file.component';
// import { TagComponent } from '../tag/tag.component';
// import { finalize } from 'rxjs/operators';
@Component({
  selector: 'fs-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.less']
})
export class DetailComponent implements OnInit {

  ngOnInit() {

  }

  // apiUrl = "";
  // @ViewChild(UploadFileComponent) uploadFileComponent: UploadFileComponent;

  // @ViewChild(TagComponent) tagComponent: TagComponent;

  // data: any =
  //   { published: true, published_At: new Date(), attachmentFileUrls: [], content: "", postImages: [], postTags: [] };

  // isVisible = false;
  // selectImage = "";
  // showList = [];
  // fileList = [];
  // isSpinning = false;
  // blogs: BlogDto[] = []




  // constructor(
  //   private confirmationService: ConfirmationService,
  //   private toasterService: ToasterService,
  //   private postsStateService: PostsStateService,
  //   private configStateService: ConfigStateService,
  //   private activatedRoute: ActivatedRoute,
  //   private pageService: PageService,
  //   private fileService: FileService,
  //   private environmentService:EnvironmentService,
  //   private router: Router,
  // ) {

  //   this.apiUrl = this.environmentService.getApiUrl() + "/";
  //   this.getBlogs();
  //   this.activatedRoute.params.subscribe(x => {
  //     if (x.id) {
  //       this.isSpinning = true;
  //       this.pageService.getPostById(x["id"]).subscribe(post => {
  //         this.data = post;
  //         this.isSpinning = false;
  //         this.init_list();
  //       })
  //     }
  //   });
  // }


  // getBlogs() {
  //   this.pageService.blogGetList().subscribe(x => {
  //     this.blogs = x;
  //   });
  // }

  // ngOnDestroy(): void { }

  // ngOnInit() { }

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

  // init_list() {
  //   this.fileList = [];
  //   this.showList = this.data.postImages.map((item, index) => {
  //     return {
  //       uid: index.toString(),
  //       status: 'done',
  //       type: "image/jpeg",
  //       url: this.getUrl(item.url),
  //       thumbUrl: this.getUrl(item.url),
  //       needDelete: true,
  //       isCover: item.isCover,
  //       name: this.getFileName(item.url),
  //       or_url: item.url
  //     }
  //   });
  // }

  // showModal(imgUrl: string): void {
  //   this.isVisible = true;
  //   this.selectImage = imgUrl;
  // }

  // handleCancel(): void {
  //   this.isVisible = false;
  // }


  // setFileUrls(event) {
  //   this.data.attachmentFileUrls = event;
  // }

  // beforeUpload = (file: any): boolean => {
  //   var reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   var vm = this;
  //   reader.addEventListener("load", function () {
  //     file.url = reader.result;
  //     file.needDelete = false;
  //     vm.fileList.push(file);
  //     vm.showList.push(file);
  //   }, false);
  //   return false;
  // };

  // delete(item: any, index: number) {
  //   this.confirmationService.warn(
  //     '確認要刪除嗎？',
  //     '系統訊息', {
  //     cancelText: "關閉",
  //     yesText: "確定"
  //   }).subscribe((status: Confirmation.Status) => {
  //     if (status === Confirmation.Status.confirm) {
  //       this.showList.splice(index, 1);
  //     }
  //   });

  // }

  // save() {
  //   this.isSpinning = true
  //   let mes = "建立成功！";
  //   if (this.data.id) mes = "更新成功！";
  //   let cover = this.showList.find(x => { return x.isCover == true });

  //   let result = this.handleUpload()
  //   let im: string[] = this.showList.map(x => x.or_url);
  //   let old_images = this.data.postImages.filter(x => im.some(y => y == x.url));
  //   this.data.postImages = result.concat(old_images);
  //   if (cover) {
  //     this.data.postImages.forEach(x => {
  //       if (x.url.includes(cover.name)) x.isCover = true;
  //       else x.isCover = false;
  //     });
  //   }
  //   this.data.attachmentFileUrls = this.uploadFileComponent.save();
  //   this.data.published_At = new Date(this.data.published_At).toLocalISOString();
  //   let act: Observable<any>;
  //   if (this.data.id) {
  //     act = this.postsStateService.update(this.data, this.data.id);
  //   } else {
  //     act = this.postsStateService.create(this.data);
  //   }
  //   act.subscribe(x => {
  //     forkJoin(this.tagComponent.save(x.id)).pipe(finalize(() => {
  //       this.toasterService.success(mes);
  //       this.isSpinning = false;
  //       this.router.navigate(["cms/post"], { queryParams: { blog: this.data.blogCodeId } });
  //     })).subscribe(x => { })
  //   });
  // }

  // handleUpload(): PostImageDto[] {
  //   const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
  //   const formData = new FormData();
  //   let postImageList: PostImageDto[] = []
  //   this.fileList.forEach((file: any) => {
  //     let url = `cms\\posts\\${randomName}\\${file.name}`;
  //     postImageList.push({ url, isCover: false });
  //     formData.append('files[]', file, url);
  //   });
  //   this.fileService.uploadFileByFormData(formData).subscribe(() => {
  //   }, (error) => {
  //     this.toasterService.error("上傳失敗");
  //   });

  //   return postImageList;
  // }

  // refreshStatus(input) {
  //   this.showList.forEach(x => {
  //     if (x.uid != input.uid) x.isCover = false;
  //   });
  // }
}

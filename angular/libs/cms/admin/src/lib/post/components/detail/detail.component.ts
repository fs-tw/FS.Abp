import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Confirmation, ConfirmationService, ToasterService } from '@abp/ng.theme.shared';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import * as _ from 'lodash';

import { Fs } from '@fs-tw/cms/proxy';

import { PageService } from '../../providers/page.service';
import { ImageFile, ImagePickerComponent } from '../image-picker/image-picker.component';

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
  @ViewChild("DefaultImagePicker") defaultImagePicker : ImagePickerComponent;

  postId: string;
  data: Fs.Cms.Posts.Dtos.PostDto;
  dateRange: Date[] = [new Date(), new Date()];
  defaultImages: ImageFile[] = [];

  blogs: Fs.Cms.Blogs.Dtos.BlogDto[] = [];

  isLoading: boolean = false;

  coverImage: string = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private pageService: PageService,
    private confirmationService: ConfirmationService
  ) {
  }

  ngOnInit() {
    this.postId = this.activatedRoute.snapshot.paramMap.get('postId');
    console.log(this.postId);

    this.getPost();
    this.getBlogs();
  }

  getPost() {
    this.data = {
      blogId: null,
      title: '',
      subtitle: '',
      url: '',
      content: '',
      disable: false,
      startTime: '',
      endTime: '',
      displayMode: 0,
      sequence: 0,
      attachmentFileUrls: [],
      postImages: []
    } as Fs.Cms.Posts.Dtos.PostDto;

    this.dateRange = [new Date(), new Date()];

    this.defaultImages = [new ImageFile('test', 'https://dummyimage.com/200x130/000/fff')];
    this.coverImage = 'test'

    if (this.postId) {
      this.pageService.getPostById(this.postId).subscribe((x) => {
        this.data = x;

        let st = x.startTime ? new Date(x.startTime) : new Date();
        let ed = x.endTime ? new Date(x.endTime) : new Date();
        this.dateRange = [st, ed];

        this.defaultImages = x.postImages.map(y => new ImageFile(y.url, y.url) );

        let coverImageIndex = x.postImages.findIndex(y => y.isCover);
        if (coverImageIndex > -1) this.coverImage = x.postImages[coverImageIndex].url;
      })
    }
  }

  getBlogs() {
    let input = {
      skipCount: 0,
      maxResultCount: 999,
      sorting: 'sequence'
    } as Fs.Cms.Blogs.Dtos.BlogGetListDto;

    this.pageService.getBlogs(input).subscribe((x) => {
      this.blogs = x.items;
    })
  }

  deleteFile(fileName: string) {
    this.confirmationService.warn(`確定刪除 ${fileName} 嗎？`, "系統訊息")
      .subscribe((result) => {
        if (result != Confirmation.Status.confirm) return;

        this.defaultImagePicker.deleteFile(fileName);
      })
  }

  save() {
    let item: Fs.Cms.Posts.Dtos.PostDto = _.cloneDeep(this.data);
    item.startTime = this.dateRange[0].toLocalISOString();
    item.endTime = this.dateRange[1].toLocalISOString();

    // TODO: 上傳檔案、上傳附件、加標籤

    let action: Observable<any>;
    if (!this.postId) {
      action = this.pageService.createPost(item);
    } else {
      action = this.pageService.updatePost(this.postId, item);
    }

    action.subscribe((x) => {
      this.router.navigate(["cms/post"]);
    })
    
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

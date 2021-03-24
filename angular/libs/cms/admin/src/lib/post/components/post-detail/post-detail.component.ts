import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {
  Confirmation,
  ConfirmationService,
  ToasterService,
} from '@abp/ng.theme.shared';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin, Observable, of } from 'rxjs';
import * as _ from 'lodash';
import * as dns from 'date-fns';
import { Fs } from '@fs-tw/cms/proxy';
import { UploadFileComponent } from '../upload-file/upload-file.component';
import { PageService } from '../../providers/page.service';
import { ImageFile, ImagePickerComponent } from '@fs-tw/cms/admin/shared';
import { FileService, FileDescriptorDto } from '@fs-tw/cms/admin/shared';
import { map } from 'rxjs/operators';
import { FileInfo } from '../upload-file/upload-file.component';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.less'],
})
export class PostDetailComponent implements OnInit {
  @ViewChild('DefaultImagePicker') defaultImagePicker: ImagePickerComponent;
  @ViewChild('DefaultUploadFile') defaultUploadFile: UploadFileComponent;
  postId: string;
  data: Fs.Cms.Posts.Dtos.PostDto;
  dateRange: Date[] = [new Date(), new Date()];
  defaultImages: ImageFile[] = [];
  defaultFiles: FileInfo[] = [];
  blogs: Fs.Cms.Blogs.Dtos.BlogDto[] = [];

  isLoading: boolean = false;
  directory;
  coverImage: string = '';
  contentFileName = '';
  constructor(
    private router: Router,
    private fileService: FileService,
    private activatedRoute: ActivatedRoute,
    private pageService: PageService,
    private confirmationService: ConfirmationService
  ) {
    this.postId = this.activatedRoute.snapshot.paramMap.get('postId');
    this.pageService
      .findByProviderByKeyAndGroup(
        'FS.Cms.Posts',
        this.postId ? this.postId : this.getRand()
      )
      .subscribe((x) => {
        this.directory = x;
      });
  }

  ngOnInit() {
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
      attachments: [],
      images: [],
      contents: [],
    } as Fs.Cms.Posts.Dtos.PostDto;
    this.contentFileName = '';
    this.dateRange = [new Date(), null];

    this.defaultImages = [];
    this.defaultFiles = [];
    this.coverImage = '';

    if (this.postId) {
      this.pageService.getPostById(this.postId).subscribe((x) => {
        this.data = x;
        let st = x.startTime ? new Date(x.startTime) : new Date();
        let ed = x.endTime ? new Date(x.endTime) : null;
        this.dateRange = [st, ed];

        this.defaultImages = x.images.map(
          (y) => new ImageFile(y.fileId, y.fileId)
        );
        this.defaultFiles = x.attachments.map(
          (y) => new FileInfo(y.fileId, this.fileService.getFileUrl(y.fileId))
        );
        let coverImageIndex = x.images.findIndex((y) => y.default);
        if (coverImageIndex > -1)
          this.coverImage = x.images[coverImageIndex].fileId;

        if (x.contents[0]) {
          this.pageService
            .getFileDescriptor(x.contents[0].fileId)
            .subscribe((x) => {
              this.contentFileName = x.name;
            });

          this.fileService
            .getFileBlobById(x.contents[0].fileId)
            .subscribe((data) => {
              const blob = new Blob([data], {
                type: 'text/plain;charset=utf-8',
              });
              let reader = new FileReader();
              reader.onload = () => {
                this.data.contents[0].fileId = reader.result.toString();
              };
              reader.readAsText(blob);
            });
        }
      });
    }
  }

  getBlogs() {
    let input = {
      skipCount: 0,
      maxResultCount: 999,
      sorting: 'sequence',
    } as Fs.Cms.Blogs.Dtos.BlogGetListDto;

    this.pageService.getBlogs(input).subscribe((x) => {
      this.blogs = x.items;
      if (!this.postId)
        this.data.blogId = this.activatedRoute.snapshot.queryParamMap.get(
          'blogId'
        );
    });
  }

  deleteFile(fileName: string) {
    this.confirmationService
      .warn(`確定刪除 ${fileName} 嗎？`, '系統訊息')
      .subscribe((result) => {
        if (result != Confirmation.Status.confirm) return;

        this.defaultImagePicker.deleteFile(fileName);
      });
  }

  getRand() {
    return (Math.floor(Math.random() * 100) + 1).toString();
  }

  save() {
    // TODO: 刪除檔案、加標籤
    // let deleteImages = this.defaultImagePicker.getDeleteFileNames();
    // let deleteTargets = item.postImages.filter(x => deleteImages.some(y => y == x.name));
    // let deleteActions = deleteTargets.map(x=>{
    //   return this.pageService.deleteFile(x.imageId);
    // })
    // forkJoin(deleteActions).subscribe(x=>{})

    let item: Fs.Cms.Posts.Dtos.PostDto = _.cloneDeep(this.data);
    item.startTime = this.dateRange[0].toLocalISOString();
    item.endTime = this.dateRange[1]?.toLocalISOString();

    let contentAction$ = of('');
    if (item.displayMode == Fs.Cms.Posts.DisplayMode.Content) {
      // let now = new Date();
      const blob = new Blob([item.contents[0].fileId], {
        type: 'text/plain;charset=utf-8',
      });
      let useContentFileName =
        dns.format(new Date(), 'yyyyMMddHHmmss') +
        '-' +
        this.getRand() +
        '.txt'; //now.toLocaleDateString() + "_" + now.toLocaleTimeString() + "_" + (Math.floor(Math.random() * 100) + 1) + ".txt";
      if (this.contentFileName) useContentFileName = this.contentFileName;
      let file = this.blobToFile(blob, useContentFileName);
      contentAction$ = this.fileService
        .uploadFile(file, this.directory.id)
        .pipe(map((x) => x.id));
    }

    let imagesAction = this.uploadImage$(item);
    let filesAction = this.uploadFiles$(item);
    forkJoin([imagesAction, filesAction, contentAction$]).subscribe((x) => {
      item.images = x[0];
      item.attachments = x[1];
      item.contents[0].fileId = x[2];
      this.savePost(item);
    });
  }

  private blobToFile = (theBlob: Blob, fileName: string): File => {
    return new File([theBlob], fileName, { type: 'text/plain;charset=utf-8' });
  };

  uploadFiles$(
    item: Fs.Cms.Posts.Dtos.PostDto
  ): Observable<Fs.Cms.Core.Dtos.ResourceDto[]> {
    let domainItem: Fs.Cms.Posts.Dtos.PostDto = _.cloneDeep(item);
    let newUploadFiles = this.defaultUploadFile.getNewUploadFiles();

    let existFileNames = this.defaultUploadFile.existFiles.map(
      (x) => x.fileName
    );
    domainItem.attachments = domainItem.attachments.filter((x) =>
      existFileNames.some((y) => y == x.fileId)
    );

    if (newUploadFiles.length == 0) {
      return of(domainItem.attachments);
    }

    let fileActions = newUploadFiles.map((savefile) => {
      return this.fileService.uploadFile(savefile.file, this.directory.id);
    });

    return forkJoin(fileActions).pipe(
      map((x) => {
        let result: Fs.Cms.Core.Dtos.ResourceDto[] = x.map((y) => {
          return {
            name: y.name,
            fileId: y.id,
          } as any;
        });
        return result.concat(domainItem.attachments);
      })
    );
  }

  uploadImage$(
    item: Fs.Cms.Posts.Dtos.PostDto
  ): Observable<Fs.Cms.Core.Dtos.ResourceDto[]> {
    let domainItem: Fs.Cms.Posts.Dtos.PostDto = _.cloneDeep(item);
    let newUploadImages = this.defaultImagePicker.getNewUploadFiles();

    let existFileNames = this.defaultImagePicker.existFiles.map(
      (x) => x.fileName
    );
    domainItem.images = domainItem.images.filter((x) =>
      existFileNames.some((y) => y == x.fileId)
    );

    if (newUploadImages.length == 0) {
      return of(domainItem.images);
    }

    let fileActions = newUploadImages.map((savefile) => {
      return this.fileService.uploadFile(savefile.file, this.directory.id);
    });

    return forkJoin(fileActions).pipe(
      map((x) => {
        let result: Fs.Cms.Core.Dtos.ResourceDto[] = x.map((y) => {
          return {
            name: y.name,
            isCover: this.coverImage == y.name,
            imageId: y.id,
          } as any;
        });
        return result.concat(domainItem.images);
      })
    );
  }

  savePost(item: Fs.Cms.Posts.Dtos.PostDto) {
    let action: Observable<any>;
    if (!this.postId) {
      action = this.pageService.createPost(item);
    } else {
      action = this.pageService.updatePost(this.postId, item);
    }

    action.subscribe((x) => {
      this.router.navigate(['cms/post']);
    });
  }
}

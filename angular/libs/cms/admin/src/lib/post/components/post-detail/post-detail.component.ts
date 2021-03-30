import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {
  Confirmation,
  ConfirmationService,
  ToasterService,
} from '@abp/ng.theme.shared';
import { ActivatedRoute, Router } from '@angular/router';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { forkJoin, Observable, of, Subscription } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import * as _ from 'lodash';
import * as dns from 'date-fns';

import { Fs } from '@fs-tw/cms/proxy';
import { ImageFile, ImagePickerComponent } from '@fs-tw/cms/admin/shared';
import { FileService, FileDescriptorDto } from '@fs-tw/cms/admin/shared';


import { FileInfo } from '../upload-file/upload-file.component';
import { UploadFileComponent } from '../upload-file/upload-file.component';
import { PageService } from '../../providers/page.service';
import { PageStateService } from '../../providers/page-state.service';

@Component({
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.less'],
})
export class PostDetailComponent implements OnInit {
  @ViewChild('DefaultImagePicker') defaultImagePicker: ImagePickerComponent;
  @ViewChild('DefaultUploadFile') defaultUploadFile: UploadFileComponent;

  subs: Subscription[] = [];
  post$: Observable<Fs.Cms.Posts.Dtos.PostDto>;

  postId: string;
  data: Fs.Cms.Posts.Dtos.PostDto;
  dateRange: Date[] = [new Date(), new Date()];
  defaultImages: ImageFile[] = [];
  defaultFiles: FileInfo[] = [];
  blogs: Fs.Cms.Blogs.Dtos.BlogDto[] = [];

  isLoading: boolean = false;
  directory;
  coverImage: string = '';

  contentFileName: string = '';
  content: string = '';

  constructor(
    private router: Router,
    private fileService: FileService,
    private activatedRoute: ActivatedRoute,
    private pageService: PageService,
    private pageStateService: PageStateService,
    private confirmationService: ConfirmationService
  ) {
    this.post$ = this.pageStateService.Post$;
  }

  ngOnInit() {
    this.getPost();
    this.getBlogs();
  }

  ngOnDestroy(): void {
    this.subs.forEach((s) => {
      s.unsubscribe();
    });
  }

  getPost() {
    let self = this;

    this.subs.push(
      this.post$
        .pipe(
          switchMap(post => {
            this.postId = post.id;
            this.data = post;

            initData();

            let findDirectory$ = this.pageService
              .findByProviderByKeyAndGroup(
                'FS.Cms.Posts',
                this.postId ? this.postId : this.getRand()
              );

            if (post == null) return of([findDirectory$, null, null]);

            initPostFile(post);

            return post.contents.length > 0 ? forkJoin([
              findDirectory$,
              this.pageService.getFileDescriptor(post.contents[0].fileId),
              this.fileService.getFileBlobById(post.contents[0].fileId)
            ]) : of([findDirectory$, null, null]);
          })
        )
        .subscribe((x: [Fs.Abp.File.Directories.Dtos.DirectoryDescriptorDto, FileDescriptorDto, Blob]) => {
          this.directory = x[0];
          if(x[1] != null) this.contentFileName = x[1].name;
          if(x[2] != null) readContent(x[2]);
        })
    );

    function initData() {
      self.contentFileName = '';
      self.dateRange = [new Date(), null];

      self.defaultImages = [];
      self.defaultFiles = [];
      self.coverImage = '';
      self.contentFileName = '';
      self.content = '';
    }

    function initPostFile(post: Fs.Cms.Posts.Dtos.PostDto) {
      let st = post.startTime ? new Date(post.startTime) : new Date();
      let ed = post.endTime ? new Date(post.endTime) : null;
      self.dateRange = [st, ed];

      self.defaultImages = post.images.map(
        (y) => new ImageFile(y.no, y.fileId, y.fileId)
      );
      self.defaultFiles = post.attachments.map(
        (y) => new FileInfo(y.fileId, y.no, self.fileService.getFileUrl(y.fileId))
      );
      let coverImageIndex = post.images.findIndex((y) => y.default);
      if (coverImageIndex > -1)
        self.coverImage = post.images[coverImageIndex].no;
    }

    function readContent(blog: Blob) {
      const blob = new Blob([blog], {
        type: 'text/plain;charset=utf-8',
      });
      let reader = new FileReader();
      reader.onload = () => {
        self.content = reader.result.toString();
      };
      reader.readAsText(blob);
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

    let contentAction$ = this.uploadContent$(item);

    let imagesAction = this.uploadImage$();
    let filesAction = this.uploadFiles$(item);
    forkJoin([imagesAction, filesAction, contentAction$]).subscribe((x) => {
      item.images = x[0];
      item.attachments = x[1];

      if (x[2] != '') {
        item.contents = [
          {
            fileId: x[2],
            no: 'main',
            default: true,
            sequence: 0,
            properties: {},
          } as Fs.Cms.Core.Dtos.ResourceDto
        ]
      }

      this.savePost(item);
    });
  }

  private blobToFile = (theBlob: Blob, fileName: string): File => {
    return new File([theBlob], fileName, { type: 'text/plain;charset=utf-8' });
  };

  uploadContent$(
    item: Fs.Cms.Posts.Dtos.PostDto
  ): Observable<string> {
    let contentAction$ = of('');
    if (item.displayMode == Fs.Cms.Posts.DisplayMode.Content) {
      const blob = new Blob([this.content], {
        type: 'text/plain;charset=utf-8',
      });

      let useContentFileName =
        dns.format(new Date(), 'yyyyMMddHHmmss') +
        '-' +
        this.getRand() +
        '.txt';

      if (this.contentFileName)
        useContentFileName = this.contentFileName;

      let file = this.blobToFile(blob, useContentFileName);

      contentAction$ = this.fileService
        .uploadFile(file, this.directory.id)
        .pipe(map((x) => x.id));
    }

    return contentAction$;
  }

  uploadFiles$(
    item: Fs.Cms.Posts.Dtos.PostDto
  ): Observable<Fs.Cms.Core.Dtos.ResourceDto[]> {
    let domainItem: Fs.Cms.Posts.Dtos.PostDto = _.cloneDeep(item);
    let newUploadFiles = this.defaultUploadFile.getNewUploadFiles();

    let existFileNames = this.defaultUploadFile.existFiles.map(
      (x) => x.fileId
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
            fileId: y.id,
            no: y.name,
            default: false,
            sequence: 0,
            properties: {},
          } as Fs.Cms.Core.Dtos.ResourceDto
        });
        return result.concat(domainItem.attachments);
      })
    );
  }

  uploadImage$(): Observable<Fs.Cms.Core.Dtos.ResourceDto[]> {
    let updateImages = this.defaultImagePicker.getUpdateFiles().map(x => {
      return {
        fileId: x.fileId,
        no: x.fileName,
        default: this.coverImage == x.fileName,
        sequence: 0,
        properties: {},
      } as Fs.Cms.Core.Dtos.ResourceDto
    });
    let uploadImages = this.defaultImagePicker.getUploadFiles();

    if (uploadImages.length == 0) {
      return of(updateImages);
    }

    let fileActions = uploadImages.map((savefile) => {
      return this.fileService.uploadFile(savefile.file, this.directory.id);
    });

    return forkJoin(fileActions).pipe(
      map((x) => {
        let result: Fs.Cms.Core.Dtos.ResourceDto[] = x.map((y) => {
          return {
            fileId: y.id,
            no: y.name,
            default: this.coverImage == y.name,
            sequence: 0,
            properties: {},
          } as Fs.Cms.Core.Dtos.ResourceDto
        });
        return updateImages.concat(result);
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

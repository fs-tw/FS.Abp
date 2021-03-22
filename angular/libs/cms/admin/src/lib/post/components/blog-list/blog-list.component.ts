import {
  Component,
  Injector,
  OnInit,
  ViewChild,
  OnDestroy,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { combineLatest, Observable, of, Subscription } from 'rxjs';

import { ListService } from '@abp/ng.core';
import {
  EXTENSIONS_IDENTIFIER,
  FormPropData,
  generateFormFromProps,
} from '@abp/ng.theme.shared/extensions';
import {
  Confirmation,
  ConfirmationService,
  ToasterService,
} from '@abp/ng.theme.shared';

import { FileService } from '@fs-tw/cms/admin/shared';
import { PageService } from '../../providers/page.service';
import { PostStateService } from '../../providers/post-state.service';
import { eCmsRouteNames, ExtensionsService } from '@fs-tw/cms/config';
import { Fs, Volo } from '@fs-tw/cms/proxy';
import { ImageFile, ImagePickerComponent } from '@fs-tw/cms/admin/shared';
import { QueryValueType } from '@angular/compiler/src/core';
import { map, mergeMap } from 'rxjs/operators';
import { AttachmentFileInfoDto } from 'libs/cms/proxy/src/fs/cms/posts/dtos';

@Component({
  selector: 'blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.less'],
  providers: [
    ListService,
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: eCmsRouteNames.Blog,
    },
  ],
})
export class BlogListComponent implements OnInit, OnDestroy {
  subs: Subscription[] = [];
  @ViewChild('DefaultImagePicker') defaultImagePicker: ImagePickerComponent;

  datas: Fs.Cms.Blogs.Dtos.BlogDto[] = [];
  count = 0;
  selectedBlog$: Observable<Fs.Cms.Blogs.Dtos.BlogDto>;

  Modal: {
    create: boolean;
    isVisible: boolean;
    form: FormGroup;
    Data: Fs.Cms.Blogs.Dtos.BlogDto;
    Directory: Volo.FileManagement.Directories.DirectoryDescriptorDto;
    Images: ImageFile[];
  };



  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private extensionsService: ExtensionsService,
    private pageService: PageService,
    protected injector: Injector,
    public readonly list: ListService,
    private fileService: FileService,
    private toasterService: ToasterService,
    private confirmationService: ConfirmationService,
    private postStateService: PostStateService
  ) {
    this.selectedBlog$ = this.postStateService.Blog$;
    this.Modal = {
      create: false,
      isVisible: false,
      form: null,
      Data: {} as Fs.Cms.Blogs.Dtos.BlogDto,
      Directory: {} as Volo.FileManagement.Directories.DirectoryDescriptorDto,
      Images: [],
    };
  }

  ngOnDestroy(): void {
    if (this.subs.length > 0) {
      this.subs.forEach((sub) => sub.unsubscribe());
    }
  }

  ngOnInit() {
    this.subs.push(
      this.extensionsService.Actions$[eCmsRouteNames.Blog].subscribe((x) => {
        switch (x.name) {
          case 'Edit':
            this.edit(x.record.id);
            break;
          case 'Delete':
            this.deleteBlog(x.record);
            break;
          case 'Add':
            this.add();
            break;
        }
      })
    );

    this.hookToQuery();
  }

  hookToQuery() {
    const customerStreamCreator = (query) => {
      if (!query.sorting) query.sorting = 'sequence';
      return this.pageService.getBlogs(query);
    };

    this.list.hookToQuery(customerStreamCreator).subscribe((res) => {
      this.datas = res.items;
      this.count = res.totalCount;
    });
  }

  selectBlog(blog: Fs.Cms.Blogs.Dtos.BlogDto) {
    if (blog == null) {
      return;
    }
    this.router.navigate(['./'], {
      queryParams: { blogId: blog.id },
      relativeTo: this.route,
    });
  }

  deselectBlog() {
    this.router.navigate(['./'], {
      relativeTo: this.route,
    });
  }

  deleteBlog(blog: Fs.Cms.Blogs.Dtos.BlogDto) {
    this.confirmationService
      .warn('確認要刪除嗎？(此Blog下的文章將移至不分類)', '系統訊息', {
        cancelText: '取消',
        yesText: '確定',
      })
      .subscribe((status: Confirmation.Status) => {
        if (status === Confirmation.Status.confirm) {
          this.pageService.deleteBlog(blog.id).subscribe((x) => {
            this.toasterService.success('刪除成功！');
            this.list.get();
            this.router.navigate(['./'], { relativeTo: this.route });
          });
        }
      });
  }

  handleCancel() {
    this.Modal.isVisible = false;
  }


  uploadFileAction(): Observable<string[]> {
    let actions: Observable<string>[] = [of(null)];

    // 保留原有圖片action
    let existFiles = this.defaultImagePicker.existFiles.map(x => of(x.fileName))
    actions = actions.concat(existFiles)

    // 刪除圖片action
    let deleteImageNames = this.defaultImagePicker.getDeleteFileNames();
    let deleteFileActions = deleteImageNames.map(x => this.pageService.deleteFile(x).pipe(map(() => '')));
    actions = actions.concat(deleteFileActions);

    // 新圖片上傳action
    let uploadImageInfos = this.defaultImagePicker.getNewUploadFiles();
    let uploadNewImageActions = uploadImageInfos.map(x => this.fileService.uploadFile(x.file, this.Modal.Directory?.id).pipe(map(y => y.id)));
    actions = actions.concat(uploadNewImageActions);

    return combineLatest(actions).pipe(map(x => x.filter(y => y != "" && y != null)));
  }

  save() {
    var self = this;
    if (!this.Modal.form.valid) return;

    this.uploadFileAction().subscribe(fileIds => {
      saveBlogDto(fileIds[0]);
    })

    // let deleteImageNames = this.defaultImagePicker.getDeleteFileNames();
    // if (deleteImageNames.length > 0) {
    //   this.pageService.deleteFile(deleteImageNames[0]).subscribe(() => {
    //     uploadFile();
    //   });
    // } else uploadFile();

    // function uploadFile() {
    //   let uploadImageInfos = self.defaultImagePicker.getUploadFiles();
    //   let fileId = '';
    //   if (uploadImageInfos.length > 0) {
    //     if (self.Modal.Data.iconUrl == uploadImageInfos[0].fileName) {
    //       saveBlogDto(self.Modal.Data.iconUrl);
    //       return;
    //     }
    //     self.fileService
    //       .uploadFile(uploadImageInfos[0].file, self.Modal.Directory?.id)
    //       .subscribe((f) => {
    //         fileId = f.id;
    //         saveBlogDto(fileId);
    //       });
    //   } else saveBlogDto('');
    // }
    function saveBlogDto(fileId?) {
      let input = {
        ...self.Modal.Data,
        ...self.Modal.form.value,
        id: self.Modal.Data.id,
      };
      input.iconUrl = fileId;
      let action: Observable<any>;
      if (self.Modal.create) {
        input.no = input.displayName;
        action = self.pageService.createBlog(input);
      } else {

        action = self.pageService.updateBlog(input.id, input);
      }
      action.subscribe((x) => {
        self.toasterService.success('修改成功！');
        self.Modal.isVisible = false;
        self.list.get();
      });
    }
  }

  add() {
    var uuid = newUuid();
    this.Modal.create = true;
    this.Modal.Data = { id: uuid } as any;
    this.Modal.Images = [];
    this.openModal();
    function newUuid() {
      var d = Date.now();
      if (
        typeof performance !== 'undefined' &&
        typeof performance.now === 'function'
      ) {
        d += performance.now(); //use high-precision timer if available
      }
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
        /[xy]/g,
        function (c) {
          var r = (d + Math.random() * 16) % 16 | 0;
          d = Math.floor(d / 16);
          return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
        }
      );
    }
  }

  edit(id: string) {
    this.Modal.create = false;
    this.pageService.getBlogById(id).subscribe((x) => {
      this.Modal.Data = x;
      this.Modal.Images = [];
      if (x.iconUrl)
        this.Modal.Images.push(new ImageFile(x.iconUrl, x.iconUrl));
      this.openModal();
    });
  }

  private openModal() {
    const data = new FormPropData(this.injector, this.Modal.Data);
    this.Modal.form = null;
    this.Modal.form = generateFormFromProps(data);

    this.pageService
      .findByProviderByKeyAndGroup('FS.Cms.Blogs', this.Modal.Data.id)
      .subscribe((d) => {
        this.Modal.Directory = d;
        this.Modal.isVisible = true;
      });
  }
}

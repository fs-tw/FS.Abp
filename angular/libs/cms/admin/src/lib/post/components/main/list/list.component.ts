import { Component, Injector, OnInit, ViewChild,OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subscriber, Subscription } from 'rxjs';

import { ListService } from '@abp/ng.core';
import {EXTENSIONS_IDENTIFIER,FormPropData,generateFormFromProps} from '@abp/ng.theme.shared/extensions';
import {Confirmation,ConfirmationService,ToasterService,} from '@abp/ng.theme.shared';

import { FileService } from '../../../../shared'
import { PageService } from '../../../providers/page.service';
import { PostStateService } from '../../../providers/post-state.service';

import { eCmsRouteNames, ExtensionsService } from '@fs-tw/cms/config';
import { Fs } from '@fs-tw/cms/proxy';

import { ImageFile, ImagePickerComponent } from '../../image-picker/image-picker.component';



@Component({
  selector:'cms-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less'],
  providers: [
    ListService,
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: eCmsRouteNames.Blog,
    },
  ],
})
export class ListComponent implements OnInit,OnDestroy {
  @ViewChild("DefaultImagePicker") defaultImagePicker: ImagePickerComponent;
  datas: Fs.Cms.Blogs.Dtos.BlogDto[] = [];
  count = 0;
  defaultImages: ImageFile[] = [];
  isVisible = false;
  form: FormGroup;
  selected: Fs.Cms.Blogs.Dtos.BlogDto = {} as Fs.Cms.Blogs.Dtos.BlogDto
  directory;
  defaultSelectId = null;
  sub: Subscription;
  constructor(
    private router: Router,
    private extensionsService: ExtensionsService,
    private pageService: PageService,
    protected injector: Injector,
    public readonly list: ListService,
    private fileService: FileService,
    private toasterService: ToasterService,
    private activatedRoute: ActivatedRoute,
    private confirmationService: ConfirmationService,
    private postStateService: PostStateService
  ) {
    

    this.activatedRoute.queryParamMap.subscribe(x => {
      this.defaultSelectId = x.get("blogId");

      this.pageService.findByProviderByKeyAndGroup("FS.Cms.Blogs",this.defaultSelectId?this.defaultSelectId:this.getRand()).subscribe(x => {
        this.directory = x;
      })
    })
  }
  ngOnDestroy(): void {
    if(this.sub) this.sub.unsubscribe();
  }

  getRand() {
    return (Math.floor(Math.random() * 100) + 1).toString();
  }

  ngOnInit() {
    this.sub = this.extensionsService.Actions$[eCmsRouteNames.Blog].subscribe(
      (x) => {
        switch (x.name) {
          case 'Edit':
            this.edit(x.record.id);
            break;
          case 'Delete':
            this.deleteBlog(x.record)
            break;
          case 'Add':
            this.add();
            break;
        }
      }
    );

    this.reload();
  }

  reload() {
    let input: Fs.Cms.Blogs.Dtos.BlogGetListDto = {
      skipCount: 0,
      maxResultCount: 10,
      sorting: 'sequence'
    } as Fs.Cms.Blogs.Dtos.BlogGetListDto;

    const customerStreamCreator = (query) => {
      return this.pageService.getBlogs(input)
    };

    this.list.hookToQuery(customerStreamCreator).subscribe((res) => {
      this.datas = res.items;
      this.count = res.totalCount;
      if (this.defaultSelectId) {
        let select = this.datas.find(x => x.id == this.defaultSelectId);
        this.showDetail(select)
      }
    });
  }

  showDetail(blog: Fs.Cms.Blogs.Dtos.BlogDto) {
    if (blog == null) {
      this.router.navigate(['./cms/post'])
      this.postStateService.setBlog(null);
      return;
    }
    this.router.navigate(['./cms/post'], { queryParams: { 'blogId': blog.id } })
    this.postStateService.setBlog(blog);
  }

  deleteBlog(blog: Fs.Cms.Blogs.Dtos.BlogDto) {
    this.confirmationService
      .warn('確認要刪除嗎？(此Blog下的文章將移至不分類)', '系統訊息', {
        cancelText: "取消",
        yesText: "確定"
      })
      .subscribe((status: Confirmation.Status) => {
        if (status === Confirmation.Status.confirm) {
          this.pageService.deleteBlog(blog.id).subscribe(x => {
            this.toasterService.success("刪除成功！")
            this.list.get();
            this.router.navigate(["./cms/post"])
          })
        }
      });
  }



  handleCancel() {
    this.isVisible = false;
  }

  save() {
    if (!this.form.valid) return;
    let deleteImageNames = this.defaultImagePicker.getDeleteFileNames();    
    if(deleteImageNames.length>0){
      this.pageService.deleteFile(deleteImageNames[0]).subscribe(()=>{
        this.uploadFile();
      });
    } else this.uploadFile();
    
  }


  uploadFile(){
    let uploadImageInfos = this.defaultImagePicker.getUploadFiles();
    let fileId = "";
    if ((uploadImageInfos.length > 0)) {
      if (this.selected.iconUrl == uploadImageInfos[0].fileName) {
        this.saveBlog(this.selected.iconUrl);
        return;
      }
      this.fileService.uploadFile(uploadImageInfos[0].file, this.directory.id).subscribe(x => {
        fileId = x.id;
        this.saveBlog(fileId);
      })
    } else this.saveBlog("");
  }

  saveBlog(fileId?) {
    let input = { ...this.selected, ...this.form.value, id: this.selected.id };
    input.iconUrl = fileId;
    let action: Observable<any>;
    if (input.id) action = this.pageService.updateBlog(input.id, input);
    else {
      input.no = input.displayName;
      action = this.pageService.createBlog(input);
    }
    action.subscribe((x) => {
      this.toasterService.success('修改成功！');
      this.isVisible = false;
      this.list.get();
    });
  }

  add() {
    this.selected = {} as any;
    this.defaultImages = []
    this.openModal();
  }

  edit(id: string) {
    this.pageService.getBlogById(id).subscribe(x => {
      this.selected = x;
      this.defaultImages = []
      if (x.iconUrl) this.defaultImages.push(new ImageFile(x.iconUrl, x.iconUrl))
      this.openModal();
    })
  }

  buildForm() {
    const data = new FormPropData(this.injector, this.selected);
    this.form = null;
    this.form = generateFormFromProps(data);
  }

  openModal() {
    this.buildForm();
    this.isVisible = true;
  }

}

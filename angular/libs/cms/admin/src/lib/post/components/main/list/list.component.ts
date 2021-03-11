import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { FileService } from '../../../../shared'
import { Fs } from '@fs-tw/cms/proxy';
import { PageService } from '../../../providers/page.service';
import { PostStateService } from '../../../providers/post-state.service';
import { ListService } from '@abp/ng.core';
import {
  EXTENSIONS_IDENTIFIER,
  FormPropData,
  generateFormFromProps,
} from '@abp/ng.theme.shared/extensions';
import { eCmsRouteNames, ExtensionsService } from '@fs-tw/cms/config';
import { FormGroup } from '@angular/forms';
import { ImageFile, ImagePickerComponent } from '../../image-picker/image-picker.component';
import { Observable } from 'rxjs';
import {
  Confirmation,
  ConfirmationService,
  ToasterService,
} from '@abp/ng.theme.shared';

@Component({
  selector: 'fs-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [
    ListService,
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: eCmsRouteNames.Blog,
    },
  ],
})
export class ListComponent implements OnInit {
  @ViewChild("DefaultImagePicker") defaultImagePicker: ImagePickerComponent;
  datas: Fs.Cms.Blogs.Dtos.BlogDto[] = [];
  count = 0;
  defaultImages: ImageFile[] = [];
  isVisible = false;
  form: FormGroup;
  selected: Fs.Cms.Blogs.Dtos.BlogDto = {} as Fs.Cms.Blogs.Dtos.BlogDto
  directory;
  constructor(
    private extensionsService: ExtensionsService,
    private pageService: PageService,
    protected injector: Injector,
    public readonly list: ListService,
    private fileService: FileService,
    private toasterService: ToasterService,
    private postStateService: PostStateService
  ) {
    this.pageService.findByProviderByKeyAndGroup("FS.Cms.Blogs").subscribe(x => {
      this.directory = x;
    })
  }

  ngOnInit() {
    this.extensionsService.Actions$[eCmsRouteNames.Blog].subscribe(
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
      query = input;
      return this.pageService.getBlogs(input)
    };

    this.list.hookToQuery(customerStreamCreator).subscribe((res) => {
      this.datas = res.items;
      this.count = res.totalCount;
    });
  }

  showDetail(blog: Fs.Cms.Blogs.Dtos.BlogWithDetailsDto) {
    if (blog == null) return;
    this.postStateService.setBlog(blog);
  }

  deleteBlog(blog: Fs.Cms.Blogs.Dtos.BlogDto) {
    console.log(blog)
    alert("開發中…")
  }



  handleCancel() {
    this.isVisible = false;
  }

  save() {
    if (!this.form.valid) return;
 
    //TODO delete file and code refactoring
    let uploadImageInfos = this.defaultImagePicker.getUploadFiles();
    let deleteImageNames = this.defaultImagePicker.getDeleteFileNames();
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
      if (x.iconUrl) this.defaultImages.push(new ImageFile(x.iconUrl, this.fileService.getFileUrl(x.iconUrl)))
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

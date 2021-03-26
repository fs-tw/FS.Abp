import { ListService } from '@abp/ng.core';
import {
  Confirmation,
  ConfirmationService,
  ToasterService,
} from '@abp/ng.theme.shared';
import {
  EXTENSIONS_IDENTIFIER,
  FormPropData,
  generateFormFromProps,
} from '@abp/ng.theme.shared/extensions';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, Injector, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Fs } from '@fs-tw/form-management/proxy';
import { forkJoin, Observable, Subscription } from 'rxjs';
import { eFormmanagementRouteNames , ExtensionsService } from '@fs-tw/form-management/config';
import { PageService } from '../../providers/page.service';
import { PostStateService } from '../../providers/post-state.service';
import { query } from '@angular/animations';

@Component({
  selector: 'version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.css'],
  providers: [
    ListService,
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: eFormmanagementRouteNames.Version,
    },
  ],
})
export class VersionComponent implements OnInit {
  subs: Subscription[] = [];
  hookToQueryScribe: Subscription;

  VersionParams: Fs.FormManagement.Versions.Dtos.VersionDto = {
    versionDefinitionId:null
  } as Fs.FormManagement.Versions.Dtos.VersionDto;

  isModalVisible = false;
  modalBusy = false;
  form: FormGroup;
  selected: Fs.FormManagement.Versions.Dtos.VersionDto = {} as Fs.FormManagement.Versions.Dtos.VersionDto;

  keyword = '';
  datas = [];
  count = 0;

  Version$: Observable<Fs.FormManagement.Versions.Dtos.VersionDefinitionDto>;

  constructor(
    private router: Router,
    private extensionsService: ExtensionsService,
    private pageService: PageService,
    private confirmationService: ConfirmationService,
    private toasterService: ToasterService,
    protected injector: Injector,
    public readonly list: ListService,
    private postStateService: PostStateService
  ) { }

  ngOnInit(): void {
    this.Version$ = this.postStateService.VersionDefinition$;
    this.subs.push(
    this.extensionsService.Actions$[eFormmanagementRouteNames.Version].subscribe(
      (x) => {
        switch (x.name) {
          case 'Edit':
            this.edit(x.record.id);
            break;
          case 'Delete':
            this.deleteItem(x.record.id);
            break;
          case 'Add':
            this.add();
            break;
        }
      }
    )
    );

    this.list.maxResultCount = 10; //修改每頁數量
    
    this.subs.push(
      this.Version$.subscribe((version) => {
        this.VersionParams.versionDefinitionId = version?.id;
        this.hookToQuery();
      })
    );
    
  }

   hookToQuery(){

    if (this.hookToQueryScribe) this.hookToQueryScribe.unsubscribe();
    
    const query = (query) => {
      if (!query.sorting) query.sorting = 'no,prevversionid,nextversionid,documentdefinitionid';
      return this.pageService.getVersion({
        ...query,
        ...this.VersionParams,
      });
    };

    this.hookToQueryScribe = this.list.hookToQuery(query).subscribe((res) => {
      this.datas = res.items;
      this.count = res.totalCount;
    });
  }


  deleteItem(id: string) {
    // this.confirmationService
    //   .warn('確認要刪除嗎？', '系統訊息', {
    //     cancelText: '取消',
    //     yesText: '確定',
    //   })
    //   .subscribe((status: Confirmation.Status) => {
    //     if (status === Confirmation.Status.confirm) {
    //       this.pageService.deleteGovernment(id).subscribe((x) => {
    //         this.toasterService.success('刪除成功！');
    //         this.list.get();
    //       });
    //     }
    //   });
  }

  add() {
    // this.selected = {
    //   governmentDefinitionId:this.postStateService.Governments?.id
    // } as Iic.Governments.Dtos.GovernmentCreateDto;
    // this.openModal();
  }

  edit(id: string) {
    // this.pageService.getGovernmentById(id).subscribe((x) => {
    //   this.selected = x;
    //   this.openModal();
    // });
  }
  openModal() {
    this.buildForm();
    this.isModalVisible = true;
  }

  buildForm() {
    const data = new FormPropData(this.injector, this.selected);
    this.form = generateFormFromProps(data);
  }

  save() {
    // if (!this.form.valid) return;
    // let input ={...this.selected, ...this.form.value,id:this.selected.id};
    // let action: Observable<any>;
   
    // if (input.id) action = this.pageService.updateGovernment(input.id, input);
    // else action = this.pageService.createGovernment(input);
    // action.subscribe((x) => {
    //   this.toasterService.success('修改成功！');
    //   this.isModalVisible = false;
    //   this.list.get();
    // });
  }
  search() {
    this.list.get();
  }
}

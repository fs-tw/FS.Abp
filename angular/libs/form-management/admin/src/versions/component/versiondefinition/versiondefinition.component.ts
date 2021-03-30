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
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Component, Injector, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Fs } from '@fs-tw/form-management/proxy';
import { Observable } from 'rxjs';
import { eFormmanagementRouteNames , ExtensionsService } from '@fs-tw/form-management/config';
import { PageService } from '../../providers/page.service';


@Component({
  selector: 'versiondefinition',
  templateUrl: './versiondefinition.component.html',
  styleUrls: ['./versiondefinition.component.less'],
  providers: [
    ListService,
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: eFormmanagementRouteNames.VersionDefinition,
    },
  ],
})
export class VersiondefinitionComponent implements OnInit {
  isModalVisible = false;
  modalBusy = false;
  form: FormGroup;
  selected: Fs.FormManagement.Versions.Dtos.VersionDefinitionDto = {} as Fs.FormManagement.Versions.Dtos.VersionDefinitionDto;
  
  selectedGovernment$: Observable<Fs.FormManagement.Versions.Dtos.VersionDefinitionDto>;
 
  keyword = '';
  datas = [];
  count = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private extensionsService: ExtensionsService,
    private pageService: PageService,
    private confirmationService: ConfirmationService,
    private toasterService: ToasterService,
    protected injector: Injector,
    public readonly list: ListService
  ) { }

  ngOnInit(): void {
    this.extensionsService.Actions$[eFormmanagementRouteNames.VersionDefinition].subscribe(
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
    );

    this.list.maxResultCount = 10; //修改每頁數量
    this.hookToQuery();
    
  }

   hookToQuery(){
    
    const VersionDefinitionStreamCreator = (query) => {
      //if (!query.sorting) query.sorting = 'currentVersionId,entityType,entityKey,displayName';
      return this.pageService.getVersionDefinition(query);
    };

    this.list.hookToQuery(VersionDefinitionStreamCreator).subscribe((res) => {
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
    //       this.pageService.deleteGovernmentDefinition(id).subscribe((x) => {
    //         this.toasterService.success('刪除成功！');
    //         this.list.get();            
    //       });
    //     }
    //   });
  }

  add() {
    // this.selected = {} as Iic.Governments.Dtos.GovernmentDefinitionCreateDto;
    // this.openModal();
  }

  edit(id: string) {
    // this.pageService.getGovernmentDefinitionById(id).subscribe((x) => {
    //   this.selected = x;
    //   this.openModal();
    // });
  }
  openModal() {
    // this.buildForm();
    // this.isModalVisible = true;
  }

  buildForm() {
    // const data = new FormPropData(this.injector, this.selected);
    // this.form = generateFormFromProps(data);
  }

  save() {
    // if (!this.form.valid) return;
    // let input ={...this.selected, ...this.form.value,id:this.selected.id};
    // let action: Observable<any>;
   
    // if (input.id) action = this.pageService.updateGovernmentDefinition(input.id, input);
    // else action = this.pageService.createGovernmentDefinition(input);
    // action.subscribe((x) => {
    //   this.toasterService.success('修改成功！');
    //   this.isModalVisible = false;
    //   this.list.get();
    // });
  }

  selectGovernment(versionsList: Fs.FormManagement.Versions.Dtos.VersionDefinitionDto) {
    // if (versionsList == null) {
    //   return;
    // }
    // this.router.navigate(['./'], {
    //   queryParams: { versionsListId: versionsList.id },
    //   relativeTo: this.route,
    // });
  }

  deselectGovernment() {
    // this.router.navigate(['./'], {
    //   relativeTo: this.route,
    // });
  }
}

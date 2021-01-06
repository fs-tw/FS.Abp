import {
  Confirmation,
  ConfirmationService,
  ToasterService,
} from '@abp/ng.theme.shared';
import { Component, OnInit } from '@angular/core';
import {
  CodesDto,
  CodingWithSettingTreeModel,
  GetAllDefinitions,
  PatchCodesInput,
  ThemeCoreService,
  ThemeCoreStateService,
} from '@fs-tw/theme-core';
import { Actions, ofActionDispatched, Store } from '@ngxs/store';
import * as _ from 'lodash';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
//import { OnDataChange } from '../../providers/tag-management.action';

class TagTypeModel {
  id: string;
  name: string;
  children: CodesDto[];
  
  constructor(codes: CodingWithSettingTreeModel) {
    this.id = codes.codeSetting.codes.id;
    this.name = codes.codeSetting.codes.displayName;
    this.children = _.orderBy(
      codes.children.map((x) => x.codeSetting.codes),
      ['code']
    );
  }
}

@Component({
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less'],
})
export class MainComponent implements OnInit {
  public readonly TagCodeDefinitionNo = 'UntcTag';

  tagTypes: TagTypeModel[] = [];
  input: string;

  destroy$ = new Subject<void>();


/**********************測試資料**********************/
tag_data = [
  {
    name: '類型',
    id:'tag0',
    children: [
      { tag: '★★★★★' },
      { tag: '★★★★' },
      { tag: '★★★' },
      { tag: '★★' },
      { tag: '★' },
    ]
  },
  {
    name: '地區',
    id:'tag1',
    children: [
      { tag: '北部' },
      { tag: '中部' },
      { tag: '南部' },
      { tag: '東部' },
    ]
  },
  {
    name: '協會標籤',
    id:'tag2',
    children: [
      { tag: '協會1' },
      { tag: '協會2' },
      { tag: '協會3' },
      { tag: '協會4' },
      { tag: '協會5' },
    ]
  },
  {
    name:'測試分類',
    id:'tag3',
    children:[
      {tag:'分類1'},
      {tag:'分類2'},
      {tag:'分類3'},
      {tag:'分類4'},
      {tag:'分類5'},
    ]
  }
];

/**************************************************** */


  constructor(
    private store: Store,
    private actions$: Actions,
    private confirmationService: ConfirmationService,
    private toasterService: ToasterService,
    private themeCoreStateService: ThemeCoreStateService,
    private themeCoreService: ThemeCoreService
  ) { }

  onParamChange() {
    // this.actions$
    //   .pipe(ofActionDispatched(OnDataChange), takeUntil(this.destroy$))
    //   .subscribe(({ payload }) => {
    //     this.Load();
    //   });
  }

  ngOnInit() {
    this.onParamChange();
    this.Load();
  }

  private Load() {
    this.store.dispatch(new GetAllDefinitions()).subscribe();
    let tagDefinition = this.themeCoreStateService.getSingleDefinitionChildren(
      this.TagCodeDefinitionNo
    );
    this.tagTypes = tagDefinition.treeFlatted.map((x) => new TagTypeModel(x));
  }

  ngOnDestroy() { }

  delete(id: string) {
    let vm = this;
    this.confirmationService
      .warn('確定刪除？', '系統訊息', {
        messageLocalizationParams: [name],
        cancelText: '關閉',
        yesText: '確定',
      })
      .subscribe((status: Confirmation.Status) => {
        if (status === Confirmation.Status.confirm) {
          let input = new PatchCodesInput({
            addItems: [],
            deleteItemIds: [id],
            editItems: [],
          });
          vm.themeCoreService.codeSettingAppService
            .postPatchCodes(input)
            .subscribe(() => {
              vm.toasterService.success('更新成功');
              vm.Load();
            });
        }
      });
  }
}

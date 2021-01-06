import {
  Component,
  OnInit,
  TemplateRef,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import {
  CodingWithSettingTreeModel,
  GetAllDefinitions,
  ThemeCoreStateService,
} from '@fs-tw/theme-core';
import { Store } from '@ngxs/store';
import * as _ from 'lodash';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
//import { TagGroupWithDetailsDto, TagGroupUpdateDto } from '@fs-tw/ticket/proxy';
//import { TagManagementPageService } from '../../providers/tag-management-page.service';

class TagTypeModel {
  id: string;
  name: string;
  children: TagTypeModel[];
  isChekced: boolean;

  constructor(codes: CodingWithSettingTreeModel) {
    this.id = codes.codeSetting.codes.id;
    this.name = codes.codeSetting.codes.displayName;
    this.children = _.orderBy(
      codes.children.map((x) => x.codeSetting.codes),
      ['code']
    ).map((y) => {
      let item = {
        id: y.id,
        name: y.displayName,
        children: [],
        isChekced: false,
      };
      return item;
    });
    this.isChekced = false;
  }
}

@Component({
  selector: 'fs-edit-tag-group',
  templateUrl: './edit-tag-group.component.html',
  styleUrls: ['./edit-tag-group.component.less'],
})
export class EditTagGroupComponent implements OnInit {
  public readonly TagCodeDefinitionNo = 'UntcTag';

  modal: NzModalRef;

  @Input() groupId: string;
  @Output() updateFeedback: EventEmitter<any> = new EventEmitter();
  //原資料
  tagGroupOriginData: any;//TagGroupWithDetailsDto;

  //ui選擇用
  tagGroupEditData: TagTypeModel[] = [];

  //API input
  tagGroupUpdateDto: any={//TagGroupUpdateDto = {
    no: '',
    name: '',
    tagCodeIds: [],
  };

  constructor(
    private store: Store,
    private modalService: NzModalService,
    private themeCoreStateService: ThemeCoreStateService,
   // private tagManagementPageService: TagManagementPageService
  ) {}

  ngOnInit(): void {}

  createTplModal(
    tplTitle: TemplateRef<{}>,
    tplContent: TemplateRef<{}>,
    tplFooter: TemplateRef<{}>
  ): void {
    this.loadCode();
    this.modal = this.modalService.create({
      nzTitle: tplTitle,
      nzContent: tplContent,
      nzFooter: tplFooter,
      nzClosable: false,
      nzWidth: 1000,
    });
  }

  loadCode() {
    this.store.dispatch(new GetAllDefinitions()).subscribe(() => {
      let tagDefinition = this.themeCoreStateService.getAllDefinitionChildren()[
        this.TagCodeDefinitionNo
      ];
      this.tagGroupEditData = tagDefinition.treeFlatted.map(
        (x) => new TagTypeModel(x)
      );

      if (this.groupId) {
        this.getTagGroup();
      }
    });
  }

  getTagGroup() {
    let vm = this;

    // this.tagManagementPageService
    //   .getTagGroup(this.groupId)
    //   .subscribe((result) => {
    //     this.tagGroupOriginData = result;

    //     this.tagGroupUpdateDto.no = result.no;
    //     this.tagGroupUpdateDto.name = result.name;

    //     this.tagGroupEditData.forEach((x) => {
    //       x.children.map(
    //         (y) =>
    //           (y.isChekced = vm.tagGroupOriginData.tagCodeIds.includes(y.id))
    //       );
    //     });
    //   });
  }

  checkParent(parentIndex: number) {
    this.tagGroupEditData[parentIndex].isChekced = !this.tagGroupEditData[
      parentIndex
    ].isChekced;
    this.tagGroupEditData[parentIndex].children.map(
      (x) => (x.isChekced = this.tagGroupEditData[parentIndex].isChekced)
    );
    this.checkStatusChange(parentIndex);
  }

  checkChild(parentIndex: number, childIndex: number) {
    this.tagGroupEditData[parentIndex].children[childIndex].isChekced = !this
      .tagGroupEditData[parentIndex].children[childIndex].isChekced;
    this.checkStatusChange(parentIndex);
  }

  checkStatusChange(parentIndex: number) {
    let isParentAll = this.tagGroupEditData[parentIndex].children.every(
      (x) => x.isChekced == true
    );
    this.tagGroupEditData[parentIndex].isChekced = isParentAll;
  }

  save() {
    this.tagGroupUpdateDto.tagCodeIds = _.flatMap(
      this.tagGroupEditData.map((parent) =>
        parent.children.filter((child) => child.isChekced).map((x) => x.id)
      )
    );

    // let action = this.groupId
    //   ? this.tagManagementPageService.updateTagGroup(
    //       this.tagGroupOriginData.id,
    //       this.tagGroupUpdateDto
    //     )
    //   : this.tagManagementPageService.createTagGroup(this.tagGroupUpdateDto);

    // action.subscribe(() => {
    //   this.updateFeedback.emit();
    //   this.close();
    // });
  }

  close() {
    this.modal.destroy();
    this.tagGroupUpdateDto = {
      no: '',
      name: '',
      tagCodeIds: [],
    };
  }
}

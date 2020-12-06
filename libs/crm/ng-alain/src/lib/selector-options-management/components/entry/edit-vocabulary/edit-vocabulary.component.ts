import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import * as _ from 'lodash';

@Component({
  selector: 'fs-edit-vocabulary',
  templateUrl: './edit-vocabulary.component.html',
  styleUrls: ['./edit-vocabulary.component.less']
})
export class EditVocabularyComponent implements OnInit {
  @Input() data;
  @Input() groupoTitle: string;

  modal: NzModalRef;

  _data;

  inputList = [
    { name: '' }
  ];

  constructor(private modalService: NzModalService) { }

  ngOnInit(): void {
    console.log(this.data);
  }

  createTplModal(tplTitle: TemplateRef<{}>, tplContent: TemplateRef<{}>, tplFooter: TemplateRef<{}>): void {
    this.modal = this.modalService.create({
      nzTitle: tplTitle,
      nzContent: tplContent,
      nzFooter: tplFooter,
      nzMaskClosable: false
    });

    if (this.data) {
      this._data = _.cloneDeep(this.data);
    }
    else {
      this._data = {
        title: '',
      }
    }
  }


  addOption() {
    this.inputList.push({ name: '' });
  }

  removeOption(index: number) {
    this.inputList.splice(index, 1);
  }

  save() {
    this.close();
  }
  close() {

    this.modal.destroy();
  }
}

import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { ArrayService, copy } from '@delon/util';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { NzFormatEmitEvent } from 'ng-zorro-antd/tree';
import { FileManagerComponent } from '../file-manager/file-manager.component';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
})
export class ImgComponent implements AfterViewInit {
  result: any[] = [];
  cat: any = {
    ls: [],
    item: {},
  };

  @Input()
  params = {
    type: 'file',
    q: '',
    is_img: true,
    parent_id: 0,
    orderby: 0,
  };
  @Input()
  multiple: boolean | number = false;

  @ViewChild('fm', { static: false })
  fm: FileManagerComponent;

  constructor(private http: _HttpClient, private arrSrv: ArrayService, private msg: NzMessageService, private modal: NzModalRef) {}

  ngAfterViewInit() {
    this.loadCat();
  }

  copyData(type: 'link' | 'code') {
    copy(this.result.map((v) => this.fm.getCode(v.mp, type)).join('\n')).then(() => this.msg.success('Copy Success'));
  }

  // #region category

  changeCat(e: NzFormatEmitEvent) {
    this.cat.item = e.node.origin;
    this.params.parent_id = e.node.origin.id;
    this.fm.load(1);
  }

  loadCat() {
    this.http.get('/file/folder').subscribe((res: any[]) => {
      res.splice(0, 0, { id: 0, title: '所有图片' });
      this.cat.ls = this.arrSrv.arrToTreeNode(res, {
        cb: (item, parent, deep) => {
          item.expanded = deep <= 1;
          item.selected = item.id === 0;
        },
      });
      this.cat.item = res[0];
    });
  }

  // #endregion

  load() {
    this.fm.load(1);
  }

  cho(i: any) {
    if (i.on === true) {
      this.result.splice(this.result.indexOf(i), 1);
      i.on = false;
      return;
    }
    if (!this.multiple) {
      this.result.push(i);
      this.ok();
      return;
    }

    if (typeof this.multiple === 'number' && this.result.length >= this.multiple) {
      this.msg.error(`最多只能选取${this.multiple}张`);
      return;
    }
    i.on = true;
    this.result.push(i);
  }

  drop(e: CdkDragDrop<any[]>) {
    moveItemInArray(this.result, e.previousIndex, e.currentIndex);
  }

  ok() {
    this.modal.close(this.result);
  }
}

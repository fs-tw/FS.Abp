import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { ArrayService, copy } from '@delon/util';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadFile } from 'ng-zorro-antd/upload';

@Component({
  selector: 'file-manager',
  templateUrl: './file-manager.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileManagerComponent implements OnInit {
  private get parent_id(): number {
    return this.path[this.path.length - 1];
  }

  constructor(public http: _HttpClient, private cdr: ChangeDetectorRef, private arrSrv: ArrayService, private msg: NzMessageService) {}
  showType: 'big' | 'small' = 'big';
  s: any = { orderby: 0, ps: 20, pi: 1, q: '' };
  loading = false;
  list: any[] = [];
  item: any;
  path: number[] = [0];
  total = 0;

  @Input() params: any;
  @Input() actions?: TemplateRef<any>;
  @Input() multiple: boolean | number = false;
  @Output() selected = new EventEmitter<any>();

  // #endregion

  // #region rename

  renameModel = false;
  renameTitle = '';

  // #endregion

  // #region move
  moveModel = false;
  moveId = '';
  folderNodes: any[] = [];

  ngOnInit(): void {
    this.load(1);
  }

  getCode(mp: string, type: 'link' | 'code'): string {
    return type === 'link' ? mp : `<img src="${mp}">`;
  }

  // #region op

  back(): void {
    this.path.pop();
    this.load(1);
  }

  next(i: any): void {
    this.path.push(i.id);
    this.load(1);
  }

  load(pi: number): void {
    const data = {
      ...this.s,

      pi,
      parent_id: this.parent_id,
      ...this.params,
    };
    this.loading = true;
    this.http.get('/file', data).subscribe((res: any) => {
      this.loading = false;
      this.list = res.list;
      this.total = res.total;
      this.cdr.detectChanges();
    });
  }

  cho(i: any): void {
    if (i.type === 'folder') {
      this.next(i);
      return;
    }
    i.selected = !i.selected;
    this.selected.emit(i);
    this.cdr.detectChanges();
  }

  // #endregion

  // #region upload

  uploadData = () => {
    return {
      parent_id: this.parent_id,
    };
    // tslint:disable-next-line: semicolon
  };

  uploadChange({ file }: { file: NzUploadFile }): void {
    if (file.status === 'done') {
      this.load(1);
    }
  }
  rename(i: any): void {
    this.renameModel = true;
    this.item = i;
    this.renameTitle = i.title;
  }
  renameOk(): void {
    this.http
      .post(`/file/rename`, {
        id: this.item.id,
        title: this.renameTitle,
      })
      .subscribe(() => {
        this.msg.success('Success');
        this.item.title = this.renameTitle;
        this.renameModel = false;
        this.cdr.detectChanges();
      });
  }
  move(i: any): void {
    this.moveModel = true;
    this.item = i;
    this.moveId = i.parent_id;
    this.http.get(`/file/folder`).subscribe((res: any[]) => {
      res.splice(0, 0, { id: 0, title: '根目录' });
      this.folderNodes = this.arrSrv.arrToTree(res, {
        cb: (item) => {
          item.key = item.id;
          if (item.id === this.moveId) {
            item.disabled = true;
          }
        },
      });
      this.cdr.detectChanges();
    });
  }
  moveOk(): void {
    this.http
      .post(`/file/move`, {
        id: this.item.id,
        moveId: this.moveId,
      })
      .subscribe(() => {
        this.msg.success('Success');
        this.moveModel = false;
        this.list.splice(
          this.list.findIndex((w) => w.id === this.item.id),
          1,
        );
        this.cdr.detectChanges();
      });
  }
  // #endregion

  // #region copy

  copyImg(id: number): void {
    this.http.post(`/file/copy/${id}`).subscribe((res: any) => {
      this.msg.success('Success');
      this.list.push(res.item);
      this.cdr.detectChanges();
    });
  }

  copyData(mp: string, type: 'link' | 'code'): void {
    copy(this.getCode(mp, type)).then(() => this.msg.success('Copy Success'));
  }

  // #endregion

  // #region remove

  remove(id: number, idx: number): void {
    this.http.delete(`/file/${id}`).subscribe(() => {
      this.msg.success('Success');
      this.list.splice(idx, 1);
      this.cdr.detectChanges();
    });
  }

  // #endregion
}

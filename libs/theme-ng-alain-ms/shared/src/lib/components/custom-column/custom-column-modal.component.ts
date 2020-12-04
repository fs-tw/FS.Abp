import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { I18NService } from '@fs/theme.ng-alain-ms/core';
import { STColumnTitle, STComponent } from '@delon/abc/st';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'custom-column-modal',
  templateUrl: './custom-column-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomColumnModalComponent implements OnInit {
  st!: STComponent;
  title!: string;
  list: any[] = [];

  constructor(private ref: NzModalRef, @Inject(ALAIN_I18N_TOKEN) private i18n: I18NService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.list = this.st.columns.map((i, idx) => ({
      label: (i.title as STColumnTitle).i18n ? this.i18n.fanyi((i.title as STColumnTitle).i18n!) : i.title,
      value: idx,
      checked: (i as NzSafeAny).ccChecked !== false,
      disabled: (i as NzSafeAny).ccDisabled === true,
    }));
    this.cdr.markForCheck();
  }

  ok(): void {
    this.st.columns.forEach((col: NzSafeAny, idx) => (col.ccChecked = this.list[idx].checked));
    this.ref.close(true);
  }

  close(): void {
    this.ref.close();
  }
}
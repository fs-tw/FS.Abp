import { ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { STComponent } from '@delon/abc/st';
import { ModalHelper } from '@delon/theme';
import { CustomColumnModalComponent } from './custom-column-modal.component';

@Component({
  selector: 'custom-column',
  template: ` <i nz-icon nzType="setting" class="pr-xs"></i>定制列 `,
  host: {
    '[class.brand-color]': 'true',
    '[class.point]': 'true',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomColumnComponent {
  @Input() st: STComponent;
  @Input() title = '定制列';
  @Output() readonly ok = new EventEmitter<void>();

  constructor(private modalHelper: ModalHelper) {}

  @HostListener('click')
  _click(): void {
    const { modalHelper, st, title, ok } = this;
    modalHelper.create(CustomColumnModalComponent, { st, title }, { size: 'md' }).subscribe(() => ok.emit());
  }
}

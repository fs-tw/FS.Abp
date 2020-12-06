import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { ModalHelper } from '@delon/theme';
import { ImgComponent } from './img.component';

@Directive({ selector: '[dialog-img]' })
export class ImgDirective {
  @Input()
  multiple: boolean | number = false;

  @Input()
  field: string;

  @Output()
  selected = new EventEmitter<any>();

  constructor(private modalHelper: ModalHelper) {}

  @HostListener('click')
  _click() {
    this.modalHelper
      .create(
        ImgComponent,
        {
          multiple: this.multiple,
        },
        {
          size: 1000,
          modalOptions: {
            nzClosable: false,
          },
        },
      )
      .subscribe((res: any) => {
        if (Array.isArray(res)) {
          let ret = res.length > 0 && !this.multiple ? res[0] : res;
          if (this.field && ret) {
            ret = ret[this.field];
          }
          this.selected.emit(ret);
        }
      });
  }
}

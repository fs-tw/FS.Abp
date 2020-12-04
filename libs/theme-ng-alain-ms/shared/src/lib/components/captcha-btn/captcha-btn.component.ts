import {
  Component,
  ChangeDetectionStrategy,
  OnChanges,
  ChangeDetectorRef,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { InputBoolean, InputNumber } from '@delon/util';

@Component({
  selector: 'captcha-btn',
  templateUrl: './captcha-btn.component.html',
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CaptchaBtnComponent implements OnChanges, OnDestroy {
  private interval$: any;
  count = 0;

  @Input() @InputNumber() during = 60;

  @Input() type: string;

  @Input() size: string;

  @Input() @InputBoolean() block = false;

  @Input() @InputBoolean() disabled = false;

  @Output() readonly send = new EventEmitter();

  constructor(private cdr: ChangeDetectorRef) {}

  _click() {
    this.count = +this.during;
    this.interval$ = setInterval(() => {
      this.count -= 1;
      if (this.count <= 0) {
        clearInterval(this.interval$);
      }
      this.cdr.detectChanges();
    }, 1000);

    this.send.emit();
  }

  ngOnChanges() {
    this.cdr.detectChanges();
  }

  ngOnDestroy() {
    if (this.interval$) clearInterval(this.interval$);
  }
}

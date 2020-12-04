import { Component, ChangeDetectionStrategy, OnInit, OnDestroy, Input, TemplateRef, OnChanges } from '@angular/core';
import { InputBoolean } from '@delon/util';
import { BrandService } from '../../ms.service';

@Component({
  selector: 'page-single',
  templateUrl: './page-single.component.html',
  host: {
    '[class.ms-page-single]': 'true',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MSPageSingleComponent implements OnInit, OnChanges, OnDestroy {
  // #region fileds

  @Input() @InputBoolean() wide = true;
  @Input() @InputBoolean() fixed = false;
  @Input() title: string | TemplateRef<void>;
  @Input() subTitle: string | TemplateRef<void>;
  @Input() extra: string | TemplateRef<void>;

  // #endregion

  constructor(private brand: BrandService) {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.brand.setFixed(this.fixed);
  }

  ngOnDestroy(): void {
    this.brand.setFixed(false);
  }
}

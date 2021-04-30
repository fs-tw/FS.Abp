import { ChangeDetectionStrategy, Component, Input, OnChanges, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { BooleanInput,InputBoolean} from '@delon/util/decorator';
import { BrandService } from '../../ms.service';

@Component({
  selector: 'page-single',
  templateUrl: './page-single.component.html',
  host: {
    '[class.ms-page-single]': 'true',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MSPageSingleComponent implements OnChanges, OnDestroy {
  static ngAcceptInputType_wide: BooleanInput;
  static ngAcceptInputType_fixed: BooleanInput;


  // #region fileds

  @Input() @InputBoolean() wide = true;
  @Input() @InputBoolean() fixed = false;
  @Input() title?: string | TemplateRef<void>;
  @Input() subTitle?: string | TemplateRef<void>;
  @Input() extra?: string | TemplateRef<void>;

  // #endregion

  constructor(private brand: BrandService) {}


  ngOnChanges(): void {
    this.brand.setFixed(this.fixed);
  }

  ngOnDestroy(): void {
    this.brand.setFixed(false);
  }
}

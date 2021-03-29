import { Component, Input } from '@angular/core';
import { BooleanInput, InputBoolean } from '@delon/util/decorator';

import { MSMenu, MSServiceNavConfig } from './../../../models/layout';
import { BrandService } from '../../ms.service';

@Component({
  selector: 'service-layout',
  templateUrl: './service-layout.component.html',
})
export class MSServiceLayoutComponent {
  static ngAcceptInputType_nav: BooleanInput;
  
  @Input() @InputBoolean() nav = false;
  @Input() navConfig: MSServiceNavConfig = {};
  @Input() navList: MSMenu[] = [];
  @Input() hasConsoleCss:boolean = true;

  get hideNav(): boolean {
    return this.srv.hideNav;
  }

  constructor(private srv: BrandService) {}
}

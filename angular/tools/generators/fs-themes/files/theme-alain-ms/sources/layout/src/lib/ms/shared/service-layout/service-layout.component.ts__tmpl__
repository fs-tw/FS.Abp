import { Component, Input } from '@angular/core';
import { InputBoolean } from '@delon/util';

import { MSMenu, MSServiceNavConfig } from './../../../models/layout';
import { BrandService } from '../../ms.service';

@Component({
  selector: 'service-layout',
  templateUrl: './service-layout.component.html',
})
export class MSServiceLayoutComponent {
  @Input() @InputBoolean() nav = false;
  @Input() navConfig: MSServiceNavConfig = {};
  @Input() navList: MSMenu[] = [];

  get hideNav(): boolean {
    return this.srv.hideNav;
  }

  constructor(private srv: BrandService) {}
}

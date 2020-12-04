import { Component, Input } from '@angular/core';
import { InputBoolean } from '@delon/util';

import { BrandService } from '../../ms.service';
import { MSMenu, MSServiceNavConfig } from '../../ms.interfaces';

@Component({
  selector: 'service-layout',
  templateUrl: './service-layout.component.html',
})
export class MSServiceLayoutComponent {
  @Input() @InputBoolean() nav = false;
  @Input() navConfig: MSServiceNavConfig = {};
  @Input() navList: MSMenu[] = [];

  get hideNav() {
    return this.srv.hideNav;
  }

  constructor(private srv: BrandService) {}
}

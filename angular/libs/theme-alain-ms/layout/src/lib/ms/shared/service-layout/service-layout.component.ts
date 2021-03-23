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
  @Input() hasConsoleCss: boolean = true;

  get hideNav(): boolean {
    return this.srv.hideNav || this.nav === false || this.navList.length === 0;
  }

  constructor(private srv: BrandService) {}
}

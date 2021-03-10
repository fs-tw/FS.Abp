import { Component } from '@angular/core';
import { eLayoutType } from '@abp/ng.core';

@Component({
  selector: 'fs-layout-empty',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class EmptyLayoutComponent {
  // required for dynamic component
  static type = eLayoutType.empty;
}

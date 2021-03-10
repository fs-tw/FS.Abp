import { eLayoutType } from '@abp/ng.core';
import { slideFromBottom } from '@abp/ng.theme.shared';
import { AfterViewInit, Component, OnDestroy, Renderer2, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'fs-layout-account',
  templateUrl: './account-layout.component.html',
  animations: [slideFromBottom],
  encapsulation: ViewEncapsulation.None,
})
export class AccountLayoutComponent {
  // required for dynamic component
  static type = eLayoutType.account;

  isCollapsed: boolean = false;

  constructor(private renderer: Renderer2) {}
}

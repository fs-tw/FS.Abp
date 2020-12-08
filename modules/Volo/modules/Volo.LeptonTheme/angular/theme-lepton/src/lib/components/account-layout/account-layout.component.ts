import { eLayoutType } from '@abp/ng.core';
import { slideFromBottom } from '@abp/ng.theme.shared';
import { AfterViewInit, Component, OnDestroy, Renderer2, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'abp-layout-account',
  templateUrl: './account-layout.component.html',
  animations: [slideFromBottom],
  encapsulation: ViewEncapsulation.None,
})
export class AccountLayoutComponent implements AfterViewInit, OnDestroy {
  // required for dynamic component
  static type = eLayoutType.account;

  isCollapsed: boolean = false;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.renderer.addClass(document.body, 'abp-account-layout');
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'abp-account-layout');
  }
}

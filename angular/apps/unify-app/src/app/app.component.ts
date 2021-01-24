import { Component, ElementRef } from '@angular/core';
import { LayoutStateService } from '@fs-tw/theme-unify';

@Component({
  selector: 'app-root',
  template: `
    <abp-loader-bar></abp-loader-bar>
    <abp-dynamic-layout></abp-dynamic-layout>
  `,
})
export class AppComponent {
  constructor(
    private layoutStateService: LayoutStateService,
    private elementRef: ElementRef
  ) {
    this.layoutStateService.AppComponent=elementRef;
  }
}


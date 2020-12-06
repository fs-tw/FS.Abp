import { Component, ElementRef, AfterViewInit, NgZone } from '@angular/core';
import { LayoutService } from '@fs/theme.the-project';

@Component({
  selector: 'app-root',
  template: `
    <abp-loader-bar></abp-loader-bar>
    <abp-dynamic-layout></abp-dynamic-layout>
  `,
})
export class AppComponent {
  constructor(
    private layoutService: LayoutService,
    private elementRef: ElementRef
  ) {
    this.layoutService.ready$.subscribe((x) => {
      if (x) {
        this.elementRef.nativeElement.dispatchEvent(new CustomEvent('angular-ready'));

      }

    });

  }
}

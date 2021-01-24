import { Component, ElementRef, AfterViewInit, NgZone } from '@angular/core';
import { LayoutStateService } from '@fs-tw/theme-the-project';
import { timeout } from 'rxjs/operators';

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
    this.layoutStateService.ready$.subscribe((x) => {
      if (x) {
        this.elementRef.nativeElement.dispatchEvent(
          new CustomEvent('angular-ready')
        );
      }
    });
  }
}

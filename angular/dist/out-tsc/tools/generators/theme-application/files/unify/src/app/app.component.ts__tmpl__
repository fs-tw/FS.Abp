import { Component, ElementRef } from '@angular/core';
import { LayoutStateService } from '@fs-tw/theme-unify';
import { ReplaceableComponentsService } from '@abp/ng.core';
//import { HeaderComponent } from './components/header/header.component';
//import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  template: `
    <abp-loader-bar></abp-loader-bar>
    <abp-dynamic-layout></abp-dynamic-layout>
  `,
})
export class AppComponent {
  constructor(
    private replaceableComponents: ReplaceableComponentsService,
    private layoutStateService: LayoutStateService,
    private elementRef: ElementRef
  ) {
    this.layoutStateService.AppComponent=elementRef;
   // this.replaceableComponents.add({
   //   component: HeaderComponent,
   //   key: 'Theme.ApplicationLayoutHeaderComponent',
   // });
   // this.replaceableComponents.add({
   //   component: FooterComponent,
   //   key: 'Theme.ApplicationLayoutFooterComponent',
   // });
  }
}


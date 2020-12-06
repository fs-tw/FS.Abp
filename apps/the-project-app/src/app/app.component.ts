import { Component } from '@angular/core';

@Component({
  selector: 'fs-root',
  template: `
    <abp-loader-bar></abp-loader-bar>
    <abp-dynamic-layout></abp-dynamic-layout>
  `,
})
export class AppComponent {
  title = 'sscs-the-project-app';
}

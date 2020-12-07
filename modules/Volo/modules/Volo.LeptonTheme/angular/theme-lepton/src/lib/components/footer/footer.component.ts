import { Component, Input } from '@angular/core';
import { ApplicationInfo } from '@abp/ng.core';

@Component({
  selector: 'abp-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  @Input()
  appInfo: ApplicationInfo;
}

import { ApplicationInfo, eLayoutType, EnvironmentService } from '@abp/ng.core';
import { Component, ViewEncapsulation } from '@angular/core';
import { eThemeLeptonComponents } from '../../enums/components';

@Component({
  selector: 'abp-application-layout',
  templateUrl: './application-layout.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['application-layout.component.scss'],
})
export class ApplicationLayoutComponent {
  // required for dynamic component
  static type = eLayoutType.application;

  headerComponentKey = eThemeLeptonComponents.ApplicationLayoutHeader;
  footerComponentKey = eThemeLeptonComponents.ApplicationLayoutFooter;

  get appInfo(): ApplicationInfo {
    return this.environment.getEnvironment().application;
  }

  constructor(private environment: EnvironmentService) {}
}

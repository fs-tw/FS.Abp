import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { ApplicationInfo, eLayoutType, EnvironmentService } from '@abp/ng.core';
import { eThemeTheProjectComponents } from '../../enums/components';

@Component({
  selector: 'fs-application-layout',
  templateUrl: './application-layout.component.html',
  //styleUrls: ['./application-layout.component.less']
})
export class ApplicationLayoutComponent {
  static type = eLayoutType.application;

  headerComponentKey = eThemeTheProjectComponents.ApplicationLayoutHeader;
  footerComponentKey = eThemeTheProjectComponents.ApplicationLayoutFooter;

  get appInfo(): ApplicationInfo {
    return this.environment.getEnvironment().application;
  }

  constructor(private environment: EnvironmentService) {}

}

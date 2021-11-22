import { AfterViewInit, Component } from '@angular/core';
import { eLayoutType, SubscriptionService } from '@abp/ng.core';

@Component({
  templateUrl: './account-layout.component.html',
  providers: [SubscriptionService],
})
export class AccountLayoutComponent implements AfterViewInit {
  // required for dynamic component
  static type = eLayoutType.account;

  authWrapperKey = 'Account.AuthWrapperComponent';

  constructor() {}

  ngAfterViewInit() {
    //this.service.subscribeWindowSize();
  }
}

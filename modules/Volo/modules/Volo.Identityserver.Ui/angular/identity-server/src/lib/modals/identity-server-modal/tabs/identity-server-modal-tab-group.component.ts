import { Component, Input, ContentChildren, QueryList } from '@angular/core';
import { IdentityServerModalTabComponent } from './identity-server-modal-tab.component';

@Component({
  selector: 'abp-identity-server-modal-tab-group',
  template: `<ng-template><ng-content></ng-content></ng-template>`,
  providers: [
    {
      provide: IdentityServerModalTabComponent,
      useExisting: IdentityServerModalTabGroupComponent,
    },
  ],
})
export class IdentityServerModalTabGroupComponent {
  @Input() title: string;
  @ContentChildren(IdentityServerModalTabComponent) innerTabs: QueryList<
    IdentityServerModalTabComponent
  >;

  isValid() {
    return !this.innerTabs.some(tab => !tab.isValid());
  }

  getValue() {
    return this.innerTabs.reduce((retVal, tab) => ({ ...retVal, ...tab.getValue() }), {});
  }
}

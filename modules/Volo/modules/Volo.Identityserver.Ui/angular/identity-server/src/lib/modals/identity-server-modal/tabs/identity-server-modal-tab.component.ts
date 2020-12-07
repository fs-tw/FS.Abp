import { Component, Input, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'abp-identity-server-modal-tab',
  template: `<ng-template><ng-content></ng-content></ng-template>`,
})
export class IdentityServerModalTabComponent {
  @Input() title: string;
  @ViewChild(TemplateRef) template: TemplateRef<any>;

  // should be overriden by children
  isValid() {
    return true;
  }

  // should be overriden by children
  getValue() {
    return {};
  }
}

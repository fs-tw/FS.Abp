import { Component, Input, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'fs-tw-cms-kit-modal-tab',
  template: `<ng-template><ng-content></ng-content></ng-template>`
})
export class CmsKitModalTabComponent {
  @Input() title: string;
  @ViewChild(TemplateRef) template: TemplateRef<any>;

  isValid() {
    return true;
  }

  getValue() {
    return {};
  }

}

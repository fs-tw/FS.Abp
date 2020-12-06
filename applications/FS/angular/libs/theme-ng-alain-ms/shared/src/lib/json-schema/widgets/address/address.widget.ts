import { Component } from '@angular/core';
import { ControlWidget } from '@delon/form';

@Component({
  selector: 'sf-address',
  template: `
    <sf-item-wrap
      [id]="id"
      [schema]="schema"
      [ui]="ui"
      [showError]="showError"
      [error]="error"
      [showTitle]="schema.title"
    >
      <address [ngModel]="value" name="sf.address" (ngModelChange)="_change($event)"></address>
    </sf-item-wrap>
  `,
  preserveWhitespaces: false,
})
// tslint:disable-next-line: component-class-suffix
export class AddressWidget extends ControlWidget {
  static readonly KEY = 'address';

  _change(value: string) {
    this.setValue(value);
  }
}

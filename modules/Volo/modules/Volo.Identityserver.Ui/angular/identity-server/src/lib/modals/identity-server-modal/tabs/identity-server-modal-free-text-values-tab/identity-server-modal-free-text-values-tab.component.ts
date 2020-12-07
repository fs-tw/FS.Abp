import { Component, Input, ChangeDetectionStrategy, TrackByFunction } from '@angular/core';
import { IdentityServerModalTabComponent } from '../identity-server-modal-tab.component';

export type FreeTextTabField = {
  name: string;
  title: string;
  type: 'text' | 'select';
  selectOptions?: { key: string; value: string }[];
};

@Component({
  selector: 'abp-identity-server-modal-free-text-values-tab',
  templateUrl: './identity-server-modal-free-text-values-tab.component.html',
  providers: [
    {
      provide: IdentityServerModalTabComponent,
      useExisting: IdentityServerModalFreeTextValuesTabComponent,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IdentityServerModalFreeTextValuesTabComponent extends IdentityServerModalTabComponent {
  @Input() selected: any[];
  @Input() fields: FreeTextTabField[];
  @Input() fieldName: string;
  @Input() formTitle: string;

  @Input() checkboxValue: boolean;
  @Input() checkboxFieldName: string;
  @Input() checkboxLabel: string;

  model = {};

  trackByFn: TrackByFunction<any> = () => this.fields[0].name;

  add() {
    const hasFieldsFilled =
      this.fields.map(field => this.model[field.name]).filter(field => !!field).length ===
      this.fields.length;

    if (hasFieldsFilled && this.uniqueSelect()) {
      this.selected.push(this.model);
      this.model = {};
    }
  }

  getValue() {
    const retVal: any = { [this.fieldName]: this.selected };
    if (this.checkboxFieldName) {
      retVal[this.checkboxFieldName] = this.checkboxValue;
    }

    return retVal;
  }

  delete(index: number) {
    this.selected.splice(index, 1);
  }

  private contains(key: string, value: any) {
    return this.selected.findIndex(item => item[key] === value) > -1;
  }

  private uniqueSelect() {
    // TODO: improve this logic for multiple fields
    const selectField = this.fields.filter(field => field.type === 'select')[0];
    return !(selectField && this.contains(selectField.name, this.model[selectField.name]));
  }
}

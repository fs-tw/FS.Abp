import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import {
  FormGroup,
  FormGroupDirective,
} from '@angular/forms';
import { ePropType } from '@abp/ng.theme.shared/extensions';
import { FormProp } from '@abp/ng.theme.shared/extensions';
import { PropData } from '@abp/ng.theme.shared/extensions';

@Component({
  selector: 'nz-extensible-form-prop',
  templateUrl: './extensible-form-prop.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExtensibleFormPropComponent implements OnChanges {
  @Input() data: PropData;

  @Input() prop: FormProp;

  @Input() first: boolean;

  public form: FormGroup;

  get isInvalid() {
    const control = this.form.get(this.prop.name);
    return control.touched && control.invalid;
  }

  constructor(
    groupDirective: FormGroupDirective
  ) {
    this.form = groupDirective.form;
  }

  getDefaultComponentKey(prop: FormProp | any): string {
    switch (prop.type) {
      case ePropType.Boolean:
        return 'checkbox';
      case ePropType.Date:
        return 'date';
      case ePropType.DateTime:
        return 'dateTime';
      case ePropType.Hidden:
        return 'hidden';
      case ePropType.MultiSelect:
        return 'multiselect';
      case ePropType.Text:
        return 'textarea';
      case ePropType.Time:
        return 'time';
      case ePropType.Typeahead:
        return 'typeahead';
      case 'html':
         return 'quill-editor';
      default:
        return prop.options ? 'select' : 'input';
    }
  }

  getComponentKey(prop: any): string {
    if (!!prop.componentKey) return prop.componentKey;

    return this.getDefaultComponentKey(prop);
  }

  //todo 
  ngOnChanges(change: SimpleChanges) {
    // const currentProp = snq<FormProp>(() => change.prop.currentValue);
    // const { options, readonly, disabled, validators } = currentProp || {};
  }
}

import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ValidationErrorComponent as ErrorComponent } from '@ngx-validate/core';
export class ValidationErrorComponent extends ErrorComponent {
    get abpErrors() {
        if (!this.errors || !this.errors.length)
            return [];
        return this.errors.map(error => {
            if (!error.message)
                return error;
            const index = error.message.indexOf('[');
            if (index > -1) {
                return Object.assign(Object.assign({}, error), { message: error.message.slice(0, index), interpoliteParams: error.message.slice(index + 1, error.message.length - 1).split(',') });
            }
            return error;
        });
    }
}
ValidationErrorComponent.decorators = [
    { type: Component, args: [{
                selector: 'abp-validation-error',
                template: `
    <span
      class="field-validation-error text-danger"
      data-valmsg-for="Role.Name"
      data-valmsg-replace="true"
      ><span *ngFor="let error of abpErrors; trackBy: trackByFn">
        {{ error.message | abpLocalization: error.interpoliteParams }}</span
      ></span
    >
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [`
      .custom-checkbox + * .field-validation-error span,
      ngb-timepicker + * .field-validation-error span {
        background: transparent !important;
        border: 0 !important;
        color: currentColor !important;
        padding: 0 !important;
      }
    `]
            },] }
];
//# sourceMappingURL=validation-error.component.js.map
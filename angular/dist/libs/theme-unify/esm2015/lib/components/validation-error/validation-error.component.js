import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ValidationErrorComponent as ErrorComponent } from '@ngx-validate/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@abp/ng.core";
function ValidationErrorComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "abpLocalization");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const error_r1 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(2, 1, error_r1.message, error_r1.interpoliteParams), "");
} }
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
ValidationErrorComponent.ɵfac = function ValidationErrorComponent_Factory(t) { return ɵValidationErrorComponent_BaseFactory(t || ValidationErrorComponent); };
ValidationErrorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ValidationErrorComponent, selectors: [["abp-validation-error"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 2, consts: [["data-valmsg-for", "Role.Name", "data-valmsg-replace", "true", 1, "field-validation-error", "text-danger"], [4, "ngFor", "ngForOf", "ngForTrackBy"]], template: function ValidationErrorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 0);
        i0.ɵɵtemplate(1, ValidationErrorComponent_span_1_Template, 3, 4, "span", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.abpErrors)("ngForTrackBy", ctx.trackByFn);
    } }, directives: [i1.NgForOf], pipes: [i2.LocalizationPipe], styles: ["\n      .custom-checkbox + * .field-validation-error span,\n      ngb-timepicker + * .field-validation-error span {\n        background: transparent !important;\n        border: 0 !important;\n        color: currentColor !important;\n        padding: 0 !important;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
const ɵValidationErrorComponent_BaseFactory = /*@__PURE__*/ i0.ɵɵgetInheritedFactory(ValidationErrorComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ValidationErrorComponent, [{
        type: Component,
        args: [{
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
                styles: [
                    `
      .custom-checkbox + * .field-validation-error span,
      ngb-timepicker + * .field-validation-error span {
        background: transparent !important;
        border: 0 !important;
        color: currentColor !important;
        padding: 0 !important;
      }
    `,
                ],
            }]
    }], null, null); })();
//# sourceMappingURL=validation-error.component.js.map
import { Validation, ValidationErrorComponent as ErrorComponent } from '@ngx-validate/core';
import * as i0 from "@angular/core";
export declare class ValidationErrorComponent extends ErrorComponent {
    get abpErrors(): Validation.Error[] & {
        interpoliteParams?: string[];
    };
    static ɵfac: i0.ɵɵFactoryDef<ValidationErrorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ValidationErrorComponent, "abp-validation-error", never, {}, {}, never, never>;
}
//# sourceMappingURL=validation-error.component.d.ts.map
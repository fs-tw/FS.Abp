import { Directive, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
export class NzTableRowDetailDirective {
    constructor(template) {
        this.template = template;
    }
}
NzTableRowDetailDirective.ɵfac = function NzTableRowDetailDirective_Factory(t) { return new (t || NzTableRowDetailDirective)(i0.ɵɵdirectiveInject(i0.TemplateRef)); };
NzTableRowDetailDirective.ɵdir = i0.ɵɵdefineDirective({ type: NzTableRowDetailDirective, selectors: [["", "row-detail-template", ""]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NzTableRowDetailDirective, [{
        type: Directive,
        args: [{
                selector: '[row-detail-template]',
            }]
    }], function () { return [{ type: i0.TemplateRef }]; }, null); })();
//# sourceMappingURL=nz-table-row-detail.directive.js.map
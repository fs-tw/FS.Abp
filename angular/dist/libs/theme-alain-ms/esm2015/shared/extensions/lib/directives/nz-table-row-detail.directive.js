import { Directive, TemplateRef } from '@angular/core';
export class NzTableRowDetailDirective {
    constructor(template) {
        this.template = template;
    }
}
NzTableRowDetailDirective.decorators = [
    { type: Directive, args: [{
                selector: '[row-detail-template]',
            },] }
];
NzTableRowDetailDirective.ctorParameters = () => [
    { type: TemplateRef }
];
//# sourceMappingURL=nz-table-row-detail.directive.js.map
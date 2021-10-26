import { Directive, TemplateRef } from "@angular/core";

@Directive({
    selector: '[fsPageSearchFormTemplate],[fs-page-search-form-template]',
})
export class PageSearchFormTemplateDirective {
    constructor(public template: TemplateRef<any>) {}
}
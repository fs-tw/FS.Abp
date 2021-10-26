import { Directive, TemplateRef } from "@angular/core";

@Directive({
    selector: '[fsPageSearchTemplate],[fs-page-search-template]',
})
export class PageSearchTemplateDirective {
    constructor(public template: TemplateRef<any>) {}
}
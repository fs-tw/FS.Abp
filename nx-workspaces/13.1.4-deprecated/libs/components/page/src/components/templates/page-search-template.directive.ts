import { Directive, TemplateRef } from "@angular/core";

@Directive({
    selector: '[PageSearchTemplate],[page-search-template]',
})
export class PageSearchTemplateDirective {
    constructor(public template: TemplateRef<any>) {}
}
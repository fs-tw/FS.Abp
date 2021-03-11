import { ChangeDetectionStrategy, Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/popover";
import * as i2 from "ng-zorro-antd/icon";
import * as i3 from "@angular/router";
function MSHelpComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵelement(1, "i", 4);
    i0.ɵɵelementStart(2, "a", 5);
    i0.ɵɵtext(3, " \u552E\u524D\u54A8\u8BE2\u7535\u8BDD ");
    i0.ɵɵelementStart(4, "div", 6);
    i0.ɵɵtext(5, "xxxx \u8F6C 1");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 3);
    i0.ɵɵelement(7, "i", 7);
    i0.ɵɵelementStart(8, "a", 8);
    i0.ɵɵtext(9, " \u667A\u80FD\u987E\u95EE ");
    i0.ɵɵelementStart(10, "div", 9);
    i0.ɵɵtext(11, "\u667A\u80FD\u8BCA\u65AD\uFF0C\u79D2\u7EA7\u89E3\u7B54");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 10);
    i0.ɵɵelement(13, "i", 11);
    i0.ɵɵelementStart(14, "a", 5);
    i0.ɵɵtext(15, " \u5EFA\u8BAE\u53CD\u9988 ");
    i0.ɵɵelementStart(16, "div", 9);
    i0.ɵɵtext(17, "XXX\u4E0D\u662F\u5B8C\u7F8E\u7684\uFF0C\u6211\u4EEC\u6E34\u671B\u60A8\u7684\u5EFA\u8BAE");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
export class MSHelpComponent {
}
MSHelpComponent.ɵfac = function MSHelpComponent_Factory(t) { return new (t || MSHelpComponent)(); };
MSHelpComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MSHelpComponent, selectors: [["help"]], hostVars: 2, hostBindings: function MSHelpComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("ms-help", true);
    } }, decls: 5, vars: 1, consts: [["nz-popover", "", "nzPopoverTrigger", "click", 1, "ms-help__wrap", 3, "nzPopoverContent"], [1, "ms-help__text"], ["helpTpl", ""], [1, "d-flex", "align-items-center", "mb-sm"], ["nz-icon", "", "nzType", "phone", 1, "mr-sm", "text-xl"], ["routerLink", "/"], [1, "text-orange", "text-xs"], ["nz-icon", "", "nzType", "customer-service", 1, "mr-sm", "text-xl"], ["routerLink", "/smart"], [1, "text-grey", "text-xs"], [1, "d-flex", "align-items-center"], ["nz-icon", "", "nzType", "edit", 1, "mr-sm", "text-xl"]], template: function MSHelpComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "span", 1);
        i0.ɵɵtext(2, " \u54A8\u8BE2\u00B7\u5EFA\u8BAE ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, MSHelpComponent_ng_template_3_Template, 18, 0, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(4);
        i0.ɵɵproperty("nzPopoverContent", _r0);
    } }, directives: [i1.NzPopoverDirective, i2.NzIconDirective, i3.RouterLinkWithHref], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MSHelpComponent, [{
        type: Component,
        args: [{
                selector: 'help',
                templateUrl: './help.component.html',
                host: {
                    '[class.ms-help]': 'true',
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, null); })();
//# sourceMappingURL=help.component.js.map
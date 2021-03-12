import { Component } from '@angular/core';
import { EnvironmentService } from '@abp/ng.core';
import * as i0 from "@angular/core";
import * as i1 from "@abp/ng.core";
import * as i2 from "@angular/router";
import * as i3 from "../header/header.component";
import * as i4 from "../footer/footer.component";
function ApplicationLayoutComponent_fs_header_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "fs-header");
} }
function ApplicationLayoutComponent_fs_footer_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "fs-footer");
} }
const _c0 = function () { return { componentKey: "Theme.ApplicationLayoutHeaderComponent" }; };
const _c1 = function () { return { componentKey: "Theme.ApplicationLayoutFooterComponent" }; };
export class ApplicationLayoutComponent {
    constructor(environment) {
        this.environment = environment;
        this.headerComponentKey = "Theme.ApplicationLayoutHeaderComponent" /* ApplicationLayoutHeader */;
        this.footerComponentKey = "Theme.ApplicationLayoutFooterComponent" /* ApplicationLayoutFooter */;
    }
    get appInfo() {
        return this.environment.getEnvironment().application;
    }
}
ApplicationLayoutComponent.type = "application" /* application */;
ApplicationLayoutComponent.ɵfac = function ApplicationLayoutComponent_Factory(t) { return new (t || ApplicationLayoutComponent)(i0.ɵɵdirectiveInject(i1.EnvironmentService)); };
ApplicationLayoutComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ApplicationLayoutComponent, selectors: [["fs-application-layout"]], decls: 6, vars: 4, consts: [[4, "abpReplaceableTemplate"], ["href", "#", "data-type", "fixed", "data-position", "{\n     \"bottom\": 15,\n     \"right\": 15\n   }", "data-offset-top", "400", "data-compensation", "#js-header", "data-show-effect", "zoomIn", 1, "js-go-to", "u-go-to-v1"], [1, "hs-icon", "hs-icon-arrow-top"]], template: function ApplicationLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "main");
        i0.ɵɵtemplate(1, ApplicationLayoutComponent_fs_header_1_Template, 1, 0, "fs-header", 0);
        i0.ɵɵelement(2, "router-outlet");
        i0.ɵɵtemplate(3, ApplicationLayoutComponent_fs_footer_3_Template, 1, 0, "fs-footer", 0);
        i0.ɵɵelementStart(4, "a", 1);
        i0.ɵɵelement(5, "i", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("abpReplaceableTemplate", i0.ɵɵpureFunction0(2, _c0));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("abpReplaceableTemplate", i0.ɵɵpureFunction0(3, _c1));
    } }, directives: [i1.ReplaceableTemplateDirective, i2.RouterOutlet, i3.HeaderComponent, i4.FooterComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApplicationLayoutComponent, [{
        type: Component,
        args: [{
                selector: 'fs-application-layout',
                templateUrl: './application-layout.component.html',
            }]
    }], function () { return [{ type: i1.EnvironmentService }]; }, null); })();
//# sourceMappingURL=application-layout.component.js.map
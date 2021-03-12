import { SubscriptionService, MultiTenancyService, ConfigStateService } from '@abp/ng.core';
import { Component, Input, TemplateRef } from '@angular/core';
import { Store } from '@ngxs/store';
import * as i0 from "@angular/core";
import * as i1 from "@abp/ng.core";
import * as i2 from "@ngxs/store";
import * as i3 from "@angular/common";
import * as i4 from "../tenant-box/tenant-box.component";
function AuthWrapperComponent_ng_container_2_abp_tenant_box_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "abp-tenant-box");
} }
const _c0 = function (a0) { return { componentKey: a0 }; };
function AuthWrapperComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, AuthWrapperComponent_ng_container_2_abp_tenant_box_1_Template, 1, 0, "abp-tenant-box", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("abpReplaceableTemplate", i0.ɵɵpureFunction1(1, _c0, ctx_r0.tenantBoxKey));
} }
function AuthWrapperComponent_div_5_ng_content_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 0, ["*ngTemplateOutlet", "mainContentRef"]);
} }
function AuthWrapperComponent_div_5_ng_content_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 1, ["*ngTemplateOutlet", "cancelContentRef"]);
} }
function AuthWrapperComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵtemplate(2, AuthWrapperComponent_div_5_ng_content_2_Template, 1, 0, "ng-content", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, AuthWrapperComponent_div_5_ng_content_3_Template, 1, 0, "ng-content", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r1.mainContentRef);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r1.cancelContentRef);
} }
function AuthWrapperComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵelementStart(1, "strong");
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "abpLocalization");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "abpLocalization");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 2, "AbpAccount::InvalidLoginRequest"));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(5, 4, "AbpAccount::ThereAreNoLoginSchemesConfiguredForThisClient"), " ");
} }
const _c1 = ["*", "*"];
export class AuthWrapperComponent {
    constructor(multiTenancy, store, subscription, configStateService) {
        this.multiTenancy = multiTenancy;
        this.store = store;
        this.subscription = subscription;
        this.configStateService = configStateService;
        this.enableLocalLogin = true;
        this.tenantBoxKey = "Account.TenantBoxComponent" /* TenantBox */;
        this.isMultiTenancyEnabled$ = this.configStateService.getDeep$('multiTenancy.isEnabled');
    }
    ngOnInit() {
        this.subscription.addOne(this.configStateService.getSetting$('Abp.Account.EnableLocalLogin'), value => {
            if (value) {
                this.enableLocalLogin = value.toLowerCase() !== 'false';
            }
        });
    }
}
AuthWrapperComponent.ɵfac = function AuthWrapperComponent_Factory(t) { return new (t || AuthWrapperComponent)(i0.ɵɵdirectiveInject(i1.MultiTenancyService), i0.ɵɵdirectiveInject(i2.Store), i0.ɵɵdirectiveInject(i1.SubscriptionService), i0.ɵɵdirectiveInject(i1.ConfigStateService)); };
AuthWrapperComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AuthWrapperComponent, selectors: [["abp-auth-wrapper"]], inputs: { mainContentRef: "mainContentRef", cancelContentRef: "cancelContentRef" }, exportAs: ["abpAuthWrapper"], features: [i0.ɵɵProvidersFeature([SubscriptionService])], ngContentSelectors: _c1, decls: 8, vars: 5, consts: [[1, "row"], [1, "mx-auto", "col", "col-md-5"], [4, "ngIf"], [1, "abp-account-container"], ["class", "card mt-3 shadow-sm rounded", 4, "ngIf", "ngIfElse"], ["disableLocalLoginTemplate", ""], [4, "abpReplaceableTemplate"], [1, "card", "mt-3", "shadow-sm", "rounded"], [1, "card-body", "p-5"], [4, "ngTemplateOutlet"], [1, "alert", "alert-warning"]], template: function AuthWrapperComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c1);
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵtemplate(2, AuthWrapperComponent_ng_container_2_Template, 2, 3, "ng-container", 2);
        i0.ɵɵpipe(3, "async");
        i0.ɵɵelementStart(4, "div", 3);
        i0.ɵɵtemplate(5, AuthWrapperComponent_div_5_Template, 4, 2, "div", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(6, AuthWrapperComponent_ng_template_6_Template, 6, 6, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r2 = i0.ɵɵreference(7);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(3, 3, ctx.isMultiTenancyEnabled$) && ctx.multiTenancy.isTenantBoxVisible);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.enableLocalLogin)("ngIfElse", _r2);
    } }, directives: [i3.NgIf, i1.ReplaceableTemplateDirective, i4.TenantBoxComponent, i3.NgTemplateOutlet], pipes: [i3.AsyncPipe, i1.LocalizationPipe], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthWrapperComponent, [{
        type: Component,
        args: [{
                selector: 'abp-auth-wrapper',
                templateUrl: './auth-wrapper.component.html',
                exportAs: 'abpAuthWrapper',
                providers: [SubscriptionService],
            }]
    }], function () { return [{ type: i1.MultiTenancyService }, { type: i2.Store }, { type: i1.SubscriptionService }, { type: i1.ConfigStateService }]; }, { mainContentRef: [{
            type: Input
        }], cancelContentRef: [{
            type: Input
        }] }); })();
//# sourceMappingURL=auth-wrapper.component.js.map
// import { ABP, GetAppConfiguration, SessionState, SetTenant } from '@abp/ng.core';
import { SessionStateService, SubscriptionService, AbpApplicationConfigurationService, ConfigStateService } from '@abp/ng.core';
import { ToasterService } from '@abp/ng.theme.shared';
import { Component } from '@angular/core';
import { finalize, tap } from 'rxjs/operators';
import { AccountService } from '../../services/account.service';
import * as i0 from "@angular/core";
import * as i1 from "@abp/ng.theme.shared";
import * as i2 from "../../services/account.service";
import * as i3 from "@abp/ng.core";
import * as i4 from "@angular/common";
import * as i5 from "@angular/forms";
function TenantBoxComponent_ng_container_0_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h5");
    i0.ɵɵtext(1, "Switch Tenant");
    i0.ɵɵelementEnd();
} }
function TenantBoxComponent_ng_container_0_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 14);
    i0.ɵɵlistener("ngSubmit", function TenantBoxComponent_ng_container_0_ng_template_21_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(2); return ctx_r8.save(); });
    i0.ɵɵelementStart(1, "div", 15);
    i0.ɵɵelementStart(2, "div", 16);
    i0.ɵɵelementStart(3, "label", 17);
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "abpLocalization");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "input", 18);
    i0.ɵɵlistener("ngModelChange", function TenantBoxComponent_ng_container_0_ng_template_21_Template_input_ngModelChange_6_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r10 = i0.ɵɵnextContext(2); return ctx_r10.name = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p");
    i0.ɵɵtext(8);
    i0.ɵɵpipe(9, "abpLocalization");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(5, 3, "AbpUiMultiTenancy::Name"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", ctx_r5.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(9, 5, "AbpUiMultiTenancy::SwitchTenantHint"));
} }
function TenantBoxComponent_ng_container_0_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 19, 20);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "abpLocalization");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "abp-button", 21);
    i0.ɵɵlistener("click", function TenantBoxComponent_ng_container_0_ng_template_23_Template_abp_button_click_4_listener() { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(2); return ctx_r12.save(); });
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "abpLocalization");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const currentTenant_r1 = i0.ɵɵnextContext().ngIf;
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 3, "AbpTenantManagement::Cancel"), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", (currentTenant_r1 == null ? null : currentTenant_r1.name) === ctx_r7.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(7, 5, "AbpTenantManagement::Save"));
} }
function TenantBoxComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 1);
    i0.ɵɵelementStart(2, "div", 2);
    i0.ɵɵelementStart(3, "div", 3);
    i0.ɵɵelementStart(4, "div", 4);
    i0.ɵɵelementStart(5, "div", 5);
    i0.ɵɵelementStart(6, "span", 6);
    i0.ɵɵtext(7);
    i0.ɵɵpipe(8, "abpLocalization");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(9, "br");
    i0.ɵɵelementStart(10, "h6", 7);
    i0.ɵɵelementStart(11, "i");
    i0.ɵɵtext(12);
    i0.ɵɵpipe(13, "abpLocalization");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 8);
    i0.ɵɵelementStart(15, "a", 9);
    i0.ɵɵlistener("click", function TenantBoxComponent_ng_container_0_Template_a_click_15_listener() { i0.ɵɵrestoreView(_r16); const ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.onSwitch(); });
    i0.ɵɵtext(16);
    i0.ɵɵpipe(17, "abpLocalization");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "abp-modal", 10);
    i0.ɵɵlistener("visibleChange", function TenantBoxComponent_ng_container_0_Template_abp_modal_visibleChange_18_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r17 = i0.ɵɵnextContext(); return ctx_r17.isModalVisible = $event; });
    i0.ɵɵtemplate(19, TenantBoxComponent_ng_container_0_ng_template_19_Template, 2, 0, "ng-template", null, 11, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(21, TenantBoxComponent_ng_container_0_ng_template_21_Template, 10, 7, "ng-template", null, 12, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(23, TenantBoxComponent_ng_container_0_ng_template_23_Template, 8, 7, "ng-template", null, 13, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const currentTenant_r1 = ctx.ngIf;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(8, 5, "AbpUiMultiTenancy::Tenant"));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(currentTenant_r1.name || i0.ɵɵpipeBind1(13, 7, "AbpUiMultiTenancy::NotSelected"));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(17, 9, "AbpUiMultiTenancy::Switch"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("visible", ctx_r0.isModalVisible)("busy", ctx_r0.modalBusy);
} }
const _c0 = function () { return {}; };
export class TenantBoxComponent {
    constructor(toasterService, accountService, sessionStateService, subscriptionService, abpApplicationConfigurationService, configStateService) {
        this.toasterService = toasterService;
        this.accountService = accountService;
        this.sessionStateService = sessionStateService;
        this.subscriptionService = subscriptionService;
        this.abpApplicationConfigurationService = abpApplicationConfigurationService;
        this.configStateService = configStateService;
        this.currentTenant$ = this.sessionStateService.getTenant$();
    }
    onSwitch() {
        const tenant = this.sessionStateService.getTenant(); //this.store.selectSnapshot(SessionState.getTenant);
        this.name = (tenant || {}).name;
        this.isModalVisible = true;
    }
    save() {
        if (!this.name) {
            this.setTenant(null);
            this.isModalVisible = false;
            return;
        }
        this.modalBusy = true;
        this.accountService
            .findTenant(this.name)
            .pipe(finalize(() => (this.modalBusy = false)))
            .subscribe(({ success, tenantId: id, name }) => {
            if (!success) {
                this.showError();
                return;
            }
            this.setTenant({ id, name });
            this.isModalVisible = false;
        });
    }
    setTenant(tenant) {
        this.sessionStateService.setTenant(tenant);
        this.subscriptionService.addOne(this.sessionStateService.getTenant$(), (x) => {
            this.abpApplicationConfigurationService.get().pipe(tap(x => this.configStateService.setState(x))).subscribe();
        });
    }
    showError() {
        this.toasterService.error('AbpUiMultiTenancy::GivenTenantIsNotAvailable', 'AbpUi::Error', {
            messageLocalizationParams: [this.name],
        });
    }
}
TenantBoxComponent.ɵfac = function TenantBoxComponent_Factory(t) { return new (t || TenantBoxComponent)(i0.ɵɵdirectiveInject(i1.ToasterService), i0.ɵɵdirectiveInject(i2.AccountService), i0.ɵɵdirectiveInject(i3.SessionStateService), i0.ɵɵdirectiveInject(i3.SubscriptionService), i0.ɵɵdirectiveInject(i3.AbpApplicationConfigurationService), i0.ɵɵdirectiveInject(i3.ConfigStateService)); };
TenantBoxComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TenantBoxComponent, selectors: [["abp-tenant-box"]], decls: 2, vars: 4, consts: [[4, "ngIf"], [2, "height", "1em"], [1, "card", "shadow-sm", "rounded", "mb-3"], [1, "card-body", "px-5"], [1, "row"], [1, "col"], [1, "text-uppercase", "text-muted", 2, "font-size", "0.8em"], [1, "m-0", "d-inline-block"], [1, "col-auto"], ["id", "AbpTenantSwitchLink", "href", "javascript:void(0);", 1, "btn", "btn-sm", "mt-3", "btn-outline-primary", 3, "click"], ["size", "md", 3, "visible", "busy", "visibleChange"], ["abpHeader", ""], ["abpBody", ""], ["abpFooter", ""], [3, "ngSubmit"], [1, "mt-2"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "name", "name", "tenant", "autofocus", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-secondary"], ["abpClose", ""], ["type", "abp-button", "iconClass", "fa fa-check", 3, "disabled", "click"]], template: function TenantBoxComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, TenantBoxComponent_ng_container_0_Template, 25, 11, "ng-container", 0);
        i0.ɵɵpipe(1, "async");
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.currentTenant$) || i0.ɵɵpureFunction0(3, _c0));
    } }, directives: [i4.NgIf, i1.ModalComponent, i5.ɵangular_packages_forms_forms_y, i5.NgControlStatusGroup, i5.NgForm, i5.DefaultValueAccessor, i3.AutofocusDirective, i5.NgControlStatus, i5.NgModel, i1.ButtonComponent], pipes: [i4.AsyncPipe, i3.LocalizationPipe], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TenantBoxComponent, [{
        type: Component,
        args: [{
                selector: 'abp-tenant-box',
                templateUrl: './tenant-box.component.html',
            }]
    }], function () { return [{ type: i1.ToasterService }, { type: i2.AccountService }, { type: i3.SessionStateService }, { type: i3.SubscriptionService }, { type: i3.AbpApplicationConfigurationService }, { type: i3.ConfigStateService }]; }, null); })();
//# sourceMappingURL=tenant-box.component.js.map
import { AuthFlowStrategy, RestService, ConfigStateService, AbpApplicationConfigurationService, AUTH_FLOW_STRATEGY, EnvironmentService, SessionStateService, SubscriptionService, AutofocusDirective, LocalizationPipe, MultiTenancyService, ReplaceableTemplateDirective, FormSubmitDirective, ProfileState, ChangePassword, UpdateProfile, GetProfile, DynamicLayoutComponent, ReplaceableRouteContainerComponent, AuthGuard, LazyModuleFactory, CoreModule } from '@abp/ng.core';
import { ToasterService, ModalComponent, ButtonComponent, getPasswordValidators, LoadingDirective, fadeIn, ThemeSharedModule } from '@abp/ng.theme.shared';
import { ɵɵinject, Injector, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, Optional, Inject, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵgetCurrentView, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵpipe, ɵɵadvance, ɵɵtextInterpolate, ɵɵpipeBind1, ɵɵproperty, ɵɵtextInterpolate1, ɵɵelementContainerStart, ɵɵelement, ɵɵtemplate, ɵɵtemplateRefExtractor, ɵɵelementContainerEnd, ɵɵdirectiveInject, ɵɵdefineComponent, ɵɵpureFunction0, Component, ɵɵpureFunction1, ɵɵprojection, ɵɵProvidersFeature, ɵɵprojectionDef, ɵɵreference, Input, ɵɵpureFunction2, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule, InjectionToken } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ValidationGroupDirective, ValidationDirective, ValidationTargetDirective, ValidationStyleDirective, comparePasswords, NgxValidateCoreModule } from '@ngx-validate/core';
import { Router, RouterLinkWithHref, RouterModule } from '@angular/router';
import { __awaiter } from 'tslib';
import { HttpHeaders } from '@angular/common/http';
import { OAuthService } from 'angular-oauth2-oidc';
import { from, throwError } from 'rxjs';
import { tap, switchMap, take, finalize, catchError } from 'rxjs/operators';
import snq from 'snq';
import { ɵangular_packages_forms_forms_y, NgControlStatusGroup, NgForm, DefaultValueAccessor, NgControlStatus, NgModel, Validators, FormBuilder, FormGroupDirective, FormControlName, CheckboxControlValueAccessor, FormControl } from '@angular/forms';
import { Store } from '@ngxs/store';
import { NgIf, AsyncPipe, NgTemplateOutlet, NgClass } from '@angular/common';
import { trigger, transition, useAnimation } from '@angular/animations';

const oAuthStorage = localStorage;
class AuthPasswordFlowStrategy extends AuthFlowStrategy {
    constructor() {
        super(...arguments);
        this.isInternalAuth = true;
    }
    login() {
        const router = this.injector.get(Router);
        router.navigateByUrl('/account/login');
    }
    checkIfInternalAuth() {
        return true;
    }
    logout() {
        const rest = this.injector.get(RestService);
        const configStateService = this.injector.get(ConfigStateService);
        const abpApplicationConfigurationService = this.injector.get(AbpApplicationConfigurationService);
        const issuer = configStateService.getDeep('environment.oAuthConfig.issuer');
        return rest
            .request({
            method: 'GET',
            url: '/api/account/logout',
        }, null, issuer)
            .pipe(tap(() => this.oAuthService.logOut()), switchMap(() => {
            return abpApplicationConfigurationService.get()
                .pipe(tap(x => configStateService.setState(x)));
        }));
    }
    destroy() { }
}

class AuthService {
    constructor(injector, environment, oAuthService, abpApplicationConfigurationService, router, sessionStateService, configStateService, options) {
        this.injector = injector;
        this.environment = environment;
        this.oAuthService = oAuthService;
        this.abpApplicationConfigurationService = abpApplicationConfigurationService;
        this.router = router;
        this.sessionStateService = sessionStateService;
        this.configStateService = configStateService;
        this.options = options;
        this.setStrategy = () => {
            const flow = this.environment.getEnvironment().oAuthConfig.responseType || 'password';
            if (this.flow === flow)
                return;
            if (this.strategy)
                this.strategy.destroy();
            this.flow = flow;
            if (flow === 'password') {
                this.strategy = new AuthPasswordFlowStrategy(this.injector);
            }
            else {
                this.strategy = AUTH_FLOW_STRATEGY.Code(this.injector);
            }
        };
        this.setStrategy();
        this.listenToSetEnvironment();
    }
    initLogin() {
        this.strategy.login();
    }
    get isInternalAuth() {
        return this.strategy.isInternalAuth;
    }
    listenToSetEnvironment() {
        this.environment.createOnUpdateStream(state => state.oAuthConfig).subscribe(this.setStrategy);
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.strategy.init();
        });
    }
    logout() {
        return this.strategy.logout();
    }
    login(username, password) {
        const tenant = this.sessionStateService.getTenant();
        return from(this.oAuthService.fetchTokenUsingPasswordFlow(username, password, new HttpHeaders(Object.assign({}, (tenant && tenant.id && { __tenant: tenant.id }))))).pipe(switchMap(() => {
            return this.abpApplicationConfigurationService.get()
                .pipe(tap(x => this.configStateService.setState(x)));
        }), tap(() => {
            const redirectUrl = snq(() => window.history.state.redirectUrl) || (this.options || {}).redirectUrl || '/';
            this.router.navigateByUrl(redirectUrl);
        }), take(1));
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(ɵɵinject(Injector), ɵɵinject(EnvironmentService), ɵɵinject(OAuthService), ɵɵinject(AbpApplicationConfigurationService), ɵɵinject(Router), ɵɵinject(SessionStateService), ɵɵinject(ConfigStateService), ɵɵinject('ACCOUNT_OPTIONS', 8)); };
AuthService.ɵprov = ɵɵdefineInjectable({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(AuthService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: Injector }, { type: EnvironmentService }, { type: OAuthService }, { type: AbpApplicationConfigurationService }, { type: Router }, { type: SessionStateService }, { type: ConfigStateService }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: ['ACCOUNT_OPTIONS']
            }] }]; }, null); })();

class AccountService {
    constructor(rest) {
        this.rest = rest;
        this.apiName = 'AbpAccount';
    }
    findTenant(tenantName) {
        const request = {
            method: 'GET',
            url: `/api/abp/multi-tenancy/tenants/by-name/${tenantName}`,
        };
        return this.rest.request(request, { apiName: this.apiName });
    }
    register(body) {
        const request = {
            method: 'POST',
            url: '/api/account/register',
            body,
        };
        return this.rest.request(request, {
            skipHandleError: true,
            apiName: this.apiName,
        });
    }
}
AccountService.ɵfac = function AccountService_Factory(t) { return new (t || AccountService)(ɵɵinject(RestService)); };
AccountService.ɵprov = ɵɵdefineInjectable({ token: AccountService, factory: AccountService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(AccountService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: RestService }]; }, null); })();

// import { ABP, GetAppConfiguration, SessionState, SetTenant } from '@abp/ng.core';
function TenantBoxComponent_ng_container_0_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "h5");
    ɵɵtext(1, "Switch Tenant");
    ɵɵelementEnd();
} }
function TenantBoxComponent_ng_container_0_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "form", 14);
    ɵɵlistener("ngSubmit", function TenantBoxComponent_ng_container_0_ng_template_21_Template_form_ngSubmit_0_listener() { ɵɵrestoreView(_r9); const ctx_r8 = ɵɵnextContext(2); return ctx_r8.save(); });
    ɵɵelementStart(1, "div", 15);
    ɵɵelementStart(2, "div", 16);
    ɵɵelementStart(3, "label", 17);
    ɵɵtext(4);
    ɵɵpipe(5, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementStart(6, "input", 18);
    ɵɵlistener("ngModelChange", function TenantBoxComponent_ng_container_0_ng_template_21_Template_input_ngModelChange_6_listener($event) { ɵɵrestoreView(_r9); const ctx_r10 = ɵɵnextContext(2); return ctx_r10.name = $event; });
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(7, "p");
    ɵɵtext(8);
    ɵɵpipe(9, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind1(5, 3, "AbpUiMultiTenancy::Name"));
    ɵɵadvance(2);
    ɵɵproperty("ngModel", ctx_r5.name);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(9, 5, "AbpUiMultiTenancy::SwitchTenantHint"));
} }
function TenantBoxComponent_ng_container_0_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    const _r13 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 19, 20);
    ɵɵtext(2);
    ɵɵpipe(3, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementStart(4, "abp-button", 21);
    ɵɵlistener("click", function TenantBoxComponent_ng_container_0_ng_template_23_Template_abp_button_click_4_listener() { ɵɵrestoreView(_r13); const ctx_r12 = ɵɵnextContext(2); return ctx_r12.save(); });
    ɵɵelementStart(5, "span");
    ɵɵtext(6);
    ɵɵpipe(7, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const currentTenant_r1 = ɵɵnextContext().ngIf;
    const ctx_r7 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 3, "AbpTenantManagement::Cancel"), " ");
    ɵɵadvance(2);
    ɵɵproperty("disabled", (currentTenant_r1 == null ? null : currentTenant_r1.name) === ctx_r7.name);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(7, 5, "AbpTenantManagement::Save"));
} }
function TenantBoxComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r16 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "div", 1);
    ɵɵelementStart(2, "div", 2);
    ɵɵelementStart(3, "div", 3);
    ɵɵelementStart(4, "div", 4);
    ɵɵelementStart(5, "div", 5);
    ɵɵelementStart(6, "span", 6);
    ɵɵtext(7);
    ɵɵpipe(8, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelement(9, "br");
    ɵɵelementStart(10, "h6", 7);
    ɵɵelementStart(11, "i");
    ɵɵtext(12);
    ɵɵpipe(13, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(14, "div", 8);
    ɵɵelementStart(15, "a", 9);
    ɵɵlistener("click", function TenantBoxComponent_ng_container_0_Template_a_click_15_listener() { ɵɵrestoreView(_r16); const ctx_r15 = ɵɵnextContext(); return ctx_r15.onSwitch(); });
    ɵɵtext(16);
    ɵɵpipe(17, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(18, "abp-modal", 10);
    ɵɵlistener("visibleChange", function TenantBoxComponent_ng_container_0_Template_abp_modal_visibleChange_18_listener($event) { ɵɵrestoreView(_r16); const ctx_r17 = ɵɵnextContext(); return ctx_r17.isModalVisible = $event; });
    ɵɵtemplate(19, TenantBoxComponent_ng_container_0_ng_template_19_Template, 2, 0, "ng-template", null, 11, ɵɵtemplateRefExtractor);
    ɵɵtemplate(21, TenantBoxComponent_ng_container_0_ng_template_21_Template, 10, 7, "ng-template", null, 12, ɵɵtemplateRefExtractor);
    ɵɵtemplate(23, TenantBoxComponent_ng_container_0_ng_template_23_Template, 8, 7, "ng-template", null, 13, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const currentTenant_r1 = ctx.ngIf;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(7);
    ɵɵtextInterpolate(ɵɵpipeBind1(8, 5, "AbpUiMultiTenancy::Tenant"));
    ɵɵadvance(5);
    ɵɵtextInterpolate(currentTenant_r1.name || ɵɵpipeBind1(13, 7, "AbpUiMultiTenancy::NotSelected"));
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind1(17, 9, "AbpUiMultiTenancy::Switch"));
    ɵɵadvance(2);
    ɵɵproperty("visible", ctx_r0.isModalVisible)("busy", ctx_r0.modalBusy);
} }
const _c0 = function () { return {}; };
class TenantBoxComponent {
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
TenantBoxComponent.ɵfac = function TenantBoxComponent_Factory(t) { return new (t || TenantBoxComponent)(ɵɵdirectiveInject(ToasterService), ɵɵdirectiveInject(AccountService), ɵɵdirectiveInject(SessionStateService), ɵɵdirectiveInject(SubscriptionService), ɵɵdirectiveInject(AbpApplicationConfigurationService), ɵɵdirectiveInject(ConfigStateService)); };
TenantBoxComponent.ɵcmp = ɵɵdefineComponent({ type: TenantBoxComponent, selectors: [["abp-tenant-box"]], decls: 2, vars: 4, consts: [[4, "ngIf"], [2, "height", "1em"], [1, "card", "shadow-sm", "rounded", "mb-3"], [1, "card-body", "px-5"], [1, "row"], [1, "col"], [1, "text-uppercase", "text-muted", 2, "font-size", "0.8em"], [1, "m-0", "d-inline-block"], [1, "col-auto"], ["id", "AbpTenantSwitchLink", "href", "javascript:void(0);", 1, "btn", "btn-sm", "mt-3", "btn-outline-primary", 3, "click"], ["size", "md", 3, "visible", "busy", "visibleChange"], ["abpHeader", ""], ["abpBody", ""], ["abpFooter", ""], [3, "ngSubmit"], [1, "mt-2"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "name", "name", "tenant", "autofocus", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-secondary"], ["abpClose", ""], ["type", "abp-button", "iconClass", "fa fa-check", 3, "disabled", "click"]], template: function TenantBoxComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, TenantBoxComponent_ng_container_0_Template, 25, 11, "ng-container", 0);
        ɵɵpipe(1, "async");
    } if (rf & 2) {
        ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.currentTenant$) || ɵɵpureFunction0(3, _c0));
    } }, directives: [NgIf, ModalComponent, ɵangular_packages_forms_forms_y, NgControlStatusGroup, NgForm, DefaultValueAccessor, AutofocusDirective, NgControlStatus, NgModel, ButtonComponent], pipes: [AsyncPipe, LocalizationPipe], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(TenantBoxComponent, [{
        type: Component,
        args: [{
                selector: 'abp-tenant-box',
                templateUrl: './tenant-box.component.html',
            }]
    }], function () { return [{ type: ToasterService }, { type: AccountService }, { type: SessionStateService }, { type: SubscriptionService }, { type: AbpApplicationConfigurationService }, { type: ConfigStateService }]; }, null); })();

function AuthWrapperComponent_ng_container_2_abp_tenant_box_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "abp-tenant-box");
} }
const _c0$1 = function (a0) { return { componentKey: a0 }; };
function AuthWrapperComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, AuthWrapperComponent_ng_container_2_abp_tenant_box_1_Template, 1, 0, "abp-tenant-box", 6);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("abpReplaceableTemplate", ɵɵpureFunction1(1, _c0$1, ctx_r0.tenantBoxKey));
} }
function AuthWrapperComponent_div_5_ng_content_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵprojection(0, 0, ["*ngTemplateOutlet", "mainContentRef"]);
} }
function AuthWrapperComponent_div_5_ng_content_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵprojection(0, 1, ["*ngTemplateOutlet", "cancelContentRef"]);
} }
function AuthWrapperComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵelementStart(1, "div", 8);
    ɵɵtemplate(2, AuthWrapperComponent_div_5_ng_content_2_Template, 1, 0, "ng-content", 9);
    ɵɵelementEnd();
    ɵɵtemplate(3, AuthWrapperComponent_div_5_ng_content_3_Template, 1, 0, "ng-content", 9);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.mainContentRef);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.cancelContentRef);
} }
function AuthWrapperComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 10);
    ɵɵelementStart(1, "strong");
    ɵɵtext(2);
    ɵɵpipe(3, "abpLocalization");
    ɵɵelementEnd();
    ɵɵtext(4);
    ɵɵpipe(5, "abpLocalization");
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(3, 2, "AbpAccount::InvalidLoginRequest"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 4, "AbpAccount::ThereAreNoLoginSchemesConfiguredForThisClient"), " ");
} }
const _c1 = ["*", "*"];
class AuthWrapperComponent {
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
AuthWrapperComponent.ɵfac = function AuthWrapperComponent_Factory(t) { return new (t || AuthWrapperComponent)(ɵɵdirectiveInject(MultiTenancyService), ɵɵdirectiveInject(Store), ɵɵdirectiveInject(SubscriptionService), ɵɵdirectiveInject(ConfigStateService)); };
AuthWrapperComponent.ɵcmp = ɵɵdefineComponent({ type: AuthWrapperComponent, selectors: [["abp-auth-wrapper"]], inputs: { mainContentRef: "mainContentRef", cancelContentRef: "cancelContentRef" }, exportAs: ["abpAuthWrapper"], features: [ɵɵProvidersFeature([SubscriptionService])], ngContentSelectors: _c1, decls: 8, vars: 5, consts: [[1, "row"], [1, "mx-auto", "col", "col-md-5"], [4, "ngIf"], [1, "abp-account-container"], ["class", "card mt-3 shadow-sm rounded", 4, "ngIf", "ngIfElse"], ["disableLocalLoginTemplate", ""], [4, "abpReplaceableTemplate"], [1, "card", "mt-3", "shadow-sm", "rounded"], [1, "card-body", "p-5"], [4, "ngTemplateOutlet"], [1, "alert", "alert-warning"]], template: function AuthWrapperComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef(_c1);
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵtemplate(2, AuthWrapperComponent_ng_container_2_Template, 2, 3, "ng-container", 2);
        ɵɵpipe(3, "async");
        ɵɵelementStart(4, "div", 3);
        ɵɵtemplate(5, AuthWrapperComponent_div_5_Template, 4, 2, "div", 4);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵtemplate(6, AuthWrapperComponent_ng_template_6_Template, 6, 6, "ng-template", null, 5, ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r2 = ɵɵreference(7);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ɵɵpipeBind1(3, 3, ctx.isMultiTenancyEnabled$) && ctx.multiTenancy.isTenantBoxVisible);
        ɵɵadvance(3);
        ɵɵproperty("ngIf", ctx.enableLocalLogin)("ngIfElse", _r2);
    } }, directives: [NgIf, ReplaceableTemplateDirective, TenantBoxComponent, NgTemplateOutlet], pipes: [AsyncPipe, LocalizationPipe], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(AuthWrapperComponent, [{
        type: Component,
        args: [{
                selector: 'abp-auth-wrapper',
                templateUrl: './auth-wrapper.component.html',
                exportAs: 'abpAuthWrapper',
                providers: [SubscriptionService],
            }]
    }], function () { return [{ type: MultiTenancyService }, { type: Store }, { type: SubscriptionService }, { type: ConfigStateService }]; }, { mainContentRef: [{
            type: Input
        }], cancelContentRef: [{
            type: Input
        }] }); })();

//import { AuthService, SetRemember, ConfigState } from '@abp/ng.core';
function LoginComponent_abp_auth_wrapper_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "abp-auth-wrapper", 3);
} if (rf & 2) {
    ɵɵnextContext();
    const _r1 = ɵɵreference(2);
    const _r3 = ɵɵreference(4);
    ɵɵproperty("mainContentRef", _r1)("cancelContentRef", _r3);
} }
function LoginComponent_ng_template_1_strong_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "strong");
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementStart(3, "a", 15);
    ɵɵtext(4);
    ɵɵpipe(5, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, "AbpAccount::AreYouANewUser"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(5, 4, "AbpAccount::Register"));
} }
function LoginComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "h4");
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementEnd();
    ɵɵtemplate(3, LoginComponent_ng_template_1_strong_3_Template, 6, 6, "strong", 4);
    ɵɵelementStart(4, "form", 5);
    ɵɵlistener("ngSubmit", function LoginComponent_ng_template_1_Template_form_ngSubmit_4_listener() { ɵɵrestoreView(_r7); const ctx_r6 = ɵɵnextContext(); return ctx_r6.onSubmit(); });
    ɵɵelementStart(5, "div", 6);
    ɵɵelementStart(6, "label", 7);
    ɵɵtext(7);
    ɵɵpipe(8, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelement(9, "input", 8);
    ɵɵelementEnd();
    ɵɵelementStart(10, "div", 6);
    ɵɵelementStart(11, "label", 9);
    ɵɵtext(12);
    ɵɵpipe(13, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelement(14, "input", 10);
    ɵɵelementEnd();
    ɵɵelementStart(15, "div", 11);
    ɵɵelementStart(16, "label", 12);
    ɵɵelement(17, "input", 13);
    ɵɵtext(18);
    ɵɵpipe(19, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(20, "abp-button", 14);
    ɵɵtext(21);
    ɵɵpipe(22, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 8, "AbpAccount::Login"));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r2.isSelfRegistrationEnabled);
    ɵɵadvance(1);
    ɵɵproperty("formGroup", ctx_r2.form);
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(8, 10, "AbpAccount::UserNameOrEmailAddress"));
    ɵɵadvance(5);
    ɵɵtextInterpolate(ɵɵpipeBind1(13, 12, "AbpAccount::Password"));
    ɵɵadvance(6);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(19, 14, "AbpAccount::RememberMe"), " ");
    ɵɵadvance(2);
    ɵɵproperty("loading", ctx_r2.inProgress);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(22, 16, "AbpAccount::Login"), " ");
} }
function LoginComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 16);
    ɵɵelementStart(1, "a", 17);
    ɵɵelementStart(2, "button", 18);
    ɵɵtext(3);
    ɵɵpipe(4, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 1, "AbpAccount::Cancel"), " ");
} }
const _c0$2 = function (a0) { return { value: a0 }; };
const _c1$1 = function (a0, a1) { return { mainContentRef: a0, cancelContentRef: a1 }; };
const _c2 = function (a0, a1) { return { componentKey: a0, inputs: a1 }; };
const { maxLength, minLength, required } = Validators;
class LoginComponent {
    constructor(fb, oauthService, store, toasterService, authService, configStateService) {
        this.fb = fb;
        this.oauthService = oauthService;
        this.store = store;
        this.toasterService = toasterService;
        this.authService = authService;
        this.configStateService = configStateService;
        this.isSelfRegistrationEnabled = true;
        this.authWrapperKey = "Account.AuthWrapperComponent" /* AuthWrapper */;
    }
    ngOnInit() {
        this.isSelfRegistrationEnabled =
            (this.configStateService.getSetting('Abp.Account.IsSelfRegistrationEnabled') || '').toLowerCase() !== 'false';
        this.form = this.fb.group({
            username: ['', [required, maxLength(255)]],
            password: ['', [required, maxLength(128)]],
            remember: [false],
        });
    }
    onSubmit() {
        if (this.form.invalid)
            return;
        this.inProgress = true;
        this.authService
            .login(this.form.get('username').value, this.form.get('password').value)
            .pipe(catchError(err => {
            this.toasterService.error(snq(() => err.error.error_description) ||
                snq(() => err.error.error.message, 'AbpAccount::DefaultErrorMessage'), 'Error', { life: 7000 });
            return throwError(err);
        }), finalize(() => (this.inProgress = false)))
            .subscribe(() => {
            //this.store.dispatch(new SetRemember(this.form.get('remember').value));
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(ɵɵdirectiveInject(FormBuilder), ɵɵdirectiveInject(OAuthService), ɵɵdirectiveInject(Store), ɵɵdirectiveInject(ToasterService), ɵɵdirectiveInject(AuthService), ɵɵdirectiveInject(ConfigStateService)); };
LoginComponent.ɵcmp = ɵɵdefineComponent({ type: LoginComponent, selectors: [["abp-login"]], decls: 5, vars: 11, consts: [[3, "mainContentRef", "cancelContentRef", 4, "abpReplaceableTemplate"], ["mainContentRef", ""], ["cancelContentRef", ""], [3, "mainContentRef", "cancelContentRef"], [4, "ngIf"], ["validateOnSubmit", "", 1, "mt-4", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "login-input-user-name-or-email-address"], ["type", "text", "id", "login-input-user-name-or-email-address", "formControlName", "username", "autocomplete", "username", "autofocus", "", 1, "form-control"], ["for", "login-input-password"], ["type", "password", "id", "login-input-password", "formControlName", "password", "autocomplete", "current-password", 1, "form-control"], ["validationTarget", "", "validationStyle", "", 1, "form-check"], ["for", "login-input-remember-me", 1, "form-check-label"], ["type", "checkbox", "id", "login-input-remember-me", "formControlName", "remember", 1, "form-check-input"], ["buttonType", "submit", "name", "Action", "buttonClass", "btn-block btn-lg mt-3 btn btn-primary", 3, "loading"], ["routerLink", "/account/register", 1, "text-decoration-none"], [1, "card-footer", "text-center", "border-0"], ["routerLink", "/"], ["type", "button", "name", "Action", "value", "Cancel", 1, "px-2", "py-0", "btn", "btn-link"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, LoginComponent_abp_auth_wrapper_0_Template, 1, 2, "abp-auth-wrapper", 0);
        ɵɵtemplate(1, LoginComponent_ng_template_1_Template, 23, 18, "ng-template", null, 1, ɵɵtemplateRefExtractor);
        ɵɵtemplate(3, LoginComponent_ng_template_3_Template, 5, 3, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = ɵɵreference(2);
        const _r3 = ɵɵreference(4);
        ɵɵproperty("abpReplaceableTemplate", ɵɵpureFunction2(8, _c2, ctx.authWrapperKey, ɵɵpureFunction2(5, _c1$1, ɵɵpureFunction1(1, _c0$2, _r1), ɵɵpureFunction1(3, _c0$2, _r3))));
    } }, directives: [ReplaceableTemplateDirective, AuthWrapperComponent, NgIf, ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormSubmitDirective, FormGroupDirective, ValidationGroupDirective, DefaultValueAccessor, NgControlStatus, FormControlName, ValidationDirective, AutofocusDirective, ValidationTargetDirective, ValidationStyleDirective, CheckboxControlValueAccessor, ButtonComponent, RouterLinkWithHref], pipes: [LocalizationPipe], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(LoginComponent, [{
        type: Component,
        args: [{
                selector: 'abp-login',
                templateUrl: './login.component.html',
            }]
    }], function () { return [{ type: FormBuilder }, { type: OAuthService }, { type: Store }, { type: ToasterService }, { type: AuthService }, { type: ConfigStateService }]; }, null); })();

function ChangePasswordComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵelementStart(1, "label", 8);
    ɵɵtext(2);
    ɵɵpipe(3, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementStart(4, "span");
    ɵɵtext(5, " * ");
    ɵɵelementEnd();
    ɵɵelement(6, "input", 9);
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(3, 1, "AbpIdentity::DisplayName:CurrentPassword"));
} }
const { required: required$1 } = Validators;
const PASSWORD_FIELDS = ['newPassword', 'repeatNewPassword'];
class ChangePasswordComponent {
    constructor(fb, store, toasterService, injector) {
        this.fb = fb;
        this.store = store;
        this.toasterService = toasterService;
        this.injector = injector;
        this.mapErrorsFn = (errors, groupErrors, control) => {
            if (PASSWORD_FIELDS.indexOf(String(control.name)) < 0)
                return errors;
            return errors.concat(groupErrors.filter(({ key }) => key === 'passwordMismatch'));
        };
    }
    ngOnInit() {
        this.hideCurrentPassword = !this.store.selectSnapshot(ProfileState.getProfile).hasPassword;
        const passwordValidations = getPasswordValidators(this.injector);
        this.form = this.fb.group({
            password: ['', required$1],
            newPassword: [
                '',
                {
                    validators: [required$1, ...passwordValidations],
                },
            ],
            repeatNewPassword: [
                '',
                {
                    validators: [required$1, ...passwordValidations],
                },
            ],
        }, {
            validators: [comparePasswords(PASSWORD_FIELDS)],
        });
        if (this.hideCurrentPassword)
            this.form.removeControl('password');
    }
    onSubmit() {
        if (this.form.invalid)
            return;
        this.inProgress = true;
        this.store
            .dispatch(new ChangePassword(Object.assign(Object.assign({}, (!this.hideCurrentPassword && { currentPassword: this.form.get('password').value })), { newPassword: this.form.get('newPassword').value })))
            .pipe(finalize(() => (this.inProgress = false)))
            .subscribe({
            next: () => {
                this.form.reset();
                this.toasterService.success('AbpAccount::PasswordChangedMessage', '', {
                    life: 5000,
                });
                if (this.hideCurrentPassword) {
                    this.hideCurrentPassword = false;
                    this.form.addControl('password', new FormControl('', [required$1]));
                }
            },
            error: err => {
                this.toasterService.error(snq(() => err.error.error.message, 'AbpAccount::DefaultErrorMessage'));
            },
        });
    }
}
ChangePasswordComponent.ɵfac = function ChangePasswordComponent_Factory(t) { return new (t || ChangePasswordComponent)(ɵɵdirectiveInject(FormBuilder), ɵɵdirectiveInject(Store), ɵɵdirectiveInject(ToasterService), ɵɵdirectiveInject(Injector)); };
ChangePasswordComponent.ɵcmp = ɵɵdefineComponent({ type: ChangePasswordComponent, selectors: [["abp-change-password-form"]], exportAs: ["abpChangePasswordForm"], decls: 19, vars: 14, consts: [["validateOnSubmit", "", 3, "formGroup", "mapErrorsFn", "ngSubmit"], ["class", "form-group", 4, "ngIf"], [1, "form-group"], ["for", "new-password"], ["type", "password", "id", "new-password", "formControlName", "newPassword", "autocomplete", "new-password", 1, "form-control"], ["for", "confirm-new-password"], ["type", "password", "id", "confirm-new-password", "formControlName", "repeatNewPassword", "autocomplete", "new-password", 1, "form-control"], ["iconClass", "fa fa-check", "buttonClass", "btn btn-primary color-white", "buttonType", "submit", 3, "loading", "disabled"], ["for", "current-password"], ["type", "password", "id", "current-password", "formControlName", "password", "autofocus", "", "autocomplete", "current-password", 1, "form-control"]], template: function ChangePasswordComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "form", 0);
        ɵɵlistener("ngSubmit", function ChangePasswordComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        ɵɵtemplate(1, ChangePasswordComponent_div_1_Template, 7, 3, "div", 1);
        ɵɵelementStart(2, "div", 2);
        ɵɵelementStart(3, "label", 3);
        ɵɵtext(4);
        ɵɵpipe(5, "abpLocalization");
        ɵɵelementEnd();
        ɵɵelementStart(6, "span");
        ɵɵtext(7, " * ");
        ɵɵelementEnd();
        ɵɵelement(8, "input", 4);
        ɵɵelementEnd();
        ɵɵelementStart(9, "div", 2);
        ɵɵelementStart(10, "label", 5);
        ɵɵtext(11);
        ɵɵpipe(12, "abpLocalization");
        ɵɵelementEnd();
        ɵɵelementStart(13, "span");
        ɵɵtext(14, " * ");
        ɵɵelementEnd();
        ɵɵelement(15, "input", 6);
        ɵɵelementEnd();
        ɵɵelementStart(16, "abp-button", 7);
        ɵɵtext(17);
        ɵɵpipe(18, "abpLocalization");
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("formGroup", ctx.form)("mapErrorsFn", ctx.mapErrorsFn);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", !ctx.hideCurrentPassword);
        ɵɵadvance(3);
        ɵɵtextInterpolate(ɵɵpipeBind1(5, 8, "AbpIdentity::DisplayName:NewPassword"));
        ɵɵadvance(7);
        ɵɵtextInterpolate(ɵɵpipeBind1(12, 10, "AbpIdentity::DisplayName:NewPasswordConfirm"));
        ɵɵadvance(5);
        ɵɵproperty("loading", ctx.inProgress)("disabled", ctx.form == null ? null : ctx.form.invalid);
        ɵɵadvance(1);
        ɵɵtextInterpolate(ɵɵpipeBind1(18, 12, "AbpIdentity::Save"));
    } }, directives: [ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormSubmitDirective, FormGroupDirective, ValidationGroupDirective, NgIf, DefaultValueAccessor, NgControlStatus, FormControlName, ValidationDirective, ButtonComponent, AutofocusDirective], pipes: [LocalizationPipe], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ChangePasswordComponent, [{
        type: Component,
        args: [{
                selector: 'abp-change-password-form',
                templateUrl: './change-password.component.html',
                exportAs: 'abpChangePasswordForm',
            }]
    }], function () { return [{ type: FormBuilder }, { type: Store }, { type: ToasterService }, { type: Injector }]; }, null); })();

function PersonalSettingsComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "form", 1);
    ɵɵlistener("ngSubmit", function PersonalSettingsComponent_form_0_Template_form_ngSubmit_0_listener() { ɵɵrestoreView(_r2); const ctx_r1 = ɵɵnextContext(); return ctx_r1.submit(); });
    ɵɵelementStart(1, "div", 2);
    ɵɵelementStart(2, "label", 3);
    ɵɵtext(3);
    ɵɵpipe(4, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementStart(5, "span");
    ɵɵtext(6, " * ");
    ɵɵelementEnd();
    ɵɵelementStart(7, "input", 4);
    ɵɵlistener("keydown.space", function PersonalSettingsComponent_form_0_Template_input_keydown_space_7_listener($event) { return $event.preventDefault(); });
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(8, "div", 5);
    ɵɵelementStart(9, "div", 6);
    ɵɵelementStart(10, "div", 2);
    ɵɵelementStart(11, "label", 7);
    ɵɵtext(12);
    ɵɵpipe(13, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelement(14, "input", 8);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(15, "div", 6);
    ɵɵelementStart(16, "div", 2);
    ɵɵelementStart(17, "label", 9);
    ɵɵtext(18);
    ɵɵpipe(19, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelement(20, "input", 10);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(21, "div", 2);
    ɵɵelementStart(22, "label", 11);
    ɵɵtext(23);
    ɵɵpipe(24, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementStart(25, "span");
    ɵɵtext(26, " * ");
    ɵɵelementEnd();
    ɵɵelement(27, "input", 12);
    ɵɵelementEnd();
    ɵɵelementStart(28, "div", 2);
    ɵɵelementStart(29, "label", 13);
    ɵɵtext(30);
    ɵɵpipe(31, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelement(32, "input", 14);
    ɵɵelementEnd();
    ɵɵelementStart(33, "abp-button", 15);
    ɵɵtext(34);
    ɵɵpipe(35, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("formGroup", ctx_r0.form);
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(4, 9, "AbpIdentity::DisplayName:UserName"));
    ɵɵadvance(9);
    ɵɵtextInterpolate(ɵɵpipeBind1(13, 11, "AbpIdentity::DisplayName:Name"));
    ɵɵadvance(6);
    ɵɵtextInterpolate(ɵɵpipeBind1(19, 13, "AbpIdentity::DisplayName:Surname"));
    ɵɵadvance(5);
    ɵɵtextInterpolate(ɵɵpipeBind1(24, 15, "AbpIdentity::DisplayName:Email"));
    ɵɵadvance(7);
    ɵɵtextInterpolate(ɵɵpipeBind1(31, 17, "AbpIdentity::DisplayName:PhoneNumber"));
    ɵɵadvance(3);
    ɵɵproperty("loading", ctx_r0.inProgress)("disabled", ctx_r0.form == null ? null : ctx_r0.form.invalid);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(35, 19, "AbpIdentity::Save"), "");
} }
const { maxLength: maxLength$1, required: required$2, email } = Validators;
class PersonalSettingsComponent {
    constructor(fb, store, toasterService) {
        this.fb = fb;
        this.store = store;
        this.toasterService = toasterService;
    }
    ngOnInit() {
        this.buildForm();
    }
    buildForm() {
        const profile = this.store.selectSnapshot(ProfileState.getProfile);
        this.form = this.fb.group({
            userName: [profile.userName, [required$2, maxLength$1(256)]],
            email: [profile.email, [required$2, email, maxLength$1(256)]],
            name: [profile.name || '', [maxLength$1(64)]],
            surname: [profile.surname || '', [maxLength$1(64)]],
            phoneNumber: [profile.phoneNumber || '', [maxLength$1(16)]],
        });
    }
    submit() {
        if (this.form.invalid)
            return;
        this.inProgress = true;
        this.store
            .dispatch(new UpdateProfile(this.form.value))
            .pipe(finalize(() => (this.inProgress = false)))
            .subscribe(() => {
            this.toasterService.success('AbpAccount::PersonalSettingsSaved', 'Success', { life: 5000 });
        });
    }
}
PersonalSettingsComponent.ɵfac = function PersonalSettingsComponent_Factory(t) { return new (t || PersonalSettingsComponent)(ɵɵdirectiveInject(FormBuilder), ɵɵdirectiveInject(Store), ɵɵdirectiveInject(ToasterService)); };
PersonalSettingsComponent.ɵcmp = ɵɵdefineComponent({ type: PersonalSettingsComponent, selectors: [["abp-personal-settings-form"]], exportAs: ["abpPersonalSettingsForm"], decls: 1, vars: 1, consts: [["validateOnSubmit", "", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["validateOnSubmit", "", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "username"], ["type", "text", "id", "username", "formControlName", "userName", "autofocus", "", 1, "form-control", 3, "keydown.space"], [1, "row"], [1, "col", "col-md-6"], ["for", "name"], ["type", "text", "id", "name", "formControlName", "name", 1, "form-control"], ["for", "surname"], ["type", "text", "id", "surname", "formControlName", "surname", 1, "form-control"], ["for", "email-address"], ["type", "text", "id", "email-address", "formControlName", "email", 1, "form-control"], ["for", "phone-number"], ["type", "text", "id", "phone-number", "formControlName", "phoneNumber", 1, "form-control"], ["buttonType", "submit", "iconClass", "fa fa-check", "buttonClass", "btn btn-primary color-white", 3, "loading", "disabled"]], template: function PersonalSettingsComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, PersonalSettingsComponent_form_0_Template, 36, 21, "form", 0);
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.form);
    } }, directives: [NgIf, ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormSubmitDirective, FormGroupDirective, ValidationGroupDirective, DefaultValueAccessor, NgControlStatus, FormControlName, ValidationDirective, AutofocusDirective, ButtonComponent], pipes: [LocalizationPipe], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(PersonalSettingsComponent, [{
        type: Component,
        args: [{
                selector: 'abp-personal-settings-form',
                templateUrl: './personal-settings.component.html',
                exportAs: 'abpPersonalSettingsForm',
            }]
    }], function () { return [{ type: FormBuilder }, { type: Store }, { type: ToasterService }]; }, null); })();

const _c0$3 = function (a0) { return { active: a0 }; };
function ManageProfileComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 10);
    ɵɵlistener("click", function ManageProfileComponent_li_6_Template_li_click_0_listener() { ɵɵrestoreView(_r3); const ctx_r2 = ɵɵnextContext(); return ctx_r2.selectedTab = 0; });
    ɵɵelementStart(1, "a", 8);
    ɵɵtext(2);
    ɵɵpipe(3, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ɵɵpureFunction1(4, _c0$3, ctx_r0.selectedTab === 0));
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(3, 2, "AbpUi::ChangePassword"));
} }
function ManageProfileComponent_div_11_div_1_abp_change_password_form_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "abp-change-password-form");
} }
const _c1$2 = function (a0) { return { componentKey: a0 }; };
function ManageProfileComponent_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 13);
    ɵɵelementStart(1, "div", 14);
    ɵɵelementStart(2, "h4");
    ɵɵtext(3);
    ɵɵpipe(4, "abpLocalization");
    ɵɵelement(5, "hr");
    ɵɵelementEnd();
    ɵɵtemplate(6, ManageProfileComponent_div_11_div_1_abp_change_password_form_6_Template, 1, 0, "abp-change-password-form", 15);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵproperty("@fadeIn", undefined);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 3, "AbpIdentity::ChangePassword"), " ");
    ɵɵadvance(3);
    ɵɵproperty("abpReplaceableTemplate", ɵɵpureFunction1(5, _c1$2, ctx_r4.changePasswordKey));
} }
function ManageProfileComponent_div_11_div_2_abp_personal_settings_form_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "abp-personal-settings-form");
} }
function ManageProfileComponent_div_11_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 13);
    ɵɵelementStart(1, "div", 14);
    ɵɵelementStart(2, "h4");
    ɵɵtext(3);
    ɵɵpipe(4, "abpLocalization");
    ɵɵelement(5, "hr");
    ɵɵelementEnd();
    ɵɵtemplate(6, ManageProfileComponent_div_11_div_2_abp_personal_settings_form_6_Template, 1, 0, "abp-personal-settings-form", 15);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵproperty("@fadeIn", undefined);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 3, "AbpIdentity::PersonalSettings"), " ");
    ɵɵadvance(3);
    ɵɵproperty("abpReplaceableTemplate", ɵɵpureFunction1(5, _c1$2, ctx_r5.personalSettingsKey));
} }
function ManageProfileComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 11);
    ɵɵtemplate(1, ManageProfileComponent_div_11_div_1_Template, 7, 7, "div", 12);
    ɵɵtemplate(2, ManageProfileComponent_div_11_div_2_Template, 7, 7, "div", 12);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.selectedTab === 0);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.selectedTab === 1);
} }
class ManageProfileComponent {
    constructor(store) {
        this.store = store;
        this.selectedTab = 0;
        this.changePasswordKey = "Account.ChangePasswordComponent" /* ChangePassword */;
        this.personalSettingsKey = "Account.PersonalSettingsComponent" /* PersonalSettings */;
    }
    ngOnInit() {
        this.store.dispatch(new GetProfile()).subscribe(() => {
            this.isProfileLoaded = true;
            if (this.store.selectSnapshot(ProfileState.getProfile).isExternal) {
                this.hideChangePasswordTab = true;
                this.selectedTab = 1;
            }
        });
    }
}
ManageProfileComponent.ɵfac = function ManageProfileComponent_Factory(t) { return new (t || ManageProfileComponent)(ɵɵdirectiveInject(Store)); };
ManageProfileComponent.ɵcmp = ɵɵdefineComponent({ type: ManageProfileComponent, selectors: [["abp-manage-profile"]], decls: 12, vars: 9, consts: [["id", "AbpContentToolbar"], [1, "card", "border-0", "shadow-sm", "min-h-400", 3, "abpLoading"], [1, "card-body"], [1, "row"], [1, "col-12", "col-md-3"], ["id", "nav-tab", "role", "tablist", 1, "nav", "flex-column", "nav-pills"], ["class", "nav-item", 3, "click", 4, "ngIf"], [1, "nav-item", "mb-2", 3, "click"], ["role", "tab", "href", "javascript:void(0)", 1, "nav-link", 3, "ngClass"], ["class", "col-12 col-md-9", 4, "ngIf"], [1, "nav-item", 3, "click"], [1, "col-12", "col-md-9"], ["class", "tab-content", 4, "ngIf"], [1, "tab-content"], ["role", "tabpanel", 1, "tab-pane", "active"], [4, "abpReplaceableTemplate"]], template: function ManageProfileComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "div", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵelementStart(2, "div", 2);
        ɵɵelementStart(3, "div", 3);
        ɵɵelementStart(4, "div", 4);
        ɵɵelementStart(5, "ul", 5);
        ɵɵtemplate(6, ManageProfileComponent_li_6_Template, 4, 6, "li", 6);
        ɵɵelementStart(7, "li", 7);
        ɵɵlistener("click", function ManageProfileComponent_Template_li_click_7_listener() { return ctx.selectedTab = 1; });
        ɵɵelementStart(8, "a", 8);
        ɵɵtext(9);
        ɵɵpipe(10, "abpLocalization");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵtemplate(11, ManageProfileComponent_div_11_Template, 3, 2, "div", 9);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("abpLoading", !ctx.isProfileLoaded);
        ɵɵadvance(5);
        ɵɵproperty("ngIf", !ctx.hideChangePasswordTab && ctx.isProfileLoaded);
        ɵɵadvance(2);
        ɵɵproperty("ngClass", ɵɵpureFunction1(7, _c0$3, ctx.selectedTab === 1));
        ɵɵadvance(1);
        ɵɵtextInterpolate(ɵɵpipeBind1(10, 5, "AbpAccount::PersonalSettings"));
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.isProfileLoaded);
    } }, directives: [LoadingDirective, NgIf, NgClass, ReplaceableTemplateDirective, ChangePasswordComponent, PersonalSettingsComponent], pipes: [LocalizationPipe], styles: [".min-h-400[_ngcontent-%COMP%] {\n        min-height: 400px;\n      }"], data: { animation: [trigger('fadeIn', [transition(':enter', useAnimation(fadeIn))])] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ManageProfileComponent, [{
        type: Component,
        args: [{
                selector: 'abp-manage-profile',
                templateUrl: './manage-profile.component.html',
                animations: [trigger('fadeIn', [transition(':enter', useAnimation(fadeIn))])],
                styles: [
                    `
      .min-h-400 {
        min-height: 400px;
      }
    `,
                ],
            }]
    }], function () { return [{ type: Store }]; }, null); })();

//import { AuthService, ConfigState } from '@abp/ng.core';
function RegisterComponent_abp_auth_wrapper_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "abp-auth-wrapper", 2);
} if (rf & 2) {
    ɵɵnextContext();
    const _r1 = ɵɵreference(2);
    ɵɵproperty("mainContentRef", _r1);
} }
function RegisterComponent_ng_template_1_form_9_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "form", 5);
    ɵɵlistener("ngSubmit", function RegisterComponent_ng_template_1_form_9_Template_form_ngSubmit_0_listener() { ɵɵrestoreView(_r5); const ctx_r4 = ɵɵnextContext(2); return ctx_r4.onSubmit(); });
    ɵɵelementStart(1, "div", 6);
    ɵɵelementStart(2, "label", 7);
    ɵɵtext(3);
    ɵɵpipe(4, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementStart(5, "span");
    ɵɵtext(6, " * ");
    ɵɵelementEnd();
    ɵɵelement(7, "input", 8);
    ɵɵelementEnd();
    ɵɵelementStart(8, "div", 6);
    ɵɵelementStart(9, "label", 9);
    ɵɵtext(10);
    ɵɵpipe(11, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementStart(12, "span");
    ɵɵtext(13, " * ");
    ɵɵelementEnd();
    ɵɵelement(14, "input", 10);
    ɵɵelementEnd();
    ɵɵelementStart(15, "div", 6);
    ɵɵelementStart(16, "label", 11);
    ɵɵtext(17);
    ɵɵpipe(18, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementStart(19, "span");
    ɵɵtext(20, " * ");
    ɵɵelementEnd();
    ɵɵelement(21, "input", 12);
    ɵɵelementEnd();
    ɵɵelementStart(22, "abp-button", 13);
    ɵɵtext(23);
    ɵɵpipe(24, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵproperty("formGroup", ctx_r3.form);
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(4, 6, "AbpAccount::UserName"));
    ɵɵadvance(7);
    ɵɵtextInterpolate(ɵɵpipeBind1(11, 8, "AbpAccount::EmailAddress"));
    ɵɵadvance(7);
    ɵɵtextInterpolate(ɵɵpipeBind1(18, 10, "AbpAccount::Password"));
    ɵɵadvance(5);
    ɵɵproperty("loading", ctx_r3.inProgress);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(24, 12, "AbpAccount::Register"), " ");
} }
function RegisterComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "h4");
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementStart(3, "strong");
    ɵɵtext(4);
    ɵɵpipe(5, "abpLocalization");
    ɵɵelementStart(6, "a", 3);
    ɵɵtext(7);
    ɵɵpipe(8, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtemplate(9, RegisterComponent_ng_template_1_form_9_Template, 25, 14, "form", 4);
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 4, "AbpAccount::Register"));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 6, "AbpAccount::AlreadyRegistered"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(8, 8, "AbpAccount::Login"));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r2.isSelfRegistrationEnabled);
} }
const _c0$4 = function (a0) { return { value: a0 }; };
const _c1$3 = function (a0) { return { mainContentRef: a0 }; };
const _c2$1 = function (a0, a1) { return { componentKey: a0, inputs: a1 }; };
const { maxLength: maxLength$2, required: required$3, email: email$1 } = Validators;
class RegisterComponent {
    constructor(fb, accountService, oauthService, store, toasterService, authService, injector) {
        this.fb = fb;
        this.accountService = accountService;
        this.oauthService = oauthService;
        this.store = store;
        this.toasterService = toasterService;
        this.authService = authService;
        this.injector = injector;
        this.isSelfRegistrationEnabled = true;
        this.authWrapperKey = "Account.AuthWrapperComponent" /* AuthWrapper */;
    }
    ngOnInit() {
        // this.isSelfRegistrationEnabled =
        //   (
        //     this.store.selectSnapshot(
        //       ConfigState.getSetting('Abp.Account.IsSelfRegistrationEnabled'),
        //     ) || ''
        //   ).toLowerCase() !== 'false';
        // if (!this.isSelfRegistrationEnabled) {
        //   this.toasterService.warn(
        //     {
        //       key: 'AbpAccount::SelfRegistrationDisabledMessage',
        //       defaultValue: 'Self registration is disabled.',
        //     },
        //     null,
        //     { life: 10000 },
        //   );
        //   return;
        // }
        this.form = this.fb.group({
            username: ['', [required$3, maxLength$2(255)]],
            password: ['', [required$3, ...getPasswordValidators(this.injector)]],
            email: ['', [required$3, email$1]],
        });
    }
    onSubmit() {
        if (this.form.invalid)
            return;
        this.inProgress = true;
        const newUser = {
            userName: this.form.get('username').value,
            password: this.form.get('password').value,
            emailAddress: this.form.get('email').value,
            appName: 'Angular',
        };
        this.accountService
            .register(newUser)
            .pipe(switchMap(() => this.authService.login(newUser.userName, newUser.password)), catchError(err => {
            this.toasterService.error(snq(() => err.error.error_description) ||
                snq(() => err.error.error.message, 'AbpAccount::DefaultErrorMessage'), 'Error', { life: 7000 });
            return throwError(err);
        }), finalize(() => (this.inProgress = false)))
            .subscribe();
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(ɵɵdirectiveInject(FormBuilder), ɵɵdirectiveInject(AccountService), ɵɵdirectiveInject(OAuthService), ɵɵdirectiveInject(Store), ɵɵdirectiveInject(ToasterService), ɵɵdirectiveInject(AuthService), ɵɵdirectiveInject(Injector)); };
RegisterComponent.ɵcmp = ɵɵdefineComponent({ type: RegisterComponent, selectors: [["abp-register"]], decls: 3, vars: 8, consts: [[3, "mainContentRef", 4, "abpReplaceableTemplate"], ["mainContentRef", ""], [3, "mainContentRef"], ["routerLink", "/account/login", 1, "text-decoration-none"], ["validateOnSubmit", "", "class", "mt-4", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["validateOnSubmit", "", 1, "mt-4", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "input-user-name"], ["autofocus", "", "type", "text", "id", "input-user-name", "formControlName", "username", "autocomplete", "username", 1, "form-control"], ["for", "input-email-address"], ["type", "email", "id", "input-email-address", "formControlName", "email", 1, "form-control"], ["for", "input-password"], ["type", "password", "id", "input-password", "formControlName", "password", "autocomplete", "current-password", 1, "form-control"], ["buttonType", "submit", "name", "Action", "buttonClass", "btn-block btn-lg mt-3 btn btn-primary", 3, "loading"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, RegisterComponent_abp_auth_wrapper_0_Template, 1, 1, "abp-auth-wrapper", 0);
        ɵɵtemplate(1, RegisterComponent_ng_template_1_Template, 10, 10, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = ɵɵreference(2);
        ɵɵproperty("abpReplaceableTemplate", ɵɵpureFunction2(5, _c2$1, ctx.authWrapperKey, ɵɵpureFunction1(3, _c1$3, ɵɵpureFunction1(1, _c0$4, _r1))));
    } }, directives: [ReplaceableTemplateDirective, AuthWrapperComponent, RouterLinkWithHref, NgIf, ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormSubmitDirective, FormGroupDirective, ValidationGroupDirective, DefaultValueAccessor, AutofocusDirective, NgControlStatus, FormControlName, ValidationDirective, ButtonComponent], pipes: [LocalizationPipe], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(RegisterComponent, [{
        type: Component,
        args: [{
                selector: 'abp-register',
                templateUrl: './register.component.html',
            }]
    }], function () { return [{ type: FormBuilder }, { type: AccountService }, { type: OAuthService }, { type: Store }, { type: ToasterService }, { type: AuthService }, { type: Injector }]; }, null); })();

//import { AuthService } from '@abp/ng.core';
class AuthenticationFlowGuard {
    constructor(authService) {
        this.authService = authService;
    }
    canActivate() {
        if (this.authService.isInternalAuth)
            return true;
        this.authService.initLogin();
        return false;
    }
}
AuthenticationFlowGuard.ɵfac = function AuthenticationFlowGuard_Factory(t) { return new (t || AuthenticationFlowGuard)(ɵɵinject(AuthService)); };
AuthenticationFlowGuard.ɵprov = ɵɵdefineInjectable({ token: AuthenticationFlowGuard, factory: AuthenticationFlowGuard.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(AuthenticationFlowGuard, [{
        type: Injectable
    }], function () { return [{ type: AuthService }]; }, null); })();

const routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    {
        path: '',
        component: DynamicLayoutComponent,
        children: [
            {
                path: 'login',
                component: ReplaceableRouteContainerComponent,
                canActivate: [AuthenticationFlowGuard],
                data: {
                    replaceableComponent: {
                        key: "Account.LoginComponent" /* Login */,
                        defaultComponent: LoginComponent,
                    },
                },
            },
            {
                path: 'register',
                component: ReplaceableRouteContainerComponent,
                canActivate: [AuthenticationFlowGuard],
                data: {
                    replaceableComponent: {
                        key: "Account.RegisterComponent" /* Register */,
                        defaultComponent: RegisterComponent,
                    },
                },
            },
            {
                path: 'manage-profile',
                component: ReplaceableRouteContainerComponent,
                canActivate: [AuthGuard],
                data: {
                    replaceableComponent: {
                        key: "Account.ManageProfileComponent" /* ManageProfile */,
                        defaultComponent: ManageProfileComponent,
                    },
                },
            },
        ],
    },
];
class AccountRoutingModule {
}
AccountRoutingModule.ɵfac = function AccountRoutingModule_Factory(t) { return new (t || AccountRoutingModule)(); };
AccountRoutingModule.ɵmod = ɵɵdefineNgModule({ type: AccountRoutingModule });
AccountRoutingModule.ɵinj = ɵɵdefineInjector({ imports: [[RouterModule.forChild(routes)], RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(AccountRoutingModule, { imports: [RouterModule], exports: [RouterModule] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(AccountRoutingModule, [{
        type: NgModule,
        args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule],
            }]
    }], null, null); })();

const ACCOUNT_OPTIONS = new InjectionToken('ACCOUNT_OPTIONS');

function accountOptionsFactory(options) {
    return Object.assign({ redirectUrl: '/' }, options);
}

class ManageProfileGuard {
    constructor(environmentService) {
        this.environmentService = environmentService;
    }
    canActivate(_, __) {
        const env = this.environmentService.getEnvironment();
        if (env.oAuthConfig.responseType === 'code') {
            window.location.href = `${env.oAuthConfig.issuer}/Account/Manage?returnUrl=${window.location.href}`;
            return false;
        }
        else {
            return true;
        }
    }
}
ManageProfileGuard.ɵfac = function ManageProfileGuard_Factory(t) { return new (t || ManageProfileGuard)(ɵɵinject(EnvironmentService)); };
ManageProfileGuard.ɵprov = ɵɵdefineInjectable({ token: ManageProfileGuard, factory: ManageProfileGuard.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ManageProfileGuard, [{
        type: Injectable
    }], function () { return [{ type: EnvironmentService }]; }, null); })();

class AccountModule {
    static forChild(options) {
        return {
            ngModule: AccountModule,
            providers: [
                AuthenticationFlowGuard,
                ManageProfileGuard,
                { provide: ACCOUNT_OPTIONS, useValue: options },
                {
                    provide: 'ACCOUNT_OPTIONS',
                    useFactory: accountOptionsFactory,
                    deps: [ACCOUNT_OPTIONS],
                },
            ],
        };
    }
    static forLazy(options) {
        return new LazyModuleFactory(AccountModule.forChild(options));
    }
}
AccountModule.ɵfac = function AccountModule_Factory(t) { return new (t || AccountModule)(); };
AccountModule.ɵmod = ɵɵdefineNgModule({ type: AccountModule });
AccountModule.ɵinj = ɵɵdefineInjector({ imports: [[
            CoreModule,
            AccountRoutingModule,
            ThemeSharedModule,
            NgbDropdownModule,
            NgxValidateCoreModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(AccountModule, { declarations: [AuthWrapperComponent,
        LoginComponent,
        RegisterComponent,
        TenantBoxComponent,
        ChangePasswordComponent,
        ManageProfileComponent,
        PersonalSettingsComponent], imports: [CoreModule,
        AccountRoutingModule,
        ThemeSharedModule,
        NgbDropdownModule,
        NgxValidateCoreModule] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(AccountModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    AuthWrapperComponent,
                    LoginComponent,
                    RegisterComponent,
                    TenantBoxComponent,
                    ChangePasswordComponent,
                    ManageProfileComponent,
                    PersonalSettingsComponent,
                ],
                imports: [
                    CoreModule,
                    AccountRoutingModule,
                    ThemeSharedModule,
                    NgbDropdownModule,
                    NgxValidateCoreModule,
                ],
                exports: [],
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { ACCOUNT_OPTIONS, AccountModule, AccountService, AuthService, AuthenticationFlowGuard, ChangePasswordComponent, LoginComponent, ManageProfileComponent, ManageProfileGuard, PersonalSettingsComponent, RegisterComponent, TenantBoxComponent };
//# sourceMappingURL=fs-tw-account.js.map

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@abp/ng.core'), require('@abp/ng.theme.shared'), require('@angular/core'), require('@ng-bootstrap/ng-bootstrap'), require('@ngx-validate/core'), require('@angular/router'), require('@angular/common/http'), require('angular-oauth2-oidc'), require('rxjs'), require('rxjs/operators'), require('snq'), require('@angular/forms'), require('@ngxs/store'), require('@angular/animations')) :
    typeof define === 'function' && define.amd ? define('@fs-tw/account', ['exports', '@abp/ng.core', '@abp/ng.theme.shared', '@angular/core', '@ng-bootstrap/ng-bootstrap', '@ngx-validate/core', '@angular/router', '@angular/common/http', 'angular-oauth2-oidc', 'rxjs', 'rxjs/operators', 'snq', '@angular/forms', '@ngxs/store', '@angular/animations'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['fs-tw'] = global['fs-tw'] || {}, global['fs-tw'].account = {}), global.i1, global.ng_theme_shared, global.ng.core, global.ngBootstrap, global.core, global.ng.router, global.ng.common.http, global.i2, global.rxjs, global.rxjs.operators, global.snq, global.ng.forms, global.store, global.ng.animations));
}(this, (function (exports, i1, ng_theme_shared, i0, ngBootstrap, core, i3, http, i2, rxjs, operators, snq, forms, store, animations) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var snq__default = /*#__PURE__*/_interopDefaultLegacy(snq);

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    ;
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var oAuthStorage = localStorage;
    var AuthPasswordFlowStrategy = /** @class */ (function (_super) {
        __extends(AuthPasswordFlowStrategy, _super);
        function AuthPasswordFlowStrategy() {
            var _this = _super.apply(this, __spread(arguments)) || this;
            _this.isInternalAuth = true;
            return _this;
        }
        AuthPasswordFlowStrategy.prototype.login = function () {
            var router = this.injector.get(i3.Router);
            router.navigateByUrl('/account/login');
        };
        AuthPasswordFlowStrategy.prototype.checkIfInternalAuth = function () {
            return true;
        };
        AuthPasswordFlowStrategy.prototype.logout = function () {
            var _this = this;
            var rest = this.injector.get(i1.RestService);
            var configStateService = this.injector.get(i1.ConfigStateService);
            var abpApplicationConfigurationService = this.injector.get(i1.AbpApplicationConfigurationService);
            var issuer = configStateService.getDeep('environment.oAuthConfig.issuer');
            return rest
                .request({
                method: 'GET',
                url: '/api/account/logout',
            }, null, issuer)
                .pipe(operators.tap(function () { return _this.oAuthService.logOut(); }), operators.switchMap(function () {
                return abpApplicationConfigurationService.get()
                    .pipe(operators.tap(function (x) { return configStateService.setState(x); }));
            }));
        };
        AuthPasswordFlowStrategy.prototype.destroy = function () { };
        return AuthPasswordFlowStrategy;
    }(i1.AuthFlowStrategy));

    var AuthService = /** @class */ (function () {
        function AuthService(injector, environment, oAuthService, abpApplicationConfigurationService, router, sessionStateService, configStateService, options) {
            var _this = this;
            this.injector = injector;
            this.environment = environment;
            this.oAuthService = oAuthService;
            this.abpApplicationConfigurationService = abpApplicationConfigurationService;
            this.router = router;
            this.sessionStateService = sessionStateService;
            this.configStateService = configStateService;
            this.options = options;
            this.setStrategy = function () {
                var flow = _this.environment.getEnvironment().oAuthConfig.responseType || 'password';
                if (_this.flow === flow)
                    return;
                if (_this.strategy)
                    _this.strategy.destroy();
                _this.flow = flow;
                if (flow === 'password') {
                    _this.strategy = new AuthPasswordFlowStrategy(_this.injector);
                }
                else {
                    _this.strategy = i1.AUTH_FLOW_STRATEGY.Code(_this.injector);
                }
            };
            this.setStrategy();
            this.listenToSetEnvironment();
        }
        AuthService.prototype.initLogin = function () {
            this.strategy.login();
        };
        Object.defineProperty(AuthService.prototype, "isInternalAuth", {
            get: function () {
                return this.strategy.isInternalAuth;
            },
            enumerable: false,
            configurable: true
        });
        AuthService.prototype.listenToSetEnvironment = function () {
            this.environment.createOnUpdateStream(function (state) { return state.oAuthConfig; }).subscribe(this.setStrategy);
        };
        AuthService.prototype.init = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.strategy.init()];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        AuthService.prototype.logout = function () {
            return this.strategy.logout();
        };
        AuthService.prototype.login = function (username, password) {
            var _this = this;
            var tenant = this.sessionStateService.getTenant();
            return rxjs.from(this.oAuthService.fetchTokenUsingPasswordFlow(username, password, new http.HttpHeaders(Object.assign({}, (tenant && tenant.id && { __tenant: tenant.id }))))).pipe(operators.switchMap(function () {
                return _this.abpApplicationConfigurationService.get()
                    .pipe(operators.tap(function (x) { return _this.configStateService.setState(x); }));
            }), operators.tap(function () {
                var redirectUrl = snq__default['default'](function () { return window.history.state.redirectUrl; }) || (_this.options || {}).redirectUrl || '/';
                _this.router.navigateByUrl(redirectUrl);
            }), operators.take(1));
        };
        return AuthService;
    }());
    AuthService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AuthService_Factory() { return new AuthService(i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject(i1.EnvironmentService), i0.ɵɵinject(i2.OAuthService), i0.ɵɵinject(i1.AbpApplicationConfigurationService), i0.ɵɵinject(i3.Router), i0.ɵɵinject(i1.SessionStateService), i0.ɵɵinject(i1.ConfigStateService), i0.ɵɵinject("ACCOUNT_OPTIONS", 8)); }, token: AuthService, providedIn: "root" });
    AuthService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    AuthService.ctorParameters = function () { return [
        { type: i0.Injector },
        { type: i1.EnvironmentService },
        { type: i2.OAuthService },
        { type: i1.AbpApplicationConfigurationService },
        { type: i3.Router },
        { type: i1.SessionStateService },
        { type: i1.ConfigStateService },
        { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: ['ACCOUNT_OPTIONS',] }] }
    ]; };

    //import { AuthService, SetRemember, ConfigState } from '@abp/ng.core';
    var maxLength = forms.Validators.maxLength, minLength = forms.Validators.minLength, required = forms.Validators.required;
    var LoginComponent = /** @class */ (function () {
        function LoginComponent(fb, oauthService, store, toasterService, authService, configStateService) {
            this.fb = fb;
            this.oauthService = oauthService;
            this.store = store;
            this.toasterService = toasterService;
            this.authService = authService;
            this.configStateService = configStateService;
            this.isSelfRegistrationEnabled = true;
            this.authWrapperKey = "Account.AuthWrapperComponent" /* AuthWrapper */;
        }
        LoginComponent.prototype.ngOnInit = function () {
            this.isSelfRegistrationEnabled =
                (this.configStateService.getSetting('Abp.Account.IsSelfRegistrationEnabled') || '').toLowerCase() !== 'false';
            this.form = this.fb.group({
                username: ['', [required, maxLength(255)]],
                password: ['', [required, maxLength(128)]],
                remember: [false],
            });
        };
        LoginComponent.prototype.onSubmit = function () {
            var _this = this;
            if (this.form.invalid)
                return;
            this.inProgress = true;
            this.authService
                .login(this.form.get('username').value, this.form.get('password').value)
                .pipe(operators.catchError(function (err) {
                _this.toasterService.error(snq__default['default'](function () { return err.error.error_description; }) ||
                    snq__default['default'](function () { return err.error.error.message; }, 'AbpAccount::DefaultErrorMessage'), 'Error', { life: 7000 });
                return rxjs.throwError(err);
            }), operators.finalize(function () { return (_this.inProgress = false); }))
                .subscribe(function () {
                //this.store.dispatch(new SetRemember(this.form.get('remember').value));
            });
        };
        return LoginComponent;
    }());
    LoginComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'abp-login',
                    template: "<abp-auth-wrapper\r\n  *abpReplaceableTemplate=\"{\r\n    componentKey: authWrapperKey,\r\n    inputs: {\r\n      mainContentRef: { value: mainContentRef },\r\n      cancelContentRef: { value: cancelContentRef }\r\n    }\r\n  }\"\r\n  [mainContentRef]=\"mainContentRef\"\r\n  [cancelContentRef]=\"cancelContentRef\"\r\n>\r\n</abp-auth-wrapper>\r\n<ng-template #mainContentRef>\r\n  <h4>{{ 'AbpAccount::Login' | abpLocalization }}</h4>\r\n  <strong *ngIf=\"isSelfRegistrationEnabled\">\r\n    {{ 'AbpAccount::AreYouANewUser' | abpLocalization }}\r\n    <a class=\"text-decoration-none\" routerLink=\"/account/register\">{{\r\n      'AbpAccount::Register' | abpLocalization\r\n    }}</a>\r\n  </strong>\r\n  <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" validateOnSubmit class=\"mt-4\">\r\n    <div class=\"form-group\">\r\n      <label for=\"login-input-user-name-or-email-address\">{{\r\n        'AbpAccount::UserNameOrEmailAddress' | abpLocalization\r\n      }}</label>\r\n      <input\r\n        class=\"form-control\"\r\n        type=\"text\"\r\n        id=\"login-input-user-name-or-email-address\"\r\n        formControlName=\"username\"\r\n        autocomplete=\"username\"\r\n        autofocus\r\n      />\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"login-input-password\">{{ 'AbpAccount::Password' | abpLocalization }}</label>\r\n      <input\r\n        class=\"form-control\"\r\n        type=\"password\"\r\n        id=\"login-input-password\"\r\n        formControlName=\"password\"\r\n        autocomplete=\"current-password\"\r\n      />\r\n    </div>\r\n    <div class=\"form-check\" validationTarget validationStyle>\r\n      <label class=\"form-check-label\" for=\"login-input-remember-me\">\r\n        <input\r\n          class=\"form-check-input\"\r\n          type=\"checkbox\"\r\n          id=\"login-input-remember-me\"\r\n          formControlName=\"remember\"\r\n        />\r\n        {{ 'AbpAccount::RememberMe' | abpLocalization }}\r\n      </label>\r\n    </div>\r\n    <abp-button\r\n      [loading]=\"inProgress\"\r\n      buttonType=\"submit\"\r\n      name=\"Action\"\r\n      buttonClass=\"btn-block btn-lg mt-3 btn btn-primary\"\r\n    >\r\n      {{ 'AbpAccount::Login' | abpLocalization }}\r\n    </abp-button>\r\n  </form>\r\n</ng-template>\r\n<ng-template #cancelContentRef>\r\n  <div class=\"card-footer text-center border-0\">\r\n    <a routerLink=\"/\">\r\n      <button type=\"button\" name=\"Action\" value=\"Cancel\" class=\"px-2 py-0 btn btn-link\">\r\n        {{ 'AbpAccount::Cancel' | abpLocalization }}\r\n      </button>\r\n    </a>\r\n  </div>\r\n</ng-template>\r\n"
                },] }
    ];
    LoginComponent.ctorParameters = function () { return [
        { type: forms.FormBuilder },
        { type: i2.OAuthService },
        { type: store.Store },
        { type: ng_theme_shared.ToasterService },
        { type: AuthService },
        { type: i1.ConfigStateService }
    ]; };

    var ManageProfileComponent = /** @class */ (function () {
        function ManageProfileComponent(store) {
            this.store = store;
            this.selectedTab = 0;
            this.changePasswordKey = "Account.ChangePasswordComponent" /* ChangePassword */;
            this.personalSettingsKey = "Account.PersonalSettingsComponent" /* PersonalSettings */;
        }
        ManageProfileComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.store.dispatch(new i1.GetProfile()).subscribe(function () {
                _this.isProfileLoaded = true;
                if (_this.store.selectSnapshot(i1.ProfileState.getProfile).isExternal) {
                    _this.hideChangePasswordTab = true;
                    _this.selectedTab = 1;
                }
            });
        };
        return ManageProfileComponent;
    }());
    ManageProfileComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'abp-manage-profile',
                    template: "<div id=\"AbpContentToolbar\"></div>\r\n\r\n<div class=\"card border-0 shadow-sm min-h-400\" [abpLoading]=\"!isProfileLoaded\">\r\n  <div class=\"card-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12 col-md-3\">\r\n        <ul class=\"nav flex-column nav-pills\" id=\"nav-tab\" role=\"tablist\">\r\n          <li\r\n            *ngIf=\"!hideChangePasswordTab && isProfileLoaded\"\r\n            class=\"nav-item\"\r\n            (click)=\"selectedTab = 0\"\r\n          >\r\n            <a\r\n              class=\"nav-link\"\r\n              [ngClass]=\"{ active: selectedTab === 0 }\"\r\n              role=\"tab\"\r\n              href=\"javascript:void(0)\"\r\n              >{{ 'AbpUi::ChangePassword' | abpLocalization }}</a\r\n            >\r\n          </li>\r\n          <li class=\"nav-item mb-2\" (click)=\"selectedTab = 1\">\r\n            <a\r\n              class=\"nav-link\"\r\n              [ngClass]=\"{ active: selectedTab === 1 }\"\r\n              role=\"tab\"\r\n              href=\"javascript:void(0)\"\r\n              >{{ 'AbpAccount::PersonalSettings' | abpLocalization }}</a\r\n            >\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <div *ngIf=\"isProfileLoaded\" class=\"col-12 col-md-9\">\r\n        <div class=\"tab-content\" *ngIf=\"selectedTab === 0\" [@fadeIn]>\r\n          <div class=\"tab-pane active\" role=\"tabpanel\">\r\n            <h4>\r\n              {{ 'AbpIdentity::ChangePassword' | abpLocalization }}\r\n              <hr />\r\n            </h4>\r\n            <abp-change-password-form\r\n              *abpReplaceableTemplate=\"{ componentKey: changePasswordKey }\"\r\n            ></abp-change-password-form>\r\n          </div>\r\n        </div>\r\n        <div class=\"tab-content\" *ngIf=\"selectedTab === 1\" [@fadeIn]>\r\n          <div class=\"tab-pane active\" role=\"tabpanel\">\r\n            <h4>\r\n              {{ 'AbpIdentity::PersonalSettings' | abpLocalization }}\r\n              <hr />\r\n            </h4>\r\n            <abp-personal-settings-form\r\n              *abpReplaceableTemplate=\"{ componentKey: personalSettingsKey }\"\r\n            ></abp-personal-settings-form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                    animations: [animations.trigger('fadeIn', [animations.transition(':enter', animations.useAnimation(ng_theme_shared.fadeIn))])],
                    styles: ["\n      .min-h-400 {\n        min-height: 400px;\n      }\n    "]
                },] }
    ];
    ManageProfileComponent.ctorParameters = function () { return [
        { type: store.Store }
    ]; };

    var AccountService = /** @class */ (function () {
        function AccountService(rest) {
            this.rest = rest;
            this.apiName = 'AbpAccount';
        }
        AccountService.prototype.findTenant = function (tenantName) {
            var request = {
                method: 'GET',
                url: "/api/abp/multi-tenancy/tenants/by-name/" + tenantName,
            };
            return this.rest.request(request, { apiName: this.apiName });
        };
        AccountService.prototype.register = function (body) {
            var request = {
                method: 'POST',
                url: '/api/account/register',
                body: body,
            };
            return this.rest.request(request, {
                skipHandleError: true,
                apiName: this.apiName,
            });
        };
        return AccountService;
    }());
    AccountService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AccountService_Factory() { return new AccountService(i0.ɵɵinject(i1.RestService)); }, token: AccountService, providedIn: "root" });
    AccountService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    AccountService.ctorParameters = function () { return [
        { type: i1.RestService }
    ]; };

    var maxLength$1 = forms.Validators.maxLength, required$1 = forms.Validators.required, email = forms.Validators.email;
    var RegisterComponent = /** @class */ (function () {
        function RegisterComponent(fb, accountService, oauthService, store, toasterService, authService, injector) {
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
        RegisterComponent.prototype.ngOnInit = function () {
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
                username: ['', [required$1, maxLength$1(255)]],
                password: ['', __spread([required$1], ng_theme_shared.getPasswordValidators(this.injector))],
                email: ['', [required$1, email]],
            });
        };
        RegisterComponent.prototype.onSubmit = function () {
            var _this = this;
            if (this.form.invalid)
                return;
            this.inProgress = true;
            var newUser = {
                userName: this.form.get('username').value,
                password: this.form.get('password').value,
                emailAddress: this.form.get('email').value,
                appName: 'Angular',
            };
            this.accountService
                .register(newUser)
                .pipe(operators.switchMap(function () { return _this.authService.login(newUser.userName, newUser.password); }), operators.catchError(function (err) {
                _this.toasterService.error(snq__default['default'](function () { return err.error.error_description; }) ||
                    snq__default['default'](function () { return err.error.error.message; }, 'AbpAccount::DefaultErrorMessage'), 'Error', { life: 7000 });
                return rxjs.throwError(err);
            }), operators.finalize(function () { return (_this.inProgress = false); }))
                .subscribe();
        };
        return RegisterComponent;
    }());
    RegisterComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'abp-register',
                    template: "<abp-auth-wrapper\r\n  *abpReplaceableTemplate=\"{\r\n    componentKey: authWrapperKey,\r\n    inputs: {\r\n      mainContentRef: { value: mainContentRef }\r\n    }\r\n  }\"\r\n  [mainContentRef]=\"mainContentRef\"\r\n>\r\n</abp-auth-wrapper>\r\n<ng-template #mainContentRef>\r\n  <h4>{{ 'AbpAccount::Register' | abpLocalization }}</h4>\r\n  <strong>\r\n    {{ 'AbpAccount::AlreadyRegistered' | abpLocalization }}\r\n    <a class=\"text-decoration-none\" routerLink=\"/account/login\">{{\r\n      'AbpAccount::Login' | abpLocalization\r\n    }}</a>\r\n  </strong>\r\n  <form\r\n    *ngIf=\"isSelfRegistrationEnabled\"\r\n    [formGroup]=\"form\"\r\n    (ngSubmit)=\"onSubmit()\"\r\n    validateOnSubmit\r\n    class=\"mt-4\"\r\n  >\r\n    <div class=\"form-group\">\r\n      <label for=\"input-user-name\">{{ 'AbpAccount::UserName' | abpLocalization }}</label\r\n      ><span> * </span\r\n      ><input\r\n        autofocus\r\n        type=\"text\"\r\n        id=\"input-user-name\"\r\n        class=\"form-control\"\r\n        formControlName=\"username\"\r\n        autocomplete=\"username\"\r\n      />\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"input-email-address\">{{ 'AbpAccount::EmailAddress' | abpLocalization }}</label\r\n      ><span> * </span\r\n      ><input type=\"email\" id=\"input-email-address\" class=\"form-control\" formControlName=\"email\" />\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"input-password\">{{ 'AbpAccount::Password' | abpLocalization }}</label\r\n      ><span> * </span\r\n      ><input\r\n        type=\"password\"\r\n        id=\"input-password\"\r\n        class=\"form-control\"\r\n        formControlName=\"password\"\r\n        autocomplete=\"current-password\"\r\n      />\r\n    </div>\r\n    <abp-button\r\n      [loading]=\"inProgress\"\r\n      buttonType=\"submit\"\r\n      name=\"Action\"\r\n      buttonClass=\"btn-block btn-lg mt-3 btn btn-primary\"\r\n    >\r\n      {{ 'AbpAccount::Register' | abpLocalization }}\r\n    </abp-button>\r\n  </form>\r\n</ng-template>\r\n"
                },] }
    ];
    RegisterComponent.ctorParameters = function () { return [
        { type: forms.FormBuilder },
        { type: AccountService },
        { type: i2.OAuthService },
        { type: store.Store },
        { type: ng_theme_shared.ToasterService },
        { type: AuthService },
        { type: i0.Injector }
    ]; };

    //import { AuthService } from '@abp/ng.core';
    var AuthenticationFlowGuard = /** @class */ (function () {
        function AuthenticationFlowGuard(authService) {
            this.authService = authService;
        }
        AuthenticationFlowGuard.prototype.canActivate = function () {
            if (this.authService.isInternalAuth)
                return true;
            this.authService.initLogin();
            return false;
        };
        return AuthenticationFlowGuard;
    }());
    AuthenticationFlowGuard.decorators = [
        { type: i0.Injectable }
    ];
    AuthenticationFlowGuard.ctorParameters = function () { return [
        { type: AuthService }
    ]; };

    var ɵ0 = {
        replaceableComponent: {
            key: "Account.LoginComponent" /* Login */,
            defaultComponent: LoginComponent,
        },
    }, ɵ1 = {
        replaceableComponent: {
            key: "Account.RegisterComponent" /* Register */,
            defaultComponent: RegisterComponent,
        },
    }, ɵ2 = {
        replaceableComponent: {
            key: "Account.ManageProfileComponent" /* ManageProfile */,
            defaultComponent: ManageProfileComponent,
        },
    };
    var routes = [
        { path: '', pathMatch: 'full', redirectTo: 'login' },
        {
            path: '',
            component: i1.DynamicLayoutComponent,
            children: [
                {
                    path: 'login',
                    component: i1.ReplaceableRouteContainerComponent,
                    canActivate: [AuthenticationFlowGuard],
                    data: ɵ0,
                },
                {
                    path: 'register',
                    component: i1.ReplaceableRouteContainerComponent,
                    canActivate: [AuthenticationFlowGuard],
                    data: ɵ1,
                },
                {
                    path: 'manage-profile',
                    component: i1.ReplaceableRouteContainerComponent,
                    canActivate: [i1.AuthGuard],
                    data: ɵ2,
                },
            ],
        },
    ];
    var AccountRoutingModule = /** @class */ (function () {
        function AccountRoutingModule() {
        }
        return AccountRoutingModule;
    }());
    AccountRoutingModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [i3.RouterModule.forChild(routes)],
                    exports: [i3.RouterModule],
                },] }
    ];

    var AuthWrapperComponent = /** @class */ (function () {
        function AuthWrapperComponent(multiTenancy, store, subscription, configStateService) {
            this.multiTenancy = multiTenancy;
            this.store = store;
            this.subscription = subscription;
            this.configStateService = configStateService;
            this.enableLocalLogin = true;
            this.tenantBoxKey = "Account.TenantBoxComponent" /* TenantBox */;
            this.isMultiTenancyEnabled$ = this.configStateService.getDeep$('multiTenancy.isEnabled');
        }
        AuthWrapperComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.subscription.addOne(this.configStateService.getSetting$('Abp.Account.EnableLocalLogin'), function (value) {
                if (value) {
                    _this.enableLocalLogin = value.toLowerCase() !== 'false';
                }
            });
        };
        return AuthWrapperComponent;
    }());
    AuthWrapperComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'abp-auth-wrapper',
                    template: "<div class=\"row\">\r\n  <div class=\"mx-auto col col-md-5\">\r\n    <ng-container *ngIf=\"(isMultiTenancyEnabled$ | async) && multiTenancy.isTenantBoxVisible\">\r\n      <abp-tenant-box *abpReplaceableTemplate=\"{ componentKey: tenantBoxKey }\"></abp-tenant-box>\r\n    </ng-container>\r\n\r\n    <div class=\"abp-account-container\">\r\n      <div\r\n        *ngIf=\"enableLocalLogin; else disableLocalLoginTemplate\"\r\n        class=\"card mt-3 shadow-sm rounded\"\r\n      >\r\n        <div class=\"card-body p-5\">\r\n          <ng-content *ngTemplateOutlet=\"mainContentRef\"></ng-content>\r\n        </div>\r\n        <ng-content *ngTemplateOutlet=\"cancelContentRef\"></ng-content>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #disableLocalLoginTemplate>\r\n  <div class=\"alert alert-warning\">\r\n    <strong>{{ 'AbpAccount::InvalidLoginRequest' | abpLocalization }}</strong>\r\n    {{ 'AbpAccount::ThereAreNoLoginSchemesConfiguredForThisClient' | abpLocalization }}\r\n  </div>\r\n</ng-template>\r\n",
                    exportAs: 'abpAuthWrapper',
                    providers: [i1.SubscriptionService]
                },] }
    ];
    AuthWrapperComponent.ctorParameters = function () { return [
        { type: i1.MultiTenancyService },
        { type: store.Store },
        { type: i1.SubscriptionService },
        { type: i1.ConfigStateService }
    ]; };
    AuthWrapperComponent.propDecorators = {
        mainContentRef: [{ type: i0.Input }],
        cancelContentRef: [{ type: i0.Input }]
    };

    var required$2 = forms.Validators.required;
    var PASSWORD_FIELDS = ['newPassword', 'repeatNewPassword'];
    var ChangePasswordComponent = /** @class */ (function () {
        function ChangePasswordComponent(fb, store, toasterService, injector) {
            this.fb = fb;
            this.store = store;
            this.toasterService = toasterService;
            this.injector = injector;
            this.mapErrorsFn = function (errors, groupErrors, control) {
                if (PASSWORD_FIELDS.indexOf(String(control.name)) < 0)
                    return errors;
                return errors.concat(groupErrors.filter(function (_a) {
                    var key = _a.key;
                    return key === 'passwordMismatch';
                }));
            };
        }
        ChangePasswordComponent.prototype.ngOnInit = function () {
            this.hideCurrentPassword = !this.store.selectSnapshot(i1.ProfileState.getProfile).hasPassword;
            var passwordValidations = ng_theme_shared.getPasswordValidators(this.injector);
            this.form = this.fb.group({
                password: ['', required$2],
                newPassword: [
                    '',
                    {
                        validators: __spread([required$2], passwordValidations),
                    },
                ],
                repeatNewPassword: [
                    '',
                    {
                        validators: __spread([required$2], passwordValidations),
                    },
                ],
            }, {
                validators: [core.comparePasswords(PASSWORD_FIELDS)],
            });
            if (this.hideCurrentPassword)
                this.form.removeControl('password');
        };
        ChangePasswordComponent.prototype.onSubmit = function () {
            var _this = this;
            if (this.form.invalid)
                return;
            this.inProgress = true;
            this.store
                .dispatch(new i1.ChangePassword(Object.assign(Object.assign({}, (!this.hideCurrentPassword && { currentPassword: this.form.get('password').value })), { newPassword: this.form.get('newPassword').value })))
                .pipe(operators.finalize(function () { return (_this.inProgress = false); }))
                .subscribe({
                next: function () {
                    _this.form.reset();
                    _this.toasterService.success('AbpAccount::PasswordChangedMessage', '', {
                        life: 5000,
                    });
                    if (_this.hideCurrentPassword) {
                        _this.hideCurrentPassword = false;
                        _this.form.addControl('password', new forms.FormControl('', [required$2]));
                    }
                },
                error: function (err) {
                    _this.toasterService.error(snq__default['default'](function () { return err.error.error.message; }, 'AbpAccount::DefaultErrorMessage'));
                },
            });
        };
        return ChangePasswordComponent;
    }());
    ChangePasswordComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'abp-change-password-form',
                    template: "<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" [mapErrorsFn]=\"mapErrorsFn\" validateOnSubmit>\r\n  <div *ngIf=\"!hideCurrentPassword\" class=\"form-group\">\r\n    <label for=\"current-password\">{{\r\n      'AbpIdentity::DisplayName:CurrentPassword' | abpLocalization\r\n    }}</label\r\n    ><span> * </span\r\n    ><input\r\n      type=\"password\"\r\n      id=\"current-password\"\r\n      class=\"form-control\"\r\n      formControlName=\"password\"\r\n      autofocus\r\n      autocomplete=\"current-password\"\r\n    />\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"new-password\">{{ 'AbpIdentity::DisplayName:NewPassword' | abpLocalization }}</label\r\n    ><span> * </span\r\n    ><input\r\n      type=\"password\"\r\n      id=\"new-password\"\r\n      class=\"form-control\"\r\n      formControlName=\"newPassword\"\r\n      autocomplete=\"new-password\"\r\n    />\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"confirm-new-password\">{{\r\n      'AbpIdentity::DisplayName:NewPasswordConfirm' | abpLocalization\r\n    }}</label\r\n    ><span> * </span\r\n    ><input\r\n      type=\"password\"\r\n      id=\"confirm-new-password\"\r\n      class=\"form-control\"\r\n      formControlName=\"repeatNewPassword\"\r\n      autocomplete=\"new-password\"\r\n    />\r\n  </div>\r\n  <abp-button\r\n    iconClass=\"fa fa-check\"\r\n    buttonClass=\"btn btn-primary color-white\"\r\n    buttonType=\"submit\"\r\n    [loading]=\"inProgress\"\r\n    [disabled]=\"form?.invalid\"\r\n    >{{ 'AbpIdentity::Save' | abpLocalization }}</abp-button\r\n  >\r\n</form>\r\n",
                    exportAs: 'abpChangePasswordForm'
                },] }
    ];
    ChangePasswordComponent.ctorParameters = function () { return [
        { type: forms.FormBuilder },
        { type: store.Store },
        { type: ng_theme_shared.ToasterService },
        { type: i0.Injector }
    ]; };

    var maxLength$2 = forms.Validators.maxLength, required$3 = forms.Validators.required, email$1 = forms.Validators.email;
    var PersonalSettingsComponent = /** @class */ (function () {
        function PersonalSettingsComponent(fb, store, toasterService) {
            this.fb = fb;
            this.store = store;
            this.toasterService = toasterService;
        }
        PersonalSettingsComponent.prototype.ngOnInit = function () {
            this.buildForm();
        };
        PersonalSettingsComponent.prototype.buildForm = function () {
            var profile = this.store.selectSnapshot(i1.ProfileState.getProfile);
            this.form = this.fb.group({
                userName: [profile.userName, [required$3, maxLength$2(256)]],
                email: [profile.email, [required$3, email$1, maxLength$2(256)]],
                name: [profile.name || '', [maxLength$2(64)]],
                surname: [profile.surname || '', [maxLength$2(64)]],
                phoneNumber: [profile.phoneNumber || '', [maxLength$2(16)]],
            });
        };
        PersonalSettingsComponent.prototype.submit = function () {
            var _this = this;
            if (this.form.invalid)
                return;
            this.inProgress = true;
            this.store
                .dispatch(new i1.UpdateProfile(this.form.value))
                .pipe(operators.finalize(function () { return (_this.inProgress = false); }))
                .subscribe(function () {
                _this.toasterService.success('AbpAccount::PersonalSettingsSaved', 'Success', { life: 5000 });
            });
        };
        return PersonalSettingsComponent;
    }());
    PersonalSettingsComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'abp-personal-settings-form',
                    template: "<form validateOnSubmit *ngIf=\"form\" [formGroup]=\"form\" (ngSubmit)=\"submit()\">\r\n  <div class=\"form-group\">\r\n    <label for=\"username\">{{ 'AbpIdentity::DisplayName:UserName' | abpLocalization }}</label\r\n    ><span> * </span\r\n    ><input\r\n      type=\"text\"\r\n      id=\"username\"\r\n      class=\"form-control\"\r\n      formControlName=\"userName\"\r\n      autofocus\r\n      (keydown.space)=\"$event.preventDefault()\"\r\n    />\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col col-md-6\">\r\n      <div class=\"form-group\">\r\n        <label for=\"name\">{{ 'AbpIdentity::DisplayName:Name' | abpLocalization }}</label\r\n        ><input type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"name\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"col col-md-6\">\r\n      <div class=\"form-group\">\r\n        <label for=\"surname\">{{ 'AbpIdentity::DisplayName:Surname' | abpLocalization }}</label\r\n        ><input type=\"text\" id=\"surname\" class=\"form-control\" formControlName=\"surname\" />\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"email-address\">{{ 'AbpIdentity::DisplayName:Email' | abpLocalization }}</label\r\n    ><span> * </span\r\n    ><input type=\"text\" id=\"email-address\" class=\"form-control\" formControlName=\"email\" />\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"phone-number\">{{ 'AbpIdentity::DisplayName:PhoneNumber' | abpLocalization }}</label\r\n    ><input type=\"text\" id=\"phone-number\" class=\"form-control\" formControlName=\"phoneNumber\" />\r\n  </div>\r\n  <abp-button\r\n    buttonType=\"submit\"\r\n    iconClass=\"fa fa-check\"\r\n    buttonClass=\"btn btn-primary color-white\"\r\n    [loading]=\"inProgress\"\r\n    [disabled]=\"form?.invalid\"\r\n  >\r\n    {{ 'AbpIdentity::Save' | abpLocalization }}</abp-button\r\n  >\r\n</form>\r\n",
                    exportAs: 'abpPersonalSettingsForm'
                },] }
    ];
    PersonalSettingsComponent.ctorParameters = function () { return [
        { type: forms.FormBuilder },
        { type: store.Store },
        { type: ng_theme_shared.ToasterService }
    ]; };

    // import { ABP, GetAppConfiguration, SessionState, SetTenant } from '@abp/ng.core';
    var TenantBoxComponent = /** @class */ (function () {
        function TenantBoxComponent(toasterService, accountService, sessionStateService, subscriptionService, abpApplicationConfigurationService, configStateService) {
            this.toasterService = toasterService;
            this.accountService = accountService;
            this.sessionStateService = sessionStateService;
            this.subscriptionService = subscriptionService;
            this.abpApplicationConfigurationService = abpApplicationConfigurationService;
            this.configStateService = configStateService;
            this.currentTenant$ = this.sessionStateService.getTenant$();
        }
        TenantBoxComponent.prototype.onSwitch = function () {
            var tenant = this.sessionStateService.getTenant(); //this.store.selectSnapshot(SessionState.getTenant);
            this.name = (tenant || {}).name;
            this.isModalVisible = true;
        };
        TenantBoxComponent.prototype.save = function () {
            var _this = this;
            if (!this.name) {
                this.setTenant(null);
                this.isModalVisible = false;
                return;
            }
            this.modalBusy = true;
            this.accountService
                .findTenant(this.name)
                .pipe(operators.finalize(function () { return (_this.modalBusy = false); }))
                .subscribe(function (_a) {
                var success = _a.success, id = _a.tenantId, name = _a.name;
                if (!success) {
                    _this.showError();
                    return;
                }
                _this.setTenant({ id: id, name: name });
                _this.isModalVisible = false;
            });
        };
        TenantBoxComponent.prototype.setTenant = function (tenant) {
            var _this = this;
            this.sessionStateService.setTenant(tenant);
            this.subscriptionService.addOne(this.sessionStateService.getTenant$(), function (x) {
                _this.abpApplicationConfigurationService.get().pipe(operators.tap(function (x) { return _this.configStateService.setState(x); })).subscribe();
            });
        };
        TenantBoxComponent.prototype.showError = function () {
            this.toasterService.error('AbpUiMultiTenancy::GivenTenantIsNotAvailable', 'AbpUi::Error', {
                messageLocalizationParams: [this.name],
            });
        };
        return TenantBoxComponent;
    }());
    TenantBoxComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'abp-tenant-box',
                    template: "<ng-container *ngIf=\"(currentTenant$ | async) || {} as currentTenant\">\r\n  <div class=\"card shadow-sm rounded mb-3\">\r\n    <div class=\"card-body px-5\">\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <span style=\"font-size: 0.8em;\" class=\"text-uppercase text-muted\">{{\r\n            'AbpUiMultiTenancy::Tenant' | abpLocalization\r\n          }}</span\r\n          ><br />\r\n          <h6 class=\"m-0 d-inline-block\">\r\n            <i>{{ currentTenant.name || ('AbpUiMultiTenancy::NotSelected' | abpLocalization) }}</i>\r\n          </h6>\r\n        </div>\r\n        <div class=\"col-auto\">\r\n          <a\r\n            id=\"AbpTenantSwitchLink\"\r\n            href=\"javascript:void(0);\"\r\n            class=\"btn btn-sm mt-3 btn-outline-primary\"\r\n            (click)=\"onSwitch()\"\r\n            >{{ 'AbpUiMultiTenancy::Switch' | abpLocalization }}</a\r\n          >\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <abp-modal size=\"md\" [(visible)]=\"isModalVisible\" [busy]=\"modalBusy\">\r\n    <ng-template #abpHeader>\r\n      <h5>Switch Tenant</h5>\r\n    </ng-template>\r\n    <ng-template #abpBody>\r\n      <form (ngSubmit)=\"save()\">\r\n        <div class=\"mt-2\">\r\n          <div class=\"form-group\">\r\n            <label for=\"name\">{{ 'AbpUiMultiTenancy::Name' | abpLocalization }}</label>\r\n            <input\r\n              [(ngModel)]=\"name\"\r\n              type=\"text\"\r\n              id=\"name\"\r\n              name=\"tenant\"\r\n              class=\"form-control\"\r\n              autofocus\r\n            />\r\n          </div>\r\n          <p>{{ 'AbpUiMultiTenancy::SwitchTenantHint' | abpLocalization }}</p>\r\n        </div>\r\n      </form>\r\n    </ng-template>\r\n    <ng-template #abpFooter>\r\n      <button #abpClose type=\"button\" class=\"btn btn-secondary\">\r\n        {{ 'AbpTenantManagement::Cancel' | abpLocalization }}\r\n      </button>\r\n      <abp-button\r\n        type=\"abp-button\"\r\n        iconClass=\"fa fa-check\"\r\n        (click)=\"save()\"\r\n        [disabled]=\"currentTenant?.name === name\"\r\n      >\r\n        <span>{{ 'AbpTenantManagement::Save' | abpLocalization }}</span>\r\n      </abp-button>\r\n    </ng-template>\r\n  </abp-modal>\r\n</ng-container>\r\n"
                },] }
    ];
    TenantBoxComponent.ctorParameters = function () { return [
        { type: ng_theme_shared.ToasterService },
        { type: AccountService },
        { type: i1.SessionStateService },
        { type: i1.SubscriptionService },
        { type: i1.AbpApplicationConfigurationService },
        { type: i1.ConfigStateService }
    ]; };

    var ACCOUNT_OPTIONS = new i0.InjectionToken('ACCOUNT_OPTIONS');

    function accountOptionsFactory(options) {
        return Object.assign({ redirectUrl: '/' }, options);
    }

    var ManageProfileGuard = /** @class */ (function () {
        function ManageProfileGuard(environmentService) {
            this.environmentService = environmentService;
        }
        ManageProfileGuard.prototype.canActivate = function (_, __) {
            var env = this.environmentService.getEnvironment();
            if (env.oAuthConfig.responseType === 'code') {
                window.location.href = env.oAuthConfig.issuer + "/Account/Manage?returnUrl=" + window.location.href;
                return false;
            }
            else {
                return true;
            }
        };
        return ManageProfileGuard;
    }());
    ManageProfileGuard.decorators = [
        { type: i0.Injectable }
    ];
    ManageProfileGuard.ctorParameters = function () { return [
        { type: i1.EnvironmentService }
    ]; };

    var AccountModule = /** @class */ (function () {
        function AccountModule() {
        }
        AccountModule.forChild = function (options) {
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
        };
        AccountModule.forLazy = function (options) {
            return new i1.LazyModuleFactory(AccountModule.forChild(options));
        };
        return AccountModule;
    }());
    AccountModule.decorators = [
        { type: i0.NgModule, args: [{
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
                        i1.CoreModule,
                        AccountRoutingModule,
                        ng_theme_shared.ThemeSharedModule,
                        ngBootstrap.NgbDropdownModule,
                        core.NgxValidateCoreModule,
                    ],
                    exports: [],
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ACCOUNT_OPTIONS = ACCOUNT_OPTIONS;
    exports.AccountModule = AccountModule;
    exports.AccountService = AccountService;
    exports.AuthService = AuthService;
    exports.AuthenticationFlowGuard = AuthenticationFlowGuard;
    exports.ChangePasswordComponent = ChangePasswordComponent;
    exports.LoginComponent = LoginComponent;
    exports.ManageProfileComponent = ManageProfileComponent;
    exports.ManageProfileGuard = ManageProfileGuard;
    exports.PersonalSettingsComponent = PersonalSettingsComponent;
    exports.RegisterComponent = RegisterComponent;
    exports.TenantBoxComponent = TenantBoxComponent;
    exports.ɵa = AuthWrapperComponent;
    exports.ɵb = LoginComponent;
    exports.ɵc = AuthService;
    exports.ɵd = RegisterComponent;
    exports.ɵe = AccountService;
    exports.ɵf = TenantBoxComponent;
    exports.ɵg = ChangePasswordComponent;
    exports.ɵh = ManageProfileComponent;
    exports.ɵi = PersonalSettingsComponent;
    exports.ɵj = AccountRoutingModule;
    exports.ɵk = AuthenticationFlowGuard;
    exports.ɵm = ManageProfileGuard;
    exports.ɵn = ACCOUNT_OPTIONS;
    exports.ɵo = accountOptionsFactory;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-tw-account.umd.js.map

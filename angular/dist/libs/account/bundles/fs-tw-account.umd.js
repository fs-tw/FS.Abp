(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@abp/ng.core'), require('@abp/ng.theme.shared'), require('@angular/core'), require('@ng-bootstrap/ng-bootstrap'), require('@ngx-validate/core'), require('@angular/router'), require('@angular/forms'), require('rxjs'), require('rxjs/operators'), require('snq'), require('angular-oauth2-oidc'), require('@ngxs/store'), require('@angular/common/http'), require('@angular/common'), require('@angular/animations')) :
    typeof define === 'function' && define.amd ? define('@fs-tw/account', ['exports', '@abp/ng.core', '@abp/ng.theme.shared', '@angular/core', '@ng-bootstrap/ng-bootstrap', '@ngx-validate/core', '@angular/router', '@angular/forms', 'rxjs', 'rxjs/operators', 'snq', 'angular-oauth2-oidc', '@ngxs/store', '@angular/common/http', '@angular/common', '@angular/animations'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['fs-tw'] = global['fs-tw'] || {}, global['fs-tw'].account = {}), global.i1, global.i3$1, global.ng.core, global.ngBootstrap, global.i9, global.ng.router, global.ng.forms, global.rxjs, global.rxjs.operators, global.snq, global.i2, global.i2$1, global.ng.common.http, global.ng.common, global.ng.animations));
}(this, (function (exports, i1, i3$1, i0, ngBootstrap, i9, i3, i1$1, rxjs, operators, snq, i2, i2$1, http, i3$2, animations) { 'use strict';

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
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }
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
    AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(i0.ɵɵinject(i0.Injector), i0.ɵɵinject(i1.EnvironmentService), i0.ɵɵinject(i2.OAuthService), i0.ɵɵinject(i1.AbpApplicationConfigurationService), i0.ɵɵinject(i3.Router), i0.ɵɵinject(i1.SessionStateService), i0.ɵɵinject(i1.ConfigStateService), i0.ɵɵinject('ACCOUNT_OPTIONS', 8)); };
    AuthService.ɵprov = i0.ɵɵdefineInjectable({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () {
            return [{ type: i0.Injector }, { type: i1.EnvironmentService }, { type: i2.OAuthService }, { type: i1.AbpApplicationConfigurationService }, { type: i3.Router }, { type: i1.SessionStateService }, { type: i1.ConfigStateService }, { type: undefined, decorators: [{
                            type: i0.Optional
                        }, {
                            type: i0.Inject,
                            args: ['ACCOUNT_OPTIONS']
                        }] }];
        }, null);
    })();

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
    AccountService.ɵfac = function AccountService_Factory(t) { return new (t || AccountService)(i0.ɵɵinject(i1.RestService)); };
    AccountService.ɵprov = i0.ɵɵdefineInjectable({ token: AccountService, factory: AccountService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AccountService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root',
                    }]
            }], function () { return [{ type: i1.RestService }]; }, null);
    })();

    function TenantBoxComponent_ng_container_0_ng_template_19_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "h5");
            i0.ɵɵtext(1, "Switch Tenant");
            i0.ɵɵelementEnd();
        }
    }
    function TenantBoxComponent_ng_container_0_ng_template_21_Template(rf, ctx) {
        if (rf & 1) {
            var _r9_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "form", 14);
            i0.ɵɵlistener("ngSubmit", function TenantBoxComponent_ng_container_0_ng_template_21_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r9_1); var ctx_r8 = i0.ɵɵnextContext(2); return ctx_r8.save(); });
            i0.ɵɵelementStart(1, "div", 15);
            i0.ɵɵelementStart(2, "div", 16);
            i0.ɵɵelementStart(3, "label", 17);
            i0.ɵɵtext(4);
            i0.ɵɵpipe(5, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "input", 18);
            i0.ɵɵlistener("ngModelChange", function TenantBoxComponent_ng_container_0_ng_template_21_Template_input_ngModelChange_6_listener($event) { i0.ɵɵrestoreView(_r9_1); var ctx_r10 = i0.ɵɵnextContext(2); return ctx_r10.name = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "p");
            i0.ɵɵtext(8);
            i0.ɵɵpipe(9, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r5 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(5, 3, "AbpUiMultiTenancy::Name"));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", ctx_r5.name);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(9, 5, "AbpUiMultiTenancy::SwitchTenantHint"));
        }
    }
    function TenantBoxComponent_ng_container_0_ng_template_23_Template(rf, ctx) {
        if (rf & 1) {
            var _r13_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 19, 20);
            i0.ɵɵtext(2);
            i0.ɵɵpipe(3, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "abp-button", 21);
            i0.ɵɵlistener("click", function TenantBoxComponent_ng_container_0_ng_template_23_Template_abp_button_click_4_listener() { i0.ɵɵrestoreView(_r13_1); var ctx_r12 = i0.ɵɵnextContext(2); return ctx_r12.save(); });
            i0.ɵɵelementStart(5, "span");
            i0.ɵɵtext(6);
            i0.ɵɵpipe(7, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var currentTenant_r1 = i0.ɵɵnextContext().ngIf;
            var ctx_r7 = i0.ɵɵnextContext();
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 3, "AbpTenantManagement::Cancel"), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", (currentTenant_r1 == null ? null : currentTenant_r1.name) === ctx_r7.name);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(7, 5, "AbpTenantManagement::Save"));
        }
    }
    function TenantBoxComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r16_1 = i0.ɵɵgetCurrentView();
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
            i0.ɵɵlistener("click", function TenantBoxComponent_ng_container_0_Template_a_click_15_listener() { i0.ɵɵrestoreView(_r16_1); var ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.onSwitch(); });
            i0.ɵɵtext(16);
            i0.ɵɵpipe(17, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "abp-modal", 10);
            i0.ɵɵlistener("visibleChange", function TenantBoxComponent_ng_container_0_Template_abp_modal_visibleChange_18_listener($event) { i0.ɵɵrestoreView(_r16_1); var ctx_r17 = i0.ɵɵnextContext(); return ctx_r17.isModalVisible = $event; });
            i0.ɵɵtemplate(19, TenantBoxComponent_ng_container_0_ng_template_19_Template, 2, 0, "ng-template", null, 11, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(21, TenantBoxComponent_ng_container_0_ng_template_21_Template, 10, 7, "ng-template", null, 12, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(23, TenantBoxComponent_ng_container_0_ng_template_23_Template, 8, 7, "ng-template", null, 13, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var currentTenant_r1 = ctx.ngIf;
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(8, 5, "AbpUiMultiTenancy::Tenant"));
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(currentTenant_r1.name || i0.ɵɵpipeBind1(13, 7, "AbpUiMultiTenancy::NotSelected"));
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(17, 9, "AbpUiMultiTenancy::Switch"));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("visible", ctx_r0.isModalVisible)("busy", ctx_r0.modalBusy);
        }
    }
    var _c0 = function () { return {}; };
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
    TenantBoxComponent.ɵfac = function TenantBoxComponent_Factory(t) { return new (t || TenantBoxComponent)(i0.ɵɵdirectiveInject(i3$1.ToasterService), i0.ɵɵdirectiveInject(AccountService), i0.ɵɵdirectiveInject(i1.SessionStateService), i0.ɵɵdirectiveInject(i1.SubscriptionService), i0.ɵɵdirectiveInject(i1.AbpApplicationConfigurationService), i0.ɵɵdirectiveInject(i1.ConfigStateService)); };
    TenantBoxComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TenantBoxComponent, selectors: [["abp-tenant-box"]], decls: 2, vars: 4, consts: [[4, "ngIf"], [2, "height", "1em"], [1, "card", "shadow-sm", "rounded", "mb-3"], [1, "card-body", "px-5"], [1, "row"], [1, "col"], [1, "text-uppercase", "text-muted", 2, "font-size", "0.8em"], [1, "m-0", "d-inline-block"], [1, "col-auto"], ["id", "AbpTenantSwitchLink", "href", "javascript:void(0);", 1, "btn", "btn-sm", "mt-3", "btn-outline-primary", 3, "click"], ["size", "md", 3, "visible", "busy", "visibleChange"], ["abpHeader", ""], ["abpBody", ""], ["abpFooter", ""], [3, "ngSubmit"], [1, "mt-2"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "name", "name", "tenant", "autofocus", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-secondary"], ["abpClose", ""], ["type", "abp-button", "iconClass", "fa fa-check", 3, "disabled", "click"]], template: function TenantBoxComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, TenantBoxComponent_ng_container_0_Template, 25, 11, "ng-container", 0);
                i0.ɵɵpipe(1, "async");
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.currentTenant$) || i0.ɵɵpureFunction0(3, _c0));
            }
        }, directives: [i3$2.NgIf, i3$1.ModalComponent, i1$1.ɵangular_packages_forms_forms_y, i1$1.NgControlStatusGroup, i1$1.NgForm, i1$1.DefaultValueAccessor, i1.AutofocusDirective, i1$1.NgControlStatus, i1$1.NgModel, i3$1.ButtonComponent], pipes: [i3$2.AsyncPipe, i1.LocalizationPipe], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TenantBoxComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'abp-tenant-box',
                        templateUrl: './tenant-box.component.html',
                    }]
            }], function () { return [{ type: i3$1.ToasterService }, { type: AccountService }, { type: i1.SessionStateService }, { type: i1.SubscriptionService }, { type: i1.AbpApplicationConfigurationService }, { type: i1.ConfigStateService }]; }, null);
    })();

    function AuthWrapperComponent_ng_container_2_abp_tenant_box_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "abp-tenant-box");
        }
    }
    var _c0$1 = function (a0) { return { componentKey: a0 }; };
    function AuthWrapperComponent_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, AuthWrapperComponent_ng_container_2_abp_tenant_box_1_Template, 1, 0, "abp-tenant-box", 6);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("abpReplaceableTemplate", i0.ɵɵpureFunction1(1, _c0$1, ctx_r0.tenantBoxKey));
        }
    }
    function AuthWrapperComponent_div_5_ng_content_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵprojection(0, 0, ["*ngTemplateOutlet", "mainContentRef"]);
        }
    }
    function AuthWrapperComponent_div_5_ng_content_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵprojection(0, 1, ["*ngTemplateOutlet", "cancelContentRef"]);
        }
    }
    function AuthWrapperComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 7);
            i0.ɵɵelementStart(1, "div", 8);
            i0.ɵɵtemplate(2, AuthWrapperComponent_div_5_ng_content_2_Template, 1, 0, "ng-content", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(3, AuthWrapperComponent_div_5_ng_content_3_Template, 1, 0, "ng-content", 9);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngTemplateOutlet", ctx_r1.mainContentRef);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", ctx_r1.cancelContentRef);
        }
    }
    function AuthWrapperComponent_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 10);
            i0.ɵɵelementStart(1, "strong");
            i0.ɵɵtext(2);
            i0.ɵɵpipe(3, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(4);
            i0.ɵɵpipe(5, "abpLocalization");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 2, "AbpAccount::InvalidLoginRequest"));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(5, 4, "AbpAccount::ThereAreNoLoginSchemesConfiguredForThisClient"), " ");
        }
    }
    var _c1 = ["*", "*"];
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
    AuthWrapperComponent.ɵfac = function AuthWrapperComponent_Factory(t) { return new (t || AuthWrapperComponent)(i0.ɵɵdirectiveInject(i1.MultiTenancyService), i0.ɵɵdirectiveInject(i2$1.Store), i0.ɵɵdirectiveInject(i1.SubscriptionService), i0.ɵɵdirectiveInject(i1.ConfigStateService)); };
    AuthWrapperComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AuthWrapperComponent, selectors: [["abp-auth-wrapper"]], inputs: { mainContentRef: "mainContentRef", cancelContentRef: "cancelContentRef" }, exportAs: ["abpAuthWrapper"], features: [i0.ɵɵProvidersFeature([i1.SubscriptionService])], ngContentSelectors: _c1, decls: 8, vars: 5, consts: [[1, "row"], [1, "mx-auto", "col", "col-md-5"], [4, "ngIf"], [1, "abp-account-container"], ["class", "card mt-3 shadow-sm rounded", 4, "ngIf", "ngIfElse"], ["disableLocalLoginTemplate", ""], [4, "abpReplaceableTemplate"], [1, "card", "mt-3", "shadow-sm", "rounded"], [1, "card-body", "p-5"], [4, "ngTemplateOutlet"], [1, "alert", "alert-warning"]], template: function AuthWrapperComponent_Template(rf, ctx) {
            if (rf & 1) {
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
            }
            if (rf & 2) {
                var _r2 = i0.ɵɵreference(7);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(3, 3, ctx.isMultiTenancyEnabled$) && ctx.multiTenancy.isTenantBoxVisible);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("ngIf", ctx.enableLocalLogin)("ngIfElse", _r2);
            }
        }, directives: [i3$2.NgIf, i1.ReplaceableTemplateDirective, TenantBoxComponent, i3$2.NgTemplateOutlet], pipes: [i3$2.AsyncPipe, i1.LocalizationPipe], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthWrapperComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'abp-auth-wrapper',
                        templateUrl: './auth-wrapper.component.html',
                        exportAs: 'abpAuthWrapper',
                        providers: [i1.SubscriptionService],
                    }]
            }], function () { return [{ type: i1.MultiTenancyService }, { type: i2$1.Store }, { type: i1.SubscriptionService }, { type: i1.ConfigStateService }]; }, { mainContentRef: [{
                    type: i0.Input
                }], cancelContentRef: [{
                    type: i0.Input
                }] });
    })();

    function LoginComponent_abp_auth_wrapper_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "abp-auth-wrapper", 3);
        }
        if (rf & 2) {
            i0.ɵɵnextContext();
            var _r1 = i0.ɵɵreference(2);
            var _r3 = i0.ɵɵreference(4);
            i0.ɵɵproperty("mainContentRef", _r1)("cancelContentRef", _r3);
        }
    }
    function LoginComponent_ng_template_1_strong_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "strong");
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "abpLocalization");
            i0.ɵɵelementStart(3, "a", 15);
            i0.ɵɵtext(4);
            i0.ɵɵpipe(5, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 2, "AbpAccount::AreYouANewUser"), " ");
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(5, 4, "AbpAccount::Register"));
        }
    }
    function LoginComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r7_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "h4");
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(3, LoginComponent_ng_template_1_strong_3_Template, 6, 6, "strong", 4);
            i0.ɵɵelementStart(4, "form", 5);
            i0.ɵɵlistener("ngSubmit", function LoginComponent_ng_template_1_Template_form_ngSubmit_4_listener() { i0.ɵɵrestoreView(_r7_1); var ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.onSubmit(); });
            i0.ɵɵelementStart(5, "div", 6);
            i0.ɵɵelementStart(6, "label", 7);
            i0.ɵɵtext(7);
            i0.ɵɵpipe(8, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(9, "input", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "div", 6);
            i0.ɵɵelementStart(11, "label", 9);
            i0.ɵɵtext(12);
            i0.ɵɵpipe(13, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(14, "input", 10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "div", 11);
            i0.ɵɵelementStart(16, "label", 12);
            i0.ɵɵelement(17, "input", 13);
            i0.ɵɵtext(18);
            i0.ɵɵpipe(19, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "abp-button", 14);
            i0.ɵɵtext(21);
            i0.ɵɵpipe(22, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 8, "AbpAccount::Login"));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx_r2.isSelfRegistrationEnabled);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("formGroup", ctx_r2.form);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(8, 10, "AbpAccount::UserNameOrEmailAddress"));
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(13, 12, "AbpAccount::Password"));
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(19, 14, "AbpAccount::RememberMe"), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("loading", ctx_r2.inProgress);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(22, 16, "AbpAccount::Login"), " ");
        }
    }
    function LoginComponent_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 16);
            i0.ɵɵelementStart(1, "a", 17);
            i0.ɵɵelementStart(2, "button", 18);
            i0.ɵɵtext(3);
            i0.ɵɵpipe(4, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(4, 1, "AbpAccount::Cancel"), " ");
        }
    }
    var _c0$2 = function (a0) { return { value: a0 }; };
    var _c1$1 = function (a0, a1) { return { mainContentRef: a0, cancelContentRef: a1 }; };
    var _c2 = function (a0, a1) { return { componentKey: a0, inputs: a1 }; };
    var maxLength = i1$1.Validators.maxLength, minLength = i1$1.Validators.minLength, required = i1$1.Validators.required;
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
    LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(i0.ɵɵdirectiveInject(i1$1.FormBuilder), i0.ɵɵdirectiveInject(i2.OAuthService), i0.ɵɵdirectiveInject(i2$1.Store), i0.ɵɵdirectiveInject(i3$1.ToasterService), i0.ɵɵdirectiveInject(AuthService), i0.ɵɵdirectiveInject(i1.ConfigStateService)); };
    LoginComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LoginComponent, selectors: [["abp-login"]], decls: 5, vars: 11, consts: [[3, "mainContentRef", "cancelContentRef", 4, "abpReplaceableTemplate"], ["mainContentRef", ""], ["cancelContentRef", ""], [3, "mainContentRef", "cancelContentRef"], [4, "ngIf"], ["validateOnSubmit", "", 1, "mt-4", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "login-input-user-name-or-email-address"], ["type", "text", "id", "login-input-user-name-or-email-address", "formControlName", "username", "autocomplete", "username", "autofocus", "", 1, "form-control"], ["for", "login-input-password"], ["type", "password", "id", "login-input-password", "formControlName", "password", "autocomplete", "current-password", 1, "form-control"], ["validationTarget", "", "validationStyle", "", 1, "form-check"], ["for", "login-input-remember-me", 1, "form-check-label"], ["type", "checkbox", "id", "login-input-remember-me", "formControlName", "remember", 1, "form-check-input"], ["buttonType", "submit", "name", "Action", "buttonClass", "btn-block btn-lg mt-3 btn btn-primary", 3, "loading"], ["routerLink", "/account/register", 1, "text-decoration-none"], [1, "card-footer", "text-center", "border-0"], ["routerLink", "/"], ["type", "button", "name", "Action", "value", "Cancel", 1, "px-2", "py-0", "btn", "btn-link"]], template: function LoginComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, LoginComponent_abp_auth_wrapper_0_Template, 1, 2, "abp-auth-wrapper", 0);
                i0.ɵɵtemplate(1, LoginComponent_ng_template_1_Template, 23, 18, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵtemplate(3, LoginComponent_ng_template_3_Template, 5, 3, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
            }
            if (rf & 2) {
                var _r1 = i0.ɵɵreference(2);
                var _r3 = i0.ɵɵreference(4);
                i0.ɵɵproperty("abpReplaceableTemplate", i0.ɵɵpureFunction2(8, _c2, ctx.authWrapperKey, i0.ɵɵpureFunction2(5, _c1$1, i0.ɵɵpureFunction1(1, _c0$2, _r1), i0.ɵɵpureFunction1(3, _c0$2, _r3))));
            }
        }, directives: [i1.ReplaceableTemplateDirective, AuthWrapperComponent, i3$2.NgIf, i1$1.ɵangular_packages_forms_forms_y, i1$1.NgControlStatusGroup, i1.FormSubmitDirective, i1$1.FormGroupDirective, i9.ValidationGroupDirective, i1$1.DefaultValueAccessor, i1$1.NgControlStatus, i1$1.FormControlName, i9.ValidationDirective, i1.AutofocusDirective, i9.ValidationTargetDirective, i9.ValidationStyleDirective, i1$1.CheckboxControlValueAccessor, i3$1.ButtonComponent, i3.RouterLinkWithHref], pipes: [i1.LocalizationPipe], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoginComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'abp-login',
                        templateUrl: './login.component.html',
                    }]
            }], function () { return [{ type: i1$1.FormBuilder }, { type: i2.OAuthService }, { type: i2$1.Store }, { type: i3$1.ToasterService }, { type: AuthService }, { type: i1.ConfigStateService }]; }, null);
    })();

    function ChangePasswordComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 2);
            i0.ɵɵelementStart(1, "label", 8);
            i0.ɵɵtext(2);
            i0.ɵɵpipe(3, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "span");
            i0.ɵɵtext(5, " * ");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(6, "input", 9);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 1, "AbpIdentity::DisplayName:CurrentPassword"));
        }
    }
    var required$1 = i1$1.Validators.required;
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
            var passwordValidations = i3$1.getPasswordValidators(this.injector);
            this.form = this.fb.group({
                password: ['', required$1],
                newPassword: [
                    '',
                    {
                        validators: __spread([required$1], passwordValidations),
                    },
                ],
                repeatNewPassword: [
                    '',
                    {
                        validators: __spread([required$1], passwordValidations),
                    },
                ],
            }, {
                validators: [i9.comparePasswords(PASSWORD_FIELDS)],
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
                        _this.form.addControl('password', new i1$1.FormControl('', [required$1]));
                    }
                },
                error: function (err) {
                    _this.toasterService.error(snq__default['default'](function () { return err.error.error.message; }, 'AbpAccount::DefaultErrorMessage'));
                },
            });
        };
        return ChangePasswordComponent;
    }());
    ChangePasswordComponent.ɵfac = function ChangePasswordComponent_Factory(t) { return new (t || ChangePasswordComponent)(i0.ɵɵdirectiveInject(i1$1.FormBuilder), i0.ɵɵdirectiveInject(i2$1.Store), i0.ɵɵdirectiveInject(i3$1.ToasterService), i0.ɵɵdirectiveInject(i0.Injector)); };
    ChangePasswordComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ChangePasswordComponent, selectors: [["abp-change-password-form"]], exportAs: ["abpChangePasswordForm"], decls: 19, vars: 14, consts: [["validateOnSubmit", "", 3, "formGroup", "mapErrorsFn", "ngSubmit"], ["class", "form-group", 4, "ngIf"], [1, "form-group"], ["for", "new-password"], ["type", "password", "id", "new-password", "formControlName", "newPassword", "autocomplete", "new-password", 1, "form-control"], ["for", "confirm-new-password"], ["type", "password", "id", "confirm-new-password", "formControlName", "repeatNewPassword", "autocomplete", "new-password", 1, "form-control"], ["iconClass", "fa fa-check", "buttonClass", "btn btn-primary color-white", "buttonType", "submit", 3, "loading", "disabled"], ["for", "current-password"], ["type", "password", "id", "current-password", "formControlName", "password", "autofocus", "", "autocomplete", "current-password", 1, "form-control"]], template: function ChangePasswordComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "form", 0);
                i0.ɵɵlistener("ngSubmit", function ChangePasswordComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
                i0.ɵɵtemplate(1, ChangePasswordComponent_div_1_Template, 7, 3, "div", 1);
                i0.ɵɵelementStart(2, "div", 2);
                i0.ɵɵelementStart(3, "label", 3);
                i0.ɵɵtext(4);
                i0.ɵɵpipe(5, "abpLocalization");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(6, "span");
                i0.ɵɵtext(7, " * ");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(8, "input", 4);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(9, "div", 2);
                i0.ɵɵelementStart(10, "label", 5);
                i0.ɵɵtext(11);
                i0.ɵɵpipe(12, "abpLocalization");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(13, "span");
                i0.ɵɵtext(14, " * ");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(15, "input", 6);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(16, "abp-button", 7);
                i0.ɵɵtext(17);
                i0.ɵɵpipe(18, "abpLocalization");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("formGroup", ctx.form)("mapErrorsFn", ctx.mapErrorsFn);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", !ctx.hideCurrentPassword);
                i0.ɵɵadvance(3);
                i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(5, 8, "AbpIdentity::DisplayName:NewPassword"));
                i0.ɵɵadvance(7);
                i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(12, 10, "AbpIdentity::DisplayName:NewPasswordConfirm"));
                i0.ɵɵadvance(5);
                i0.ɵɵproperty("loading", ctx.inProgress)("disabled", ctx.form == null ? null : ctx.form.invalid);
                i0.ɵɵadvance(1);
                i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(18, 12, "AbpIdentity::Save"));
            }
        }, directives: [i1$1.ɵangular_packages_forms_forms_y, i1$1.NgControlStatusGroup, i1.FormSubmitDirective, i1$1.FormGroupDirective, i9.ValidationGroupDirective, i3$2.NgIf, i1$1.DefaultValueAccessor, i1$1.NgControlStatus, i1$1.FormControlName, i9.ValidationDirective, i3$1.ButtonComponent, i1.AutofocusDirective], pipes: [i1.LocalizationPipe], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ChangePasswordComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'abp-change-password-form',
                        templateUrl: './change-password.component.html',
                        exportAs: 'abpChangePasswordForm',
                    }]
            }], function () { return [{ type: i1$1.FormBuilder }, { type: i2$1.Store }, { type: i3$1.ToasterService }, { type: i0.Injector }]; }, null);
    })();

    function PersonalSettingsComponent_form_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r2_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "form", 1);
            i0.ɵɵlistener("ngSubmit", function PersonalSettingsComponent_form_0_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r2_1); var ctx_r1 = i0.ɵɵnextContext(); return ctx_r1.submit(); });
            i0.ɵɵelementStart(1, "div", 2);
            i0.ɵɵelementStart(2, "label", 3);
            i0.ɵɵtext(3);
            i0.ɵɵpipe(4, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "span");
            i0.ɵɵtext(6, " * ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "input", 4);
            i0.ɵɵlistener("keydown.space", function PersonalSettingsComponent_form_0_Template_input_keydown_space_7_listener($event) { return $event.preventDefault(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "div", 5);
            i0.ɵɵelementStart(9, "div", 6);
            i0.ɵɵelementStart(10, "div", 2);
            i0.ɵɵelementStart(11, "label", 7);
            i0.ɵɵtext(12);
            i0.ɵɵpipe(13, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(14, "input", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "div", 6);
            i0.ɵɵelementStart(16, "div", 2);
            i0.ɵɵelementStart(17, "label", 9);
            i0.ɵɵtext(18);
            i0.ɵɵpipe(19, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(20, "input", 10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "div", 2);
            i0.ɵɵelementStart(22, "label", 11);
            i0.ɵɵtext(23);
            i0.ɵɵpipe(24, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(25, "span");
            i0.ɵɵtext(26, " * ");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(27, "input", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "div", 2);
            i0.ɵɵelementStart(29, "label", 13);
            i0.ɵɵtext(30);
            i0.ɵɵpipe(31, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(32, "input", 14);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "abp-button", 15);
            i0.ɵɵtext(34);
            i0.ɵɵpipe(35, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵproperty("formGroup", ctx_r0.form);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(4, 9, "AbpIdentity::DisplayName:UserName"));
            i0.ɵɵadvance(9);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(13, 11, "AbpIdentity::DisplayName:Name"));
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(19, 13, "AbpIdentity::DisplayName:Surname"));
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(24, 15, "AbpIdentity::DisplayName:Email"));
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(31, 17, "AbpIdentity::DisplayName:PhoneNumber"));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("loading", ctx_r0.inProgress)("disabled", ctx_r0.form == null ? null : ctx_r0.form.invalid);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(35, 19, "AbpIdentity::Save"), "");
        }
    }
    var maxLength$1 = i1$1.Validators.maxLength, required$2 = i1$1.Validators.required, email = i1$1.Validators.email;
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
                userName: [profile.userName, [required$2, maxLength$1(256)]],
                email: [profile.email, [required$2, email, maxLength$1(256)]],
                name: [profile.name || '', [maxLength$1(64)]],
                surname: [profile.surname || '', [maxLength$1(64)]],
                phoneNumber: [profile.phoneNumber || '', [maxLength$1(16)]],
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
    PersonalSettingsComponent.ɵfac = function PersonalSettingsComponent_Factory(t) { return new (t || PersonalSettingsComponent)(i0.ɵɵdirectiveInject(i1$1.FormBuilder), i0.ɵɵdirectiveInject(i2$1.Store), i0.ɵɵdirectiveInject(i3$1.ToasterService)); };
    PersonalSettingsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PersonalSettingsComponent, selectors: [["abp-personal-settings-form"]], exportAs: ["abpPersonalSettingsForm"], decls: 1, vars: 1, consts: [["validateOnSubmit", "", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["validateOnSubmit", "", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "username"], ["type", "text", "id", "username", "formControlName", "userName", "autofocus", "", 1, "form-control", 3, "keydown.space"], [1, "row"], [1, "col", "col-md-6"], ["for", "name"], ["type", "text", "id", "name", "formControlName", "name", 1, "form-control"], ["for", "surname"], ["type", "text", "id", "surname", "formControlName", "surname", 1, "form-control"], ["for", "email-address"], ["type", "text", "id", "email-address", "formControlName", "email", 1, "form-control"], ["for", "phone-number"], ["type", "text", "id", "phone-number", "formControlName", "phoneNumber", 1, "form-control"], ["buttonType", "submit", "iconClass", "fa fa-check", "buttonClass", "btn btn-primary color-white", 3, "loading", "disabled"]], template: function PersonalSettingsComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, PersonalSettingsComponent_form_0_Template, 36, 21, "form", 0);
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngIf", ctx.form);
            }
        }, directives: [i3$2.NgIf, i1$1.ɵangular_packages_forms_forms_y, i1$1.NgControlStatusGroup, i1.FormSubmitDirective, i1$1.FormGroupDirective, i9.ValidationGroupDirective, i1$1.DefaultValueAccessor, i1$1.NgControlStatus, i1$1.FormControlName, i9.ValidationDirective, i1.AutofocusDirective, i3$1.ButtonComponent], pipes: [i1.LocalizationPipe], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PersonalSettingsComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'abp-personal-settings-form',
                        templateUrl: './personal-settings.component.html',
                        exportAs: 'abpPersonalSettingsForm',
                    }]
            }], function () { return [{ type: i1$1.FormBuilder }, { type: i2$1.Store }, { type: i3$1.ToasterService }]; }, null);
    })();

    var _c0$3 = function (a0) { return { active: a0 }; };
    function ManageProfileComponent_li_6_Template(rf, ctx) {
        if (rf & 1) {
            var _r3_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "li", 10);
            i0.ɵɵlistener("click", function ManageProfileComponent_li_6_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r3_1); var ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.selectedTab = 0; });
            i0.ɵɵelementStart(1, "a", 8);
            i0.ɵɵtext(2);
            i0.ɵɵpipe(3, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c0$3, ctx_r0.selectedTab === 0));
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 2, "AbpUi::ChangePassword"));
        }
    }
    function ManageProfileComponent_div_11_div_1_abp_change_password_form_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "abp-change-password-form");
        }
    }
    var _c1$2 = function (a0) { return { componentKey: a0 }; };
    function ManageProfileComponent_div_11_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 13);
            i0.ɵɵelementStart(1, "div", 14);
            i0.ɵɵelementStart(2, "h4");
            i0.ɵɵtext(3);
            i0.ɵɵpipe(4, "abpLocalization");
            i0.ɵɵelement(5, "hr");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(6, ManageProfileComponent_div_11_div_1_abp_change_password_form_6_Template, 1, 0, "abp-change-password-form", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r4 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("@fadeIn", undefined);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(4, 3, "AbpIdentity::ChangePassword"), " ");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("abpReplaceableTemplate", i0.ɵɵpureFunction1(5, _c1$2, ctx_r4.changePasswordKey));
        }
    }
    function ManageProfileComponent_div_11_div_2_abp_personal_settings_form_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "abp-personal-settings-form");
        }
    }
    function ManageProfileComponent_div_11_div_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 13);
            i0.ɵɵelementStart(1, "div", 14);
            i0.ɵɵelementStart(2, "h4");
            i0.ɵɵtext(3);
            i0.ɵɵpipe(4, "abpLocalization");
            i0.ɵɵelement(5, "hr");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(6, ManageProfileComponent_div_11_div_2_abp_personal_settings_form_6_Template, 1, 0, "abp-personal-settings-form", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r5 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("@fadeIn", undefined);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(4, 3, "AbpIdentity::PersonalSettings"), " ");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("abpReplaceableTemplate", i0.ɵɵpureFunction1(5, _c1$2, ctx_r5.personalSettingsKey));
        }
    }
    function ManageProfileComponent_div_11_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 11);
            i0.ɵɵtemplate(1, ManageProfileComponent_div_11_div_1_Template, 7, 7, "div", 12);
            i0.ɵɵtemplate(2, ManageProfileComponent_div_11_div_2_Template, 7, 7, "div", 12);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r1.selectedTab === 0);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r1.selectedTab === 1);
        }
    }
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
    ManageProfileComponent.ɵfac = function ManageProfileComponent_Factory(t) { return new (t || ManageProfileComponent)(i0.ɵɵdirectiveInject(i2$1.Store)); };
    ManageProfileComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ManageProfileComponent, selectors: [["abp-manage-profile"]], decls: 12, vars: 9, consts: [["id", "AbpContentToolbar"], [1, "card", "border-0", "shadow-sm", "min-h-400", 3, "abpLoading"], [1, "card-body"], [1, "row"], [1, "col-12", "col-md-3"], ["id", "nav-tab", "role", "tablist", 1, "nav", "flex-column", "nav-pills"], ["class", "nav-item", 3, "click", 4, "ngIf"], [1, "nav-item", "mb-2", 3, "click"], ["role", "tab", "href", "javascript:void(0)", 1, "nav-link", 3, "ngClass"], ["class", "col-12 col-md-9", 4, "ngIf"], [1, "nav-item", 3, "click"], [1, "col-12", "col-md-9"], ["class", "tab-content", 4, "ngIf"], [1, "tab-content"], ["role", "tabpanel", 1, "tab-pane", "active"], [4, "abpReplaceableTemplate"]], template: function ManageProfileComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelement(0, "div", 0);
                i0.ɵɵelementStart(1, "div", 1);
                i0.ɵɵelementStart(2, "div", 2);
                i0.ɵɵelementStart(3, "div", 3);
                i0.ɵɵelementStart(4, "div", 4);
                i0.ɵɵelementStart(5, "ul", 5);
                i0.ɵɵtemplate(6, ManageProfileComponent_li_6_Template, 4, 6, "li", 6);
                i0.ɵɵelementStart(7, "li", 7);
                i0.ɵɵlistener("click", function ManageProfileComponent_Template_li_click_7_listener() { return ctx.selectedTab = 1; });
                i0.ɵɵelementStart(8, "a", 8);
                i0.ɵɵtext(9);
                i0.ɵɵpipe(10, "abpLocalization");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(11, ManageProfileComponent_div_11_Template, 3, 2, "div", 9);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("abpLoading", !ctx.isProfileLoaded);
                i0.ɵɵadvance(5);
                i0.ɵɵproperty("ngIf", !ctx.hideChangePasswordTab && ctx.isProfileLoaded);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(7, _c0$3, ctx.selectedTab === 1));
                i0.ɵɵadvance(1);
                i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(10, 5, "AbpAccount::PersonalSettings"));
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngIf", ctx.isProfileLoaded);
            }
        }, directives: [i3$1.LoadingDirective, i3$2.NgIf, i3$2.NgClass, i1.ReplaceableTemplateDirective, ChangePasswordComponent, PersonalSettingsComponent], pipes: [i1.LocalizationPipe], styles: [".min-h-400[_ngcontent-%COMP%] {\n        min-height: 400px;\n      }"], data: { animation: [animations.trigger('fadeIn', [animations.transition(':enter', animations.useAnimation(i3$1.fadeIn))])] } });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ManageProfileComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'abp-manage-profile',
                        templateUrl: './manage-profile.component.html',
                        animations: [animations.trigger('fadeIn', [animations.transition(':enter', animations.useAnimation(i3$1.fadeIn))])],
                        styles: [
                            "\n      .min-h-400 {\n        min-height: 400px;\n      }\n    ",
                        ],
                    }]
            }], function () { return [{ type: i2$1.Store }]; }, null);
    })();

    function RegisterComponent_abp_auth_wrapper_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "abp-auth-wrapper", 2);
        }
        if (rf & 2) {
            i0.ɵɵnextContext();
            var _r1 = i0.ɵɵreference(2);
            i0.ɵɵproperty("mainContentRef", _r1);
        }
    }
    function RegisterComponent_ng_template_1_form_9_Template(rf, ctx) {
        if (rf & 1) {
            var _r5_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "form", 5);
            i0.ɵɵlistener("ngSubmit", function RegisterComponent_ng_template_1_form_9_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r5_1); var ctx_r4 = i0.ɵɵnextContext(2); return ctx_r4.onSubmit(); });
            i0.ɵɵelementStart(1, "div", 6);
            i0.ɵɵelementStart(2, "label", 7);
            i0.ɵɵtext(3);
            i0.ɵɵpipe(4, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "span");
            i0.ɵɵtext(6, " * ");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(7, "input", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "div", 6);
            i0.ɵɵelementStart(9, "label", 9);
            i0.ɵɵtext(10);
            i0.ɵɵpipe(11, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "span");
            i0.ɵɵtext(13, " * ");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(14, "input", 10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "div", 6);
            i0.ɵɵelementStart(16, "label", 11);
            i0.ɵɵtext(17);
            i0.ɵɵpipe(18, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "span");
            i0.ɵɵtext(20, " * ");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(21, "input", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "abp-button", 13);
            i0.ɵɵtext(23);
            i0.ɵɵpipe(24, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r3 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("formGroup", ctx_r3.form);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(4, 6, "AbpAccount::UserName"));
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(11, 8, "AbpAccount::EmailAddress"));
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(18, 10, "AbpAccount::Password"));
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("loading", ctx_r3.inProgress);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(24, 12, "AbpAccount::Register"), " ");
        }
    }
    function RegisterComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "h4");
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "strong");
            i0.ɵɵtext(4);
            i0.ɵɵpipe(5, "abpLocalization");
            i0.ɵɵelementStart(6, "a", 3);
            i0.ɵɵtext(7);
            i0.ɵɵpipe(8, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(9, RegisterComponent_ng_template_1_form_9_Template, 25, 14, "form", 4);
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 4, "AbpAccount::Register"));
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(5, 6, "AbpAccount::AlreadyRegistered"), " ");
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(8, 8, "AbpAccount::Login"));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx_r2.isSelfRegistrationEnabled);
        }
    }
    var _c0$4 = function (a0) { return { value: a0 }; };
    var _c1$3 = function (a0) { return { mainContentRef: a0 }; };
    var _c2$1 = function (a0, a1) { return { componentKey: a0, inputs: a1 }; };
    var maxLength$2 = i1$1.Validators.maxLength, required$3 = i1$1.Validators.required, email$1 = i1$1.Validators.email;
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
                username: ['', [required$3, maxLength$2(255)]],
                password: ['', __spread([required$3], i3$1.getPasswordValidators(this.injector))],
                email: ['', [required$3, email$1]],
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
    RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(i0.ɵɵdirectiveInject(i1$1.FormBuilder), i0.ɵɵdirectiveInject(AccountService), i0.ɵɵdirectiveInject(i2.OAuthService), i0.ɵɵdirectiveInject(i2$1.Store), i0.ɵɵdirectiveInject(i3$1.ToasterService), i0.ɵɵdirectiveInject(AuthService), i0.ɵɵdirectiveInject(i0.Injector)); };
    RegisterComponent.ɵcmp = i0.ɵɵdefineComponent({ type: RegisterComponent, selectors: [["abp-register"]], decls: 3, vars: 8, consts: [[3, "mainContentRef", 4, "abpReplaceableTemplate"], ["mainContentRef", ""], [3, "mainContentRef"], ["routerLink", "/account/login", 1, "text-decoration-none"], ["validateOnSubmit", "", "class", "mt-4", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["validateOnSubmit", "", 1, "mt-4", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "input-user-name"], ["autofocus", "", "type", "text", "id", "input-user-name", "formControlName", "username", "autocomplete", "username", 1, "form-control"], ["for", "input-email-address"], ["type", "email", "id", "input-email-address", "formControlName", "email", 1, "form-control"], ["for", "input-password"], ["type", "password", "id", "input-password", "formControlName", "password", "autocomplete", "current-password", 1, "form-control"], ["buttonType", "submit", "name", "Action", "buttonClass", "btn-block btn-lg mt-3 btn btn-primary", 3, "loading"]], template: function RegisterComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, RegisterComponent_abp_auth_wrapper_0_Template, 1, 1, "abp-auth-wrapper", 0);
                i0.ɵɵtemplate(1, RegisterComponent_ng_template_1_Template, 10, 10, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
            }
            if (rf & 2) {
                var _r1 = i0.ɵɵreference(2);
                i0.ɵɵproperty("abpReplaceableTemplate", i0.ɵɵpureFunction2(5, _c2$1, ctx.authWrapperKey, i0.ɵɵpureFunction1(3, _c1$3, i0.ɵɵpureFunction1(1, _c0$4, _r1))));
            }
        }, directives: [i1.ReplaceableTemplateDirective, AuthWrapperComponent, i3.RouterLinkWithHref, i3$2.NgIf, i1$1.ɵangular_packages_forms_forms_y, i1$1.NgControlStatusGroup, i1.FormSubmitDirective, i1$1.FormGroupDirective, i9.ValidationGroupDirective, i1$1.DefaultValueAccessor, i1.AutofocusDirective, i1$1.NgControlStatus, i1$1.FormControlName, i9.ValidationDirective, i3$1.ButtonComponent], pipes: [i1.LocalizationPipe], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RegisterComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'abp-register',
                        templateUrl: './register.component.html',
                    }]
            }], function () { return [{ type: i1$1.FormBuilder }, { type: AccountService }, { type: i2.OAuthService }, { type: i2$1.Store }, { type: i3$1.ToasterService }, { type: AuthService }, { type: i0.Injector }]; }, null);
    })();

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
    AuthenticationFlowGuard.ɵfac = function AuthenticationFlowGuard_Factory(t) { return new (t || AuthenticationFlowGuard)(i0.ɵɵinject(AuthService)); };
    AuthenticationFlowGuard.ɵprov = i0.ɵɵdefineInjectable({ token: AuthenticationFlowGuard, factory: AuthenticationFlowGuard.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthenticationFlowGuard, [{
                type: i0.Injectable
            }], function () { return [{ type: AuthService }]; }, null);
    })();

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
                    data: {
                        replaceableComponent: {
                            key: "Account.LoginComponent" /* Login */,
                            defaultComponent: LoginComponent,
                        },
                    },
                },
                {
                    path: 'register',
                    component: i1.ReplaceableRouteContainerComponent,
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
                    component: i1.ReplaceableRouteContainerComponent,
                    canActivate: [i1.AuthGuard],
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
    var AccountRoutingModule = /** @class */ (function () {
        function AccountRoutingModule() {
        }
        return AccountRoutingModule;
    }());
    AccountRoutingModule.ɵfac = function AccountRoutingModule_Factory(t) { return new (t || AccountRoutingModule)(); };
    AccountRoutingModule.ɵmod = i0.ɵɵdefineNgModule({ type: AccountRoutingModule });
    AccountRoutingModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[i3.RouterModule.forChild(routes)], i3.RouterModule] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AccountRoutingModule, { imports: [i3.RouterModule], exports: [i3.RouterModule] }); })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AccountRoutingModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [i3.RouterModule.forChild(routes)],
                        exports: [i3.RouterModule],
                    }]
            }], null, null);
    })();

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
    ManageProfileGuard.ɵfac = function ManageProfileGuard_Factory(t) { return new (t || ManageProfileGuard)(i0.ɵɵinject(i1.EnvironmentService)); };
    ManageProfileGuard.ɵprov = i0.ɵɵdefineInjectable({ token: ManageProfileGuard, factory: ManageProfileGuard.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ManageProfileGuard, [{
                type: i0.Injectable
            }], function () { return [{ type: i1.EnvironmentService }]; }, null);
    })();

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
    AccountModule.ɵfac = function AccountModule_Factory(t) { return new (t || AccountModule)(); };
    AccountModule.ɵmod = i0.ɵɵdefineNgModule({ type: AccountModule });
    AccountModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[
                i1.CoreModule,
                AccountRoutingModule,
                i3$1.ThemeSharedModule,
                ngBootstrap.NgbDropdownModule,
                i9.NgxValidateCoreModule,
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AccountModule, { declarations: [AuthWrapperComponent,
                LoginComponent,
                RegisterComponent,
                TenantBoxComponent,
                ChangePasswordComponent,
                ManageProfileComponent,
                PersonalSettingsComponent], imports: [i1.CoreModule,
                AccountRoutingModule,
                i3$1.ThemeSharedModule,
                ngBootstrap.NgbDropdownModule,
                i9.NgxValidateCoreModule] });
    })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AccountModule, [{
                type: i0.NgModule,
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
                            i1.CoreModule,
                            AccountRoutingModule,
                            i3$1.ThemeSharedModule,
                            ngBootstrap.NgbDropdownModule,
                            i9.NgxValidateCoreModule,
                        ],
                        exports: [],
                    }]
            }], null, null);
    })();

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

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-tw-account.umd.js.map

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@abp/ng.core'), require('@angular/core'), require('@angular/forms'), require('@angular/router'), require('@delon/theme/layout-default'), require('ng-zorro-antd/dropdown'), require('ng-zorro-antd/icon'), require('@abp/ng.theme.shared'), require('rxjs/operators'), require('screenfull'), require('@delon/util'), require('snq'), require('@fs/account'), require('@delon/auth'), require('@delon/theme')) :
    typeof define === 'function' && define.amd ? define('@fs/theme-alain/layout', ['exports', '@abp/ng.core', '@angular/core', '@angular/forms', '@angular/router', '@delon/theme/layout-default', 'ng-zorro-antd/dropdown', 'ng-zorro-antd/icon', '@abp/ng.theme.shared', 'rxjs/operators', 'screenfull', '@delon/util', 'snq', '@fs/account', '@delon/auth', '@delon/theme'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.fs = global.fs || {}, global.fs['theme-alain'] = global.fs['theme-alain'] || {}, global.fs['theme-alain'].layout = {}), global.ng_core, global.ng.core, global.ng.forms, global.ng.router, global.layoutDefault, global.dropdown, global.icon, global.ng_theme_shared, global.rxjs.operators, global.screenfull, global.util, global.snq, global.account, global.auth, global.theme));
}(this, (function (exports, ng_core, core, forms, router, layoutDefault, dropdown, icon, ng_theme_shared, operators, screenfull, util, snq, account, auth, theme) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var screenfull__namespace = /*#__PURE__*/_interopNamespace(screenfull);
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

    var LayoutBasicComponent = /** @class */ (function () {
        function LayoutBasicComponent(navItems) {
            this.navItems = navItems;
            this.trackByFn = function (_, element) { return element === null || element === void 0 ? void 0 : element.id; };
            this.options = {
                logoExpanded: "./assets/logo-full.svg",
                logoCollapsed: "./assets/logo.svg",
            };
            this.navItems$ = this.navItems.items$.pipe(operators.map(function (x) { return x.map(function (y) { return y; }); }));
        }
        return LayoutBasicComponent;
    }());
    LayoutBasicComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'layout-basic',
                    template: "<layout-default [options]=\"options\" [asideUser]=\"asideUserTpl\" [content]=\"contentTpl\">\r\n    <ng-container *ngFor=\"let item of navItems$ | async; trackBy: trackByFn\">\r\n\r\n        <layout-default-header-item [direction]=\"item?.data?.direction || 'right'\">\r\n            <ng-container [ngComponentOutlet]=\"item.component\">\r\n            </ng-container>\r\n        </layout-default-header-item>\r\n\r\n    </ng-container>\r\n    <ng-template #asideUserTpl>\r\n\r\n    </ng-template>\r\n    <ng-template #contentTpl>\r\n        <router-outlet></router-outlet>\r\n    </ng-template>\r\n</layout-default>"
                },] }
    ];
    LayoutBasicComponent.ctorParameters = function () { return [
        { type: ng_theme_shared.NavItemsService }
    ]; };

    var HeaderFullScreenComponent = /** @class */ (function () {
        function HeaderFullScreenComponent() {
            this.status = false;
        }
        Object.defineProperty(HeaderFullScreenComponent.prototype, "sf", {
            get: function () {
                return screenfull__namespace;
            },
            enumerable: false,
            configurable: true
        });
        HeaderFullScreenComponent.prototype._resize = function () {
            this.status = this.sf.isFullscreen;
        };
        HeaderFullScreenComponent.prototype._click = function () {
            if (this.sf.isEnabled) {
                this.sf.toggle();
            }
        };
        return HeaderFullScreenComponent;
    }());
    HeaderFullScreenComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'header-fullscreen',
                    template: "\n  <div layout-default-header-item-trigger nzPlacement=\"bottomRight\">\n    <i nz-icon [nzType]=\"status ? 'fullscreen-exit' : 'fullscreen'\"></i>\n  </div>\n  ",
                    // tslint:disable-next-line: no-host-metadata-property
                    host: {
                        '[class.d-block]': 'true',
                    },
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                },] }
    ];
    HeaderFullScreenComponent.propDecorators = {
        _resize: [{ type: core.HostListener, args: ['window:resize',] }],
        _click: [{ type: core.HostListener, args: ['click',] }]
    };

    var HeaderI18nComponent = /** @class */ (function () {
        function HeaderI18nComponent(configState, sessionState) {
            this.configState = configState;
            this.sessionState = sessionState;
            this.showLangText = true;
            this.languages$ = this.configState.getDeep$('localization.languages');
        }
        Object.defineProperty(HeaderI18nComponent.prototype, "defaultLanguage$", {
            get: function () {
                var _this = this;
                return this.languages$.pipe(operators.map(function (languages) {
                    var lang = snq__default['default'](function () { return languages.find(function (language) { return language.cultureName === _this.selectedLangCulture; }); }, {});
                    return {
                        displayName: lang.displayName || '',
                        flagIcon: lang.flagIcon,
                    };
                }));
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(HeaderI18nComponent.prototype, "dropdownLanguages$", {
            get: function () {
                var _this = this;
                return this.languages$.pipe(operators.map(function (languages) { return snq__default['default'](function () { return languages.filter(function (lang) { return lang.cultureName !== _this.selectedLangCulture; }); }); }, []));
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(HeaderI18nComponent.prototype, "selectedLangCulture", {
            get: function () {
                return this.sessionState.getLanguage();
            },
            enumerable: false,
            configurable: true
        });
        HeaderI18nComponent.prototype.change = function (cultureName) {
            this.sessionState.setLanguage(cultureName);
        };
        return HeaderI18nComponent;
    }());
    HeaderI18nComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'header-i18n',
                    template: "<ng-container *ngIf=\"defaultLanguage$ | async as defaultLang\">\r\n    <i *ngIf=\"!showLangText\" nz-dropdown [nzDropdownMenu]=\"langMenu\" nzPlacement=\"bottomRight\" nz-icon\r\n        nzType=\"global\"></i>\r\n    <div *ngIf=\"showLangText\" nz-dropdown [nzDropdownMenu]=\"langMenu\" nzPlacement=\"bottomRight\">\r\n        <i nz-icon nzType=\"global\"></i>\r\n        {{ defaultLang.displayName }}\r\n        <i nz-icon nzType=\"down\"></i>\r\n    </div>\r\n    <nz-dropdown-menu #langMenu=\"nzDropdownMenu\">\r\n        <ul nz-menu>\r\n            <li nz-menu-item *ngFor=\"let lang of (dropdownLanguages$ | async)\"\r\n                [nzSelected]=\"lang.displayName === defaultLang.displayName\" (click)=\"change(lang.cultureName)\">\r\n                {{ lang?.displayName }}\r\n            </li>\r\n        </ul>\r\n    </nz-dropdown-menu>\r\n</ng-container>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                },] }
    ];
    HeaderI18nComponent.ctorParameters = function () { return [
        { type: ng_core.ConfigStateService },
        { type: ng_core.SessionStateService }
    ]; };
    HeaderI18nComponent.propDecorators = {
        showLangText: [{ type: core.Input }]
    };
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Object)
    ], HeaderI18nComponent.prototype, "showLangText", void 0);

    var HeaderUserComponent = /** @class */ (function () {
        function HeaderUserComponent(authService, router, configStateService) {
            this.authService = authService;
            this.router = router;
            this.configStateService = configStateService;
            this.currentUser$ = this.configStateService.getOne$('currentUser');
        }
        HeaderUserComponent.prototype.initLogin = function () {
            this.authService.initLogin();
        };
        HeaderUserComponent.prototype.logout = function () {
            var _this = this;
            this.authService.logout().subscribe(function () {
                _this.router.navigate(['/'], { state: { redirectUrl: _this.router.url } });
            });
        };
        return HeaderUserComponent;
    }());
    HeaderUserComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'header-user',
                    template: "<ng-template #loginBtnTpl>\r\n    <div class=\"alain-default__nav-item d-flex align-items-center px-sm\" nz-dropdown nzPlacement=\"bottomRight\"\r\n        (click)=\"initLogin()\">\r\n        {{'AbpAccount::Login' | abpLocalization}}\r\n    </div>\r\n</ng-template>\r\n<ng-container *ngIf=\"(currentUser$ | async)?.isAuthenticated; else loginBtnTpl\">\r\n    <div class=\"alain-default__nav-item d-flex align-items-center px-sm\" nz-dropdown nzPlacement=\"bottomRight\"\r\n        [nzDropdownMenu]=\"userMenu\">\r\n        <!-- <nz-avatar [nzSrc]=\"user.avatar\" nzSize=\"small\" class=\"mr-sm\"></nz-avatar> -->\r\n        {{ (currentUser$ | async)?.userName }}\r\n    </div>\r\n    <nz-dropdown-menu #userMenu=\"nzDropdownMenu\">\r\n        <div nz-menu class=\"width-sm\">\r\n            <div nz-menu-item routerLink=\"/account/manage-profile\">\r\n                <i nz-icon nzType=\"user\" class=\"mr-sm\"></i>\r\n                {{ 'AbpAccount::ManageYourProfile' | abpLocalization }}\r\n            </div>\r\n            <li nz-menu-divider></li> \r\n            <div nz-menu-item (click)=\"logout()\">\r\n                <i nz-icon nzType=\"logout\" class=\"mr-sm\"></i>\r\n                {{ 'AbpUi::Logout' | abpLocalization }}\r\n            </div>\r\n        </div>\r\n    </nz-dropdown-menu>\r\n</ng-container>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                },] }
    ];
    HeaderUserComponent.ctorParameters = function () { return [
        { type: account.AuthService },
        { type: router.Router },
        { type: ng_core.ConfigStateService }
    ]; };

    var LayoutBlankComponent = /** @class */ (function () {
        function LayoutBlankComponent() {
        }
        return LayoutBlankComponent;
    }());
    LayoutBlankComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'layout-blank',
                    template: "<router-outlet></router-outlet> ",
                    // tslint:disable-next-line: no-host-metadata-property
                    host: {
                        '[class.alain-blank]': 'true',
                    }
                },] }
    ];

    var LayoutPassportComponent = /** @class */ (function () {
        function LayoutPassportComponent(tokenService) {
            this.tokenService = tokenService;
            this.links = [
                {
                    title: '帮助',
                    href: '',
                },
                {
                    title: '隐私',
                    href: '',
                },
                {
                    title: '条款',
                    href: '',
                },
            ];
        }
        LayoutPassportComponent.prototype.ngOnInit = function () {
            this.tokenService.clear();
        };
        return LayoutPassportComponent;
    }());
    LayoutPassportComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'layout-passport',
                    template: "<div class=\"container\">\r\n  <header-i18n showLangText=\"false\" class=\"langs\"></header-i18n>\r\n  <div class=\"wrap\">\r\n    <div class=\"top\">\r\n      <div class=\"head\">\r\n        <img class=\"logo\" src=\"./assets/logo-color.svg\" />\r\n        <span class=\"title\">ng-alain</span>\r\n      </div>\r\n      <div class=\"desc\">FS Demo</div>\r\n    </div>\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n",
                    styles: [":host ::ng-deep .container{background:#f0f2f5;display:flex;flex-direction:column;min-height:100%}:host ::ng-deep .langs{height:40px;line-height:44px;text-align:right;width:100%}:host ::ng-deep .langs .anticon{cursor:pointer;font-size:14px;margin-right:24px;margin-top:24px;vertical-align:top}:host ::ng-deep .wrap{flex:1;padding:32px 0}:host ::ng-deep .ant-form-item{display:flex;justify-content:space-between;margin-bottom:24px}@media (min-width:768px){:host ::ng-deep .container{background-image:url(https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg);background-position:center 110px;background-repeat:no-repeat;background-size:100%}:host ::ng-deep .wrap{padding:32px 0 24px}}:host ::ng-deep .top{text-align:center}:host ::ng-deep .header{height:44px;line-height:44px}:host ::ng-deep .header a{text-decoration:none}:host ::ng-deep .logo{height:44px;margin-right:16px}:host ::ng-deep .title{color:rgba(0,0,0,.85);font-family:Myriad Pro,Helvetica Neue,Arial,Helvetica,sans-serif;font-size:33px;font-weight:600;position:relative;vertical-align:middle}:host ::ng-deep .desc{color:rgba(0,0,0,.45);font-size:14px;margin-bottom:40px;margin-top:12px}[data-theme=dark] :host ::ng-deep .container{background:#141414}[data-theme=dark] :host ::ng-deep .title{color:hsla(0,0%,100%,.85)}[data-theme=dark] :host ::ng-deep .desc{color:hsla(0,0%,100%,.45)}@media (min-width:768px){[data-theme=dark] :host ::ng-deep .container{background-image:none}}[data-theme=compact] :host ::ng-deep .ant-form-item{margin-bottom:16px}"]
                },] }
    ];
    LayoutPassportComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core.Inject, args: [auth.DA_SERVICE_TOKEN,] }] }
    ]; };

    var LAYOUT_MENU_PROVIDERS = [
        {
            provide: core.APP_INITIALIZER,
            useFactory: configureMenus,
            deps: [core.Injector],
            multi: true,
        },
    ];
    function configureMenus(injector) {
        return function () {
            var menuService = injector.get(theme.MenuService);
            var routes = injector.get(ng_core.RoutesService);
            var localizationPipe = injector.get(ng_core.LocalizationPipe);
            var permissionService = injector.get(ng_core.PermissionService);
            var settingsService = injector.get(theme.SettingsService);
            routes.visible$.subscribe(function (x) {
                menuService.clear();
                var condition = function (x) { return x.name == 'AbpUiNavigation::Menu:Administration' && isGrantedPolicy(x.requiredPolicy); };
                var menus = x.filter(condition).map(function (r) {
                    return mapToMenu(r);
                });
                menuService.add(menus);
            });
            settingsService.notify.subscribe(function (x) {
                setTimeout(function () { window.dispatchEvent(new Event('resize')); }, 0);
            });
            function mapToMenu(item) {
                var menu = {
                    text: localizationPipe.transform(item.name),
                    link: item.path,
                    icon: item.iconClass,
                    children: []
                };
                if (item.children.filter(function (x) { return isGrantedPolicy(x.requiredPolicy); }).length > 0) {
                    menu.children = item.children.map(function (x) { return mapToMenu(x); });
                }
                return menu;
            }
            function isGrantedPolicy(requiredPolicy) {
                if (!!requiredPolicy) {
                    return permissionService.getGrantedPolicy(requiredPolicy);
                }
                return true;
            }
        };
    }

    var LAYOUTCOMPONENTS = [LayoutBasicComponent, LayoutBlankComponent, LayoutPassportComponent];
    var HEADERCOMPONENTS = [
        HeaderI18nComponent,
        HeaderUserComponent,
        HeaderFullScreenComponent
    ];
    var LayoutModule = /** @class */ (function () {
        function LayoutModule() {
        }
        LayoutModule.forRoot = function () {
            return {
                ngModule: LayoutModule,
                providers: [
                    LAYOUT_MENU_PROVIDERS
                ]
            };
        };
        return LayoutModule;
    }());
    LayoutModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        ng_core.CoreModule,
                        forms.FormsModule,
                        router.RouterModule,
                        layoutDefault.LayoutDefaultModule,
                        dropdown.NzDropDownModule,
                        icon.NzIconModule
                    ],
                    declarations: __spread(LAYOUTCOMPONENTS, HEADERCOMPONENTS),
                    exports: __spread(LAYOUTCOMPONENTS, HEADERCOMPONENTS),
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.HeaderFullScreenComponent = HeaderFullScreenComponent;
    exports.HeaderI18nComponent = HeaderI18nComponent;
    exports.HeaderUserComponent = HeaderUserComponent;
    exports.LayoutBasicComponent = LayoutBasicComponent;
    exports.LayoutBlankComponent = LayoutBlankComponent;
    exports.LayoutModule = LayoutModule;
    exports.LayoutPassportComponent = LayoutPassportComponent;
    exports.ɵa = LAYOUT_MENU_PROVIDERS;
    exports.ɵb = configureMenus;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-theme-alain-layout.umd.js.map

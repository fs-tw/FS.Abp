(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@abp/ng.core'), require('@delon/abc/page-header'), require('@delon/abc/se'), require('@delon/abc/st'), require('@delon/abc/sv'), require('@delon/chart/custom'), require('ng-zorro-antd/affix'), require('ng-zorro-antd/alert'), require('ng-zorro-antd/anchor'), require('ng-zorro-antd/avatar'), require('ng-zorro-antd/breadcrumb'), require('ng-zorro-antd/button'), require('ng-zorro-antd/card'), require('ng-zorro-antd/checkbox'), require('ng-zorro-antd/core/outlet'), require('ng-zorro-antd/date-picker'), require('ng-zorro-antd/divider'), require('ng-zorro-antd/drawer'), require('ng-zorro-antd/dropdown'), require('ng-zorro-antd/form'), require('ng-zorro-antd/grid'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/input'), require('ng-zorro-antd/input-number'), require('ng-zorro-antd/list'), require('ng-zorro-antd/message'), require('ng-zorro-antd/modal'), require('ng-zorro-antd/popconfirm'), require('ng-zorro-antd/popover'), require('ng-zorro-antd/progress'), require('ng-zorro-antd/radio'), require('ng-zorro-antd/select'), require('ng-zorro-antd/skeleton'), require('ng-zorro-antd/spin'), require('ng-zorro-antd/switch'), require('ng-zorro-antd/table'), require('ng-zorro-antd/tabs'), require('ng-zorro-antd/time-picker'), require('ng-zorro-antd/tooltip'), require('ng-zorro-antd/tree'), require('ng-zorro-antd/upload'), require('@abp/ng.theme.shared'), require('@ngx-validate/core'), require('@fs-tw/theme-alain-ms/shared/extensions')) :
    typeof define === 'function' && define.amd ? define('@fs-tw/theme-alain-ms/shared', ['exports', '@angular/core', '@abp/ng.core', '@delon/abc/page-header', '@delon/abc/se', '@delon/abc/st', '@delon/abc/sv', '@delon/chart/custom', 'ng-zorro-antd/affix', 'ng-zorro-antd/alert', 'ng-zorro-antd/anchor', 'ng-zorro-antd/avatar', 'ng-zorro-antd/breadcrumb', 'ng-zorro-antd/button', 'ng-zorro-antd/card', 'ng-zorro-antd/checkbox', 'ng-zorro-antd/core/outlet', 'ng-zorro-antd/date-picker', 'ng-zorro-antd/divider', 'ng-zorro-antd/drawer', 'ng-zorro-antd/dropdown', 'ng-zorro-antd/form', 'ng-zorro-antd/grid', 'ng-zorro-antd/icon', 'ng-zorro-antd/input', 'ng-zorro-antd/input-number', 'ng-zorro-antd/list', 'ng-zorro-antd/message', 'ng-zorro-antd/modal', 'ng-zorro-antd/popconfirm', 'ng-zorro-antd/popover', 'ng-zorro-antd/progress', 'ng-zorro-antd/radio', 'ng-zorro-antd/select', 'ng-zorro-antd/skeleton', 'ng-zorro-antd/spin', 'ng-zorro-antd/switch', 'ng-zorro-antd/table', 'ng-zorro-antd/tabs', 'ng-zorro-antd/time-picker', 'ng-zorro-antd/tooltip', 'ng-zorro-antd/tree', 'ng-zorro-antd/upload', '@abp/ng.theme.shared', '@ngx-validate/core', '@fs-tw/theme-alain-ms/shared/extensions'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['fs-tw'] = global['fs-tw'] || {}, global['fs-tw']['theme-alain-ms'] = global['fs-tw']['theme-alain-ms'] || {}, global['fs-tw']['theme-alain-ms'].shared = {}), global.ng.core, global.ng_core, global.i4, global.i3, global.i1, global.i2, global.i5, global.i15, global.i16, global.i37, global.i30, global.i25, global.i6, global.i32, global.i10, global.i39, global.i22, global.i33, global.i19, global.i8, global.i29, global.i9, global.i14, global.i21, global.i24, global.i26, global.i7, global.i17, global.i35, global.i12, global.i34, global.i28, global.i13, global.i38, global.i31, global.i27, global.i18, global.i20, global.i23, global.i11, global.i40, global.i36, global.ng_theme_shared, global.core, global['fs-tw']['theme-alain-ms'].shared.extensions));
}(this, (function (exports, i0, ng_core, i4, i3, i1, i2, i5, i15, i16, i37, i30, i25, i6, i32, i10, i39, i22, i33, i19, i8, i29, i9, i14, i21, i24, i26, i7, i17, i35, i12, i34, i28, i13, i38, i31, i27, i18, i20, i23, i11, i40, i36, ng_theme_shared, core, extensions) { 'use strict';

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

    var SHARED_DELON_MODULES = [i1.STModule, i2.SVModule, i3.SEModule, i4.PageHeaderModule, i5.G2CustomModule];

    var SHARED_ZORRO_MODULES = [
        i6.NzButtonModule,
        i7.NzMessageModule,
        i8.NzDropDownModule,
        i9.NzGridModule,
        i10.NzCheckboxModule,
        i11.NzToolTipModule,
        i12.NzPopoverModule,
        i13.NzSelectModule,
        i14.NzIconModule,
        i15.NzAffixModule,
        i16.NzAlertModule,
        i17.NzModalModule,
        i18.NzTableModule,
        i19.NzDrawerModule,
        i20.NzTabsModule,
        i21.NzInputModule,
        i22.NzDatePickerModule,
        i23.NzTimePickerModule,
        i24.NzInputNumberModule,
        i25.NzBreadCrumbModule,
        i26.NzListModule,
        i27.NzSwitchModule,
        i28.NzRadioModule,
        i29.NzFormModule,
        i30.NzAvatarModule,
        i31.NzSpinModule,
        i32.NzCardModule,
        i33.NzDividerModule,
        i34.NzProgressModule,
        i35.NzPopconfirmModule,
        i36.NzUploadModule,
        i37.NzAnchorModule,
        i38.NzSkeletonModule,
        i39.NzOutletModule,
        i40.NzTreeModule,
    ];

    var declarationsWithExports = [];
    var ABPMODULES = [
        ng_core.CoreModule,
        ng_theme_shared.ThemeSharedModule,
        core.NgxValidateCoreModule
    ];
    var BaseThemeSharedModule = /** @class */ (function () {
        function BaseThemeSharedModule() {
        }
        return BaseThemeSharedModule;
    }());
    BaseThemeSharedModule.ɵfac = function BaseThemeSharedModule_Factory(t) { return new (t || BaseThemeSharedModule)(); };
    BaseThemeSharedModule.ɵmod = i0.ɵɵdefineNgModule({ type: BaseThemeSharedModule });
    BaseThemeSharedModule.ɵinj = i0.ɵɵdefineInjector({ imports: [__spread(SHARED_DELON_MODULES, SHARED_ZORRO_MODULES, ABPMODULES), i1.STModule, i2.SVModule, i3.SEModule, i4.PageHeaderModule, i5.G2CustomModule, i6.NzButtonModule, i7.NzMessageModule, i8.NzDropDownModule, i9.NzGridModule, i10.NzCheckboxModule, i11.NzToolTipModule, i12.NzPopoverModule, i13.NzSelectModule, i14.NzIconModule, i15.NzAffixModule, i16.NzAlertModule, i17.NzModalModule, i18.NzTableModule, i19.NzDrawerModule, i20.NzTabsModule, i21.NzInputModule, i22.NzDatePickerModule, i23.NzTimePickerModule, i24.NzInputNumberModule, i25.NzBreadCrumbModule, i26.NzListModule, i27.NzSwitchModule, i28.NzRadioModule, i29.NzFormModule, i30.NzAvatarModule, i31.NzSpinModule, i32.NzCardModule, i33.NzDividerModule, i34.NzProgressModule, i35.NzPopconfirmModule, i36.NzUploadModule, i37.NzAnchorModule, i38.NzSkeletonModule, i39.NzOutletModule, i40.NzTreeModule, ng_core.CoreModule,
            ng_theme_shared.ThemeSharedModule,
            core.NgxValidateCoreModule] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(BaseThemeSharedModule, { imports: [i1.STModule, i2.SVModule, i3.SEModule, i4.PageHeaderModule, i5.G2CustomModule, i6.NzButtonModule, i7.NzMessageModule, i8.NzDropDownModule, i9.NzGridModule, i10.NzCheckboxModule, i11.NzToolTipModule, i12.NzPopoverModule, i13.NzSelectModule, i14.NzIconModule, i15.NzAffixModule, i16.NzAlertModule, i17.NzModalModule, i18.NzTableModule, i19.NzDrawerModule, i20.NzTabsModule, i21.NzInputModule, i22.NzDatePickerModule, i23.NzTimePickerModule, i24.NzInputNumberModule, i25.NzBreadCrumbModule, i26.NzListModule, i27.NzSwitchModule, i28.NzRadioModule, i29.NzFormModule, i30.NzAvatarModule, i31.NzSpinModule, i32.NzCardModule, i33.NzDividerModule, i34.NzProgressModule, i35.NzPopconfirmModule, i36.NzUploadModule, i37.NzAnchorModule, i38.NzSkeletonModule, i39.NzOutletModule, i40.NzTreeModule, ng_core.CoreModule,
                ng_theme_shared.ThemeSharedModule,
                core.NgxValidateCoreModule], exports: [i1.STModule, i2.SVModule, i3.SEModule, i4.PageHeaderModule, i5.G2CustomModule, i6.NzButtonModule, i7.NzMessageModule, i8.NzDropDownModule, i9.NzGridModule, i10.NzCheckboxModule, i11.NzToolTipModule, i12.NzPopoverModule, i13.NzSelectModule, i14.NzIconModule, i15.NzAffixModule, i16.NzAlertModule, i17.NzModalModule, i18.NzTableModule, i19.NzDrawerModule, i20.NzTabsModule, i21.NzInputModule, i22.NzDatePickerModule, i23.NzTimePickerModule, i24.NzInputNumberModule, i25.NzBreadCrumbModule, i26.NzListModule, i27.NzSwitchModule, i28.NzRadioModule, i29.NzFormModule, i30.NzAvatarModule, i31.NzSpinModule, i32.NzCardModule, i33.NzDividerModule, i34.NzProgressModule, i35.NzPopconfirmModule, i36.NzUploadModule, i37.NzAnchorModule, i38.NzSkeletonModule, i39.NzOutletModule, i40.NzTreeModule, ng_core.CoreModule,
                ng_theme_shared.ThemeSharedModule,
                core.NgxValidateCoreModule] });
    })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseThemeSharedModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: __spread(declarationsWithExports),
                        imports: __spread(SHARED_DELON_MODULES, SHARED_ZORRO_MODULES, ABPMODULES),
                        exports: __spread(SHARED_DELON_MODULES, SHARED_ZORRO_MODULES, declarationsWithExports, ABPMODULES),
                    }]
            }], null, null);
    })();
    var ThemeAlainMsSharedModule = /** @class */ (function () {
        function ThemeAlainMsSharedModule() {
        }
        ThemeAlainMsSharedModule.forRoot = function () {
            return {
                ngModule: ThemeAlainMsSharedModule,
                providers: [],
            };
        };
        return ThemeAlainMsSharedModule;
    }());
    ThemeAlainMsSharedModule.ɵfac = function ThemeAlainMsSharedModule_Factory(t) { return new (t || ThemeAlainMsSharedModule)(); };
    ThemeAlainMsSharedModule.ɵmod = i0.ɵɵdefineNgModule({ type: ThemeAlainMsSharedModule });
    ThemeAlainMsSharedModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[BaseThemeSharedModule], BaseThemeSharedModule] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ThemeAlainMsSharedModule, { imports: [BaseThemeSharedModule], exports: [BaseThemeSharedModule] }); })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ThemeAlainMsSharedModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [BaseThemeSharedModule],
                        exports: [BaseThemeSharedModule],
                    }]
            }], null, null);
    })();

    var declarationsWithExports$1 = [];
    // #region third libs
    var ABPMODULES$1 = [
        ng_core.CoreModule,
        extensions.UiExtensionsModule
    ];
    // #endregion
    var SharedModule = /** @class */ (function () {
        function SharedModule() {
        }
        return SharedModule;
    }());
    SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
    SharedModule.ɵmod = i0.ɵɵdefineNgModule({ type: SharedModule });
    SharedModule.ɵinj = i0.ɵɵdefineInjector({ imports: [__spread(SHARED_DELON_MODULES, SHARED_ZORRO_MODULES, ABPMODULES$1), i1.STModule, i2.SVModule, i3.SEModule, i4.PageHeaderModule, i5.G2CustomModule, i6.NzButtonModule, i7.NzMessageModule, i8.NzDropDownModule, i9.NzGridModule, i10.NzCheckboxModule, i11.NzToolTipModule, i12.NzPopoverModule, i13.NzSelectModule, i14.NzIconModule, i15.NzAffixModule, i16.NzAlertModule, i17.NzModalModule, i18.NzTableModule, i19.NzDrawerModule, i20.NzTabsModule, i21.NzInputModule, i22.NzDatePickerModule, i23.NzTimePickerModule, i24.NzInputNumberModule, i25.NzBreadCrumbModule, i26.NzListModule, i27.NzSwitchModule, i28.NzRadioModule, i29.NzFormModule, i30.NzAvatarModule, i31.NzSpinModule, i32.NzCardModule, i33.NzDividerModule, i34.NzProgressModule, i35.NzPopconfirmModule, i36.NzUploadModule, i37.NzAnchorModule, i38.NzSkeletonModule, i39.NzOutletModule, i40.NzTreeModule, ng_core.CoreModule,
            extensions.UiExtensionsModule] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SharedModule, { imports: [i1.STModule, i2.SVModule, i3.SEModule, i4.PageHeaderModule, i5.G2CustomModule, i6.NzButtonModule, i7.NzMessageModule, i8.NzDropDownModule, i9.NzGridModule, i10.NzCheckboxModule, i11.NzToolTipModule, i12.NzPopoverModule, i13.NzSelectModule, i14.NzIconModule, i15.NzAffixModule, i16.NzAlertModule, i17.NzModalModule, i18.NzTableModule, i19.NzDrawerModule, i20.NzTabsModule, i21.NzInputModule, i22.NzDatePickerModule, i23.NzTimePickerModule, i24.NzInputNumberModule, i25.NzBreadCrumbModule, i26.NzListModule, i27.NzSwitchModule, i28.NzRadioModule, i29.NzFormModule, i30.NzAvatarModule, i31.NzSpinModule, i32.NzCardModule, i33.NzDividerModule, i34.NzProgressModule, i35.NzPopconfirmModule, i36.NzUploadModule, i37.NzAnchorModule, i38.NzSkeletonModule, i39.NzOutletModule, i40.NzTreeModule, ng_core.CoreModule,
                extensions.UiExtensionsModule], exports: [i1.STModule, i2.SVModule, i3.SEModule, i4.PageHeaderModule, i5.G2CustomModule, i6.NzButtonModule, i7.NzMessageModule, i8.NzDropDownModule, i9.NzGridModule, i10.NzCheckboxModule, i11.NzToolTipModule, i12.NzPopoverModule, i13.NzSelectModule, i14.NzIconModule, i15.NzAffixModule, i16.NzAlertModule, i17.NzModalModule, i18.NzTableModule, i19.NzDrawerModule, i20.NzTabsModule, i21.NzInputModule, i22.NzDatePickerModule, i23.NzTimePickerModule, i24.NzInputNumberModule, i25.NzBreadCrumbModule, i26.NzListModule, i27.NzSwitchModule, i28.NzRadioModule, i29.NzFormModule, i30.NzAvatarModule, i31.NzSpinModule, i32.NzCardModule, i33.NzDividerModule, i34.NzProgressModule, i35.NzPopconfirmModule, i36.NzUploadModule, i37.NzAnchorModule, i38.NzSkeletonModule, i39.NzOutletModule, i40.NzTreeModule, ng_core.CoreModule,
                extensions.UiExtensionsModule] });
    })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SharedModule, [{
                type: i0.NgModule,
                args: [{
                        //declarations: [...declarationsWithExports],
                        imports: __spread(SHARED_DELON_MODULES, SHARED_ZORRO_MODULES, ABPMODULES$1),
                        exports: __spread(SHARED_DELON_MODULES, SHARED_ZORRO_MODULES, ABPMODULES$1),
                    }]
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.BaseThemeSharedModule = BaseThemeSharedModule;
    exports.SHARED_DELON_MODULES = SHARED_DELON_MODULES;
    exports.SHARED_ZORRO_MODULES = SHARED_ZORRO_MODULES;
    exports.SharedModule = SharedModule;
    exports.ThemeAlainMsSharedModule = ThemeAlainMsSharedModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-tw-theme-alain-ms-shared.umd.js.map

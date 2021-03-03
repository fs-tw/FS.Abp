(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@abp/ng.core'), require('@ngxs/store')) :
    typeof define === 'function' && define.amd ? define('@fs-tw/crm/ng-alain/config', ['exports', '@angular/core', '@abp/ng.core', '@ngxs/store'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['fs-tw'] = global['fs-tw'] || {}, global['fs-tw'].crm = global['fs-tw'].crm || {}, global['fs-tw'].crm['ng-alain'] = global['fs-tw'].crm['ng-alain'] || {}, global['fs-tw'].crm['ng-alain'].config = {}), global.ng.core, global.ng_core, global.store));
}(this, (function (exports, core, ng_core, store) { 'use strict';

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

    var ROUTE_PROVIDERS = [
        {
            provide: core.APP_INITIALIZER,
            useFactory: configureRoutes,
            deps: [ng_core.RoutesService],
            multi: true,
        },
    ];
    var CrmCore = [
        {
            path: '/crm',
            parentName: "AbpUiNavigation::Menu:Administration" /* Administration */,
            name: "Crm::FS.Crm.Core" /* Crm */,
            iconClass: 'fa fa-id-card-o',
            layout: "application" /* application */,
            order: 0,
            navConfig: {
                title: "Crm::FS.Crm.Core" /* Crm */,
                doc: "Crm::FS.Crm.Core" /* Crm */,
                name: "Crm::FS.Crm.Core" /* Crm */,
            },
        },
    ];
    var CrmBasic = [
        {
            path: '/crm',
            name: "Crm::FS.Crm.Base" /* CrmBase */,
            parentName: "Crm::FS.Crm.Core" /* Crm */,
            order: 0,
            navConfig: {
                title: "Crm::FS.Crm.Base" /* CrmBase */,
            },
        },
    ];
    var Selectoroption = [
        {
            path: '/crm',
            name: "\u57FA\u672C\u8CC7\u6599" /* SelectorOptions */,
            parentName: "Crm::FS.Crm.Core" /* Crm */,
            order: 0,
            navConfig: {
                title: "\u57FA\u672C\u8CC7\u6599" /* SelectorOptions */,
            },
        },
        {
            path: '/crm/selector-options-management',
            name: "\u8A5E\u5F59\u7BA1\u7406" /* SelectorOption_01 */,
            parentName: "\u57FA\u672C\u8CC7\u6599" /* SelectorOptions */,
            order: 1,
            navConfig: {
                title: "\u8A5E\u5F59\u7BA1\u7406" /* SelectorOption_01 */,
            },
        },
        {
            path: '/crm/cp-management',
            name: "\u8F14\u5C0E\u7D00\u9304\u7BA1\u7406" /* CpManagement */,
            parentName: "Crm::FS.Crm.Base" /* CrmBase */,
            order: 1,
            navConfig: {
                title: "\u8F14\u5C0E\u7D00\u9304\u7BA1\u7406" /* CpManagement */,
            },
        },
        {
            path: '/crm/customers',
            name: "\u5BA2\u6236\u7BA1\u7406" /* Customers */,
            parentName: "\u57FA\u672C\u8CC7\u6599" /* SelectorOptions */,
            order: 1,
            navConfig: {
                title: "\u5BA2\u6236\u7BA1\u7406" /* Customers */,
            },
        },
        {
            path: '/crm/enterprise',
            name: "\u4F01\u696D\u5BA2\u6236\u7BA1\u7406" /* Enterprise */,
            parentName: "\u57FA\u672C\u8CC7\u6599" /* SelectorOptions */,
            order: 2,
            navConfig: {
                title: "\u4F01\u696D\u5BA2\u6236\u7BA1\u7406" /* Enterprise */,
            },
        },
        {
            path: '/crm/employee',
            name: "\u4EBA\u54E1\u7BA1\u7406" /* Employee */,
            parentName: "\u57FA\u672C\u8CC7\u6599" /* SelectorOptions */,
            order: 3,
            navConfig: {
                title: "\u4EBA\u54E1\u7BA1\u7406" /* Employee */,
            },
        },
        {
            path: '/crm/projects',
            name: "\u5C08\u6848\u7BA1\u7406" /* Projects */,
            parentName: "\u57FA\u672C\u8CC7\u6599" /* SelectorOptions */,
            order: 4,
            navConfig: {
                title: "\u5C08\u6848\u7BA1\u7406" /* Projects */,
            },
        },
        {
            path: '/crm/counseling-recrod',
            name: "\u8F14\u5C0E\u7D00\u9304" /* ConsultationRecords */,
            parentName: "\u57FA\u672C\u8CC7\u6599" /* SelectorOptions */,
            order: 5,
            navConfig: {
                title: "\u8F14\u5C0E\u7D00\u9304" /* ConsultationRecords */,
            },
        },
    ];
    function configureRoutes(routes) {
        return function () {
            routes.add(__spread(CrmCore, Selectoroption, CrmBasic));
        };
    }

    var STYLES_PROVIDERS = [
        {
            provide: core.APP_INITIALIZER,
            useFactory: configureStyles,
            deps: [store.Store],
            multi: true,
        },
    ];
    function configureStyles(store) {
        return function () {
            initLayouts(store);
        };
    }
    function initLayouts(store) {
    }

    var CrmNgAlainConfigModule = /** @class */ (function () {
        function CrmNgAlainConfigModule() {
        }
        CrmNgAlainConfigModule.forRoot = function () {
            return {
                ngModule: CrmNgAlainConfigModule,
                providers: [ROUTE_PROVIDERS, STYLES_PROVIDERS],
            };
        };
        return CrmNgAlainConfigModule;
    }());
    CrmNgAlainConfigModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: []
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CrmNgAlainConfigModule = CrmNgAlainConfigModule;
    exports.ɵa = ROUTE_PROVIDERS;
    exports.ɵb = STYLES_PROVIDERS;
    exports.ɵc = configureStyles;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-tw-crm-ng-alain-config.umd.js.map
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('@abp/ng.core'), require('@delon/theme'), require('@delon/util'), require('@angular/cdk/layout'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/spin'), require('@angular/router'), require('snq'), require('@delon/auth'), require('ng-zorro-antd/message'), require('ng-zorro-antd/input'), require('@angular/forms'), require('ng-zorro-antd/auto-complete'), require('@fs-tw/account'), require('ng-zorro-antd/anchor'), require('ng-zorro-antd/core/outlet'), require('ng-zorro-antd/popover'), require('@delon/abc/reuse-tab'), require('@angular/cdk/drag-drop'), require('@delon/theme/theme-btn'), require('ng-zorro-antd/avatar'), require('ng-zorro-antd/divider')) :
    typeof define === 'function' && define.amd ? define('@fs-tw/theme-alain-ms/layout', ['exports', '@angular/common', '@angular/core', 'rxjs', 'rxjs/operators', '@abp/ng.core', '@delon/theme', '@delon/util', '@angular/cdk/layout', 'ng-zorro-antd/icon', 'ng-zorro-antd/spin', '@angular/router', 'snq', '@delon/auth', 'ng-zorro-antd/message', 'ng-zorro-antd/input', '@angular/forms', 'ng-zorro-antd/auto-complete', '@fs-tw/account', 'ng-zorro-antd/anchor', 'ng-zorro-antd/core/outlet', 'ng-zorro-antd/popover', '@delon/abc/reuse-tab', '@angular/cdk/drag-drop', '@delon/theme/theme-btn', 'ng-zorro-antd/avatar', 'ng-zorro-antd/divider'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['fs-tw'] = global['fs-tw'] || {}, global['fs-tw']['theme-alain-ms'] = global['fs-tw']['theme-alain-ms'] || {}, global['fs-tw']['theme-alain-ms'].layout = {}), global.ng.common, global.ng.core, global.rxjs, global.rxjs.operators, global.i1, global.i3, global.i3$1, global.ng.cdk.layout, global.i3$2, global.i5, global.ng.router, global.snq, global.auth, global.i4$1, global.i4$2, global.ng.forms, global.i6, global.i1$2, global.i6$1, global.i5$2, global.i1$3, global.i4$3, global.ng.cdk.dragDrop, global.themeBtn, global.avatar, global.divider));
}(this, (function (exports, i4, i0, rxjs, operators, i1, i3, i3$1, i1$1, i3$2, i5, i2, snq, auth, i4$1, i4$2, i5$1, i6, i1$2, i6$1, i5$2, i1$3, i4$3, dragDrop, themeBtn, avatar, divider) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var snq__default = /*#__PURE__*/_interopDefaultLegacy(snq);

    (function (Layout) {
        Layout.defaultNavConfig = {
            title: '系統管理',
            doc: '系統管理',
        };
        Layout.defaultSidebarConfig = {
            hasSidebar: true,
            hasAllNav: false,
            hasPageNav: true,
            hasProductNav: false,
        };
    })(exports.Layout || (exports.Layout = {}));

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

    /**
     * 顶部菜单所有菜单数据，几个注意点：
     * - 当前处理的数据源格式为 `./assets/tmp/all-nav-en-US.json`
     * - 最终处理数据以 `all-nav.interface.ts` 系列接口为准
     */
    var MSAllNavService = /** @class */ (function () {
        function MSAllNavService(routesService, localizationPipe, http, arrSrv //  @Inject(ALAIN_I18N_TOKEN) private i18nSrv: I18NService
        ) {
            this.routesService = routesService;
            this.localizationPipe = localizationPipe;
            this.http = http;
            this.arrSrv = arrSrv;
        }
        Object.defineProperty(MSAllNavService.prototype, "allL2", {
            get: function () {
                return this._data.nav.filter(function (w) { return w.children && w.children.length > 0; });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MSAllNavService.prototype, "allPanel", {
            get: function () {
                return this._data.nav.reduce(function (p, c) { return (p = p.concat(c.children ? c.children : c)); }, []);
            },
            enumerable: false,
            configurable: true
        });
        MSAllNavService.prototype.getData = function () {
            return this._data ? rxjs.of(this._data) : this.getByHttp();
        };
        MSAllNavService.prototype.fixData = function (data) {
            var splitColumn = function (item) {
                if (!item.left) {
                    return;
                }
                item.leftColumn = item.leftColumn || 2;
                var columns = new Array(item.leftColumn)
                    .fill({})
                    .map(function (_, idx) { return ({
                    list: [],
                    count: 0,
                    idx: idx,
                }); });
                item.left
                    .filter(function (w) { return w.list; })
                    .forEach(function (category) {
                    var idx = __spread(columns).sort(function (a, b) { return a.count - b.count; })[0].idx;
                    columns[idx].list.push(category);
                    columns[idx].count += category.list.length;
                });
                item._left = columns;
            };
            data.nav.forEach(function (p1) {
                p1.level = 1;
                if (p1.children) {
                    p1.children.forEach(function (p2) {
                        p2.parent = p1;
                        p2.level = 2;
                        splitColumn(p2);
                    });
                }
                else {
                    splitColumn(p1);
                }
            });
            return data;
        };
        MSAllNavService.prototype.getByHttp = function () {
            var _this = this;
            return this.routesService.tree$.pipe(operators.map(function (r) {
                var result = {
                    navBottom: [],
                    bottomText: 'Further.',
                    nav: [],
                };
                result.nav = r
                    .filter(function (x) { return !_this.routesService.hide(x); })
                    .map(function (x) {
                    var allNav = {
                        text: _this.localizationPipe.transform(x.name),
                        left: [],
                    };
                    x.children
                        .filter(function (y) { return !_this.routesService.hide(y); })
                        .forEach(function (y) {
                        var _a;
                        if (((_a = y === null || y === void 0 ? void 0 : y.children) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                            allNav.left.push({
                                text: _this.localizationPipe.transform(y.name),
                                list: y.children.map(function (z) {
                                    return {
                                        text: _this.localizationPipe.transform(z.name),
                                        link: z.path,
                                    };
                                }),
                            });
                        }
                        else {
                            result.navBottom.push({
                                text: _this.localizationPipe.transform(y.name),
                                link: y.path,
                            });
                        }
                    });
                    return allNav;
                });
                _this._data = _this.fixData(result);
                return _this._data;
            }));
        };
        MSAllNavService.prototype.refreshActive = function (i) {
            this.arrSrv.visitTree(this._data.nav, function (item) {
                item.active = false;
            });
            while (i) {
                i.active = true;
                i = i.parent;
            }
        };
        return MSAllNavService;
    }());
    MSAllNavService.ɵfac = function MSAllNavService_Factory(t) { return new (t || MSAllNavService)(i0.ɵɵinject(i1.RoutesService), i0.ɵɵinject(i1.LocalizationPipe), i0.ɵɵinject(i3._HttpClient), i0.ɵɵinject(i3$1.ArrayService)); };
    MSAllNavService.ɵprov = i0.ɵɵdefineInjectable({ token: MSAllNavService, factory: MSAllNavService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MSAllNavService, [{
                type: i0.Injectable,
                args: [{ providedIn: 'root' }]
            }], function () { return [{ type: i1.RoutesService }, { type: i1.LocalizationPipe }, { type: i3._HttpClient }, { type: i3$1.ArrayService }]; }, null);
    })();

    /**
     * 用于维护布局数据
     */
    var BrandService = /** @class */ (function () {
        // #endregion
        function BrandService(bm, settings) {
            var _this = this;
            this.settings = settings;
            this.notify$ = new rxjs.BehaviorSubject(null);
            this._isMobile = false;
            /** 顶部高度，若变更需要同时重新指定 LESS 变量：`@alain-ms-topbar-height` 值 */
            this.topHeight = 50;
            this.hideNav = false;
            // fix layout data
            settings.setLayout(Object.assign(Object.assign({}, settings.layout), { hasTopbar: true, hasSidebar: false, hasFixed: false }));
            var mobileMedia = 'only screen and (max-width: 767.99px)';
            bm.observe(mobileMedia).subscribe(function (state) { return _this.checkMedia(state.matches); });
            this.checkMedia(bm.isMatched(mobileMedia));
        }
        Object.defineProperty(BrandService.prototype, "notify", {
            // #region fields
            get: function () {
                return this.notify$.asObservable();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BrandService.prototype, "isMobile", {
            get: function () {
                return this._isMobile;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BrandService.prototype, "layout", {
            get: function () {
                return this.settings.layout;
            },
            enumerable: false,
            configurable: true
        });
        BrandService.prototype.checkMedia = function (value) {
            this._isMobile = value;
            this.layout.collapsed = this._isMobile;
            this.notify$.next('mobile');
        };
        BrandService.prototype.setLayout = function (name, value) {
            this.settings.setLayout(name, value);
            this.notify$.next('layout');
        };
        BrandService.prototype.setTopbar = function (status) {
            this.setLayout('hasTopbar', status);
        };
        BrandService.prototype.setSidebar = function (status) {
            this.setLayout('hasSidebar', status);
        };
        BrandService.prototype.setFixed = function (status) {
            this.setLayout('hasFixed', status);
        };
        BrandService.prototype.triggerNotify = function (type) {
            if (type === void 0) { type = 'custom'; }
            this.notify$.next(type);
        };
        BrandService.prototype.ngOnDestroy = function () {
            this.notify$.unsubscribe();
        };
        return BrandService;
    }());
    BrandService.ɵfac = function BrandService_Factory(t) { return new (t || BrandService)(i0.ɵɵinject(i1$1.BreakpointObserver), i0.ɵɵinject(i3.SettingsService)); };
    BrandService.ɵprov = i0.ɵɵdefineInjectable({ token: BrandService, factory: BrandService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BrandService, [{
                type: i0.Injectable,
                args: [{ providedIn: 'root' }]
            }], function () { return [{ type: i1$1.BreakpointObserver }, { type: i3.SettingsService }]; }, null);
    })();

    var MSLinkToDirective = /** @class */ (function () {
        function MSLinkToDirective(router) {
            this.router = router;
            this.linkToChanged = new i0.EventEmitter();
        }
        MSLinkToDirective.prototype._click = function (e) {
            var _this = this;
            var _a = this.i, link = _a.link, target = _a.target;
            if (target != null) {
                if (target === '_blank') {
                    window.open(link);
                }
                else {
                    window.location.href = link;
                }
                this.linkToChanged.emit(e);
                return;
            }
            setTimeout(function () {
                _this.router.navigateByUrl(link).then(function () { return _this.linkToChanged.emit(e); });
            });
        };
        return MSLinkToDirective;
    }());
    MSLinkToDirective.ɵfac = function MSLinkToDirective_Factory(t) { return new (t || MSLinkToDirective)(i0.ɵɵdirectiveInject(i2.Router)); };
    MSLinkToDirective.ɵdir = i0.ɵɵdefineDirective({ type: MSLinkToDirective, selectors: [["", "link-to", ""]], hostBindings: function MSLinkToDirective_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("click", function MSLinkToDirective_click_HostBindingHandler($event) { return ctx._click($event); });
            }
        }, inputs: { i: ["link-to", "i"] }, outputs: { linkToChanged: "linkToChanged" } });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MSLinkToDirective, [{
                type: i0.Directive,
                args: [{ selector: '[link-to]' }]
            }], function () { return [{ type: i2.Router }]; }, { i: [{
                    type: i0.Input,
                    args: ['link-to']
                }], linkToChanged: [{
                    type: i0.Output
                }], _click: [{
                    type: i0.HostListener,
                    args: ['click', ['$event']]
                }] });
    })();

    var _c0 = ["dropdown"];
    function MSAllNavComponent_nz_spin_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "nz-spin");
        }
    }
    var _c1 = function (a0) { return { "alain-ms__an-menu-item--active": a0 }; };
    function MSAllNavComponent_ng_template_3_li_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r11_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "li", 10);
            i0.ɵɵlistener("mouseenter", function MSAllNavComponent_ng_template_3_li_1_Template_li_mouseenter_0_listener() { i0.ɵɵrestoreView(_r11_1); var i_r9 = ctx.$implicit; var ctx_r10 = i0.ɵɵnextContext(2); return ctx_r10.mouseHandle(i_r9, true); });
            i0.ɵɵtext(1);
            i0.ɵɵelement(2, "i", 11);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var i_r9 = ctx.$implicit;
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c1, i_r9.active));
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", i_r9.text, " ");
        }
    }
    function MSAllNavComponent_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "ul", 8);
            i0.ɵɵtemplate(1, MSAllNavComponent_ng_template_3_li_1_Template, 3, 4, "li", 9);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ls_r7 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ls_r7);
        }
    }
    function MSAllNavComponent_ng_template_5_div_0_a_4_span_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 19);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var i_r16 = i0.ɵɵnextContext().$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(i_r16.tip);
        }
    }
    function MSAllNavComponent_ng_template_5_div_0_a_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r20_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "a", 17);
            i0.ɵɵlistener("linkToChanged", function MSAllNavComponent_ng_template_5_div_0_a_4_Template_a_linkToChanged_0_listener() { i0.ɵɵrestoreView(_r20_1); var ctx_r19 = i0.ɵɵnextContext(3); return ctx_r19._leave(); });
            i0.ɵɵtext(1);
            i0.ɵɵtemplate(2, MSAllNavComponent_ng_template_5_div_0_a_4_span_2_Template, 2, 1, "span", 18);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var i_r16 = ctx.$implicit;
            i0.ɵɵproperty("link-to", i_r16);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", i_r16.text, " ");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", i_r16.tip);
        }
    }
    function MSAllNavComponent_ng_template_5_div_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 13);
            i0.ɵɵelementStart(1, "h3", 14);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "div", 15);
            i0.ɵɵtemplate(4, MSAllNavComponent_ng_template_5_div_0_a_4_Template, 3, 3, "a", 16);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var p_r14 = ctx.$implicit;
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(p_r14.text);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", p_r14.list);
        }
    }
    function MSAllNavComponent_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, MSAllNavComponent_ng_template_5_div_0_Template, 5, 2, "div", 12);
        }
        if (rf & 2) {
            var ls_r12 = ctx.$implicit;
            i0.ɵɵproperty("ngForOf", ls_r12);
        }
    }
    function MSAllNavComponent_div_9_ng_template_3_Template(rf, ctx) { }
    function MSAllNavComponent_div_9_div_4_a_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r29_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "a", 30);
            i0.ɵɵlistener("linkToChanged", function MSAllNavComponent_div_9_div_4_a_1_Template_a_linkToChanged_0_listener() { i0.ɵɵrestoreView(_r29_1); var ctx_r28 = i0.ɵɵnextContext(3); return ctx_r28._leave(); });
            i0.ɵɵtext(1);
            i0.ɵɵelement(2, "i", 31);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var i_r27 = ctx.$implicit;
            i0.ɵɵproperty("link-to", i_r27);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", i_r27.text, " ");
        }
    }
    function MSAllNavComponent_div_9_div_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 28);
            i0.ɵɵtemplate(1, MSAllNavComponent_div_9_div_4_a_1_Template, 3, 2, "a", 29);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r22 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx_r22.data.navBottom);
        }
    }
    function MSAllNavComponent_div_9_div_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 32);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r23 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx_r23.data.bottomText);
        }
    }
    function MSAllNavComponent_div_9_div_6_ng_template_2_Template(rf, ctx) { }
    var _c2 = function (a0) { return { "alain-ms__an-level2-active": a0 }; };
    var _c3 = function (a0) { return { $implicit: a0 }; };
    function MSAllNavComponent_div_9_div_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 33);
            i0.ɵɵelementStart(1, "div", 22);
            i0.ɵɵtemplate(2, MSAllNavComponent_div_9_div_6_ng_template_2_Template, 0, 0, "ng-template", 23);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var p_r30 = ctx.$implicit;
            i0.ɵɵnextContext(2);
            var _r1 = i0.ɵɵreference(4);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c2, p_r30.active));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngTemplateOutlet", _r1)("ngTemplateOutletContext", i0.ɵɵpureFunction1(5, _c3, p_r30.children));
        }
    }
    function MSAllNavComponent_div_9_div_7_div_1_div_1_ng_template_1_Template(rf, ctx) { }
    function MSAllNavComponent_div_9_div_7_div_1_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 39);
            i0.ɵɵtemplate(1, MSAllNavComponent_div_9_div_7_div_1_div_1_ng_template_1_Template, 0, 0, "ng-template", 23);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var col_r36 = ctx.$implicit;
            i0.ɵɵnextContext(4);
            var _r3 = i0.ɵɵreference(6);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", _r3)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c3, col_r36.list));
        }
    }
    function MSAllNavComponent_div_9_div_7_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 37);
            i0.ɵɵtemplate(1, MSAllNavComponent_div_9_div_7_div_1_div_1_Template, 2, 4, "div", 38);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var i_r32 = i0.ɵɵnextContext().$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", i_r32._left);
        }
    }
    function MSAllNavComponent_div_9_div_7_div_2_ng_template_1_Template(rf, ctx) { }
    function MSAllNavComponent_div_9_div_7_div_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 40);
            i0.ɵɵtemplate(1, MSAllNavComponent_div_9_div_7_div_2_ng_template_1_Template, 0, 0, "ng-template", 23);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var i_r32 = i0.ɵɵnextContext().$implicit;
            i0.ɵɵnextContext(2);
            var _r3 = i0.ɵɵreference(6);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", _r3)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c3, i_r32.right));
        }
    }
    var _c4 = function (a0) { return { "alain-ms__an-content-active": a0 }; };
    function MSAllNavComponent_div_9_div_7_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 34);
            i0.ɵɵtemplate(1, MSAllNavComponent_div_9_div_7_div_1_Template, 2, 1, "div", 35);
            i0.ɵɵtemplate(2, MSAllNavComponent_div_9_div_7_div_2_Template, 2, 4, "div", 36);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var i_r32 = ctx.$implicit;
            i0.ɵɵclassMapInterpolate2("alain-ms__an-content alain-ms__an-level", i_r32.level, "-content alain-ms__an-left-col-", i_r32.leftColumn, "");
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(7, _c4, i_r32.active));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", i_r32._left && i_r32._left.length > 0);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", i_r32.right && i_r32.right.length > 0);
        }
    }
    function MSAllNavComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 20);
            i0.ɵɵelementStart(1, "div", 21);
            i0.ɵɵelementStart(2, "div", 22);
            i0.ɵɵtemplate(3, MSAllNavComponent_div_9_ng_template_3_Template, 0, 0, "ng-template", 23);
            i0.ɵɵtemplate(4, MSAllNavComponent_div_9_div_4_Template, 2, 1, "div", 24);
            i0.ɵɵtemplate(5, MSAllNavComponent_div_9_div_5_Template, 2, 1, "div", 25);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(6, MSAllNavComponent_div_9_div_6_Template, 3, 7, "div", 26);
            i0.ɵɵtemplate(7, MSAllNavComponent_div_9_div_7_Template, 3, 9, "div", 27);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r6 = i0.ɵɵnextContext();
            var _r1 = i0.ɵɵreference(4);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngTemplateOutlet", _r1)("ngTemplateOutletContext", i0.ɵɵpureFunction1(6, _c3, ctx_r6.data.nav));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r6.data.navBottom);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r6.data.bottomText);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx_r6.allL2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx_r6.allPanel);
        }
    }
    var ANT_TIMEOUT = 150;
    /**
     * 顶部所有菜单组件，当单页布局模式时渲染
     */
    var MSAllNavComponent = /** @class */ (function () {
        function MSAllNavComponent(srv, brandSrv, cdr, doc) {
            this.srv = srv;
            this.brandSrv = brandSrv;
            this.cdr = cdr;
            this.doc = doc;
            this.unsubscribe$ = new rxjs.Subject();
            this.loading = false;
            this.$mouse = new rxjs.Subject();
            this.open = false;
        }
        Object.defineProperty(MSAllNavComponent.prototype, "allL2", {
            get: function () {
                return this.srv.allL2;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MSAllNavComponent.prototype, "allPanel", {
            get: function () {
                return this.srv.allPanel;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MSAllNavComponent.prototype, "validOpen", {
            get: function () {
                return this.data && this.open;
            },
            enumerable: false,
            configurable: true
        });
        MSAllNavComponent.prototype.handleOpen = function (status) {
            this.doc.body.classList[status ? 'add' : 'remove']('alain-ms__an-body');
            this.open = status;
            this.cdr.markForCheck();
            this.updateHeight().load();
        };
        MSAllNavComponent.prototype.load = function () {
            var _this = this;
            if (this.loading || this.data) {
                return;
            }
            this.loading = true;
            this.srv.getData().subscribe(function (res) {
                _this.data = res;
                _this.cdr.markForCheck();
            });
        };
        MSAllNavComponent.prototype.updateHeight = function () {
            var height = window.innerHeight - this.brandSrv.topHeight;
            this.dropdownEl.nativeElement.style.height = height + "px";
            return this;
        };
        MSAllNavComponent.prototype._enter = function () {
            if (!this.validOpen) {
                this.handleOpen(true);
            }
        };
        MSAllNavComponent.prototype._leave = function () {
            this.handleOpen(false);
        };
        MSAllNavComponent.prototype.mouseHandle = function (i, status) {
            this.$mouse.next({ i: i, status: status });
        };
        MSAllNavComponent.prototype.handleMouse = function (i) {
            this.srv.refreshActive(i);
            this.cdr.detectChanges();
        };
        MSAllNavComponent.prototype.ngOnInit = function () {
            var _this = this;
            // this._enter();
            var _a = this, $mouse = _a.$mouse, unsubscribe$ = _a.unsubscribe$;
            $mouse
                .asObservable()
                .pipe(operators.takeUntil(unsubscribe$), operators.auditTime(ANT_TIMEOUT))
                .subscribe(function (res) { return _this.handleMouse(res.i); });
        };
        MSAllNavComponent.prototype.ngOnDestroy = function () {
            var unsubscribe$ = this.unsubscribe$;
            unsubscribe$.next();
            unsubscribe$.complete();
        };
        return MSAllNavComponent;
    }());
    MSAllNavComponent.ɵfac = function MSAllNavComponent_Factory(t) { return new (t || MSAllNavComponent)(i0.ɵɵdirectiveInject(MSAllNavService), i0.ɵɵdirectiveInject(BrandService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i4.DOCUMENT)); };
    MSAllNavComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MSAllNavComponent, selectors: [["ms-all-nav"]], viewQuery: function MSAllNavComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c0, 3);
            }
            if (rf & 2) {
                var _t = void 0;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dropdownEl = _t.first);
            }
        }, hostVars: 2, hostBindings: function MSAllNavComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("mouseenter", function MSAllNavComponent_mouseenter_HostBindingHandler() { return ctx._enter(); })("mouseleave", function MSAllNavComponent_mouseleave_HostBindingHandler() { return ctx._leave(); });
            }
            if (rf & 2) {
                i0.ɵɵclassProp("alain-ms__an-active", ctx.validOpen);
            }
        }, decls: 10, vars: 2, consts: [[1, "alain-ms__an-trigger"], ["nz-icon", "", "nzType", "bars"], [4, "ngIf"], ["menuTpl", ""], ["categoryTpl", ""], [1, "alain-ms__an-dropdown"], ["dropdown", ""], ["class", "alain-ms__an", 4, "ngIf"], [1, "alain-ms__an-menu"], ["class", "alain-ms__an-menu-item", 3, "ngClass", "mouseenter", 4, "ngFor", "ngForOf"], [1, "alain-ms__an-menu-item", 3, "ngClass", "mouseenter"], ["nz-icon", "", "nzType", "right"], ["class", "alain-ms__an-category", 4, "ngFor", "ngForOf"], [1, "alain-ms__an-category"], [1, "alain-ms__an-category-title"], [1, "alain-ms__an-category-list"], ["class", "alain-ms__an-category-link", 3, "link-to", "linkToChanged", 4, "ngFor", "ngForOf"], [1, "alain-ms__an-category-link", 3, "link-to", "linkToChanged"], ["class", "alain-ms__an-category-tip", 4, "ngIf"], [1, "alain-ms__an-category-tip"], [1, "alain-ms__an"], [1, "alain-ms__an-panel", "alain-ms__an-panel-active", "alain-ms__an-level1"], [1, "alain-ms__an-panel-inner"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "alain-ms__an-menu-bottom", 4, "ngIf"], ["class", "alain-ms__an-bottom", 4, "ngIf"], ["class", "alain-ms__an-panel alain-ms__an-level2", 3, "ngClass", 4, "ngFor", "ngForOf"], [3, "class", "ngClass", 4, "ngFor", "ngForOf"], [1, "alain-ms__an-menu-bottom"], [3, "link-to", "linkToChanged", 4, "ngFor", "ngForOf"], [3, "link-to", "linkToChanged"], ["nz-icon", "", "nzType", "share-alt"], [1, "alain-ms__an-bottom"], [1, "alain-ms__an-panel", "alain-ms__an-level2", 3, "ngClass"], [3, "ngClass"], ["class", "alain-ms__an-left", 4, "ngIf"], ["class", "alain-ms__an-right", 4, "ngIf"], [1, "alain-ms__an-left"], ["class", "alain-ms__an-left-col", 4, "ngFor", "ngForOf"], [1, "alain-ms__an-left-col"], [1, "alain-ms__an-right"]], template: function MSAllNavComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelement(1, "i", 1);
                i0.ɵɵtemplate(2, MSAllNavComponent_nz_spin_2_Template, 1, 0, "nz-spin", 2);
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(3, MSAllNavComponent_ng_template_3_Template, 2, 1, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵtemplate(5, MSAllNavComponent_ng_template_5_Template, 1, 1, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵelementStart(7, "div", 5, 6);
                i0.ɵɵtemplate(9, MSAllNavComponent_div_9_Template, 8, 8, "div", 7);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngIf", ctx.open && !ctx.data);
                i0.ɵɵadvance(7);
                i0.ɵɵproperty("ngIf", ctx.data);
            }
        }, directives: [i3$2.NzIconDirective, i4.NgIf, i5.NzSpinComponent, i4.NgForOf, i4.NgClass, MSLinkToDirective, i4.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MSAllNavComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ms-all-nav',
                        templateUrl: './all-nav.component.html',
                        host: {
                            '[class.alain-ms__an-active]': 'validOpen',
                        },
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], function () {
            return [{ type: MSAllNavService }, { type: BrandService }, { type: i0.ChangeDetectorRef }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i4.DOCUMENT]
                        }] }];
        }, { dropdownEl: [{
                    type: i0.ViewChild,
                    args: ['dropdown', { static: true }]
                }], _enter: [{
                    type: i0.HostListener,
                    args: ['mouseenter']
                }], _leave: [{
                    type: i0.HostListener,
                    args: ['mouseleave']
                }] });
    })();

    function MSLangsComponent_ng_container_0_li_5_Template(rf, ctx) {
        if (rf & 1) {
            var _r5_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "li", 4);
            i0.ɵɵlistener("click", function MSLangsComponent_ng_container_0_li_5_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r5_1); var lang_r3 = ctx.$implicit; var ctx_r4 = i0.ɵɵnextContext(2); return ctx_r4.change(lang_r3.cultureName); });
            i0.ɵɵelementStart(1, "a", 5);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var lang_r3 = ctx.$implicit;
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(lang_r3 == null ? null : lang_r3.displayName);
        }
    }
    function MSLangsComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "span", 1);
            i0.ɵɵelementStart(2, "span");
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "ul", 2);
            i0.ɵɵtemplate(5, MSLangsComponent_ng_container_0_li_5_Template, 3, 1, "li", 3);
            i0.ɵɵpipe(6, "async");
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var defaultLang_r1 = ctx.ngIf;
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(defaultLang_r1.displayName);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(6, 2, ctx_r0.dropdownLanguages$));
        }
    }
    var MSLangsComponent = /** @class */ (function () {
        function MSLangsComponent(configState, sessionState) {
            this.configState = configState;
            this.sessionState = sessionState;
            this.languages$ = this.configState.getDeep$('localization.languages');
        }
        Object.defineProperty(MSLangsComponent.prototype, "defaultLanguage$", {
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
        Object.defineProperty(MSLangsComponent.prototype, "dropdownLanguages$", {
            get: function () {
                var _this = this;
                return this.languages$.pipe(operators.map(function (languages) { return snq__default['default'](function () { return languages.filter(function (lang) { return lang.cultureName !== _this.selectedLangCulture; }); }); }, []));
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MSLangsComponent.prototype, "selectedLangCulture", {
            get: function () {
                return this.sessionState.getLanguage();
            },
            enumerable: false,
            configurable: true
        });
        MSLangsComponent.prototype.change = function (cultureName) {
            this.sessionState.setLanguage(cultureName);
        };
        return MSLangsComponent;
    }());
    MSLangsComponent.ɵfac = function MSLangsComponent_Factory(t) { return new (t || MSLangsComponent)(i0.ɵɵdirectiveInject(i1.ConfigStateService), i0.ɵɵdirectiveInject(i1.SessionStateService)); };
    MSLangsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MSLangsComponent, selectors: [["ms-langs"]], hostVars: 4, hostBindings: function MSLangsComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵclassProp("alain-ms__topbar-item", true)("alain-ms__topbar-dd", true);
            }
        }, decls: 2, vars: 3, consts: [[4, "ngIf"], [1, "alain-ms__topbar-item-btn"], [1, "alain-ms__topbar-dd-menu"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], [1, "alain-ms__topbar-dd-item"]], template: function MSLangsComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, MSLangsComponent_ng_container_0_Template, 7, 4, "ng-container", 0);
                i0.ɵɵpipe(1, "async");
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.defaultLanguage$));
            }
        }, directives: [i4.NgIf, i4.NgForOf], pipes: [i4.AsyncPipe], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MSLangsComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ms-langs',
                        templateUrl: './langs.component.html',
                        host: {
                            '[class.alain-ms__topbar-item]': 'true',
                            '[class.alain-ms__topbar-dd]': 'true',
                        },
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], function () { return [{ type: i1.ConfigStateService }, { type: i1.SessionStateService }]; }, null);
    })();

    /**
     * 顶部菜单所有数据，几个注意点：
     * - 当前处理的数据源格式为 `./assets/tmp/topbar-en-US.json`
     * - 最终处理数据以 `topbar.interface.ts` 系列接口为准
     */
    var MSTopbarService = /** @class */ (function () {
        function MSTopbarService(http) {
            this.http = http;
        }
        Object.defineProperty(MSTopbarService.prototype, "data", {
            get: function () {
                return this._data;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MSTopbarService.prototype, "messages", {
            get: function () {
                return this._data.messagess;
            },
            enumerable: false,
            configurable: true
        });
        MSTopbarService.prototype.getData = function () {
            return this._data ? rxjs.of(this._data) : this.getByHttp();
        };
        MSTopbarService.prototype.getNav = function (key) {
            return this._data.navLinks[key] || {};
        };
        MSTopbarService.prototype.getByHttp = function () {
            var _this = this;
            return this.http.get("./assets/tmp/topbar-zh-TW.json").pipe(operators.tap(function (res) {
                _this._data = res;
            }));
        };
        return MSTopbarService;
    }());
    MSTopbarService.ɵfac = function MSTopbarService_Factory(t) { return new (t || MSTopbarService)(i0.ɵɵinject(i3._HttpClient)); };
    MSTopbarService.ɵprov = i0.ɵɵdefineInjectable({ token: MSTopbarService, factory: MSTopbarService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MSTopbarService, [{
                type: i0.Injectable,
                args: [{ providedIn: 'root' }]
            }], function () { return [{ type: i3._HttpClient }]; }, null);
    })();

    function MSNoticeComponent_em_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "em", 9);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx_r0.list.length);
        }
    }
    function MSNoticeComponent_a_9_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "a", 10);
            i0.ɵɵelementStart(1, "div", 11);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "span", 12);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var i_r2 = ctx.$implicit;
            i0.ɵɵproperty("link-to", i_r2);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(i_r2.title);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(i_r2.time);
        }
    }
    var MSNoticeComponent = /** @class */ (function () {
        function MSNoticeComponent(srv, router, tokenService, settings, msg) {
            this.srv = srv;
            this.router = router;
            this.tokenService = tokenService;
            this.settings = settings;
            this.msg = msg;
        }
        Object.defineProperty(MSNoticeComponent.prototype, "list", {
            get: function () {
                var _this = this;
                return this.srv.messages.map(function (i) {
                    i.link = _this.l.messageUrl + i.id;
                    return i;
                });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MSNoticeComponent.prototype, "l", {
            get: function () {
                return this.srv.getNav('message');
            },
            enumerable: false,
            configurable: true
        });
        MSNoticeComponent.prototype.logout = function () {
            this.tokenService.clear();
            this.router.navigateByUrl(this.tokenService.login_url);
        };
        return MSNoticeComponent;
    }());
    MSNoticeComponent.ɵfac = function MSNoticeComponent_Factory(t) { return new (t || MSNoticeComponent)(i0.ɵɵdirectiveInject(MSTopbarService), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(auth.DA_SERVICE_TOKEN), i0.ɵɵdirectiveInject(i3.SettingsService), i0.ɵɵdirectiveInject(i4$1.NzMessageService)); };
    MSNoticeComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MSNoticeComponent, selectors: [["ms-notice"]], hostVars: 6, hostBindings: function MSNoticeComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵclassProp("alain-ms__topbar-item", true)("alain-ms__topbar-dd", true)("alain-ms__notice", true);
            }
        }, decls: 13, vars: 8, consts: [[1, "alain-ms__topbar-item-btn"], [1, "position-relative"], ["class", "alain-ms__topbar-item-num", 4, "ngIf"], [1, "alain-ms__topbar-dd-menu"], [1, "alain-ms__notice-hd"], [1, "brand-color", 3, "link-to"], ["class", "alain-ms__notice-item", 3, "link-to", 4, "ngFor", "ngForOf"], [1, "alain-ms__notice-fd"], [1, "d-block", "pt-sm", "pb-xs", "text-center", 3, "link-to"], [1, "alain-ms__topbar-item-num"], [1, "alain-ms__notice-item", 3, "link-to"], [1, "alain-ms__notice-item--title"], [1, "alain-ms__notice-item--time"]], template: function MSNoticeComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "span", 0);
                i0.ɵɵelementStart(1, "span", 1);
                i0.ɵɵtext(2);
                i0.ɵɵtemplate(3, MSNoticeComponent_em_3_Template, 2, 1, "em", 2);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(4, "div", 3);
                i0.ɵɵelementStart(5, "div", 4);
                i0.ɵɵtext(6);
                i0.ɵɵelementStart(7, "a", 5);
                i0.ɵɵtext(8);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(9, MSNoticeComponent_a_9_Template, 5, 3, "a", 6);
                i0.ɵɵelementStart(10, "div", 7);
                i0.ɵɵelementStart(11, "a", 8);
                i0.ɵɵtext(12);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(2);
                i0.ɵɵtextInterpolate1(" ", ctx.l.titleText, "");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.list.length > 0);
                i0.ɵɵadvance(3);
                i0.ɵɵtextInterpolate1(" ", ctx.l.title, " ");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("link-to", ctx.l.subscribe);
                i0.ɵɵadvance(1);
                i0.ɵɵtextInterpolate(ctx.l.subscribe.title);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngForOf", ctx.list);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("link-to", ctx.l);
                i0.ɵɵadvance(1);
                i0.ɵɵtextInterpolate(ctx.l.text);
            }
        }, directives: [i4.NgIf, MSLinkToDirective, i4.NgForOf], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MSNoticeComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ms-notice',
                        templateUrl: './notice.component.html',
                        host: {
                            '[class.alain-ms__topbar-item]': 'true',
                            '[class.alain-ms__topbar-dd]': 'true',
                            '[class.alain-ms__notice]': 'true',
                        },
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], function () {
            return [{ type: MSTopbarService }, { type: i2.Router }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [auth.DA_SERVICE_TOKEN]
                        }] }, { type: i3.SettingsService }, { type: i4$1.NzMessageService }];
        }, null);
    })();

    var MSRegionService = /** @class */ (function () {
        function MSRegionService(http) {
            this.http = http;
        }
        Object.defineProperty(MSRegionService.prototype, "platList", {
            get: function () {
                return this._data.reduce(function (p, c) { return p.concat(c.list); }, []);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MSRegionService.prototype, "item", {
            get: function () {
                return this.platList.find(function (w) { return w.selected; });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MSRegionService.prototype, "list", {
            get: function () {
                return this._data;
            },
            enumerable: false,
            configurable: true
        });
        MSRegionService.prototype.getByHttp = function () {
            return this.http.get("/region").pipe(operators.tap(function (list) {
                //const zone = this.i18nSrv.zone;
                //const key = `${list[0][`${zone}Name`] ? zone : 'cn'}Name`;
                // const res = list.reduce((p: MSRegionDistrict[], c) => {
                //   const districtName = `district_${key}`;
                //   let item = p.find((w) => w.name === c[districtName]);
                //   if (!item) {
                //     item = { name: c[districtName], list: [] };
                //     p.push(item);
                //   }
                //   item.list?.push({ id: c.id, country: c.country, name: c[key], selected: c.id === 'cn-shanghai' });
                //   return p;
                // }, []);
                // this._data = res;
            }));
        };
        MSRegionService.prototype.getData = function () {
            return this._data ? rxjs.of(null) : this.getByHttp();
        };
        MSRegionService.prototype.setSelected = function (item) {
            this.platList.find(function (w) { return w.selected; }).selected = false;
            item.selected = true;
        };
        return MSRegionService;
    }());
    MSRegionService.ɵfac = function MSRegionService_Factory(t) { return new (t || MSRegionService)(i0.ɵɵinject(i3._HttpClient)); };
    MSRegionService.ɵprov = i0.ɵɵdefineInjectable({ token: MSRegionService, factory: MSRegionService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MSRegionService, [{
                type: i0.Injectable,
                args: [{ providedIn: 'root' }]
            }], function () { return [{ type: i3._HttpClient }]; }, null);
    })();

    var _c0$1 = function (a0) { return { "brand-color": a0 }; };
    function MSRegionComponent_ng_container_0_dl_7_dd_3_Template(rf, ctx) {
        if (rf & 1) {
            var _r6_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "dd", 9);
            i0.ɵɵlistener("click", function MSRegionComponent_ng_container_0_dl_7_dd_3_Template_dd_click_0_listener() { i0.ɵɵrestoreView(_r6_1); var i_r4 = ctx.$implicit; var ctx_r5 = i0.ɵɵnextContext(3); return ctx_r5.selected(i_r4); });
            i0.ɵɵelementStart(1, "a", 10);
            i0.ɵɵelement(2, "i");
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var i_r4 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(5, _c0$1, i_r4.selected));
            i0.ɵɵadvance(1);
            i0.ɵɵclassMapInterpolate1("icon icon-", i_r4.country, "");
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1("", i_r4.name, " ");
        }
    }
    function MSRegionComponent_ng_container_0_dl_7_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "dl", 6);
            i0.ɵɵelementStart(1, "dt", 7);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(3, MSRegionComponent_ng_container_0_dl_7_dd_3_Template, 4, 7, "dd", 8);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var p_r2 = ctx.$implicit;
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(p_r2.name);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", p_r2.list);
        }
    }
    function MSRegionComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "span", 1);
            i0.ɵɵelement(2, "i");
            i0.ɵɵelementStart(3, "span", 2);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(5, "i", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div", 4);
            i0.ɵɵtemplate(7, MSRegionComponent_ng_container_0_dl_7_Template, 4, 2, "dl", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(2);
            i0.ɵɵclassMapInterpolate1("icon icon-", ctx_r0.srv.item.country, "");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx_r0.srv.item.name);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx_r0.srv.list);
        }
    }
    var MSRegionComponent = /** @class */ (function () {
        function MSRegionComponent(srv, cdr) {
            this.srv = srv;
            this.cdr = cdr;
            this.inited = false;
        }
        MSRegionComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.srv.getData().subscribe(function () {
                _this.inited = true;
                _this.cdr.detectChanges();
            });
        };
        MSRegionComponent.prototype.selected = function (item) {
            this.srv.setSelected(item);
            this.cdr.detectChanges();
        };
        return MSRegionComponent;
    }());
    MSRegionComponent.ɵfac = function MSRegionComponent_Factory(t) { return new (t || MSRegionComponent)(i0.ɵɵdirectiveInject(MSRegionService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    MSRegionComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MSRegionComponent, selectors: [["ms-region"]], hostVars: 6, hostBindings: function MSRegionComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵclassProp("alain-ms__topbar-item", true)("alain-ms__topbar-dd", true)("alain-ms__region", true);
            }
        }, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "alain-ms__topbar-item-btn"], [1, "text-xs", "px-xs"], ["nz-icon", "", "nzType", "caret-up", 1, "alain-ms__topbar-item-btn-arrow"], [1, "alain-ms__topbar-dd-menu", "alain-ms__topbar-dd-left", "alain-ms__region--wrap", "clearfix"], ["class", "alain-ms__region--list", 4, "ngFor", "ngForOf"], [1, "alain-ms__region--list"], [1, "mb-sm"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], [1, "d-block", 3, "ngClass"]], template: function MSRegionComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, MSRegionComponent_ng_container_0_Template, 8, 5, "ng-container", 0);
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngIf", ctx.inited);
            }
        }, directives: [i4.NgIf, i3$2.NzIconDirective, i4.NgForOf, i4.NgClass], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MSRegionComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ms-region',
                        templateUrl: './region.component.html',
                        host: {
                            '[class.alain-ms__topbar-item]': 'true',
                            '[class.alain-ms__topbar-dd]': 'true',
                            '[class.alain-ms__region]': 'true',
                        },
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], function () { return [{ type: MSRegionService }, { type: i0.ChangeDetectorRef }]; }, null);
    })();

    var _c0$2 = ["ipt"];
    function MSSearchComponent_nz_auto_option_7_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "nz-auto-option", 8);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r3 = ctx.$implicit;
            i0.ɵɵproperty("nzValue", item_r3);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", item_r3, " ");
        }
    }
    var _c1$1 = function (a0) { return { "alain-ms__search-active": a0 }; };
    var MSSearchComponent = /** @class */ (function () {
        function MSSearchComponent(http, srv, cdr) {
            var _this = this;
            this.srv = srv;
            this.cdr = cdr;
            this.show = false;
            this.q = '';
            this.search$ = new rxjs.Subject();
            this.list = [];
            this.search$
                .pipe(operators.debounceTime(300), operators.distinctUntilChanged(), operators.switchMap(function (q) { return http.get('/user', { no: q, pi: 1, ps: 5 }); }))
                .subscribe(function (res) {
                _this.list = res.list;
                _this.cdr.detectChanges();
            });
        }
        Object.defineProperty(MSSearchComponent.prototype, "l", {
            get: function () {
                return this.srv.getNav('search');
            },
            enumerable: false,
            configurable: true
        });
        MSSearchComponent.prototype._click = function () {
            this.ipt.nativeElement.focus();
            this.show = true;
        };
        MSSearchComponent.prototype.ngOnDestroy = function () {
            this.search$.unsubscribe();
        };
        return MSSearchComponent;
    }());
    MSSearchComponent.ɵfac = function MSSearchComponent_Factory(t) { return new (t || MSSearchComponent)(i0.ɵɵdirectiveInject(i3._HttpClient), i0.ɵɵdirectiveInject(MSTopbarService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    MSSearchComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MSSearchComponent, selectors: [["ms-search"]], viewQuery: function MSSearchComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c0$2, 3);
            }
            if (rf & 2) {
                var _t = void 0;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.ipt = _t.first);
            }
        }, hostVars: 4, hostBindings: function MSSearchComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("click", function MSSearchComponent_click_HostBindingHandler() { return ctx._click(); });
            }
            if (rf & 2) {
                i0.ɵɵclassProp("alain-ms__topbar-item", true)("mr-md", true);
            }
        }, decls: 8, vars: 7, consts: [[1, "alain-ms__search", 3, "ngClass"], ["nz-input", "", 1, "alain-ms__search-ipt", 3, "placeholder", "ngModel", "nzAutocomplete", "ngModelChange", "input", "blur"], ["ipt", ""], ["nz-icon", "", "nzType", "search", 1, "alain-ms__search-icon"], [1, "alain-ms__search-outline"], [1, "asdlfkjlj"], ["searchAuto", ""], [3, "nzValue", 4, "ngFor", "ngForOf"], [3, "nzValue"]], template: function MSSearchComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "input", 1, 2);
                i0.ɵɵlistener("ngModelChange", function MSSearchComponent_Template_input_ngModelChange_1_listener($event) { return ctx.q = $event; })("input", function MSSearchComponent_Template_input_input_1_listener($event) { return ctx.search$.next($event.target == null ? null : $event.target.value); })("blur", function MSSearchComponent_Template_input_blur_1_listener() { return ctx.show = false; });
                i0.ɵɵelementEnd();
                i0.ɵɵelement(3, "i", 3);
                i0.ɵɵelement(4, "i", 4);
                i0.ɵɵelementStart(5, "nz-autocomplete", 5, 6);
                i0.ɵɵtemplate(7, MSSearchComponent_nz_auto_option_7_Template, 2, 2, "nz-auto-option", 7);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r1 = i0.ɵɵreference(6);
                i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(5, _c1$1, ctx.show));
                i0.ɵɵadvance(1);
                i0.ɵɵpropertyInterpolate("placeholder", ctx.l.placeholder);
                i0.ɵɵproperty("ngModel", ctx.q)("nzAutocomplete", _r1);
                i0.ɵɵadvance(6);
                i0.ɵɵproperty("ngForOf", ctx.list);
            }
        }, directives: [i4.NgClass, i4$2.NzInputDirective, i5$1.DefaultValueAccessor, i6.NzAutocompleteTriggerDirective, i5$1.NgControlStatus, i5$1.NgModel, i3$2.NzIconDirective, i6.NzAutocompleteComponent, i4.NgForOf, i6.NzAutocompleteOptionComponent], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MSSearchComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ms-search',
                        templateUrl: './search.component.html',
                        host: {
                            '[class.alain-ms__topbar-item]': 'true',
                            '[class.mr-md]': 'true',
                        },
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], function () { return [{ type: i3._HttpClient }, { type: MSTopbarService }, { type: i0.ChangeDetectorRef }]; }, { ipt: [{
                    type: i0.ViewChild,
                    args: ['ipt', { static: true }]
                }], _click: [{
                    type: i0.HostListener,
                    args: ['click']
                }] });
    })();

    function MSUserComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r4_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "a", 2);
            i0.ɵɵlistener("click", function MSUserComponent_ng_template_0_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r4_1); var ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.initLogin(); });
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "abpLocalization");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, "AbpAccount::Login"));
        }
    }
    function MSUserComponent_div_2_div_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r8_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelementStart(1, "span", 4);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "div", 5);
            i0.ɵɵelementStart(4, "div", 6);
            i0.ɵɵelementStart(5, "div", 7);
            i0.ɵɵelementStart(6, "span", 8);
            i0.ɵɵtext(7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "div", 9);
            i0.ɵɵelementStart(9, "a", 10);
            i0.ɵɵelement(10, "i", 11);
            i0.ɵɵtext(11);
            i0.ɵɵpipe(12, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "div", 12);
            i0.ɵɵelementStart(14, "a", 13);
            i0.ɵɵlistener("click", function MSUserComponent_div_2_div_1_Template_a_click_14_listener() { i0.ɵɵrestoreView(_r8_1); var ctx_r7 = i0.ɵɵnextContext(2); return ctx_r7.logout(); });
            i0.ɵɵtext(15);
            i0.ɵɵpipe(16, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var currentUser_r5 = i0.ɵɵnextContext().ngIf;
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", currentUser_r5.userName, " ");
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(currentUser_r5.userName);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(12, 4, "AbpAccount::ManageYourProfile"), " ");
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(16, 6, "AbpUi::Logout"));
        }
    }
    function MSUserComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵtemplate(1, MSUserComponent_div_2_div_1_Template, 17, 8, "div", 3);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var currentUser_r5 = ctx.ngIf;
            i0.ɵɵnextContext();
            var _r0 = i0.ɵɵreference(1);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", currentUser_r5.isAuthenticated)("ngIfElse", _r0);
        }
    }
    var MSUserComponent = /** @class */ (function () {
        function MSUserComponent(authService, router, configStateService, srv, settings) {
            this.authService = authService;
            this.router = router;
            this.configStateService = configStateService;
            this.settings = settings;
            this.currentUser$ = this.configStateService.getOne$('currentUser');
        }
        MSUserComponent.prototype.initLogin = function () {
            this.authService.initLogin();
        };
        MSUserComponent.prototype.logout = function () {
            var _this = this;
            this.authService.logout().subscribe(function () {
                _this.router.navigate(['/'], { state: { redirectUrl: _this.router.url } });
            });
        };
        return MSUserComponent;
    }());
    MSUserComponent.ɵfac = function MSUserComponent_Factory(t) { return new (t || MSUserComponent)(i0.ɵɵdirectiveInject(i1$2.AuthService), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i1.ConfigStateService), i0.ɵɵdirectiveInject(MSTopbarService), i0.ɵɵdirectiveInject(i3.SettingsService)); };
    MSUserComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MSUserComponent, selectors: [["ms-user"]], hostVars: 6, hostBindings: function MSUserComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵclassProp("alain-ms__topbar-item", true)("alain-ms__topbar-dd", true)("alain-ms__user", true);
            }
        }, decls: 4, vars: 3, consts: [["loginBtnTpl", ""], [4, "ngIf"], [1, "alain-ms__topbar-item-btn", 3, "click"], [4, "ngIf", "ngIfElse"], [1, "alain-ms__topbar-item-btn"], [1, "alain-ms__topbar-dd-menu", "width-md"], [1, "alain-ms__user-hd"], [1, "d-flex"], [1, "ml-md"], [1, "alain-ms__user-bd"], ["routerLink", "/account/manage-profile", 1, "alain-ms__user-bd-item"], ["nz-icon", "", "nzType", "safety"], [1, "alain-ms__user-fd"], [1, "d-block", "pt-sm", "pb-xs", "text-center", 3, "click"]], template: function MSUserComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, MSUserComponent_ng_template_0_Template, 3, 3, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵtemplate(2, MSUserComponent_div_2_Template, 2, 2, "div", 1);
                i0.ɵɵpipe(3, "async");
            }
            if (rf & 2) {
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(3, 1, ctx.currentUser$));
            }
        }, directives: [i4.NgIf, i2.RouterLinkWithHref, i3$2.NzIconDirective], pipes: [i4.AsyncPipe, i1.LocalizationPipe], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MSUserComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ms-user',
                        templateUrl: './user.component.html',
                        host: {
                            '[class.alain-ms__topbar-item]': 'true',
                            '[class.alain-ms__topbar-dd]': 'true',
                            '[class.alain-ms__user]': 'true',
                        },
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], function () { return [{ type: i1$2.AuthService }, { type: i2.Router }, { type: i1.ConfigStateService }, { type: MSTopbarService }, { type: i3.SettingsService }]; }, null);
    })();

    var RoutesProcessor = /** @class */ (function () {
        function RoutesProcessor(injector) {
            this.injector = injector;
        }
        Object.defineProperty(RoutesProcessor.prototype, "routesService", {
            get: function () {
                return this.injector.get(i1.RoutesService);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RoutesProcessor.prototype, "localizationPipe", {
            get: function () {
                return this.injector.get(i1.LocalizationPipe);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RoutesProcessor.prototype, "CurrentUrl", {
            get: function () {
                var current_url = this.RouterState.url.split('?')[0];
                return decodeURI(current_url);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RoutesProcessor.prototype, "CurrentRoute", {
            get: function () {
                var _this = this;
                var result = this.routesService.find(function (x) { return _this.formatParams(x.path) === _this.CurrentUrl; });
                return result;
            },
            enumerable: false,
            configurable: true
        });
        RoutesProcessor.prototype.MergeRouteData = function (prop, defaultValue) {
            var result = defaultValue;
            var targetRoutes = [];
            var route = this.CurrentRoute;
            if (!route)
                return [];
            pushNode(route);
            while (!!route.parent) {
                route = route.parent;
                pushNode(route);
            }
            var stack = targetRoutes;
            while (stack.length !== 0) {
                var node = stack.pop();
                result = Object.assign(Object.assign({}, result), node[prop]);
            }
            return result;
            function pushNode(node) {
                if (!!node && node.hasOwnProperty(prop)) {
                    targetRoutes.push(node);
                }
            }
        };
        Object.defineProperty(RoutesProcessor.prototype, "Category$", {
            get: function () {
                var _this = this;
                return this.routesService.visible$.pipe(operators.map(function (x) {
                    if (x.length === 0)
                        return;
                    return x
                        .filter(function (y) { return y.name === "AbpUiNavigation::Menu:Administration" /* Administration */ &&
                        !_this.routesService.hide(y); })
                        .map(function (r) { return r.children; })
                        .reduce(function (a, b) { return a.concat(b); })
                        .map(function (r) {
                        var category = {
                            id: r.name,
                            name: _this.localizationPipe.transform(r.name),
                            icon: r.iconClass,
                            products: [],
                            link: r.path,
                        };
                        category.products = r.children
                            .filter(function (c) { return !_this.routesService.hide(c); })
                            .map(function (c) {
                            var product = {
                                productId: c.name,
                                name: _this.localizationPipe.transform(c.name),
                                link: c.path,
                                icon: c.iconClass,
                                id: c.name,
                            };
                            return product;
                        });
                        return category;
                    });
                }));
            },
            enumerable: false,
            configurable: true
        });
        RoutesProcessor.prototype.GetPageNavs = function (routerState, nav) {
            if (!this.CurrentRoute)
                return [];
            var pageNavs = [];
            this.RouterState = routerState;
            var target;
            target = this.routesService.find(function (x) { return x.name == nav.name; });
            if (!!target) {
                pageNavs.push.apply(pageNavs, __spread(this.transMenu(target)));
            }
            return pageNavs;
        };
        RoutesProcessor.prototype.transMenu = function (first, recursive) {
            var _this = this;
            if (recursive === void 0) { recursive = true; }
            var result = [];
            first.children
                .filter(function (r) { return !_this.routesService.hide(r); })
                .forEach(function (second) {
                var _a;
                var left = {
                    text: second.displayName || _this.localizationPipe.transform(second.name),
                    link: _this.formatParams(second.path),
                    icon: second.iconClass,
                    children: [],
                };
                if (((_a = second === null || second === void 0 ? void 0 : second.children) === null || _a === void 0 ? void 0 : _a.length) > 0 && recursive) {
                    left.children = _this.transMenu(second, false);
                }
                result.push(left);
            });
            return result;
        };
        RoutesProcessor.prototype.formatParams = function (text, router) {
            var _this = this;
            if (router === void 0) { router = this.RouterState.root; }
            if (!text)
                return '';
            var regexp = /:([^(:\/\-\ )]+)/g;
            var result = text;
            var match = text.match(regexp);
            if (!!match) {
                text.match(regexp).forEach(function (i) {
                    var _a;
                    var parameter = i.substr(1);
                    var itemId = (_a = _this.findRouter(function (x) { return parameter in x.params; }, [router])) === null || _a === void 0 ? void 0 : _a.params[parameter];
                    result = result.replace(':' + parameter, itemId);
                });
            }
            return result;
        };
        RoutesProcessor.prototype.findRouter = function (predicate, routers) {
            var _this = this;
            return routers.reduce(function (acc, node) { return acc
                ? acc
                : predicate(node)
                    ? node
                    : _this.findRouter(predicate, node.children); }, null);
        };
        return RoutesProcessor;
    }());

    var LayoutStateService = /** @class */ (function () {
        function LayoutStateService(injector, localizationPipe) {
            this.injector = injector;
            this.localizationPipe = localizationPipe;
            this.store = new i1.InternalStore({
                isFetching: false,
                categories: [],
                navConfig: exports.Layout.defaultNavConfig,
                sidebarConfig: exports.Layout.defaultSidebarConfig,
                pageNavs: [],
            });
            this.routesProcessor = new RoutesProcessor(this.injector);
            this.listenRoutes();
        }
        LayoutStateService.prototype.getStore$ = function () {
            return this.store.sliceState(function (state) { return state; });
        };
        LayoutStateService.prototype.getFetching$ = function () {
            return this.store.sliceState(function (_c) {
                var isFetching = _c.isFetching;
                return isFetching;
            });
        };
        LayoutStateService.prototype.getCategories = function () {
            return this.store.state.categories;
        };
        LayoutStateService.prototype.getCategories$ = function () {
            return this.store.sliceState(function (state) { return state.categories; });
        };
        LayoutStateService.prototype.getShortcuts = function () {
            var categories = this.getCategories();
            var result = [];
            categories.forEach(function (p) {
                result.push(p);
            });
            return result;
        };
        LayoutStateService.prototype.getShortcuts$ = function () {
            return this.getCategories$().pipe(operators.map(function (x) {
                var result = [];
                x.forEach(function (p) {
                    result.push(p);
                });
                return result;
            }));
        };
        LayoutStateService.prototype.getNavConfig = function () {
            return this.store.state.navConfig;
        };
        LayoutStateService.prototype.getNavConfig$ = function () {
            return this.store.sliceState(function (state) { return state.navConfig; });
        };
        LayoutStateService.prototype.getPageNavs$ = function () {
            return this.store.sliceState(function (state) { return state.pageNavs; });
        };
        LayoutStateService.prototype.getPageNavs = function () {
            return this.store.state.pageNavs;
        };
        LayoutStateService.prototype.setStore = function (state) {
            this.store.patch(Object.assign({}, state));
        };
        LayoutStateService.prototype.setFetching = function (isFetching) {
            this.store.patch({ isFetching: isFetching });
        };
        LayoutStateService.prototype.setNavConfig = function (navConfig) {
            this.store.patch({ navConfig: navConfig });
            var pageNavs;
            if (navConfig.name !== "AbpUiNavigation::Menu:Administration" /* Administration */) {
                pageNavs = this.routesProcessor.GetPageNavs(this.routesProcessor.RouterState, navConfig);
                this.store.state.sidebarConfig.hasPageNav = true;
            }
            else {
                this.store.state.sidebarConfig.hasPageNav = false;
            }
            this.store.patch({
                pageNavs: pageNavs,
                sidebarConfig: this.store.state.sidebarConfig,
            });
        };
        LayoutStateService.prototype.fetchPageNavs = function (routerState) {
            var _a, _b;
            this.routesProcessor.RouterState = routerState;
            var navConfig = this.routesProcessor.MergeRouteData('navConfig', Object.assign(Object.assign({}, exports.Layout.defaultNavConfig), { name: (_b = (_a = this.routesProcessor.CurrentRoute) === null || _a === void 0 ? void 0 : _a.parentName) !== null && _b !== void 0 ? _b : "" //eTicketRouteNames.Ticket//
            }));
            var sidebarConfig = this.routesProcessor.MergeRouteData('sidebarConfig', exports.Layout.defaultSidebarConfig);
            this.setStore({
                sidebarConfig: sidebarConfig,
            });
            this.setNavConfig(navConfig);
        };
        LayoutStateService.prototype.listenRoutes = function () {
            var _this = this;
            this.routesProcessor.Category$.subscribe(function (categories) {
                if (!!_this.routesProcessor.RouterState) {
                    _this.fetchPageNavs(_this.routesProcessor.RouterState);
                }
                _this.store.patch({
                    categories: categories,
                });
            });
        };
        return LayoutStateService;
    }());
    LayoutStateService.ɵfac = function LayoutStateService_Factory(t) { return new (t || LayoutStateService)(i0.ɵɵinject(i0.Injector), i0.ɵɵinject(i1.LocalizationPipe)); };
    LayoutStateService.ɵprov = i0.ɵɵdefineInjectable({ token: LayoutStateService, factory: LayoutStateService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LayoutStateService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root',
                    }]
            }], function () { return [{ type: i0.Injector }, { type: i1.LocalizationPipe }]; }, null);
    })();

    var MSProductService = /** @class */ (function () {
        function MSProductService(layoutSateService) {
            this.layoutSateService = layoutSateService;
        }
        Object.defineProperty(MSProductService.prototype, "data", {
            get: function () {
                return this._data;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MSProductService.prototype, "i18n", {
            get: function () {
                return {
                    showAll: true,
                    keywords: '請輸入關鍵詞',
                    allProduct: '查詢全部産品',
                    show: true,
                    hasResult: '以下是與“<strong>{filterTxt}</strong>”相關的産品：',
                    noResult: '未找到與“<strong>{filterTxt}</strong>”相關的産品。',
                    text: '産品與服務',
                    recent: '最近訪問',
                };
            },
            enumerable: false,
            configurable: true
        });
        MSProductService.prototype.getData = function () {
            var _this = this;
            return this.layoutSateService.getCategories$().pipe(operators.tap(function (x) {
                _this._data = x;
            }));
        };
        MSProductService.prototype.search = function (q) {
            var column = 3;
            var list = [[], [], []];
            // Process search key
            var oldList = i3$1.deepCopy(this._data);
            if (q) {
                oldList = oldList.map(function (p) {
                    var _a;
                    p.products = (_a = p.products) === null || _a === void 0 ? void 0 : _a.filter(function (w) {
                        return w.name.includes(q) || w.id.includes(q);
                    });
                    return p;
                });
            }
            // Clean empty children category
            var categories = [];
            var MockID = 0;
            oldList
                .filter(function (w) { return w.products.length > 0; })
                .forEach(function (i, idx) {
                i._id = ++MockID;
                list[idx % column].push(i);
                // Collecting category data
                if (categories.findIndex(function (w) { return w.name === i.name; }) === -1) {
                    categories.push({ _id: i._id, name: i.name });
                }
            });
            return { list: list, categories: categories };
        };
        return MSProductService;
    }());
    MSProductService.ɵfac = function MSProductService_Factory(t) { return new (t || MSProductService)(i0.ɵɵinject(LayoutStateService)); };
    MSProductService.ɵprov = i0.ɵɵdefineInjectable({ token: MSProductService, factory: MSProductService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MSProductService, [{
                type: i0.Injectable,
                args: [{ providedIn: 'root' }]
            }], function () { return [{ type: LayoutStateService }]; }, null);
    })();

    var _c0$3 = ["categoryEl"];
    function MSSidebarComponent_ng_container_0_div_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r8_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 17);
            i0.ɵɵlistener("click", function MSSidebarComponent_ng_container_0_div_2_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r8_1); var ctx_r7 = i0.ɵɵnextContext(2); return ctx_r7.showProduct = !ctx_r7.showProduct; });
            i0.ɵɵelementStart(1, "div", 18);
            i0.ɵɵelement(2, "i", 19);
            i0.ɵɵelementStart(3, "span", 20);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "span", 21);
            i0.ɵɵelement(6, "i", 22);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx_r2.l.text);
        }
    }
    function MSSidebarComponent_ng_container_0_li_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r12_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "li", 23);
            i0.ɵɵelementStart(1, "i", 24);
            i0.ɵɵlistener("linkToChanged", function MSSidebarComponent_ng_container_0_li_4_Template_i_linkToChanged_1_listener() { i0.ɵɵrestoreView(_r12_1); var ctx_r11 = i0.ɵɵnextContext(2); return ctx_r11.showProduct = false; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "a", 25);
            i0.ɵɵlistener("linkToChanged", function MSSidebarComponent_ng_container_0_li_4_Template_a_linkToChanged_2_listener() { i0.ɵɵrestoreView(_r12_1); var ctx_r13 = i0.ɵɵnextContext(2); return ctx_r13.showProduct = false; });
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var i_r9 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵclassMapInterpolate1("alain-ms__sidebar-product-icon ", i_r9.icon, " ");
            i0.ɵɵproperty("link-to", i_r9);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("link-to", i_r9);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", i_r9.name, " ");
        }
    }
    var _c1$2 = function (a0) { return { "alain-ms__products-category-item-active": a0 }; };
    function MSSidebarComponent_ng_container_0_div_14_div_1_li_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r20_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "li", 32);
            i0.ɵɵelementStart(1, "a", 33);
            i0.ɵɵlistener("linkToChanged", function MSSidebarComponent_ng_container_0_div_14_div_1_li_4_Template_a_linkToChanged_1_listener() { i0.ɵɵrestoreView(_r20_1); var ctx_r19 = i0.ɵɵnextContext(4); return ctx_r19.showProduct = false; });
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var i_r18 = ctx.$implicit;
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c1$2, i_r18.shortcut));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("link-to", i_r18);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(i_r18.name);
        }
    }
    function MSSidebarComponent_ng_container_0_div_14_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 28);
            i0.ɵɵelementStart(1, "h3", 29);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "ul", 30);
            i0.ɵɵtemplate(4, MSSidebarComponent_ng_container_0_div_14_div_1_li_4_Template, 3, 5, "li", 31);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var p_r16 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵpropertyInterpolate1("id", "product-cat-", p_r16._id, "");
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", p_r16.name, " ");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", p_r16.products);
        }
    }
    function MSSidebarComponent_ng_container_0_div_14_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 26);
            i0.ɵɵtemplate(1, MSSidebarComponent_ng_container_0_div_14_div_1_Template, 5, 3, "div", 27);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var c_r14 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", c_r14);
        }
    }
    function MSSidebarComponent_ng_container_0_nz_link_17_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "nz-link", 34);
        }
        if (rf & 2) {
            var i_r21 = ctx.$implicit;
            i0.ɵɵpropertyInterpolate1("nzHref", "#product-cat-", i_r21._id, "");
            i0.ɵɵproperty("nzTitle", i_r21.name);
        }
    }
    function MSSidebarComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r23_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵtemplate(2, MSSidebarComponent_ng_container_0_div_2_Template, 7, 1, "div", 2);
            i0.ɵɵelementStart(3, "ul", 3);
            i0.ɵɵtemplate(4, MSSidebarComponent_ng_container_0_li_4_Template, 4, 6, "li", 4);
            i0.ɵɵpipe(5, "async");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div", 5);
            i0.ɵɵelementStart(7, "div", 6);
            i0.ɵɵelementStart(8, "div", 7);
            i0.ɵɵlistener("click", function MSSidebarComponent_ng_container_0_Template_div_click_8_listener() { i0.ɵɵrestoreView(_r23_1); var ctx_r22 = i0.ɵɵnextContext(); return ctx_r22.showProduct = false; });
            i0.ɵɵelement(9, "i", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "div", 9);
            i0.ɵɵelementStart(11, "div", 10, 11);
            i0.ɵɵelementStart(13, "div", 12);
            i0.ɵɵtemplate(14, MSSidebarComponent_ng_container_0_div_14_Template, 2, 1, "div", 13);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "div", 14);
            i0.ɵɵelementStart(16, "nz-anchor", 15);
            i0.ɵɵtemplate(17, MSSidebarComponent_ng_container_0_nz_link_17_Template, 1, 2, "nz-link", 16);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var store_r1 = ctx.ngIf;
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", store_r1.sidebarConfig.hasProductNav);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(5, 4, ctx_r0.shortcuts$));
            i0.ɵɵadvance(10);
            i0.ɵɵproperty("ngForOf", ctx_r0.searchList);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx_r0.searchCategories);
        }
    }
    var MSSidebarComponent = /** @class */ (function () {
        function MSSidebarComponent(layoutStateService, brand, srv, cdr) {
            this.layoutStateService = layoutStateService;
            this.brand = brand;
            this.srv = srv;
            this.cdr = cdr;
            this.showProduct = false;
            this.inited = false;
            this.q = '';
            this.searchCategories = [];
            brand.setSidebar(true);
        }
        Object.defineProperty(MSSidebarComponent.prototype, "store$", {
            get: function () {
                return this.layoutStateService.getStore$();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MSSidebarComponent.prototype, "shortcuts$", {
            get: function () {
                return this.layoutStateService.getShortcuts$();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MSSidebarComponent.prototype, "l", {
            get: function () {
                return this.srv.i18n;
            },
            enumerable: false,
            configurable: true
        });
        MSSidebarComponent.prototype.search = function (scroll) {
            var _this = this;
            if (scroll === void 0) { scroll = true; }
            var res = this.srv.search(this.q);
            this.searchList = res.list;
            this.searchCategories = res.categories;
            this.cdr.detectChanges();
            if (scroll) {
                // wait angular render
                setTimeout(function () {
                    // 滚动至顶部
                    _this.categoryEl.nativeElement.scrollTop = 0;
                });
            }
        };
        MSSidebarComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            this.srv.getData().subscribe(function (x) {
                _this.inited = true;
                _this.search();
            });
        };
        MSSidebarComponent.prototype.ngOnDestroy = function () {
            this.brand.setSidebar(false);
        };
        return MSSidebarComponent;
    }());
    MSSidebarComponent.ɵfac = function MSSidebarComponent_Factory(t) { return new (t || MSSidebarComponent)(i0.ɵɵdirectiveInject(LayoutStateService), i0.ɵɵdirectiveInject(BrandService), i0.ɵɵdirectiveInject(MSProductService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    MSSidebarComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MSSidebarComponent, selectors: [["ms-sidebar"]], viewQuery: function MSSidebarComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c0$3, 1);
            }
            if (rf & 2) {
                var _t = void 0;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.categoryEl = _t.first);
            }
        }, hostVars: 4, hostBindings: function MSSidebarComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵclassProp("alain-ms__sidebar", true)("alain-ms__sidebar-showproduct", ctx.showProduct);
            }
        }, decls: 2, vars: 3, consts: [[4, "ngIf"], [1, "alain-ms__sidebar-wrap"], ["class", "alain-ms__sidebar-product-all", 3, "click", 4, "ngIf"], [1, "alain-ms__sidebar-product-quick"], ["class", "alain-ms__sidebar-product", 4, "ngFor", "ngForOf"], [1, "alain-ms__sidebar-products"], [1, "alain-ms__products"], [1, "alain-ms__products-close", 3, "click"], ["nz-icon", "", "nzType", "close"], [1, "alain-ms__products-left"], [1, "alain-ms__products-category-wrap"], ["categoryEl", ""], [1, "d-flex"], ["class", "alain-ms__products-category-column", 4, "ngFor", "ngForOf"], [1, "alain-ms__products-right"], ["nzAffix", "false", "nzContainer", ".alain-ms__products-category-wrap", "nzOffsetTop", "150", "nzShowInkInFixed", "false"], [3, "nzHref", "nzTitle", 4, "ngFor", "ngForOf"], [1, "alain-ms__sidebar-product-all", 3, "click"], [1, "alain-ms__sidebar-product", "alain-ms__sidebar-product-all-wrap"], ["nz-icon", "", "nzType", "appstore", 1, "alain-ms__sidebar-product-icon"], [1, "alain-ms__sidebar-product-name"], [1, "alain-ms__sidebar-product-toolbar"], ["nz-icon", "", "nzType", "right"], [1, "alain-ms__sidebar-product"], [3, "link-to", "linkToChanged"], [1, "alain-ms__sidebar-product-name", 3, "link-to", "linkToChanged"], [1, "alain-ms__products-category-column"], ["class", "alain-ms__products-category", 4, "ngFor", "ngForOf"], [1, "alain-ms__products-category"], [1, "alain-ms__products-category-title", 3, "id"], [1, "list-unstyled"], ["class", "alain-ms__products-category-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "alain-ms__products-category-item", 3, "ngClass"], [1, "alain-ms__products-category-item-link", 3, "link-to", "linkToChanged"], [3, "nzHref", "nzTitle"]], template: function MSSidebarComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, MSSidebarComponent_ng_container_0_Template, 18, 6, "ng-container", 0);
                i0.ɵɵpipe(1, "async");
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.store$));
            }
        }, directives: [i4.NgIf, i4.NgForOf, i3$2.NzIconDirective, i6$1.NzAnchorComponent, MSLinkToDirective, i4.NgClass, i6$1.NzAnchorLinkComponent], pipes: [i4.AsyncPipe], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MSSidebarComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ms-sidebar',
                        templateUrl: './sidebar.component.html',
                        host: {
                            '[class.alain-ms__sidebar]': 'true',
                            '[class.alain-ms__sidebar-showproduct]': 'showProduct',
                        },
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], function () { return [{ type: LayoutStateService }, { type: BrandService }, { type: MSProductService }, { type: i0.ChangeDetectorRef }]; }, { categoryEl: [{
                    type: i0.ViewChild,
                    args: ['categoryEl', { static: false }]
                }] });
    })();

    function MSTopbarComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "img", 8);
        }
    }
    function MSTopbarComponent_ms_all_nav_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "ms-all-nav");
        }
    }
    function MSTopbarComponent_img_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "img", 9);
        }
        if (rf & 2) {
            var ctx_r3 = i0.ɵɵnextContext();
            i0.ɵɵproperty("src", ctx_r3.appInfo.logoUrl, i0.ɵɵsanitizeUrl);
        }
    }
    function MSTopbarComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 10);
            i0.ɵɵelement(1, "ms-langs");
            i0.ɵɵelement(2, "ms-user");
            i0.ɵɵelementEnd();
        }
    }
    var MSTopbarComponent = /** @class */ (function () {
        function MSTopbarComponent(srv, 
        //  public userSrv: UserService,
        cdr, environment) {
            this.srv = srv;
            this.cdr = cdr;
            this.environment = environment;
            this.inited = false;
            this.allNav = false;
        }
        Object.defineProperty(MSTopbarComponent.prototype, "appInfo", {
            get: function () {
                return this.environment.getEnvironment().application;
            },
            enumerable: false,
            configurable: true
        });
        MSTopbarComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.srv.getData().subscribe(function () {
                _this.inited = true;
                _this.mergeLinks();
                _this.cdr.detectChanges();
            });
        };
        MSTopbarComponent.prototype.mergeLinks = function () {
            var res = this.srv.data.navLinks;
            this.links = [res.finance, res.workorder, res.support].map(function (i) {
                if (i.className == null) {
                    i.className = '';
                }
                if (!i.links || i.links.length === 0) {
                    i.links = undefined;
                }
                else {
                    i.className += ' alain-ms__topbar-dd';
                }
                return i;
            });
        };
        return MSTopbarComponent;
    }());
    MSTopbarComponent.ɵfac = function MSTopbarComponent_Factory(t) { return new (t || MSTopbarComponent)(i0.ɵɵdirectiveInject(MSTopbarService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.EnvironmentService)); };
    MSTopbarComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MSTopbarComponent, selectors: [["ms-topbar"]], hostVars: 4, hostBindings: function MSTopbarComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵclassProp("alain-ms__topbar", true)("alain-ms__topbar-single", ctx.allNav);
            }
        }, inputs: { allNav: "allNav" }, decls: 10, vars: 5, consts: [["defaultLogo", ""], [1, "alain-ms__topbar-main"], [4, "ngIf"], [1, "alain-ms__topbar-logo"], ["routerLink", "/", 1, "alain-ms__topbar-logo-img"], [3, "src", 4, "ngIf", "ngIfElse"], ["routerLink", "/", 1, "alain-ms__topbar-logo-link"], ["class", "alain-ms__topbar-widget", 4, "ngIf"], ["src", "./assets/logo-color.svg"], [3, "src"], [1, "alain-ms__topbar-widget"]], template: function MSTopbarComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, MSTopbarComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵelementStart(2, "div", 1);
                i0.ɵɵtemplate(3, MSTopbarComponent_ms_all_nav_3_Template, 1, 0, "ms-all-nav", 2);
                i0.ɵɵelementStart(4, "div", 3);
                i0.ɵɵelementStart(5, "a", 4);
                i0.ɵɵtemplate(6, MSTopbarComponent_img_6_Template, 1, 1, "img", 5);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(7, "a", 6);
                i0.ɵɵtext(8);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(9, MSTopbarComponent_div_9_Template, 3, 0, "div", 7);
            }
            if (rf & 2) {
                var _r0 = i0.ɵɵreference(1);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("ngIf", ctx.allNav);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("ngIf", ctx.appInfo.logoUrl)("ngIfElse", _r0);
                i0.ɵɵadvance(2);
                i0.ɵɵtextInterpolate1(" ", ctx.appInfo.name, " ");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.inited);
            }
        }, directives: [i4.NgIf, i2.RouterLinkWithHref, MSAllNavComponent, MSLangsComponent, MSUserComponent], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MSTopbarComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ms-topbar',
                        templateUrl: './topbar.component.html',
                        host: {
                            '[class.alain-ms__topbar]': 'true',
                            '[class.alain-ms__topbar-single]': 'allNav',
                        },
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], function () { return [{ type: MSTopbarService }, { type: i0.ChangeDetectorRef }, { type: i1.EnvironmentService }]; }, { allNav: [{
                    type: i0.Input
                }] });
    })();

    function MSHelpComponent_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
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
        }
    }
    var MSHelpComponent = /** @class */ (function () {
        function MSHelpComponent() {
        }
        return MSHelpComponent;
    }());
    MSHelpComponent.ɵfac = function MSHelpComponent_Factory(t) { return new (t || MSHelpComponent)(); };
    MSHelpComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MSHelpComponent, selectors: [["help"]], hostVars: 2, hostBindings: function MSHelpComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵclassProp("ms-help", true);
            }
        }, decls: 5, vars: 1, consts: [["nz-popover", "", "nzPopoverTrigger", "click", 1, "ms-help__wrap", 3, "nzPopoverContent"], [1, "ms-help__text"], ["helpTpl", ""], [1, "d-flex", "align-items-center", "mb-sm"], ["nz-icon", "", "nzType", "phone", 1, "mr-sm", "text-xl"], ["routerLink", "/"], [1, "text-orange", "text-xs"], ["nz-icon", "", "nzType", "customer-service", 1, "mr-sm", "text-xl"], ["routerLink", "/smart"], [1, "text-grey", "text-xs"], [1, "d-flex", "align-items-center"], ["nz-icon", "", "nzType", "edit", 1, "mr-sm", "text-xl"]], template: function MSHelpComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "span", 1);
                i0.ɵɵtext(2, " \u54A8\u8BE2\u00B7\u5EFA\u8BAE ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(3, MSHelpComponent_ng_template_3_Template, 18, 0, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
            }
            if (rf & 2) {
                var _r0 = i0.ɵɵreference(4);
                i0.ɵɵproperty("nzPopoverContent", _r0);
            }
        }, directives: [i1$3.NzPopoverDirective, i3$2.NzIconDirective, i2.RouterLinkWithHref], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MSHelpComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'help',
                        templateUrl: './help.component.html',
                        host: {
                            '[class.ms-help]': 'true',
                        },
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], null, null);
    })();

    function MSPageBarComponent_h2_1_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "abpLocalization");
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, ctx_r2.title));
        }
    }
    function MSPageBarComponent_h2_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "h2", 4);
            i0.ɵɵtemplate(1, MSPageBarComponent_h2_1_ng_container_1_Template, 3, 3, "ng-container", 5);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r0.title);
        }
    }
    function MSPageBarComponent_div_2_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "abpLocalization");
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r3 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, ctx_r3.subTitle));
        }
    }
    function MSPageBarComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 6);
            i0.ɵɵtemplate(1, MSPageBarComponent_div_2_ng_container_1_Template, 3, 3, "ng-container", 5);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r1.subTitle);
        }
    }
    var _c0$4 = ["*"];
    var MSPageBarComponent = /** @class */ (function () {
        // #endregion
        function MSPageBarComponent(router, srv, menuSrv, cdr) {
            this.router = router;
            this.srv = srv;
            this.menuSrv = menuSrv;
            this.cdr = cdr;
            this._menus = null;
            // #region fields
            /**
             * 自动生成标题，以当前路由从主菜单中定位
             */
            this.autoTitle = true;
            this.recursiveBreadcrumb = true;
        }
        Object.defineProperty(MSPageBarComponent.prototype, "menus", {
            get: function () {
                if (this._menus) {
                    return this._menus;
                }
                this._menus = this.menuSrv.getPathByUrl(this.router.url.split('?')[0], this.recursiveBreadcrumb);
                return this._menus;
            },
            enumerable: false,
            configurable: true
        });
        MSPageBarComponent.prototype.setTitle = function () {
            if (typeof this.title === 'undefined' && this.autoTitle && this.menus.length > 0) {
                var item = this.menus[this.menus.length - 1];
                this.title = item.text;
            }
            this.cdr.detectChanges();
        };
        MSPageBarComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            this.router$ = rxjs.merge(this.router.events.pipe(operators.filter(function (e) { return e instanceof i2.NavigationEnd; })), this.srv.notify, this.menuSrv.change).subscribe(function () {
                _this._menus = null;
                _this.setTitle();
            });
        };
        MSPageBarComponent.prototype.ngOnDestroy = function () {
            this.router$.unsubscribe();
        };
        return MSPageBarComponent;
    }());
    MSPageBarComponent.ɵfac = function MSPageBarComponent_Factory(t) { return new (t || MSPageBarComponent)(i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(BrandService), i0.ɵɵdirectiveInject(i3.MenuService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    MSPageBarComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MSPageBarComponent, selectors: [["page-bar"]], hostVars: 2, hostBindings: function MSPageBarComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵclassProp("ms-page-bar", true);
            }
        }, inputs: { autoTitle: "autoTitle", recursiveBreadcrumb: "recursiveBreadcrumb", title: "title", subTitle: "subTitle" }, ngContentSelectors: _c0$4, decls: 5, vars: 2, consts: [[1, "ms-page-bar__title"], ["class", "ms-page-bar__title-main", 4, "ngIf"], ["class", "ms-page-bar__title-sub", 4, "ngIf"], [1, "ms-page-bar__action"], [1, "ms-page-bar__title-main"], [4, "nzStringTemplateOutlet"], [1, "ms-page-bar__title-sub"]], template: function MSPageBarComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵtemplate(1, MSPageBarComponent_h2_1_Template, 2, 1, "h2", 1);
                i0.ɵɵtemplate(2, MSPageBarComponent_div_2_Template, 2, 1, "div", 2);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "div", 3);
                i0.ɵɵprojection(4);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.title);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.subTitle);
            }
        }, directives: [i4.NgIf, i5$2.NzStringTemplateOutletDirective], pipes: [i1.LocalizationPipe], encapsulation: 2, changeDetection: 0 });
    __decorate([
        i3$1.InputBoolean(),
        __metadata("design:type", Object)
    ], MSPageBarComponent.prototype, "autoTitle", void 0);
    __decorate([
        i3$1.InputBoolean(),
        __metadata("design:type", Object)
    ], MSPageBarComponent.prototype, "recursiveBreadcrumb", void 0);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MSPageBarComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'page-bar',
                        templateUrl: './page-bar.component.html',
                        host: {
                            '[class.ms-page-bar]': 'true',
                        },
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], function () { return [{ type: i2.Router }, { type: BrandService }, { type: i3.MenuService }, { type: i0.ChangeDetectorRef }]; }, { autoTitle: [{
                    type: i0.Input
                }], recursiveBreadcrumb: [{
                    type: i0.Input
                }], title: [{
                    type: i0.Input
                }], subTitle: [{
                    type: i0.Input
                }] });
    })();

    function MSPageNavComponent_i_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "i", 14);
        }
    }
    function MSPageNavComponent_ng_template_9_li_0_ng_container_1_div_1_span_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 23);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var i_r7 = i0.ɵɵnextContext(3).$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(i_r7.badge);
        }
    }
    function MSPageNavComponent_ng_template_9_li_0_ng_container_1_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 19);
            i0.ɵɵelement(1, "span", 20);
            i0.ɵɵelementStart(2, "span", 21);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, MSPageNavComponent_ng_template_9_li_0_ng_container_1_div_1_span_4_Template, 2, 1, "span", 22);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var i_r7 = i0.ɵɵnextContext(2).$implicit;
            i0.ɵɵpropertyInterpolate("routerLink", i_r7.link);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(i_r7.text);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", i_r7.badge);
        }
    }
    function MSPageNavComponent_ng_template_9_li_0_ng_container_1_a_2_span_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 23);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var i_r7 = i0.ɵɵnextContext(3).$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(i_r7.badge);
        }
    }
    function MSPageNavComponent_ng_template_9_li_0_ng_container_1_a_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "a", 24);
            i0.ɵɵelement(1, "span", 20);
            i0.ɵɵelementStart(2, "span", 21);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, MSPageNavComponent_ng_template_9_li_0_ng_container_1_a_2_span_4_Template, 2, 1, "span", 22);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var i_r7 = i0.ɵɵnextContext(2).$implicit;
            i0.ɵɵproperty("href", i_r7.externalLink, i0.ɵɵsanitizeUrl)("target", i_r7.target);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(i_r7.text);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", i_r7.badge);
        }
    }
    function MSPageNavComponent_ng_template_9_li_0_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, MSPageNavComponent_ng_template_9_li_0_ng_container_1_div_1_Template, 5, 3, "div", 17);
            i0.ɵɵtemplate(2, MSPageNavComponent_ng_template_9_li_0_ng_container_1_a_2_Template, 5, 4, "a", 18);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var i_r7 = i0.ɵɵnextContext().$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", i_r7.link);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !i_r7.link);
        }
    }
    function MSPageNavComponent_ng_template_9_li_0_ng_container_2_ng_container_7_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    var _c0$5 = function (a0) { return { "d-none": a0 }; };
    var _c1$3 = function (a0, a1) { return { $implicit: a0, level: a1 }; };
    function MSPageNavComponent_ng_template_9_li_0_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r22_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "div", 25);
            i0.ɵɵlistener("click", function MSPageNavComponent_ng_template_9_li_0_ng_container_2_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r22_1); var i_r7 = i0.ɵɵnextContext().$implicit; return i_r7.active = !i_r7.active; });
            i0.ɵɵelementStart(2, "span", 20);
            i0.ɵɵelement(3, "i", 26);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "span", 21);
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "ul", 27);
            i0.ɵɵtemplate(7, MSPageNavComponent_ng_template_9_li_0_ng_container_2_ng_container_7_Template, 1, 0, "ng-container", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var i_r7 = i0.ɵɵnextContext().$implicit;
            var level_r5 = i0.ɵɵnextContext().level;
            i0.ɵɵnextContext();
            var _r1 = i0.ɵɵreference(10);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("nzType", i_r7.active ? "caret-down" : "caret-right");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(i_r7.text);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(5, _c0$5, !i_r7.active));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", _r1)("ngTemplateOutletContext", i0.ɵɵpureFunction2(7, _c1$3, i_r7.children, level_r5 + 1));
        }
    }
    function MSPageNavComponent_ng_template_9_li_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "li");
            i0.ɵɵtemplate(1, MSPageNavComponent_ng_template_9_li_0_ng_container_1_Template, 3, 2, "ng-container", 16);
            i0.ɵɵtemplate(2, MSPageNavComponent_ng_template_9_li_0_ng_container_2_Template, 8, 10, "ng-container", 16);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var i_r7 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", i_r7.children.length == 0);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", i_r7.children.length > 0);
        }
    }
    function MSPageNavComponent_ng_template_9_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, MSPageNavComponent_ng_template_9_li_0_Template, 3, 2, "li", 15);
        }
        if (rf & 2) {
            var ls_r4 = ctx.$implicit;
            i0.ɵɵproperty("ngForOf", ls_r4);
        }
    }
    function MSPageNavComponent_ng_container_12_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    var _c2$1 = function (a0) { return { "ms-page-nav__back": a0 }; };
    var _c3$1 = function (a0) { return { $implicit: a0, level: 1 }; };
    var MSPageNavComponent = /** @class */ (function () {
        function MSPageNavComponent(srv, router, titSrv, menuSrv, 
        //@Inject(ALAIN_I18N_TOKEN) private i18n: I18NService,
        cdr) {
            this.srv = srv;
            this.router = router;
            this.titSrv = titSrv;
            this.menuSrv = menuSrv;
            this.cdr = cdr;
            this._config = {};
            this._menus = [];
        }
        Object.defineProperty(MSPageNavComponent.prototype, "config", {
            get: function () {
                return this._config;
            },
            set: function (val) {
                var title = val.title, titleI18n = val.titleI18n, backHref = val.backHref, doc = val.doc, docI18n = val.docI18n;
                // this.titSrv.setTitle(docI18n ? this.i18n.fanyi(docI18n) : doc);
                // this._config.title = titleI18n ? this.i18n.fanyi(titleI18n) : title;
                this._config.title = title;
                this._config.backHref = backHref || '';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MSPageNavComponent.prototype, "list", {
            get: function () {
                return this._menus;
            },
            set: function (list) {
                this.menuSrv.add(list);
                this.menuSrv.visit(list, function (i) { return (i.active = true); });
                this._menus = this.menuSrv.menus;
            },
            enumerable: false,
            configurable: true
        });
        MSPageNavComponent.prototype.to = function (url, e) {
            e.preventDefault();
            if (!url) {
                return;
            }
            this.router.navigateByUrl(url);
        };
        MSPageNavComponent.prototype.toggle = function () {
            this.srv.hideNav = !this.srv.hideNav;
            this.srv.triggerNotify('page-nav');
        };
        MSPageNavComponent.prototype.ngOnChanges = function () {
            this.cdr.detectChanges();
        };
        return MSPageNavComponent;
    }());
    MSPageNavComponent.ɵfac = function MSPageNavComponent_Factory(t) { return new (t || MSPageNavComponent)(i0.ɵɵdirectiveInject(BrandService), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i3.TitleService), i0.ɵɵdirectiveInject(i3.MenuService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    MSPageNavComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MSPageNavComponent, selectors: [["page-nav"]], inputs: { config: "config", list: "list" }, features: [i0.ɵɵNgOnChangesFeature], decls: 18, vars: 14, consts: [[1, "ms-page-nav__body"], [1, "ms-page-nav__stage"], [1, "ms-page-nav__scene", "ms-page-nav__scene-main"], [1, "ms-page-nav__title", 3, "ngClass", "title", "click"], ["nz-icon", "", "nzType", "left", 4, "ngIf"], [1, "ms-page-nav__list", "scrollbar"], ["treeTpl", ""], ["role", "tree", 1, "list-unstyled"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ms-page-nav__control", 3, "click"], [1, "ms-page-nav__control-wrap"], [1, "ms-page-nav__control-bg"], [1, "ms-page-nav__control-btn"], ["nz-icon", "", "nzType", "menu-fold"], ["nz-icon", "", "nzType", "left"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "ms-page-nav__item", "role", "treeitem", "routerLinkActive", "ms-page-nav__item-active", 3, "routerLink", 4, "ngIf"], ["class", "ms-page-nav__item", "role", "treeitem", 3, "href", "target", 4, "ngIf"], ["role", "treeitem", "routerLinkActive", "ms-page-nav__item-active", 1, "ms-page-nav__item", 3, "routerLink"], [1, "ms-page-nav__item-icon"], [1, "ms-page-nav__item-tit"], ["class", "ms-page-nav__item-badge", 4, "ngIf"], [1, "ms-page-nav__item-badge"], ["role", "treeitem", 1, "ms-page-nav__item", 3, "href", "target"], ["role", "treeitem", 1, "ms-page-nav__item", 3, "click"], ["nz-icon", "", 3, "nzType"], ["role", "tree", 1, "list-unstyled", 3, "ngClass"]], template: function MSPageNavComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "div", 1);
                i0.ɵɵelementStart(2, "div", 2);
                i0.ɵɵelementStart(3, "div", 3);
                i0.ɵɵlistener("click", function MSPageNavComponent_Template_div_click_3_listener($event) { return ctx.to(ctx.config.backHref, $event); });
                i0.ɵɵpipe(4, "i18n");
                i0.ɵɵtemplate(5, MSPageNavComponent_i_5_Template, 1, 0, "i", 4);
                i0.ɵɵtext(6);
                i0.ɵɵpipe(7, "abpLocalization");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(8, "div", 5);
                i0.ɵɵtemplate(9, MSPageNavComponent_ng_template_9_Template, 1, 1, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵelementStart(11, "ul", 7);
                i0.ɵɵtemplate(12, MSPageNavComponent_ng_container_12_Template, 1, 0, "ng-container", 8);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(13, "div", 9);
                i0.ɵɵlistener("click", function MSPageNavComponent_Template_div_click_13_listener() { return ctx.toggle(); });
                i0.ɵɵelementStart(14, "div", 10);
                i0.ɵɵelement(15, "div", 11);
                i0.ɵɵelementStart(16, "div", 12);
                i0.ɵɵelement(17, "i", 13);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r1 = i0.ɵɵreference(10);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(10, _c2$1, ctx.config.backHref))("title", ctx.config.backHref ? i0.ɵɵpipeBind1(4, 6, "ms.page-nav.back") : "");
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngIf", ctx.config.backHref);
                i0.ɵɵadvance(1);
                i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(7, 8, ctx.config.title), " ");
                i0.ɵɵadvance(6);
                i0.ɵɵproperty("ngTemplateOutlet", _r1)("ngTemplateOutletContext", i0.ɵɵpureFunction1(12, _c3$1, ctx.list));
            }
        }, directives: [i4.NgClass, i4.NgIf, i4.NgTemplateOutlet, i3$2.NzIconDirective, i4.NgForOf, i2.RouterLinkActive, i2.RouterLink], pipes: [i3.ɵa, i1.LocalizationPipe], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MSPageNavComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'page-nav',
                        templateUrl: './page-nav.component.html',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], function () { return [{ type: BrandService }, { type: i2.Router }, { type: i3.TitleService }, { type: i3.MenuService }, { type: i0.ChangeDetectorRef }]; }, { config: [{
                    type: i0.Input
                }], list: [{
                    type: i0.Input
                }] });
    })();

    function MSPageSingleComponent_div_3_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtext(1);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r3 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx_r3.title);
        }
    }
    function MSPageSingleComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 7);
            i0.ɵɵtemplate(1, MSPageSingleComponent_div_3_ng_container_1_Template, 2, 1, "ng-container", 8);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r0.title);
        }
    }
    function MSPageSingleComponent_div_4_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtext(1);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r4 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx_r4.subTitle);
        }
    }
    function MSPageSingleComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 9);
            i0.ɵɵtemplate(1, MSPageSingleComponent_div_4_ng_container_1_Template, 2, 1, "ng-container", 8);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r1.subTitle);
        }
    }
    function MSPageSingleComponent_div_5_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtext(1);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r5 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx_r5.extra);
        }
    }
    function MSPageSingleComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 10);
            i0.ɵɵtemplate(1, MSPageSingleComponent_div_5_ng_container_1_Template, 2, 1, "ng-container", 8);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r2.extra);
        }
    }
    var _c0$6 = function (a0) { return { "ms-page-single__wide": a0 }; };
    var _c1$4 = ["*"];
    var MSPageSingleComponent = /** @class */ (function () {
        // #endregion
        function MSPageSingleComponent(brand) {
            this.brand = brand;
            // #region fileds
            this.wide = true;
            this.fixed = false;
        }
        MSPageSingleComponent.prototype.ngOnInit = function () { };
        MSPageSingleComponent.prototype.ngOnChanges = function () {
            this.brand.setFixed(this.fixed);
        };
        MSPageSingleComponent.prototype.ngOnDestroy = function () {
            this.brand.setFixed(false);
        };
        return MSPageSingleComponent;
    }());
    MSPageSingleComponent.ɵfac = function MSPageSingleComponent_Factory(t) { return new (t || MSPageSingleComponent)(i0.ɵɵdirectiveInject(BrandService)); };
    MSPageSingleComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MSPageSingleComponent, selectors: [["page-single"]], hostVars: 2, hostBindings: function MSPageSingleComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵclassProp("ms-page-single", true);
            }
        }, inputs: { wide: "wide", fixed: "fixed", title: "title", subTitle: "subTitle", extra: "extra" }, features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c1$4, decls: 8, vars: 9, consts: [[1, "ms-page-single__bar"], [1, "ms-page-single__wrap", 3, "ngClass"], [1, "ms-page-single__bar-desc"], ["class", "ms-page-single__bar-title", 4, "ngIf"], ["class", "ms-page-single__bar-sub-title", 4, "ngIf"], ["class", "ms-page-single__bar-extra", 4, "ngIf"], [1, "ms-page-single__wrap", "ms-page-single__body", 3, "ngClass"], [1, "ms-page-single__bar-title"], [4, "nzStringTemplateOutlet"], [1, "ms-page-single__bar-sub-title"], [1, "ms-page-single__bar-extra"]], template: function MSPageSingleComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "div", 1);
                i0.ɵɵelementStart(2, "div", 2);
                i0.ɵɵtemplate(3, MSPageSingleComponent_div_3_Template, 2, 1, "div", 3);
                i0.ɵɵtemplate(4, MSPageSingleComponent_div_4_Template, 2, 1, "div", 4);
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(5, MSPageSingleComponent_div_5_Template, 2, 1, "div", 5);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(6, "div", 6);
                i0.ɵɵprojection(7);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(5, _c0$6, ctx.wide));
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngIf", ctx.title);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.subTitle);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.extra);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(7, _c0$6, ctx.wide));
            }
        }, directives: [i4.NgClass, i4.NgIf, i5$2.NzStringTemplateOutletDirective], encapsulation: 2, changeDetection: 0 });
    __decorate([
        i3$1.InputBoolean(),
        __metadata("design:type", Object)
    ], MSPageSingleComponent.prototype, "wide", void 0);
    __decorate([
        i3$1.InputBoolean(),
        __metadata("design:type", Object)
    ], MSPageSingleComponent.prototype, "fixed", void 0);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MSPageSingleComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'page-single',
                        templateUrl: './page-single.component.html',
                        host: {
                            '[class.ms-page-single]': 'true',
                        },
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], function () { return [{ type: BrandService }]; }, { wide: [{
                    type: i0.Input
                }], fixed: [{
                    type: i0.Input
                }], title: [{
                    type: i0.Input
                }], subTitle: [{
                    type: i0.Input
                }], extra: [{
                    type: i0.Input
                }] });
    })();

    function MSPanelComponent_div_1_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtext(1);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx_r2.title);
        }
    }
    function MSPanelComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 4);
            i0.ɵɵtemplate(1, MSPanelComponent_div_1_ng_container_1_Template, 2, 1, "ng-container", 5);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r0.title);
        }
    }
    function MSPanelComponent_div_2_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtext(1);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r3 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx_r3.extra);
        }
    }
    function MSPanelComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 6);
            i0.ɵɵtemplate(1, MSPanelComponent_div_2_ng_container_1_Template, 2, 1, "ng-container", 5);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r1.extra);
        }
    }
    var _c0$7 = ["*"];
    var MSPanelComponent = /** @class */ (function () {
        function MSPanelComponent() {
        }
        return MSPanelComponent;
    }());
    MSPanelComponent.ɵfac = function MSPanelComponent_Factory(t) { return new (t || MSPanelComponent)(); };
    MSPanelComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MSPanelComponent, selectors: [["panel"]], hostVars: 2, hostBindings: function MSPanelComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵclassProp("ms-panel", true);
            }
        }, inputs: { title: "title", extra: "extra" }, ngContentSelectors: _c0$7, decls: 5, vars: 2, consts: [[1, "ms-panel__hd"], ["class", "ms-panel__hd-title", 4, "ngIf"], ["class", "ms-panel__hd-extra", 4, "ngIf"], [1, "ms-panel__bd"], [1, "ms-panel__hd-title"], [4, "nzStringTemplateOutlet"], [1, "ms-panel__hd-extra"]], template: function MSPanelComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵtemplate(1, MSPanelComponent_div_1_Template, 2, 1, "div", 1);
                i0.ɵɵtemplate(2, MSPanelComponent_div_2_Template, 2, 1, "div", 2);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "div", 3);
                i0.ɵɵprojection(4);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.title);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.extra);
            }
        }, directives: [i4.NgIf, i5$2.NzStringTemplateOutletDirective], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MSPanelComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'panel',
                        templateUrl: './panel.component.html',
                        host: {
                            '[class.ms-panel]': 'true',
                        },
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], null, { title: [{
                    type: i0.Input
                }], extra: [{
                    type: i0.Input
                }] });
    })();

    function MSServiceLayoutComponent_page_nav_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "page-nav", 4);
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵproperty("config", ctx_r0.navConfig)("list", ctx_r0.navList);
        }
    }
    var _c0$8 = function (a0) { return { "alain-ms__product-col-1": a0 }; };
    var _c1$5 = function (a0) { return { "alain-ms__console": a0 }; };
    var _c2$2 = ["*"];
    var MSServiceLayoutComponent = /** @class */ (function () {
        function MSServiceLayoutComponent(srv) {
            this.srv = srv;
            this.nav = false;
            this.navConfig = {};
            this.navList = [];
            this.hasConsoleCss = true;
        }
        Object.defineProperty(MSServiceLayoutComponent.prototype, "hideNav", {
            get: function () {
                return this.srv.hideNav;
            },
            enumerable: false,
            configurable: true
        });
        return MSServiceLayoutComponent;
    }());
    MSServiceLayoutComponent.ɵfac = function MSServiceLayoutComponent_Factory(t) { return new (t || MSServiceLayoutComponent)(i0.ɵɵdirectiveInject(BrandService)); };
    MSServiceLayoutComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MSServiceLayoutComponent, selectors: [["service-layout"]], inputs: { nav: "nav", navConfig: "navConfig", navList: "navList", hasConsoleCss: "hasConsoleCss" }, ngContentSelectors: _c2$2, decls: 5, vars: 7, consts: [[1, "alain-ms__product", 3, "ngClass"], [3, "config", "list", 4, "ngIf"], [1, "alain-ms__product-body", "scrollbar"], [3, "ngClass"], [3, "config", "list"]], template: function MSServiceLayoutComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵtemplate(1, MSServiceLayoutComponent_page_nav_1_Template, 1, 2, "page-nav", 1);
                i0.ɵɵelementStart(2, "div", 2);
                i0.ɵɵelementStart(3, "div", 3);
                i0.ɵɵprojection(4);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c0$8, ctx.nav && !ctx.hideNav));
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.nav);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(5, _c1$5, ctx.hasConsoleCss));
            }
        }, directives: [i4.NgClass, i4.NgIf, MSPageNavComponent], encapsulation: 2 });
    __decorate([
        i3$1.InputBoolean(),
        __metadata("design:type", Object)
    ], MSServiceLayoutComponent.prototype, "nav", void 0);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MSServiceLayoutComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'service-layout',
                        templateUrl: './service-layout.component.html',
                    }]
            }], function () { return [{ type: BrandService }]; }, { nav: [{
                    type: i0.Input
                }], navConfig: [{
                    type: i0.Input
                }], navList: [{
                    type: i0.Input
                }], hasConsoleCss: [{
                    type: i0.Input
                }] });
    })();

    var COMPONENTS = [
        MSHelpComponent,
        MSLinkToDirective,
        MSPageBarComponent,
        MSPageNavComponent,
        MSPageSingleComponent,
        MSPanelComponent,
        MSServiceLayoutComponent,
    ];
    var MSSharedModule = /** @class */ (function () {
        function MSSharedModule() {
        }
        return MSSharedModule;
    }());
    MSSharedModule.ɵfac = function MSSharedModule_Factory(t) { return new (t || MSSharedModule)(); };
    MSSharedModule.ɵmod = i0.ɵɵdefineNgModule({ type: MSSharedModule });
    MSSharedModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[i4.CommonModule, i2.RouterModule, i5$1.FormsModule, i3.AlainThemeModule.forChild(), i1$3.NzPopoverModule, i3$2.NzIconModule, i5$2.NzOutletModule, i1.LocalizationModule]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MSSharedModule, { declarations: [MSHelpComponent,
                MSLinkToDirective,
                MSPageBarComponent,
                MSPageNavComponent,
                MSPageSingleComponent,
                MSPanelComponent,
                MSServiceLayoutComponent], imports: [i4.CommonModule, i2.RouterModule, i5$1.FormsModule, i3.AlainThemeModule, i1$3.NzPopoverModule, i3$2.NzIconModule, i5$2.NzOutletModule, i1.LocalizationModule], exports: [MSHelpComponent,
                MSLinkToDirective,
                MSPageBarComponent,
                MSPageNavComponent,
                MSPageSingleComponent,
                MSPanelComponent,
                MSServiceLayoutComponent] });
    })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MSSharedModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [i4.CommonModule, i2.RouterModule, i5$1.FormsModule, i3.AlainThemeModule.forChild(), i1$3.NzPopoverModule, i3$2.NzIconModule, i5$2.NzOutletModule, i1.LocalizationModule],
                        declarations: COMPONENTS,
                        exports: COMPONENTS,
                    }]
            }], null, null);
    })();

    function MSLayoutComponent_ms_sidebar_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "ms-sidebar");
        }
    }
    var MSLayoutComponent = /** @class */ (function () {
        function MSLayoutComponent(bm, mediaMatcher, router, route, msg, reuseTabSrv, el, renderer, srv, doc) {
            var _this = this;
            this.el = el;
            this.renderer = renderer;
            this.srv = srv;
            this.doc = doc;
            this.isFetching = false;
            // 是否单页，单页不显示侧边栏
            this.hasAllNav = false;
            this.hasSidebar = true;
            var routerData = Object.assign({ hasAllNav: false, hasSidebar: true }, route.snapshot.data);
            this.hasAllNav = routerData.hasAllNav === true;
            this.hasSidebar = routerData.hasSidebar === true;
            // scroll to top in change page
            router.events.subscribe(function (evt) {
                if (!_this.isFetching && evt instanceof i2.RouteConfigLoadStart) {
                    _this.isFetching = true;
                    _this.scrollToTop();
                }
                if (evt instanceof i2.NavigationError) {
                    _this.isFetching = false;
                    msg.error("\u65E0\u6CD5\u52A0\u8F7D" + evt.url + "\u8DEF\u7531", { nzDuration: 1000 * 3 });
                    return;
                }
                if (!(evt instanceof i2.NavigationEnd)) {
                    return;
                }
                _this.isFetching = false;
                // If have already cached router, should be don't need scroll to top
                if (reuseTabSrv.exists(evt.url)) {
                    return;
                }
                _this.scrollToTop();
            });
            // media
            var query = {
                'screen-xs': '(max-width: 575px)',
                'screen-sm': '(min-width: 576px) and (max-width: 767px)',
                'screen-md': '(min-width: 768px) and (max-width: 991px)',
                'screen-lg': '(min-width: 992px) and (max-width: 1199px)',
                'screen-xl': '(min-width: 1200px)',
            };
            bm.observe([
                '(min-width: 1200px)',
                '(min-width: 992px) and (max-width: 1199px)',
                '(min-width: 768px) and (max-width: 991px)',
                '(min-width: 576px) and (max-width: 767px)',
                '(max-width: 575px)',
            ]).subscribe(function () {
                _this.queryCls = Object.keys(query).find(function (key) { return mediaMatcher.matchMedia(query[key]).matches; });
                _this.setClass();
            });
        }
        Object.defineProperty(MSLayoutComponent.prototype, "isMobile", {
            get: function () {
                return this.srv.isMobile;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MSLayoutComponent.prototype, "body", {
            get: function () {
                return this.doc.body;
            },
            enumerable: false,
            configurable: true
        });
        MSLayoutComponent.prototype.scrollToTop = function () {
            var el = this.doc.querySelector('.alain-ms__product-body');
            if (!el) {
                return;
            }
            el.scrollTop = 0;
        };
        MSLayoutComponent.prototype.setClass = function () {
            var _a;
            var _b = this, el = _b.el, renderer = _b.renderer, queryCls = _b.queryCls;
            i3$1.updateHostClass(el.nativeElement, renderer, (_a = {},
                _a['alain-ms'] = true,
                _a[queryCls] = true,
                _a), true);
        };
        MSLayoutComponent.prototype.setBodyClass = function () {
            var _a;
            var _b = this.srv.layout, hasTopbar = _b.hasTopbar, hasSidebar = _b.hasSidebar, hasFixed = _b.hasFixed, colorWeak = _b.colorWeak;
            i3$1.updateHostClass(this.body, this.renderer, (_a = {
                    'color-weak': colorWeak
                },
                _a['alain-ms__has-topbar'] = hasTopbar,
                _a['alain-ms__has-sidebar'] = hasSidebar,
                _a['alain-ms__has-fixed'] = hasFixed,
                _a));
        };
        MSLayoutComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.notify$ = this.srv.notify.subscribe(function () {
                _this.setClass();
                _this.setBodyClass();
            });
        };
        MSLayoutComponent.prototype.ngOnDestroy = function () {
            this.notify$.unsubscribe();
            this.body.classList.remove('alain-ms__has-topbar', 'alain-ms__has-sidebar', 'alain-ms__has-fixed');
        };
        return MSLayoutComponent;
    }());
    MSLayoutComponent.ɵfac = function MSLayoutComponent_Factory(t) { return new (t || MSLayoutComponent)(i0.ɵɵdirectiveInject(i1$1.BreakpointObserver), i0.ɵɵdirectiveInject(i1$1.MediaMatcher), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i2.ActivatedRoute), i0.ɵɵdirectiveInject(i4$1.NzMessageService), i0.ɵɵdirectiveInject(i4$3.ReuseTabService), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(BrandService), i0.ɵɵdirectiveInject(i4.DOCUMENT)); };
    MSLayoutComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MSLayoutComponent, selectors: [["layout-ms"]], decls: 6, vars: 4, consts: [[3, "allNav"], [4, "ngIf"], [1, "brand-page-loading", 3, "hidden"], ["nzSpinning", ""], [1, "alain-ms__body", 3, "hidden"]], template: function MSLayoutComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelement(0, "ms-topbar", 0);
                i0.ɵɵtemplate(1, MSLayoutComponent_ms_sidebar_1_Template, 1, 0, "ms-sidebar", 1);
                i0.ɵɵelementStart(2, "div", 2);
                i0.ɵɵelement(3, "nz-spin", 3);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(4, "div", 4);
                i0.ɵɵelement(5, "router-outlet");
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("allNav", ctx.hasAllNav);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.hasSidebar);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("hidden", !ctx.isFetching);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("hidden", ctx.isFetching);
            }
        }, directives: [MSTopbarComponent, i4.NgIf, i5.NzSpinComponent, i2.RouterOutlet, MSSidebarComponent], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MSLayoutComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'layout-ms',
                        templateUrl: './ms.component.html',
                    }]
            }], function () {
            return [{ type: i1$1.BreakpointObserver }, { type: i1$1.MediaMatcher }, { type: i2.Router }, { type: i2.ActivatedRoute }, { type: i4$1.NzMessageService }, { type: i4$3.ReuseTabService }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: BrandService }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i4.DOCUMENT]
                        }] }];
        }, null);
    })();

    var LAYOUT_INIT_PROVIDERS = [
        {
            provide: i0.APP_INITIALIZER,
            useFactory: init,
            deps: [i0.Injector],
            multi: true,
        },
    ];
    function init(injector) {
        return function () {
            listenRouter(injector);
        };
    }
    function listenRouter(injector) {
        var router = injector.get(i2.Router);
        var layoutStateService = injector.get(LayoutStateService);
        router.events
            .pipe(operators.filter(function (event) { return event instanceof i2.ResolveEnd; }))
            .subscribe(function (event) {
            //const currentUrl = decodeURI(event.state.url.split('?')[0]);
            //layoutStateService.setStore({ currentUrl });
            layoutStateService.fetchPageNavs(event.state);
        });
    }

    // import { default as en_US } from './ms/_i18n/en-US';
    // import { default as zh_CN } from './ms/_i18n/zh-CN';
    // import { default as zh_TW } from './ms/_i18n/zh-TW';
    var MS_WIDGETS = [MSAllNavComponent, MSSearchComponent, MSLangsComponent, MSUserComponent, MSNoticeComponent, MSRegionComponent];
    var MS_COMPONENTS = __spread([MSLayoutComponent, MSSidebarComponent, MSTopbarComponent], MS_WIDGETS);
    var MS_SHARED_COMPONENTS = [
        MSHelpComponent,
        MSPageNavComponent,
        MSPageBarComponent,
        MSPageSingleComponent,
        MSPanelComponent,
        MSServiceLayoutComponent,
        MSLinkToDirective,
    ];
    //const MS_COMPONENTS=[]
    var LayoutModule = /** @class */ (function () {
        function LayoutModule() {
            // i18n.load('zh-CN', zh_CN);
            // i18n.load('zh-TW', zh_TW);
            // i18n.load('en-US', en_US);
        }
        LayoutModule.forRoot = function () {
            return {
                ngModule: LayoutModule,
                providers: [
                    LAYOUT_INIT_PROVIDERS
                    //LAYOUT_MENU_PROVIDERS
                ]
            };
        };
        return LayoutModule;
    }());
    LayoutModule.ɵfac = function LayoutModule_Factory(t) { return new (t || LayoutModule)(); };
    LayoutModule.ɵmod = i0.ɵɵdefineNgModule({ type: LayoutModule });
    LayoutModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[
                i1.CoreModule,
                i2.RouterModule,
                i5$1.FormsModule,
                dragDrop.DragDropModule,
                MSSharedModule,
                i5.NzSpinModule,
                i6$1.NzAnchorModule,
                i6.NzAutocompleteModule,
                avatar.NzAvatarModule,
                divider.NzDividerModule,
                i4$2.NzInputModule,
                i3$2.NzIconModule,
                i3.AlainThemeModule.forChild(),
                themeBtn.ThemeBtnModule,
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(LayoutModule, { declarations: [MSLayoutComponent, MSSidebarComponent, MSTopbarComponent, MSAllNavComponent, MSSearchComponent, MSLangsComponent, MSUserComponent, MSNoticeComponent, MSRegionComponent], imports: [i1.CoreModule,
                i2.RouterModule,
                i5$1.FormsModule,
                dragDrop.DragDropModule,
                MSSharedModule,
                i5.NzSpinModule,
                i6$1.NzAnchorModule,
                i6.NzAutocompleteModule,
                avatar.NzAvatarModule,
                divider.NzDividerModule,
                i4$2.NzInputModule,
                i3$2.NzIconModule, i3.AlainThemeModule, themeBtn.ThemeBtnModule], exports: [MSLayoutComponent, MSSidebarComponent, MSTopbarComponent, MSAllNavComponent, MSSearchComponent, MSLangsComponent, MSUserComponent, MSNoticeComponent, MSRegionComponent, MSHelpComponent,
                MSPageNavComponent,
                MSPageBarComponent,
                MSPageSingleComponent,
                MSPanelComponent,
                MSServiceLayoutComponent,
                MSLinkToDirective] });
    })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LayoutModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1.CoreModule,
                            i2.RouterModule,
                            i5$1.FormsModule,
                            dragDrop.DragDropModule,
                            MSSharedModule,
                            i5.NzSpinModule,
                            i6$1.NzAnchorModule,
                            i6.NzAutocompleteModule,
                            avatar.NzAvatarModule,
                            divider.NzDividerModule,
                            i4$2.NzInputModule,
                            i3$2.NzIconModule,
                            i3.AlainThemeModule.forChild(),
                            themeBtn.ThemeBtnModule,
                        ],
                        declarations: __spread(MS_COMPONENTS),
                        exports: __spread(MS_COMPONENTS, [MS_SHARED_COMPONENTS])
                    }]
            }], function () { return []; }, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.BrandService = BrandService;
    exports.LayoutModule = LayoutModule;
    exports.LayoutStateService = LayoutStateService;
    exports.MSAllNavComponent = MSAllNavComponent;
    exports.MSAllNavService = MSAllNavService;
    exports.MSHelpComponent = MSHelpComponent;
    exports.MSLangsComponent = MSLangsComponent;
    exports.MSLayoutComponent = MSLayoutComponent;
    exports.MSLinkToDirective = MSLinkToDirective;
    exports.MSNoticeComponent = MSNoticeComponent;
    exports.MSPageBarComponent = MSPageBarComponent;
    exports.MSPageNavComponent = MSPageNavComponent;
    exports.MSPageSingleComponent = MSPageSingleComponent;
    exports.MSPanelComponent = MSPanelComponent;
    exports.MSProductService = MSProductService;
    exports.MSRegionComponent = MSRegionComponent;
    exports.MSRegionService = MSRegionService;
    exports.MSSearchComponent = MSSearchComponent;
    exports.MSServiceLayoutComponent = MSServiceLayoutComponent;
    exports.MSSharedModule = MSSharedModule;
    exports.MSSidebarComponent = MSSidebarComponent;
    exports.MSTopbarComponent = MSTopbarComponent;
    exports.MSTopbarService = MSTopbarService;
    exports.MSUserComponent = MSUserComponent;
    exports.MS_COMPONENTS = MS_COMPONENTS;
    exports.MS_SHARED_COMPONENTS = MS_SHARED_COMPONENTS;
    exports.MS_WIDGETS = MS_WIDGETS;
    exports.RoutesProcessor = RoutesProcessor;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-tw-theme-alain-ms-layout.umd.js.map

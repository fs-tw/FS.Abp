(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('@angular/cdk/layout'), require('@delon/theme'), require('@delon/util'), require('@abp/ng.core'), require('snq'), require('@angular/router'), require('@delon/auth'), require('ng-zorro-antd/message'), require('@fs-tw/account'), require('@angular/forms'), require('ng-zorro-antd/core/outlet'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/popover'), require('@delon/abc/reuse-tab'), require('@angular/cdk/drag-drop'), require('@delon/theme/theme-btn'), require('ng-zorro-antd/anchor'), require('ng-zorro-antd/auto-complete'), require('ng-zorro-antd/avatar'), require('ng-zorro-antd/divider'), require('ng-zorro-antd/input'), require('ng-zorro-antd/spin')) :
    typeof define === 'function' && define.amd ? define('@fs-tw/theme-alain-ms/layout', ['exports', '@angular/common', '@angular/core', 'rxjs', 'rxjs/operators', '@angular/cdk/layout', '@delon/theme', '@delon/util', '@abp/ng.core', 'snq', '@angular/router', '@delon/auth', 'ng-zorro-antd/message', '@fs-tw/account', '@angular/forms', 'ng-zorro-antd/core/outlet', 'ng-zorro-antd/icon', 'ng-zorro-antd/popover', '@delon/abc/reuse-tab', '@angular/cdk/drag-drop', '@delon/theme/theme-btn', 'ng-zorro-antd/anchor', 'ng-zorro-antd/auto-complete', 'ng-zorro-antd/avatar', 'ng-zorro-antd/divider', 'ng-zorro-antd/input', 'ng-zorro-antd/spin'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['fs-tw'] = global['fs-tw'] || {}, global['fs-tw']['theme-alain-ms'] = global['fs-tw']['theme-alain-ms'] || {}, global['fs-tw']['theme-alain-ms'].layout = {}), global.ng.common, global.ng.core, global.rxjs, global.rxjs.operators, global.ng.cdk.layout, global.i1$1, global.i2, global.i1$2, global.snq, global.ng.router, global.auth, global.message, global.account, global.ng.forms, global.outlet, global.icon, global.popover, global.reuseTab, global.ng.cdk.dragDrop, global.themeBtn, global.anchor, global.autoComplete, global.avatar, global.divider, global.input, global.spin));
}(this, (function (exports, common, i0, rxjs, operators, i1, i1$1, i2, i1$2, snq, router, auth, message, account, forms, outlet, icon, popover, reuseTab, dragDrop, themeBtn, anchor, autoComplete, avatar, divider, input, spin) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var snq__default = /*#__PURE__*/_interopDefaultLegacy(snq);

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
    BrandService.ɵprov = i0.ɵɵdefineInjectable({ factory: function BrandService_Factory() { return new BrandService(i0.ɵɵinject(i1.BreakpointObserver), i0.ɵɵinject(i1$1.SettingsService)); }, token: BrandService, providedIn: "root" });
    BrandService.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];
    BrandService.ctorParameters = function () { return [
        { type: i1.BreakpointObserver },
        { type: i1$1.SettingsService }
    ]; };

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

    /**
     * 顶部菜单所有菜单数据，几个注意点：
     * - 当前处理的数据源格式为 `./assets/tmp/all-nav-en-US.json`
     * - 最终处理数据以 `all-nav.interface.ts` 系列接口为准
     */
    var MSAllNavService = /** @class */ (function () {
        function MSAllNavService(http, arrSrv) {
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
                item.leftColumn = item.leftColumn || 4;
                var columns = new Array(item.leftColumn).fill({}).map(function (_, idx) { return ({
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
            return this.http.get("./assets/tmp/all-nav-zh-TW.json").pipe(operators.map(function (res) {
                _this._data = _this.fixData(res);
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
    MSAllNavService.ɵprov = i0.ɵɵdefineInjectable({ factory: function MSAllNavService_Factory() { return new MSAllNavService(i0.ɵɵinject(i1$1._HttpClient), i0.ɵɵinject(i2.ArrayService)); }, token: MSAllNavService, providedIn: "root" });
    MSAllNavService.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];
    MSAllNavService.ctorParameters = function () { return [
        { type: i1$1._HttpClient },
        { type: i2.ArrayService }
    ]; };

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
    MSAllNavComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'ms-all-nav',
                    template: "<div class=\"alain-ms__an-trigger\">\r\n  <i nz-icon nzType=\"bars\"></i>\r\n  <nz-spin *ngIf=\"open && !data\"></nz-spin>\r\n</div>\r\n<ng-template #menuTpl let-ls>\r\n  <ul class=\"alain-ms__an-menu\">\r\n    <li\r\n      *ngFor=\"let i of ls\"\r\n      class=\"alain-ms__an-menu-item\"\r\n      [ngClass]=\"{ 'alain-ms__an-menu-item--active': i.active }\"\r\n      (mouseenter)=\"mouseHandle(i, true)\"\r\n    >\r\n      {{ i.text }}\r\n      <i nz-icon nzType=\"right\"></i>\r\n    </li>\r\n  </ul>\r\n</ng-template>\r\n<ng-template #categoryTpl let-ls>\r\n  <div *ngFor=\"let p of ls\" class=\"alain-ms__an-category\">\r\n    <h3 class=\"alain-ms__an-category-title\">{{ p.text }}</h3>\r\n    <div class=\"alain-ms__an-category-list\">\r\n      <a *ngFor=\"let i of p.list\" [link-to]=\"i\" (linkToChanged)=\"_leave()\" class=\"alain-ms__an-category-link\">\r\n        {{ i.text }}\r\n        <span *ngIf=\"i.tip\" class=\"alain-ms__an-category-tip\">{{ i.tip }}</span>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n<div #dropdown class=\"alain-ms__an-dropdown\">\r\n  <div *ngIf=\"data\" class=\"alain-ms__an\">\r\n    <div class=\"alain-ms__an-panel alain-ms__an-panel-active alain-ms__an-level1\">\r\n      <div class=\"alain-ms__an-panel-inner\">\r\n        <ng-template [ngTemplateOutlet]=\"menuTpl\" [ngTemplateOutletContext]=\"{ $implicit: data.nav }\"></ng-template>\r\n        <div *ngIf=\"data.navBottom\" class=\"alain-ms__an-menu-bottom\">\r\n          <a *ngFor=\"let i of data.navBottom\" [link-to]=\"i\" (linkToChanged)=\"_leave()\">\r\n            {{ i.text }}\r\n            <i nz-icon nzType=\"share-alt\"></i>\r\n          </a>\r\n        </div>\r\n        <div *ngIf=\"data.bottomText\" class=\"alain-ms__an-bottom\">{{ data.bottomText }}</div>\r\n      </div>\r\n    </div>\r\n    <div\r\n      *ngFor=\"let p of allL2\"\r\n      class=\"alain-ms__an-panel alain-ms__an-level2\"\r\n      [ngClass]=\"{ 'alain-ms__an-level2-active': p.active }\"\r\n    >\r\n      <div class=\"alain-ms__an-panel-inner\">\r\n        <ng-template [ngTemplateOutlet]=\"menuTpl\" [ngTemplateOutletContext]=\"{ $implicit: p.children }\"></ng-template>\r\n      </div>\r\n    </div>\r\n    <div\r\n      *ngFor=\"let i of allPanel\"\r\n      class=\"alain-ms__an-content alain-ms__an-level{{ i.level }}-content alain-ms__an-left-col-{{ i.leftColumn }}\"\r\n      [ngClass]=\"{ 'alain-ms__an-content-active': i.active }\"\r\n    >\r\n      <div *ngIf=\"i._left && i._left.length > 0\" class=\"alain-ms__an-left\">\r\n        <div *ngFor=\"let col of i._left\" class=\"alain-ms__an-left-col\">\r\n          <ng-template\r\n            [ngTemplateOutlet]=\"categoryTpl\"\r\n            [ngTemplateOutletContext]=\"{ $implicit: col.list }\"\r\n          ></ng-template>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"i.right && i.right.length > 0\" class=\"alain-ms__an-right\">\r\n        <ng-template [ngTemplateOutlet]=\"categoryTpl\" [ngTemplateOutletContext]=\"{ $implicit: i.right }\"></ng-template>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                    host: {
                        '[class.alain-ms__an-active]': 'validOpen',
                    },
                    changeDetection: i0.ChangeDetectionStrategy.OnPush
                },] }
    ];
    MSAllNavComponent.ctorParameters = function () { return [
        { type: MSAllNavService },
        { type: BrandService },
        { type: i0.ChangeDetectorRef },
        { type: undefined, decorators: [{ type: i0.Inject, args: [common.DOCUMENT,] }] }
    ]; };
    MSAllNavComponent.propDecorators = {
        dropdownEl: [{ type: i0.ViewChild, args: ['dropdown', { static: true },] }],
        _enter: [{ type: i0.HostListener, args: ['mouseenter',] }],
        _leave: [{ type: i0.HostListener, args: ['mouseleave',] }]
    };

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
    MSLangsComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'ms-langs',
                    template: "<ng-container *ngIf=\"defaultLanguage$ | async as defaultLang\">\r\n  <span class=\"alain-ms__topbar-item-btn\" >\r\n    <span >{{ defaultLang.displayName }}</span>\r\n  </span>\r\n  <ul class=\"alain-ms__topbar-dd-menu\">\r\n    <li *ngFor=\"let lang of (dropdownLanguages$ | async)\" (click)=\"change(lang.cultureName)\">\r\n      <a class=\"alain-ms__topbar-dd-item\">{{ lang?.displayName }}</a>\r\n    </li>\r\n  </ul>\r\n</ng-container>\r\n\r\n",
                    host: {
                        '[class.alain-ms__topbar-item]': 'true',
                        '[class.alain-ms__topbar-dd]': 'true',
                    },
                    changeDetection: i0.ChangeDetectionStrategy.OnPush
                },] }
    ];
    MSLangsComponent.ctorParameters = function () { return [
        { type: i1$2.ConfigStateService },
        { type: i1$2.SessionStateService }
    ]; };

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
    MSTopbarService.ɵprov = i0.ɵɵdefineInjectable({ factory: function MSTopbarService_Factory() { return new MSTopbarService(i0.ɵɵinject(i1$1._HttpClient)); }, token: MSTopbarService, providedIn: "root" });
    MSTopbarService.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];
    MSTopbarService.ctorParameters = function () { return [
        { type: i1$1._HttpClient }
    ]; };

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
    MSNoticeComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'ms-notice',
                    template: "<span class=\"alain-ms__topbar-item-btn\">\r\n  <span class=\"position-relative\">\r\n    {{ l.titleText }}<em *ngIf=\"list.length > 0\" class=\"alain-ms__topbar-item-num\">{{ list.length }}</em>\r\n  </span>\r\n</span>\r\n<div class=\"alain-ms__topbar-dd-menu\">\r\n  <div class=\"alain-ms__notice-hd\">\r\n    {{ l.title }}\r\n    <a class=\"brand-color\" [link-to]=\"l.subscribe\">{{ l.subscribe.title }}</a>\r\n  </div>\r\n  <a class=\"alain-ms__notice-item\" *ngFor=\"let i of list\" [link-to]=\"i\">\r\n    <div class=\"alain-ms__notice-item--title\">{{ i.title }}</div>\r\n    <span class=\"alain-ms__notice-item--time\">{{ i.time }}</span>\r\n  </a>\r\n  <div class=\"alain-ms__notice-fd\">\r\n    <a class=\"d-block pt-sm pb-xs text-center\" [link-to]=\"l\">{{ l.text }}</a>\r\n  </div>\r\n</div>\r\n",
                    host: {
                        '[class.alain-ms__topbar-item]': 'true',
                        '[class.alain-ms__topbar-dd]': 'true',
                        '[class.alain-ms__notice]': 'true',
                    },
                    changeDetection: i0.ChangeDetectionStrategy.OnPush
                },] }
    ];
    MSNoticeComponent.ctorParameters = function () { return [
        { type: MSTopbarService },
        { type: router.Router },
        { type: undefined, decorators: [{ type: i0.Inject, args: [auth.DA_SERVICE_TOKEN,] }] },
        { type: i1$1.SettingsService },
        { type: message.NzMessageService }
    ]; };

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
    MSRegionService.ɵprov = i0.ɵɵdefineInjectable({ factory: function MSRegionService_Factory() { return new MSRegionService(i0.ɵɵinject(i1$1._HttpClient)); }, token: MSRegionService, providedIn: "root" });
    MSRegionService.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];
    MSRegionService.ctorParameters = function () { return [
        { type: i1$1._HttpClient }
    ]; };

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
    MSRegionComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'ms-region',
                    template: "<ng-container *ngIf=\"inited\">\r\n  <span class=\"alain-ms__topbar-item-btn\">\r\n    <i class=\"icon icon-{{ srv.item.country }}\"></i>\r\n    <span class=\"text-xs px-xs\">{{ srv.item.name }}</span>\r\n    <i nz-icon nzType=\"caret-up\" class=\"alain-ms__topbar-item-btn-arrow\"></i>\r\n  </span>\r\n  <div class=\"alain-ms__topbar-dd-menu alain-ms__topbar-dd-left alain-ms__region--wrap clearfix\">\r\n    <dl *ngFor=\"let p of srv.list\" class=\"alain-ms__region--list\">\r\n      <dt class=\"mb-sm\">{{ p.name }}</dt>\r\n      <dd *ngFor=\"let i of p.list\" (click)=\"selected(i)\">\r\n        <a class=\"d-block\" [ngClass]=\"{ 'brand-color': i.selected }\">\r\n          <i class=\"icon icon-{{ i.country }}\"></i>{{ i.name }}\r\n        </a>\r\n      </dd>\r\n    </dl>\r\n  </div>\r\n</ng-container>\r\n",
                    host: {
                        '[class.alain-ms__topbar-item]': 'true',
                        '[class.alain-ms__topbar-dd]': 'true',
                        '[class.alain-ms__region]': 'true',
                    },
                    changeDetection: i0.ChangeDetectionStrategy.OnPush
                },] }
    ];
    MSRegionComponent.ctorParameters = function () { return [
        { type: MSRegionService },
        { type: i0.ChangeDetectorRef }
    ]; };

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
    MSSearchComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'ms-search',
                    template: "<div class=\"alain-ms__search\" [ngClass]=\"{ 'alain-ms__search-active': show }\">\r\n  <input\r\n    class=\"alain-ms__search-ipt\"\r\n    #ipt\r\n    placeholder=\"{{ l.placeholder }}\"\r\n    nz-input\r\n    [(ngModel)]=\"q\"\r\n    (input)=\"search$.next($event.target?.value)\"\r\n    [nzAutocomplete]=\"searchAuto\"\r\n    (blur)=\"show = false\"\r\n  />\r\n  <i class=\"alain-ms__search-icon\" nz-icon nzType=\"search\"></i>\r\n  <i class=\"alain-ms__search-outline\"></i>\r\n  <nz-autocomplete #searchAuto class=\"asdlfkjlj\">\r\n    <nz-auto-option *ngFor=\"let item of list\" [nzValue]=\"item\">\r\n      {{ item }}\r\n    </nz-auto-option>\r\n  </nz-autocomplete>\r\n</div>\r\n",
                    host: {
                        '[class.alain-ms__topbar-item]': 'true',
                        '[class.mr-md]': 'true',
                    },
                    changeDetection: i0.ChangeDetectionStrategy.OnPush
                },] }
    ];
    MSSearchComponent.ctorParameters = function () { return [
        { type: i1$1._HttpClient },
        { type: MSTopbarService },
        { type: i0.ChangeDetectorRef }
    ]; };
    MSSearchComponent.propDecorators = {
        ipt: [{ type: i0.ViewChild, args: ['ipt', { static: true },] }],
        _click: [{ type: i0.HostListener, args: ['click',] }]
    };

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
    MSUserComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'ms-user',
                    template: "<ng-template #loginBtnTpl>\r\n  <a (click)=\"initLogin()\"  class=\"alain-ms__topbar-item-btn\">{{'AbpAccount::Login' | abpLocalization}}</a>\r\n</ng-template>\r\n\r\n<div *ngIf=\"(currentUser$ | async) as currentUser\">\r\n  <div *ngIf=\"currentUser.isAuthenticated; else loginBtnTpl\">\r\n\r\n\r\n    <span class=\"alain-ms__topbar-item-btn\">\r\n      <!-- <nz-avatar [nzSrc]=\"settings.user.avatar\" nzSize=\"small\"></nz-avatar> -->\r\n      {{ currentUser.userName }}\r\n    </span>\r\n    <div class=\"alain-ms__topbar-dd-menu width-md\">\r\n      <div class=\"alain-ms__user-hd\">\r\n        <div class=\"d-flex\">\r\n          <!-- <nz-avatar [nzSrc]=\"settings.user.avatar\" nzSize=\"small\"></nz-avatar> -->\r\n          <span class=\"ml-md\">{{ currentUser.userName }}</span>\r\n        </div>\r\n        <!-- <div class=\"mt-sm\">\r\n          <ng-container *ngFor=\"let i of mainLinks; let last = last\">\r\n            <a [link-to]=\"i\">{{ i.text }}</a>\r\n            <nz-divider *ngIf=\"!last\" nzType=\"vertical\"></nz-divider>\r\n          </ng-container>\r\n        </div> -->\r\n      </div>\r\n      <div class=\"alain-ms__user-bd\">\r\n        <!-- <a *ngFor=\"let i of subLinks\" [link-to]=\"i\" class=\"alain-ms__user-bd-item\">\r\n          <i nz-icon nzType=\"safety\"></i>{{ i.text }}\r\n        </a> -->\r\n        <a routerLink=\"/account/manage-profile\" class=\"alain-ms__user-bd-item\">\r\n          <i nz-icon nzType=\"safety\"></i>{{ 'AbpAccount::ManageYourProfile' | abpLocalization }}\r\n        </a>\r\n      </div>\r\n      <div class=\"alain-ms__user-fd\">\r\n        <a (click)=\"logout()\" class=\"d-block pt-sm pb-xs text-center\">{{ 'AbpUi::Logout' | abpLocalization }}</a>\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </div>\r\n</div>\r\n\r\n",
                    host: {
                        '[class.alain-ms__topbar-item]': 'true',
                        '[class.alain-ms__topbar-dd]': 'true',
                        '[class.alain-ms__user]': 'true',
                    },
                    changeDetection: i0.ChangeDetectionStrategy.OnPush
                },] }
    ];
    MSUserComponent.ctorParameters = function () { return [
        { type: account.AuthService },
        { type: router.Router },
        { type: i1$2.ConfigStateService },
        { type: MSTopbarService },
        { type: i1$1.SettingsService }
    ]; };

    var RoutesProcessor = /** @class */ (function () {
        function RoutesProcessor(injector) {
            this.injector = injector;
        }
        Object.defineProperty(RoutesProcessor.prototype, "routesService", {
            get: function () {
                return this.injector.get(i1$2.RoutesService);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RoutesProcessor.prototype, "localizationPipe", {
            get: function () {
                return this.injector.get(i1$2.LocalizationPipe);
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
                return this.routesService.find(function (x) { return _this.formatParams(x.path) === _this.CurrentUrl; });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RoutesProcessor.prototype, "NavConfigs", {
            get: function () {
                var result = [];
                var node = this.CurrentRoute;
                if (!node)
                    return [];
                pushNode(node);
                while (!!node.parent) {
                    node = node.parent;
                    pushNode(node);
                }
                return result;
                function pushNode(node) {
                    if (!!node && !!node['navConfig']) {
                        result.push(node);
                    }
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RoutesProcessor.prototype, "CurrentNavConfig", {
            get: function () {
                var result = {
                    parentName: null,
                    name: this.CurrentRoute.parentName,
                };
                var stack = this.NavConfigs;
                while (stack.length !== 0) {
                    var node = stack.pop();
                    result = Object.assign(Object.assign({}, result), node['navConfig']);
                }
                return result;
            },
            enumerable: false,
            configurable: true
        });
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
            var _this = this;
            if (!this.CurrentRoute)
                return [];
            var pageNavs = [];
            this.RouterState = routerState;
            var target;
            this.routesService.tree
                .filter(function (x) { return !_this.routesService.hide(x); })
                .find(function (x) {
                var result = _this.searchRoute(x, nav);
                if (!!result)
                    target = result;
            });
            if (!!target) {
                pageNavs.push.apply(pageNavs, __spread(this.transMenu(target)));
            }
            return pageNavs;
        };
        RoutesProcessor.prototype.searchRoute = function (element, nav) {
            var hasChildren = !!element.children && element.children.length > 0;
            var specifyParent = this.formatParams(nav.parentName);
            var isSpecifyParent = !!specifyParent;
            if (!isSpecifyParent && element.name == nav.name) {
                return element;
            }
            if (isSpecifyParent && element.name === specifyParent && hasChildren) {
                var target = element.children.find(function (x) { return x.name === nav.name; });
                if (!!target)
                    return target;
            }
            if (element.children != null) {
                var i;
                var result = null;
                for (i = 0; result == null && i < element.children.length; i++) {
                    result = this.searchRoute(element.children[i], nav);
                }
                return result;
            }
        };
        RoutesProcessor.prototype.transMenu = function (first) {
            var _this = this;
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
                if (((_a = second === null || second === void 0 ? void 0 : second.children) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                    left.children = _this.transMenu(second);
                }
                result.push(left);
            });
            return result;
        };
        RoutesProcessor.prototype.formatParams = function (text) {
            var _this = this;
            if (!text)
                return '';
            var regexp = /:([^(:\/\-\ )]+)/g;
            var result = text;
            var match = text.match(regexp);
            if (!!match) {
                text.match(regexp).forEach(function (i) {
                    var parameter = i.substr(1);
                    var itemId = _this.getParamKeyValue(parameter);
                    result = result.replace(':' + parameter, itemId);
                });
            }
            return result;
        };
        RoutesProcessor.prototype.getParamKeyValue = function (paramKey) {
            //let usedRouterState = routerState ? routerState : this.routerState;
            var targetRouter = this.searchRouter(this.RouterState.root, paramKey);
            if (targetRouter)
                return targetRouter.params[paramKey];
            return null;
        };
        RoutesProcessor.prototype.searchRouter = function (router, property) {
            if (property in router.params) {
                return router;
            }
            else if (router.children != null) {
                var i;
                var result = null;
                for (i = 0; result == null && i < router.children.length; i++) {
                    result = this.searchRouter(router.children[i], property);
                }
                return result;
            }
            return null;
        };
        return RoutesProcessor;
    }());

    var LayoutStateService = /** @class */ (function () {
        function LayoutStateService(injector, localizationPipe) {
            this.injector = injector;
            this.localizationPipe = localizationPipe;
            this.store = new i1$2.InternalStore({
                routerState: null,
                isFetching: false,
                hasSidebar: true,
                hasAllNav: false,
                categories: [],
                navConfig: {
                    nav: '',
                    title: '系統管理',
                    doc: '系統管理',
                },
                hasPageNav: true,
                pageNavs: [],
            });
            this.routesProcessor = new RoutesProcessor(this.injector);
            this.listenRoutes();
        }
        LayoutStateService.prototype.getStore$ = function () {
            return this.store.sliceState(function (state) { return state; });
        };
        LayoutStateService.prototype.getFetching$ = function () {
            return this.store.sliceState(function (_a) {
                var isFetching = _a.isFetching;
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
        LayoutStateService.prototype.fetchPageNavs = function (routerState) {
            //this.store.patch({ routerState });
            this.routesProcessor.RouterState = routerState;
            var navConfig = this.routesProcessor.CurrentNavConfig;
            this.store.patch({ navConfig: navConfig });
            var pageNavs = this.routesProcessor.GetPageNavs(routerState, navConfig);
            this.store.patch({ pageNavs: pageNavs });
        };
        LayoutStateService.prototype.listenRoutes = function () {
            var _this = this;
            this.routesProcessor.Category$.subscribe(function (categories) {
                _this.store.patch({
                    categories: categories,
                });
            });
        };
        return LayoutStateService;
    }());
    LayoutStateService.ɵprov = i0.ɵɵdefineInjectable({ factory: function LayoutStateService_Factory() { return new LayoutStateService(i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject(i1$2.LocalizationPipe)); }, token: LayoutStateService, providedIn: "root" });
    LayoutStateService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    LayoutStateService.ctorParameters = function () { return [
        { type: i0.Injector },
        { type: i1$2.LocalizationPipe }
    ]; };

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
            var oldList = i2.deepCopy(this._data);
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
    MSProductService.ɵprov = i0.ɵɵdefineInjectable({ factory: function MSProductService_Factory() { return new MSProductService(i0.ɵɵinject(LayoutStateService)); }, token: MSProductService, providedIn: "root" });
    MSProductService.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];
    MSProductService.ctorParameters = function () { return [
        { type: LayoutStateService }
    ]; };

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
    MSSidebarComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'ms-sidebar',
                    template: "<ng-container *ngIf=\"inited\">\r\n  <div class=\"alain-ms__sidebar-wrap\">\r\n    <div class=\"alain-ms__sidebar-product-all\" (click)=\"showProduct = !showProduct\">\r\n      <div class=\"alain-ms__sidebar-product alain-ms__sidebar-product-all-wrap\">\r\n        <i class=\"alain-ms__sidebar-product-icon\" nz-icon nzType=\"appstore\"></i>\r\n        <span class=\"alain-ms__sidebar-product-name\">{{ l.text }}</span>\r\n        <span class=\"alain-ms__sidebar-product-toolbar\">\r\n          <i nz-icon nzType=\"right\"></i>\r\n        </span>\r\n      </div>\r\n    </div>\r\n    <ul class=\"alain-ms__sidebar-product-quick\">\r\n      <li class=\"alain-ms__sidebar-product\" *ngFor=\"let i of shortcuts$|async; let idx = index\">\r\n        <i class=\"alain-ms__sidebar-product-icon {{ i.icon }} \" [link-to]=\"i\" (linkToChanged)=\"showProduct = false\"></i>\r\n        <a class=\"alain-ms__sidebar-product-name\" [link-to]=\"i\" (linkToChanged)=\"showProduct = false\">\r\n          {{ i.name }}\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"alain-ms__sidebar-products\">\r\n    <div class=\"alain-ms__products\">\r\n      <div class=\"alain-ms__products-close\" (click)=\"showProduct = false\">\r\n        <i nz-icon nzType=\"close\"></i>\r\n      </div>\r\n      <div class=\"alain-ms__products-left\">\r\n        <div class=\"alain-ms__products-category-wrap\" #categoryEl>\r\n          <div class=\"d-flex\">\r\n            <div *ngFor=\"let c of searchList\" class=\"alain-ms__products-category-column\">\r\n              <div *ngFor=\"let p of c\" class=\"alain-ms__products-category\">\r\n                <h3 class=\"alain-ms__products-category-title\" id=\"product-cat-{{ p._id }}\">{{ p.name }}</h3>\r\n                <ul class=\"list-unstyled\">\r\n                  <li\r\n                    *ngFor=\"let i of p.products\"\r\n                    class=\"alain-ms__products-category-item\"\r\n                    [ngClass]=\"{ 'alain-ms__products-category-item-active': i.shortcut }\"\r\n                  >\r\n                    <a [link-to]=\"i\" (linkToChanged)=\"showProduct = false\" class=\"alain-ms__products-category-item-link\">{{ i.name }}</a>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-container>\r\n",
                    host: {
                        '[class.alain-ms__sidebar]': 'true',
                        '[class.alain-ms__sidebar-showproduct]': 'showProduct',
                    },
                    changeDetection: i0.ChangeDetectionStrategy.OnPush
                },] }
    ];
    MSSidebarComponent.ctorParameters = function () { return [
        { type: LayoutStateService },
        { type: BrandService },
        { type: MSProductService },
        { type: i0.ChangeDetectorRef }
    ]; };
    MSSidebarComponent.propDecorators = {
        categoryEl: [{ type: i0.ViewChild, args: ['categoryEl', { static: false },] }]
    };

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
    MSTopbarComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'ms-topbar',
                    template: "<ng-template #defaultLogo>\r\n  <img src=\"./assets/logo-color.svg\" />\r\n</ng-template>\r\n<div class=\"alain-ms__topbar-main\">\r\n  <ms-all-nav *ngIf=\"allNav\"></ms-all-nav>\r\n  <div class=\"alain-ms__topbar-logo\">\r\n    <a routerLink=\"/\" class=\"alain-ms__topbar-logo-img\">\r\n      <img *ngIf=\"appInfo.logoUrl; else defaultLogo\" [src]=\"appInfo.logoUrl\"/>\r\n    </a>\r\n    <a routerLink=\"/\" class=\"alain-ms__topbar-logo-link\">\r\n      {{ appInfo.name }}\r\n    </a>\r\n  </div>\r\n  <!-- <ms-region *ngIf=\"userSrv?.isLogin\" class=\"hidden-md\"></ms-region> -->\r\n</div>\r\n<div class=\"alain-ms__topbar-widget\" *ngIf=\"inited\">\r\n  <!-- \u641C\u7D22 -->\r\n  <!-- <ms-search class=\"hidden-xs\"></ms-search> -->\r\n  <!-- \u6D88\u606F -->\r\n  <!-- <ms-notice></ms-notice> -->\r\n  <!-- \u83DC\u5355 -->\r\n  <!-- <div *ngFor=\"let p of links\" class=\"alain-ms__topbar-item\" [ngClass]=\"p.className\">\r\n    <a class=\"alain-ms__topbar-item-btn\" [link-to]=\"p\">{{ p.text }}</a>\r\n    <ul class=\"alain-ms__topbar-dd-menu\" *ngIf=\"p.links\">\r\n      <li *ngFor=\"let i of p.links\">\r\n        <a class=\"alain-ms__topbar-dd-item\" [link-to]=\"i\">{{ i.text }}</a>\r\n      </li>\r\n    </ul>\r\n  </div> -->\r\n  <!-- \u8D2D\u7269\u8F66 -->\r\n  <!-- <div class=\"alain-ms__topbar-item hidden-mobile\" class=\"hidden-xs\">\r\n    <a class=\"alain-ms__topbar-item-btn alain-ms__topbar-item-icon\" routerLink=\"/\">\r\n      <i nz-icon nzType=\"shopping-cart\"></i>\r\n    </a>\r\n  </div> -->\r\n  <!-- \u8BED\u8A00 -->\r\n  <ms-langs></ms-langs>\r\n  <!-- \u7528\u6237 -->\r\n  <ms-user></ms-user>\r\n</div>\r\n",
                    host: {
                        '[class.alain-ms__topbar]': 'true',
                        '[class.alain-ms__topbar-single]': 'allNav',
                    },
                    changeDetection: i0.ChangeDetectionStrategy.OnPush
                },] }
    ];
    MSTopbarComponent.ctorParameters = function () { return [
        { type: MSTopbarService },
        { type: i0.ChangeDetectorRef },
        { type: i1$2.EnvironmentService }
    ]; };
    MSTopbarComponent.propDecorators = {
        allNav: [{ type: i0.Input }]
    };

    var MSHelpComponent = /** @class */ (function () {
        function MSHelpComponent() {
        }
        return MSHelpComponent;
    }());
    MSHelpComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'help',
                    template: "<div class=\"ms-help__wrap\" nz-popover nzPopoverTrigger=\"click\" [nzPopoverContent]=\"helpTpl\">\r\n  <span class=\"ms-help__text\">\r\n    \u54A8\u8BE2\u00B7\u5EFA\u8BAE\r\n  </span>\r\n</div>\r\n<ng-template #helpTpl>\r\n  <div class=\"d-flex align-items-center mb-sm\">\r\n    <i nz-icon nzType=\"phone\" class=\"mr-sm text-xl\"></i>\r\n    <a routerLink=\"/\">\r\n      \u552E\u524D\u54A8\u8BE2\u7535\u8BDD\r\n      <div class=\"text-orange text-xs\">xxxx \u8F6C 1</div>\r\n    </a>\r\n  </div>\r\n  <div class=\"d-flex align-items-center mb-sm\">\r\n    <i nz-icon nzType=\"customer-service\" class=\"mr-sm text-xl\"></i>\r\n    <a routerLink=\"/smart\">\r\n      \u667A\u80FD\u987E\u95EE\r\n      <div class=\"text-grey text-xs\">\u667A\u80FD\u8BCA\u65AD\uFF0C\u79D2\u7EA7\u89E3\u7B54</div>\r\n    </a>\r\n  </div>\r\n  <div class=\"d-flex align-items-center\">\r\n    <i nz-icon nzType=\"edit\" class=\"mr-sm text-xl\"></i>\r\n    <a routerLink=\"/\">\r\n      \u5EFA\u8BAE\u53CD\u9988\r\n      <div class=\"text-grey text-xs\">XXX\u4E0D\u662F\u5B8C\u7F8E\u7684\uFF0C\u6211\u4EEC\u6E34\u671B\u60A8\u7684\u5EFA\u8BAE</div>\r\n    </a>\r\n  </div>\r\n</ng-template>\r\n",
                    host: {
                        '[class.ms-help]': 'true',
                    },
                    changeDetection: i0.ChangeDetectionStrategy.OnPush
                },] }
    ];

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
    MSLinkToDirective.decorators = [
        { type: i0.Directive, args: [{ selector: '[link-to]' },] }
    ];
    MSLinkToDirective.ctorParameters = function () { return [
        { type: router.Router }
    ]; };
    MSLinkToDirective.propDecorators = {
        i: [{ type: i0.Input, args: ['link-to',] }],
        linkToChanged: [{ type: i0.Output }],
        _click: [{ type: i0.HostListener, args: ['click', ['$event'],] }]
    };

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
            this.router$ = rxjs.merge(this.router.events.pipe(operators.filter(function (e) { return e instanceof router.NavigationEnd; })), this.srv.notify, this.menuSrv.change).subscribe(function () {
                _this._menus = null;
                _this.setTitle();
            });
        };
        MSPageBarComponent.prototype.ngOnDestroy = function () {
            this.router$.unsubscribe();
        };
        return MSPageBarComponent;
    }());
    MSPageBarComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'page-bar',
                    template: "<div class=\"ms-page-bar__title\">\r\n  <h2 *ngIf=\"title\" class=\"ms-page-bar__title-main\">\r\n    <ng-container *nzStringTemplateOutlet=\"title\">{{ title }}</ng-container>\r\n  </h2>\r\n  <div *ngIf=\"subTitle\" class=\"ms-page-bar__title-sub\">\r\n    <ng-container *nzStringTemplateOutlet=\"subTitle\">{{ subTitle }}</ng-container>\r\n  </div>\r\n</div>\r\n<div class=\"ms-page-bar__action\">\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                    host: {
                        '[class.ms-page-bar]': 'true',
                    },
                    changeDetection: i0.ChangeDetectionStrategy.OnPush
                },] }
    ];
    MSPageBarComponent.ctorParameters = function () { return [
        { type: router.Router },
        { type: BrandService },
        { type: i1$1.MenuService },
        { type: i0.ChangeDetectorRef }
    ]; };
    MSPageBarComponent.propDecorators = {
        autoTitle: [{ type: i0.Input }],
        recursiveBreadcrumb: [{ type: i0.Input }],
        title: [{ type: i0.Input }],
        subTitle: [{ type: i0.Input }]
    };
    __decorate([
        i2.InputBoolean(),
        __metadata("design:type", Object)
    ], MSPageBarComponent.prototype, "autoTitle", void 0);
    __decorate([
        i2.InputBoolean(),
        __metadata("design:type", Object)
    ], MSPageBarComponent.prototype, "recursiveBreadcrumb", void 0);

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
    MSPageNavComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'page-nav',
                    template: "<div class=\"ms-page-nav__body\">\r\n  <div class=\"ms-page-nav__stage\">\r\n    <div class=\"ms-page-nav__scene ms-page-nav__scene-main\">\r\n      <div\r\n        class=\"ms-page-nav__title\"\r\n        [ngClass]=\"{ 'ms-page-nav__back': config.backHref }\"\r\n        (click)=\"to(config.backHref!, $event)\"\r\n        [title]=\"config.backHref ? ('ms.page-nav.back' | i18n) : ''\"\r\n      >\r\n        <i *ngIf=\"config.backHref\" nz-icon nzType=\"left\"></i>\r\n        {{ config.title }}\r\n      </div>\r\n      <div class=\"ms-page-nav__list scrollbar\">\r\n        <ng-template #treeTpl let-ls let-level=\"level\">\r\n          <li *ngFor=\"let i of ls\">\r\n            <ng-container *ngIf=\"i.children.length == 0\">\r\n              <div\r\n                *ngIf=\"i.link\"\r\n                class=\"ms-page-nav__item\"\r\n                role=\"treeitem\"\r\n                routerLink=\"{{ i.link }}\"\r\n                routerLinkActive=\"ms-page-nav__item-active\"\r\n              >\r\n                <span class=\"ms-page-nav__item-icon\"></span>\r\n                <span class=\"ms-page-nav__item-tit\">{{ i.text }}</span>\r\n                <span *ngIf=\"i.badge\" class=\"ms-page-nav__item-badge\">{{ i.badge }}</span>\r\n              </div>\r\n              <a *ngIf=\"!i.link\" [href]=\"i.externalLink\" [target]=\"i.target\" class=\"ms-page-nav__item\" role=\"treeitem\">\r\n                <span class=\"ms-page-nav__item-icon\"></span>\r\n                <span class=\"ms-page-nav__item-tit\">{{ i.text }}</span>\r\n                <span *ngIf=\"i.badge\" class=\"ms-page-nav__item-badge\">{{ i.badge }}</span>\r\n              </a>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"i.children.length > 0\">\r\n              <div class=\"ms-page-nav__item\" role=\"treeitem\" (click)=\"i.active = !i.active\">\r\n                <span class=\"ms-page-nav__item-icon\">\r\n                  <i nz-icon [nzType]=\"i.active ? 'caret-down' : 'caret-right'\"></i>\r\n                </span>\r\n                <span class=\"ms-page-nav__item-tit\">{{ i.text }}</span>\r\n              </div>\r\n              <ul role=\"tree\" class=\"list-unstyled\" [ngClass]=\"{ 'd-none': !i.active }\">\r\n                <ng-container *ngTemplateOutlet=\"treeTpl; context: { $implicit: i.children, level: level + 1 }\"></ng-container>\r\n              </ul>\r\n            </ng-container>\r\n          </li>\r\n        </ng-template>\r\n        <ul role=\"tree\" class=\"list-unstyled\">\r\n          <ng-container *ngTemplateOutlet=\"treeTpl; context: { $implicit: list, level: 1 }\"></ng-container>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"ms-page-nav__control\" (click)=\"toggle()\">\r\n  <div class=\"ms-page-nav__control-wrap\">\r\n    <div class=\"ms-page-nav__control-bg\"></div>\r\n    <div class=\"ms-page-nav__control-btn\">\r\n      <i nz-icon nzType=\"menu-fold\"></i>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                    changeDetection: i0.ChangeDetectionStrategy.OnPush
                },] }
    ];
    MSPageNavComponent.ctorParameters = function () { return [
        { type: BrandService },
        { type: router.Router },
        { type: i1$1.TitleService },
        { type: i1$1.MenuService },
        { type: i0.ChangeDetectorRef }
    ]; };
    MSPageNavComponent.propDecorators = {
        config: [{ type: i0.Input }],
        list: [{ type: i0.Input }]
    };

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
    MSPageSingleComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'page-single',
                    template: "<div class=\"ms-page-single__bar\">\r\n  <div class=\"ms-page-single__wrap\" [ngClass]=\"{ 'ms-page-single__wide': wide }\">\r\n    <div class=\"ms-page-single__bar-desc\">\r\n      <div *ngIf=\"title\" class=\"ms-page-single__bar-title\">\r\n        <ng-container *nzStringTemplateOutlet=\"title\">{{ title }}</ng-container>\r\n      </div>\r\n      <div *ngIf=\"subTitle\" class=\"ms-page-single__bar-sub-title\">\r\n        <ng-container *nzStringTemplateOutlet=\"subTitle\">{{ subTitle }}</ng-container>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"extra\" class=\"ms-page-single__bar-extra\">\r\n      <ng-container *nzStringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"ms-page-single__wrap ms-page-single__body\" [ngClass]=\"{ 'ms-page-single__wide': wide }\">\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                    host: {
                        '[class.ms-page-single]': 'true',
                    },
                    changeDetection: i0.ChangeDetectionStrategy.OnPush
                },] }
    ];
    MSPageSingleComponent.ctorParameters = function () { return [
        { type: BrandService }
    ]; };
    MSPageSingleComponent.propDecorators = {
        wide: [{ type: i0.Input }],
        fixed: [{ type: i0.Input }],
        title: [{ type: i0.Input }],
        subTitle: [{ type: i0.Input }],
        extra: [{ type: i0.Input }]
    };
    __decorate([
        i2.InputBoolean(),
        __metadata("design:type", Object)
    ], MSPageSingleComponent.prototype, "wide", void 0);
    __decorate([
        i2.InputBoolean(),
        __metadata("design:type", Object)
    ], MSPageSingleComponent.prototype, "fixed", void 0);

    var MSPanelComponent = /** @class */ (function () {
        function MSPanelComponent() {
        }
        return MSPanelComponent;
    }());
    MSPanelComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'panel',
                    template: "<div class=\"ms-panel__hd\">\r\n  <div *ngIf=\"title\" class=\"ms-panel__hd-title\">\r\n    <ng-container *nzStringTemplateOutlet=\"title\">{{ title }}</ng-container>\r\n  </div>\r\n  <div *ngIf=\"extra\" class=\"ms-panel__hd-extra\">\r\n    <ng-container *nzStringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\r\n  </div>\r\n</div>\r\n<div class=\"ms-panel__bd\">\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                    host: {
                        '[class.ms-panel]': 'true',
                    },
                    changeDetection: i0.ChangeDetectionStrategy.OnPush
                },] }
    ];
    MSPanelComponent.propDecorators = {
        title: [{ type: i0.Input }],
        extra: [{ type: i0.Input }]
    };

    var MSServiceLayoutComponent = /** @class */ (function () {
        function MSServiceLayoutComponent(srv) {
            this.srv = srv;
            this.nav = false;
            this.navConfig = {};
            this.navList = [];
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
    MSServiceLayoutComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'service-layout',
                    template: "<div class=\"alain-ms__product\" [ngClass]=\"{ 'alain-ms__product-col-1': nav && !hideNav }\">\r\n  <page-nav *ngIf=\"nav\" [config]=\"navConfig\" [list]=\"navList\"></page-nav>\r\n  <div class=\"alain-ms__product-body scrollbar\">\r\n    <div class=\"alain-ms__console\">\r\n      <ng-content></ng-content>\r\n    </div>\r\n  </div>\r\n</div>\r\n"
                },] }
    ];
    MSServiceLayoutComponent.ctorParameters = function () { return [
        { type: BrandService }
    ]; };
    MSServiceLayoutComponent.propDecorators = {
        nav: [{ type: i0.Input }],
        navConfig: [{ type: i0.Input }],
        navList: [{ type: i0.Input }]
    };
    __decorate([
        i2.InputBoolean(),
        __metadata("design:type", Object)
    ], MSServiceLayoutComponent.prototype, "nav", void 0);

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
    MSSharedModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [common.CommonModule, router.RouterModule, forms.FormsModule, i1$1.AlainThemeModule.forChild(), popover.NzPopoverModule, icon.NzIconModule, outlet.NzOutletModule],
                    declarations: COMPONENTS,
                    exports: COMPONENTS,
                },] }
    ];

    var MSLayoutComponent = /** @class */ (function () {
        function MSLayoutComponent(bm, mediaMatcher, router$1, route, msg, reuseTabSrv, el, renderer, srv, doc) {
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
            router$1.events.subscribe(function (evt) {
                if (!_this.isFetching && evt instanceof router.RouteConfigLoadStart) {
                    _this.isFetching = true;
                    _this.scrollToTop();
                }
                if (evt instanceof router.NavigationError) {
                    _this.isFetching = false;
                    msg.error("\u65E0\u6CD5\u52A0\u8F7D" + evt.url + "\u8DEF\u7531", { nzDuration: 1000 * 3 });
                    return;
                }
                if (!(evt instanceof router.NavigationEnd)) {
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
            i2.updateHostClass(el.nativeElement, renderer, (_a = {},
                _a['alain-ms'] = true,
                _a[queryCls] = true,
                _a), true);
        };
        MSLayoutComponent.prototype.setBodyClass = function () {
            var _a;
            var _b = this.srv.layout, hasTopbar = _b.hasTopbar, hasSidebar = _b.hasSidebar, hasFixed = _b.hasFixed, colorWeak = _b.colorWeak;
            i2.updateHostClass(this.body, this.renderer, (_a = {
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
    MSLayoutComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'layout-ms',
                    template: "<ms-topbar [allNav]=\"hasAllNav\"></ms-topbar>\r\n<ms-sidebar *ngIf=\"hasSidebar\"></ms-sidebar>\r\n<div class=\"brand-page-loading\" [hidden]=\"!isFetching\">\r\n  <nz-spin nzSpinning></nz-spin>\r\n</div>\r\n<div class=\"alain-ms__body\" [hidden]=\"isFetching\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n<help></help>\r\n<theme-btn></theme-btn>\r\n"
                },] }
    ];
    MSLayoutComponent.ctorParameters = function () { return [
        { type: i1.BreakpointObserver },
        { type: i1.MediaMatcher },
        { type: router.Router },
        { type: router.ActivatedRoute },
        { type: message.NzMessageService },
        { type: reuseTab.ReuseTabService },
        { type: i0.ElementRef },
        { type: i0.Renderer2 },
        { type: BrandService },
        { type: undefined, decorators: [{ type: i0.Inject, args: [common.DOCUMENT,] }] }
    ]; };

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
        var router$1 = injector.get(router.Router);
        var layoutStateService = injector.get(LayoutStateService);
        router$1.events
            .pipe(operators.filter(function (event) { return event instanceof router.ResolveEnd; }))
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
    LayoutModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [
                        i1$2.CoreModule,
                        router.RouterModule,
                        forms.FormsModule,
                        dragDrop.DragDropModule,
                        MSSharedModule,
                        spin.NzSpinModule,
                        anchor.NzAnchorModule,
                        autoComplete.NzAutocompleteModule,
                        avatar.NzAvatarModule,
                        divider.NzDividerModule,
                        input.NzInputModule,
                        icon.NzIconModule,
                        i1$1.AlainThemeModule.forChild(),
                        themeBtn.ThemeBtnModule,
                    ],
                    declarations: __spread(MS_COMPONENTS),
                    exports: __spread(MS_COMPONENTS, [MS_SHARED_COMPONENTS])
                },] }
    ];
    LayoutModule.ctorParameters = function () { return []; };

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
    exports.ɵa = LAYOUT_INIT_PROVIDERS;
    exports.ɵb = init;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-tw-theme-alain-ms-layout.umd.js.map

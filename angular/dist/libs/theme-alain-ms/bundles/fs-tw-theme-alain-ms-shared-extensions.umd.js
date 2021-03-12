(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@abp/ng.core'), require('@angular/core'), require('rxjs'), require('ng-zorro-antd/table'), require('@abp/ng.theme.shared/extensions'), require('@angular/common'), require('ng-zorro-antd/button'), require('ng-zorro-antd/core/wave'), require('ng-zorro-antd/core/transition-patch'), require('ng-zorro-antd/dropdown'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/menu'), require('@delon/abc/sv'), require('@ngx-validate/core'), require('@abp/ng.theme.shared')) :
    typeof define === 'function' && define.amd ? define('@fs-tw/theme-alain-ms/shared/extensions', ['exports', '@abp/ng.core', '@angular/core', 'rxjs', 'ng-zorro-antd/table', '@abp/ng.theme.shared/extensions', '@angular/common', 'ng-zorro-antd/button', 'ng-zorro-antd/core/wave', 'ng-zorro-antd/core/transition-patch', 'ng-zorro-antd/dropdown', 'ng-zorro-antd/icon', 'ng-zorro-antd/menu', '@delon/abc/sv', '@ngx-validate/core', '@abp/ng.theme.shared'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['fs-tw'] = global['fs-tw'] || {}, global['fs-tw']['theme-alain-ms'] = global['fs-tw']['theme-alain-ms'] || {}, global['fs-tw']['theme-alain-ms'].shared = global['fs-tw']['theme-alain-ms'].shared || {}, global['fs-tw']['theme-alain-ms'].shared.extensions = {}), global.i2$1, global.ng.core, global.rxjs, global.i2, global.extensions, global.ng.common, global.i2$2, global.i3, global.i4, global.i5, global.i6, global.i7, global.i7$1, global.core, global.ng_theme_shared));
}(this, (function (exports, i2$1, i0, rxjs, i2, extensions, i1, i2$2, i3, i4, i5, i6, i7, i7$1, core, ng_theme_shared) { 'use strict';

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

    var NzTableListDirective = /** @class */ (function () {
        function NzTableListDirective(
        //private body:NzTbodyComponent,
        table, cdRef, localizationService) {
            this.table = table;
            this.cdRef = cdRef;
            this.localizationService = localizationService;
            this.subscription = new rxjs.Subscription();
            this.querySubscription = new rxjs.Subscription();
            this.loadingSubscription = new rxjs.Subscription();
            this.setInitialValues();
        }
        NzTableListDirective.prototype.setInitialValues = function () {
            this.table.nzSize = 'small';
            this.table.nzFrontPagination = false;
            this.table.nzBordered = true;
            this.table.nzShowSizeChanger = true;
        };
        NzTableListDirective.prototype.subscribeToPage = function () {
            var _this = this;
            var sub = this.table.nzQueryParams.subscribe(function (params) {
                var self = _this;
                var sort = params.sort
                    .filter(function (x) { return !!x.value; })
                    .map(function (x) {
                    return { key: x.key, order: x.value === 'ascend' ? 'asc' : 'desc' };
                })[0];
                var sortChanged = isParamsChange();
                if (!!sort) {
                    _this.list.sortKey = sort.key;
                    _this.list.sortOrder = sort.order;
                }
                else {
                    _this.list.sortKey = '';
                    _this.list.sortOrder = '';
                }
                _this.list.maxResultCount = params.pageSize;
                if (sortChanged) {
                    _this.list.page = 0;
                }
                else {
                    _this.list.page = params.pageIndex - 1;
                }
                _this.cdRef.detectChanges();
                function isParamsChange() {
                    var currentSortKey = self.list.sortKey + "-" + self.list.sortOrder + "-" + self.list.maxResultCount;
                    var changeSortKey = "--" + params.pageSize;
                    if (!!sort) {
                        changeSortKey = sort.key + "-" + sort.order + "-" + params.pageSize;
                    }
                    return currentSortKey !== changeSortKey;
                }
            });
            this.subscription.add(sub);
        };
        NzTableListDirective.prototype.subscribeToLoading = function () {
            var _this = this;
            if (!this.loadingSubscription.closed)
                this.loadingSubscription.unsubscribe();
            this.loadingSubscription = this.list.isLoading$.subscribe(function (x) {
                _this.table.nzLoading = x;
            });
        };
        NzTableListDirective.prototype.subscribeToQuery = function () {
            var _this = this;
            if (!this.querySubscription.closed)
                this.querySubscription.unsubscribe();
            this.querySubscription = this.list.query$.subscribe(function (q) {
                _this.table.onPageIndexChange(_this.list.page + 1);
                _this.table.onPageSizeChange(_this.list.maxResultCount);
            });
        };
        NzTableListDirective.prototype.ngOnChanges = function (_a) {
            var list = _a.list;
            //console.log(list.currentValue);
            this.subscribeToQuery();
            if (!list.firstChange)
                return;
            var _b = list.currentValue, maxResultCount = _b.maxResultCount, page = _b.page;
            //this.table.nzPageSize = maxResultCount;
            this.table.onPageSizeChange(maxResultCount);
            this.table.onPageIndexChange(page + 1);
        };
        NzTableListDirective.prototype.ngOnDestroy = function () {
            this.subscription.unsubscribe();
            this.querySubscription.unsubscribe();
        };
        NzTableListDirective.prototype.ngOnInit = function () {
            this.subscribeToPage();
            this.subscribeToLoading();
        };
        return NzTableListDirective;
    }());
    NzTableListDirective.ɵfac = function NzTableListDirective_Factory(t) { return new (t || NzTableListDirective)(i0.ɵɵdirectiveInject(i2.NzTableComponent), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2$1.LocalizationService)); };
    NzTableListDirective.ɵdir = i0.ɵɵdefineDirective({ type: NzTableListDirective, selectors: [["nz-table", "list", ""]], inputs: { list: "list" }, exportAs: ["nzTableList"], features: [i0.ɵɵNgOnChangesFeature] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NzTableListDirective, [{
                type: i0.Directive,
                args: [{
                        // tslint:disable-next-line
                        selector: 'nz-table[list]',
                        exportAs: 'nzTableList',
                    }]
            }], function () { return [{ type: i2.NzTableComponent }, { type: i0.ChangeDetectorRef }, { type: i2$1.LocalizationService }]; }, { list: [{
                    type: i0.Input
                }] });
    })();

    var NzTableRowDetailDirective = /** @class */ (function () {
        function NzTableRowDetailDirective(template) {
            this.template = template;
        }
        return NzTableRowDetailDirective;
    }());
    NzTableRowDetailDirective.ɵfac = function NzTableRowDetailDirective_Factory(t) { return new (t || NzTableRowDetailDirective)(i0.ɵɵdirectiveInject(i0.TemplateRef)); };
    NzTableRowDetailDirective.ɵdir = i0.ɵɵdefineDirective({ type: NzTableRowDetailDirective, selectors: [["", "row-detail-template", ""]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NzTableRowDetailDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[row-detail-template]',
                    }]
            }], function () { return [{ type: i0.TemplateRef }]; }, null);
    })();

    function GridActionsComponent_ng_container_0_ng_container_9_ng_container_1_li_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r7_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "li", 8);
            i0.ɵɵelementStart(1, "a", 9);
            i0.ɵɵlistener("click", function GridActionsComponent_ng_container_0_ng_container_9_ng_container_1_li_1_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r7_1); var action_r3 = i0.ɵɵnextContext(2).$implicit; var ctx_r6 = i0.ɵɵnextContext(2); return action_r3.action(ctx_r6.data); });
            i0.ɵɵtext(2);
            i0.ɵɵpipe(3, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var action_r3 = i0.ɵɵnextContext(2).$implicit;
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 1, action_r3.text));
        }
    }
    function GridActionsComponent_ng_container_0_ng_container_9_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, GridActionsComponent_ng_container_0_ng_container_9_ng_container_1_li_1_Template, 4, 3, "li", 7);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var action_r3 = i0.ɵɵnextContext().$implicit;
            var ctx_r4 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", action_r3.visible(ctx_r4.data));
        }
    }
    function GridActionsComponent_ng_container_0_ng_container_9_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, GridActionsComponent_ng_container_0_ng_container_9_ng_container_1_Template, 2, 1, "ng-container", 6);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var action_r3 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("abpPermission", action_r3.permission);
        }
    }
    function GridActionsComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "button", 1);
            i0.ɵɵelement(2, "i", 2);
            i0.ɵɵelementStart(3, "span");
            i0.ɵɵtext(4);
            i0.ɵɵpipe(5, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "nz-dropdown-menu", null, 3);
            i0.ɵɵelementStart(8, "ul", 4);
            i0.ɵɵtemplate(9, GridActionsComponent_ng_container_0_ng_container_9_Template, 2, 1, "ng-container", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var _r1 = i0.ɵɵreference(7);
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzDropdownMenu", _r1);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(5, 4, "AbpUi::Actions"));
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngForOf", ctx_r0.actionList)("ngForTrackBy", ctx_r0.trackByFn);
        }
    }
    var GridActionsComponent = /** @class */ (function (_super) {
        __extends(GridActionsComponent, _super);
        function GridActionsComponent(injector) {
            var _this = _super.call(this, injector) || this;
            _this.icon = 'fa fa-cog';
            _this.text = '';
            _this.trackByFn = function (_, item) { return item.text; };
            return _this;
        }
        return GridActionsComponent;
    }(extensions.GridActionsComponent));
    GridActionsComponent.ɵfac = function GridActionsComponent_Factory(t) { return new (t || GridActionsComponent)(i0.ɵɵdirectiveInject(i0.Injector)); };
    GridActionsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: GridActionsComponent, selectors: [["nz-grid-actions"]], inputs: { icon: "icon", index: "index", text: "text" }, exportAs: ["nzGridActions"], features: [i0.ɵɵProvidersFeature([
                {
                    provide: extensions.EXTENSIONS_ACTION_TYPE,
                    useValue: 'entityActions',
                },
            ]), i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [[4, "ngIf"], ["nz-button", "", "nzType", "default", "nz-dropdown", "", 1, "ml-md", 3, "nzDropdownMenu"], ["nz-icon", "", "nzType", "down"], ["menu", "nzDropdownMenu"], ["nz-menu", ""], [4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "abpPermission"], ["nz-menu-item", "", 4, "ngIf"], ["nz-menu-item", ""], [3, "click"]], template: function GridActionsComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, GridActionsComponent_ng_container_0_Template, 10, 6, "ng-container", 0);
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngIf", ctx.actionList.length > 0);
            }
        }, directives: [i1.NgIf, i2$2.NzButtonComponent, i3.NzWaveDirective, i4.ɵNzTransitionPatchDirective, i5.NzDropdownButtonDirective, i5.NzDropDownDirective, i6.NzIconDirective, i5.NzDropdownMenuComponent, i7.NzMenuDirective, i1.NgForOf, i2$1.PermissionDirective, i7.NzMenuItemDirective], pipes: [i2$1.LocalizationPipe], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GridActionsComponent, [{
                type: i0.Component,
                args: [{
                        exportAs: 'nzGridActions',
                        selector: 'nz-grid-actions',
                        templateUrl: './grid-actions.component.html',
                        providers: [
                            {
                                provide: extensions.EXTENSIONS_ACTION_TYPE,
                                useValue: 'entityActions',
                            },
                        ],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], function () { return [{ type: i0.Injector }]; }, { icon: [{
                    type: i0.Input
                }], index: [{
                    type: i0.Input
                }], text: [{
                    type: i0.Input
                }] });
    })();

    function ExtensibleTableComponent_th_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "th");
        }
    }
    var _c0 = function () { return ["ascend", "descend"]; };
    function ExtensibleTableComponent_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "th", 5);
            i0.ɵɵtext(2);
            i0.ɵɵpipe(3, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var prop_r3 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzSortFn", prop_r3.sortable)("nzColumnKey", prop_r3.name)("nzSortDirections", i0.ɵɵpureFunction0(6, _c0));
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 4, prop_r3.displayName), " ");
        }
    }
    function ExtensibleTableComponent_ng_container_8_td_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r16_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "td", 14);
            i0.ɵɵlistener("nzExpandChange", function ExtensibleTableComponent_ng_container_8_td_4_Template_td_nzExpandChange_0_listener($event) { i0.ɵɵrestoreView(_r16_1); var row_r5 = i0.ɵɵnextContext().$implicit; var ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.onExpandChange(row_r5["id"], $event); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var row_r5 = i0.ɵɵnextContext().$implicit;
            var ctx_r7 = i0.ɵɵnextContext();
            i0.ɵɵproperty("nzExpand", ctx_r7.expandSet.has(row_r5["id"]));
        }
    }
    function ExtensibleTableComponent_ng_container_8_ng_container_5_span_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 18);
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "abpLocalization");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var prop_r18 = i0.ɵɵnextContext().$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, prop_r18.displayName), " ");
        }
    }
    function ExtensibleTableComponent_ng_container_8_ng_container_5_div_3_Template(rf, ctx) {
        if (rf & 1) {
            var _r25_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 19);
            i0.ɵɵlistener("click", function ExtensibleTableComponent_ng_container_8_ng_container_5_div_3_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r25_1); var ctx_r24 = i0.ɵɵnextContext(); var prop_r18 = ctx_r24.$implicit; var i_r19 = ctx_r24.index; var row_r5 = i0.ɵɵnextContext().$implicit; var ctx_r23 = i0.ɵɵnextContext(); return prop_r18.action && prop_r18.action({ getInjected: ctx_r23.getInjected, record: row_r5, index: i_r19 }); });
            i0.ɵɵpipe(1, "async");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var prop_r18 = i0.ɵɵnextContext().$implicit;
            var row_r5 = i0.ɵɵnextContext().$implicit;
            i0.ɵɵclassProp("pointer", prop_r18.action);
            i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 3, row_r5["_" + prop_r18.name].value), i0.ɵɵsanitizeHtml);
        }
    }
    function ExtensibleTableComponent_ng_container_8_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
            var _r31_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "td", 15);
            i0.ɵɵlistener("click", function ExtensibleTableComponent_ng_container_8_ng_container_5_Template_td_click_1_listener() { i0.ɵɵrestoreView(_r31_1); var row_r5 = i0.ɵɵnextContext().$implicit; var ctx_r29 = i0.ɵɵnextContext(); return ctx_r29.selected(row_r5); });
            i0.ɵɵtemplate(2, ExtensibleTableComponent_ng_container_8_ng_container_5_span_2_Template, 3, 3, "span", 16);
            i0.ɵɵtemplate(3, ExtensibleTableComponent_ng_container_8_ng_container_5_div_3_Template, 2, 5, "div", 17);
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var prop_r18 = ctx.$implicit;
            var row_r5 = i0.ɵɵnextContext().$implicit;
            var ctx_r8 = i0.ɵɵnextContext();
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !ctx_r8.scroll);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", row_r5["_" + prop_r18.name].visible);
        }
    }
    function ExtensibleTableComponent_ng_container_8_ng_container_7_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function ExtensibleTableComponent_ng_container_8_ng_template_8_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    var _c1 = function (a0) { return { $implicit: a0 }; };
    function ExtensibleTableComponent_ng_container_8_ng_template_8_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, ExtensibleTableComponent_ng_container_8_ng_template_8_ng_container_0_Template, 1, 0, "ng-container", 10);
        }
        if (rf & 2) {
            var node_r33 = ctx.$implicit;
            i0.ɵɵnextContext();
            var _r12 = i0.ɵɵreference(11);
            var ctx_r11 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngTemplateOutlet", ctx_r11.rowDetailTemplate ? ctx_r11.rowDetailTemplate == null ? null : ctx_r11.rowDetailTemplate.template : _r12)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c1, node_r33));
        }
    }
    function ExtensibleTableComponent_ng_container_8_ng_template_10_ng_container_1_sv_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "sv", 22);
            i0.ɵɵpipe(1, "abpLocalization");
            i0.ɵɵelement(2, "span", 23);
            i0.ɵɵpipe(3, "async");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var prop_r37 = i0.ɵɵnextContext().$implicit;
            var row_r5 = i0.ɵɵnextContext(2).$implicit;
            i0.ɵɵproperty("label", i0.ɵɵpipeBind1(1, 2, prop_r37.displayName));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(3, 4, row_r5["_" + prop_r37.name].value), i0.ɵɵsanitizeHtml);
        }
    }
    function ExtensibleTableComponent_ng_container_8_ng_template_10_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, ExtensibleTableComponent_ng_container_8_ng_template_10_ng_container_1_sv_1_Template, 4, 6, "sv", 21);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var prop_r37 = ctx.$implicit;
            var row_r5 = i0.ɵɵnextContext(2).$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", row_r5["_" + prop_r37.name].visible);
        }
    }
    function ExtensibleTableComponent_ng_container_8_ng_template_10_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "sv-container", 20);
            i0.ɵɵtemplate(1, ExtensibleTableComponent_ng_container_8_ng_template_10_ng_container_1_Template, 2, 1, "ng-container", 3);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r13 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("col", ctx_r13.svRowCount);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx_r13.propList)("ngForTrackBy", ctx_r13.trackByFn);
        }
    }
    var _c2 = function (a0, a1) { return { listSelected: a0, pointer: a1 }; };
    function ExtensibleTableComponent_ng_container_8_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "tr", 6);
            i0.ɵɵelementStart(2, "td");
            i0.ɵɵelement(3, "nz-grid-actions", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, ExtensibleTableComponent_ng_container_8_td_4_Template, 1, 1, "td", 8);
            i0.ɵɵtemplate(5, ExtensibleTableComponent_ng_container_8_ng_container_5_Template, 4, 2, "ng-container", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "tr", 9);
            i0.ɵɵtemplate(7, ExtensibleTableComponent_ng_container_8_ng_container_7_Template, 1, 0, "ng-container", 10);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(8, ExtensibleTableComponent_ng_container_8_ng_template_8_Template, 1, 4, "ng-template", 11, 12, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(10, ExtensibleTableComponent_ng_container_8_ng_template_10_Template, 2, 3, "ng-template", null, 13, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var row_r5 = ctx.$implicit;
            var _r10 = i0.ɵɵreference(9);
            var ctx_r2 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(8, _c2, row_r5["id"] == ctx_r2.selectId, ctx_r2.haveSelect));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("record", row_r5);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r2.haveRowDetail);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx_r2.propList)("ngForTrackBy", ctx_r2.trackByFn);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzExpand", ctx_r2.expandSet.has(row_r5["id"]));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", _r10)("ngTemplateOutletContext", i0.ɵɵpureFunction1(11, _c1, row_r5));
        }
    }
    var DEFAULT_ACTIONS_COLUMN_WIDTH = 100;
    var ExtensibleTableComponent = /** @class */ (function (_super) {
        __extends(ExtensibleTableComponent, _super);
        function ExtensibleTableComponent(_locale, _config, _injector) {
            var _this = _super.call(this, _locale, _config, _injector) || this;
            _this._locale = _locale;
            _this._config = _config;
            _this.responsive = true;
            _this.expandSet = new Set();
            _this.selectId = null;
            _this.haveRowDetail = false;
            _this.haveSelect = false;
            _this.svRowCount = 2;
            _this.select = new i0.EventEmitter();
            _this._setColumnWidths(DEFAULT_ACTIONS_COLUMN_WIDTH);
            return _this;
        }
        ExtensibleTableComponent.prototype.onExpandChange = function (id, check) {
            if (check) {
                this.expandSet.add(id);
            }
            else
                this.expandSet.delete(id);
        };
        Object.defineProperty(ExtensibleTableComponent.prototype, "actionsText", {
            get: function () {
                var _a;
                return (_a = this._actionsText) !== null && _a !== void 0 ? _a : (this.actionList.length > 1 ? 'AbpUi::Actions' : '');
            },
            set: function (value) {
                this._actionsText = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ExtensibleTableComponent.prototype, "actionsColumnWidth", {
            set: function (width) {
                this._setColumnWidths(width ? Number(width) : undefined);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ExtensibleTableComponent.prototype, "defaultSelectId", {
            set: function (value) {
                this.selectId = value;
            },
            enumerable: false,
            configurable: true
        });
        ExtensibleTableComponent.prototype.ngOnInit = function () {
            if (this.scroll) {
                this.responsive = false;
            }
        };
        ExtensibleTableComponent.prototype._setColumnWidths = function (actionsColumn) {
            var widths = [actionsColumn];
            this.propList.forEach(function (_b) {
                var prop = _b.value;
                widths.push(prop.columnWidth);
            });
            this.columnWidths = widths;
        };
        ExtensibleTableComponent.prototype.selected = function (data) {
            if (this.haveSelect) {
                this.selectId = data['id'];
                this.select.emit(data);
            }
        };
        return ExtensibleTableComponent;
    }(extensions.ExtensibleTableComponent));
    ExtensibleTableComponent.ɵfac = function ExtensibleTableComponent_Factory(t) { return new (t || ExtensibleTableComponent)(i0.ɵɵdirectiveInject(i0.LOCALE_ID), i0.ɵɵdirectiveInject(i2$1.ConfigStateService), i0.ɵɵdirectiveInject(i0.Injector)); };
    ExtensibleTableComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ExtensibleTableComponent, selectors: [["nz-extensible-table"]], contentQueries: function ExtensibleTableComponent_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
                i0.ɵɵcontentQuery(dirIndex, NzTableRowDetailDirective, 1);
            }
            if (rf & 2) {
                var _t = void 0;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.rowDetailTemplate = _t.first);
            }
        }, hostVars: 2, hostBindings: function ExtensibleTableComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵclassProp("ant-table-rep", ctx.responsive);
            }
        }, inputs: { responsive: "responsive", actionsText: "actionsText", data: "data", list: "list", recordsTotal: "recordsTotal", actionsColumnWidth: "actionsColumnWidth", actionsTemplate: "actionsTemplate", haveRowDetail: "haveRowDetail", haveSelect: "haveSelect", svRowCount: "svRowCount", defaultSelectId: "defaultSelectId", scroll: "scroll" }, outputs: { select: "select" }, exportAs: ["nzExtensibleTable"], features: [i0.ɵɵInheritDefinitionFeature], decls: 9, vars: 12, consts: [[3, "nzData", "nzTotal", "list", "nzScroll", "nzLoading"], [3, "nzWidth"], [4, "ngIf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngFor", "ngForOf"], [3, "nzSortFn", "nzColumnKey", "nzSortDirections"], [1, "bg-white", 3, "ngClass"], [3, "record"], [3, "nzExpand", "nzExpandChange", 4, "ngIf"], [3, "nzExpand"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["row-detail-template", ""], ["nodeTemplate", ""], ["defaultTemplate", ""], [3, "nzExpand", "nzExpandChange"], [3, "click"], ["class", "ant-table-rep__title", 4, "ngIf"], [3, "innerHTML", "pointer", "click", 4, "ngIf"], [1, "ant-table-rep__title"], [3, "innerHTML", "click"], [3, "col"], [3, "label", 4, "ngIf"], [3, "label"], [2, "color", "black", 3, "innerHTML"]], template: function ExtensibleTableComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "nz-table", 0);
                i0.ɵɵpipe(1, "async");
                i0.ɵɵelementStart(2, "thead");
                i0.ɵɵelementStart(3, "tr");
                i0.ɵɵelement(4, "th", 1);
                i0.ɵɵtemplate(5, ExtensibleTableComponent_th_5_Template, 1, 0, "th", 2);
                i0.ɵɵtemplate(6, ExtensibleTableComponent_ng_container_6_Template, 4, 7, "ng-container", 3);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(7, "tbody");
                i0.ɵɵtemplate(8, ExtensibleTableComponent_ng_container_8_Template, 12, 13, "ng-container", 4);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("nzData", ctx.data)("nzTotal", ctx.recordsTotal)("list", ctx.list)("nzScroll", ctx.scroll)("nzLoading", i0.ɵɵpipeBind1(1, 10, ctx.list.isLoading$));
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("nzWidth", ctx.columnWidths[0] + "px");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.haveRowDetail);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngForOf", ctx.propList)("ngForTrackBy", ctx.trackByFn);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngForOf", ctx.data);
            }
        }, directives: [i2.NzTableComponent, NzTableListDirective, i2.NzTheadComponent, i2.NzTrDirective, i2.NzTableCellDirective, i2.NzThMeasureDirective, i1.NgIf, i1.NgForOf, i2.NzTbodyComponent, i2.NzThAddOnComponent, i1.NgClass, GridActionsComponent, i2.NzTrExpandDirective, i2.NzTableFixedRowComponent, i1.NgTemplateOutlet, NzTableRowDetailDirective, i2.NzTdAddOnComponent, i7$1.SVContainerComponent, i7$1.SVComponent], pipes: [i1.AsyncPipe, i2$1.LocalizationPipe], styles: [".listSelected[_ngcontent-%COMP%]{background-color:rgba(33,33,230,.4392156862745098)!important}nz-list-item[_ngcontent-%COMP%]{font-size:15px}.bg-white[_ngcontent-%COMP%]{background-color:#fff}.pointer[_ngcontent-%COMP%]{cursor:pointer}"], changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ExtensibleTableComponent, [{
                type: i0.Component,
                args: [{
                        exportAs: 'nzExtensibleTable',
                        selector: 'nz-extensible-table',
                        styleUrls: ['./extensible-table.component.css'],
                        templateUrl: './extensible-table.component.html',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        host: {
                            '[class.ant-table-rep]': "responsive",
                        },
                    }]
            }], function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i0.LOCALE_ID]
                        }] }, { type: i2$1.ConfigStateService }, { type: i0.Injector }];
        }, { responsive: [{
                    type: i0.Input
                }], actionsText: [{
                    type: i0.Input
                }], rowDetailTemplate: [{
                    type: i0.ContentChild,
                    args: [NzTableRowDetailDirective]
                }], data: [{
                    type: i0.Input
                }], list: [{
                    type: i0.Input
                }], recordsTotal: [{
                    type: i0.Input
                }], actionsColumnWidth: [{
                    type: i0.Input
                }], actionsTemplate: [{
                    type: i0.Input
                }], haveRowDetail: [{
                    type: i0.Input
                }], haveSelect: [{
                    type: i0.Input
                }], svRowCount: [{
                    type: i0.Input
                }], defaultSelectId: [{
                    type: i0.Input
                }], scroll: [{
                    type: i0.Input
                }], select: [{
                    type: i0.Output
                }] });
    })();

    function PageToolbarComponent_div_1_ng_container_1_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function PageToolbarComponent_div_1_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, PageToolbarComponent_div_1_ng_container_1_ng_container_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 7);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var component_r7 = ctx.ngIf;
            var action_r1 = i0.ɵɵnextContext(3).$implicit;
            var ctx_r4 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngComponentOutlet", component_r7)("ngComponentOutletInjector", ctx_r4.createInjector(action_r1));
        }
    }
    function PageToolbarComponent_div_1_ng_container_1_ng_container_1_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r11_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 8);
            i0.ɵɵlistener("click", function PageToolbarComponent_div_1_ng_container_1_ng_container_1_ng_template_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r11_1); var action_r1 = i0.ɵɵnextContext(3).$implicit; var ctx_r10 = i0.ɵɵnextContext(); return action_r1.action(ctx_r10.data); });
            i0.ɵɵelement(1, "i", 9);
            i0.ɵɵtext(2);
            i0.ɵɵpipe(3, "abpLocalization");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var action_r1 = i0.ɵɵnextContext(3).$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("mr-1", action_r1.icon);
            i0.ɵɵproperty("ngClass", action_r1.icon);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 4, action_r1.text), " ");
        }
    }
    function PageToolbarComponent_div_1_ng_container_1_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, PageToolbarComponent_div_1_ng_container_1_ng_container_1_ng_container_1_Template, 2, 2, "ng-container", 5);
            i0.ɵɵtemplate(2, PageToolbarComponent_div_1_ng_container_1_ng_container_1_ng_template_2_Template, 4, 6, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var _r5 = i0.ɵɵreference(3);
            var action_r1 = i0.ɵɵnextContext(2).$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", action_r1.component)("ngIfElse", _r5);
        }
    }
    function PageToolbarComponent_div_1_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, PageToolbarComponent_div_1_ng_container_1_ng_container_1_Template, 4, 2, "ng-container", 4);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var action_r1 = i0.ɵɵnextContext().$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("abpPermission", action_r1.permission);
        }
    }
    function PageToolbarComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 2);
            i0.ɵɵtemplate(1, PageToolbarComponent_div_1_ng_container_1_Template, 2, 1, "ng-container", 3);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var action_r1 = ctx.$implicit;
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", action_r1.visible(ctx_r0.data));
        }
    }
    var PageToolbarComponent = /** @class */ (function (_super) {
        __extends(PageToolbarComponent, _super);
        function PageToolbarComponent(_injector) {
            var _this = _super.call(this, _injector) || this;
            _this._injector = _injector;
            _this.trackByFn = function (_, item) { return item.action || item.component; };
            return _this;
        }
        return PageToolbarComponent;
    }(extensions.PageToolbarComponent));
    PageToolbarComponent.ɵfac = function PageToolbarComponent_Factory(t) { return new (t || PageToolbarComponent)(i0.ɵɵdirectiveInject(i0.Injector)); };
    PageToolbarComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PageToolbarComponent, selectors: [["nz-page-toolbar"]], exportAs: ["nzPageToolbar"], features: [i0.ɵɵProvidersFeature([
                {
                    provide: extensions.EXTENSIONS_ACTION_TYPE,
                    useValue: 'toolbarActions',
                },
            ]), i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 2, consts: [["id", "AbpContentToolbar", 1, "row", "justify-content-end", "mx-n1"], ["class", "col-auto px-1 pt-2", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "col-auto", "px-1", "pt-2"], [4, "ngIf"], [4, "abpPermission"], [4, "ngIf", "ngIfElse"], ["button", ""], [4, "ngComponentOutlet", "ngComponentOutletInjector"], ["nz-button", "", "nzType", "primary", 3, "click"], [3, "ngClass"]], template: function PageToolbarComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵtemplate(1, PageToolbarComponent_div_1_Template, 2, 1, "div", 1);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngForOf", ctx.actionList)("ngForTrackBy", ctx.trackByFn);
            }
        }, directives: [i1.NgForOf, i1.NgIf, i2$1.PermissionDirective, i1.NgComponentOutlet, i2$2.NzButtonComponent, i3.NzWaveDirective, i4.ɵNzTransitionPatchDirective, i1.NgClass], pipes: [i2$1.LocalizationPipe], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PageToolbarComponent, [{
                type: i0.Component,
                args: [{
                        exportAs: 'nzPageToolbar',
                        selector: 'nz-page-toolbar',
                        templateUrl: './page-toolbar.component.html',
                        providers: [
                            {
                                provide: extensions.EXTENSIONS_ACTION_TYPE,
                                useValue: 'toolbarActions',
                            },
                        ],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], function () { return [{ type: i0.Injector }]; }, null);
    })();

    var declarationsWithExports = [
        ExtensibleTableComponent,
        NzTableRowDetailDirective,
        GridActionsComponent,
        PageToolbarComponent,
        NzTableListDirective,
    ];
    var ZORRO_MODULES = [
        i2$2.NzButtonModule,
        i5.NzDropDownModule,
        i6.NzIconModule,
        i2.NzTableModule
    ];
    var BaseUiExtensionsModule = /** @class */ (function () {
        function BaseUiExtensionsModule() {
        }
        return BaseUiExtensionsModule;
    }());
    BaseUiExtensionsModule.ɵfac = function BaseUiExtensionsModule_Factory(t) { return new (t || BaseUiExtensionsModule)(); };
    BaseUiExtensionsModule.ɵmod = i0.ɵɵdefineNgModule({ type: BaseUiExtensionsModule });
    BaseUiExtensionsModule.ɵinj = i0.ɵɵdefineInjector({ imports: [__spread([
                i2$1.CoreModule,
                ng_theme_shared.ThemeSharedModule,
                core.NgxValidateCoreModule,
                extensions.UiExtensionsModule,
                i7$1.SVModule
            ], ZORRO_MODULES), extensions.UiExtensionsModule,
            i7$1.SVModule] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(BaseUiExtensionsModule, { declarations: [ExtensibleTableComponent,
                NzTableRowDetailDirective,
                GridActionsComponent,
                PageToolbarComponent,
                NzTableListDirective], imports: [i2$1.CoreModule,
                ng_theme_shared.ThemeSharedModule,
                core.NgxValidateCoreModule,
                extensions.UiExtensionsModule,
                i7$1.SVModule, i2$2.NzButtonModule,
                i5.NzDropDownModule,
                i6.NzIconModule,
                i2.NzTableModule], exports: [ExtensibleTableComponent,
                NzTableRowDetailDirective,
                GridActionsComponent,
                PageToolbarComponent,
                NzTableListDirective, extensions.UiExtensionsModule,
                i7$1.SVModule] });
    })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseUiExtensionsModule, [{
                type: i0.NgModule,
                args: [{
                        exports: __spread(declarationsWithExports, [
                            extensions.UiExtensionsModule,
                            i7$1.SVModule
                        ]),
                        declarations: __spread(declarationsWithExports),
                        imports: __spread([
                            i2$1.CoreModule,
                            ng_theme_shared.ThemeSharedModule,
                            core.NgxValidateCoreModule,
                            extensions.UiExtensionsModule,
                            i7$1.SVModule
                        ], ZORRO_MODULES),
                    }]
            }], null, null);
    })();
    var UiExtensionsModule = /** @class */ (function () {
        function UiExtensionsModule() {
        }
        return UiExtensionsModule;
    }());
    UiExtensionsModule.ɵfac = function UiExtensionsModule_Factory(t) { return new (t || UiExtensionsModule)(); };
    UiExtensionsModule.ɵmod = i0.ɵɵdefineNgModule({ type: UiExtensionsModule });
    UiExtensionsModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[BaseUiExtensionsModule], BaseUiExtensionsModule] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(UiExtensionsModule, { imports: [BaseUiExtensionsModule], exports: [BaseUiExtensionsModule] }); })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UiExtensionsModule, [{
                type: i0.NgModule,
                args: [{
                        exports: [BaseUiExtensionsModule],
                        imports: [BaseUiExtensionsModule],
                    }]
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.BaseUiExtensionsModule = BaseUiExtensionsModule;
    exports.ExtensibleTableComponent = ExtensibleTableComponent;
    exports.GridActionsComponent = GridActionsComponent;
    exports.NzTableListDirective = NzTableListDirective;
    exports.NzTableRowDetailDirective = NzTableRowDetailDirective;
    exports.PageToolbarComponent = PageToolbarComponent;
    exports.UiExtensionsModule = UiExtensionsModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-tw-theme-alain-ms-shared-extensions.umd.js.map

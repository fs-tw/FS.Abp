(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@abp/ng.core'), require('@angular/core'), require('rxjs'), require('ng-zorro-antd/table'), require('@abp/ng.theme.shared/extensions'), require('@angular/common'), require('ng-zorro-antd/button'), require('ng-zorro-antd/core/wave'), require('ng-zorro-antd/core/transition-patch'), require('ng-zorro-antd/dropdown'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/menu'), require('@ngx-validate/core'), require('@abp/ng.theme.shared')) :
    typeof define === 'function' && define.amd ? define('@fs-tw/theme-alain-ms/shared/extensions', ['exports', '@abp/ng.core', '@angular/core', 'rxjs', 'ng-zorro-antd/table', '@abp/ng.theme.shared/extensions', '@angular/common', 'ng-zorro-antd/button', 'ng-zorro-antd/core/wave', 'ng-zorro-antd/core/transition-patch', 'ng-zorro-antd/dropdown', 'ng-zorro-antd/icon', 'ng-zorro-antd/menu', '@ngx-validate/core', '@abp/ng.theme.shared'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['fs-tw'] = global['fs-tw'] || {}, global['fs-tw']['theme-alain-ms'] = global['fs-tw']['theme-alain-ms'] || {}, global['fs-tw']['theme-alain-ms'].shared = global['fs-tw']['theme-alain-ms'].shared || {}, global['fs-tw']['theme-alain-ms'].shared.extensions = {}), global.i2$1, global.ng.core, global.rxjs, global.i2, global.extensions, global.ng.common, global.i2$2, global.i3, global.i4, global.i5, global.i6, global.i7, global.core, global.ng_theme_shared));
}(this, (function (exports, i2$1, i0, rxjs, i2, extensions, i1, i2$2, i3, i4, i5, i6, i7, core, ng_theme_shared) { 'use strict';

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

    var _c0 = function () { return ["ascend", "descend"]; };
    function ExtensibleTableComponent_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "th", 4);
            i0.ɵɵtext(2);
            i0.ɵɵpipe(3, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var prop_r2 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzSortFn", prop_r2.sortable)("nzColumnKey", prop_r2.name)("nzSortDirections", i0.ɵɵpureFunction0(6, _c0));
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 4, prop_r2.displayName), " ");
        }
    }
    function ExtensibleTableComponent_tr_6_ng_container_3_div_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r11_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 8);
            i0.ɵɵlistener("click", function ExtensibleTableComponent_tr_6_ng_container_3_div_2_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r11_1); var ctx_r10 = i0.ɵɵnextContext(); var prop_r6 = ctx_r10.$implicit; var i_r7 = ctx_r10.index; var row_r4 = i0.ɵɵnextContext().$implicit; var ctx_r9 = i0.ɵɵnextContext(); return prop_r6.action && prop_r6.action({ getInjected: ctx_r9.getInjected, record: row_r4, index: i_r7 }); });
            i0.ɵɵpipe(1, "async");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var prop_r6 = i0.ɵɵnextContext().$implicit;
            var row_r4 = i0.ɵɵnextContext().$implicit;
            i0.ɵɵclassProp("pointer", prop_r6.action);
            i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 3, row_r4["_" + prop_r6.name].value), i0.ɵɵsanitizeHtml);
        }
    }
    function ExtensibleTableComponent_tr_6_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "td");
            i0.ɵɵtemplate(2, ExtensibleTableComponent_tr_6_ng_container_3_div_2_Template, 2, 5, "div", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var prop_r6 = ctx.$implicit;
            var row_r4 = i0.ɵɵnextContext().$implicit;
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", row_r4["_" + prop_r6.name].visible);
        }
    }
    function ExtensibleTableComponent_tr_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "tr", 5);
            i0.ɵɵelementStart(1, "td");
            i0.ɵɵelement(2, "nz-grid-actions", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(3, ExtensibleTableComponent_tr_6_ng_container_3_Template, 3, 1, "ng-container", 2);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var row_r4 = ctx.$implicit;
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("record", row_r4);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx_r1.propList)("ngForTrackBy", ctx_r1.trackByFn);
        }
    }
    var DEFAULT_ACTIONS_COLUMN_WIDTH = 75;
    var ExtensibleTableComponent = /** @class */ (function (_super) {
        __extends(ExtensibleTableComponent, _super);
        function ExtensibleTableComponent(_locale, _config, _injector) {
            var _this = _super.call(this, _locale, _config, _injector) || this;
            _this._locale = _locale;
            _this._config = _config;
            _this._setColumnWidths(DEFAULT_ACTIONS_COLUMN_WIDTH);
            return _this;
        }
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
        ExtensibleTableComponent.prototype._setColumnWidths = function (actionsColumn) {
            var widths = [actionsColumn];
            this.propList.forEach(function (_b) {
                var prop = _b.value;
                widths.push(prop.columnWidth);
            });
            this.columnWidths = widths;
        };
        return ExtensibleTableComponent;
    }(extensions.ExtensibleTableComponent));
    ExtensibleTableComponent.ɵfac = function ExtensibleTableComponent_Factory(t) { return new (t || ExtensibleTableComponent)(i0.ɵɵdirectiveInject(i0.LOCALE_ID), i0.ɵɵdirectiveInject(i2$1.ConfigStateService), i0.ɵɵdirectiveInject(i0.Injector)); };
    ExtensibleTableComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ExtensibleTableComponent, selectors: [["nz-extensible-table"]], inputs: { actionsText: "actionsText", data: "data", list: "list", recordsTotal: "recordsTotal", actionsColumnWidth: "actionsColumnWidth", actionsTemplate: "actionsTemplate" }, exportAs: ["nzExtensibleTable"], features: [i0.ɵɵInheritDefinitionFeature], decls: 7, vars: 7, consts: [[3, "nzData", "nzTotal", "list"], [3, "nzWidth"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "bg-white", 4, "ngFor", "ngForOf"], [3, "nzSortFn", "nzColumnKey", "nzSortDirections"], [1, "bg-white"], [3, "record"], [3, "innerHTML", "pointer", "click", 4, "ngIf"], [3, "innerHTML", "click"]], template: function ExtensibleTableComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "nz-table", 0);
                i0.ɵɵelementStart(1, "thead");
                i0.ɵɵelementStart(2, "tr");
                i0.ɵɵelement(3, "th", 1);
                i0.ɵɵtemplate(4, ExtensibleTableComponent_ng_container_4_Template, 4, 7, "ng-container", 2);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "tbody");
                i0.ɵɵtemplate(6, ExtensibleTableComponent_tr_6_Template, 4, 3, "tr", 3);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("nzData", ctx.data)("nzTotal", ctx.recordsTotal)("list", ctx.list);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("nzWidth", ctx.columnWidths[0] + "px");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngForOf", ctx.propList)("ngForTrackBy", ctx.trackByFn);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngForOf", ctx.data);
            }
        }, directives: [i2.NzTableComponent, NzTableListDirective, i2.NzTheadComponent, i2.NzTrDirective, i2.NzTableCellDirective, i2.NzThMeasureDirective, i1.NgForOf, i2.NzTbodyComponent, i2.NzThAddOnComponent, GridActionsComponent, i1.NgIf], pipes: [i2$1.LocalizationPipe, i1.AsyncPipe], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ExtensibleTableComponent, [{
                type: i0.Component,
                args: [{
                        exportAs: 'nzExtensibleTable',
                        selector: 'nz-extensible-table',
                        templateUrl: './extensible-table.component.html',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i0.LOCALE_ID]
                        }] }, { type: i2$1.ConfigStateService }, { type: i0.Injector }];
        }, { actionsText: [{
                    type: i0.Input
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
        GridActionsComponent,
        PageToolbarComponent,
        NzTableListDirective
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
                extensions.UiExtensionsModule
            ], ZORRO_MODULES), extensions.UiExtensionsModule] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(BaseUiExtensionsModule, { declarations: [ExtensibleTableComponent,
                GridActionsComponent,
                PageToolbarComponent,
                NzTableListDirective], imports: [i2$1.CoreModule,
                ng_theme_shared.ThemeSharedModule,
                core.NgxValidateCoreModule,
                extensions.UiExtensionsModule, i2$2.NzButtonModule,
                i5.NzDropDownModule,
                i6.NzIconModule,
                i2.NzTableModule], exports: [ExtensibleTableComponent,
                GridActionsComponent,
                PageToolbarComponent,
                NzTableListDirective, extensions.UiExtensionsModule] });
    })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseUiExtensionsModule, [{
                type: i0.NgModule,
                args: [{
                        exports: __spread(declarationsWithExports, [
                            extensions.UiExtensionsModule
                        ]),
                        declarations: __spread(declarationsWithExports),
                        imports: __spread([
                            i2$1.CoreModule,
                            ng_theme_shared.ThemeSharedModule,
                            core.NgxValidateCoreModule,
                            extensions.UiExtensionsModule
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
    exports.PageToolbarComponent = PageToolbarComponent;
    exports.UiExtensionsModule = UiExtensionsModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-tw-theme-alain-ms-shared-extensions.umd.js.map

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@abp/ng.core'), require('@angular/core'), require('rxjs'), require('ng-zorro-antd/table'), require('@abp/ng.theme.shared/extensions'), require('ng-zorro-antd/button'), require('ng-zorro-antd/dropdown'), require('ng-zorro-antd/icon'), require('@ngx-validate/core'), require('@abp/ng.theme.shared'), require('@delon/abc/sv')) :
    typeof define === 'function' && define.amd ? define('@fs-tw/theme-alain-ms/shared/extensions', ['exports', '@abp/ng.core', '@angular/core', 'rxjs', 'ng-zorro-antd/table', '@abp/ng.theme.shared/extensions', 'ng-zorro-antd/button', 'ng-zorro-antd/dropdown', 'ng-zorro-antd/icon', '@ngx-validate/core', '@abp/ng.theme.shared', '@delon/abc/sv'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['fs-tw'] = global['fs-tw'] || {}, global['fs-tw']['theme-alain-ms'] = global['fs-tw']['theme-alain-ms'] || {}, global['fs-tw']['theme-alain-ms'].shared = global['fs-tw']['theme-alain-ms'].shared || {}, global['fs-tw']['theme-alain-ms'].shared.extensions = {}), global.ng_core, global.ng.core, global.rxjs, global.table, global.extensions, global.button, global.dropdown, global.icon, global.core$1, global.ng_theme_shared, global.sv));
}(this, (function (exports, ng_core, core, rxjs, table, extensions, button, dropdown, icon, core$1, ng_theme_shared, sv) { 'use strict';

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
    NzTableListDirective.decorators = [
        { type: core.Directive, args: [{
                    // tslint:disable-next-line
                    selector: 'nz-table[list]',
                    exportAs: 'nzTableList',
                },] }
    ];
    NzTableListDirective.ctorParameters = function () { return [
        { type: table.NzTableComponent },
        { type: core.ChangeDetectorRef },
        { type: ng_core.LocalizationService }
    ]; };
    NzTableListDirective.propDecorators = {
        list: [{ type: core.Input }]
    };

    var NzTableRowDetailDirective = /** @class */ (function () {
        function NzTableRowDetailDirective(template) {
            this.template = template;
        }
        return NzTableRowDetailDirective;
    }());
    NzTableRowDetailDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[row-detail-template]',
                },] }
    ];
    NzTableRowDetailDirective.ctorParameters = function () { return [
        { type: core.TemplateRef }
    ]; };

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
            _this.select = new core.EventEmitter();
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
    ExtensibleTableComponent.decorators = [
        { type: core.Component, args: [{
                    exportAs: 'nzExtensibleTable',
                    selector: 'nz-extensible-table',
                    template: "\r\n  <nz-table [nzData]=\"data\" [nzTotal]=\"recordsTotal\" [list]=\"list\"\r\n    \r\n  [nzScroll]=\"scroll\"  [nzLoading]=\"list.isLoading$ | async\">\r\n    <thead>\r\n      <tr>\r\n        <th [nzWidth]=\"columnWidths[0]+'px'\"></th>\r\n        <th *ngIf=\"haveRowDetail\" [nzWidth]=\"'50px'\"></th>\r\n        <ng-container *ngFor=\"let prop of propList; let i = index; trackBy: trackByFn\">\r\n          <th [nzSortFn]=\"prop.sortable\" [nzWidth]=\"prop.columnWidth+'px'\" [nzColumnKey]=\"prop.name\" [nzSortDirections]=\"['ascend', 'descend']\">\r\n            {{ prop.displayName | abpLocalization }}\r\n          </th>\r\n        </ng-container>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <ng-container *ngFor=\"let row of data;let no = index\">\r\n        <tr class=\"bg-white\" [ngClass]=\"{ listSelected: row['id'] == selectId,pointer:haveSelect }\">\r\n          <td>\r\n            <nz-grid-actions [record]=\"row\"></nz-grid-actions>\r\n          </td>\r\n  \r\n          <td *ngIf=\"haveRowDetail\" [nzExpand]=\"expandSet.has(row['id'])\" (nzExpandChange)=\"onExpandChange(row['id'], $event)\"></td>\r\n  \r\n          <ng-container *ngFor=\"let prop of propList; let i = index; trackBy: trackByFn\">\r\n\r\n            <td (click)=\"selected(row)\">\r\n              <span class=\"ant-table-rep__title\" *ngIf=\"!scroll\" >\r\n                {{ prop.displayName | abpLocalization }}\r\n              </span>\r\n              <div  *ngIf=\"row['_' + prop.name].visible\" [innerHTML]=\"row['_' + prop.name].value | async\" (click)=\"\r\n                  prop.action && prop.action({ getInjected: getInjected, record: row, index: i })\r\n                \" [class.pointer]=\"prop.action\"></div>\r\n            </td>\r\n          </ng-container>\r\n        </tr>\r\n  \r\n        <tr [nzExpand]=\"expandSet.has(row['id'])\">\r\n          <ng-container *ngTemplateOutlet=\"nodeTemplate; context: { $implicit: row }\"></ng-container>\r\n        </tr>\r\n  \r\n        <ng-template #nodeTemplate row-detail-template let-node>\r\n          <ng-container *ngTemplateOutlet=\"\r\n              rowDetailTemplate ? rowDetailTemplate?.template : defaultTemplate;\r\n                context: { $implicit: node }\r\n              \"></ng-container>\r\n        </ng-template>\r\n  \r\n        <ng-template #defaultTemplate let-node>\r\n          <sv-container [col]=\"svRowCount\">\u3000\r\n            <ng-container *ngFor=\"let prop of propList; let i = index; trackBy: trackByFn\">            \r\n              <sv *ngIf=\"row['_' + prop.name].visible\" [label]=\"prop.displayName| abpLocalization\"> <span  style=\"color: black\"\r\n                  [innerHTML]=\"row['_' + prop.name].value | async\"></span></sv>\r\n            </ng-container>\r\n          </sv-container>\r\n        </ng-template>\r\n  \r\n  \r\n      </ng-container>\r\n    </tbody>\r\n  </nz-table>\r\n\r\n",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    host: {
                        '[class.ant-table-rep]': "responsive",
                    },
                    styles: [".listSelected{background-color:rgba(33,33,230,.4392156862745098)!important}nz-list-item{font-size:15px}.bg-white{background-color:#fff}.pointer{cursor:pointer}"]
                },] }
    ];
    ExtensibleTableComponent.ctorParameters = function () { return [
        { type: String, decorators: [{ type: core.Inject, args: [core.LOCALE_ID,] }] },
        { type: ng_core.ConfigStateService },
        { type: core.Injector }
    ]; };
    ExtensibleTableComponent.propDecorators = {
        responsive: [{ type: core.Input }],
        actionsText: [{ type: core.Input }],
        rowDetailTemplate: [{ type: core.ContentChild, args: [NzTableRowDetailDirective,] }],
        data: [{ type: core.Input }],
        list: [{ type: core.Input }],
        recordsTotal: [{ type: core.Input }],
        actionsColumnWidth: [{ type: core.Input }],
        actionsTemplate: [{ type: core.Input }],
        haveRowDetail: [{ type: core.Input }],
        haveSelect: [{ type: core.Input }],
        svRowCount: [{ type: core.Input }],
        defaultSelectId: [{ type: core.Input }],
        scroll: [{ type: core.Input }],
        select: [{ type: core.Output }]
    };

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
    GridActionsComponent.decorators = [
        { type: core.Component, args: [{
                    exportAs: 'nzGridActions',
                    selector: 'nz-grid-actions',
                    template: "<ng-container *ngIf=\"actionList.length > 0\">\r\n  <button\r\n    nz-button\r\n    nzType=\"default\"\r\n    nz-dropdown\r\n    [nzDropdownMenu]=\"menu\"\r\n    class=\"ml-md\"\r\n  >\r\n    <i nz-icon nzType=\"down\"></i>\r\n    <span>{{ 'AbpUi::Actions' | abpLocalization }}</span>\r\n  </button>\r\n\r\n  <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n    <ul nz-menu>\r\n      <ng-container *ngFor=\"let action of actionList; trackBy: trackByFn\">\r\n        <ng-container *abpPermission=\"action.permission\">\r\n          <li nz-menu-item *ngIf=\"action.visible(data)\">\r\n            <a (click)=\"action.action(data)\">{{\r\n              action.text | abpLocalization\r\n            }}</a>\r\n          </li>\r\n        </ng-container>\r\n      </ng-container>\r\n\r\n\r\n    </ul>\r\n  </nz-dropdown-menu>\r\n</ng-container>",
                    providers: [
                        {
                            provide: extensions.EXTENSIONS_ACTION_TYPE,
                            useValue: 'entityActions',
                        },
                    ],
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                },] }
    ];
    GridActionsComponent.ctorParameters = function () { return [
        { type: core.Injector }
    ]; };
    GridActionsComponent.propDecorators = {
        icon: [{ type: core.Input }],
        index: [{ type: core.Input }],
        text: [{ type: core.Input }]
    };

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
    PageToolbarComponent.decorators = [
        { type: core.Component, args: [{
                    exportAs: 'nzPageToolbar',
                    selector: 'nz-page-toolbar',
                    template: "<div class=\"row justify-content-end mx-n1\" id=\"AbpContentToolbar\">\r\n  <div class=\"col-auto px-1 pt-2\" *ngFor=\"let action of actionList; trackBy: trackByFn\">\r\n    <ng-container *ngIf=\"action.visible(data)\">\r\n      <ng-container *abpPermission=\"action.permission\">\r\n        <ng-container *ngIf=\"action.component as component; else button\">\r\n          <ng-container\r\n            *ngComponentOutlet=\"component; injector: createInjector(action)\"\r\n          ></ng-container>\r\n        </ng-container>\r\n\r\n        <ng-template #button>\r\n          <button nz-button nzType=\"primary\" (click)=\"action.action(data)\">\r\n            <i [ngClass]=\"action.icon\" [class.mr-1]=\"action.icon\"></i>\r\n            {{ action.text | abpLocalization }}\r\n          </button>\r\n        </ng-template>\r\n      </ng-container>\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n",
                    providers: [
                        {
                            provide: extensions.EXTENSIONS_ACTION_TYPE,
                            useValue: 'toolbarActions',
                        },
                    ],
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                },] }
    ];
    PageToolbarComponent.ctorParameters = function () { return [
        { type: core.Injector }
    ]; };

    var declarationsWithExports = [
        ExtensibleTableComponent,
        NzTableRowDetailDirective,
        GridActionsComponent,
        PageToolbarComponent,
        NzTableListDirective,
    ];
    var ZORRO_MODULES = [
        button.NzButtonModule,
        dropdown.NzDropDownModule,
        icon.NzIconModule,
        table.NzTableModule
    ];
    var BaseUiExtensionsModule = /** @class */ (function () {
        function BaseUiExtensionsModule() {
        }
        return BaseUiExtensionsModule;
    }());
    BaseUiExtensionsModule.decorators = [
        { type: core.NgModule, args: [{
                    exports: __spread(declarationsWithExports, [
                        extensions.UiExtensionsModule,
                        sv.SVModule
                    ]),
                    declarations: __spread(declarationsWithExports),
                    imports: __spread([
                        ng_core.CoreModule,
                        ng_theme_shared.ThemeSharedModule,
                        core$1.NgxValidateCoreModule,
                        extensions.UiExtensionsModule,
                        sv.SVModule
                    ], ZORRO_MODULES),
                },] }
    ];
    var UiExtensionsModule = /** @class */ (function () {
        function UiExtensionsModule() {
        }
        return UiExtensionsModule;
    }());
    UiExtensionsModule.decorators = [
        { type: core.NgModule, args: [{
                    exports: [BaseUiExtensionsModule],
                    imports: [BaseUiExtensionsModule],
                },] }
    ];

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

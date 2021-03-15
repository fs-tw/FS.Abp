(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@abp/ng.core'), require('@angular/router'), require('@angular/common'), require('@angular/forms'), require('ngx-quill'), require('ng-zorro-antd/grid'), require('ng-zorro-antd/input'), require('ng-zorro-antd/table'), require('ng-zorro-antd/dropdown'), require('ng-zorro-antd/button'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/modal'), require('ng-zorro-antd/radio'), require('ng-zorro-antd/upload'), require('ng-zorro-antd/spin'), require('ng-zorro-antd/card'), require('ng-zorro-antd/select'), require('ng-zorro-antd/date-picker'), require('ng-zorro-antd/tabs'), require('@delon/abc/se'), require('@abp/ng.theme.shared'), require('@abp/ng.theme.shared/extensions'), require('@fs-tw/cms/config'), require('rxjs'), require('@fs-tw/cms/proxy'), require('lodash'), require('date-fns'), require('@fs-tw/theme-alain-ms/shared'), require('@fs-tw/theme-alain-ms/shared/extensions'), require('rxjs/operators'), require('ng-zorro-antd/tag')) :
    typeof define === 'function' && define.amd ? define('@fs-tw/cms/admin', ['exports', '@angular/core', '@abp/ng.core', '@angular/router', '@angular/common', '@angular/forms', 'ngx-quill', 'ng-zorro-antd/grid', 'ng-zorro-antd/input', 'ng-zorro-antd/table', 'ng-zorro-antd/dropdown', 'ng-zorro-antd/button', 'ng-zorro-antd/icon', 'ng-zorro-antd/modal', 'ng-zorro-antd/radio', 'ng-zorro-antd/upload', 'ng-zorro-antd/spin', 'ng-zorro-antd/card', 'ng-zorro-antd/select', 'ng-zorro-antd/date-picker', 'ng-zorro-antd/tabs', '@delon/abc/se', '@abp/ng.theme.shared', '@abp/ng.theme.shared/extensions', '@fs-tw/cms/config', 'rxjs', '@fs-tw/cms/proxy', 'lodash', 'date-fns', '@fs-tw/theme-alain-ms/shared', '@fs-tw/theme-alain-ms/shared/extensions', 'rxjs/operators', 'ng-zorro-antd/tag'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['fs-tw'] = global['fs-tw'] || {}, global['fs-tw'].cms = global['fs-tw'].cms || {}, global['fs-tw'].cms.admin = {}), global.ng.core, global.i1, global.ng.router, global.ng.common, global.ng.forms, global.ngxQuill, global.grid, global.input, global.table, global.dropdown, global.button, global.icon, global.modal, global.radio, global.upload, global.spin, global.card, global.select, global.datePicker, global.tabs, global.se, global.ng_theme_shared, global.extensions, global['fs-tw'].cms.config, global.rxjs, global['fs-tw'].cms.proxy, global._, global.dns, global.shared, global.extensions$1, global.rxjs.operators, global.tag));
}(this, (function (exports, i0, i1, router, common, forms, ngxQuill, grid, input, table, dropdown, button, icon, modal, radio, upload, spin, card, select, datePicker, tabs, se, ng_theme_shared, extensions, config, rxjs, proxy, _, dns, shared, extensions$1, operators, tag) { 'use strict';

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

    var PostStateService = /** @class */ (function () {
        function PostStateService() {
            this.store = new i1.InternalStore({});
        }
        PostStateService.prototype.getBlog = function () {
            return this.store.sliceState(function (state) { return state.Blog; });
        };
        PostStateService.prototype.setBlog = function (blog) {
            this.store.patch({ Blog: blog });
        };
        return PostStateService;
    }());
    PostStateService.ɵprov = i0.ɵɵdefineInjectable({ factory: function PostStateService_Factory() { return new PostStateService(); }, token: PostStateService, providedIn: "root" });
    PostStateService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    PostStateService.ctorParameters = function () { return []; };

    var LayoutComponent = /** @class */ (function () {
        function LayoutComponent() {
        }
        LayoutComponent.prototype.ngOnInit = function () {
        };
        return LayoutComponent;
    }());
    LayoutComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'fs-layout',
                    template: "<router-outlet></router-outlet>\r\n",
                    styles: [""]
                },] }
    ];
    LayoutComponent.ctorParameters = function () { return []; };

    // @dynamic
    var PageService = /** @class */ (function () {
        function PageService(injector) {
            this.injector = injector;
            this.blogService = injector.get(proxy.Fs.Cms.Blogs.BlogsApiService);
            this.postService = injector.get(proxy.Fs.Cms.Posts.PostsApiService);
            this.directoriesApiService = injector.get(proxy.Fs.Abp.File.Directories.DirectoriesApiService);
            this.fileDescriptorService = injector.get(proxy.Volo.FileManagement.Files.FileDescriptorService);
        }
        //#region  Blog
        PageService.prototype.getBlogs = function (input) {
            return this.blogService.getListByBlogGetList(input);
        };
        PageService.prototype.getBlogById = function (id) {
            return this.blogService.getByBlogPrimaryKey({ id: id });
        };
        PageService.prototype.createBlog = function (input) {
            return this.blogService.createByBlogCreate(input);
        };
        PageService.prototype.updateBlog = function (id, input) {
            return this.blogService.updateByBlogPrimaryKeyAndBlogUpdate({ id: id }, input);
        };
        PageService.prototype.deleteBlog = function (id) {
            return this.blogService.deleteByBlogPrimaryKey({ id: id });
        };
        //#endregion
        //#region File
        PageService.prototype.findByProviderByKeyAndGroup = function (key, group) {
            return this.directoriesApiService.findByProviderByKeyAndGroup(key, group);
        };
        PageService.prototype.deleteFile = function (id) {
            return this.fileDescriptorService.deleteById(id);
        };
        PageService.prototype.getFileDescriptor = function (id) {
            return this.fileDescriptorService.getById(id);
        };
        //#endregion
        //#region Post
        PageService.prototype.getPostsByBlogId = function (input) {
            return this.postService.getPostsByBlogIdByInput(input);
        };
        PageService.prototype.getPostById = function (id) {
            return this.postService.getByPostPrimaryKey({ id: id });
        };
        PageService.prototype.createPost = function (input) {
            return this.postService.createByPostCreate(input);
        };
        PageService.prototype.updatePost = function (id, input) {
            return this.postService.updateByPostPrimaryKeyAndPostUpdate({ id: id }, input);
        };
        PageService.prototype.deletePost = function (id) {
            return this.postService.deleteByPostPrimaryKey({ id: id });
        };
        return PageService;
    }());
    PageService.decorators = [
        { type: i0.Injectable }
    ];
    PageService.ctorParameters = function () { return [
        { type: i0.Injector }
    ]; };

    var ɵ0 = "Cms::FS.Cms.PostManagement" /* Post */;
    var MainComponent = /** @class */ (function () {
        function MainComponent(extensionsService, router, toasterService, confirmationService, pageService, list, activatedRoute, postStateService) {
            this.extensionsService = extensionsService;
            this.router = router;
            this.toasterService = toasterService;
            this.confirmationService = confirmationService;
            this.pageService = pageService;
            this.list = list;
            this.activatedRoute = activatedRoute;
            this.postStateService = postStateService;
            this.postParams = {
                skipCount: 0,
                maxResultCount: 10,
                keyword: "",
                blogId: null
            };
            this.posts = [];
            this.totalCount = 0;
        }
        MainComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.extensionsService.Actions$["Cms::FS.Cms.PostManagement" /* Post */].subscribe(function (x) {
                switch (x.name) {
                    case 'Edit':
                        _this.gotoDetail(x.record.id);
                        break;
                    case 'Delete':
                        _this.deleteItem(x.record);
                        break;
                }
            });
            this.blog$ = this.postStateService.getBlog();
            this.onBlogChange();
        };
        MainComponent.prototype.onBlogChange = function () {
            var _this = this;
            this.sub = this.blog$.subscribe(function (blog) {
                _this.blogId = blog == null ? null : blog.id;
                _this.blogName = blog == null ? "全部" : blog.displayName;
                _this.postParams.blogId = _this.blogId;
                _this.hookToQuery();
            });
        };
        MainComponent.prototype.gotoDetail = function (id) {
            if (id)
                this.router.navigate(["/cms/post/detail/" + id]);
            else
                this.router.navigate(["/cms/post/detail"], {
                    queryParams: {
                        blogId: this.postParams.blogId
                    }
                });
        };
        MainComponent.prototype.hookToQuery = function () {
            var _this = this;
            if (this.hookToQueryScribe)
                this.hookToQueryScribe.unsubscribe();
            var query = function (query) {
                query.keyword = _this.postParams.keyword;
                query.blogId = _this.postParams.blogId;
                return _this.pageService.getPostsByBlogId(query);
            };
            this.hookToQueryScribe = this.list.hookToQuery(query).subscribe(function (res) {
                _this.posts = res.items;
                _this.totalCount = res.totalCount;
            });
        };
        MainComponent.prototype.deleteItem = function (item) {
            var _this = this;
            this.confirmationService
                .warn('確認要刪除嗎？', '系統訊息', {
                cancelText: "取消",
                yesText: "確定"
            })
                .subscribe(function (status) {
                if (status === ng_theme_shared.Confirmation.Status.confirm) {
                    var files = item.attachmentFileInfos.map(function (x) { return x.fileId; });
                    var images = item.postImages.map(function (x) { return x.imageId; });
                    var deleteFileActions = files.concat(images).map(function (x) { return _this.pageService.deleteFile(x); });
                    rxjs.forkJoin(deleteFileActions).subscribe();
                    _this.pageService.deletePost(item.id).subscribe(function (x) {
                        _this.toasterService.success("刪除成功！");
                        _this.list.get();
                    });
                }
            });
        };
        MainComponent.prototype.ngOnDestroy = function () {
            if (this.hookToQueryScribe)
                this.hookToQueryScribe.unsubscribe();
            if (this.sub)
                this.sub.unsubscribe();
        };
        return MainComponent;
    }());
    MainComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'fs-main',
                    template: "<nz-row nzGutter=\"16\">\r\n  <nz-col nzSpan=\"8\">\r\n    <fs-list></fs-list>\r\n  </nz-col>\r\n  <nz-col nzSpan=\"16\">\r\n    <div>\r\n      <div class=\"mb-md\">\r\n        <h5>\u985E\u578B\uFF1A{{ blogName }}</h5>\r\n        <button nz-button nzType=\"primary\" (click)=\"gotoDetail()\" style=\"margin-right: 20px;\">\r\n          \u65B0\u589E\r\n        </button>\r\n        <nz-input-group nzSearch [nzAddOnAfter]=\"suffixIconButton\" style=\"width: 300px;\">\r\n          <input type=\"text\" [(ngModel)]=\"postParams.keyword\" nz-input placeholder=\"\u8F38\u5165\u540D\u7A31\" />\r\n        </nz-input-group>\r\n        <ng-template #suffixIconButton>\r\n          <button nz-button nzType=\"primary\" (click)=\"hookToQuery()\" nzSearch>\r\n            <i nz-icon nzType=\"search\"></i>\r\n          </button>\r\n        </ng-template>\r\n      </div>\r\n      <nz-extensible-table [data]=\"posts\" [scroll]=\"{x:'600px'}\" [recordsTotal]=\"totalCount\" [list]=\"list\"\r\n        [haveRowDetail]=\"false\">\r\n     \r\n        <ng-template row-detail-template let-node>\r\n          <div>\r\n            <h3>\u526F\u6A19\u984C</h3>\r\n            <p>{{ node.subtitle || '-' }}</p>\r\n            <div *ngIf=\"node.displayMode == 0\">\r\n              <h3>\u5167\u5BB9\uFF1A</h3>\r\n              <quill-view [content]=\"node.content\"></quill-view>\r\n            </div>\r\n            <div *ngIf=\"node.displayMode == 1\">\r\n              <h3>\u9023\u7D50</h3>\r\n              <p>{{ node.url }}</p>\r\n            </div>\r\n          </div>\r\n        </ng-template>\r\n        \r\n      </nz-extensible-table>\r\n      <!-- <nz-table #listTable [nzData]=\"posts\" nzSize=\"small\" nzPageSize=\"10\" [nzTotal]=\"totalCount\"\r\n        [nzFrontPagination]=\"false\" [nzLoading]=\"loading\" (nzPageIndexChange)=\"changePage($event)\" nzBordered>\r\n        <thead>\r\n          <tr>\r\n            <th nzWidth=\"110px\"></th>\r\n            <th>\u555F\u7528</th>\r\n            <th>\u6A19\u984C</th>\r\n            <th>\u986F\u793A\u6A21\u5F0F</th>\r\n            <th>\u767C\u4F48\u65E5\u671F</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <ng-container *ngFor=\"let item of listTable.data\">\r\n            <tr class=\"bg-white\">\r\n              <td nzShowExpand [(nzExpand)]=\"item.expand\" nzWidth=\"110px\">\r\n                <a nz-dropdown [nzDropdownMenu]=\"menu\">\r\n                  {{ 'AbpIdentity::Actions' | abpLocalization }}\r\n                  <i nz-icon nzType=\"down\"></i>\r\n                </a>\r\n                <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                  <ul nz-menu>\r\n                    <li nz-menu-item (click)=\"gotoDetail(item.id)\">\r\n                      <a>\u7DE8\u8F2F</a>\r\n                    </li>\r\n                    <li nz-menu-item (click)=\"deleteItem(item)\">\r\n                      <a class=\"text-red\">\u522A\u9664</a>\r\n                    </li>\r\n                  </ul>\r\n                </nz-dropdown-menu>\r\n              </td>\r\n              <td>\r\n                <span *ngIf=\"item.published\"><i nz-icon nzType=\"check\" nzTheme=\"outline\"></i></span>\r\n                <span *ngIf=\"!item.published\"><i nz-icon nzType=\"close\" nzTheme=\"outline\"></i></span>\r\n              </td>\r\n              <td>\r\n                {{ item.title }}\r\n              </td>\r\n              <td>\r\n                <span *ngIf=\"item.displayMode == 0\">\u5167\u5BB9</span>\r\n                <span *ngIf=\"item.displayMode == 1\">\u9023\u7D50</span>\r\n              </td>\r\n              <td>{{ item.published_At | date: 'yyyy-MM-dd HH:mm:ss' }}</td>\r\n            </tr>\r\n\r\n            <tr [nzExpand]=\"item.expand\">\r\n              <div>\r\n                <h3>\u526F\u6A19\u984C</h3>\r\n                <p>{{ item.subtitle || '-' }}</p>\r\n                <div *ngIf=\"item.displayMode == 0\">\r\n                  <h3>\u5167\u5BB9\uFF1A</h3>\r\n                  <quill-view [content]=\"item.content\"></quill-view>\r\n                </div>\r\n                <div *ngIf=\"item.displayMode == 1\">\r\n                  <h3>\u9023\u7D50</h3>\r\n                  <p>{{ item.url }}</p>\r\n                </div>\r\n              </div>\r\n            </tr>\r\n          </ng-container>\r\n        </tbody>\r\n      </nz-table> -->\r\n    </div>\r\n  </nz-col>\r\n</nz-row>",
                    providers: [
                        i1.ListService,
                        {
                            provide: extensions.EXTENSIONS_IDENTIFIER,
                            useValue: ɵ0,
                        },
                    ],
                    styles: ["nz-select{margin-right:8px;width:220px}.bg-white{background-color:#fff}"]
                },] }
    ];
    MainComponent.ctorParameters = function () { return [
        { type: config.ExtensionsService },
        { type: router.Router },
        { type: ng_theme_shared.ToasterService },
        { type: ng_theme_shared.ConfirmationService },
        { type: PageService },
        { type: i1.ListService },
        { type: router.ActivatedRoute },
        { type: PostStateService }
    ]; };

    var GetFileByIdPipe = /** @class */ (function () {
        function GetFileByIdPipe(environmentService) {
            this.environmentService = environmentService;
        }
        GetFileByIdPipe.prototype.transform = function (value) {
            return this.environmentService.getApiUrl() + "/api/file-management/file-descriptor/file-content?id=" + value;
        };
        return GetFileByIdPipe;
    }());
    GetFileByIdPipe.decorators = [
        { type: i0.Pipe, args: [{
                    name: 'getFileById'
                },] }
    ];
    GetFileByIdPipe.ctorParameters = function () { return [
        { type: i1.EnvironmentService }
    ]; };

    var COMPONENT = [GetFileByIdPipe];
    var SharedModule = /** @class */ (function () {
        function SharedModule() {
        }
        return SharedModule;
    }());
    SharedModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: __spread(COMPONENT),
                    imports: [
                        // NgAlainBasicModule,
                        shared.ThemeAlainMsSharedModule,
                        extensions$1.UiExtensionsModule
                    ],
                    exports: __spread(COMPONENT, [
                        shared.ThemeAlainMsSharedModule,
                        extensions$1.UiExtensionsModule
                    ])
                },] }
    ];

    var FileService = /** @class */ (function () {
        function FileService(restService, environmentService) {
            this.restService = restService;
            this.environmentService = environmentService;
        }
        FileService.prototype.getFileUrl = function (id) {
            if (!id)
                return "";
            return this.environmentService.getApiUrl() + "/api/file-management/file-descriptor/file-content?id=" + id;
        };
        FileService.prototype.uploadFile = function (file, directoryId) {
            var formData = new FormData();
            formData.append("relativePath", null);
            formData.append("file", file);
            formData.append("name", file.name);
            formData.append("type", file.type);
            return this.restService.request({
                method: 'POST',
                url: "/api/file-management/file-descriptor/upload",
                body: formData,
                params: { directoryId: directoryId }
            });
        };
        FileService.prototype.getFileBlobById = function (id) {
            return this.restService.request({
                method: 'GET',
                url: "/api/file-management/file-descriptor/file-content",
                params: { id: id },
                responseType: 'blob'
            });
        };
        return FileService;
    }());
    FileService.ɵprov = i0.ɵɵdefineInjectable({ factory: function FileService_Factory() { return new FileService(i0.ɵɵinject(i1.RestService), i0.ɵɵinject(i1.EnvironmentService)); }, token: FileService, providedIn: "root" });
    FileService.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];
    FileService.ctorParameters = function () { return [
        { type: i1.RestService },
        { type: i1.EnvironmentService }
    ]; };

    var ImageFile = /** @class */ (function () {
        function ImageFile(fileName, fileUrl) {
            if (fileName === void 0) { fileName = ''; }
            if (fileUrl === void 0) { fileUrl = ''; }
            this.fileName = fileName;
            this.fileUrl = fileUrl;
        }
        return ImageFile;
    }());
    var SaveFile = /** @class */ (function () {
        function SaveFile(fileName, fileUrl, file) {
            this.fileName = fileName;
            this.fileUrl = fileUrl;
            this.file = file;
            this.isUpload = this.file != null;
        }
        return SaveFile;
    }());
    var ViewImage = /** @class */ (function () {
        function ViewImage() {
            this.image = new ImageFile();
            this.isVisabled = false;
        }
        return ViewImage;
    }());
    var ImagePickerComponent = /** @class */ (function () {
        function ImagePickerComponent(toasterService, environmentService, fileService) {
            var _this = this;
            this.toasterService = toasterService;
            this.environmentService = environmentService;
            this.fileService = fileService;
            /** 縮圖寬度，單位 px，預設 104px */
            this.imageWidth = '104px';
            /** 縮圖高度，單位 px ，預設 104px */
            this.imageHeight = '104px';
            /** 外框寬度，單位 px ，預設 104px */
            this.borderWidth = '104px';
            /** 外框高度，單位 px ，預設 104px */
            this.borderHeight = '104px';
            /** 上傳最大數量 */
            this.maxImageCount = null;
            /** 是否可同時選多張圖片 */
            this.isMultiple = true;
            /** 是否排列在同一行，同一行時行寬同 imageWidth */
            this.inLine = true;
            /** 上傳按鈕顯示於前面 */
            this.showFrontButton = true;
            /** 原已上傳圖片 */
            this.existFiles = [];
            /** 原已上傳圖片被刪除的檔名 */
            this.deleteFiles = [];
            /** 本次上傳所顯示圖片 */
            this.showFiles = [];
            /** 本次上傳圖片 */
            this.uploadFiles = [];
            /** 顯示預覽圖 modal */
            this.viewImage = new ViewImage();
            // private getHttpUrl(url: string): string {
            //   let result = url;
            //   if (url.includes("http")) return result;
            //   return this.environmentService.getApiUrl() + url;
            // }
            this.beforeUpload = function (file) {
                var isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
                if (!isJpgOrPng) {
                    _this.toasterService.error("圖片格式須為 jpg 或 png");
                    return false;
                }
                var fileName = file.name;
                var hasExistImage = _this.existFiles.findIndex(function (x) { return x.fileName == fileName; }) > -1;
                var hasShowImage = _this.showFiles.findIndex(function (x) { return x.fileName == fileName; }) > -1;
                if (hasExistImage || hasShowImage)
                    return false;
                var imgFile = file;
                _this.getBase64(imgFile, function (img) {
                    if (!_this.canUpload) {
                        _this.toasterService.error("圖片數已達上限");
                        return;
                    }
                    _this.uploadFiles.push(imgFile);
                    _this.showFiles.push(new ImageFile(fileName, img));
                });
                return false;
            };
        }
        Object.defineProperty(ImagePickerComponent.prototype, "canUpload", {
            get: function () {
                var imageNumber = this.existFiles.length + this.uploadFiles.length;
                return this.maxImageCount == null || imageNumber < this.maxImageCount;
            },
            enumerable: false,
            configurable: true
        });
        ImagePickerComponent.prototype.ngOnInit = function () {
        };
        ImagePickerComponent.prototype.ngOnChanges = function () {
            var _this = this;
            this.existFiles = this.existFiles
                .filter(function (x) { return x.fileUrl; })
                .map(function (x) { return new ImageFile(x.fileName, _this.fileService.getFileUrl(x.fileUrl)); });
            this.uploadFiles = [];
            this.showFiles = [];
            this.deleteFiles = [];
        };
        ImagePickerComponent.prototype.clear = function () {
            this.existFiles = [];
            this.deleteFiles = [];
            this.uploadFiles = [];
            this.showFiles = [];
        };
        ImagePickerComponent.prototype.getBase64 = function (img, callback) {
            var reader = new FileReader();
            reader.addEventListener('load', function () { return callback(reader.result.toString()); });
            reader.readAsDataURL(img);
        };
        ImagePickerComponent.prototype.deleteFile = function (fileName) {
            var inExistImage = this.existFiles.findIndex(function (x) { return x.fileName == fileName; }) > -1;
            var inShowImage = this.showFiles.findIndex(function (x) { return x.fileName == fileName; }) > -1;
            // 現有圖片刪除
            if (inExistImage) {
                this.existFiles = this.existFiles.filter(function (x) { return x.fileName != fileName; });
                this.deleteFiles.push(fileName);
                return;
            }
            // 上傳圖片刪除
            if (inShowImage) {
                this.showFiles = this.showFiles.filter(function (x) { return x.fileName != fileName; });
                this.uploadFiles = this.uploadFiles.filter(function (x) { return x.name != fileName; });
            }
        };
        ImagePickerComponent.prototype.controllModal = function (state, image) {
            if (image === void 0) { image = new ImageFile(); }
            this.viewImage.image = image;
            this.viewImage.isVisabled = state;
        };
        ImagePickerComponent.prototype.getDeleteFileNames = function () {
            return this.deleteFiles;
        };
        ImagePickerComponent.prototype.getNewUploadFiles = function () {
            var updateFiles = this.uploadFiles.map(function (x) { return new SaveFile(x.name, '', x); });
            return updateFiles;
        };
        ImagePickerComponent.prototype.getUploadFiles = function () {
            var _this = this;
            var existFiles = this.existFiles.filter(function (x) { return !_this.deleteFiles.includes(x.fileName); }).map(function (x) { return new SaveFile(x.fileName, x.fileUrl, null); });
            var updateFiles = this.uploadFiles.map(function (x) { return new SaveFile(x.name, '', x); });
            return existFiles.concat(updateFiles);
        };
        return ImagePickerComponent;
    }());
    ImagePickerComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'image-picker',
                    template: "<ng-template #Upload>\r\n    <nz-upload\r\n        class=\"avatar-uploader\" style=\"display: grid;\"\r\n        [nzListType]=\"uploadTemplate ? 'text' : 'picture'\"\r\n        [nzBeforeUpload]=\"beforeUpload\" \r\n        [nzMultiple]=\"isMultiple\"\r\n        >\r\n\r\n        <div *ngTemplateOutlet=\"uploadTemplate || UploadImage\"></div>\r\n        <ng-template #UploadImage>\r\n            <div class=\"divBorder divGridCenter\" [ngStyle]=\"{ 'width': borderWidth, 'height': borderHeight }\">\r\n                <div *ngTemplateOutlet=\"uploadTextTemplate || UploadText\"></div>\r\n            </div>\r\n        </ng-template>\r\n\r\n        <ng-template #UploadText>\r\n            <div style=\"font-size: 16px; text-align: center;\">\r\n                <div class=\"ant-upload-text\">Upload</div>\r\n            </div>\r\n        </ng-template>\r\n    </nz-upload>\r\n</ng-template>\r\n\r\n<ng-template #Image let-item>\r\n    <div class=\"divBorder imgGrid divGridCenter\" \r\n        [ngStyle]=\"{ 'width': borderWidth, 'height': borderHeight }\"\r\n        (click)=\"controllModal(true, item.file)\">\r\n\r\n        <div class=\"imgGridClose\">\r\n            <i (click)=\"deleteFile(item.file.fileName)\" nz-icon nzType=\"close\" nzTheme=\"outline\"></i>\r\n        </div>\r\n\r\n        <img [src]=\"item.file.fileUrl\" style=\"max-width: 100%;\" [ngStyle]=\"{ 'max-height': imageHeight }\" />\r\n    </div>\r\n</ng-template>\r\n\r\n<div [ngClass]=\"{ 'divGrid': inLine }\" [ngStyle]=\"{ 'grid-template-columns': inLine ? 'repeat(auto-fit, ' + borderWidth + ')' : 'unset' }\">\r\n    <!-- \u4E0A\u50B3\u6309\u9215(\u524D) -->\r\n    <ng-container *ngIf=\"canUpload && showFrontButton\">\r\n        <div *ngTemplateOutlet=\"Upload\"></div>\r\n    </ng-container>\r\n\r\n    <!-- \u50B3\u5165\u7684\u5716\u7247 -->\r\n    <ng-container *ngFor=\"let item of existFiles; let i = index\">\r\n        <div *ngTemplateOutlet=\"imageTemplate || Image; context: {$implicit: { file: item, i: i }}\"></div>\r\n    </ng-container>\r\n\r\n    <!-- \u4E0A\u50B3\u7684\u5716\u7247 -->\r\n    <ng-container *ngFor=\"let item of showFiles; let i = index\">\r\n        <div *ngTemplateOutlet=\"imageTemplate || Image; context: {$implicit: { file: item, i: i }}\"></div>\r\n    </ng-container>\r\n\r\n    <!-- \u4E0A\u50B3\u6309\u9215(\u5F8C) -->\r\n    <ng-container *ngIf=\"canUpload && !showFrontButton\">\r\n        <div *ngTemplateOutlet=\"Upload\"></div>\r\n    </ng-container>\r\n    \r\n</div>\r\n\r\n<nz-modal [nzOkText]=\"null\" nzCancelText=\"\u95DC\u9589\" [nzWidth]=\"1000\"\r\n        [nzTitle]=\"'\u9810\u89BD\u5716'\" \r\n        [(nzVisible)]=\"viewImage.isVisabled\" \r\n        (nzOnCancel)=\"controllModal(false, viewImage.image)\">\r\n    <div class=\"divGridCenter\">\r\n        <img [src]=\"viewImage.image.fileUrl\" style=\"max-width: 100%; max-height: 500px;\" />\r\n    </div>\r\n</nz-modal>",
                    styles: [".divBorder{display:block;border:1px dashed #d9d9d9;background:#fafafa}.divGridCenter{display:grid!important;place-items:center}.divGrid{display:grid;grid-gap:1rem}.imgGrid{border:1px solid #ddd;background-color:#f9f9f9;position:relative;cursor:pointer}.imgGridClose{top:-7px;position:absolute;text-align:right;font-size:18px;color:rgba(0,0,0,.55);width:100%}.imgGridClose i{padding:3px;border-radius:2px;opacity:.8;z-index:10;background-color:#ddd}::ng-deep .ant-upload.ant-upload-select-picture-card{margin:unset!important}::ng-deep .ant-upload.ant-upload-select-picture-card>.ant-upload{padding:unset!important}"]
                },] }
    ];
    ImagePickerComponent.ctorParameters = function () { return [
        { type: ng_theme_shared.ToasterService },
        { type: i1.EnvironmentService },
        { type: FileService }
    ]; };
    ImagePickerComponent.propDecorators = {
        imageWidth: [{ type: i0.Input }],
        imageHeight: [{ type: i0.Input }],
        borderWidth: [{ type: i0.Input }],
        borderHeight: [{ type: i0.Input }],
        maxImageCount: [{ type: i0.Input }],
        isMultiple: [{ type: i0.Input }],
        imageTemplate: [{ type: i0.Input }],
        uploadTemplate: [{ type: i0.Input }],
        uploadTextTemplate: [{ type: i0.Input }],
        inLine: [{ type: i0.Input }],
        showFrontButton: [{ type: i0.Input }],
        existFiles: [{ type: i0.Input }]
    };

    var FileInfo = /** @class */ (function () {
        function FileInfo(fileName, fileUrl) {
            if (fileName === void 0) { fileName = ''; }
            if (fileUrl === void 0) { fileUrl = ''; }
            this.fileName = fileName;
            this.fileUrl = fileUrl;
        }
        return FileInfo;
    }());
    var FileData = /** @class */ (function () {
        function FileData(fileName, fileUrl, file) {
            this.fileName = fileName;
            this.fileUrl = fileUrl;
            this.file = file;
            this.isUpload = this.file != null;
        }
        return FileData;
    }());
    var UploadFileComponent = /** @class */ (function () {
        function UploadFileComponent(confirmationService) {
            var _this = this;
            this.confirmationService = confirmationService;
            this.existFiles = [];
            this.fileList = [];
            this.beforeUpload = function (file) {
                var exist = _this.existFiles.findIndex(function (x) { return x.fileName == file.name; }) > -1 ||
                    _this.fileList.findIndex(function (x) { return x.name == file.name; }) > -1;
                if (exist)
                    return false;
                _this.fileList = _this.fileList.concat(file);
                return false;
            };
        }
        UploadFileComponent.prototype.ngOnInit = function () {
        };
        UploadFileComponent.prototype.delete = function (url) {
            var _this = this;
            this.confirmationService
                .warn('確認刪除嗎？', '系統訊息')
                .subscribe(function (status) {
                if (status === ng_theme_shared.Confirmation.Status.confirm) {
                    _this.existFiles = _this.existFiles.filter(function (x) { return x != url; });
                }
            });
        };
        UploadFileComponent.prototype.getNewUploadFiles = function () {
            var updateFiles = this.fileList.map(function (x) { return new FileData(x.name, '', x); });
            return updateFiles;
        };
        return UploadFileComponent;
    }());
    UploadFileComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'fs-upload-file',
                    template: "\r\n\r\n<nz-upload nzType=\"drag\" [(nzFileList)]=\"fileList\" [nzBeforeUpload]=\"beforeUpload\" [nzMultiple]=\"true\">\r\n  <p class=\"ant-upload-drag-icon\">\r\n    <i nz-icon nzType=\"inbox\"></i>\r\n  </p>\r\n  <p class=\"ant-upload-text\">\u9EDE\u64CA\u6B64\u8655\u6216\u5C07\u6A94\u6848\u62D6\u62FD\u81F3\u6B64\u8655\u9032\u884C\u4E0A\u50B3</p>\r\n</nz-upload>\r\n\r\n<div class=\"my-md\"></div>\r\n<nz-table #basicTable [nzData]=\"existFiles\"  nzSimple=\"false\" nzSize=\"small\" [nzShowPagination]=\"false\">\r\n  <thead>\r\n    <tr>\r\n      <th>\u6A94\u540D</th>\r\n      <th>-</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let data of existFiles\">\r\n      <td>\r\n        <a [href]=\"data.fileUrl\">{{data.fileName}}</a>\r\n        <!-- <a>{{ data }}</a> -->\r\n      </td>\r\n      <td>\r\n        <a (click)=\"delete(data)\" class=\"text-red\">\u522A\u9664</a>\r\n      </td>\r\n\r\n    </tr>\r\n  </tbody>\r\n</nz-table>",
                    styles: [""]
                },] }
    ];
    UploadFileComponent.ctorParameters = function () { return [
        { type: ng_theme_shared.ConfirmationService }
    ]; };
    UploadFileComponent.propDecorators = {
        existFiles: [{ type: i0.Input }]
    };

    var DetailComponent = /** @class */ (function () {
        function DetailComponent(router, fileService, activatedRoute, pageService, confirmationService) {
            var _this = this;
            this.router = router;
            this.fileService = fileService;
            this.activatedRoute = activatedRoute;
            this.pageService = pageService;
            this.confirmationService = confirmationService;
            this.dateRange = [new Date(), new Date()];
            this.defaultImages = [];
            this.defaultFiles = [];
            this.blogs = [];
            this.isLoading = false;
            this.coverImage = '';
            this.contentFileName = "";
            this.blobToFile = function (theBlob, fileName) {
                return new File([theBlob], fileName, { type: "text/plain;charset=utf-8" });
            };
            this.postId = this.activatedRoute.snapshot.paramMap.get('postId');
            this.pageService.findByProviderByKeyAndGroup("FS.Cms.Posts", this.postId ? this.postId : this.getRand()).subscribe(function (x) {
                _this.directory = x;
            });
        }
        DetailComponent.prototype.ngOnInit = function () {
            this.getPost();
            this.getBlogs();
        };
        DetailComponent.prototype.getPost = function () {
            var _this = this;
            this.data = {
                blogId: null,
                title: '',
                subtitle: '',
                url: '',
                content: '',
                disable: false,
                startTime: '',
                endTime: '',
                displayMode: 0,
                sequence: 0,
                attachmentFileInfos: [],
                postImages: []
            };
            this.contentFileName = "";
            this.dateRange = [new Date(), new Date()];
            this.defaultImages = [];
            this.defaultFiles = [];
            this.coverImage = '';
            if (this.postId) {
                this.pageService.getPostById(this.postId).subscribe(function (x) {
                    _this.data = x;
                    var st = x.startTime ? new Date(x.startTime) : new Date();
                    var ed = x.endTime ? new Date(x.endTime) : new Date();
                    _this.dateRange = [st, ed];
                    _this.defaultImages = x.postImages.map(function (y) { return new ImageFile(y.name, y.imageId); });
                    _this.defaultFiles = x.attachmentFileInfos.map(function (y) { return new FileInfo(y.name, _this.fileService.getFileUrl(y.fileId)); });
                    var coverImageIndex = x.postImages.findIndex(function (y) { return y.isCover; });
                    if (coverImageIndex > -1)
                        _this.coverImage = x.postImages[coverImageIndex].imageId;
                    if (x.content) {
                        _this.pageService.getFileDescriptor(x.content).subscribe(function (x) {
                            _this.contentFileName = x.name;
                        });
                        _this.fileService.getFileBlobById(x.content).subscribe(function (data) {
                            var blob = new Blob([data], { type: 'text/plain;charset=utf-8' });
                            var reader = new FileReader();
                            reader.onload = function () {
                                _this.data.content = reader.result.toString();
                            };
                            reader.readAsText(blob);
                        });
                    }
                });
            }
        };
        DetailComponent.prototype.getBlogs = function () {
            var _this = this;
            var input = {
                skipCount: 0,
                maxResultCount: 999,
                sorting: 'sequence'
            };
            this.pageService.getBlogs(input).subscribe(function (x) {
                _this.blogs = x.items;
                if (!_this.postId)
                    _this.data.blogId = _this.activatedRoute.snapshot.queryParamMap.get('blogId');
            });
        };
        DetailComponent.prototype.deleteFile = function (fileName) {
            var _this = this;
            this.confirmationService.warn("\u78BA\u5B9A\u522A\u9664 " + fileName + " \u55CE\uFF1F", "系統訊息")
                .subscribe(function (result) {
                if (result != ng_theme_shared.Confirmation.Status.confirm)
                    return;
                _this.defaultImagePicker.deleteFile(fileName);
            });
        };
        DetailComponent.prototype.getRand = function () {
            return (Math.floor(Math.random() * 100) + 1).toString();
        };
        DetailComponent.prototype.save = function () {
            var _this = this;
            // TODO: 刪除檔案、加標籤
            // let deleteImages = this.defaultImagePicker.getDeleteFileNames();
            // let deleteTargets = item.postImages.filter(x => deleteImages.some(y => y == x.name));
            // let deleteActions = deleteTargets.map(x=>{
            //   return this.pageService.deleteFile(x.imageId);
            // })
            // forkJoin(deleteActions).subscribe(x=>{})
            var _a;
            var item = _.cloneDeep(this.data);
            item.startTime = this.dateRange[0].toLocalISOString();
            item.endTime = (_a = this.dateRange[1]) === null || _a === void 0 ? void 0 : _a.toLocalISOString();
            var contentAction$ = rxjs.of("");
            if (item.displayMode == proxy.Fs.Cms.Posts.DisplayMode.內文) {
                // let now = new Date();
                var blob = new Blob([item.content], { type: "text/plain;charset=utf-8" });
                var useContentFileName = dns.format(new Date(), 'yyyyMMddHHmmss') + '-' + this.getRand() + ".txt"; //now.toLocaleDateString() + "_" + now.toLocaleTimeString() + "_" + (Math.floor(Math.random() * 100) + 1) + ".txt";
                if (this.contentFileName)
                    useContentFileName = this.contentFileName;
                var file = this.blobToFile(blob, useContentFileName);
                contentAction$ = this.fileService.uploadFile(file, this.directory.id).pipe(operators.map(function (x) { return x.id; }));
            }
            var imagesAction = this.uploadImage$(item);
            var filesAction = this.uploadFiles$(item);
            rxjs.forkJoin([imagesAction, filesAction, contentAction$]).subscribe(function (x) {
                item.postImages = x[0];
                item.attachmentFileInfos = x[1];
                item.content = x[2];
                _this.savePost(item);
            });
        };
        DetailComponent.prototype.uploadFiles$ = function (item) {
            var _this = this;
            var domainItem = _.cloneDeep(item);
            var newUploadFiles = this.defaultUploadFile.getNewUploadFiles();
            var existFileNames = this.defaultUploadFile.existFiles.map(function (x) { return x.fileName; });
            domainItem.attachmentFileInfos = domainItem.attachmentFileInfos.filter(function (x) { return existFileNames.some(function (y) { return y == x.name; }); });
            if (newUploadFiles.length == 0) {
                return rxjs.of(domainItem.attachmentFileInfos);
            }
            var fileActions = newUploadFiles.map(function (savefile) {
                return _this.fileService.uploadFile(savefile.file, _this.directory.id);
            });
            return rxjs.forkJoin(fileActions).pipe(operators.map(function (x) {
                var result = x.map(function (y) {
                    return {
                        name: y.name,
                        fileId: y.id
                    };
                });
                return result.concat(domainItem.attachmentFileInfos);
            }));
        };
        DetailComponent.prototype.uploadImage$ = function (item) {
            var _this = this;
            var domainItem = _.cloneDeep(item);
            var newUploadImages = this.defaultImagePicker.getNewUploadFiles();
            var existFileNames = this.defaultImagePicker.existFiles.map(function (x) { return x.fileName; });
            domainItem.postImages = domainItem.postImages.filter(function (x) { return existFileNames.some(function (y) { return y == x.name; }); });
            if (newUploadImages.length == 0) {
                return rxjs.of(domainItem.postImages);
            }
            var fileActions = newUploadImages.map(function (savefile) {
                return _this.fileService.uploadFile(savefile.file, _this.directory.id);
            });
            return rxjs.forkJoin(fileActions).pipe(operators.map(function (x) {
                var result = x.map(function (y) {
                    return {
                        name: y.name,
                        isCover: (_this.coverImage == y.name),
                        imageId: y.id
                    };
                });
                return result.concat(domainItem.postImages);
            }));
        };
        DetailComponent.prototype.savePost = function (item) {
            var _this = this;
            var action;
            if (!this.postId) {
                action = this.pageService.createPost(item);
            }
            else {
                action = this.pageService.updatePost(this.postId, item);
            }
            action.subscribe(function (x) {
                _this.router.navigate(["cms/post"]);
            });
        };
        return DetailComponent;
    }());
    DetailComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'fs-detail',
                    template: "<nz-spin nzTip=\"\u8F09\u5165\u4E2D...\" [nzSpinning]=\"isLoading\">\r\n\r\n  <nz-card>\r\n\r\n    <form nz-form #f=\"ngForm\" se-container=\"1\" labelWidth=\"150\" *ngIf=\"data\">\r\n      <se label=\"\u516C\u544A\u985E\u578B\">\r\n        <nz-select [(ngModel)]=\"data.blogId\" name=\"blogId\" required>\r\n          <nz-option *ngFor=\"let item of blogs\" [nzValue]=\"item.id\" [nzLabel]=\"item.displayName\"></nz-option>\r\n        </nz-select>\r\n      </se>\r\n      <se label=\"\u524D\u53F0\u986F\u793A\" required>\r\n        <nz-radio-group [(ngModel)]=\"data.disable\" name=\"disable\">\r\n          <label nz-radio [nzValue]=\"false\">\u958B</label>\r\n          <label nz-radio [nzValue]=\"true\">\u95DC</label>\r\n        </nz-radio-group>\r\n      </se>\r\n      <se label=\"\u767C\u4F48\u6642\u9593\" required>\r\n        <!-- <nz-range-picker nzShowTime nzFormat=\"yyyy/MM/dd HH:mm:ss\" name=\"dateRange\" [(ngModel)]=\"dateRange\"\r\n          [nzAllowClear]=\"false\"></nz-range-picker> -->\r\n        <nz-date-picker nzShowTime name=\"startDate\" [nzAllowClear]=\"false\"\r\n          [(ngModel)]=\"dateRange[0]\"></nz-date-picker>\r\n\r\n        <nz-date-picker nzShowTime name=\"endDate\" [nzAllowClear]=\"true\"\r\n          [(ngModel)]=\"dateRange[1]\"></nz-date-picker>\r\n        <!-- <nz-date-picker nzShowTime name=\"published_At\" nzPlaceHolder=\"Select Time\" [nzAllowClear]=\"false\"\r\n          [(ngModel)]=\"data.published_At\"></nz-date-picker> -->\r\n      </se>\r\n      <se label=\"\u6A19\u984C\" error=\"\u5FC5\u586B\" required>\r\n        <input type=\"text\" nz-input [(ngModel)]=\"data.title\" name=\"title\" required>\r\n      </se>\r\n      <se label=\"\u526F\u6A19\u984C\">\r\n        <input type=\"text\" nz-input [(ngModel)]=\"data.subtitle\" name=\"Subtitle\">\r\n      </se>\r\n      <se label=\"\u986F\u793A\u985E\u578B\" required>\r\n        <nz-select [(ngModel)]=\"data.displayMode\" name=\"type\">\r\n          <nz-option [nzValue]=\"0\" nzLabel=\"\u5167\u6587\"></nz-option>\r\n          <nz-option [nzValue]=\"1\" nzLabel=\"\u9023\u7D50\"></nz-option>\r\n        </nz-select>\r\n      </se>\r\n\r\n      <se label=\"\u5167\u6587\" *ngIf=\"data.displayMode == 0\">\r\n\r\n        <quill-editor [(ngModel)]=\"data.content\" [ngModelOptions]=\"{standalone: true}\">\r\n          <!-- <div quill-editor-toolbar>\r\n            <span class=\"ql-formats\">\r\n              <button class=\"ql-bold\"></button>\r\n              <button class=\"ql-italic\"></button>\r\n              <button class=\"ql-underline\"></button>\r\n              <button class=\"ql-strike\"></button>\r\n            </span>\r\n\r\n            <span class=\"ql-formats\">\r\n              <button class=\"ql-list\" value=\"ordered\"></button>\r\n              <button class=\"ql-list\" value=\"bullet\"></button>\r\n            </span>\r\n\r\n            <span>\r\n              <button type=\"button\" class=\"ql-header\" value=\"1\"></button>\r\n              <button type=\"button\" class=\"ql-header\" value=\"2\"></button>\r\n            </span>\r\n\r\n            <span class=\"ql-formats\">\r\n              <button class=\"ql-image\"></button>\r\n            </span>\r\n\r\n          </div> -->\r\n        </quill-editor>\r\n      </se>\r\n\r\n\r\n      <se label=\"\u9023\u7D50\" *ngIf=\"data.displayMode == 1\">\r\n        <input type=\"text\" nz-input [(ngModel)]=\"data.url\" name=\"url\">\r\n      </se>\r\n\r\n      <se label=\"\u4E0A\u50B3\u6A94\u6848\" optionalHelp=\"\u5EFA\u8B70\u5716\u7247\u6BD4\u4F8B\uFF1A1080X608\">\r\n        <nz-tabset>\r\n          <nz-tab nzTitle=\"\u5716\u7247\">\r\n            <se>\r\n              <image-picker #DefaultImagePicker [existFiles]=\"defaultImages\" [uploadTextTemplate]=\"Upload\"\r\n                [imageTemplate]=\"Image\" [inLine]=\"false\" borderWidth=\"100%\" borderHeight=\"132px\"></image-picker>\r\n            </se>\r\n          </nz-tab>\r\n          <nz-tab nzTitle=\"\u9644\u4EF6\">\r\n            <se>\r\n              <fs-upload-file  #DefaultUploadFile [existFiles]=\"defaultFiles\"></fs-upload-file>\r\n            </se>\r\n          </nz-tab>\r\n        </nz-tabset>\r\n      </se>\r\n\r\n      <!-- <se label=\"\u6A19\u7C64\">\r\n        <fs-tag [postId]=\"data.id\" [postTags]=\"data.postTags\"></fs-tag>\r\n      </se> -->\r\n\r\n      <se>\r\n        <button nz-button nzType=\"primary\" (click)=\"save()\" [disabled]=\"f.invalid\">\r\n          {{ !data.id ? '\u5EFA\u7ACB' : '\u66F4\u65B0' }}\r\n        </button>\r\n      </se>\r\n    </form>\r\n  </nz-card>\r\n\r\n</nz-spin>\r\n\r\n\r\n<ng-template #Upload>\r\n  <div style=\"text-align: center;\">\r\n    <div style=\"color: #26d7eb; font-size: 48px;\">\r\n      <i nz-icon nzType=\"inbox\" style=\"display: block;\"></i>\r\n    </div>\r\n    <div style=\"font-size: 16px;\">\r\n      \u8ACB\u5C07\u6A94\u6848\u62D6\u79FB\u81F3\u6B64\uFF0C\u6216\u6309\u4E0B\u6B64\u5716\u793A\u4E0A\u50B3\u6A94\u6848\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #Image let-item>\r\n  <div nz-row style=\"border: 1px solid #ddd; border-right: 0px; margin-top: 5px;\">\r\n    <div nz-col nzSpan=\"4\" class=\"imgItemDiv\">\r\n      <a class=\"text-blue\" *ngIf=\"coverImage != item.file.fileName\" (click)=\"coverImage = item.file.fileName\">\u8A2D\u70BA\u5C01\u9762\u5716</a>\r\n      <i nz-icon nzType=\"check\" nzTheme=\"outline\" style=\"font-size: 16px;\" class=\"text-green\"\r\n        *ngIf=\"coverImage == item.file.fileName\"></i>\r\n    </div>\r\n    <div nz-col nzSpan=\"8\" class=\"imgItemDiv\" style=\"cursor: pointer;\"\r\n      (click)=\"defaultImagePicker.controllModal(true, item.file)\">\r\n      <div style=\"width: 100%;\">\r\n        <img [src]=\"item.file.fileUrl\" style=\"max-height: 40px;\" />     \r\n      </div>\r\n    </div>\r\n    <div nz-col nzSpan=\"8\" class=\"imgItemDiv\">\r\n      <div style=\"width: 100%;\">{{ item.file.fileName }}</div>\r\n    </div>\r\n    <div nz-col nzSpan=\"4\" class=\"imgItemDiv\">\r\n      <div style=\"width: 100%;\">\r\n        <a class=\"text-red\" (click)=\"deleteFile(item.file.fileName)\">\u522A\u9664</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>",
                    styles: [".unchecked{border:1px solid #e4e4e4}.unchecked:hover{background-color:#00c1de;color:#fff}.imgItemDiv{border-right:1px solid #ddd;padding:5px;height:50px;display:grid;place-items:center}"]
                },] }
    ];
    DetailComponent.ctorParameters = function () { return [
        { type: router.Router },
        { type: FileService },
        { type: router.ActivatedRoute },
        { type: PageService },
        { type: ng_theme_shared.ConfirmationService }
    ]; };
    DetailComponent.propDecorators = {
        defaultImagePicker: [{ type: i0.ViewChild, args: ["DefaultImagePicker",] }],
        defaultUploadFile: [{ type: i0.ViewChild, args: ["DefaultUploadFile",] }]
    };

    var RouteConfig = /** @class */ (function () {
        function RouteConfig(postStateService) {
            this.postStateService = postStateService;
        }
        RouteConfig.prototype.resolve = function () {
            return this.postStateService.setBlog(null);
        };
        return RouteConfig;
    }());
    RouteConfig.decorators = [
        { type: i0.Injectable }
    ];
    RouteConfig.ctorParameters = function () { return [
        { type: PostStateService }
    ]; };
    var routes = [
        {
            path: '',
            component: LayoutComponent,
            resolve: { 'RouteConfig': RouteConfig },
            children: [
                {
                    path: '',
                    component: MainComponent
                },
                {
                    path: 'detail',
                    component: DetailComponent,
                },
                {
                    path: 'detail/:postId',
                    component: DetailComponent,
                }
            ],
        }
    ];
    var PostRoutingModule = /** @class */ (function () {
        function PostRoutingModule() {
        }
        return PostRoutingModule;
    }());
    PostRoutingModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [router.RouterModule.forChild(routes)],
                    exports: [router.RouterModule],
                    providers: [
                        RouteConfig
                    ]
                },] }
    ];

    var ɵ0$1 = "Cms::FS.Cms.Blogs" /* Blog */;
    var ListComponent = /** @class */ (function () {
        function ListComponent(router, extensionsService, pageService, injector, list, fileService, toasterService, activatedRoute, confirmationService, postStateService) {
            var _this = this;
            this.router = router;
            this.extensionsService = extensionsService;
            this.pageService = pageService;
            this.injector = injector;
            this.list = list;
            this.fileService = fileService;
            this.toasterService = toasterService;
            this.activatedRoute = activatedRoute;
            this.confirmationService = confirmationService;
            this.postStateService = postStateService;
            this.datas = [];
            this.count = 0;
            this.defaultImages = [];
            this.isVisible = false;
            this.selected = {};
            this.defaultSelectId = null;
            this.activatedRoute.queryParamMap.subscribe(function (x) {
                _this.defaultSelectId = x.get("blogId");
                _this.pageService.findByProviderByKeyAndGroup("FS.Cms.Blogs", _this.defaultSelectId ? _this.defaultSelectId : _this.getRand()).subscribe(function (x) {
                    _this.directory = x;
                });
            });
        }
        ListComponent.prototype.ngOnDestroy = function () {
            if (this.sub)
                this.sub.unsubscribe();
        };
        ListComponent.prototype.getRand = function () {
            return (Math.floor(Math.random() * 100) + 1).toString();
        };
        ListComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.sub = this.extensionsService.Actions$["Cms::FS.Cms.Blogs" /* Blog */].subscribe(function (x) {
                switch (x.name) {
                    case 'Edit':
                        _this.edit(x.record.id);
                        break;
                    case 'Delete':
                        _this.deleteBlog(x.record);
                        break;
                    case 'Add':
                        _this.add();
                        break;
                }
            });
            this.reload();
        };
        ListComponent.prototype.reload = function () {
            var _this = this;
            var input = {
                skipCount: 0,
                maxResultCount: 10,
                sorting: 'sequence'
            };
            var customerStreamCreator = function (query) {
                return _this.pageService.getBlogs(input);
            };
            this.list.hookToQuery(customerStreamCreator).subscribe(function (res) {
                _this.datas = res.items;
                _this.count = res.totalCount;
                if (_this.defaultSelectId) {
                    var select = _this.datas.find(function (x) { return x.id == _this.defaultSelectId; });
                    _this.showDetail(select);
                }
            });
        };
        ListComponent.prototype.showDetail = function (blog) {
            if (blog == null) {
                this.router.navigate(['./cms/post']);
                this.postStateService.setBlog(null);
                return;
            }
            this.router.navigate(['./cms/post'], { queryParams: { 'blogId': blog.id } });
            this.postStateService.setBlog(blog);
        };
        ListComponent.prototype.deleteBlog = function (blog) {
            var _this = this;
            this.confirmationService
                .warn('確認要刪除嗎？(此Blog下的文章將移至不分類)', '系統訊息', {
                cancelText: "取消",
                yesText: "確定"
            })
                .subscribe(function (status) {
                if (status === ng_theme_shared.Confirmation.Status.confirm) {
                    _this.pageService.deleteBlog(blog.id).subscribe(function (x) {
                        _this.toasterService.success("刪除成功！");
                        _this.list.get();
                        _this.router.navigate(["./cms/post"]);
                    });
                }
            });
        };
        ListComponent.prototype.handleCancel = function () {
            this.isVisible = false;
        };
        ListComponent.prototype.save = function () {
            var _this = this;
            if (!this.form.valid)
                return;
            var deleteImageNames = this.defaultImagePicker.getDeleteFileNames();
            if (deleteImageNames.length > 0) {
                this.pageService.deleteFile(deleteImageNames[0]).subscribe(function () {
                    _this.uploadFile();
                });
            }
            else
                this.uploadFile();
        };
        ListComponent.prototype.uploadFile = function () {
            var _this = this;
            var uploadImageInfos = this.defaultImagePicker.getUploadFiles();
            var fileId = "";
            if ((uploadImageInfos.length > 0)) {
                if (this.selected.iconUrl == uploadImageInfos[0].fileName) {
                    this.saveBlog(this.selected.iconUrl);
                    return;
                }
                this.fileService.uploadFile(uploadImageInfos[0].file, this.directory.id).subscribe(function (x) {
                    fileId = x.id;
                    _this.saveBlog(fileId);
                });
            }
            else
                this.saveBlog("");
        };
        ListComponent.prototype.saveBlog = function (fileId) {
            var _this = this;
            var input = Object.assign(Object.assign(Object.assign({}, this.selected), this.form.value), { id: this.selected.id });
            input.iconUrl = fileId;
            var action;
            if (input.id)
                action = this.pageService.updateBlog(input.id, input);
            else {
                input.no = input.displayName;
                action = this.pageService.createBlog(input);
            }
            action.subscribe(function (x) {
                _this.toasterService.success('修改成功！');
                _this.isVisible = false;
                _this.list.get();
            });
        };
        ListComponent.prototype.add = function () {
            this.selected = {};
            this.defaultImages = [];
            this.openModal();
        };
        ListComponent.prototype.edit = function (id) {
            var _this = this;
            this.pageService.getBlogById(id).subscribe(function (x) {
                _this.selected = x;
                _this.defaultImages = [];
                if (x.iconUrl)
                    _this.defaultImages.push(new ImageFile(x.iconUrl, x.iconUrl));
                _this.openModal();
            });
        };
        ListComponent.prototype.buildForm = function () {
            var data = new extensions.FormPropData(this.injector, this.selected);
            this.form = null;
            this.form = extensions.generateFormFromProps(data);
        };
        ListComponent.prototype.openModal = function () {
            this.buildForm();
            this.isVisible = true;
        };
        return ListComponent;
    }());
    ListComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'fs-list',
                    template: "<div>\r\n  <div class=\"mb-md\">   \r\n    <button nz-button [nzType]=\"'primary'\"  style=\"margin-right: 10px;\" (click)=\"add()\"><span>+\u5EFA\u7ACB</span></button>\r\n    <button nz-button [nzType]=\"'primary'\" (click)=\"showDetail(null)\">\r\n      \u5168\u90E8\r\n    </button>\r\n  </div>\r\n\r\n  <nz-extensible-table [data]=\"datas\" [defaultSelectId]=\"defaultSelectId\" [recordsTotal]=\"count\" [list]=\"list\" [haveSelect]=\"true\"\r\n    (select)=\"showDetail($event)\">\r\n  </nz-extensible-table>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<nz-modal [(nzVisible)]=\"isVisible\" nzTitle=\"blog\" (nzOnCancel)=\"handleCancel()\" [nzFooter]=\"footer\">\r\n  <form [formGroup]=\"form\" *ngIf=\"form\" (ngSubmit)=\"save()\" validateOnSubmit>\r\n    <abp-extensible-form *ngIf=\"form\" [selectedRecord]=\"selected\"></abp-extensible-form>\r\n    <div class=\"form-group\">\r\n      <label for=\"exampleInputEmail1\">\u5716\u793A(\u5EFA\u8B70\u5716\u7247\u5927\u5C0F\u70BA 40*30\uFF0C\u50C5\u80FD\u4E0A\u50B3 jpg, png)</label>\r\n      <image-picker #DefaultImagePicker [existFiles]=\"defaultImages\" [maxImageCount]=\"1\" imageWidth=\"40px\"\r\n        imageHeight=\"30px\" borderWidth=\"80px\" borderHeight=\"60px\"></image-picker>\r\n    </div>\r\n  </form>\r\n</nz-modal>\r\n\r\n<ng-template #footer>\r\n  <button nz-button nzType=\"default\" (click)=\"handleCancel()\">\u53D6\u6D88</button>\r\n  <button nz-button nzType=\"primary\" (click)=\"save()\">\u5132\u5B58</button>\r\n</ng-template>",
                    providers: [
                        i1.ListService,
                        {
                            provide: extensions.EXTENSIONS_IDENTIFIER,
                            useValue: ɵ0$1,
                        },
                    ],
                    styles: [".listSelected{background-color:#e6f2ff!important}nz-list-item{font-size:15px}.bg-white{background-color:#fff}"]
                },] }
    ];
    ListComponent.ctorParameters = function () { return [
        { type: router.Router },
        { type: config.ExtensionsService },
        { type: PageService },
        { type: i0.Injector },
        { type: i1.ListService },
        { type: FileService },
        { type: ng_theme_shared.ToasterService },
        { type: router.ActivatedRoute },
        { type: ng_theme_shared.ConfirmationService },
        { type: PostStateService }
    ]; };
    ListComponent.propDecorators = {
        defaultImagePicker: [{ type: i0.ViewChild, args: ["DefaultImagePicker",] }]
    };

    // import { group } from '@angular/animations';
    // import { PostTagMapDto, TagGroupDto } from '@fs-tw/cms/proxy';
    // import * as _ from 'lodash';
    // import { Observable } from 'rxjs';
    // import { take } from 'rxjs/operators';
    // import { PageService } from '../../providers/page.service';
    var TagComponent = /** @class */ (function () {
        function TagComponent() {
        }
        TagComponent.prototype.ngOnInit = function () {
        };
        return TagComponent;
    }());
    TagComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'fs-tag',
                    template: "<br>\r\n<!-- <label>\u641C\u5C0B\u6A19\u7C64\uFF1A</label>\r\n\r\n<nz-select nzSize='small' [(ngModel)]=\"select\" nzAllowClear nzShowSearch style=\"width: 200px;\">\r\n    <nz-option-group *ngFor=\"let item of tagGroups\" [nzLabel]=\"item.tagGroupName\">\r\n        <nz-option *ngFor=\"let i of item.tags\" [nzLabel]=\"i.name\" [nzValue]=\"i.name\"></nz-option>\r\n    </nz-option-group>\r\n</nz-select>\r\n<button nz-button nzType=\"primary\" nzShape=\"circle\"><i nz-icon nzType=\"search\"></i></button> -->\r\n\r\n<!-- \u53EA\u555F\u7528\u4EE5\u4E0B table -->\r\n<!-- <nz-table #smallTable nzBordered nzSize=\"small\" [nzData]=\"tagGroups\" style=\"width: 500px;\" nzShowPagination=\"false\"\r\n    style=\"margin-top: 10px;\">\r\n    <thead>\r\n        <tr>\r\n            <th nzAlign=\"center\">\u5206\u985E</th>\r\n            <th nzAlign=\"center\">\u6A19\u7C64</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let tagGroup of smallTable.data; let parentIndex = index\" class=\"bg-white\">\r\n            <td>\r\n                <nz-tag [nzColor]=\"tagGroup.check? 'green' : 'default'\" (click)=\"checkParent(tagGroup)\" class=\"pointer\">\r\n                    <i nz-icon [nzType]=\"tagGroup.check ? 'check' : 'close'\"></i>\r\n                    {{ tagGroup.tagGroupName }}\r\n                </nz-tag>\r\n            </td>\r\n            <td>               \r\n                <nz-tag *ngFor=\"let tagItem of tagGroup.tags; let childIndex = index\" class=\"pointer\"\r\n                    [nzColor]=\"tagItem.check ? 'green' : 'default'\" (click)=\"checkChild(tagItem)\">\r\n                    <i nz-icon [nzType]=\"tagItem.check ? 'check' : 'close'\"></i>\r\n                    {{ tagItem.name }}\r\n                </nz-tag>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</nz-table> -->\r\n\r\n<!-- <button (click)=\"save()\">check</button> -->",
                    styles: [""]
                },] }
    ];

    var NzModules = [
        grid.NzGridModule,
        input.NzInputModule,
        table.NzTableModule,
        dropdown.NzDropDownModule,
        button.NzButtonModule,
        icon.NzIconModule,
        modal.NzModalModule,
        radio.NzRadioModule,
        upload.NzUploadModule,
        spin.NzSpinModule,
        card.NzCardModule,
        select.NzSelectModule,
        datePicker.NzDatePickerModule,
        tabs.NzTabsModule,
        se.SEModule
    ];
    var PostModule = /** @class */ (function () {
        function PostModule() {
        }
        PostModule.forChild = function () {
            return {
                ngModule: PostModule,
                providers: [],
            };
        };
        PostModule.forLazy = function () {
            return new i1.LazyModuleFactory(PostModule.forChild());
        };
        PostModule.forEarly = function () {
            return new i1.LazyModuleFactory(PostModule.forChild());
        };
        return PostModule;
    }());
    PostModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [
                        LayoutComponent,
                        MainComponent,
                        DetailComponent,
                        ListComponent,
                        UploadFileComponent,
                        TagComponent,
                        ImagePickerComponent
                    ],
                    imports: __spread([
                        SharedModule,
                        i1.CoreModule,
                        forms.ReactiveFormsModule,
                        forms.FormsModule,
                        common.CommonModule,
                        PostRoutingModule
                    ], NzModules, [
                        // NgxsModule.forFeature([PostState]),
                        ngxQuill.QuillModule.forRoot()
                    ]),
                    providers: [
                        // PostsStateService,
                        PageService
                    ]
                },] }
    ];

    var PageService$1 = /** @class */ (function () {
        function PageService() {
            this.allTagData = new rxjs.Subject();
            this.tagData = new rxjs.Subject();
            this.allTagData$ = this.allTagData.asObservable();
            this.tagData$ = this.tagData.asObservable();
        }
        PageService.prototype.getTageListFromApi = function () {
            // this.tagsApiService.tagGroupGetList().pipe(tap(x => this.allTagData.next(x))).subscribe()
        };
        PageService.prototype.getTagOneFromApi = function (groupId) {
            if (!groupId) {
                this.tagData.next(null);
                return;
            }
            ;
            // this.tagsApiService.tagGroupGetByIdById(groupId).pipe(tap(x => this.tagData.next(x))).subscribe();
        };
        return PageService;
    }());
    PageService$1.decorators = [
        { type: i0.Injectable }
    ];
    PageService$1.ctorParameters = function () { return []; };

    var MainComponent$1 = /** @class */ (function () {
        function MainComponent(PageService, confirmation) {
            this.PageService = PageService;
            this.confirmation = confirmation;
            this.tagGroupList = [];
        }
        MainComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.subscription = this.PageService.allTagData$.subscribe(function (result) {
                _this.tagGroupList = result;
            });
        };
        MainComponent.prototype.deleteGroup = function (id) {
            // this.confirmation
            //   .warn(`確認要刪除嗎？`, '系統訊息')
            //   .pipe(
            //     filter(res => res === Confirmation.Status.confirm),
            //     switchMap(() => this.PageService.deleteGroup(id)),
            //     take(1)
            //   )
            //   .subscribe(() => {
            //     this.PageService.getTageListFromApi();
            //   });
        };
        MainComponent.prototype.ngOnDestroy = function () {
            if (this.subscription) {
                this.subscription.unsubscribe();
            }
        };
        return MainComponent;
    }());
    MainComponent$1.decorators = [
        { type: i0.Component, args: [{
                    template: "\r\n<nz-tabset nzType=\"card\">\r\n  <nz-tab nzTitle=\"\u5217\u8868\">\r\n    <nz-table #basicTable [nzData]=\"tagGroupList\" nzSize=\"small\" nzBordered>\r\n      <thead>\r\n        <tr>\r\n          <th nzWidth=\"75px\"></th>\r\n          <th>\u540D\u7A31</th>\r\n          <th>\u9805\u76EE</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let tagGroup of basicTable.data\" class=\"bg-white\">\r\n          <td nzWidth=\"75px\" nzAlign=\"center\">\r\n            <a nz-dropdown [nzDropdownMenu]=\"menu\">\r\n              \u64CD\u4F5C\r\n              <i nz-icon nzType=\"down\"></i>\r\n            </a>\r\n            <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n              <ul nz-menu nzSelectable>\r\n                <li nz-menu-item>\r\n                  <a class=\"text-blue\" [routerLink]=\"tagGroup.id\">\u7DE8\u8F2F</a>\r\n                </li>\r\n                <li nz-menu-item><a class=\"text-red\" (click)=\"deleteGroup(tagGroup.id)\">\u522A\u9664</a></li>\r\n              </ul>\r\n            </nz-dropdown-menu>\r\n          </td>\r\n          <td>{{ tagGroup.tagGroupName }}</td>\r\n          <td>\r\n            <nz-tag *ngFor=\"let tagItem of tagGroup.tags\">\r\n              {{ tagItem.name }}\r\n            </nz-tag>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </nz-table>\r\n  </nz-tab>\r\n  <nz-tab nzTitle=\"\u65B0\u589E\">\r\n    <fs-tag-detail [isCreate]=\"true\"></fs-tag-detail>\r\n  </nz-tab>\r\n</nz-tabset>",
                    styles: [".bg-white{background-color:#fff}"]
                },] }
    ];
    MainComponent$1.ctorParameters = function () { return [
        { type: PageService$1 },
        { type: ng_theme_shared.ConfirmationService }
    ]; };

    var LayoutComponent$1 = /** @class */ (function () {
        function LayoutComponent() {
        }
        LayoutComponent.prototype.ngOnInit = function () {
        };
        return LayoutComponent;
    }());
    LayoutComponent$1.decorators = [
        { type: i0.Component, args: [{
                    template: "<!-- <fs-page-bar></fs-page-bar> -->\r\n<router-outlet></router-outlet>",
                    styles: [""]
                },] }
    ];
    LayoutComponent$1.ctorParameters = function () { return []; };

    var TagDetailComponent = /** @class */ (function () {
        function TagDetailComponent(pageService, location, toasterService) {
            this.pageService = pageService;
            this.location = location;
            this.toasterService = toasterService;
            this.isCreate = false;
            this.deleteTargetTagIds = [];
            this.data = {};
            this.inputList = [
            // { name: '' }
            ];
        }
        TagDetailComponent.prototype.ngOnDestroy = function () {
            if (this.subscription) {
                this.subscription.unsubscribe();
            }
        };
        TagDetailComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.subscription = this.pageService.tagData$.subscribe(function (x) {
                _this.data = x;
            });
        };
        TagDetailComponent.prototype.addOption = function () {
            this.inputList.push();
        };
        TagDetailComponent.prototype.removeOption = function (index) {
            this.inputList.splice(index, 1);
        };
        TagDetailComponent.prototype.removeOldOption = function (id) {
            // this.data.tags = this.data.tags.filter(x => x.id != id);
            this.deleteTargetTagIds.push(id);
        };
        TagDetailComponent.prototype.save = function () {
            // if (this.inputList.filter(x => x.name == '').length > 0 && this.data.tagGroupName != '') {
            //   this.toasterService.error("不能有空值！")
            //   return;
            // }
            // if (this.isCreate) this.create()
            // else this.update();
        };
        TagDetailComponent.prototype.update = function () {
            // this.pageService.updateGroup(this.data.id, this.data.tagGroupName).subscribe(x => {
            //   let createTarget = this.pageService.createGroupAndTags(this.data.id, this.inputList);
            //   let target = this.updateTags().concat(this.deleteTags());
            //   target.push(createTarget)
            //   forkJoin(target).subscribe(()=>{
            //     this.location.back();
            //     this.toasterService.success("修改成功！")
            //   })
            // })
        };
        TagDetailComponent.prototype.updateTags = function () {
            // let obsList = this.data.tags.map(x => {
            //   return this.pageService.updateTag(x.id, x.name)
            // });
            // return obsList
            // forkJoin(obsList).subscribe();
        };
        TagDetailComponent.prototype.deleteTags = function () {
            // let obsList = this.deleteTargetTagIds.map(x => {
            //   return this.pageService.delteTag(x);
            // })
            // return obsList;
            // forkJoin(obsList).subscribe()
        };
        TagDetailComponent.prototype.create = function () {
            // this.pageService.createGroup({
            //   tagGroupName: this.data.tagGroupName
            // }).pipe(tap(x => this.createTags(x.id))).subscribe()
        };
        TagDetailComponent.prototype.createTags = function (groupId) {
            // this.pageService.createGroupAndTags(groupId, this.inputList).subscribe(() => {
            //   this.pageService.getTageListFromApi();
            //   this.toasterService.success("新增成功！");
            //   this.clear();
            // })
        };
        TagDetailComponent.prototype.clear = function () {
            // this.inputList = [
            //   { name: '' }
            // ];
            // this.deleteTargetTagIds = [];
            // this.data = {
            //   id: '',
            //   tagGroupName: '',
            //   tags: [
            //     {
            //       id: '',
            //       name: ''
            //     }
            //   ]
            // };
        };
        return TagDetailComponent;
    }());
    TagDetailComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'fs-tag-detail',
                    template: "<nz-card>\r\n  <form nz-form #f=\"ngForm\" se-container=\"1\">\r\n    <!-- <se label=\"\u540D\u7A31\">\r\n      <input type=\"text\" nz-input name=\"Createname\" required [(ngModel)]=\"data.tagGroupName\"  *ngIf=\"isCreate==false\"/>\r\n      <input type=\"text\" nz-input name=\"name\" required [(ngModel)]=\"data.tagGroupName\"   *ngIf=\"isCreate==true\"/>\r\n    </se>\r\n\r\n    <se [label]=\"addItem\" col=\"1\">\r\n      <ng-template #addItem>\r\n        <button nz-button (click)=\"addOption()\">\u65B0\u589E\u9805\u76EE</button>\r\n      </ng-template>\r\n      <div style=\"display: grid;grid-template-columns: repeat(auto-fill,200px);gap:8px\" *ngIf=\"isCreate==false\">\r\n        <div *ngFor=\"let inputItem of data.tags;let i = index\">\r\n          <nz-input-group [nzAddOnBefore]=\"addOnBeforeTemplate\">\r\n            <input nz-input [(ngModel)]=\"inputItem.name\" [ngModelOptions]=\"{standalone: true}\"/>\r\n          </nz-input-group>\r\n          <ng-template #addOnBeforeTemplate>\r\n            <i nz-icon nzType=\"close\" class=\"pointer text-red\" (click)=\"removeOldOption(inputItem.id)\"></i>\r\n          </ng-template>\r\n        </div>\r\n      </div>\r\n\r\n      <div  style=\"display: grid;grid-template-columns: repeat(auto-fill,200px);gap:8px\" >\r\n        <div *ngFor=\"let i of inputList\">\r\n          <nz-input-group [nzAddOnBefore]=\"addOnBeforeTemplate\">\r\n            <input nz-input [(ngModel)]=\"i.name\"  [ngModelOptions]=\"{standalone: true}\" />\r\n          </nz-input-group>\r\n\r\n          <ng-template #addOnBeforeTemplate>\r\n            <i nz-icon nzType=\"close\" class=\"pointer text-red\" (click)=\"removeOption(i)\"></i>\r\n          </ng-template>\r\n        </div>\r\n      </div>\r\n    </se> -->\r\n\r\n\r\n    <se>\r\n      <button nz-button nzType=\"primary\" (click)=\"save()\">\u5B58\u6A94</button>\r\n    </se>\r\n  </form>\r\n</nz-card>",
                    styles: [""]
                },] }
    ];
    TagDetailComponent.ctorParameters = function () { return [
        { type: PageService$1 },
        { type: common.Location },
        { type: ng_theme_shared.ToasterService }
    ]; };
    TagDetailComponent.propDecorators = {
        isCreate: [{ type: i0.Input }]
    };

    var RouteConfig$1 = /** @class */ (function () {
        function RouteConfig(pageService) {
            this.pageService = pageService;
        }
        RouteConfig.prototype.resolve = function () {
            this.pageService.getTageListFromApi();
        };
        return RouteConfig;
    }());
    RouteConfig$1.decorators = [
        { type: i0.Injectable }
    ];
    RouteConfig$1.ctorParameters = function () { return [
        { type: PageService$1 }
    ]; };
    var DetailRouteConfig = /** @class */ (function () {
        function DetailRouteConfig(pageService) {
            this.pageService = pageService;
        }
        DetailRouteConfig.prototype.resolve = function (route) {
            var tagId = route.params.tagId;
            if (tagId)
                this.pageService.getTagOneFromApi(tagId);
        };
        return DetailRouteConfig;
    }());
    DetailRouteConfig.decorators = [
        { type: i0.Injectable }
    ];
    DetailRouteConfig.ctorParameters = function () { return [
        { type: PageService$1 }
    ]; };
    var routes$1 = [
        {
            path: '',
            component: LayoutComponent$1,
            children: [
                {
                    path: '',
                    component: MainComponent$1,
                    resolve: { RouteConfig: RouteConfig$1 },
                },
                {
                    path: ':tagId',
                    component: TagDetailComponent,
                    resolve: { DetailRouteConfig: DetailRouteConfig }
                }
            ],
        }
    ];
    var TagManagementRoutingModule = /** @class */ (function () {
        function TagManagementRoutingModule() {
        }
        return TagManagementRoutingModule;
    }());
    TagManagementRoutingModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [router.RouterModule.forChild(routes$1)],
                    exports: [router.RouterModule],
                    providers: [
                        RouteConfig$1,
                        DetailRouteConfig
                    ]
                },] }
    ];

    var TagManagementModule = /** @class */ (function () {
        function TagManagementModule() {
        }
        TagManagementModule.forChild = function () {
            return {
                ngModule: TagManagementModule,
                providers: [],
            };
        };
        TagManagementModule.forLazy = function () {
            return new i1.LazyModuleFactory(TagManagementModule.forChild());
        };
        TagManagementModule.forEarly = function () {
            return new i1.LazyModuleFactory(TagManagementModule.forChild());
        };
        return TagManagementModule;
    }());
    TagManagementModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [MainComponent$1, LayoutComponent$1, TagDetailComponent],
                    imports: [
                        SharedModule,
                        tag.NzTagModule,
                        TagManagementRoutingModule
                    ],
                    providers: [PageService$1]
                },] }
    ];

    var ɵ0$2 = PostModule.forEarly, ɵ1 = TagManagementModule.forEarly;
    var routes$2 = [
        { path: '', pathMatch: 'full', redirectTo: 'post' },
        {
            path: '',
            canActivate: [i1.AuthGuard, i1.PermissionGuard],
            children: [
                {
                    path: 'post',
                    loadChildren: ɵ0$2
                },
                {
                    path: 'tag',
                    loadChildren: ɵ1
                },
            ],
        }
    ];
    var CmsAdminRoutingModule = /** @class */ (function () {
        function CmsAdminRoutingModule() {
        }
        return CmsAdminRoutingModule;
    }());
    CmsAdminRoutingModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [router.RouterModule.forChild(routes$2)],
                    exports: [router.RouterModule],
                },] }
    ];

    var CmsAdminModule = /** @class */ (function () {
        function CmsAdminModule() {
        }
        CmsAdminModule.forChild = function () {
            return {
                ngModule: CmsAdminModule,
                providers: [],
            };
        };
        CmsAdminModule.forLazy = function () {
            return new i1.LazyModuleFactory(CmsAdminModule.forChild());
        };
        return CmsAdminModule;
    }());
    CmsAdminModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [
                        SharedModule,
                        i1.CoreModule,
                        CmsAdminRoutingModule,
                    ],
                    exports: [
                        SharedModule,
                    ],
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CmsAdminModule = CmsAdminModule;
    exports.FileService = FileService;
    exports.GetFileByIdPipe = GetFileByIdPipe;
    exports.SharedModule = SharedModule;
    exports.ɵa = CmsAdminRoutingModule;
    exports.ɵb = PostModule;
    exports.ɵc = LayoutComponent;
    exports.ɵd = MainComponent;
    exports.ɵe = PageService;
    exports.ɵf = PostStateService;
    exports.ɵg = DetailComponent;
    exports.ɵh = FileService;
    exports.ɵi = ListComponent;
    exports.ɵj = UploadFileComponent;
    exports.ɵk = TagComponent;
    exports.ɵl = ImagePickerComponent;
    exports.ɵm = RouteConfig;
    exports.ɵn = PostRoutingModule;
    exports.ɵo = TagManagementModule;
    exports.ɵp = MainComponent$1;
    exports.ɵq = PageService$1;
    exports.ɵr = LayoutComponent$1;
    exports.ɵs = TagDetailComponent;
    exports.ɵt = RouteConfig$1;
    exports.ɵu = DetailRouteConfig;
    exports.ɵv = TagManagementRoutingModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-tw-cms-admin.umd.js.map

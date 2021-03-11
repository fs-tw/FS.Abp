(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@abp/ng.core'), require('@angular/router'), require('@angular/common'), require('@angular/forms'), require('ngx-quill'), require('ng-zorro-antd/grid'), require('ng-zorro-antd/input'), require('ng-zorro-antd/table'), require('ng-zorro-antd/dropdown'), require('ng-zorro-antd/button'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/modal'), require('ng-zorro-antd/radio'), require('ng-zorro-antd/upload'), require('@delon/abc/se'), require('@fs-tw/cms/proxy'), require('lodash'), require('@abp/ng.theme.shared'), require('ng-zorro-antd/core/transition-patch'), require('ng-zorro-antd/core/wave'), require('ng-zorro-antd/menu')) :
    typeof define === 'function' && define.amd ? define('@fs-tw/cms/admin', ['exports', '@angular/core', '@abp/ng.core', '@angular/router', '@angular/common', '@angular/forms', 'ngx-quill', 'ng-zorro-antd/grid', 'ng-zorro-antd/input', 'ng-zorro-antd/table', 'ng-zorro-antd/dropdown', 'ng-zorro-antd/button', 'ng-zorro-antd/icon', 'ng-zorro-antd/modal', 'ng-zorro-antd/radio', 'ng-zorro-antd/upload', '@delon/abc/se', '@fs-tw/cms/proxy', 'lodash', '@abp/ng.theme.shared', 'ng-zorro-antd/core/transition-patch', 'ng-zorro-antd/core/wave', 'ng-zorro-antd/menu'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['fs-tw'] = global['fs-tw'] || {}, global['fs-tw'].cms = global['fs-tw'].cms || {}, global['fs-tw'].cms.admin = {}), global.ng.core, global.i2, global.ng.router, global.ng.common, global.ng.forms, global.i15, global.i3$1, global.i8$1, global.i10, global.i9$1, global.i4$1, global.i7, global.i4, global.i9, global.i5, global.i8, global['fs-tw'].cms.proxy, global._, global.i1$2, global.i6, global.i5$1, global.i11));
}(this, (function (exports, i0, i2, i1, i3, i7$1, i15, i3$1, i8$1, i10, i9$1, i4$1, i7, i4, i9, i5, i8, i1$1, _, i1$2, i6, i5$1, i11) { 'use strict';

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

    var LayoutComponent = /** @class */ (function () {
        function LayoutComponent() {
        }
        LayoutComponent.prototype.ngOnInit = function () {
        };
        return LayoutComponent;
    }());
    LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(); };
    LayoutComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LayoutComponent, selectors: [["fs-layout"]], decls: 1, vars: 0, template: function LayoutComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelement(0, "router-outlet");
            }
        }, directives: [i1.RouterOutlet], styles: [""] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LayoutComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'fs-layout',
                        templateUrl: './layout.component.html',
                        styleUrls: ['./layout.component.less']
                    }]
            }], function () { return []; }, null);
    })();

    var PageService = /** @class */ (function () {
        function PageService(blogService, postService
        // private postService: PostsApiService,
        // private definitionsService: DefinitionsService,
        // private tagsApiService: TagsApiService,
        ) {
            this.blogService = blogService;
            this.postService = postService;
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
        //#endregion
        //#region Post
        PageService.prototype.getPostsByBlogId = function (input) {
            return this.postService.getPostsByBlogIdByInput(input);
        };
        return PageService;
    }());
    PageService.ɵfac = function PageService_Factory(t) { return new (t || PageService)(i0.ɵɵinject(i1$1.Fs.Cms.Blogs.BlogsApiService), i0.ɵɵinject(i1$1.Fs.Cms.Posts.PostsApiService)); };
    PageService.ɵprov = i0.ɵɵdefineInjectable({ token: PageService, factory: PageService.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PageService, [{
                type: i0.Injectable
            }], function () { return [{ type: i1$1.Fs.Cms.Blogs.BlogsApiService }, { type: i1$1.Fs.Cms.Posts.PostsApiService }]; }, null);
    })();

    var PostStateService = /** @class */ (function () {
        function PostStateService() {
            this.store = new i2.InternalStore({});
        }
        PostStateService.prototype.getBlog = function () {
            return this.store.sliceState(function (state) { return state.Blog; });
        };
        PostStateService.prototype.setBlog = function (blog) {
            this.store.patch({ Blog: blog });
        };
        return PostStateService;
    }());
    PostStateService.ɵfac = function PostStateService_Factory(t) { return new (t || PostStateService)(); };
    PostStateService.ɵprov = i0.ɵɵdefineInjectable({ token: PostStateService, factory: PostStateService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PostStateService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root',
                    }]
            }], function () { return []; }, null);
    })();

    function ImagePickerComponent_ng_template_0_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "div");
        }
    }
    var _c0 = function (a0, a1) { return { "width": a0, "height": a1 }; };
    function ImagePickerComponent_ng_template_0_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 11);
            i0.ɵɵelementStart(1, "div", 12);
            i0.ɵɵelementStart(2, "div", 13);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r10 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction2(2, _c0, ctx_r10.borderWidth, ctx_r10.borderHeight));
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx_r10.uploadText);
        }
    }
    function ImagePickerComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "nz-upload", 8);
            i0.ɵɵtemplate(1, ImagePickerComponent_ng_template_0_div_1_Template, 1, 0, "div", 9);
            i0.ɵɵtemplate(2, ImagePickerComponent_ng_template_0_ng_template_2_Template, 4, 5, "ng-template", null, 10, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var _r9 = i0.ɵɵreference(3);
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵproperty("nzListType", ctx_r1.uploadTemplate ? "text" : "picture")("nzBeforeUpload", ctx_r1.beforeUpload)("nzMultiple", ctx_r1.isMultiple);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", ctx_r1.uploadTemplate || _r9);
        }
    }
    var _c1 = function (a0) { return { "max-height": a0 }; };
    function ImagePickerComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r13_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 14);
            i0.ɵɵlistener("click", function ImagePickerComponent_ng_template_2_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r13_1); var item_r11 = ctx.$implicit; var ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.controllModal(true, item_r11); });
            i0.ɵɵelementStart(1, "div", 15);
            i0.ɵɵelementStart(2, "i", 16);
            i0.ɵɵlistener("click", function ImagePickerComponent_ng_template_2_Template_i_click_2_listener() { i0.ɵɵrestoreView(_r13_1); var item_r11 = ctx.$implicit; var ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.deleteFile(item_r11.fileName); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelement(3, "img", 17);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r11 = ctx.$implicit;
            var ctx_r3 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction2(3, _c0, ctx_r3.borderWidth, ctx_r3.borderHeight));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("src", item_r11.fileUrl, i0.ɵɵsanitizeUrl)("ngStyle", i0.ɵɵpureFunction1(6, _c1, ctx_r3.imageHeight));
        }
    }
    function ImagePickerComponent_ng_container_5_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "div");
        }
    }
    function ImagePickerComponent_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, ImagePickerComponent_ng_container_5_div_1_Template, 1, 0, "div", 9);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            i0.ɵɵnextContext();
            var _r0 = i0.ɵɵreference(1);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", _r0);
        }
    }
    function ImagePickerComponent_ng_container_6_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "div");
        }
    }
    var _c2 = function (a0) { return { $implicit: a0 }; };
    function ImagePickerComponent_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, ImagePickerComponent_ng_container_6_div_1_Template, 1, 0, "div", 18);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var item_r16 = ctx.$implicit;
            var ctx_r5 = i0.ɵɵnextContext();
            var _r2 = i0.ɵɵreference(3);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", ctx_r5.imageTemplate || _r2)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c2, item_r16));
        }
    }
    function ImagePickerComponent_ng_container_7_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "div");
        }
    }
    function ImagePickerComponent_ng_container_7_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, ImagePickerComponent_ng_container_7_div_1_Template, 1, 0, "div", 18);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var item_r18 = ctx.$implicit;
            var ctx_r6 = i0.ɵɵnextContext();
            var _r2 = i0.ɵɵreference(3);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", ctx_r6.imageTemplate || _r2)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c2, item_r18));
        }
    }
    function ImagePickerComponent_ng_container_8_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "div");
        }
    }
    function ImagePickerComponent_ng_container_8_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, ImagePickerComponent_ng_container_8_div_1_Template, 1, 0, "div", 9);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            i0.ɵɵnextContext();
            var _r0 = i0.ɵɵreference(1);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", _r0);
        }
    }
    var _c3 = function (a0) { return { "divGrid": a0 }; };
    var _c4 = function (a0) { return { "grid-template-columns": a0 }; };
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
        function ImagePickerComponent(toasterService, environmentService, configStateService) {
            var _this = this;
            this.toasterService = toasterService;
            this.environmentService = environmentService;
            this.configStateService = configStateService;
            /** 縮圖寬度，單位 px，預設 104px */
            this.imageWidth = '104px';
            /** 縮圖高度，單位 px ，預設 104px */
            this.imageHeight = '104px';
            /** 外框寬度，單位 px ，預設 104px */
            this.borderWidth = '104px';
            /** 外框高度，單位 px ，預設 104px */
            this.borderHeight = '104px';
            /** 上傳按鈕文字 */
            this.uploadText = 'Upload';
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
                .map(function (x) { return new ImageFile(x.fileName, _this.getHttpUrl(x.fileUrl)); });
            this.uploadFiles = [];
            this.showFiles = [];
        };
        ImagePickerComponent.prototype.clear = function () {
            this.existFiles = [];
            this.deleteFiles = [];
            this.uploadFiles = [];
            this.showFiles = [];
        };
        ImagePickerComponent.prototype.getHttpUrl = function (url) {
            var result = url;
            if (url.includes("http"))
                return result;
            return this.environmentService.getApiUrl() + url;
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
        ImagePickerComponent.prototype.getUploadFiles = function () {
            var _this = this;
            var existFiles = this.existFiles.filter(function (x) { return !_this.deleteFiles.includes(x.fileName); }).map(function (x) { return new SaveFile(x.fileName, x.fileUrl, null); });
            var updateFiles = this.uploadFiles.map(function (x) { return new SaveFile(x.name, '', x); });
            return existFiles.concat(updateFiles);
        };
        return ImagePickerComponent;
    }());
    ImagePickerComponent.ɵfac = function ImagePickerComponent_Factory(t) { return new (t || ImagePickerComponent)(i0.ɵɵdirectiveInject(i1$2.ToasterService), i0.ɵɵdirectiveInject(i2.EnvironmentService), i0.ɵɵdirectiveInject(i2.ConfigStateService)); };
    ImagePickerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ImagePickerComponent, selectors: [["image-picker"]], inputs: { imageWidth: "imageWidth", imageHeight: "imageHeight", borderWidth: "borderWidth", borderHeight: "borderHeight", uploadText: "uploadText", maxImageCount: "maxImageCount", isMultiple: "isMultiple", imageTemplate: "imageTemplate", uploadTemplate: "uploadTemplate", inLine: "inLine", showFrontButton: "showFrontButton", existFiles: "existFiles" }, features: [i0.ɵɵNgOnChangesFeature], decls: 12, vars: 15, consts: [["Upload", ""], ["Image", ""], [3, "ngClass", "ngStyle"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["nzCancelText", "\u95DC\u9589", 3, "nzOkText", "nzWidth", "nzTitle", "nzVisible", "nzVisibleChange", "nzOnCancel"], [1, "divGridCenter"], [2, "max-width", "100%", "max-height", "500px", 3, "src"], [1, "avatar-uploader", 3, "nzListType", "nzBeforeUpload", "nzMultiple"], [4, "ngTemplateOutlet"], ["UploadImage", ""], [1, "divBorder", "divGridCenter", 3, "ngStyle"], [2, "font-size", "16px", "text-align", "center"], [1, "ant-upload-text"], [1, "divBorder", "imgGrid", "divGridCenter", 3, "ngStyle", "click"], [1, "imgGridClose"], ["nz-icon", "", "nzType", "close", "nzTheme", "outline", 3, "click"], [2, "max-width", "100%", 3, "src", "ngStyle"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function ImagePickerComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, ImagePickerComponent_ng_template_0_Template, 4, 4, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵtemplate(2, ImagePickerComponent_ng_template_2_Template, 4, 8, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵelementStart(4, "div", 2);
                i0.ɵɵtemplate(5, ImagePickerComponent_ng_container_5_Template, 2, 1, "ng-container", 3);
                i0.ɵɵtemplate(6, ImagePickerComponent_ng_container_6_Template, 2, 4, "ng-container", 4);
                i0.ɵɵtemplate(7, ImagePickerComponent_ng_container_7_Template, 2, 4, "ng-container", 4);
                i0.ɵɵtemplate(8, ImagePickerComponent_ng_container_8_Template, 2, 1, "ng-container", 3);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(9, "nz-modal", 5);
                i0.ɵɵlistener("nzVisibleChange", function ImagePickerComponent_Template_nz_modal_nzVisibleChange_9_listener($event) { return ctx.viewImage.isVisabled = $event; })("nzOnCancel", function ImagePickerComponent_Template_nz_modal_nzOnCancel_9_listener() { return ctx.controllModal(false, ctx.viewImage.image); });
                i0.ɵɵelementStart(10, "div", 6);
                i0.ɵɵelement(11, "img", 7);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(11, _c3, ctx.inLine))("ngStyle", i0.ɵɵpureFunction1(13, _c4, ctx.inLine ? "repeat(auto-fit, " + ctx.borderWidth + ")" : "unset"));
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.canUpload && ctx.showFrontButton);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngForOf", ctx.existFiles);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngForOf", ctx.showFiles);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.canUpload && !ctx.showFrontButton);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("nzOkText", null)("nzWidth", 1000)("nzTitle", "\u9810\u89BD\u5716")("nzVisible", ctx.viewImage.isVisabled);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("src", ctx.viewImage.image.fileUrl, i0.ɵɵsanitizeUrl);
            }
        }, directives: [i3.NgClass, i3.NgStyle, i3.NgIf, i3.NgForOf, i4.NzModalComponent, i5.NzUploadComponent, i3.NgTemplateOutlet, i6.ɵNzTransitionPatchDirective, i7.NzIconDirective], styles: [".divBorder[_ngcontent-%COMP%]{display:block;border:1px dashed #d9d9d9;background:#fafafa}.divGridCenter[_ngcontent-%COMP%]{display:grid!important;place-items:center}.divGrid[_ngcontent-%COMP%]{display:grid;grid-gap:1rem}.imgGrid[_ngcontent-%COMP%]{border:1px solid #ddd;background-color:#f9f9f9;position:relative;cursor:pointer}.imgGridClose[_ngcontent-%COMP%]{top:-7px;position:absolute;text-align:right;font-size:18px;color:rgba(0,0,0,.55);width:100%}.imgGridClose[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{padding:3px;border-radius:2px;opacity:.8;z-index:10;background-color:#ddd}  .ant-upload.ant-upload-select-picture-card{margin:unset!important}  .ant-upload.ant-upload-select-picture-card>.ant-upload{padding:unset!important}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ImagePickerComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'image-picker',
                        templateUrl: './image-picker.component.html',
                        styleUrls: ['./image-picker.component.css']
                    }]
            }], function () { return [{ type: i1$2.ToasterService }, { type: i2.EnvironmentService }, { type: i2.ConfigStateService }]; }, { imageWidth: [{
                    type: i0.Input
                }], imageHeight: [{
                    type: i0.Input
                }], borderWidth: [{
                    type: i0.Input
                }], borderHeight: [{
                    type: i0.Input
                }], uploadText: [{
                    type: i0.Input
                }], maxImageCount: [{
                    type: i0.Input
                }], isMultiple: [{
                    type: i0.Input
                }], imageTemplate: [{
                    type: i0.Input
                }], uploadTemplate: [{
                    type: i0.Input
                }], inLine: [{
                    type: i0.Input
                }], showFrontButton: [{
                    type: i0.Input
                }], existFiles: [{
                    type: i0.Input
                }] });
    })();

    var _c0$1 = ["DefaultImagePicker"];
    function CreateComponent_button_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r6_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 5);
            i0.ɵɵlistener("click", function CreateComponent_button_0_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r6_1); var ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.showModal(); });
            i0.ɵɵelementStart(1, "span");
            i0.ɵɵtext(2, "+\u5EFA\u7ACB");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵproperty("nzType", "primary");
        }
    }
    function CreateComponent_a_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r8_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "a", 6);
            i0.ɵɵlistener("click", function CreateComponent_a_1_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r8_1); var ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.showModal(); });
            i0.ɵɵtext(1, "\u7DE8\u8F2F");
            i0.ɵɵelementEnd();
        }
    }
    function CreateComponent_form_3_Template(rf, ctx) {
        if (rf & 1) {
            var _r12_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "form", 7, 8);
            i0.ɵɵelementStart(2, "se", 9);
            i0.ɵɵelementStart(3, "nz-radio-group", 10);
            i0.ɵɵlistener("ngModelChange", function CreateComponent_form_3_Template_nz_radio_group_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r12_1); var ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.data.disable = $event; });
            i0.ɵɵelementStart(4, "label", 11);
            i0.ɵɵtext(5, "\u662F");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "label", 11);
            i0.ɵɵtext(7, "\u5426");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerStart(8);
            i0.ɵɵelementStart(9, "se", 12);
            i0.ɵɵelementStart(10, "input", 13);
            i0.ɵɵlistener("ngModelChange", function CreateComponent_form_3_Template_input_ngModelChange_10_listener($event) { i0.ɵɵrestoreView(_r12_1); var ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.data.sequence = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "se", 14);
            i0.ɵɵelementStart(12, "input", 15);
            i0.ɵɵlistener("ngModelChange", function CreateComponent_form_3_Template_input_ngModelChange_12_listener($event) { i0.ɵɵrestoreView(_r12_1); var ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.data.displayName = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "se", 16);
            i0.ɵɵelementStart(14, "textarea", 17);
            i0.ɵɵlistener("ngModelChange", function CreateComponent_form_3_Template_textarea_ngModelChange_14_listener($event) { i0.ɵɵrestoreView(_r12_1); var ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.data.description = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "se", 18);
            i0.ɵɵelementStart(16, "input", 19);
            i0.ɵɵlistener("ngModelChange", function CreateComponent_form_3_Template_input_ngModelChange_16_listener($event) { i0.ɵɵrestoreView(_r12_1); var ctx_r16 = i0.ɵɵnextContext(); return ctx_r16.data.url = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "se", 20);
            i0.ɵɵelementStart(18, "input", 21);
            i0.ɵɵlistener("ngModelChange", function CreateComponent_form_3_Template_input_ngModelChange_18_listener($event) { i0.ɵɵrestoreView(_r12_1); var ctx_r17 = i0.ɵɵnextContext(); return ctx_r17.data.listStyle = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "se", 22);
            i0.ɵɵelement(20, "image-picker", 23, 24);
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext();
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngModel", ctx_r2.data.disable);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzValue", false);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("nzValue", true);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngModel", ctx_r2.data.sequence);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", ctx_r2.data.displayName);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", ctx_r2.data.description);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", ctx_r2.data.url);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", ctx_r2.data.listStyle);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("existFiles", ctx_r2.defaultImages)("maxImageCount", 1);
        }
    }
    function CreateComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r19_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 25);
            i0.ɵɵlistener("click", function CreateComponent_ng_template_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r19_1); var ctx_r18 = i0.ɵɵnextContext(); return ctx_r18.handleCancel(); });
            i0.ɵɵtext(1, "\u53D6\u6D88");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "button", 26);
            i0.ɵɵlistener("click", function CreateComponent_ng_template_4_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r19_1); var ctx_r20 = i0.ɵɵnextContext(); return ctx_r20.save(); });
            i0.ɵɵtext(3, "\u5132\u5B58");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r4 = i0.ɵɵnextContext();
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx_r4.data.sequence == null || !ctx_r4.data.displayName);
        }
    }
    // import { ConfigStateService } from '@abp/ng.core';
    // import { NzUploadFile } from 'ng-zorro-antd/upload';
    // import { Observable } from 'rxjs';
    // import * as _ from 'lodash';
    // import { ConfirmationService,ToasterService } from '@abp/ng.theme.shared';
    // import { BlogDto } from '@fs-tw/cms/proxy';
    // import { FileService } from '@fs-tw/theme-core';
    // import { PageService } from '../../../providers/page.service';
    // import { Store } from '@ngxs/store';
    var CreateComponent = /** @class */ (function () {
        function CreateComponent(pageService) {
            this.pageService = pageService;
            this.onSave = new i0.EventEmitter();
            this.isVisible = false;
            this.defaultImages = [];
        }
        CreateComponent.prototype.ngOnInit = function () {
        };
        CreateComponent.prototype.showModal = function () {
            var _this = this;
            this.data = {
                no: "",
                displayName: "",
                description: "",
                parentId: null,
                disable: false,
                listStyle: "",
                sequence: 0,
                url: "",
                iconUrl: ""
            };
            this.defaultImages = [];
            if (this.blogId) {
                this.pageService.getBlogById(this.blogId).subscribe(function (x) {
                    _this.data = x;
                    // 已上傳圖片
                    _this.defaultImages = [new ImageFile('test', 'https://dummyimage.com/140x98/000/fff')];
                    // if (x.iconUrl) this.defaultImages.push(new ImageFile(x.iconUrl, 'http://' + x.iconUrl));
                });
            }
            this.isVisible = true;
        };
        CreateComponent.prototype.handleCancel = function () {
            this.isVisible = false;
        };
        CreateComponent.prototype.save = function () {
            var e_1, _a;
            var _this = this;
            // 補上傳、刪除檔案 api
            var uploadImageInfos = this.defaultImagePicker.getUploadFiles();
            var deleteImageNames = this.defaultImagePicker.getDeleteFileNames();
            var formData = new FormData();
            try {
                for (var uploadImageInfos_1 = __values(uploadImageInfos), uploadImageInfos_1_1 = uploadImageInfos_1.next(); !uploadImageInfos_1_1.done; uploadImageInfos_1_1 = uploadImageInfos_1.next()) {
                    var item = uploadImageInfos_1_1.value;
                    if (item.isUpload)
                        formData.append('files[]', item.file, '');
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (uploadImageInfos_1_1 && !uploadImageInfos_1_1.done && (_a = uploadImageInfos_1.return)) _a.call(uploadImageInfos_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            console.log(uploadImageInfos, deleteImageNames);
            var input = _.cloneDeep(this.data);
            var action;
            if (!this.blogId) {
                input.no = input.displayName;
                action = this.pageService.createBlog(input);
            }
            else {
                action = this.pageService.updateBlog(this.blogId, input);
            }
            action.subscribe(function () {
                _this.onSave.emit();
                _this.handleCancel();
            }, function (error) {
                console.error(error);
            });
        };
        return CreateComponent;
    }());
    CreateComponent.ɵfac = function CreateComponent_Factory(t) { return new (t || CreateComponent)(i0.ɵɵdirectiveInject(PageService)); };
    CreateComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CreateComponent, selectors: [["fs-create"]], viewQuery: function CreateComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c0$1, 1);
            }
            if (rf & 2) {
                var _t = void 0;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.defaultImagePicker = _t.first);
            }
        }, inputs: { blogId: "blogId" }, outputs: { onSave: "onSave" }, decls: 6, vars: 5, consts: [["nz-button", "", 3, "nzType", "click", 4, "ngIf"], [3, "click", 4, "ngIf"], ["nzTitle", "\u5EFA\u7ACB\u6D88\u606F\u7A2E\u985E", 3, "nzVisible", "nzFooter", "nzVisibleChange", "nzOnCancel"], ["nz-form", "", "se-container", "1", "labelWidth", "100", 4, "ngIf"], ["footer", ""], ["nz-button", "", 3, "nzType", "click"], [3, "click"], ["nz-form", "", "se-container", "1", "labelWidth", "100"], ["f", "ngForm"], ["label", "\u662F\u5426\u555F\u7528", "required", ""], ["name", "disable", 3, "ngModel", "ngModelChange"], ["nz-radio", "", 3, "nzValue"], ["label", "\u9806\u5E8F", "required", ""], ["type", "number", "nz-input", "", "name", "no", "required", "", 3, "ngModel", "ngModelChange"], ["label", "\u540D\u7A31", "required", ""], ["type", "text", "nz-input", "", "name", "displayName", "required", "", 3, "ngModel", "ngModelChange"], ["label", "\u8AAA\u660E"], ["nz-input", "", "type", "text", "nz-input", "", "name", "description", 3, "ngModel", "ngModelChange"], ["label", "\u7DB2\u5740"], ["type", "text", "nz-input", "", "name", "url", 3, "ngModel", "ngModelChange"], ["label", "\u5217\u8868\u6A23\u5F0F", "optionalHelp", "\u76EE\u524D\u53EF\u8A2D\u5B9A\u6709\u6548\u8A2D\u5B9A\u503C\u70BA 2\u30013\u30014 \u9810\u8A2D\u70BA 3"], ["type", "text", "nz-input", "", "name", "listStyle", 3, "ngModel", "ngModelChange"], ["label", "\u5716\u793A", "optionalHelp", "\u5EFA\u8B70\u5716\u7247\u5927\u5C0F\u70BA 40*30\uFF0C\u50C5\u80FD\u4E0A\u50B3 jpg, png"], ["imageWidth", "40px", "imageHeight", "30px", "borderWidth", "80px", "borderHeight", "60px", 3, "existFiles", "maxImageCount"], ["DefaultImagePicker", ""], ["nz-button", "", "nzType", "default", 3, "click"], ["nz-button", "", "nzType", "primary", 3, "disabled", "click"]], template: function CreateComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, CreateComponent_button_0_Template, 3, 1, "button", 0);
                i0.ɵɵtemplate(1, CreateComponent_a_1_Template, 2, 0, "a", 1);
                i0.ɵɵelementStart(2, "nz-modal", 2);
                i0.ɵɵlistener("nzVisibleChange", function CreateComponent_Template_nz_modal_nzVisibleChange_2_listener($event) { return ctx.isVisible = $event; })("nzOnCancel", function CreateComponent_Template_nz_modal_nzOnCancel_2_listener() { return ctx.handleCancel(); });
                i0.ɵɵtemplate(3, CreateComponent_form_3_Template, 22, 10, "form", 3);
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(4, CreateComponent_ng_template_4_Template, 4, 1, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
            }
            if (rf & 2) {
                var _r3 = i0.ɵɵreference(5);
                i0.ɵɵproperty("ngIf", !ctx.blogId);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.blogId);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("nzVisible", ctx.isVisible)("nzFooter", _r3);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.data);
            }
        }, directives: [i3.NgIf, i4.NzModalComponent, i4$1.NzButtonComponent, i5$1.NzWaveDirective, i6.ɵNzTransitionPatchDirective, i7$1.ɵangular_packages_forms_forms_y, i7$1.NgControlStatusGroup, i7$1.NgForm, i8.SEContainerComponent, i8.SEComponent, i9.NzRadioGroupComponent, i7$1.NgControlStatus, i7$1.NgModel, i9.NzRadioComponent, i7$1.NumberValueAccessor, i8$1.NzInputDirective, i7$1.DefaultValueAccessor, i7$1.RequiredValidator, ImagePickerComponent], styles: [".uploadImgGrid[_ngcontent-%COMP%]{display:grid;place-items:center;border:1px dashed #ddd;padding:10px;justify-content:center;background-color:#fafafa}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CreateComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'fs-create',
                        templateUrl: './create.component.html',
                        styleUrls: ['./create.component.less']
                    }]
            }], function () { return [{ type: PageService }]; }, { defaultImagePicker: [{
                    type: i0.ViewChild,
                    args: ["DefaultImagePicker"]
                }], blogId: [{
                    type: i0.Input
                }], onSave: [{
                    type: i0.Output
                }] });
    })();

    function ListComponent_tr_15_li_11_Template(rf, ctx) {
        if (rf & 1) {
            var _r7_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "li", 13);
            i0.ɵɵelementStart(1, "a", 17);
            i0.ɵɵlistener("click", function ListComponent_tr_15_li_11_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r7_1); var data_r2 = i0.ɵɵnextContext().$implicit; var ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.deleteBlog(data_r2); });
            i0.ɵɵtext(2, "\u522A\u9664");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
    }
    var _c0$2 = function (a0) { return { listSelected: a0 }; };
    function ListComponent_tr_15_Template(rf, ctx) {
        if (rf & 1) {
            var _r9_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "tr", 7);
            i0.ɵɵelementStart(1, "td", 8);
            i0.ɵɵelementStart(2, "a", 9);
            i0.ɵɵtext(3);
            i0.ɵɵpipe(4, "abpLocalization");
            i0.ɵɵelement(5, "i", 10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "nz-dropdown-menu", null, 11);
            i0.ɵɵelementStart(8, "ul", 12);
            i0.ɵɵelementStart(9, "li", 13);
            i0.ɵɵelementStart(10, "fs-create", 14);
            i0.ɵɵlistener("onSave", function ListComponent_tr_15_Template_fs_create_onSave_10_listener() { i0.ɵɵrestoreView(_r9_1); var ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.reload(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(11, ListComponent_tr_15_li_11_Template, 3, 0, "li", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "td", 16);
            i0.ɵɵlistener("click", function ListComponent_tr_15_Template_td_click_12_listener() { i0.ɵɵrestoreView(_r9_1); var data_r2 = ctx.$implicit; var ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.showDetail(data_r2); });
            i0.ɵɵtext(13);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "td", 16);
            i0.ɵɵlistener("click", function ListComponent_tr_15_Template_td_click_14_listener() { i0.ɵɵrestoreView(_r9_1); var data_r2 = ctx.$implicit; var ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.showDetail(data_r2); });
            i0.ɵɵtext(15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var data_r2 = ctx.$implicit;
            var _r3 = i0.ɵɵreference(7);
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(9, _c0$2, data_r2.id == ctx_r1.selectBlogCodeId));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("nzDropdownMenu", _r3);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(4, 7, "AbpIdentity::Actions"), " ");
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("blogId", data_r2.id);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", data_r2.no != "CmsBlogNotClassified");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(data_r2.displayName);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", data_r2.disable ? "\u95DC\u9589" : "\u555F\u7528", " ");
        }
    }
    // import { BlogDto } from '@fs-tw/cms/proxy';
    // import { CodesDto, CodingWithSettingTreeModel } from '@fs-tw/theme-core';
    // import { Confirmation, ConfirmationService, ToasterService } from '@abp/ng.theme.shared';
    // import { Select } from '@ngxs/store';
    // import { Observable, Subscription } from 'rxjs';
    // import { PageService } from '../../../providers/page.service';
    // import { PostState } from '../../../providers/post/post.state';
    // import { PostsStateService } from '../../../providers/post/poststate.service';
    var ListComponent = /** @class */ (function () {
        function ListComponent(pageService, postStateService) {
            this.pageService = pageService;
            this.postStateService = postStateService;
            // @Select(PostState.getPostsTotalCount)
            // totalCount$: Observable<number>;
            // blogDatas: BlogDto[] = [];
            // news: CodingWithSettingTreeModel;
            // subscription: Subscription;
            // parentCode: CodesDto;
            this.blogDatas = [];
            this.selectBlogCodeId = "";
            this.loading = false;
        }
        ListComponent.prototype.ngOnInit = function () {
            this.reload();
        };
        ListComponent.prototype.reload = function () {
            var _this = this;
            var input = {
                skipCount: 0,
                maxResultCount: 999,
                sorting: 'sequence'
            };
            this.loading = true;
            this.pageService.getBlogs(input).subscribe(function (x) {
                _this.blogDatas = x.items;
                _this.loading = false;
            }, function (error) {
                _this.loading = false;
            });
        };
        ListComponent.prototype.showDetail = function (blog) {
            if (blog == null) {
                this.selectBlogCodeId = null;
                return;
            }
            this.selectBlogCodeId = blog.id;
            this.postStateService.setBlog(blog);
        };
        ListComponent.prototype.deleteBlog = function (blog) {
        };
        return ListComponent;
    }());
    ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(i0.ɵɵdirectiveInject(PageService), i0.ɵɵdirectiveInject(PostStateService)); };
    ListComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ListComponent, selectors: [["fs-list"]], decls: 16, vars: 4, consts: [[1, "mb-md"], [2, "margin-right", "10px", 3, "onSave"], ["nz-button", "", 3, "nzType", "click"], ["nzSize", "small", "nzBordered", "", 3, "nzData", "nzLoading"], ["basicTable", ""], ["nzWidth", "75px"], ["style", "cursor: pointer;", "class", "bg-white listColor", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "bg-white", "listColor", 2, "cursor", "pointer", 3, "ngClass"], ["nzWidth", "75px", "nzAlign", "center"], ["nz-dropdown", "", 3, "nzDropdownMenu"], ["nz-icon", "", "nzType", "down"], ["menu", "nzDropdownMenu"], ["nz-menu", ""], ["nz-menu-item", ""], [3, "blogId", "onSave"], ["nz-menu-item", "", 4, "ngIf"], [3, "click"], [1, "text-red", 3, "click"]], template: function ListComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div");
                i0.ɵɵelementStart(1, "div", 0);
                i0.ɵɵelementStart(2, "fs-create", 1);
                i0.ɵɵlistener("onSave", function ListComponent_Template_fs_create_onSave_2_listener() { return ctx.reload(); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "button", 2);
                i0.ɵɵlistener("click", function ListComponent_Template_button_click_3_listener() { return ctx.showDetail(null); });
                i0.ɵɵtext(4, " \u5168\u90E8 ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "nz-table", 3, 4);
                i0.ɵɵelementStart(7, "thead");
                i0.ɵɵelementStart(8, "tr");
                i0.ɵɵelement(9, "th", 5);
                i0.ɵɵelementStart(10, "th");
                i0.ɵɵtext(11, "\u540D\u7A31");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(12, "th");
                i0.ɵɵtext(13, "\u72C0\u614B");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(14, "tbody");
                i0.ɵɵtemplate(15, ListComponent_tr_15_Template, 16, 11, "tr", 6);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0.ɵɵreference(6);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("nzType", "primary");
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("nzData", ctx.blogDatas)("nzLoading", ctx.loading);
                i0.ɵɵadvance(10);
                i0.ɵɵproperty("ngForOf", _r0.data);
            }
        }, directives: [CreateComponent, i4$1.NzButtonComponent, i5$1.NzWaveDirective, i6.ɵNzTransitionPatchDirective, i10.NzTableComponent, i10.NzTheadComponent, i10.NzTrDirective, i10.NzTableCellDirective, i10.NzThMeasureDirective, i10.NzTbodyComponent, i3.NgForOf, i3.NgClass, i10.NzCellAlignDirective, i9$1.NzDropDownADirective, i9$1.NzDropDownDirective, i7.NzIconDirective, i9$1.NzDropdownMenuComponent, i11.NzMenuDirective, i11.NzMenuItemDirective, i3.NgIf], pipes: [i2.LocalizationPipe], styles: [".listSelected[_ngcontent-%COMP%]{background-color:#e6f2ff!important}nz-list-item[_ngcontent-%COMP%]{font-size:15px}.bg-white[_ngcontent-%COMP%]{background-color:#fff}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'fs-list',
                        templateUrl: './list.component.html',
                        styleUrls: ['./list.component.css']
                    }]
            }], function () { return [{ type: PageService }, { type: PostStateService }]; }, null);
    })();

    function MainComponent_ng_template_12_Template(rf, ctx) {
        if (rf & 1) {
            var _r5_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 12);
            i0.ɵɵlistener("click", function MainComponent_ng_template_12_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5_1); var ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.changePage(1); });
            i0.ɵɵelement(1, "i", 13);
            i0.ɵɵelementEnd();
        }
    }
    function MainComponent_ng_container_28_span_17_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵelement(1, "i", 24);
            i0.ɵɵelementEnd();
        }
    }
    function MainComponent_ng_container_28_span_18_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵelement(1, "i", 25);
            i0.ɵɵelementEnd();
        }
    }
    function MainComponent_ng_container_28_span_22_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵtext(1, "\u5167\u5BB9");
            i0.ɵɵelementEnd();
        }
    }
    function MainComponent_ng_container_28_span_23_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵtext(1, "\u9023\u7D50");
            i0.ɵɵelementEnd();
        }
    }
    function MainComponent_ng_container_28_div_33_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelementStart(1, "h3");
            i0.ɵɵtext(2, "\u5167\u5BB9\uFF1A");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(3, "quill-view", 26);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r6 = i0.ɵɵnextContext().$implicit;
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("content", item_r6.content);
        }
    }
    function MainComponent_ng_container_28_div_34_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelementStart(1, "h3");
            i0.ɵɵtext(2, "\u9023\u7D50");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "p");
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r6 = i0.ɵɵnextContext().$implicit;
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(item_r6.url);
        }
    }
    function MainComponent_ng_container_28_Template(rf, ctx) {
        if (rf & 1) {
            var _r18_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "tr", 14);
            i0.ɵɵelementStart(2, "td", 15);
            i0.ɵɵlistener("nzExpandChange", function MainComponent_ng_container_28_Template_td_nzExpandChange_2_listener($event) { var item_r6 = ctx.$implicit; return item_r6.expand = $event; });
            i0.ɵɵelementStart(3, "a", 16);
            i0.ɵɵtext(4);
            i0.ɵɵpipe(5, "abpLocalization");
            i0.ɵɵelement(6, "i", 17);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "nz-dropdown-menu", null, 18);
            i0.ɵɵelementStart(9, "ul", 19);
            i0.ɵɵelementStart(10, "li", 20);
            i0.ɵɵlistener("click", function MainComponent_ng_container_28_Template_li_click_10_listener() { i0.ɵɵrestoreView(_r18_1); var item_r6 = ctx.$implicit; var ctx_r17 = i0.ɵɵnextContext(); return ctx_r17.gotoDetail(item_r6.id); });
            i0.ɵɵelementStart(11, "a");
            i0.ɵɵtext(12, "\u7DE8\u8F2F");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "li", 20);
            i0.ɵɵlistener("click", function MainComponent_ng_container_28_Template_li_click_13_listener() { i0.ɵɵrestoreView(_r18_1); var item_r6 = ctx.$implicit; var ctx_r19 = i0.ɵɵnextContext(); return ctx_r19.deleteItem(item_r6); });
            i0.ɵɵelementStart(14, "a", 21);
            i0.ɵɵtext(15, "\u522A\u9664");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "td");
            i0.ɵɵtemplate(17, MainComponent_ng_container_28_span_17_Template, 2, 0, "span", 22);
            i0.ɵɵtemplate(18, MainComponent_ng_container_28_span_18_Template, 2, 0, "span", 22);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "td");
            i0.ɵɵtext(20);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "td");
            i0.ɵɵtemplate(22, MainComponent_ng_container_28_span_22_Template, 2, 0, "span", 22);
            i0.ɵɵtemplate(23, MainComponent_ng_container_28_span_23_Template, 2, 0, "span", 22);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "td");
            i0.ɵɵtext(25);
            i0.ɵɵpipe(26, "date");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "tr", 23);
            i0.ɵɵelementStart(28, "div");
            i0.ɵɵelementStart(29, "h3");
            i0.ɵɵtext(30, "\u526F\u6A19\u984C");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(31, "p");
            i0.ɵɵtext(32);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(33, MainComponent_ng_container_28_div_33_Template, 4, 1, "div", 22);
            i0.ɵɵtemplate(34, MainComponent_ng_container_28_div_34_Template, 5, 1, "div", 22);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var item_r6 = ctx.$implicit;
            var _r7 = i0.ɵɵreference(8);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("nzExpand", item_r6.expand);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzDropdownMenu", _r7);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(5, 13, "AbpIdentity::Actions"), " ");
            i0.ɵɵadvance(13);
            i0.ɵɵproperty("ngIf", item_r6.published);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !item_r6.published);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", item_r6.title, " ");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", item_r6.displayMode == 0);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", item_r6.displayMode == 1);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(26, 15, item_r6.published_At, "yyyy-MM-dd HH:mm:ss"));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("nzExpand", item_r6.expand);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(item_r6.subtitle || "-");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", item_r6.displayMode == 0);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", item_r6.displayMode == 1);
        }
    }
    // import { ActivatedRoute, Router } from '@angular/router';
    // import { PostWithDetailsDto } from '@fs-tw/cms/proxy';
    // import { CodesDto } from '@fs-tw/theme-core';
    // import { Confirmation, ConfirmationService, ToasterService } from '@abp/ng.theme.shared';
    // import { Select, Store } from '@ngxs/store';
    // import { Observable, Subscription } from 'rxjs';
    // import { Deletepost, GetPosts } from '../../providers/post/post.actions';
    // import { PostState } from '../../providers/post/post.state';
    // import { PostsStateService } from '../../providers/post/poststate.service';
    // import { PageService } from '../../providers/page.service';
    var MainComponent = /** @class */ (function () {
        function MainComponent(pageService, postStateService) {
            this.pageService = pageService;
            this.postStateService = postStateService;
            this.postParams = {
                skipCount: 0,
                maxResultCount: 10,
                keyword: "",
                blogId: null
            };
            this.posts = [];
            this.totalCount = 0;
            this.loading = false;
        }
        MainComponent.prototype.ngOnInit = function () {
            this.blog$ = this.postStateService.getBlog();
            this.onBlogChange();
        };
        MainComponent.prototype.onBlogChange = function () {
            var _this = this;
            this.blog$.subscribe(function (blog) {
                _this.blogId = blog == null ? null : blog.id;
                _this.blogName = blog == null ? "" : blog.displayName;
                _this.postParams.blogId = _this.blogId;
                _this.changePage(1);
            });
        };
        MainComponent.prototype.gotoDetail = function () {
        };
        MainComponent.prototype.changePage = function (page) {
            var _this = this;
            this.postParams.skipCount = (page - 1) * this.postParams.maxResultCount;
            this.loading = true;
            this.pageService.getPostsByBlogId(this.postParams).subscribe(function (x) {
                _this.loading = false;
                _this.posts = x.items;
                _this.totalCount = x.totalCount;
            });
        };
        MainComponent.prototype.deleteItem = function (item) {
        };
        return MainComponent;
    }());
    MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(i0.ɵɵdirectiveInject(PageService), i0.ɵɵdirectiveInject(PostStateService)); };
    MainComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MainComponent, selectors: [["fs-main"]], decls: 29, vars: 8, consts: [["nzGutter", "16"], ["nzSpan", "8"], ["nzSpan", "16"], [1, "mb-md"], ["nz-button", "", "nzType", "primary", 2, "margin-right", "20px", 3, "click"], ["nzSearch", "", 2, "width", "300px", 3, "nzAddOnAfter"], ["type", "text", "nz-input", "", "placeholder", "\u8F38\u5165\u540D\u7A31", 3, "ngModel", "ngModelChange"], ["suffixIconButton", ""], ["nzSize", "small", "nzPageSize", "10", "nzBordered", "", 3, "nzData", "nzTotal", "nzFrontPagination", "nzLoading", "nzPageIndexChange"], ["listTable", ""], ["nzWidth", "110px"], [4, "ngFor", "ngForOf"], ["nz-button", "", "nzType", "primary", "nzSearch", "", 3, "click"], ["nz-icon", "", "nzType", "search"], [1, "bg-white"], ["nzShowExpand", "", "nzWidth", "110px", 3, "nzExpand", "nzExpandChange"], ["nz-dropdown", "", 3, "nzDropdownMenu"], ["nz-icon", "", "nzType", "down"], ["menu", "nzDropdownMenu"], ["nz-menu", ""], ["nz-menu-item", "", 3, "click"], [1, "text-red"], [4, "ngIf"], [3, "nzExpand"], ["nz-icon", "", "nzType", "check", "nzTheme", "outline"], ["nz-icon", "", "nzType", "close", "nzTheme", "outline"], [3, "content"]], template: function MainComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "nz-row", 0);
                i0.ɵɵelementStart(1, "nz-col", 1);
                i0.ɵɵelement(2, "fs-list");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "nz-col", 2);
                i0.ɵɵelementStart(4, "div");
                i0.ɵɵelementStart(5, "div", 3);
                i0.ɵɵelementStart(6, "h5");
                i0.ɵɵtext(7);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(8, "button", 4);
                i0.ɵɵlistener("click", function MainComponent_Template_button_click_8_listener() { return ctx.gotoDetail(); });
                i0.ɵɵtext(9, " \u65B0\u589E ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(10, "nz-input-group", 5);
                i0.ɵɵelementStart(11, "input", 6);
                i0.ɵɵlistener("ngModelChange", function MainComponent_Template_input_ngModelChange_11_listener($event) { return ctx.postParams.keyword = $event; });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(12, MainComponent_ng_template_12_Template, 2, 0, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(14, "nz-table", 8, 9);
                i0.ɵɵlistener("nzPageIndexChange", function MainComponent_Template_nz_table_nzPageIndexChange_14_listener($event) { return ctx.changePage($event); });
                i0.ɵɵelementStart(16, "thead");
                i0.ɵɵelementStart(17, "tr");
                i0.ɵɵelement(18, "th", 10);
                i0.ɵɵelementStart(19, "th");
                i0.ɵɵtext(20, "\u555F\u7528");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(21, "th");
                i0.ɵɵtext(22, "\u6A19\u984C");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(23, "th");
                i0.ɵɵtext(24, "\u986F\u793A\u6A21\u5F0F");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(25, "th");
                i0.ɵɵtext(26, "\u767C\u4F48\u65E5\u671F");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(27, "tbody");
                i0.ɵɵtemplate(28, MainComponent_ng_container_28_Template, 35, 18, "ng-container", 11);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0.ɵɵreference(13);
                var _r2 = i0.ɵɵreference(15);
                i0.ɵɵadvance(7);
                i0.ɵɵtextInterpolate1("\u985E\u578B\uFF1A", ctx.blogName, "");
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("nzAddOnAfter", _r0);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngModel", ctx.postParams.keyword);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("nzData", ctx.posts)("nzTotal", ctx.totalCount)("nzFrontPagination", false)("nzLoading", ctx.loading);
                i0.ɵɵadvance(14);
                i0.ɵɵproperty("ngForOf", _r2.data);
            }
        }, directives: [i3$1.NzRowDirective, i3$1.NzColDirective, ListComponent, i4$1.NzButtonComponent, i5$1.NzWaveDirective, i6.ɵNzTransitionPatchDirective, i8$1.NzInputGroupComponent, i8$1.NzInputDirective, i7$1.DefaultValueAccessor, i7$1.NgControlStatus, i7$1.NgModel, i10.NzTableComponent, i10.NzTheadComponent, i10.NzTrDirective, i10.NzTableCellDirective, i10.NzThMeasureDirective, i10.NzTbodyComponent, i3.NgForOf, i7.NzIconDirective, i10.NzTdAddOnComponent, i9$1.NzDropDownADirective, i9$1.NzDropDownDirective, i9$1.NzDropdownMenuComponent, i11.NzMenuDirective, i11.NzMenuItemDirective, i3.NgIf, i10.NzTrExpandDirective, i10.NzTableFixedRowComponent, i15.QuillViewComponent], pipes: [i2.LocalizationPipe, i3.DatePipe], styles: ["nz-select[_ngcontent-%COMP%]{margin-right:8px;width:220px}.bg-white[_ngcontent-%COMP%]{background-color:#fff}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MainComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'fs-main',
                        templateUrl: './main.component.html',
                        styleUrls: ['./main.component.less']
                    }]
            }], function () { return [{ type: PageService }, { type: PostStateService }]; }, null);
    })();

    // import { ActivatedRoute, Router } from '@angular/router';
    // import { BlogDto, PostImageDto } from '@fs-tw/cms/proxy';
    // import { Confirmation, ConfirmationService, ToasterService } from '@abp/ng.theme.shared';
    // import { Store } from '@ngxs/store';
    // import { forkJoin, Observable } from 'rxjs';
    // import { FileService } from '@fs-tw/theme-core';
    // import { PageService } from '../../providers/page.service';
    // import { PostsStateService } from '../../providers/post/poststate.service';
    // import { UploadFileComponent } from '../upload-file/upload-file.component';
    // import { TagComponent } from '../tag/tag.component';
    // import { finalize } from 'rxjs/operators';
    var DetailComponent = /** @class */ (function () {
        function DetailComponent() {
        }
        DetailComponent.prototype.ngOnInit = function () {
        };
        return DetailComponent;
    }());
    DetailComponent.ɵfac = function DetailComponent_Factory(t) { return new (t || DetailComponent)(); };
    DetailComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DetailComponent, selectors: [["fs-detail"]], decls: 0, vars: 0, template: function DetailComponent_Template(rf, ctx) { }, styles: [".unchecked[_ngcontent-%COMP%]{border:1px solid #e4e4e4}.unchecked[_ngcontent-%COMP%]:hover{background-color:#00c1de;color:#fff}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DetailComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'fs-detail',
                        templateUrl: './detail.component.html',
                        styleUrls: ['./detail.component.less']
                    }]
            }], null, null);
    })();

    var RouteConfig = /** @class */ (function () {
        function RouteConfig(postStateService) {
            this.postStateService = postStateService;
        }
        RouteConfig.prototype.resolve = function () {
            return this.postStateService.setBlog(null);
        };
        return RouteConfig;
    }());
    RouteConfig.ɵfac = function RouteConfig_Factory(t) { return new (t || RouteConfig)(i0.ɵɵinject(PostStateService)); };
    RouteConfig.ɵprov = i0.ɵɵdefineInjectable({ token: RouteConfig, factory: RouteConfig.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RouteConfig, [{
                type: i0.Injectable
            }], function () { return [{ type: PostStateService }]; }, null);
    })();
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
    PostRoutingModule.ɵfac = function PostRoutingModule_Factory(t) { return new (t || PostRoutingModule)(); };
    PostRoutingModule.ɵmod = i0.ɵɵdefineNgModule({ type: PostRoutingModule });
    PostRoutingModule.ɵinj = i0.ɵɵdefineInjector({ providers: [
            RouteConfig
        ], imports: [[i1.RouterModule.forChild(routes)], i1.RouterModule] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PostRoutingModule, { imports: [i1.RouterModule], exports: [i1.RouterModule] }); })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PostRoutingModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [i1.RouterModule.forChild(routes)],
                        exports: [i1.RouterModule],
                        providers: [
                            RouteConfig
                        ]
                    }]
            }], null, null);
    })();

    // import { NgAlainBasicModule } from '@fs-tw/theme-ng-alain/basic';
    var COMPONENT = [];
    var SharedModule = /** @class */ (function () {
        function SharedModule() {
        }
        return SharedModule;
    }());
    SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
    SharedModule.ɵmod = i0.ɵɵdefineNgModule({ type: SharedModule });
    SharedModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[
            // NgAlainBasicModule,
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SharedModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: __spread(COMPONENT),
                        imports: [
                        // NgAlainBasicModule,
                        ],
                        exports: __spread(COMPONENT)
                    }]
            }], null, null);
    })();

    // import { ConfirmationService,ToasterService } from '@abp/ng.theme.shared';
    // import { Confirmation, ConfirmationService,ToasterService } from '@abp/ng.theme.shared';
    // import { Store } from '@ngxs/store';
    // import { NzModalRef } from 'ng-zorro-antd/modal';
    // import { NzUploadFile } from 'ng-zorro-antd/upload';
    // import { FileService } from '@fs-tw/theme-core';
    var UploadFileComponent = /** @class */ (function () {
        function UploadFileComponent() {
        }
        UploadFileComponent.prototype.ngOnInit = function () {
        };
        return UploadFileComponent;
    }());
    UploadFileComponent.ɵfac = function UploadFileComponent_Factory(t) { return new (t || UploadFileComponent)(); };
    UploadFileComponent.ɵcmp = i0.ɵɵdefineComponent({ type: UploadFileComponent, selectors: [["fs-upload-file"]], decls: 0, vars: 0, template: function UploadFileComponent_Template(rf, ctx) { }, styles: [""] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UploadFileComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'fs-upload-file',
                        templateUrl: './upload-file.component.html',
                        styleUrls: ['./upload-file.component.css']
                    }]
            }], null, null);
    })();

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
    TagComponent.ɵfac = function TagComponent_Factory(t) { return new (t || TagComponent)(); };
    TagComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TagComponent, selectors: [["fs-tag"]], decls: 1, vars: 0, template: function TagComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelement(0, "br");
            }
        }, styles: [""] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TagComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'fs-tag',
                        templateUrl: './tag.component.html',
                        styleUrls: ['./tag.component.css']
                    }]
            }], null, null);
    })();

    var NzModules = [
        i3$1.NzGridModule,
        i8$1.NzInputModule,
        i10.NzTableModule,
        i9$1.NzDropDownModule,
        i4$1.NzButtonModule,
        i7.NzIconModule,
        i4.NzModalModule,
        i9.NzRadioModule,
        i5.NzUploadModule,
        i8.SEModule
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
            return new i2.LazyModuleFactory(PostModule.forChild());
        };
        PostModule.forEarly = function () {
            return new i2.LazyModuleFactory(PostModule.forChild());
        };
        return PostModule;
    }());
    PostModule.ɵfac = function PostModule_Factory(t) { return new (t || PostModule)(); };
    PostModule.ɵmod = i0.ɵɵdefineNgModule({ type: PostModule });
    PostModule.ɵinj = i0.ɵɵdefineInjector({ providers: [
            // PostsStateService,
            PageService
        ], imports: [__spread([
                SharedModule,
                i2.CoreModule,
                i7$1.ReactiveFormsModule,
                i7$1.FormsModule,
                i3.CommonModule,
                PostRoutingModule
            ], NzModules, [
                // NgxsModule.forFeature([PostState]),
                i15.QuillModule.forRoot()
            ])] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PostModule, { declarations: [LayoutComponent,
                MainComponent,
                DetailComponent,
                ListComponent,
                CreateComponent,
                UploadFileComponent,
                TagComponent,
                ImagePickerComponent], imports: [SharedModule,
                i2.CoreModule,
                i7$1.ReactiveFormsModule,
                i7$1.FormsModule,
                i3.CommonModule,
                PostRoutingModule, i3$1.NzGridModule,
                i8$1.NzInputModule,
                i10.NzTableModule,
                i9$1.NzDropDownModule,
                i4$1.NzButtonModule,
                i7.NzIconModule,
                i4.NzModalModule,
                i9.NzRadioModule,
                i5.NzUploadModule,
                i8.SEModule, i15.QuillModule] });
    })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PostModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            LayoutComponent,
                            MainComponent,
                            DetailComponent,
                            ListComponent,
                            CreateComponent,
                            UploadFileComponent,
                            TagComponent,
                            ImagePickerComponent
                        ],
                        imports: __spread([
                            SharedModule,
                            i2.CoreModule,
                            i7$1.ReactiveFormsModule,
                            i7$1.FormsModule,
                            i3.CommonModule,
                            PostRoutingModule
                        ], NzModules, [
                            // NgxsModule.forFeature([PostState]),
                            i15.QuillModule.forRoot()
                        ]),
                        providers: [
                            // PostsStateService,
                            PageService
                        ]
                    }]
            }], null, null);
    })();

    var routes$1 = [
        { path: '', pathMatch: 'full', redirectTo: 'post' },
        {
            path: '',
            canActivate: [i2.AuthGuard, i2.PermissionGuard],
            children: [
                {
                    path: 'post',
                    loadChildren: PostModule.forEarly
                },
            ],
        }
    ];
    var CmsAdminRoutingModule = /** @class */ (function () {
        function CmsAdminRoutingModule() {
        }
        return CmsAdminRoutingModule;
    }());
    CmsAdminRoutingModule.ɵfac = function CmsAdminRoutingModule_Factory(t) { return new (t || CmsAdminRoutingModule)(); };
    CmsAdminRoutingModule.ɵmod = i0.ɵɵdefineNgModule({ type: CmsAdminRoutingModule });
    CmsAdminRoutingModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[i1.RouterModule.forChild(routes$1)], i1.RouterModule] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CmsAdminRoutingModule, { imports: [i1.RouterModule], exports: [i1.RouterModule] }); })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmsAdminRoutingModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [i1.RouterModule.forChild(routes$1)],
                        exports: [i1.RouterModule],
                    }]
            }], null, null);
    })();

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
            return new i2.LazyModuleFactory(CmsAdminModule.forChild());
        };
        return CmsAdminModule;
    }());
    CmsAdminModule.ɵfac = function CmsAdminModule_Factory(t) { return new (t || CmsAdminModule)(); };
    CmsAdminModule.ɵmod = i0.ɵɵdefineNgModule({ type: CmsAdminModule });
    CmsAdminModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[
                SharedModule,
                i2.CoreModule,
                CmsAdminRoutingModule,
            ], SharedModule] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CmsAdminModule, { imports: [SharedModule,
                i2.CoreModule,
                CmsAdminRoutingModule], exports: [SharedModule] });
    })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmsAdminModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            SharedModule,
                            i2.CoreModule,
                            CmsAdminRoutingModule,
                        ],
                        exports: [
                            SharedModule,
                        ],
                    }]
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CmsAdminModule = CmsAdminModule;
    exports.SharedModule = SharedModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-tw-cms-admin.umd.js.map

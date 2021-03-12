(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@abp/ng.core'), require('@angular/router'), require('@angular/common'), require('@angular/forms'), require('ngx-quill'), require('ng-zorro-antd/grid'), require('ng-zorro-antd/input'), require('ng-zorro-antd/table'), require('ng-zorro-antd/dropdown'), require('ng-zorro-antd/button'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/modal'), require('ng-zorro-antd/radio'), require('ng-zorro-antd/upload'), require('ng-zorro-antd/spin'), require('ng-zorro-antd/card'), require('ng-zorro-antd/select'), require('ng-zorro-antd/date-picker'), require('ng-zorro-antd/tabs'), require('@delon/abc/se'), require('@fs-tw/cms/proxy'), require('@abp/ng.theme.shared/extensions'), require('@abp/ng.theme.shared'), require('ng-zorro-antd/core/transition-patch'), require('@fs-tw/cms/config'), require('@fs-tw/theme-alain-ms/shared'), require('@fs-tw/theme-alain-ms/shared/extensions'), require('ng-zorro-antd/core/wave'), require('@ngx-validate/core'), require('ng-zorro-antd/menu'), require('lodash'), require('ng-zorro-antd/form')) :
    typeof define === 'function' && define.amd ? define('@fs-tw/cms/admin', ['exports', '@angular/core', '@abp/ng.core', '@angular/router', '@angular/common', '@angular/forms', 'ngx-quill', 'ng-zorro-antd/grid', 'ng-zorro-antd/input', 'ng-zorro-antd/table', 'ng-zorro-antd/dropdown', 'ng-zorro-antd/button', 'ng-zorro-antd/icon', 'ng-zorro-antd/modal', 'ng-zorro-antd/radio', 'ng-zorro-antd/upload', 'ng-zorro-antd/spin', 'ng-zorro-antd/card', 'ng-zorro-antd/select', 'ng-zorro-antd/date-picker', 'ng-zorro-antd/tabs', '@delon/abc/se', '@fs-tw/cms/proxy', '@abp/ng.theme.shared/extensions', '@abp/ng.theme.shared', 'ng-zorro-antd/core/transition-patch', '@fs-tw/cms/config', '@fs-tw/theme-alain-ms/shared', '@fs-tw/theme-alain-ms/shared/extensions', 'ng-zorro-antd/core/wave', '@ngx-validate/core', 'ng-zorro-antd/menu', 'lodash', 'ng-zorro-antd/form'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['fs-tw'] = global['fs-tw'] || {}, global['fs-tw'].cms = global['fs-tw'].cms || {}, global['fs-tw'].cms.admin = {}), global.ng.core, global.i1$1, global.ng.router, global.ng.common, global.ng.forms, global.i16$1, global.i4$1, global.i9, global.i11, global.i14$1, global.i7$1, global.i7, global.i4, global.i11$1, global.i5, global.i4$2, global.i5$1, global.i10$1, global.i12, global.i14$2, global.i9$1, global['fs-tw'].cms.proxy, global.i16, global.i1$2, global.i6, global['fs-tw'].cms.config, global.shared, global.i10, global.i8, global.i14, global.i15, global._, global.i8$1));
}(this, (function (exports, i0, i1$1, i1, i3, i7$2, i16$1, i4$1, i9, i11, i14$1, i7$1, i7, i4, i11$1, i5, i4$2, i5$1, i10$1, i12, i14$2, i9$1, proxy, i16, i1$2, i6, i1$3, shared, i10, i8, i14, i15, _, i8$1) { 'use strict';

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
        //#endregion
        //#region File
        PageService.prototype.findByProviderByKeyAndGroup = function (key, group) {
            return this.directoriesApiService.findByProviderByKeyAndGroup(key, group);
        };
        PageService.prototype.deleteFile = function (id) {
            return this.fileDescriptorService.deleteById(id);
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
        return PageService;
    }());
    PageService.ɵfac = function PageService_Factory(t) { return new (t || PageService)(i0.ɵɵinject(i0.Injector)); };
    PageService.ɵprov = i0.ɵɵdefineInjectable({ token: PageService, factory: PageService.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PageService, [{
                type: i0.Injectable
            }], function () { return [{ type: i0.Injector }]; }, null);
    })();

    var PostStateService = /** @class */ (function () {
        function PostStateService() {
            this.store = new i1$1.InternalStore({});
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
    function ImagePickerComponent_ng_template_0_ng_template_2_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "div");
        }
    }
    var _c0 = function (a0, a1) { return { "width": a0, "height": a1 }; };
    function ImagePickerComponent_ng_template_0_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 12);
            i0.ɵɵtemplate(1, ImagePickerComponent_ng_template_0_ng_template_2_div_1_Template, 1, 0, "div", 9);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵnextContext();
            var _r11 = i0.ɵɵreference(5);
            var ctx_r10 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction2(2, _c0, ctx_r10.borderWidth, ctx_r10.borderHeight));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", ctx_r10.uploadTextTemplate || _r11);
        }
    }
    function ImagePickerComponent_ng_template_0_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 13);
            i0.ɵɵelementStart(1, "div", 14);
            i0.ɵɵtext(2, "Upload");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
    }
    function ImagePickerComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "nz-upload", 8);
            i0.ɵɵtemplate(1, ImagePickerComponent_ng_template_0_div_1_Template, 1, 0, "div", 9);
            i0.ɵɵtemplate(2, ImagePickerComponent_ng_template_0_ng_template_2_Template, 2, 5, "ng-template", null, 10, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(4, ImagePickerComponent_ng_template_0_ng_template_4_Template, 3, 0, "ng-template", null, 11, i0.ɵɵtemplateRefExtractor);
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
            var _r16_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 15);
            i0.ɵɵlistener("click", function ImagePickerComponent_ng_template_2_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r16_1); var item_r14 = ctx.$implicit; var ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.controllModal(true, item_r14.file); });
            i0.ɵɵelementStart(1, "div", 16);
            i0.ɵɵelementStart(2, "i", 17);
            i0.ɵɵlistener("click", function ImagePickerComponent_ng_template_2_Template_i_click_2_listener() { i0.ɵɵrestoreView(_r16_1); var item_r14 = ctx.$implicit; var ctx_r17 = i0.ɵɵnextContext(); return ctx_r17.deleteFile(item_r14.file.fileName); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelement(3, "img", 18);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r14 = ctx.$implicit;
            var ctx_r3 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction2(3, _c0, ctx_r3.borderWidth, ctx_r3.borderHeight));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("src", item_r14.file.fileUrl, i0.ɵɵsanitizeUrl)("ngStyle", i0.ɵɵpureFunction1(6, _c1, ctx_r3.imageHeight));
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
    var _c2 = function (a0, a1) { return { file: a0, i: a1 }; };
    var _c3 = function (a0) { return { $implicit: a0 }; };
    function ImagePickerComponent_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, ImagePickerComponent_ng_container_6_div_1_Template, 1, 0, "div", 19);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var item_r19 = ctx.$implicit;
            var i_r20 = ctx.index;
            var ctx_r5 = i0.ɵɵnextContext();
            var _r2 = i0.ɵɵreference(3);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", ctx_r5.imageTemplate || _r2)("ngTemplateOutletContext", i0.ɵɵpureFunction1(5, _c3, i0.ɵɵpureFunction2(2, _c2, item_r19, i_r20)));
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
            i0.ɵɵtemplate(1, ImagePickerComponent_ng_container_7_div_1_Template, 1, 0, "div", 19);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var item_r22 = ctx.$implicit;
            var i_r23 = ctx.index;
            var ctx_r6 = i0.ɵɵnextContext();
            var _r2 = i0.ɵɵreference(3);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", ctx_r6.imageTemplate || _r2)("ngTemplateOutletContext", i0.ɵɵpureFunction1(5, _c3, i0.ɵɵpureFunction2(2, _c2, item_r22, i_r23)));
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
    var _c4 = function (a0) { return { "divGrid": a0 }; };
    var _c5 = function (a0) { return { "grid-template-columns": a0 }; };
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
    ImagePickerComponent.ɵfac = function ImagePickerComponent_Factory(t) { return new (t || ImagePickerComponent)(i0.ɵɵdirectiveInject(i1$2.ToasterService), i0.ɵɵdirectiveInject(i1$1.EnvironmentService), i0.ɵɵdirectiveInject(i1$1.ConfigStateService)); };
    ImagePickerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ImagePickerComponent, selectors: [["image-picker"]], inputs: { imageWidth: "imageWidth", imageHeight: "imageHeight", borderWidth: "borderWidth", borderHeight: "borderHeight", maxImageCount: "maxImageCount", isMultiple: "isMultiple", imageTemplate: "imageTemplate", uploadTemplate: "uploadTemplate", uploadTextTemplate: "uploadTextTemplate", inLine: "inLine", showFrontButton: "showFrontButton", existFiles: "existFiles" }, features: [i0.ɵɵNgOnChangesFeature], decls: 12, vars: 15, consts: [["Upload", ""], ["Image", ""], [3, "ngClass", "ngStyle"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["nzCancelText", "\u95DC\u9589", 3, "nzOkText", "nzWidth", "nzTitle", "nzVisible", "nzVisibleChange", "nzOnCancel"], [1, "divGridCenter"], [2, "max-width", "100%", "max-height", "500px", 3, "src"], [1, "avatar-uploader", 2, "display", "grid", 3, "nzListType", "nzBeforeUpload", "nzMultiple"], [4, "ngTemplateOutlet"], ["UploadImage", ""], ["UploadText", ""], [1, "divBorder", "divGridCenter", 3, "ngStyle"], [2, "font-size", "16px", "text-align", "center"], [1, "ant-upload-text"], [1, "divBorder", "imgGrid", "divGridCenter", 3, "ngStyle", "click"], [1, "imgGridClose"], ["nz-icon", "", "nzType", "close", "nzTheme", "outline", 3, "click"], [2, "max-width", "100%", 3, "src", "ngStyle"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function ImagePickerComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, ImagePickerComponent_ng_template_0_Template, 6, 4, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵtemplate(2, ImagePickerComponent_ng_template_2_Template, 4, 8, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵelementStart(4, "div", 2);
                i0.ɵɵtemplate(5, ImagePickerComponent_ng_container_5_Template, 2, 1, "ng-container", 3);
                i0.ɵɵtemplate(6, ImagePickerComponent_ng_container_6_Template, 2, 7, "ng-container", 4);
                i0.ɵɵtemplate(7, ImagePickerComponent_ng_container_7_Template, 2, 7, "ng-container", 4);
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
                i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(11, _c4, ctx.inLine))("ngStyle", i0.ɵɵpureFunction1(13, _c5, ctx.inLine ? "repeat(auto-fit, " + ctx.borderWidth + ")" : "unset"));
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
            }], function () { return [{ type: i1$2.ToasterService }, { type: i1$1.EnvironmentService }, { type: i1$1.ConfigStateService }]; }, { imageWidth: [{
                    type: i0.Input
                }], imageHeight: [{
                    type: i0.Input
                }], borderWidth: [{
                    type: i0.Input
                }], borderHeight: [{
                    type: i0.Input
                }], maxImageCount: [{
                    type: i0.Input
                }], isMultiple: [{
                    type: i0.Input
                }], imageTemplate: [{
                    type: i0.Input
                }], uploadTemplate: [{
                    type: i0.Input
                }], uploadTextTemplate: [{
                    type: i0.Input
                }], inLine: [{
                    type: i0.Input
                }], showFrontButton: [{
                    type: i0.Input
                }], existFiles: [{
                    type: i0.Input
                }] });
    })();

    var GetFileByIdPipe = /** @class */ (function () {
        function GetFileByIdPipe(environmentService) {
            this.environmentService = environmentService;
        }
        GetFileByIdPipe.prototype.transform = function (value) {
            return this.environmentService.getApiUrl() + "/api/file-management/file-descriptor/file-content?id=" + value;
        };
        return GetFileByIdPipe;
    }());
    GetFileByIdPipe.ɵfac = function GetFileByIdPipe_Factory(t) { return new (t || GetFileByIdPipe)(i0.ɵɵdirectiveInject(i1$1.EnvironmentService)); };
    GetFileByIdPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "getFileById", type: GetFileByIdPipe, pure: true });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GetFileByIdPipe, [{
                type: i0.Pipe,
                args: [{
                        name: 'getFileById'
                    }]
            }], function () { return [{ type: i1$1.EnvironmentService }]; }, null);
    })();

    var COMPONENT = [GetFileByIdPipe];
    var SharedModule = /** @class */ (function () {
        function SharedModule() {
        }
        return SharedModule;
    }());
    SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
    SharedModule.ɵmod = i0.ɵɵdefineNgModule({ type: SharedModule });
    SharedModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[
                // NgAlainBasicModule,
                shared.ThemeAlainMsSharedModule,
                i10.UiExtensionsModule
            ], shared.ThemeAlainMsSharedModule,
            i10.UiExtensionsModule] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SharedModule, { declarations: [GetFileByIdPipe], imports: [
                // NgAlainBasicModule,
                shared.ThemeAlainMsSharedModule,
                i10.UiExtensionsModule
            ], exports: [GetFileByIdPipe, shared.ThemeAlainMsSharedModule,
                i10.UiExtensionsModule] });
    })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SharedModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: __spread(COMPONENT),
                        imports: [
                            // NgAlainBasicModule,
                            shared.ThemeAlainMsSharedModule,
                            i10.UiExtensionsModule
                        ],
                        exports: __spread(COMPONENT, [
                            shared.ThemeAlainMsSharedModule,
                            i10.UiExtensionsModule
                        ])
                    }]
            }], null, null);
    })();

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
        return FileService;
    }());
    FileService.ɵfac = function FileService_Factory(t) { return new (t || FileService)(i0.ɵɵinject(i1$1.RestService), i0.ɵɵinject(i1$1.EnvironmentService)); };
    FileService.ɵprov = i0.ɵɵdefineInjectable({ token: FileService, factory: FileService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FileService, [{
                type: i0.Injectable,
                args: [{ providedIn: 'root' }]
            }], function () { return [{ type: i1$1.RestService }, { type: i1$1.EnvironmentService }]; }, null);
    })();

    var _c0$1 = ["DefaultImagePicker"];
    function ListComponent_form_9_abp_extensible_form_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "abp-extensible-form", 13);
        }
        if (rf & 2) {
            var ctx_r3 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("selectedRecord", ctx_r3.selected);
        }
    }
    function ListComponent_form_9_Template(rf, ctx) {
        if (rf & 1) {
            var _r6_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "form", 7);
            i0.ɵɵlistener("ngSubmit", function ListComponent_form_9_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r6_1); var ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.save(); });
            i0.ɵɵtemplate(1, ListComponent_form_9_abp_extensible_form_1_Template, 1, 1, "abp-extensible-form", 8);
            i0.ɵɵelementStart(2, "div", 9);
            i0.ɵɵelementStart(3, "label", 10);
            i0.ɵɵtext(4, "\u5716\u793A(\u5EFA\u8B70\u5716\u7247\u5927\u5C0F\u70BA 40*30\uFF0C\u50C5\u80FD\u4E0A\u50B3 jpg, png)");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(5, "image-picker", 11, 12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵproperty("formGroup", ctx_r0.form);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r0.form);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("existFiles", ctx_r0.defaultImages)("maxImageCount", 1);
        }
    }
    function ListComponent_ng_template_10_Template(rf, ctx) {
        if (rf & 1) {
            var _r8_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 14);
            i0.ɵɵlistener("click", function ListComponent_ng_template_10_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r8_1); var ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.handleCancel(); });
            i0.ɵɵtext(1, "\u53D6\u6D88");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "button", 15);
            i0.ɵɵlistener("click", function ListComponent_ng_template_10_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r8_1); var ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.save(); });
            i0.ɵɵtext(3, "\u5132\u5B58");
            i0.ɵɵelementEnd();
        }
    }
    var ListComponent = /** @class */ (function () {
        function ListComponent(extensionsService, pageService, injector, list, fileService, toasterService, postStateService) {
            var _this = this;
            this.extensionsService = extensionsService;
            this.pageService = pageService;
            this.injector = injector;
            this.list = list;
            this.fileService = fileService;
            this.toasterService = toasterService;
            this.postStateService = postStateService;
            this.datas = [];
            this.count = 0;
            this.defaultImages = [];
            this.isVisible = false;
            this.selected = {};
            this.pageService.findByProviderByKeyAndGroup("FS.Cms.Blogs").subscribe(function (x) {
                _this.directory = x;
            });
        }
        ListComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.extensionsService.Actions$["Cms::FS.Cms.Blogs" /* Blog */].subscribe(function (x) {
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
                query = input;
                return _this.pageService.getBlogs(input);
            };
            this.list.hookToQuery(customerStreamCreator).subscribe(function (res) {
                _this.datas = res.items;
                _this.count = res.totalCount;
            });
        };
        ListComponent.prototype.showDetail = function (blog) {
            if (blog == null)
                return;
            this.postStateService.setBlog(blog);
        };
        ListComponent.prototype.deleteBlog = function (blog) {
            console.log(blog);
            alert("開發中…");
        };
        ListComponent.prototype.handleCancel = function () {
            this.isVisible = false;
        };
        ListComponent.prototype.save = function () {
            var _this = this;
            if (!this.form.valid)
                return;
            //TODO delete file and code refactoring
            var uploadImageInfos = this.defaultImagePicker.getUploadFiles();
            var deleteImageNames = this.defaultImagePicker.getDeleteFileNames();
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
                    _this.defaultImages.push(new ImageFile(x.iconUrl, _this.fileService.getFileUrl(x.iconUrl)));
                _this.openModal();
            });
        };
        ListComponent.prototype.buildForm = function () {
            var data = new i16.FormPropData(this.injector, this.selected);
            this.form = null;
            this.form = i16.generateFormFromProps(data);
        };
        ListComponent.prototype.openModal = function () {
            this.buildForm();
            this.isVisible = true;
        };
        return ListComponent;
    }());
    ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(i0.ɵɵdirectiveInject(i1$3.ExtensionsService), i0.ɵɵdirectiveInject(PageService), i0.ɵɵdirectiveInject(i0.Injector), i0.ɵɵdirectiveInject(i1$1.ListService), i0.ɵɵdirectiveInject(FileService), i0.ɵɵdirectiveInject(i1$2.ToasterService), i0.ɵɵdirectiveInject(PostStateService)); };
    ListComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ListComponent, selectors: [["fs-list"]], viewQuery: function ListComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c0$1, 1);
            }
            if (rf & 2) {
                var _t = void 0;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.defaultImagePicker = _t.first);
            }
        }, features: [i0.ɵɵProvidersFeature([
                i1$1.ListService,
                {
                    provide: i16.EXTENSIONS_IDENTIFIER,
                    useValue: "Cms::FS.Cms.Blogs" /* Blog */,
                },
            ])], decls: 12, vars: 9, consts: [[1, "mb-md"], ["nz-button", "", 2, "margin-right", "10px", 3, "nzType", "click"], ["nz-button", "", 3, "nzType", "click"], [3, "data", "recordsTotal", "list", "haveSelect", "select"], ["nzTitle", "blog", 3, "nzVisible", "nzFooter", "nzVisibleChange", "nzOnCancel"], ["validateOnSubmit", "", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["footer", ""], ["validateOnSubmit", "", 3, "formGroup", "ngSubmit"], [3, "selectedRecord", 4, "ngIf"], [1, "form-group"], ["for", "exampleInputEmail1"], ["imageWidth", "40px", "imageHeight", "30px", "borderWidth", "80px", "borderHeight", "60px", 3, "existFiles", "maxImageCount"], ["DefaultImagePicker", ""], [3, "selectedRecord"], ["nz-button", "", "nzType", "default", 3, "click"], ["nz-button", "", "nzType", "primary", 3, "click"]], template: function ListComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div");
                i0.ɵɵelementStart(1, "div", 0);
                i0.ɵɵelementStart(2, "button", 1);
                i0.ɵɵlistener("click", function ListComponent_Template_button_click_2_listener() { return ctx.add(); });
                i0.ɵɵelementStart(3, "span");
                i0.ɵɵtext(4, "+\u5EFA\u7ACB");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "button", 2);
                i0.ɵɵlistener("click", function ListComponent_Template_button_click_5_listener() { return ctx.showDetail(null); });
                i0.ɵɵtext(6, " \u5168\u90E8 ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(7, "nz-extensible-table", 3);
                i0.ɵɵlistener("select", function ListComponent_Template_nz_extensible_table_select_7_listener($event) { return ctx.showDetail($event); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(8, "nz-modal", 4);
                i0.ɵɵlistener("nzVisibleChange", function ListComponent_Template_nz_modal_nzVisibleChange_8_listener($event) { return ctx.isVisible = $event; })("nzOnCancel", function ListComponent_Template_nz_modal_nzOnCancel_8_listener() { return ctx.handleCancel(); });
                i0.ɵɵtemplate(9, ListComponent_form_9_Template, 7, 4, "form", 5);
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(10, ListComponent_ng_template_10_Template, 4, 0, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
            }
            if (rf & 2) {
                var _r1 = i0.ɵɵreference(11);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("nzType", "primary");
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("nzType", "primary");
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("data", ctx.datas)("recordsTotal", ctx.count)("list", ctx.list)("haveSelect", true);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("nzVisible", ctx.isVisible)("nzFooter", _r1);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.form);
            }
        }, directives: [i7$1.NzButtonComponent, i8.NzWaveDirective, i6.ɵNzTransitionPatchDirective, i10.ExtensibleTableComponent, i4.NzModalComponent, i3.NgIf, i7$2.ɵangular_packages_forms_forms_y, i7$2.NgControlStatusGroup, i1$1.FormSubmitDirective, i7$2.FormGroupDirective, i14.ValidationGroupDirective, ImagePickerComponent, i16.ExtensibleFormComponent], styles: [".listSelected[_ngcontent-%COMP%]{background-color:#e6f2ff!important}nz-list-item[_ngcontent-%COMP%]{font-size:15px}.bg-white[_ngcontent-%COMP%]{background-color:#fff}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'fs-list',
                        templateUrl: './list.component.html',
                        styleUrls: ['./list.component.css'],
                        providers: [
                            i1$1.ListService,
                            {
                                provide: i16.EXTENSIONS_IDENTIFIER,
                                useValue: "Cms::FS.Cms.Blogs" /* Blog */,
                            },
                        ],
                    }]
            }], function () { return [{ type: i1$3.ExtensionsService }, { type: PageService }, { type: i0.Injector }, { type: i1$1.ListService }, { type: FileService }, { type: i1$2.ToasterService }, { type: PostStateService }]; }, { defaultImagePicker: [{
                    type: i0.ViewChild,
                    args: ["DefaultImagePicker"]
                }] });
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
    // 
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
        function MainComponent(router, pageService, postStateService) {
            this.router = router;
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
        MainComponent.prototype.gotoDetail = function (id) {
            if (id)
                this.router.navigate(["/cms/post/detail/" + id]);
            else
                this.router.navigate(["/cms/post/detail"]);
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
    MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(PageService), i0.ɵɵdirectiveInject(PostStateService)); };
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
        }, directives: [i4$1.NzRowDirective, i4$1.NzColDirective, ListComponent, i7$1.NzButtonComponent, i8.NzWaveDirective, i6.ɵNzTransitionPatchDirective, i9.NzInputGroupComponent, i9.NzInputDirective, i7$2.DefaultValueAccessor, i7$2.NgControlStatus, i7$2.NgModel, i11.NzTableComponent, i11.NzTheadComponent, i11.NzTrDirective, i11.NzTableCellDirective, i11.NzThMeasureDirective, i11.NzTbodyComponent, i3.NgForOf, i7.NzIconDirective, i11.NzTdAddOnComponent, i14$1.NzDropDownADirective, i14$1.NzDropDownDirective, i14$1.NzDropdownMenuComponent, i15.NzMenuDirective, i15.NzMenuItemDirective, i3.NgIf, i11.NzTrExpandDirective, i11.NzTableFixedRowComponent, i16$1.QuillViewComponent], pipes: [i1$1.LocalizationPipe, i3.DatePipe], styles: ["nz-select[_ngcontent-%COMP%]{margin-right:8px;width:220px}.bg-white[_ngcontent-%COMP%]{background-color:#fff}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MainComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'fs-main',
                        templateUrl: './main.component.html',
                        styleUrls: ['./main.component.less']
                    }]
            }], function () { return [{ type: i1.Router }, { type: PageService }, { type: PostStateService }]; }, null);
    })();

    function UploadFileComponent_tr_15_Template(rf, ctx) {
        if (rf & 1) {
            var _r4_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "tr");
            i0.ɵɵelementStart(1, "td");
            i0.ɵɵelementStart(2, "a");
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "td");
            i0.ɵɵelementStart(5, "a", 8);
            i0.ɵɵlistener("click", function UploadFileComponent_tr_15_Template_a_click_5_listener() { i0.ɵɵrestoreView(_r4_1); var data_r2 = ctx.$implicit; var ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.delete(data_r2); });
            i0.ɵɵtext(6, "\u522A\u9664");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var data_r2 = ctx.$implicit;
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(data_r2);
        }
    }
    // import { Confirmation, ConfirmationService,ToasterService } from '@abp/ng.theme.shared';
    // import { Store } from '@ngxs/store';
    // import { NzModalRef } from 'ng-zorro-antd/modal';
    // import { FileService } from '@fs-tw/theme-core';
    var UploadFileComponent = /** @class */ (function () {
        function UploadFileComponent(confirmationService) {
            var _this = this;
            this.confirmationService = confirmationService;
            this.existFileUrls = [];
            this.fileList = [];
            this.beforeUpload = function (file) {
                var exist = _this.existFileUrls.findIndex(function (x) { return x == file.name; }) > -1 ||
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
                if (status === i1$2.Confirmation.Status.confirm) {
                    _this.existFileUrls = _this.existFileUrls.filter(function (x) { return x != url; });
                }
            });
        };
        return UploadFileComponent;
    }());
    UploadFileComponent.ɵfac = function UploadFileComponent_Factory(t) { return new (t || UploadFileComponent)(i0.ɵɵdirectiveInject(i1$2.ConfirmationService)); };
    UploadFileComponent.ɵcmp = i0.ɵɵdefineComponent({ type: UploadFileComponent, selectors: [["fs-upload-file"]], inputs: { existFileUrls: "existFileUrls" }, decls: 16, vars: 6, consts: [["nzType", "drag", 3, "nzFileList", "nzBeforeUpload", "nzMultiple", "nzFileListChange"], [1, "ant-upload-drag-icon"], ["nz-icon", "", "nzType", "inbox"], [1, "ant-upload-text"], [1, "my-md"], ["nzSimple", "false", "nzSize", "small", 3, "nzData", "nzShowPagination"], ["basicTable", ""], [4, "ngFor", "ngForOf"], [1, "text-red", 3, "click"]], template: function UploadFileComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "nz-upload", 0);
                i0.ɵɵlistener("nzFileListChange", function UploadFileComponent_Template_nz_upload_nzFileListChange_0_listener($event) { return ctx.fileList = $event; });
                i0.ɵɵelementStart(1, "p", 1);
                i0.ɵɵelement(2, "i", 2);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "p", 3);
                i0.ɵɵtext(4, "\u9EDE\u64CA\u6B64\u8655\u6216\u5C07\u6A94\u6848\u62D6\u62FD\u81F3\u6B64\u8655\u9032\u884C\u4E0A\u50B3");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelement(5, "div", 4);
                i0.ɵɵelementStart(6, "nz-table", 5, 6);
                i0.ɵɵelementStart(8, "thead");
                i0.ɵɵelementStart(9, "tr");
                i0.ɵɵelementStart(10, "th");
                i0.ɵɵtext(11, "\u6A94\u540D");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(12, "th");
                i0.ɵɵtext(13, "-");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(14, "tbody");
                i0.ɵɵtemplate(15, UploadFileComponent_tr_15_Template, 7, 1, "tr", 7);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("nzFileList", ctx.fileList)("nzBeforeUpload", ctx.beforeUpload)("nzMultiple", true);
                i0.ɵɵadvance(6);
                i0.ɵɵproperty("nzData", ctx.existFileUrls)("nzShowPagination", false);
                i0.ɵɵadvance(9);
                i0.ɵɵproperty("ngForOf", ctx.existFileUrls);
            }
        }, directives: [i5.NzUploadComponent, i6.ɵNzTransitionPatchDirective, i7.NzIconDirective, i11.NzTableComponent, i11.NzTheadComponent, i11.NzTrDirective, i11.NzTableCellDirective, i11.NzThMeasureDirective, i11.NzTbodyComponent, i3.NgForOf], styles: [""] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UploadFileComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'fs-upload-file',
                        templateUrl: './upload-file.component.html',
                        styleUrls: ['./upload-file.component.css']
                    }]
            }], function () { return [{ type: i1$2.ConfirmationService }]; }, { existFileUrls: [{
                    type: i0.Input
                }] });
    })();

    var _c0$2 = ["DefaultImagePicker"];
    function DetailComponent_form_2_nz_option_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "nz-option", 32);
        }
        if (rf & 2) {
            var item_r10 = ctx.$implicit;
            i0.ɵɵproperty("nzValue", item_r10.id)("nzLabel", item_r10.displayName);
        }
    }
    var _c1$1 = function () { return { standalone: true }; };
    function DetailComponent_form_2_se_22_Template(rf, ctx) {
        if (rf & 1) {
            var _r12_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "se", 33);
            i0.ɵɵelementStart(1, "quill-editor", 34);
            i0.ɵɵlistener("ngModelChange", function DetailComponent_form_2_se_22_Template_quill_editor_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r12_1); var ctx_r11 = i0.ɵɵnextContext(2); return ctx_r11.data.content = $event; });
            i0.ɵɵelementStart(2, "div", 35);
            i0.ɵɵelementStart(3, "span", 36);
            i0.ɵɵelement(4, "button", 37);
            i0.ɵɵelement(5, "button", 38);
            i0.ɵɵelement(6, "button", 39);
            i0.ɵɵelement(7, "button", 40);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "span", 36);
            i0.ɵɵelement(9, "button", 41);
            i0.ɵɵelement(10, "button", 42);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "span");
            i0.ɵɵelement(12, "button", 43);
            i0.ɵɵelement(13, "button", 44);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "span", 36);
            i0.ɵɵelement(15, "button", 45);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r7 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngModel", ctx_r7.data.content)("ngModelOptions", i0.ɵɵpureFunction0(2, _c1$1));
        }
    }
    function DetailComponent_form_2_se_23_Template(rf, ctx) {
        if (rf & 1) {
            var _r14_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "se", 46);
            i0.ɵɵelementStart(1, "input", 47);
            i0.ɵɵlistener("ngModelChange", function DetailComponent_form_2_se_23_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r14_1); var ctx_r13 = i0.ɵɵnextContext(2); return ctx_r13.data.url = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r8 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngModel", ctx_r8.data.url);
        }
    }
    function DetailComponent_form_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r16_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "form", 4, 5);
            i0.ɵɵelementStart(2, "se", 6);
            i0.ɵɵelementStart(3, "nz-select", 7);
            i0.ɵɵlistener("ngModelChange", function DetailComponent_form_2_Template_nz_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r16_1); var ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.data.blogId = $event; });
            i0.ɵɵtemplate(4, DetailComponent_form_2_nz_option_4_Template, 1, 2, "nz-option", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "se", 9);
            i0.ɵɵelementStart(6, "nz-radio-group", 10);
            i0.ɵɵlistener("ngModelChange", function DetailComponent_form_2_Template_nz_radio_group_ngModelChange_6_listener($event) { i0.ɵɵrestoreView(_r16_1); var ctx_r17 = i0.ɵɵnextContext(); return ctx_r17.data.disable = $event; });
            i0.ɵɵelementStart(7, "label", 11);
            i0.ɵɵtext(8, "\u958B");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "label", 11);
            i0.ɵɵtext(10, "\u95DC");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "se", 12);
            i0.ɵɵelementStart(12, "nz-date-picker", 13);
            i0.ɵɵlistener("ngModelChange", function DetailComponent_form_2_Template_nz_date_picker_ngModelChange_12_listener($event) { i0.ɵɵrestoreView(_r16_1); var ctx_r18 = i0.ɵɵnextContext(); return (ctx_r18.dateRange[0] = $event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "nz-date-picker", 14);
            i0.ɵɵlistener("ngModelChange", function DetailComponent_form_2_Template_nz_date_picker_ngModelChange_13_listener($event) { i0.ɵɵrestoreView(_r16_1); var ctx_r19 = i0.ɵɵnextContext(); return (ctx_r19.dateRange[1] = $event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "se", 15);
            i0.ɵɵelementStart(15, "input", 16);
            i0.ɵɵlistener("ngModelChange", function DetailComponent_form_2_Template_input_ngModelChange_15_listener($event) { i0.ɵɵrestoreView(_r16_1); var ctx_r20 = i0.ɵɵnextContext(); return ctx_r20.data.title = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "se", 17);
            i0.ɵɵelementStart(17, "input", 18);
            i0.ɵɵlistener("ngModelChange", function DetailComponent_form_2_Template_input_ngModelChange_17_listener($event) { i0.ɵɵrestoreView(_r16_1); var ctx_r21 = i0.ɵɵnextContext(); return ctx_r21.data.subtitle = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "se", 19);
            i0.ɵɵelementStart(19, "nz-select", 20);
            i0.ɵɵlistener("ngModelChange", function DetailComponent_form_2_Template_nz_select_ngModelChange_19_listener($event) { i0.ɵɵrestoreView(_r16_1); var ctx_r22 = i0.ɵɵnextContext(); return ctx_r22.data.displayMode = $event; });
            i0.ɵɵelement(20, "nz-option", 21);
            i0.ɵɵelement(21, "nz-option", 22);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(22, DetailComponent_form_2_se_22_Template, 16, 3, "se", 23);
            i0.ɵɵtemplate(23, DetailComponent_form_2_se_23_Template, 2, 1, "se", 24);
            i0.ɵɵelementStart(24, "se", 25);
            i0.ɵɵelementStart(25, "nz-tabset");
            i0.ɵɵelementStart(26, "nz-tab", 26);
            i0.ɵɵelementStart(27, "se");
            i0.ɵɵelement(28, "image-picker", 27, 28);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(30, "nz-tab", 29);
            i0.ɵɵelementStart(31, "se");
            i0.ɵɵelement(32, "fs-upload-file", 30);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "se");
            i0.ɵɵelementStart(34, "button", 31);
            i0.ɵɵlistener("click", function DetailComponent_form_2_Template_button_click_34_listener() { i0.ɵɵrestoreView(_r16_1); var ctx_r23 = i0.ɵɵnextContext(); return ctx_r23.save(); });
            i0.ɵɵtext(35);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var _r5 = i0.ɵɵreference(1);
            var ctx_r0 = i0.ɵɵnextContext();
            var _r1 = i0.ɵɵreference(4);
            var _r3 = i0.ɵɵreference(6);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngModel", ctx_r0.data.blogId);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx_r0.blogs);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", ctx_r0.data.disable);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzValue", false);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("nzValue", true);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("nzAllowClear", false)("ngModel", ctx_r0.dateRange[0]);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzAllowClear", true)("ngModel", ctx_r0.dateRange[1]);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", ctx_r0.data.title);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", ctx_r0.data.subtitle);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", ctx_r0.data.displayMode);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzValue", 0);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzValue", 1);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r0.data.displayMode == 0);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r0.data.displayMode == 1);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("existFiles", ctx_r0.defaultImages)("uploadTextTemplate", _r1)("imageTemplate", _r3)("inLine", false);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("existFileUrls", ctx_r0.data.attachmentFileUrls);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", _r5.invalid);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", !ctx_r0.data.id ? "\u5EFA\u7ACB" : "\u66F4\u65B0", " ");
        }
    }
    function DetailComponent_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 48);
            i0.ɵɵelementStart(1, "div", 49);
            i0.ɵɵelement(2, "i", 50);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "div", 51);
            i0.ɵɵtext(4, " \u8ACB\u5C07\u6A94\u6848\u62D6\u79FB\u81F3\u6B64\uFF0C\u6216\u6309\u4E0B\u6B64\u5716\u793A\u4E0A\u50B3\u6A94\u6848 ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
    }
    function DetailComponent_ng_template_5_a_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r28_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "a", 61);
            i0.ɵɵlistener("click", function DetailComponent_ng_template_5_a_2_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r28_1); var item_r24 = i0.ɵɵnextContext().$implicit; var ctx_r27 = i0.ɵɵnextContext(); return ctx_r27.coverImage = item_r24.file.fileName; });
            i0.ɵɵtext(1, "\u8A2D\u70BA\u5C01\u9762\u5716");
            i0.ɵɵelementEnd();
        }
    }
    function DetailComponent_ng_template_5_i_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "i", 62);
        }
    }
    function DetailComponent_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
            var _r31_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 52);
            i0.ɵɵelementStart(1, "div", 53);
            i0.ɵɵtemplate(2, DetailComponent_ng_template_5_a_2_Template, 2, 0, "a", 54);
            i0.ɵɵtemplate(3, DetailComponent_ng_template_5_i_3_Template, 1, 0, "i", 55);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div", 56);
            i0.ɵɵlistener("click", function DetailComponent_ng_template_5_Template_div_click_4_listener() { i0.ɵɵrestoreView(_r31_1); var item_r24 = ctx.$implicit; var ctx_r30 = i0.ɵɵnextContext(); return ctx_r30.defaultImagePicker.controllModal(true, item_r24.file); });
            i0.ɵɵelementStart(5, "div", 57);
            i0.ɵɵelement(6, "img", 58);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "div", 59);
            i0.ɵɵelementStart(8, "div", 57);
            i0.ɵɵtext(9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "div", 53);
            i0.ɵɵelementStart(11, "div", 57);
            i0.ɵɵelementStart(12, "a", 60);
            i0.ɵɵlistener("click", function DetailComponent_ng_template_5_Template_a_click_12_listener() { i0.ɵɵrestoreView(_r31_1); var item_r24 = ctx.$implicit; var ctx_r32 = i0.ɵɵnextContext(); return ctx_r32.deleteFile(item_r24.file.fileName); });
            i0.ɵɵtext(13, "\u522A\u9664");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r24 = ctx.$implicit;
            var ctx_r4 = i0.ɵɵnextContext();
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx_r4.coverImage != item_r24.file.fileName);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r4.coverImage == item_r24.file.fileName);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("src", item_r24.file.fileUrl, i0.ɵɵsanitizeUrl);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(item_r24.file.fileName);
        }
    }
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
        function DetailComponent(router, activatedRoute, pageService, confirmationService) {
            this.router = router;
            this.activatedRoute = activatedRoute;
            this.pageService = pageService;
            this.confirmationService = confirmationService;
            this.dateRange = [new Date(), new Date()];
            this.defaultImages = [];
            this.blogs = [];
            this.isLoading = false;
            this.coverImage = '';
        }
        DetailComponent.prototype.ngOnInit = function () {
            this.postId = this.activatedRoute.snapshot.paramMap.get('postId');
            console.log(this.postId);
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
                attachmentFileUrls: [],
                postImages: []
            };
            this.dateRange = [new Date(), new Date()];
            this.defaultImages = [new ImageFile('test', 'https://dummyimage.com/200x130/000/fff')];
            this.coverImage = 'test';
            if (this.postId) {
                this.pageService.getPostById(this.postId).subscribe(function (x) {
                    _this.data = x;
                    var st = x.startTime ? new Date(x.startTime) : new Date();
                    var ed = x.endTime ? new Date(x.endTime) : new Date();
                    _this.dateRange = [st, ed];
                    _this.defaultImages = x.postImages.map(function (y) { return new ImageFile(y.url, y.url); });
                    var coverImageIndex = x.postImages.findIndex(function (y) { return y.isCover; });
                    if (coverImageIndex > -1)
                        _this.coverImage = x.postImages[coverImageIndex].url;
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
            });
        };
        DetailComponent.prototype.deleteFile = function (fileName) {
            var _this = this;
            this.confirmationService.warn("\u78BA\u5B9A\u522A\u9664 " + fileName + " \u55CE\uFF1F", "系統訊息")
                .subscribe(function (result) {
                if (result != i1$2.Confirmation.Status.confirm)
                    return;
                _this.defaultImagePicker.deleteFile(fileName);
            });
        };
        DetailComponent.prototype.save = function () {
            var _this = this;
            var item = _.cloneDeep(this.data);
            item.startTime = this.dateRange[0].toLocalISOString();
            item.endTime = this.dateRange[1].toLocalISOString();
            // TODO: 上傳檔案、上傳附件、加標籤
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
    DetailComponent.ɵfac = function DetailComponent_Factory(t) { return new (t || DetailComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(PageService), i0.ɵɵdirectiveInject(i1$2.ConfirmationService)); };
    DetailComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DetailComponent, selectors: [["fs-detail"]], viewQuery: function DetailComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c0$2, 1);
            }
            if (rf & 2) {
                var _t = void 0;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.defaultImagePicker = _t.first);
            }
        }, decls: 7, vars: 2, consts: [["nzTip", "\u8F09\u5165\u4E2D...", 3, "nzSpinning"], ["nz-form", "", "se-container", "1", "labelWidth", "150", 4, "ngIf"], ["Upload", ""], ["Image", ""], ["nz-form", "", "se-container", "1", "labelWidth", "150"], ["f", "ngForm"], ["label", "\u516C\u544A\u985E\u578B"], ["name", "blogId", "required", "", 3, "ngModel", "ngModelChange"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["label", "\u524D\u53F0\u986F\u793A", "required", ""], ["name", "disable", 3, "ngModel", "ngModelChange"], ["nz-radio", "", 3, "nzValue"], ["label", "\u767C\u4F48\u6642\u9593", "required", ""], ["nzShowTime", "", "name", "startDate", 3, "nzAllowClear", "ngModel", "ngModelChange"], ["nzShowTime", "", "name", "endDate", 3, "nzAllowClear", "ngModel", "ngModelChange"], ["label", "\u6A19\u984C", "error", "\u5FC5\u586B", "required", ""], ["type", "text", "nz-input", "", "name", "title", "required", "", 3, "ngModel", "ngModelChange"], ["label", "\u526F\u6A19\u984C"], ["type", "text", "nz-input", "", "name", "Subtitle", 3, "ngModel", "ngModelChange"], ["label", "\u986F\u793A\u985E\u578B", "required", ""], ["name", "type", 3, "ngModel", "ngModelChange"], ["nzLabel", "\u5167\u6587", 3, "nzValue"], ["nzLabel", "\u9023\u7D50", 3, "nzValue"], ["label", "\u5167\u6587", 4, "ngIf"], ["label", "\u9023\u7D50", 4, "ngIf"], ["label", "\u4E0A\u50B3\u6A94\u6848", "optionalHelp", "\u5EFA\u8B70\u5716\u7247\u6BD4\u4F8B\uFF1A1080X608"], ["nzTitle", "\u5716\u7247"], ["borderWidth", "100%", "borderHeight", "132px", 3, "existFiles", "uploadTextTemplate", "imageTemplate", "inLine"], ["DefaultImagePicker", ""], ["nzTitle", "\u9644\u4EF6"], [3, "existFileUrls"], ["nz-button", "", "nzType", "primary", 3, "disabled", "click"], [3, "nzValue", "nzLabel"], ["label", "\u5167\u6587"], [3, "ngModel", "ngModelOptions", "ngModelChange"], ["quill-editor-toolbar", ""], [1, "ql-formats"], [1, "ql-bold"], [1, "ql-italic"], [1, "ql-underline"], [1, "ql-strike"], ["value", "ordered", 1, "ql-list"], ["value", "bullet", 1, "ql-list"], ["type", "button", "value", "1", 1, "ql-header"], ["type", "button", "value", "2", 1, "ql-header"], [1, "ql-image"], ["label", "\u9023\u7D50"], ["type", "text", "nz-input", "", "name", "url", 3, "ngModel", "ngModelChange"], [2, "text-align", "center"], [2, "color", "#26d7eb", "font-size", "48px"], ["nz-icon", "", "nzType", "inbox", 2, "display", "block"], [2, "font-size", "16px"], ["nz-row", "", 2, "border", "1px solid #ddd", "border-right", "0px", "margin-top", "5px"], ["nz-col", "", "nzSpan", "4", 1, "imgItemDiv"], ["class", "text-blue", 3, "click", 4, "ngIf"], ["nz-icon", "", "nzType", "check", "nzTheme", "outline", "style", "font-size: 16px;", "class", "text-green", 4, "ngIf"], ["nz-col", "", "nzSpan", "8", 1, "imgItemDiv", 2, "cursor", "pointer", 3, "click"], [2, "width", "100%"], [2, "max-height", "40px", 3, "src"], ["nz-col", "", "nzSpan", "8", 1, "imgItemDiv"], [1, "text-red", 3, "click"], [1, "text-blue", 3, "click"], ["nz-icon", "", "nzType", "check", "nzTheme", "outline", 1, "text-green", 2, "font-size", "16px"]], template: function DetailComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "nz-spin", 0);
                i0.ɵɵelementStart(1, "nz-card");
                i0.ɵɵtemplate(2, DetailComponent_form_2_Template, 36, 23, "form", 1);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(3, DetailComponent_ng_template_3_Template, 5, 0, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵtemplate(5, DetailComponent_ng_template_5_Template, 14, 4, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
            }
            if (rf & 2) {
                i0.ɵɵproperty("nzSpinning", ctx.isLoading);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngIf", ctx.data);
            }
        }, directives: [i4$2.NzSpinComponent, i5$1.NzCardComponent, i3.NgIf, i7$2.ɵangular_packages_forms_forms_y, i7$2.NgControlStatusGroup, i7$2.NgForm, i8$1.NzFormDirective, i9$1.SEContainerComponent, i9$1.SEComponent, i10$1.NzSelectComponent, i7$2.RequiredValidator, i7$2.NgControlStatus, i7$2.NgModel, i3.NgForOf, i11$1.NzRadioGroupComponent, i11$1.NzRadioComponent, i12.NzDatePickerComponent, i9.NzInputDirective, i7$2.DefaultValueAccessor, i10$1.NzOptionComponent, i14$2.NzTabSetComponent, i14$2.NzTabComponent, ImagePickerComponent, UploadFileComponent, i7$1.NzButtonComponent, i8.NzWaveDirective, i6.ɵNzTransitionPatchDirective, i16$1.QuillEditorComponent, i7.NzIconDirective, i4$1.NzRowDirective, i4$1.NzColDirective], styles: [".unchecked[_ngcontent-%COMP%]{border:1px solid #e4e4e4}.unchecked[_ngcontent-%COMP%]:hover{background-color:#00c1de;color:#fff}.imgItemDiv[_ngcontent-%COMP%]{border-right:1px solid #ddd;padding:5px;height:50px;display:grid;place-items:center}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DetailComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'fs-detail',
                        templateUrl: './detail.component.html',
                        styleUrls: ['./detail.component.less']
                    }]
            }], function () { return [{ type: i1.Router }, { type: i1.ActivatedRoute }, { type: PageService }, { type: i1$2.ConfirmationService }]; }, { defaultImagePicker: [{
                    type: i0.ViewChild,
                    args: ["DefaultImagePicker"]
                }] });
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

    var _c0$3 = ["DefaultImagePicker"];
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
                i0.ɵɵviewQuery(_c0$3, 1);
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
        }, directives: [i3.NgIf, i4.NzModalComponent, i7$1.NzButtonComponent, i8.NzWaveDirective, i6.ɵNzTransitionPatchDirective, i7$2.ɵangular_packages_forms_forms_y, i7$2.NgControlStatusGroup, i7$2.NgForm, i8$1.NzFormDirective, i9$1.SEContainerComponent, i9$1.SEComponent, i11$1.NzRadioGroupComponent, i7$2.NgControlStatus, i7$2.NgModel, i11$1.NzRadioComponent, i7$2.NumberValueAccessor, i9.NzInputDirective, i7$2.DefaultValueAccessor, i7$2.RequiredValidator, ImagePickerComponent], styles: [".uploadImgGrid[_ngcontent-%COMP%]{display:grid;place-items:center;border:1px dashed #ddd;padding:10px;justify-content:center;background-color:#fafafa}"] });
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
        i4$1.NzGridModule,
        i9.NzInputModule,
        i11.NzTableModule,
        i14$1.NzDropDownModule,
        i7$1.NzButtonModule,
        i7.NzIconModule,
        i4.NzModalModule,
        i11$1.NzRadioModule,
        i5.NzUploadModule,
        i4$2.NzSpinModule,
        i5$1.NzCardModule,
        i10$1.NzSelectModule,
        i12.NzDatePickerModule,
        i14$2.NzTabsModule,
        i9$1.SEModule
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
            return new i1$1.LazyModuleFactory(PostModule.forChild());
        };
        PostModule.forEarly = function () {
            return new i1$1.LazyModuleFactory(PostModule.forChild());
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
                i1$1.CoreModule,
                i7$2.ReactiveFormsModule,
                i7$2.FormsModule,
                i3.CommonModule,
                PostRoutingModule
            ], NzModules, [
                // NgxsModule.forFeature([PostState]),
                i16$1.QuillModule.forRoot()
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
                i1$1.CoreModule,
                i7$2.ReactiveFormsModule,
                i7$2.FormsModule,
                i3.CommonModule,
                PostRoutingModule, i4$1.NzGridModule,
                i9.NzInputModule,
                i11.NzTableModule,
                i14$1.NzDropDownModule,
                i7$1.NzButtonModule,
                i7.NzIconModule,
                i4.NzModalModule,
                i11$1.NzRadioModule,
                i5.NzUploadModule,
                i4$2.NzSpinModule,
                i5$1.NzCardModule,
                i10$1.NzSelectModule,
                i12.NzDatePickerModule,
                i14$2.NzTabsModule,
                i9$1.SEModule, i16$1.QuillModule] });
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
                            i1$1.CoreModule,
                            i7$2.ReactiveFormsModule,
                            i7$2.FormsModule,
                            i3.CommonModule,
                            PostRoutingModule
                        ], NzModules, [
                            // NgxsModule.forFeature([PostState]),
                            i16$1.QuillModule.forRoot()
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
            canActivate: [i1$1.AuthGuard, i1$1.PermissionGuard],
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
            return new i1$1.LazyModuleFactory(CmsAdminModule.forChild());
        };
        return CmsAdminModule;
    }());
    CmsAdminModule.ɵfac = function CmsAdminModule_Factory(t) { return new (t || CmsAdminModule)(); };
    CmsAdminModule.ɵmod = i0.ɵɵdefineNgModule({ type: CmsAdminModule });
    CmsAdminModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[
                SharedModule,
                i1$1.CoreModule,
                CmsAdminRoutingModule,
            ], SharedModule] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CmsAdminModule, { imports: [SharedModule,
                i1$1.CoreModule,
                CmsAdminRoutingModule], exports: [SharedModule] });
    })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmsAdminModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            SharedModule,
                            i1$1.CoreModule,
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
    exports.FileService = FileService;
    exports.GetFileByIdPipe = GetFileByIdPipe;
    exports.SharedModule = SharedModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-tw-cms-admin.umd.js.map

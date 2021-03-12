(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@abp/ng.core'), require('@delon/theme'), require('ng-zorro-antd/message'), require('@ngx-validate/core'), require('@abp/ng.theme.basic'), require('@angular/common'), require('@angular/common/http'), require('rxjs'), require('rxjs/operators'), require('ng-zorro-antd/icon'), require('@angular/common/locales/zh'), require('date-fns/locale'), require('ng-zorro-antd/i18n'), require('@ant-design/icons-angular/icons'), require('@fs-tw/theme-alain-ms/layout'), require('@angular/router'), require('@angular/cdk/layout'), require('@delon/abc/reuse-tab'), require('@delon/util'), require('ng-zorro-antd/spin'), require('@abp/ng.theme.shared')) :
    typeof define === 'function' && define.amd ? define('@fs-tw/theme-alain-ms', ['exports', '@angular/core', '@abp/ng.core', '@delon/theme', 'ng-zorro-antd/message', '@ngx-validate/core', '@abp/ng.theme.basic', '@angular/common', '@angular/common/http', 'rxjs', 'rxjs/operators', 'ng-zorro-antd/icon', '@angular/common/locales/zh', 'date-fns/locale', 'ng-zorro-antd/i18n', '@ant-design/icons-angular/icons', '@fs-tw/theme-alain-ms/layout', '@angular/router', '@angular/cdk/layout', '@delon/abc/reuse-tab', '@delon/util', 'ng-zorro-antd/spin', '@abp/ng.theme.shared'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['fs-tw'] = global['fs-tw'] || {}, global['fs-tw']['theme-alain-ms'] = {}), global.ng.core, global.ng_core, global.theme, global.message, global.core$1, global.ng_theme_basic, global.ng.common, global.ng.common.http, global.rxjs, global.rxjs.operators, global.icon, global.ng.common.locales.zh, global.locale, global.i18n, global.icons, global['fs-tw']['theme-alain-ms'].layout, global.ng.router, global.ng.cdk.layout, global.reuseTab, global.util, global.spin, global.ng_theme_shared));
}(this, (function (exports, core, ng_core, theme, message, core$1, ng_theme_basic, common, http, rxjs, operators, icon, ngLang, locale, i18n, icons, layout, router, layout$1, reuseTab, util, spin, ng_theme_shared) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var ngLang__default = /*#__PURE__*/_interopDefaultLegacy(ngLang);

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

    // #region reuse-tab
    /**
     * 若需要[路由复用](https://ng-alain.com/components/reuse-tab)需要：
     * 1、在 `shared-delon.module.ts` 导入 `ReuseTabModule` 模块
     * 2、注册 `RouteReuseStrategy`
     * 3、在 `src/app/layout/default/default.component.html` 修改：
     *  ```html
     *  <section class="alain-default__content">
     *    <reuse-tab #reuseTab></reuse-tab>
     *    <router-outlet (activate)="reuseTab.activate($event)"></router-outlet>
     *  </section>
     *  ```
     */
    // import { RouteReuseStrategy } from '@angular/router';
    // import { ReuseTabService, ReuseTabStrategy } from '@delon/abc/reuse-tab';
    // alainProvides.push({
    //   provide: RouteReuseStrategy,
    //   useClass: ReuseTabStrategy,
    //   deps: [ReuseTabService],
    // } as any);
    // #endregion
    //import { DelonACLModule } from '@delon/acl';
    // Please refer to: https://ng-alain.com/docs/global-config
    var alainConfig = {
        st: { modal: { paramsName: 'i', size: 'lg' }, page: { toTop: true, toTopOffset: 0 } },
        pageHeader: { homeI18n: 'home', recursiveBreadcrumb: true },
        auth: { login_url: '/account/login' },
    };
    // Please refer to: https://ng.ant.design/docs/global-config/en#how-to-use
    var ngZorroConfig = {};
    var GlobalConfigModule = /** @class */ (function () {
        function GlobalConfigModule() {
        }
        GlobalConfigModule.forRoot = function () {
            return {
                ngModule: GlobalConfigModule,
                providers: [
                //{ provide: ALAIN_CONFIG, useValue: alainConfig },
                //{ provide: NZ_CONFIG, useValue: ngZorroConfig }
                ],
            };
        };
        return GlobalConfigModule;
    }());
    GlobalConfigModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        theme.AlainThemeModule.forRoot(),
                    ],
                },] }
    ];
    GlobalConfigModule.ctorParameters = function () { return []; };

    // import { ICONS } from '../../../style-icons';
    // import { ICONS_AUTO } from '../../../style-icons-auto';
    // import { I18NService } from '../i18n/i18n.service';
    /**
     * 用于应用启动时
     * 一般用来获取应用所需要的基础数据等
     */
    var StartupService = /** @class */ (function () {
        function StartupService(iconSrv, settingService, 
        // private aclService: ACLService,
        httpClient, doc, 
        // @Inject(ALAIN_I18N_TOKEN) private i18n: I18NService,
        titleSrv) {
            this.settingService = settingService;
            this.httpClient = httpClient;
            this.doc = doc;
            this.titleSrv = titleSrv;
            // iconSrv.addIcon(...ICONS_AUTO, ...ICONS);
        }
        StartupService.prototype.load = function () {
            var _this = this;
            // only works with promises
            // https://github.com/angular/angular/issues/15088
            return new Promise(function (resolve) {
                rxjs.zip(_this.httpClient.get("assets/tmp/app-data.json"))
                    .pipe(
                // 接收其他拦截器后产生的异常消息
                operators.catchError(function (_a) {
                    var _b = __read(_a, 1), appData = _b[0];
                    resolve(null);
                    return [appData];
                }))
                    .subscribe(function (_a) {
                    var _b = __read(_a, 1), appData = _b[0];
                    // Load general language data
                    //this.i18n.load(this.i18n.currentLang, langData);
                    // application data
                    var res = appData;
                    // 应用信息：包括站点名、描述、年份
                    _this.settingService.setApp(res.app);
                    // 用户信息：包括姓名、头像、邮箱地址
                    _this.settingService.setUser(res.user);
                    // ACL：设置权限为全量
                    //this.aclService.setFull(true);
                    // 设置标题
                    _this.titleSrv.default = '';
                    _this.titleSrv.suffix = 'Ng Alain MS';
                }, function () { }, function () {
                    resolve(null);
                    _this.removeLoading();
                });
            });
        };
        StartupService.prototype.removeLoading = function () {
            var el = this.doc.querySelector('#j-preloader');
            if (el) {
                el.remove();
            }
        };
        return StartupService;
    }());
    StartupService.decorators = [
        { type: core.Injectable }
    ];
    StartupService.ctorParameters = function () { return [
        { type: icon.NzIconService },
        { type: theme.SettingsService },
        { type: http.HttpClient },
        { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
        { type: theme.TitleService }
    ]; };
    // #region Startup Service
    // tslint:disable-next-line: typedef
    function StartupServiceFactory(startupService) {
        return function () { return startupService.load(); };
    }
    var APPINIT_PROVIDES = [
        StartupService,
        {
            provide: core.APP_INITIALIZER,
            useFactory: StartupServiceFactory,
            deps: [StartupService],
            multi: true,
        },
    ];
    // #endregion

    // #region default language
    var LANG = {
        abbr: 'zh',
        ng: ngLang__default['default'],
        zorro: i18n.zh_TW,
        date: locale.zhCN,
        delon: theme.zh_TW,
    };
    var LANG_PROVIDES = [
        { provide: core.LOCALE_ID, useValue: LANG.abbr },
        { provide: i18n.NZ_I18N, useValue: LANG.zorro },
        { provide: i18n.NZ_DATE_LOCALE, useValue: LANG.date },
        { provide: theme.DELON_LOCALE, useValue: LANG.delon },
    ];
    // register angular
    common.registerLocaleData(LANG.ng, LANG.abbr);
    // #endregion

    /*
    * Automatically generated by 'ng g ng-alain:plugin icon'
    * @see https://ng-alain.com/cli/plugin#icon
    */
    var ICONS_AUTO = [
        icons.AlipayCircleOutline,
        icons.AppstoreOutline,
        icons.BookOutline,
        icons.BranchesOutline,
        icons.CaretRightOutline,
        icons.CustomerServiceOutline,
        icons.DesktopOutline,
        icons.DollarOutline,
        icons.DownloadOutline,
        icons.EditOutline,
        icons.FacebookOutline,
        icons.FileSearchOutline,
        icons.FolderOutline,
        icons.GiftOutline,
        icons.GithubOutline,
        icons.GlobalOutline,
        icons.HeartFill,
        icons.LockOutline,
        icons.MailOutline,
        icons.MenuFoldOutline,
        icons.PhoneOutline,
        icons.PieChartOutline,
        icons.PlusCircleOutline,
        icons.QrcodeOutline,
        icons.QuestionCircleFill,
        icons.QuestionOutline,
        icons.RollbackOutline,
        icons.SafetyOutline,
        icons.ScanOutline,
        icons.SettingOutline,
        icons.ShareAltOutline,
        icons.ShoppingCartOutline,
        icons.StarFill,
        icons.StarOutline,
        icons.SyncOutline,
        icons.TableOutline,
        icons.TaobaoCircleOutline,
        icons.ToTopOutline,
        icons.ToolOutline,
        icons.TrophyOutline,
        icons.UserOutline,
        icons.WechatOutline,
        icons.WeiboCircleOutline,
        icons.WeiboOutline,
        icons.ZhihuOutline
    ];

    // Custom icon static resources
    var ICONS = [icons.InfoOutline, icons.BulbOutline, icons.ProfileOutline, icons.ExceptionOutline, icons.LinkOutline];

    var STYLES_PROVIDERS = [
        {
            provide: core.APP_INITIALIZER,
            useFactory: configureStyles,
            deps: [icon.NzIconService],
            multi: true,
        },
    ];
    function configureStyles(iconSrv) {
        return function () {
            iconSrv.addIcon.apply(iconSrv, __spread(ICONS_AUTO, ICONS));
        };
    }

    var RootModule = /** @class */ (function () {
        function RootModule() {
        }
        return RootModule;
    }());
    RootModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        message.NzMessageModule,
                        layout.LayoutModule.forRoot(),
                        GlobalConfigModule.forRoot(),
                        core$1.NgxValidateCoreModule.forRoot({
                            targetSelector: '.form-control',
                            blueprints: {
                                creditCard: 'AbpValidation::ThisFieldIsNotAValidCreditCardNumber.',
                                email: 'AbpValidation::ThisFieldIsNotAValidEmailAddress.',
                                invalid: 'AbpValidation::ThisFieldIsNotValid.',
                                max: 'AbpValidation::ThisFieldMustBeBetween{0}And{1}[{{ min }},{{ max }}]',
                                maxlength: 'AbpValidation::ThisFieldMustBeAStringOrArrayTypeWithAMaximumLengthOf{0}[{{ requiredLength }}]',
                                min: 'AbpValidation::ThisFieldMustBeBetween{0}And{1}[{{ min }},{{ max }}]',
                                minlength: 'AbpValidation::ThisFieldMustBeAStringOrArrayTypeWithAMinimumLengthOf{0}[{{ requiredLength }}]',
                                ngbDate: 'AbpValidation::ThisFieldIsNotValid.',
                                passwordMismatch: 'AbpIdentity::Identity.PasswordConfirmationFailed',
                                range: 'AbpValidation::ThisFieldMustBeBetween{0}And{1}[{{ min }},{{ max }}]',
                                required: 'AbpValidation::ThisFieldIsRequired.',
                                url: 'AbpValidation::ThisFieldIsNotAValidFullyQualifiedHttpHttpsOrFtpUrl',
                            },
                            errorTemplate: ng_theme_basic.ValidationErrorComponent,
                        })
                    ],
                    providers: __spread(APPINIT_PROVIDES, LANG_PROVIDES, [
                        STYLES_PROVIDERS
                    ]),
                },] }
    ];

    var AccountLayoutComponent = /** @class */ (function () {
        function AccountLayoutComponent(layoutStateService, bm, mediaMatcher, router$1, route, msg, reuseTabSrv, el, renderer, srv, doc) {
            var _this = this;
            this.layoutStateService = layoutStateService;
            this.router = router$1;
            this.route = route;
            this.msg = msg;
            this.el = el;
            this.renderer = renderer;
            this.srv = srv;
            this.doc = doc;
            //hasAllNav = false;
            //hasSidebar = true;
            this.isFetching = false;
            this.store$ = this.layoutStateService.getStore$();
            var routerData = Object.assign({ hasAllNav: false, hasSidebar: true }, route.snapshot.data);
            //this.hasAllNav = routerData.hasAllNav === true;
            //this.hasSidebar = routerData.hasSidebar === true;
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
        Object.defineProperty(AccountLayoutComponent.prototype, "isMobile", {
            get: function () {
                return this.srv.isMobile;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AccountLayoutComponent.prototype, "body", {
            get: function () {
                return this.doc.body;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AccountLayoutComponent.prototype, "isCurrentPath", {
            get: function () {
                return this.router.createUrlTree(['./'], { relativeTo: this.route }).toString() === this.router.routerState.snapshot.url.toString();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AccountLayoutComponent.prototype, "parentPath", {
            get: function () {
                var _a, _b, _c, _d, _e, _f, _g, _h;
                var parentPath = (_e = (_d = (_c = (_b = (_a = this.layoutStateService) === null || _a === void 0 ? void 0 : _a.routesProcessor) === null || _b === void 0 ? void 0 : _b.CurrentRoute) === null || _c === void 0 ? void 0 : _c.parent) === null || _d === void 0 ? void 0 : _d.path) !== null && _e !== void 0 ? _e : "/";
                var parentPathLength = parentPath.split("/").length;
                var url = (_h = (_g = (_f = this.layoutStateService) === null || _f === void 0 ? void 0 : _f.routesProcessor) === null || _g === void 0 ? void 0 : _g.CurrentUrl) !== null && _h !== void 0 ? _h : "/";
                var urlArray = url.split("/").filter(function (x, i) { return i < parentPathLength; });
                return urlArray.toString().replace(/,/g, "/");
            },
            enumerable: false,
            configurable: true
        });
        AccountLayoutComponent.prototype.scrollToTop = function () {
            var el = this.doc.querySelector('.alain-ms__product-body');
            if (!el) {
                return;
            }
            el.scrollTop = 0;
        };
        AccountLayoutComponent.prototype.setClass = function () {
            var _j;
            var _k = this, el = _k.el, renderer = _k.renderer, queryCls = _k.queryCls;
            util.updateHostClass(el.nativeElement, renderer, (_j = {},
                _j['alain-ms'] = true,
                _j[queryCls] = true,
                _j), true);
        };
        AccountLayoutComponent.prototype.setBodyClass = function () {
            var _j;
            var _k = this.srv.layout, hasTopbar = _k.hasTopbar, hasSidebar = _k.hasSidebar, hasFixed = _k.hasFixed, colorWeak = _k.colorWeak;
            util.updateHostClass(this.body, this.renderer, (_j = {
                    'color-weak': colorWeak
                },
                _j['alain-ms__has-topbar'] = hasTopbar,
                _j['alain-ms__has-sidebar'] = hasSidebar,
                _j['alain-ms__has-fixed'] = hasFixed,
                _j));
        };
        AccountLayoutComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.notify$ = this.srv.notify.subscribe(function () {
                _this.setClass();
                _this.setBodyClass();
            });
        };
        AccountLayoutComponent.prototype.ngOnDestroy = function () {
            this.notify$.unsubscribe();
            this.body.classList.remove('alain-ms__has-topbar', 'alain-ms__has-sidebar', 'alain-ms__has-fixed');
        };
        return AccountLayoutComponent;
    }());
    AccountLayoutComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'abp-account-layout',
                    template: "<ng-container *ngIf=\"store$ | async as store\">\r\n  <ms-topbar></ms-topbar>\r\n  <!-- <ms-sidebar *ngIf=\"store.sidebarConfig.hasSidebar\"></ms-sidebar> -->\r\n  <div class=\"brand-page-loading\" [hidden]=\"!store.isFetching\">\r\n    <nz-spin nzSpinning></nz-spin>\r\n  </div>\r\n  <div class=\"alain-ms__body\" [hidden]=\"store.isFetching\">\r\n    <service-layout [hasConsoleCss]=\"false\">\r\n      \r\n      <router-outlet></router-outlet>\r\n      \r\n    </service-layout>\r\n    </div>\r\n  \r\n\r\n\r\n\r\n</ng-container>\r\n",
                    styles: [".pri-btn{border:1px solid #ddd;color:#000;background:#fff;font-size:8px}.pri-btn:hover{border:1px solid #26d7eb;color:#26d7eb}"]
                },] }
    ];
    AccountLayoutComponent.ctorParameters = function () { return [
        { type: layout.LayoutStateService },
        { type: layout$1.BreakpointObserver },
        { type: layout$1.MediaMatcher },
        { type: router.Router },
        { type: router.ActivatedRoute },
        { type: message.NzMessageService },
        { type: reuseTab.ReuseTabService },
        { type: core.ElementRef },
        { type: core.Renderer2 },
        { type: layout.BrandService },
        { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] }
    ]; };

    var ApplicationLayoutComponent = /** @class */ (function () {
        function ApplicationLayoutComponent(layoutStateService, bm, mediaMatcher, router$1, route, msg, reuseTabSrv, el, renderer, srv, doc) {
            var _this = this;
            this.layoutStateService = layoutStateService;
            this.router = router$1;
            this.route = route;
            this.msg = msg;
            this.el = el;
            this.renderer = renderer;
            this.srv = srv;
            this.doc = doc;
            //hasAllNav = false;
            //hasSidebar = true;
            this.isFetching = false;
            this.store$ = this.layoutStateService.getStore$();
            var routerData = Object.assign({ hasAllNav: false, hasSidebar: true }, route.snapshot.data);
            //this.hasAllNav = routerData.hasAllNav === true;
            //this.hasSidebar = routerData.hasSidebar === true;
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
        Object.defineProperty(ApplicationLayoutComponent.prototype, "isMobile", {
            get: function () {
                return this.srv.isMobile;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ApplicationLayoutComponent.prototype, "body", {
            get: function () {
                return this.doc.body;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ApplicationLayoutComponent.prototype, "isCurrentPath", {
            get: function () {
                return this.router.createUrlTree(['./'], { relativeTo: this.route }).toString() === this.router.routerState.snapshot.url.toString();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ApplicationLayoutComponent.prototype, "parentPath", {
            get: function () {
                var _a, _b, _c, _d, _e, _f, _g, _h;
                var parentPath = (_e = (_d = (_c = (_b = (_a = this.layoutStateService) === null || _a === void 0 ? void 0 : _a.routesProcessor) === null || _b === void 0 ? void 0 : _b.CurrentRoute) === null || _c === void 0 ? void 0 : _c.parent) === null || _d === void 0 ? void 0 : _d.path) !== null && _e !== void 0 ? _e : "/";
                var parentPathLength = parentPath.split("/").length;
                var url = (_h = (_g = (_f = this.layoutStateService) === null || _f === void 0 ? void 0 : _f.routesProcessor) === null || _g === void 0 ? void 0 : _g.CurrentUrl) !== null && _h !== void 0 ? _h : "/";
                var urlArray = url.split("/").filter(function (x, i) { return i < parentPathLength; });
                return urlArray.toString().replace(/,/g, "/");
            },
            enumerable: false,
            configurable: true
        });
        ApplicationLayoutComponent.prototype.scrollToTop = function () {
            var el = this.doc.querySelector('.alain-ms__product-body');
            if (!el) {
                return;
            }
            el.scrollTop = 0;
        };
        ApplicationLayoutComponent.prototype.setClass = function () {
            var _j;
            var _k = this, el = _k.el, renderer = _k.renderer, queryCls = _k.queryCls;
            util.updateHostClass(el.nativeElement, renderer, (_j = {},
                _j['alain-ms'] = true,
                _j[queryCls] = true,
                _j), true);
        };
        ApplicationLayoutComponent.prototype.setBodyClass = function () {
            var _j;
            var _k = this.srv.layout, hasTopbar = _k.hasTopbar, hasSidebar = _k.hasSidebar, hasFixed = _k.hasFixed, colorWeak = _k.colorWeak;
            util.updateHostClass(this.body, this.renderer, (_j = {
                    'color-weak': colorWeak
                },
                _j['alain-ms__has-topbar'] = hasTopbar,
                _j['alain-ms__has-sidebar'] = hasSidebar,
                _j['alain-ms__has-fixed'] = hasFixed,
                _j));
        };
        ApplicationLayoutComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.notify$ = this.srv.notify.subscribe(function () {
                _this.setClass();
                _this.setBodyClass();
            });
        };
        ApplicationLayoutComponent.prototype.ngOnDestroy = function () {
            this.notify$.unsubscribe();
            this.body.classList.remove('alain-ms__has-topbar', 'alain-ms__has-sidebar', 'alain-ms__has-fixed');
        };
        return ApplicationLayoutComponent;
    }());
    ApplicationLayoutComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'abp-application-layout',
                    template: "<ng-container *ngIf=\"store$ | async as store\">\r\n  <ms-topbar [allNav]=\"store.sidebarConfig.hasAllNav\"></ms-topbar>\r\n  <ms-sidebar *ngIf=\"store.sidebarConfig.hasSidebar\"></ms-sidebar>\r\n  <div class=\"brand-page-loading\" [hidden]=\"!store.isFetching\">\r\n    <nz-spin nzSpinning></nz-spin>\r\n  </div>\r\n  <div class=\"alain-ms__body\" [hidden]=\"store.isFetching\">\r\n    \r\n    <service-layout\r\n      [nav]=\"store.sidebarConfig.hasPageNav\"\r\n      [navConfig]=\"store.navConfig\"\r\n      [navList]=\"store.pageNavs\"\r\n    >\r\n      <!-- todo:move to feature module\r\n      <page-bar [subTitle]=\"subTitleTpl\" [title]=\"titleTpl\">\r\n        <ng-template #titleTpl> {{ store.navConfig.doc }} </ng-template>\r\n        <ng-template #subTitleTpl>\r\n          <div class=\"text-orange\">\r\n            \u4EE5\u4E0B\u53EA\u5C55\u793A\u90E8\u5206\u7EC4\u4EF6\uFF0C\u66F4\u591A\u7EC4\u4EF6<a\r\n              href=\"https://ng.ant.design\"\r\n              target=\"_blank\"\r\n              >ng.ant.design</a\r\n            >\r\n          </div>\r\n        </ng-template>\r\n        <button (click)=\"msg.success('clean')\" nz-button>\u6E05\u7406</button>\r\n        <button (click)=\"msg.success('remove')\" nz-button nzDanger>\u79FB\u9664</button>\r\n        <button (click)=\"msg.success('add')\" nz-button nzType=\"primary\">\r\n          \u65B0\u589E\r\n        </button>\r\n      </page-bar> -->\r\n      <div *ngTemplateOutlet=\"FsPageBar\"></div>\r\n      <router-outlet></router-outlet>\r\n    </service-layout>\r\n  </div>\r\n</ng-container>\r\n\r\n<ng-template #FsPageBar>\r\n  <page-bar [subTitle]=\"subTitleTpl\" [title]=\"titleTpl\">\r\n    <ng-template #subTitleTpl>\r\n      <span *ngIf=\"layoutStateService?.routesProcessor?.RouterState\" >\r\n        <button type=\"button\" class=\"pri-btn\" \r\n          *ngIf=\"!isCurrentPath\" \r\n          [routerLink]=\"[parentPath]\">\u8FD4\u56DE</button>\r\n      </span>\r\n    </ng-template>\r\n    <ng-template #titleTpl>\r\n      <span *ngIf=\"layoutStateService?.routesProcessor?.RouterState\">\r\n        {{layoutStateService?.routesProcessor?.CurrentRoute?.name | abpLocalization}}\r\n      </span>\r\n    </ng-template>\r\n  </page-bar>\r\n</ng-template>",
                    styles: [".pri-btn{border:1px solid #ddd;color:#000;background:#fff;font-size:8px}.pri-btn:hover{border:1px solid #26d7eb;color:#26d7eb}"]
                },] }
    ];
    ApplicationLayoutComponent.ctorParameters = function () { return [
        { type: layout.LayoutStateService },
        { type: layout$1.BreakpointObserver },
        { type: layout$1.MediaMatcher },
        { type: router.Router },
        { type: router.ActivatedRoute },
        { type: message.NzMessageService },
        { type: reuseTab.ReuseTabService },
        { type: core.ElementRef },
        { type: core.Renderer2 },
        { type: layout.BrandService },
        { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] }
    ]; };

    var styles = "\n.content-header-title {\n    font-size: 24px;\n}\n.entry-row {\n    margin-bottom: 15px;\n}\n#main-navbar-tools a.dropdown-toggle {\n    text-decoration: none;\n    color: #fff;\n}\n.navbar .dropdown-submenu {\n    position: relative;\n}\n.navbar .dropdown-menu {\n    margin: 0;\n    padding: 0;\n}\n.navbar .dropdown-menu a {\n    font-size: .9em;\n    padding: 10px 15px;\n    display: block;\n    min-width: 210px;\n    text-align: left;\n    border-radius: 0.25rem;\n    min-height: 44px;\n}\n[dir=rtl] .navbar .dropdown-menu a {\n    text-align: right!important;\n}\n.navbar .dropdown-submenu a::after {\n    transform: rotate(-90deg);\n    position: absolute;\n    right: 16px;\n    top: 18px;\n}\n[dir=rtl] .navbar .dropdown-submenu a::after {\n    transform: rotate(90deg);\n    left: 16px;\n    right: auto;\n    top: 20px;\n}\n.navbar .dropdown-submenu .dropdown-menu {\n    top: 0;\n    left: 100%;\n}\n.card-header .btn {\n    padding: 2px 6px;\n}\n.card-header h5 {\n    margin: 0;\n}\n.container > .card {\n    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;\n}\n@media screen and (min-width: 992px) {\n    .navbar .dropdown:hover > .dropdown-menu {\n        display: block;\n    }\n\n    .navbar .dropdown-submenu:hover > .dropdown-menu {\n        display: block;\n    }\n}\n.input-validation-error {\n    border-color: #dc3545;\n}\n.field-validation-error {\n    font-size: 0.8em;\n}\n.ui-table .ui-table-tbody > tr.empty-row > div.empty-row-content {\n    border: 1px solid #c8c8c8;\n  }\n.abp-loading {\n    background: rgba(0, 0, 0, 0.05);\n}\n.modal-backdrop {\nbackground-color: rgba(0, 0, 0, 0.6);\n}\n\n.confirmation .confirmation-backdrop {\n\t background: rgba(0, 0, 0, 0.7) !important;\n}\n .confirmation .confirmation-dialog {\n\t border: none;\n\t border-radius: 10px;\n\t background-color: #fff;\n\t box-shadow: 0 0 10px -5px rgba(0, 0, 0, 0.5);\n}\n .confirmation .confirmation-dialog .icon-container .icon {\n\t stroke: #fff;\n\t color: #fff;\n}\n .confirmation .confirmation-dialog .icon-container.info .icon {\n\t stroke: #2f96b4;\n\t color: #2f96b4;\n}\n .confirmation .confirmation-dialog .icon-container.success .icon {\n\t stroke: #51a351;\n\t color: #51a351;\n}\n .confirmation .confirmation-dialog .icon-container.warning .icon {\n\t stroke: #f89406;\n\t color: #f89406;\n}\n .confirmation .confirmation-dialog .icon-container.error .icon {\n\t stroke: #bd362f;\n\t color: #bd362f;\n}\n .confirmation .confirmation-dialog .content .title {\n\t color: #222;\n}\n .confirmation .confirmation-dialog .content .message {\n\t color: #777;\n}\n .confirmation .confirmation-dialog .footer {\n\t background: transparent;\n}\n .confirmation .confirmation-dialog .footer .confirmation-button {\n\t background-color: #eee;\n\t color: #777;\n}\n .confirmation .confirmation-dialog .footer .confirmation-button:hover, .confirmation .confirmation-dialog .footer .confirmation-button:focus, .confirmation .confirmation-dialog .footer .confirmation-button:active {\n\t background-color: #bbb;\n}\n .confirmation .confirmation-dialog .footer .confirmation-button--confirm {\n\t background-color: #2f96b4;\n\t color: #fff;\n}\n .confirmation .confirmation-dialog .footer .confirmation-button--confirm:hover {\n\t background-color: #2e819b;\n}\n.ui-table .pagination-wrapper {\n    background-color: #f4f4f4;\n    border: 1px solid #c8c8c8;\n}\n.bordered .datatable-body-row {\n    border-top: 1px solid #eee;\n    margin-top: -1px;\n}\n";

    var NG_ALAIN_MS_THEME_STYLES_PROVIDERS = [
        {
            provide: core.APP_INITIALIZER,
            useFactory: configureStyles$1,
            deps: [core.Injector],
            multi: true,
        },
    ];
    function configureStyles$1(injector) {
        return function () {
            var replaceableComponents = injector.get(ng_core.ReplaceableComponentsService);
            var domInsertion = injector.get(ng_core.DomInsertionService);
            domInsertion.insertContent(ng_core.CONTENT_STRATEGY.AppendStyleToHead(styles));
            initLayouts(replaceableComponents);
        };
    }
    function initLayouts(replaceableComponents) {
        replaceableComponents.add({
            key: "Theme.ApplicationLayoutComponent" /* ApplicationLayout */,
            component: ApplicationLayoutComponent
        });
        replaceableComponents.add({
            key: "Theme.AccountLayoutComponent" /* AccountLayout */,
            component: AccountLayoutComponent,
        });
        replaceableComponents.add({
            key: "Theme.EmptyLayoutComponent" /* EmptyLayout */,
            component: layout.MSLayoutComponent,
        });
    }

    var NG_ALAIN_MS_THEME_NAV_ITEM_PROVIDERS = [
        {
            provide: core.APP_INITIALIZER,
            useFactory: configureNavItems,
            deps: [ng_theme_shared.NavItemsService],
            multi: true,
        },
    ];
    function configureNavItems(navItems) {
        return function () {
            //   navItems.addItems([
            //     {
            //       id: eThemeNgAlainMsComponents.Languages,
            //       order: 1,
            //       component: LanguagesComponent,
            //       data:{
            //         direction:'right'
            //       }
            //     } as NavItem,
            //     {
            //       id: eThemeNgAlainMsComponents.FullScreen,
            //       order: 2,
            //       component: HeaderFullScreenComponent,
            //       data:{
            //         direction:'right'
            //       }
            //     } as NavItem,
            //     {
            //       id: eThemeNgAlainMsComponents.CurrentUser,
            //       order: 999,
            //       component: CurrentUserComponent,
            //       data:{
            //         direction:'right'
            //       }
            //     } as NavItem
            //   ]);
        };
    }

    var ThemeAlainMsModule = /** @class */ (function () {
        function ThemeAlainMsModule() {
        }
        ThemeAlainMsModule.forRoot = function () {
            return {
                ngModule: RootModule,
                providers: [
                    NG_ALAIN_MS_THEME_STYLES_PROVIDERS,
                    NG_ALAIN_MS_THEME_NAV_ITEM_PROVIDERS
                ]
            };
        };
        return ThemeAlainMsModule;
    }());
    ThemeAlainMsModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        ng_core.CoreModule,
                        layout.LayoutModule,
                        spin.NzSpinModule
                    ],
                    declarations: [ApplicationLayoutComponent, AccountLayoutComponent],
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ThemeAlainMsModule = ThemeAlainMsModule;
    exports.ɵa = ApplicationLayoutComponent;
    exports.ɵb = AccountLayoutComponent;
    exports.ɵc = RootModule;
    exports.ɵd = GlobalConfigModule;
    exports.ɵe = StartupService;
    exports.ɵf = StartupServiceFactory;
    exports.ɵg = APPINIT_PROVIDES;
    exports.ɵh = LANG;
    exports.ɵi = LANG_PROVIDES;
    exports.ɵj = STYLES_PROVIDERS;
    exports.ɵk = configureStyles;
    exports.ɵl = NG_ALAIN_MS_THEME_STYLES_PROVIDERS;
    exports.ɵm = configureStyles$1;
    exports.ɵn = NG_ALAIN_MS_THEME_NAV_ITEM_PROVIDERS;
    exports.ɵo = configureNavItems;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-tw-theme-alain-ms.umd.js.map

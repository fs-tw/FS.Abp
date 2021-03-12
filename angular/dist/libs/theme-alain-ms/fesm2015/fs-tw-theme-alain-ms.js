import { ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, ɵsetClassMetadata, NgModule, ɵɵinject, ɵɵdefineInjectable, Injectable, Inject, APP_INITIALIZER, LOCALE_ID, ɵɵelementContainerStart, ɵɵelement, ɵɵelementStart, ɵɵelementEnd, ɵɵelementContainerEnd, ɵɵadvance, ɵɵproperty, ɵɵdirectiveInject, ElementRef, Renderer2, ɵɵdefineComponent, ɵɵtemplate, ɵɵpipe, ɵɵpipeBind1, Component, ɵɵnextContext, ɵɵreference, ɵɵtext, ɵɵpureFunction1, ɵɵtextInterpolate1, ɵɵtemplateRefExtractor, Injector } from '@angular/core';
import { LocalizationPipe, ReplaceableComponentsService, DomInsertionService, CONTENT_STRATEGY, CoreModule } from '@abp/ng.core';
import { AlainThemeModule, SettingsService, TitleService, zh_TW as zh_TW$1, DELON_LOCALE } from '@delon/theme';
import { NzMessageModule, NzMessageService } from 'ng-zorro-antd/message';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { ValidationErrorComponent } from '@abp/ng.theme.basic';
import { DOCUMENT, registerLocaleData, NgIf, AsyncPipe, NgTemplateOutlet } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { zip } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NzIconService } from 'ng-zorro-antd/icon';
import ngLang from '@angular/common/locales/zh';
import { zhCN } from 'date-fns/locale';
import { zh_TW, NZ_I18N, NZ_DATE_LOCALE } from 'ng-zorro-antd/i18n';
import { AlipayCircleOutline, AppstoreOutline, BookOutline, BranchesOutline, CaretRightOutline, CustomerServiceOutline, DesktopOutline, DollarOutline, DownloadOutline, EditOutline, FacebookOutline, FileSearchOutline, FolderOutline, GiftOutline, GithubOutline, GlobalOutline, HeartFill, LockOutline, MailOutline, MenuFoldOutline, PhoneOutline, PieChartOutline, PlusCircleOutline, QrcodeOutline, QuestionCircleFill, QuestionOutline, RollbackOutline, SafetyOutline, ScanOutline, SettingOutline, ShareAltOutline, ShoppingCartOutline, StarFill, StarOutline, SyncOutline, TableOutline, TaobaoCircleOutline, ToTopOutline, ToolOutline, TrophyOutline, UserOutline, WechatOutline, WeiboCircleOutline, WeiboOutline, ZhihuOutline, InfoOutline, BulbOutline, ProfileOutline, ExceptionOutline, LinkOutline } from '@ant-design/icons-angular/icons';
import { LayoutModule, LayoutStateService, BrandService, MSTopbarComponent, MSServiceLayoutComponent, MSSidebarComponent, MSPageBarComponent, MSLayoutComponent } from '@fs-tw/theme-alain-ms/layout';
import { RouteConfigLoadStart, NavigationError, NavigationEnd, Router, ActivatedRoute, RouterOutlet, RouterLink } from '@angular/router';
import { BreakpointObserver, MediaMatcher } from '@angular/cdk/layout';
import { ReuseTabService } from '@delon/abc/reuse-tab';
import { updateHostClass } from '@delon/util';
import { NzSpinComponent, NzSpinModule } from 'ng-zorro-antd/spin';
import { NavItemsService } from '@abp/ng.theme.shared';

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
const alainConfig = {
    st: { modal: { paramsName: 'i', size: 'lg' }, page: { toTop: true, toTopOffset: 0 } },
    pageHeader: { homeI18n: 'home', recursiveBreadcrumb: true },
    auth: { login_url: '/account/login' },
};
// Please refer to: https://ng.ant.design/docs/global-config/en#how-to-use
const ngZorroConfig = {};
class GlobalConfigModule {
    constructor() {
    }
    static forRoot() {
        return {
            ngModule: GlobalConfigModule,
            providers: [
            //{ provide: ALAIN_CONFIG, useValue: alainConfig },
            //{ provide: NZ_CONFIG, useValue: ngZorroConfig }
            ],
        };
    }
}
GlobalConfigModule.ɵfac = function GlobalConfigModule_Factory(t) { return new (t || GlobalConfigModule)(); };
GlobalConfigModule.ɵmod = ɵɵdefineNgModule({ type: GlobalConfigModule });
GlobalConfigModule.ɵinj = ɵɵdefineInjector({ imports: [[
            AlainThemeModule.forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(GlobalConfigModule, { imports: [AlainThemeModule] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GlobalConfigModule, [{
        type: NgModule,
        args: [{
                imports: [
                    AlainThemeModule.forRoot(),
                ],
            }]
    }], function () { return []; }, null); })();

// import { ICONS } from '../../../style-icons';
// import { ICONS_AUTO } from '../../../style-icons-auto';
// import { I18NService } from '../i18n/i18n.service';
/**
 * 用于应用启动时
 * 一般用来获取应用所需要的基础数据等
 */
class StartupService {
    constructor(iconSrv, settingService, 
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
    load() {
        // only works with promises
        // https://github.com/angular/angular/issues/15088
        return new Promise((resolve) => {
            zip(this.httpClient.get(`assets/tmp/app-data.json`))
                .pipe(
            // 接收其他拦截器后产生的异常消息
            catchError(([appData]) => {
                resolve(null);
                return [appData];
            }))
                .subscribe(([appData]) => {
                // Load general language data
                //this.i18n.load(this.i18n.currentLang, langData);
                // application data
                const res = appData;
                // 应用信息：包括站点名、描述、年份
                this.settingService.setApp(res.app);
                // 用户信息：包括姓名、头像、邮箱地址
                this.settingService.setUser(res.user);
                // ACL：设置权限为全量
                //this.aclService.setFull(true);
                // 设置标题
                this.titleSrv.default = '';
                this.titleSrv.suffix = 'Ng Alain MS';
            }, () => { }, () => {
                resolve(null);
                this.removeLoading();
            });
        });
    }
    removeLoading() {
        const el = this.doc.querySelector('#j-preloader');
        if (el) {
            el.remove();
        }
    }
}
StartupService.ɵfac = function StartupService_Factory(t) { return new (t || StartupService)(ɵɵinject(NzIconService), ɵɵinject(SettingsService), ɵɵinject(HttpClient), ɵɵinject(DOCUMENT), ɵɵinject(TitleService)); };
StartupService.ɵprov = ɵɵdefineInjectable({ token: StartupService, factory: StartupService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(StartupService, [{
        type: Injectable
    }], function () { return [{ type: NzIconService }, { type: SettingsService }, { type: HttpClient }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: TitleService }]; }, null); })();
// #region Startup Service
// tslint:disable-next-line: typedef
function StartupServiceFactory(startupService) {
    return () => startupService.load();
}
const APPINIT_PROVIDES = [
    StartupService,
    {
        provide: APP_INITIALIZER,
        useFactory: StartupServiceFactory,
        deps: [StartupService],
        multi: true,
    },
];

// #region default language
const LANG = {
    abbr: 'zh',
    ng: ngLang,
    zorro: zh_TW,
    date: zhCN,
    delon: zh_TW$1,
};
const LANG_PROVIDES = [
    { provide: LOCALE_ID, useValue: LANG.abbr },
    { provide: NZ_I18N, useValue: LANG.zorro },
    { provide: NZ_DATE_LOCALE, useValue: LANG.date },
    { provide: DELON_LOCALE, useValue: LANG.delon },
];
// register angular
registerLocaleData(LANG.ng, LANG.abbr);
// #endregion

/*
* Automatically generated by 'ng g ng-alain:plugin icon'
* @see https://ng-alain.com/cli/plugin#icon
*/
const ICONS_AUTO = [
    AlipayCircleOutline,
    AppstoreOutline,
    BookOutline,
    BranchesOutline,
    CaretRightOutline,
    CustomerServiceOutline,
    DesktopOutline,
    DollarOutline,
    DownloadOutline,
    EditOutline,
    FacebookOutline,
    FileSearchOutline,
    FolderOutline,
    GiftOutline,
    GithubOutline,
    GlobalOutline,
    HeartFill,
    LockOutline,
    MailOutline,
    MenuFoldOutline,
    PhoneOutline,
    PieChartOutline,
    PlusCircleOutline,
    QrcodeOutline,
    QuestionCircleFill,
    QuestionOutline,
    RollbackOutline,
    SafetyOutline,
    ScanOutline,
    SettingOutline,
    ShareAltOutline,
    ShoppingCartOutline,
    StarFill,
    StarOutline,
    SyncOutline,
    TableOutline,
    TaobaoCircleOutline,
    ToTopOutline,
    ToolOutline,
    TrophyOutline,
    UserOutline,
    WechatOutline,
    WeiboCircleOutline,
    WeiboOutline,
    ZhihuOutline
];

// Custom icon static resources
const ICONS = [InfoOutline, BulbOutline, ProfileOutline, ExceptionOutline, LinkOutline];

const STYLES_PROVIDERS = [
    {
        provide: APP_INITIALIZER,
        useFactory: configureStyles,
        deps: [NzIconService],
        multi: true,
    },
];
function configureStyles(iconSrv) {
    return () => {
        iconSrv.addIcon(...ICONS_AUTO, ...ICONS);
    };
}

class RootModule {
}
RootModule.ɵfac = function RootModule_Factory(t) { return new (t || RootModule)(); };
RootModule.ɵmod = ɵɵdefineNgModule({ type: RootModule });
RootModule.ɵinj = ɵɵdefineInjector({ providers: [
        ...APPINIT_PROVIDES,
        ...LANG_PROVIDES,
        STYLES_PROVIDERS
    ], imports: [[
            NzMessageModule,
            LayoutModule.forRoot(),
            GlobalConfigModule.forRoot(),
            NgxValidateCoreModule.forRoot({
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
                errorTemplate: ValidationErrorComponent,
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(RootModule, { imports: [NzMessageModule, LayoutModule, GlobalConfigModule, NgxValidateCoreModule] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(RootModule, [{
        type: NgModule,
        args: [{
                imports: [
                    NzMessageModule,
                    LayoutModule.forRoot(),
                    GlobalConfigModule.forRoot(),
                    NgxValidateCoreModule.forRoot({
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
                        errorTemplate: ValidationErrorComponent,
                    })
                ],
                providers: [
                    ...APPINIT_PROVIDES,
                    ...LANG_PROVIDES,
                    STYLES_PROVIDERS
                ],
            }]
    }], null, null); })();

function AccountLayoutComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "ms-topbar");
    ɵɵelementStart(2, "div", 1);
    ɵɵelement(3, "nz-spin", 2);
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 3);
    ɵɵelementStart(5, "service-layout", 4);
    ɵɵelement(6, "router-outlet");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const store_r1 = ctx.ngIf;
    ɵɵadvance(2);
    ɵɵproperty("hidden", !store_r1.isFetching);
    ɵɵadvance(2);
    ɵɵproperty("hidden", store_r1.isFetching);
    ɵɵadvance(1);
    ɵɵproperty("hasConsoleCss", false);
} }
class AccountLayoutComponent {
    constructor(layoutStateService, bm, mediaMatcher, router, route, msg, reuseTabSrv, el, renderer, srv, doc) {
        this.layoutStateService = layoutStateService;
        this.router = router;
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
        const routerData = Object.assign({ hasAllNav: false, hasSidebar: true }, route.snapshot.data);
        //this.hasAllNav = routerData.hasAllNav === true;
        //this.hasSidebar = routerData.hasSidebar === true;
        // scroll to top in change page
        router.events.subscribe((evt) => {
            if (!this.isFetching && evt instanceof RouteConfigLoadStart) {
                this.isFetching = true;
                this.scrollToTop();
            }
            if (evt instanceof NavigationError) {
                this.isFetching = false;
                msg.error(`无法加载${evt.url}路由`, { nzDuration: 1000 * 3 });
                return;
            }
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            this.isFetching = false;
            // If have already cached router, should be don't need scroll to top
            if (reuseTabSrv.exists(evt.url)) {
                return;
            }
            this.scrollToTop();
        });
        // media
        const query = {
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
        ]).subscribe(() => {
            this.queryCls = Object.keys(query).find((key) => mediaMatcher.matchMedia(query[key]).matches);
            this.setClass();
        });
    }
    get isMobile() {
        return this.srv.isMobile;
    }
    get body() {
        return this.doc.body;
    }
    get isCurrentPath() {
        return this.router.createUrlTree(['./'], { relativeTo: this.route }).toString() === this.router.routerState.snapshot.url.toString();
    }
    get parentPath() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var parentPath = (_e = (_d = (_c = (_b = (_a = this.layoutStateService) === null || _a === void 0 ? void 0 : _a.routesProcessor) === null || _b === void 0 ? void 0 : _b.CurrentRoute) === null || _c === void 0 ? void 0 : _c.parent) === null || _d === void 0 ? void 0 : _d.path) !== null && _e !== void 0 ? _e : "/";
        var parentPathLength = parentPath.split("/").length;
        var url = (_h = (_g = (_f = this.layoutStateService) === null || _f === void 0 ? void 0 : _f.routesProcessor) === null || _g === void 0 ? void 0 : _g.CurrentUrl) !== null && _h !== void 0 ? _h : "/";
        var urlArray = url.split("/").filter((x, i) => i < parentPathLength);
        return urlArray.toString().replace(/,/g, "/");
    }
    scrollToTop() {
        const el = this.doc.querySelector('.alain-ms__product-body');
        if (!el) {
            return;
        }
        el.scrollTop = 0;
    }
    setClass() {
        const { el, renderer, queryCls } = this;
        updateHostClass(el.nativeElement, renderer, {
            ['alain-ms']: true,
            [queryCls]: true,
        }, true);
    }
    setBodyClass() {
        const { hasTopbar, hasSidebar, hasFixed, colorWeak } = this.srv.layout;
        updateHostClass(this.body, this.renderer, {
            'color-weak': colorWeak,
            ['alain-ms__has-topbar']: hasTopbar,
            ['alain-ms__has-sidebar']: hasSidebar,
            ['alain-ms__has-fixed']: hasFixed,
        });
    }
    ngOnInit() {
        this.notify$ = this.srv.notify.subscribe(() => {
            this.setClass();
            this.setBodyClass();
        });
    }
    ngOnDestroy() {
        this.notify$.unsubscribe();
        this.body.classList.remove('alain-ms__has-topbar', 'alain-ms__has-sidebar', 'alain-ms__has-fixed');
    }
}
AccountLayoutComponent.ɵfac = function AccountLayoutComponent_Factory(t) { return new (t || AccountLayoutComponent)(ɵɵdirectiveInject(LayoutStateService), ɵɵdirectiveInject(BreakpointObserver), ɵɵdirectiveInject(MediaMatcher), ɵɵdirectiveInject(Router), ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(NzMessageService), ɵɵdirectiveInject(ReuseTabService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(BrandService), ɵɵdirectiveInject(DOCUMENT)); };
AccountLayoutComponent.ɵcmp = ɵɵdefineComponent({ type: AccountLayoutComponent, selectors: [["abp-account-layout"]], decls: 2, vars: 3, consts: [[4, "ngIf"], [1, "brand-page-loading", 3, "hidden"], ["nzSpinning", ""], [1, "alain-ms__body", 3, "hidden"], [3, "hasConsoleCss"]], template: function AccountLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, AccountLayoutComponent_ng_container_0_Template, 7, 3, "ng-container", 0);
        ɵɵpipe(1, "async");
    } if (rf & 2) {
        ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.store$));
    } }, directives: [NgIf, MSTopbarComponent, NzSpinComponent, MSServiceLayoutComponent, RouterOutlet], pipes: [AsyncPipe], styles: [".pri-btn[_ngcontent-%COMP%]{border:1px solid #ddd;color:#000;background:#fff;font-size:8px}.pri-btn[_ngcontent-%COMP%]:hover{border:1px solid #26d7eb;color:#26d7eb}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(AccountLayoutComponent, [{
        type: Component,
        args: [{
                selector: 'abp-account-layout',
                templateUrl: './account-layout.component.html',
                styleUrls: ['./account-layout.component.less'],
            }]
    }], function () { return [{ type: LayoutStateService }, { type: BreakpointObserver }, { type: MediaMatcher }, { type: Router }, { type: ActivatedRoute }, { type: NzMessageService }, { type: ReuseTabService }, { type: ElementRef }, { type: Renderer2 }, { type: BrandService }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, null); })();

function ApplicationLayoutComponent_ng_container_0_ms_sidebar_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "ms-sidebar");
} }
function ApplicationLayoutComponent_ng_container_0_div_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div");
} }
function ApplicationLayoutComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "ms-topbar", 2);
    ɵɵtemplate(2, ApplicationLayoutComponent_ng_container_0_ms_sidebar_2_Template, 1, 0, "ms-sidebar", 0);
    ɵɵelementStart(3, "div", 3);
    ɵɵelement(4, "nz-spin", 4);
    ɵɵelementEnd();
    ɵɵelementStart(5, "div", 5);
    ɵɵelementStart(6, "service-layout", 6);
    ɵɵtemplate(7, ApplicationLayoutComponent_ng_container_0_div_7_Template, 1, 0, "div", 7);
    ɵɵelement(8, "router-outlet");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const store_r3 = ctx.ngIf;
    ɵɵnextContext();
    const _r1 = ɵɵreference(3);
    ɵɵadvance(1);
    ɵɵproperty("allNav", store_r3.sidebarConfig.hasAllNav);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", store_r3.sidebarConfig.hasSidebar);
    ɵɵadvance(1);
    ɵɵproperty("hidden", !store_r3.isFetching);
    ɵɵadvance(2);
    ɵɵproperty("hidden", store_r3.isFetching);
    ɵɵadvance(1);
    ɵɵproperty("nav", store_r3.sidebarConfig.hasPageNav)("navConfig", store_r3.navConfig)("navList", store_r3.pageNavs);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r1);
} }
const _c0 = function (a0) { return [a0]; };
function ApplicationLayoutComponent_ng_template_2_ng_template_1_span_0_button_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "button", 12);
    ɵɵtext(1, "\u8FD4\u56DE");
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = ɵɵnextContext(4);
    ɵɵproperty("routerLink", ɵɵpureFunction1(1, _c0, ctx_r11.parentPath));
} }
function ApplicationLayoutComponent_ng_template_2_ng_template_1_span_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtemplate(1, ApplicationLayoutComponent_ng_template_2_ng_template_1_span_0_button_1_Template, 2, 3, "button", 11);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r10.isCurrentPath);
} }
function ApplicationLayoutComponent_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, ApplicationLayoutComponent_ng_template_2_ng_template_1_span_0_Template, 2, 1, "span", 0);
} if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", ctx_r7.layoutStateService == null ? null : ctx_r7.layoutStateService.routesProcessor == null ? null : ctx_r7.layoutStateService.routesProcessor.RouterState);
} }
function ApplicationLayoutComponent_ng_template_2_ng_template_3_span_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r12 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, ctx_r12.layoutStateService == null ? null : ctx_r12.layoutStateService.routesProcessor == null ? null : ctx_r12.layoutStateService.routesProcessor.CurrentRoute == null ? null : ctx_r12.layoutStateService.routesProcessor.CurrentRoute.name), " ");
} }
function ApplicationLayoutComponent_ng_template_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, ApplicationLayoutComponent_ng_template_2_ng_template_3_span_0_Template, 3, 3, "span", 0);
} if (rf & 2) {
    const ctx_r9 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", ctx_r9.layoutStateService == null ? null : ctx_r9.layoutStateService.routesProcessor == null ? null : ctx_r9.layoutStateService.routesProcessor.RouterState);
} }
function ApplicationLayoutComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "page-bar", 8);
    ɵɵtemplate(1, ApplicationLayoutComponent_ng_template_2_ng_template_1_Template, 1, 1, "ng-template", null, 9, ɵɵtemplateRefExtractor);
    ɵɵtemplate(3, ApplicationLayoutComponent_ng_template_2_ng_template_3_Template, 1, 1, "ng-template", null, 10, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
} if (rf & 2) {
    const _r6 = ɵɵreference(2);
    const _r8 = ɵɵreference(4);
    ɵɵproperty("subTitle", _r6)("title", _r8);
} }
class ApplicationLayoutComponent {
    constructor(layoutStateService, bm, mediaMatcher, router, route, msg, reuseTabSrv, el, renderer, srv, doc) {
        this.layoutStateService = layoutStateService;
        this.router = router;
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
        const routerData = Object.assign({ hasAllNav: false, hasSidebar: true }, route.snapshot.data);
        //this.hasAllNav = routerData.hasAllNav === true;
        //this.hasSidebar = routerData.hasSidebar === true;
        // scroll to top in change page
        router.events.subscribe((evt) => {
            if (!this.isFetching && evt instanceof RouteConfigLoadStart) {
                this.isFetching = true;
                this.scrollToTop();
            }
            if (evt instanceof NavigationError) {
                this.isFetching = false;
                msg.error(`无法加载${evt.url}路由`, { nzDuration: 1000 * 3 });
                return;
            }
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            this.isFetching = false;
            // If have already cached router, should be don't need scroll to top
            if (reuseTabSrv.exists(evt.url)) {
                return;
            }
            this.scrollToTop();
        });
        // media
        const query = {
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
        ]).subscribe(() => {
            this.queryCls = Object.keys(query).find((key) => mediaMatcher.matchMedia(query[key]).matches);
            this.setClass();
        });
    }
    get isMobile() {
        return this.srv.isMobile;
    }
    get body() {
        return this.doc.body;
    }
    get isCurrentPath() {
        return this.router.createUrlTree(['./'], { relativeTo: this.route }).toString() === this.router.routerState.snapshot.url.toString();
    }
    get parentPath() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var parentPath = (_e = (_d = (_c = (_b = (_a = this.layoutStateService) === null || _a === void 0 ? void 0 : _a.routesProcessor) === null || _b === void 0 ? void 0 : _b.CurrentRoute) === null || _c === void 0 ? void 0 : _c.parent) === null || _d === void 0 ? void 0 : _d.path) !== null && _e !== void 0 ? _e : "/";
        var parentPathLength = parentPath.split("/").length;
        var url = (_h = (_g = (_f = this.layoutStateService) === null || _f === void 0 ? void 0 : _f.routesProcessor) === null || _g === void 0 ? void 0 : _g.CurrentUrl) !== null && _h !== void 0 ? _h : "/";
        var urlArray = url.split("/").filter((x, i) => i < parentPathLength);
        return urlArray.toString().replace(/,/g, "/");
    }
    scrollToTop() {
        const el = this.doc.querySelector('.alain-ms__product-body');
        if (!el) {
            return;
        }
        el.scrollTop = 0;
    }
    setClass() {
        const { el, renderer, queryCls } = this;
        updateHostClass(el.nativeElement, renderer, {
            ['alain-ms']: true,
            [queryCls]: true,
        }, true);
    }
    setBodyClass() {
        const { hasTopbar, hasSidebar, hasFixed, colorWeak } = this.srv.layout;
        updateHostClass(this.body, this.renderer, {
            'color-weak': colorWeak,
            ['alain-ms__has-topbar']: hasTopbar,
            ['alain-ms__has-sidebar']: hasSidebar,
            ['alain-ms__has-fixed']: hasFixed,
        });
    }
    ngOnInit() {
        this.notify$ = this.srv.notify.subscribe(() => {
            this.setClass();
            this.setBodyClass();
        });
    }
    ngOnDestroy() {
        this.notify$.unsubscribe();
        this.body.classList.remove('alain-ms__has-topbar', 'alain-ms__has-sidebar', 'alain-ms__has-fixed');
    }
}
ApplicationLayoutComponent.ɵfac = function ApplicationLayoutComponent_Factory(t) { return new (t || ApplicationLayoutComponent)(ɵɵdirectiveInject(LayoutStateService), ɵɵdirectiveInject(BreakpointObserver), ɵɵdirectiveInject(MediaMatcher), ɵɵdirectiveInject(Router), ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(NzMessageService), ɵɵdirectiveInject(ReuseTabService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(BrandService), ɵɵdirectiveInject(DOCUMENT)); };
ApplicationLayoutComponent.ɵcmp = ɵɵdefineComponent({ type: ApplicationLayoutComponent, selectors: [["abp-application-layout"]], decls: 4, vars: 3, consts: [[4, "ngIf"], ["FsPageBar", ""], [3, "allNav"], [1, "brand-page-loading", 3, "hidden"], ["nzSpinning", ""], [1, "alain-ms__body", 3, "hidden"], [3, "nav", "navConfig", "navList"], [4, "ngTemplateOutlet"], [3, "subTitle", "title"], ["subTitleTpl", ""], ["titleTpl", ""], ["type", "button", "class", "pri-btn", 3, "routerLink", 4, "ngIf"], ["type", "button", 1, "pri-btn", 3, "routerLink"]], template: function ApplicationLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, ApplicationLayoutComponent_ng_container_0_Template, 9, 8, "ng-container", 0);
        ɵɵpipe(1, "async");
        ɵɵtemplate(2, ApplicationLayoutComponent_ng_template_2_Template, 5, 2, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.store$));
    } }, directives: [NgIf, MSTopbarComponent, NzSpinComponent, MSServiceLayoutComponent, NgTemplateOutlet, RouterOutlet, MSSidebarComponent, MSPageBarComponent, RouterLink], pipes: [AsyncPipe, LocalizationPipe], styles: [".pri-btn[_ngcontent-%COMP%]{border:1px solid #ddd;color:#000;background:#fff;font-size:8px}.pri-btn[_ngcontent-%COMP%]:hover{border:1px solid #26d7eb;color:#26d7eb}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ApplicationLayoutComponent, [{
        type: Component,
        args: [{
                selector: 'abp-application-layout',
                templateUrl: './application-layout.component.html',
                styleUrls: ['./application-layout.component.less'],
            }]
    }], function () { return [{ type: LayoutStateService }, { type: BreakpointObserver }, { type: MediaMatcher }, { type: Router }, { type: ActivatedRoute }, { type: NzMessageService }, { type: ReuseTabService }, { type: ElementRef }, { type: Renderer2 }, { type: BrandService }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, null); })();

var styles = `
.content-header-title {
    font-size: 24px;
}
.entry-row {
    margin-bottom: 15px;
}
#main-navbar-tools a.dropdown-toggle {
    text-decoration: none;
    color: #fff;
}
.navbar .dropdown-submenu {
    position: relative;
}
.navbar .dropdown-menu {
    margin: 0;
    padding: 0;
}
.navbar .dropdown-menu a {
    font-size: .9em;
    padding: 10px 15px;
    display: block;
    min-width: 210px;
    text-align: left;
    border-radius: 0.25rem;
    min-height: 44px;
}
[dir=rtl] .navbar .dropdown-menu a {
    text-align: right!important;
}
.navbar .dropdown-submenu a::after {
    transform: rotate(-90deg);
    position: absolute;
    right: 16px;
    top: 18px;
}
[dir=rtl] .navbar .dropdown-submenu a::after {
    transform: rotate(90deg);
    left: 16px;
    right: auto;
    top: 20px;
}
.navbar .dropdown-submenu .dropdown-menu {
    top: 0;
    left: 100%;
}
.card-header .btn {
    padding: 2px 6px;
}
.card-header h5 {
    margin: 0;
}
.container > .card {
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
}
@media screen and (min-width: 992px) {
    .navbar .dropdown:hover > .dropdown-menu {
        display: block;
    }

    .navbar .dropdown-submenu:hover > .dropdown-menu {
        display: block;
    }
}
.input-validation-error {
    border-color: #dc3545;
}
.field-validation-error {
    font-size: 0.8em;
}
.ui-table .ui-table-tbody > tr.empty-row > div.empty-row-content {
    border: 1px solid #c8c8c8;
  }
.abp-loading {
    background: rgba(0, 0, 0, 0.05);
}
.modal-backdrop {
background-color: rgba(0, 0, 0, 0.6);
}

.confirmation .confirmation-backdrop {
	 background: rgba(0, 0, 0, 0.7) !important;
}
 .confirmation .confirmation-dialog {
	 border: none;
	 border-radius: 10px;
	 background-color: #fff;
	 box-shadow: 0 0 10px -5px rgba(0, 0, 0, 0.5);
}
 .confirmation .confirmation-dialog .icon-container .icon {
	 stroke: #fff;
	 color: #fff;
}
 .confirmation .confirmation-dialog .icon-container.info .icon {
	 stroke: #2f96b4;
	 color: #2f96b4;
}
 .confirmation .confirmation-dialog .icon-container.success .icon {
	 stroke: #51a351;
	 color: #51a351;
}
 .confirmation .confirmation-dialog .icon-container.warning .icon {
	 stroke: #f89406;
	 color: #f89406;
}
 .confirmation .confirmation-dialog .icon-container.error .icon {
	 stroke: #bd362f;
	 color: #bd362f;
}
 .confirmation .confirmation-dialog .content .title {
	 color: #222;
}
 .confirmation .confirmation-dialog .content .message {
	 color: #777;
}
 .confirmation .confirmation-dialog .footer {
	 background: transparent;
}
 .confirmation .confirmation-dialog .footer .confirmation-button {
	 background-color: #eee;
	 color: #777;
}
 .confirmation .confirmation-dialog .footer .confirmation-button:hover, .confirmation .confirmation-dialog .footer .confirmation-button:focus, .confirmation .confirmation-dialog .footer .confirmation-button:active {
	 background-color: #bbb;
}
 .confirmation .confirmation-dialog .footer .confirmation-button--confirm {
	 background-color: #2f96b4;
	 color: #fff;
}
 .confirmation .confirmation-dialog .footer .confirmation-button--confirm:hover {
	 background-color: #2e819b;
}
.ui-table .pagination-wrapper {
    background-color: #f4f4f4;
    border: 1px solid #c8c8c8;
}
.bordered .datatable-body-row {
    border-top: 1px solid #eee;
    margin-top: -1px;
}
`;

const NG_ALAIN_MS_THEME_STYLES_PROVIDERS = [
    {
        provide: APP_INITIALIZER,
        useFactory: configureStyles$1,
        deps: [Injector],
        multi: true,
    },
];
function configureStyles$1(injector) {
    return () => {
        const replaceableComponents = injector.get(ReplaceableComponentsService);
        const domInsertion = injector.get(DomInsertionService);
        domInsertion.insertContent(CONTENT_STRATEGY.AppendStyleToHead(styles));
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
        component: MSLayoutComponent,
    });
}

const NG_ALAIN_MS_THEME_NAV_ITEM_PROVIDERS = [
    {
        provide: APP_INITIALIZER,
        useFactory: configureNavItems,
        deps: [NavItemsService],
        multi: true,
    },
];
function configureNavItems(navItems) {
    return () => {
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

class ThemeAlainMsModule {
    static forRoot() {
        return {
            ngModule: RootModule,
            providers: [
                NG_ALAIN_MS_THEME_STYLES_PROVIDERS,
                NG_ALAIN_MS_THEME_NAV_ITEM_PROVIDERS
            ]
        };
    }
}
ThemeAlainMsModule.ɵfac = function ThemeAlainMsModule_Factory(t) { return new (t || ThemeAlainMsModule)(); };
ThemeAlainMsModule.ɵmod = ɵɵdefineNgModule({ type: ThemeAlainMsModule });
ThemeAlainMsModule.ɵinj = ɵɵdefineInjector({ imports: [[
            CoreModule,
            LayoutModule,
            NzSpinModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(ThemeAlainMsModule, { declarations: [ApplicationLayoutComponent, AccountLayoutComponent], imports: [CoreModule,
        LayoutModule,
        NzSpinModule] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ThemeAlainMsModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CoreModule,
                    LayoutModule,
                    NzSpinModule
                ],
                declarations: [ApplicationLayoutComponent, AccountLayoutComponent],
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { ThemeAlainMsModule };
//# sourceMappingURL=fs-tw-theme-alain-ms.js.map

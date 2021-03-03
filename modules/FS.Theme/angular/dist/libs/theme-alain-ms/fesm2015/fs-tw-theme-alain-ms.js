import { NgModule, Injectable, Inject, APP_INITIALIZER, LOCALE_ID, Component, ElementRef, Renderer2, Injector } from '@angular/core';
import { ReplaceableComponentsService, DomInsertionService, CONTENT_STRATEGY, CoreModule } from '@abp/ng.core';
import { AlainThemeModule, SettingsService, TitleService, zh_TW as zh_TW$1, DELON_LOCALE } from '@delon/theme';
import { NzMessageModule, NzMessageService } from 'ng-zorro-antd/message';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { ValidationErrorComponent } from '@abp/ng.theme.basic';
import { DOCUMENT, registerLocaleData } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { zip } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NzIconService } from 'ng-zorro-antd/icon';
import ngLang from '@angular/common/locales/zh';
import { zhCN } from 'date-fns/locale';
import { zh_TW, NZ_I18N, NZ_DATE_LOCALE } from 'ng-zorro-antd/i18n';
import { AlipayCircleOutline, AppstoreOutline, BookOutline, BranchesOutline, CaretRightOutline, CustomerServiceOutline, DesktopOutline, DollarOutline, DownloadOutline, EditOutline, FacebookOutline, FileSearchOutline, FolderOutline, GiftOutline, GithubOutline, GlobalOutline, HeartFill, LockOutline, MailOutline, MenuFoldOutline, PhoneOutline, PieChartOutline, PlusCircleOutline, QrcodeOutline, QuestionCircleFill, QuestionOutline, RollbackOutline, SafetyOutline, ScanOutline, SettingOutline, ShareAltOutline, ShoppingCartOutline, StarFill, StarOutline, SyncOutline, TableOutline, TaobaoCircleOutline, ToTopOutline, ToolOutline, TrophyOutline, UserOutline, WechatOutline, WeiboCircleOutline, WeiboOutline, ZhihuOutline, InfoOutline, BulbOutline, ProfileOutline, ExceptionOutline, LinkOutline } from '@ant-design/icons-angular/icons';
import { LayoutModule, LayoutStateService, BrandService, MSLayoutComponent } from '@fs-tw/theme-alain-ms/layout';
import { RouteConfigLoadStart, NavigationError, NavigationEnd, Router, ActivatedRoute } from '@angular/router';
import { BreakpointObserver, MediaMatcher } from '@angular/cdk/layout';
import { ReuseTabService } from '@delon/abc/reuse-tab';
import { updateHostClass } from '@delon/util';
import { NzSpinModule } from 'ng-zorro-antd/spin';

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
GlobalConfigModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    AlainThemeModule.forRoot(),
                ],
            },] }
];
GlobalConfigModule.ctorParameters = () => [];

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
            zip(this.httpClient.get(`assets/tmp/i18n/zh-TW.json`), this.httpClient.get(`assets/tmp/app-data.json`))
                .pipe(
            // 接收其他拦截器后产生的异常消息
            catchError(([langData, appData]) => {
                resolve(null);
                return [langData, appData];
            }))
                .subscribe(([langData, appData]) => {
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
StartupService.decorators = [
    { type: Injectable }
];
StartupService.ctorParameters = () => [
    { type: NzIconService },
    { type: SettingsService },
    { type: HttpClient },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: TitleService }
];
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
// #endregion

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
RootModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];

class ApplicationLayoutComponent {
    constructor(layoutStateService, bm, mediaMatcher, router, route, msg, reuseTabSrv, el, renderer, srv, doc) {
        this.layoutStateService = layoutStateService;
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
ApplicationLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'abp-application-layout',
                template: "<ng-container *ngIf=\"store$ | async as store\">\n  <ms-topbar [allNav]=\"store.hasAllNav\"></ms-topbar>\n  <ms-sidebar *ngIf=\"store.hasSidebar\"></ms-sidebar>\n  <div class=\"brand-page-loading\" [hidden]=\"!store.isFetching\">\n    <nz-spin nzSpinning></nz-spin>\n  </div>\n  <div class=\"alain-ms__body\" [hidden]=\"store.isFetching\">\n    <service-layout\n      *ngIf=\"store.pageNavs.length > 0\"\n      [nav]=\"store.hasPageNav\"\n      [navConfig]=\"store.navConfig\"\n      [navList]=\"store.pageNavs\"\n    >\n      <page-bar [subTitle]=\"subTitleTpl\" [title]=\"titleTpl\">\n        <ng-template #titleTpl> {{ store.navConfig.doc }} </ng-template>\n        <ng-template #subTitleTpl>\n          <div class=\"text-orange\">\n            \u4EE5\u4E0B\u53EA\u5C55\u793A\u90E8\u5206\u7EC4\u4EF6\uFF0C\u66F4\u591A\u7EC4\u4EF6<a\n              href=\"https://ng.ant.design\"\n              target=\"_blank\"\n              >ng.ant.design</a\n            >\n          </div>\n        </ng-template>\n        <!-- <button (click)=\"msg.success('clean')\" nz-button >\u6E05\u7406</button>\n      <button (click)=\"msg.success('remove')\" nz-button nzDanger >\u79FB\u9664</button>\n      <button (click)=\"msg.success('add')\" nz-button nzType=\"primary\">\u65B0\u589E</button> -->\n      </page-bar>\n      <router-outlet></router-outlet>\n    </service-layout>\n  </div>\n</ng-container>\n"
            },] }
];
ApplicationLayoutComponent.ctorParameters = () => [
    { type: LayoutStateService },
    { type: BreakpointObserver },
    { type: MediaMatcher },
    { type: Router },
    { type: ActivatedRoute },
    { type: NzMessageService },
    { type: ReuseTabService },
    { type: ElementRef },
    { type: Renderer2 },
    { type: BrandService },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];

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

const NGALAINMS_THEME_STYLES_PROVIDERS = [
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
        component: MSLayoutComponent,
    });
    replaceableComponents.add({
        key: "Theme.EmptyLayoutComponent" /* EmptyLayout */,
        component: MSLayoutComponent,
    });
}

class ThemeAlainMsModule {
    static forRoot() {
        return {
            ngModule: RootModule,
            providers: [
                NGALAINMS_THEME_STYLES_PROVIDERS,
            ]
        };
    }
}
ThemeAlainMsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CoreModule,
                    LayoutModule,
                    NzSpinModule
                ],
                declarations: [ApplicationLayoutComponent],
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { ThemeAlainMsModule, ApplicationLayoutComponent as ɵa, RootModule as ɵb, GlobalConfigModule as ɵc, StartupService as ɵd, StartupServiceFactory as ɵe, APPINIT_PROVIDES as ɵf, LANG as ɵg, LANG_PROVIDES as ɵh, STYLES_PROVIDERS as ɵi, configureStyles as ɵj, NGALAINMS_THEME_STYLES_PROVIDERS as ɵk, configureStyles$1 as ɵl };
//# sourceMappingURL=fs-tw-theme-alain-ms.js.map

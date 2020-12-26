import { Component, APP_INITIALIZER, Injector, NgModule, LOCALE_ID } from '@angular/core';
import { ReplaceableComponentsService, DomInsertionService, CONTENT_STRATEGY, CoreModule } from '@abp/ng.core';
import { HeaderFullScreenComponent, LayoutBasicComponent, LayoutPassportComponent, LayoutBlankComponent, LayoutModule } from '@fs/theme-alain/layout';
import { NavItemsService } from '@abp/ng.theme.shared';
import { AlainThemeModule, zh_TW as zh_TW$1, DELON_LOCALE } from '@delon/theme';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { ValidationErrorComponent } from '@abp/ng.theme.basic';
import ngLang from '@angular/common/locales/zh';
import { zhCN } from 'date-fns/locale';
import { zh_TW, NZ_I18N, NZ_DATE_LOCALE } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import { NzIconService, NzIconModule } from 'ng-zorro-antd/icon';
import { AlipayCircleOutline, ApiOutline, AppstoreOutline, ArrowDownOutline, BookOutline, CloudOutline, CopyrightOutline, CustomerServiceOutline, DashboardOutline, DatabaseOutline, DingdingOutline, DislikeOutline, DownloadOutline, ForkOutline, FrownOutline, FullscreenExitOutline, FullscreenOutline, GithubOutline, GlobalOutline, HddOutline, LaptopOutline, LikeOutline, LockOutline, LogoutOutline, MailOutline, MenuFoldOutline, MenuUnfoldOutline, MessageOutline, PayCircleOutline, PieChartOutline, PrinterOutline, RocketOutline, ScanOutline, SettingOutline, ShareAltOutline, ShoppingCartOutline, SoundOutline, StarOutline, TaobaoCircleOutline, TaobaoOutline, TeamOutline, ToolOutline, TrophyOutline, UsbOutline, UserOutline, WeiboCircleOutline, InfoOutline, BulbOutline, ProfileOutline, ExceptionOutline, LinkOutline } from '@ant-design/icons-angular/icons';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { LayoutDefaultModule } from '@delon/theme/layout-default';

class CurrentUserComponent {
    constructor() { }
    ngOnInit() {
    }
}
CurrentUserComponent.decorators = [
    { type: Component, args: [{
                selector: 'abp-current-user',
                template: '<header-user></header-user>'
            },] }
];
CurrentUserComponent.ctorParameters = () => [];

class LanguagesComponent {
    constructor() { }
    ngOnInit() {
    }
}
LanguagesComponent.decorators = [
    { type: Component, args: [{
                selector: 'abp-languages',
                template: "<div layout-default-header-item-trigger nz-dropdown [nzDropdownMenu]=\"settingsMenu\" nzTrigger=\"click\"\r\n    nzPlacement=\"bottomRight\">\r\n    <i nz-icon nzType=\"setting\"></i>\r\n</div>\r\n<nz-dropdown-menu #settingsMenu=\"nzDropdownMenu\">\r\n    <div nz-menu style=\"width: 200px;\">\r\n        <div nz-menu-item>\r\n            <header-i18n></header-i18n>\r\n        </div>\r\n    </div>\r\n</nz-dropdown-menu>",
                styles: [""]
            },] }
];
LanguagesComponent.ctorParameters = () => [];

const NGALAIN_THEME_NAV_ITEM_PROVIDERS = [
    {
        provide: APP_INITIALIZER,
        useFactory: configureNavItems,
        deps: [NavItemsService],
        multi: true,
    },
];
function configureNavItems(navItems) {
    return () => {
        navItems.addItems([
            {
                id: "Theme.LanguagesComponent" /* Languages */,
                order: 1,
                component: LanguagesComponent,
                data: {
                    direction: 'right'
                }
            },
            {
                id: "Theme.FullScreenComponent" /* FullScreen */,
                order: 2,
                component: HeaderFullScreenComponent,
                data: {
                    direction: 'right'
                }
            },
            {
                id: "Theme.CurrentUserComponent" /* CurrentUser */,
                order: 999,
                component: CurrentUserComponent,
                data: {
                    direction: 'right'
                }
            }
        ]);
    };
}

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

const NGALAIN_THEME_STYLES_PROVIDERS = [
    {
        provide: APP_INITIALIZER,
        useFactory: configureStyles,
        deps: [Injector],
        multi: true,
    },
];
function configureStyles(injector) {
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
        component: LayoutBasicComponent,
    });
    replaceableComponents.add({
        key: "Theme.AccountLayoutComponent" /* AccountLayout */,
        component: LayoutPassportComponent,
    });
    replaceableComponents.add({
        key: "Theme.EmptyLayoutComponent" /* EmptyLayout */,
        component: LayoutBlankComponent,
    });
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
const alainConfig = {
    st: { modal: { size: 'lg' } },
    pageHeader: { homeI18n: 'home' },
    lodop: {
        license: `A59B099A586B3851E0F0D7FDBF37B603`,
        licenseA: `C94CEE276DB2187AE6B65D56B3FC2848`,
    },
    auth: { login_url: '/passport/login' },
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
    ApiOutline,
    AppstoreOutline,
    ArrowDownOutline,
    BookOutline,
    CloudOutline,
    CopyrightOutline,
    CustomerServiceOutline,
    DashboardOutline,
    DatabaseOutline,
    DingdingOutline,
    DislikeOutline,
    DownloadOutline,
    ForkOutline,
    FrownOutline,
    FullscreenExitOutline,
    FullscreenOutline,
    GithubOutline,
    GlobalOutline,
    HddOutline,
    LaptopOutline,
    LikeOutline,
    LockOutline,
    LogoutOutline,
    MailOutline,
    MenuFoldOutline,
    MenuUnfoldOutline,
    MessageOutline,
    PayCircleOutline,
    PieChartOutline,
    PrinterOutline,
    RocketOutline,
    ScanOutline,
    SettingOutline,
    ShareAltOutline,
    ShoppingCartOutline,
    SoundOutline,
    StarOutline,
    TaobaoCircleOutline,
    TaobaoOutline,
    TeamOutline,
    ToolOutline,
    TrophyOutline,
    UsbOutline,
    UserOutline,
    WeiboCircleOutline
];

// Custom icon static resources
const ICONS = [InfoOutline, BulbOutline, ProfileOutline, ExceptionOutline, LinkOutline];

const STYLES_PROVIDERS = [
    {
        provide: APP_INITIALIZER,
        useFactory: configureStyles$1,
        deps: [NzIconService],
        multi: true,
    },
];
function configureStyles$1(iconSrv) {
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
                    ...LANG_PROVIDES,
                    STYLES_PROVIDERS
                ],
            },] }
];

// tslint:disable: no-duplicate-imports
class ThemeAlainModule {
    static forRoot() {
        return {
            ngModule: RootModule,
            providers: [
                NGALAIN_THEME_STYLES_PROVIDERS,
                NGALAIN_THEME_NAV_ITEM_PROVIDERS
            ]
        };
    }
}
ThemeAlainModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CoreModule,
                    NzDropDownModule,
                    NzIconModule,
                    LayoutDefaultModule,
                    LayoutModule,
                ],
                providers: [],
                declarations: [
                    LanguagesComponent,
                    CurrentUserComponent
                ]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { ThemeAlainModule, LanguagesComponent as ɵa, CurrentUserComponent as ɵb, RootModule as ɵc, GlobalConfigModule as ɵd, LANG as ɵe, LANG_PROVIDES as ɵf, STYLES_PROVIDERS as ɵg, configureStyles$1 as ɵh, NGALAIN_THEME_STYLES_PROVIDERS as ɵi, configureStyles as ɵj, NGALAIN_THEME_NAV_ITEM_PROVIDERS as ɵk, configureNavItems as ɵl };
//# sourceMappingURL=fs-theme-alain.js.map

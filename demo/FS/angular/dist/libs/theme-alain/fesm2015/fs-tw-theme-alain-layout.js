import { ConfigStateService, SessionStateService, RoutesService, LocalizationPipe, PermissionService, CoreModule } from '@abp/ng.core';
import { Component, ChangeDetectionStrategy, HostListener, Input, Inject, APP_INITIALIZER, Injector, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { LayoutDefaultModule } from '@delon/theme/layout-default';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NavItemsService } from '@abp/ng.theme.shared';
import { map } from 'rxjs/operators';
import * as screenfull from 'screenfull';
import { __decorate, __metadata } from 'tslib';
import { InputBoolean } from '@delon/util';
import snq from 'snq';
import { AuthService } from '@fs-tw/account';
import { DA_SERVICE_TOKEN } from '@delon/auth';
import { MenuService, SettingsService } from '@delon/theme';

class LayoutBasicComponent {
    constructor(navItems) {
        this.navItems = navItems;
        this.trackByFn = (_, element) => element === null || element === void 0 ? void 0 : element.id;
        this.options = {
            logoExpanded: `./assets/logo-full.svg`,
            logoCollapsed: `./assets/logo.svg`,
        };
        this.navItems$ = this.navItems.items$.pipe(map(x => x.map(y => y)));
    }
}
LayoutBasicComponent.decorators = [
    { type: Component, args: [{
                selector: 'layout-basic',
                template: "<layout-default [options]=\"options\" [asideUser]=\"asideUserTpl\" [content]=\"contentTpl\">\r\n    <ng-container *ngFor=\"let item of navItems$ | async; trackBy: trackByFn\">\r\n\r\n        <layout-default-header-item [direction]=\"item?.data?.direction || 'right'\">\r\n            <ng-container [ngComponentOutlet]=\"item.component\">\r\n            </ng-container>\r\n        </layout-default-header-item>\r\n\r\n    </ng-container>\r\n    <ng-template #asideUserTpl>\r\n\r\n    </ng-template>\r\n    <ng-template #contentTpl>\r\n        <router-outlet></router-outlet>\r\n    </ng-template>\r\n</layout-default>"
            },] }
];
LayoutBasicComponent.ctorParameters = () => [
    { type: NavItemsService }
];

class HeaderFullScreenComponent {
    constructor() {
        this.status = false;
    }
    get sf() {
        return screenfull;
    }
    _resize() {
        this.status = this.sf.isFullscreen;
    }
    _click() {
        if (this.sf.isEnabled) {
            this.sf.toggle();
        }
    }
}
HeaderFullScreenComponent.decorators = [
    { type: Component, args: [{
                selector: 'header-fullscreen',
                template: `
  <div layout-default-header-item-trigger nzPlacement="bottomRight">
    <i nz-icon [nzType]="status ? 'fullscreen-exit' : 'fullscreen'"></i>
  </div>
  `,
                // tslint:disable-next-line: no-host-metadata-property
                host: {
                    '[class.d-block]': 'true',
                },
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
HeaderFullScreenComponent.propDecorators = {
    _resize: [{ type: HostListener, args: ['window:resize',] }],
    _click: [{ type: HostListener, args: ['click',] }]
};

class HeaderI18nComponent {
    constructor(configState, sessionState) {
        this.configState = configState;
        this.sessionState = sessionState;
        this.showLangText = true;
        this.languages$ = this.configState.getDeep$('localization.languages');
    }
    get defaultLanguage$() {
        return this.languages$.pipe(map(languages => {
            const lang = snq(() => languages.find(language => language.cultureName === this.selectedLangCulture), {});
            return {
                displayName: lang.displayName || '',
                flagIcon: lang.flagIcon,
            };
        }));
    }
    get dropdownLanguages$() {
        return this.languages$.pipe(map(languages => snq(() => languages.filter(lang => lang.cultureName !== this.selectedLangCulture)), []));
    }
    get selectedLangCulture() {
        return this.sessionState.getLanguage();
    }
    change(cultureName) {
        this.sessionState.setLanguage(cultureName);
    }
}
HeaderI18nComponent.decorators = [
    { type: Component, args: [{
                selector: 'header-i18n',
                template: "<ng-container *ngIf=\"defaultLanguage$ | async as defaultLang\">\r\n    <i *ngIf=\"!showLangText\" nz-dropdown [nzDropdownMenu]=\"langMenu\" nzPlacement=\"bottomRight\" nz-icon\r\n        nzType=\"global\"></i>\r\n    <div *ngIf=\"showLangText\" nz-dropdown [nzDropdownMenu]=\"langMenu\" nzPlacement=\"bottomRight\">\r\n        <i nz-icon nzType=\"global\"></i>\r\n        {{ defaultLang.displayName }}\r\n        <i nz-icon nzType=\"down\"></i>\r\n    </div>\r\n    <nz-dropdown-menu #langMenu=\"nzDropdownMenu\">\r\n        <ul nz-menu>\r\n            <li nz-menu-item *ngFor=\"let lang of (dropdownLanguages$ | async)\"\r\n                [nzSelected]=\"lang.displayName === defaultLang.displayName\" (click)=\"change(lang.cultureName)\">\r\n                {{ lang?.displayName }}\r\n            </li>\r\n        </ul>\r\n    </nz-dropdown-menu>\r\n</ng-container>",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
HeaderI18nComponent.ctorParameters = () => [
    { type: ConfigStateService },
    { type: SessionStateService }
];
HeaderI18nComponent.propDecorators = {
    showLangText: [{ type: Input }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], HeaderI18nComponent.prototype, "showLangText", void 0);

class HeaderUserComponent {
    constructor(authService, router, configStateService) {
        this.authService = authService;
        this.router = router;
        this.configStateService = configStateService;
        this.currentUser$ = this.configStateService.getOne$('currentUser');
    }
    initLogin() {
        this.authService.initLogin();
    }
    logout() {
        this.authService.logout().subscribe(() => {
            this.router.navigate(['/'], { state: { redirectUrl: this.router.url } });
        });
    }
}
HeaderUserComponent.decorators = [
    { type: Component, args: [{
                selector: 'header-user',
                template: "<ng-template #loginBtnTpl>\r\n    <div class=\"alain-default__nav-item d-flex align-items-center px-sm\" nz-dropdown nzPlacement=\"bottomRight\"\r\n        (click)=\"initLogin()\">\r\n        {{'AbpAccount::Login' | abpLocalization}}\r\n    </div>\r\n</ng-template>\r\n<ng-container *ngIf=\"(currentUser$ | async)?.isAuthenticated; else loginBtnTpl\">\r\n    <div class=\"alain-default__nav-item d-flex align-items-center px-sm\" nz-dropdown nzPlacement=\"bottomRight\"\r\n        [nzDropdownMenu]=\"userMenu\">\r\n        <!-- <nz-avatar [nzSrc]=\"user.avatar\" nzSize=\"small\" class=\"mr-sm\"></nz-avatar> -->\r\n        {{ (currentUser$ | async)?.userName }}\r\n    </div>\r\n    <nz-dropdown-menu #userMenu=\"nzDropdownMenu\">\r\n        <div nz-menu class=\"width-sm\">\r\n            <div nz-menu-item routerLink=\"/account/manage-profile\">\r\n                <i nz-icon nzType=\"user\" class=\"mr-sm\"></i>\r\n                {{ 'AbpAccount::ManageYourProfile' | abpLocalization }}\r\n            </div>\r\n            <li nz-menu-divider></li> \r\n            <div nz-menu-item (click)=\"logout()\">\r\n                <i nz-icon nzType=\"logout\" class=\"mr-sm\"></i>\r\n                {{ 'AbpUi::Logout' | abpLocalization }}\r\n            </div>\r\n        </div>\r\n    </nz-dropdown-menu>\r\n</ng-container>",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
HeaderUserComponent.ctorParameters = () => [
    { type: AuthService },
    { type: Router },
    { type: ConfigStateService }
];

class LayoutBlankComponent {
}
LayoutBlankComponent.decorators = [
    { type: Component, args: [{
                selector: 'layout-blank',
                template: `<router-outlet></router-outlet> `,
                // tslint:disable-next-line: no-host-metadata-property
                host: {
                    '[class.alain-blank]': 'true',
                }
            },] }
];

class LayoutPassportComponent {
    constructor(tokenService) {
        this.tokenService = tokenService;
        this.links = [
            {
                title: '帮助',
                href: '',
            },
            {
                title: '隐私',
                href: '',
            },
            {
                title: '条款',
                href: '',
            },
        ];
    }
    ngOnInit() {
        this.tokenService.clear();
    }
}
LayoutPassportComponent.decorators = [
    { type: Component, args: [{
                selector: 'layout-passport',
                template: "<div class=\"container\">\r\n  <header-i18n showLangText=\"false\" class=\"langs\"></header-i18n>\r\n  <div class=\"wrap\">\r\n    <div class=\"top\">\r\n      <div class=\"head\">\r\n        <img class=\"logo\" src=\"./assets/logo-color.svg\" />\r\n        <span class=\"title\">ng-alain</span>\r\n      </div>\r\n      <div class=\"desc\">FS Demo</div>\r\n    </div>\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n",
                styles: [":host ::ng-deep .container{background:#f0f2f5;display:flex;flex-direction:column;min-height:100%}:host ::ng-deep .langs{height:40px;line-height:44px;text-align:right;width:100%}:host ::ng-deep .langs .anticon{cursor:pointer;font-size:14px;margin-right:24px;margin-top:24px;vertical-align:top}:host ::ng-deep .wrap{flex:1;padding:32px 0}:host ::ng-deep .ant-form-item{display:flex;justify-content:space-between;margin-bottom:24px}@media (min-width:768px){:host ::ng-deep .container{background-image:url(https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg);background-position:center 110px;background-repeat:no-repeat;background-size:100%}:host ::ng-deep .wrap{padding:32px 0 24px}}:host ::ng-deep .top{text-align:center}:host ::ng-deep .header{height:44px;line-height:44px}:host ::ng-deep .header a{text-decoration:none}:host ::ng-deep .logo{height:44px;margin-right:16px}:host ::ng-deep .title{color:rgba(0,0,0,.85);font-family:Myriad Pro,Helvetica Neue,Arial,Helvetica,sans-serif;font-size:33px;font-weight:600;position:relative;vertical-align:middle}:host ::ng-deep .desc{color:rgba(0,0,0,.45);font-size:14px;margin-bottom:40px;margin-top:12px}[data-theme=dark] :host ::ng-deep .container{background:#141414}[data-theme=dark] :host ::ng-deep .title{color:hsla(0,0%,100%,.85)}[data-theme=dark] :host ::ng-deep .desc{color:hsla(0,0%,100%,.45)}@media (min-width:768px){[data-theme=dark] :host ::ng-deep .container{background-image:none}}[data-theme=compact] :host ::ng-deep .ant-form-item{margin-bottom:16px}"]
            },] }
];
LayoutPassportComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DA_SERVICE_TOKEN,] }] }
];

const LAYOUT_MENU_PROVIDERS = [
    {
        provide: APP_INITIALIZER,
        useFactory: configureMenus,
        deps: [Injector],
        multi: true,
    },
];
function configureMenus(injector) {
    return () => {
        const menuService = injector.get(MenuService);
        const routes = injector.get(RoutesService);
        const localizationPipe = injector.get(LocalizationPipe);
        const permissionService = injector.get(PermissionService);
        const settingsService = injector.get(SettingsService);
        routes.visible$.subscribe(x => {
            menuService.clear();
            let condition = x => x.name == 'AbpUiNavigation::Menu:Administration' && isGrantedPolicy(x.requiredPolicy);
            let menus = x.filter(condition).map(r => {
                return mapToMenu(r);
            });
            menuService.add(menus);
        });
        settingsService.notify.subscribe(x => {
            setTimeout(() => { window.dispatchEvent(new Event('resize')); }, 0);
        });
        function mapToMenu(item) {
            const menu = {
                text: localizationPipe.transform(item.name),
                link: item.path,
                icon: item.iconClass,
                children: []
            };
            if (item.children.filter(x => isGrantedPolicy(x.requiredPolicy)).length > 0) {
                menu.children = item.children.map(x => mapToMenu(x));
            }
            return menu;
        }
        function isGrantedPolicy(requiredPolicy) {
            if (!!requiredPolicy) {
                return permissionService.getGrantedPolicy(requiredPolicy);
            }
            return true;
        }
    };
}

const LAYOUTCOMPONENTS = [LayoutBasicComponent, LayoutBlankComponent, LayoutPassportComponent];
const HEADERCOMPONENTS = [
    HeaderI18nComponent,
    HeaderUserComponent,
    HeaderFullScreenComponent
];
class LayoutModule {
    static forRoot() {
        return {
            ngModule: LayoutModule,
            providers: [
                LAYOUT_MENU_PROVIDERS
            ]
        };
    }
}
LayoutModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CoreModule,
                    FormsModule,
                    RouterModule,
                    LayoutDefaultModule,
                    NzDropDownModule,
                    NzIconModule
                ],
                declarations: [...LAYOUTCOMPONENTS, ...HEADERCOMPONENTS],
                exports: [...LAYOUTCOMPONENTS, ...HEADERCOMPONENTS],
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { HeaderFullScreenComponent, HeaderI18nComponent, HeaderUserComponent, LayoutBasicComponent, LayoutBlankComponent, LayoutModule, LayoutPassportComponent, LAYOUT_MENU_PROVIDERS as ɵa, configureMenus as ɵb };
//# sourceMappingURL=fs-tw-theme-alain-layout.js.map

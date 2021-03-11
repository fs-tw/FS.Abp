import { DOCUMENT, CommonModule } from '@angular/common';
import { ɵɵdefineInjectable, ɵɵinject, Injectable, Component, ChangeDetectionStrategy, ChangeDetectorRef, Inject, ViewChild, HostListener, INJECTOR, Injector, Input, EventEmitter, Directive, Output, NgModule, ElementRef, Renderer2, APP_INITIALIZER } from '@angular/core';
import { BehaviorSubject, of, Subject, merge } from 'rxjs';
import { map, takeUntil, auditTime, tap, debounceTime, distinctUntilChanged, switchMap, filter } from 'rxjs/operators';
import { BreakpointObserver, MediaMatcher } from '@angular/cdk/layout';
import { SettingsService, _HttpClient, MenuService, TitleService, AlainThemeModule } from '@delon/theme';
import { ArrayService as ArrayService$1, deepCopy, InputBoolean, updateHostClass } from '@delon/util';
import { RoutesService, LocalizationPipe, ConfigStateService, SessionStateService, InternalStore, EnvironmentService, LocalizationModule, CoreModule } from '@abp/ng.core';
import { ArrayService } from '@delon/util/array';
import snq from 'snq';
import { Router, NavigationEnd, RouterModule, RouteConfigLoadStart, NavigationError, ActivatedRoute, ResolveEnd } from '@angular/router';
import { DA_SERVICE_TOKEN } from '@delon/auth';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AuthService } from '@fs-tw/account';
import { FormsModule } from '@angular/forms';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { __decorate, __metadata } from 'tslib';
import { ReuseTabService } from '@delon/abc/reuse-tab';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ThemeBtnModule } from '@delon/theme/theme-btn';
import { NzAnchorModule } from 'ng-zorro-antd/anchor';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSpinModule } from 'ng-zorro-antd/spin';

var Layout;
(function (Layout) {
    Layout.defaultNavConfig = {
        title: '系統管理',
        doc: '系統管理',
    };
    Layout.defaultSidebarConfig = {
        hasSidebar: true,
        hasAllNav: false,
        hasPageNav: true,
        hasProductNav: false,
    };
})(Layout || (Layout = {}));

/**
 * 用于维护布局数据
 */
class BrandService {
    // #endregion
    constructor(bm, settings) {
        this.settings = settings;
        this.notify$ = new BehaviorSubject(null);
        this._isMobile = false;
        /** 顶部高度，若变更需要同时重新指定 LESS 变量：`@alain-ms-topbar-height` 值 */
        this.topHeight = 50;
        this.hideNav = false;
        // fix layout data
        settings.setLayout(Object.assign(Object.assign({}, settings.layout), { hasTopbar: true, hasSidebar: false, hasFixed: false }));
        const mobileMedia = 'only screen and (max-width: 767.99px)';
        bm.observe(mobileMedia).subscribe((state) => this.checkMedia(state.matches));
        this.checkMedia(bm.isMatched(mobileMedia));
    }
    // #region fields
    get notify() {
        return this.notify$.asObservable();
    }
    get isMobile() {
        return this._isMobile;
    }
    get layout() {
        return this.settings.layout;
    }
    checkMedia(value) {
        this._isMobile = value;
        this.layout.collapsed = this._isMobile;
        this.notify$.next('mobile');
    }
    setLayout(name, value) {
        this.settings.setLayout(name, value);
        this.notify$.next('layout');
    }
    setTopbar(status) {
        this.setLayout('hasTopbar', status);
    }
    setSidebar(status) {
        this.setLayout('hasSidebar', status);
    }
    setFixed(status) {
        this.setLayout('hasFixed', status);
    }
    triggerNotify(type = 'custom') {
        this.notify$.next(type);
    }
    ngOnDestroy() {
        this.notify$.unsubscribe();
    }
}
BrandService.ɵprov = ɵɵdefineInjectable({ factory: function BrandService_Factory() { return new BrandService(ɵɵinject(BreakpointObserver), ɵɵinject(SettingsService)); }, token: BrandService, providedIn: "root" });
BrandService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
BrandService.ctorParameters = () => [
    { type: BreakpointObserver },
    { type: SettingsService }
];

/**
 * 顶部菜单所有菜单数据，几个注意点：
 * - 当前处理的数据源格式为 `./assets/tmp/all-nav-en-US.json`
 * - 最终处理数据以 `all-nav.interface.ts` 系列接口为准
 */
class MSAllNavService {
    constructor(routesService, localizationPipe, http, arrSrv //  @Inject(ALAIN_I18N_TOKEN) private i18nSrv: I18NService
    ) {
        this.routesService = routesService;
        this.localizationPipe = localizationPipe;
        this.http = http;
        this.arrSrv = arrSrv;
    }
    get allL2() {
        return this._data.nav.filter((w) => w.children && w.children.length > 0);
    }
    get allPanel() {
        return this._data.nav.reduce((p, c) => (p = p.concat(c.children ? c.children : c)), []);
    }
    getData() {
        return this._data ? of(this._data) : this.getByHttp();
    }
    fixData(data) {
        const splitColumn = (item) => {
            if (!item.left) {
                return;
            }
            item.leftColumn = item.leftColumn || 2;
            const columns = new Array(item.leftColumn)
                .fill({})
                .map((_, idx) => ({
                list: [],
                count: 0,
                idx,
            }));
            item.left
                .filter((w) => w.list)
                .forEach((category) => {
                const idx = [...columns].sort((a, b) => a.count - b.count)[0].idx;
                columns[idx].list.push(category);
                columns[idx].count += category.list.length;
            });
            item._left = columns;
        };
        data.nav.forEach((p1) => {
            p1.level = 1;
            if (p1.children) {
                p1.children.forEach((p2) => {
                    p2.parent = p1;
                    p2.level = 2;
                    splitColumn(p2);
                });
            }
            else {
                splitColumn(p1);
            }
        });
        return data;
    }
    getByHttp() {
        return this.routesService.tree$.pipe(map((r) => {
            let result = {
                navBottom: [],
                bottomText: 'Further.',
                nav: [],
            };
            result.nav = r
                .filter((x) => !this.routesService.hide(x))
                .map((x) => {
                let allNav = {
                    text: this.localizationPipe.transform(x.name),
                    left: [],
                };
                x.children
                    .filter((y) => !this.routesService.hide(y))
                    .forEach((y) => {
                    var _a;
                    if (((_a = y === null || y === void 0 ? void 0 : y.children) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                        allNav.left.push({
                            text: this.localizationPipe.transform(y.name),
                            list: y.children.map((z) => {
                                return {
                                    text: this.localizationPipe.transform(z.name),
                                    link: z.path,
                                };
                            }),
                        });
                    }
                    else {
                        result.navBottom.push({
                            text: this.localizationPipe.transform(y.name),
                            link: y.path,
                        });
                    }
                });
                return allNav;
            });
            this._data = this.fixData(result);
            return this._data;
        }));
    }
    refreshActive(i) {
        this.arrSrv.visitTree(this._data.nav, (item) => {
            item.active = false;
        });
        while (i) {
            i.active = true;
            i = i.parent;
        }
    }
}
MSAllNavService.ɵprov = ɵɵdefineInjectable({ factory: function MSAllNavService_Factory() { return new MSAllNavService(ɵɵinject(RoutesService), ɵɵinject(LocalizationPipe), ɵɵinject(_HttpClient), ɵɵinject(ArrayService)); }, token: MSAllNavService, providedIn: "root" });
MSAllNavService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
MSAllNavService.ctorParameters = () => [
    { type: RoutesService },
    { type: LocalizationPipe },
    { type: _HttpClient },
    { type: ArrayService$1 }
];

const ANT_TIMEOUT = 150;
/**
 * 顶部所有菜单组件，当单页布局模式时渲染
 */
class MSAllNavComponent {
    constructor(srv, brandSrv, cdr, doc) {
        this.srv = srv;
        this.brandSrv = brandSrv;
        this.cdr = cdr;
        this.doc = doc;
        this.unsubscribe$ = new Subject();
        this.loading = false;
        this.$mouse = new Subject();
        this.open = false;
    }
    get allL2() {
        return this.srv.allL2;
    }
    get allPanel() {
        return this.srv.allPanel;
    }
    get validOpen() {
        return this.data && this.open;
    }
    handleOpen(status) {
        this.doc.body.classList[status ? 'add' : 'remove']('alain-ms__an-body');
        this.open = status;
        this.cdr.markForCheck();
        this.updateHeight().load();
    }
    load() {
        if (this.loading || this.data) {
            return;
        }
        this.loading = true;
        this.srv.getData().subscribe((res) => {
            this.data = res;
            this.cdr.markForCheck();
        });
    }
    updateHeight() {
        const height = window.innerHeight - this.brandSrv.topHeight;
        this.dropdownEl.nativeElement.style.height = `${height}px`;
        return this;
    }
    _enter() {
        if (!this.validOpen) {
            this.handleOpen(true);
        }
    }
    _leave() {
        this.handleOpen(false);
    }
    mouseHandle(i, status) {
        this.$mouse.next({ i, status });
    }
    handleMouse(i) {
        this.srv.refreshActive(i);
        this.cdr.detectChanges();
    }
    ngOnInit() {
        // this._enter();
        const { $mouse, unsubscribe$ } = this;
        $mouse
            .asObservable()
            .pipe(takeUntil(unsubscribe$), auditTime(ANT_TIMEOUT))
            .subscribe((res) => this.handleMouse(res.i));
    }
    ngOnDestroy() {
        const { unsubscribe$ } = this;
        unsubscribe$.next();
        unsubscribe$.complete();
    }
}
MSAllNavComponent.decorators = [
    { type: Component, args: [{
                selector: 'ms-all-nav',
                template: "<div class=\"alain-ms__an-trigger\">\r\n  <i nz-icon nzType=\"bars\"></i>\r\n  <nz-spin *ngIf=\"open && !data\"></nz-spin>\r\n</div>\r\n<ng-template #menuTpl let-ls>\r\n  <ul class=\"alain-ms__an-menu\">\r\n    <li\r\n      *ngFor=\"let i of ls\"\r\n      class=\"alain-ms__an-menu-item\"\r\n      [ngClass]=\"{ 'alain-ms__an-menu-item--active': i.active }\"\r\n      (mouseenter)=\"mouseHandle(i, true)\"\r\n    >\r\n      {{ i.text }}\r\n      <i nz-icon nzType=\"right\"></i>\r\n    </li>\r\n  </ul>\r\n</ng-template>\r\n<ng-template #categoryTpl let-ls>\r\n  <div *ngFor=\"let p of ls\" class=\"alain-ms__an-category\">\r\n    <h3 class=\"alain-ms__an-category-title\">{{ p.text }}</h3>\r\n    <div class=\"alain-ms__an-category-list\">\r\n      <a *ngFor=\"let i of p.list\" [link-to]=\"i\" (linkToChanged)=\"_leave()\" class=\"alain-ms__an-category-link\">\r\n        {{ i.text }}\r\n        <span *ngIf=\"i.tip\" class=\"alain-ms__an-category-tip\">{{ i.tip }}</span>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n<div #dropdown class=\"alain-ms__an-dropdown\">\r\n  <div *ngIf=\"data\" class=\"alain-ms__an\">\r\n    <div class=\"alain-ms__an-panel alain-ms__an-panel-active alain-ms__an-level1\">\r\n      <div class=\"alain-ms__an-panel-inner\">\r\n        <ng-template [ngTemplateOutlet]=\"menuTpl\" [ngTemplateOutletContext]=\"{ $implicit: data.nav }\"></ng-template>\r\n        <div *ngIf=\"data.navBottom\" class=\"alain-ms__an-menu-bottom\">\r\n          <a *ngFor=\"let i of data.navBottom\" [link-to]=\"i\" (linkToChanged)=\"_leave()\">\r\n            {{ i.text }}\r\n            <i nz-icon nzType=\"share-alt\"></i>\r\n          </a>\r\n        </div>\r\n        <div *ngIf=\"data.bottomText\" class=\"alain-ms__an-bottom\">{{ data.bottomText }}</div>\r\n      </div>\r\n    </div>\r\n    <div\r\n      *ngFor=\"let p of allL2\"\r\n      class=\"alain-ms__an-panel alain-ms__an-level2\"\r\n      [ngClass]=\"{ 'alain-ms__an-level2-active': p.active }\"\r\n    >\r\n      <div class=\"alain-ms__an-panel-inner\">\r\n        <ng-template [ngTemplateOutlet]=\"menuTpl\" [ngTemplateOutletContext]=\"{ $implicit: p.children }\"></ng-template>\r\n      </div>\r\n    </div>\r\n    <div\r\n      *ngFor=\"let i of allPanel\"\r\n      class=\"alain-ms__an-content alain-ms__an-level{{ i.level }}-content alain-ms__an-left-col-{{ i.leftColumn }}\"\r\n      [ngClass]=\"{ 'alain-ms__an-content-active': i.active }\"\r\n    >\r\n      <div *ngIf=\"i._left && i._left.length > 0\" class=\"alain-ms__an-left\">\r\n        <div *ngFor=\"let col of i._left\" class=\"alain-ms__an-left-col\">\r\n          <ng-template\r\n            [ngTemplateOutlet]=\"categoryTpl\"\r\n            [ngTemplateOutletContext]=\"{ $implicit: col.list }\"\r\n          ></ng-template>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"i.right && i.right.length > 0\" class=\"alain-ms__an-right\">\r\n        <ng-template [ngTemplateOutlet]=\"categoryTpl\" [ngTemplateOutletContext]=\"{ $implicit: i.right }\"></ng-template>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                host: {
                    '[class.alain-ms__an-active]': 'validOpen',
                },
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
MSAllNavComponent.ctorParameters = () => [
    { type: MSAllNavService },
    { type: BrandService },
    { type: ChangeDetectorRef },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
MSAllNavComponent.propDecorators = {
    dropdownEl: [{ type: ViewChild, args: ['dropdown', { static: true },] }],
    _enter: [{ type: HostListener, args: ['mouseenter',] }],
    _leave: [{ type: HostListener, args: ['mouseleave',] }]
};

class MSLangsComponent {
    constructor(configState, sessionState) {
        this.configState = configState;
        this.sessionState = sessionState;
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
MSLangsComponent.decorators = [
    { type: Component, args: [{
                selector: 'ms-langs',
                template: "<ng-container *ngIf=\"defaultLanguage$ | async as defaultLang\">\r\n  <span class=\"alain-ms__topbar-item-btn\" >\r\n    <span >{{ defaultLang.displayName }}</span>\r\n  </span>\r\n  <ul class=\"alain-ms__topbar-dd-menu\">\r\n    <li *ngFor=\"let lang of (dropdownLanguages$ | async)\" (click)=\"change(lang.cultureName)\">\r\n      <a class=\"alain-ms__topbar-dd-item\">{{ lang?.displayName }}</a>\r\n    </li>\r\n  </ul>\r\n</ng-container>\r\n\r\n",
                host: {
                    '[class.alain-ms__topbar-item]': 'true',
                    '[class.alain-ms__topbar-dd]': 'true',
                },
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
MSLangsComponent.ctorParameters = () => [
    { type: ConfigStateService },
    { type: SessionStateService }
];

/**
 * 顶部菜单所有数据，几个注意点：
 * - 当前处理的数据源格式为 `./assets/tmp/topbar-en-US.json`
 * - 最终处理数据以 `topbar.interface.ts` 系列接口为准
 */
class MSTopbarService {
    constructor(http) {
        this.http = http;
    }
    get data() {
        return this._data;
    }
    get messages() {
        return this._data.messagess;
    }
    getData() {
        return this._data ? of(this._data) : this.getByHttp();
    }
    getNav(key) {
        return this._data.navLinks[key] || {};
    }
    getByHttp() {
        return this.http.get(`./assets/tmp/topbar-zh-TW.json`).pipe(tap((res) => {
            this._data = res;
        }));
    }
}
MSTopbarService.ɵprov = ɵɵdefineInjectable({ factory: function MSTopbarService_Factory() { return new MSTopbarService(ɵɵinject(_HttpClient)); }, token: MSTopbarService, providedIn: "root" });
MSTopbarService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
MSTopbarService.ctorParameters = () => [
    { type: _HttpClient }
];

class MSNoticeComponent {
    constructor(srv, router, tokenService, settings, msg) {
        this.srv = srv;
        this.router = router;
        this.tokenService = tokenService;
        this.settings = settings;
        this.msg = msg;
    }
    get list() {
        return this.srv.messages.map((i) => {
            i.link = this.l.messageUrl + i.id;
            return i;
        });
    }
    get l() {
        return this.srv.getNav('message');
    }
    logout() {
        this.tokenService.clear();
        this.router.navigateByUrl(this.tokenService.login_url);
    }
}
MSNoticeComponent.decorators = [
    { type: Component, args: [{
                selector: 'ms-notice',
                template: "<span class=\"alain-ms__topbar-item-btn\">\r\n  <span class=\"position-relative\">\r\n    {{ l.titleText }}<em *ngIf=\"list.length > 0\" class=\"alain-ms__topbar-item-num\">{{ list.length }}</em>\r\n  </span>\r\n</span>\r\n<div class=\"alain-ms__topbar-dd-menu\">\r\n  <div class=\"alain-ms__notice-hd\">\r\n    {{ l.title }}\r\n    <a class=\"brand-color\" [link-to]=\"l.subscribe\">{{ l.subscribe.title }}</a>\r\n  </div>\r\n  <a class=\"alain-ms__notice-item\" *ngFor=\"let i of list\" [link-to]=\"i\">\r\n    <div class=\"alain-ms__notice-item--title\">{{ i.title }}</div>\r\n    <span class=\"alain-ms__notice-item--time\">{{ i.time }}</span>\r\n  </a>\r\n  <div class=\"alain-ms__notice-fd\">\r\n    <a class=\"d-block pt-sm pb-xs text-center\" [link-to]=\"l\">{{ l.text }}</a>\r\n  </div>\r\n</div>\r\n",
                host: {
                    '[class.alain-ms__topbar-item]': 'true',
                    '[class.alain-ms__topbar-dd]': 'true',
                    '[class.alain-ms__notice]': 'true',
                },
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
MSNoticeComponent.ctorParameters = () => [
    { type: MSTopbarService },
    { type: Router },
    { type: undefined, decorators: [{ type: Inject, args: [DA_SERVICE_TOKEN,] }] },
    { type: SettingsService },
    { type: NzMessageService }
];

class MSRegionService {
    constructor(http) {
        this.http = http;
    }
    get platList() {
        return this._data.reduce((p, c) => p.concat(c.list), []);
    }
    get item() {
        return this.platList.find((w) => w.selected);
    }
    get list() {
        return this._data;
    }
    getByHttp() {
        return this.http.get(`/region`).pipe(tap((list) => {
            //const zone = this.i18nSrv.zone;
            //const key = `${list[0][`${zone}Name`] ? zone : 'cn'}Name`;
            // const res = list.reduce((p: MSRegionDistrict[], c) => {
            //   const districtName = `district_${key}`;
            //   let item = p.find((w) => w.name === c[districtName]);
            //   if (!item) {
            //     item = { name: c[districtName], list: [] };
            //     p.push(item);
            //   }
            //   item.list?.push({ id: c.id, country: c.country, name: c[key], selected: c.id === 'cn-shanghai' });
            //   return p;
            // }, []);
            // this._data = res;
        }));
    }
    getData() {
        return this._data ? of(null) : this.getByHttp();
    }
    setSelected(item) {
        this.platList.find((w) => w.selected).selected = false;
        item.selected = true;
    }
}
MSRegionService.ɵprov = ɵɵdefineInjectable({ factory: function MSRegionService_Factory() { return new MSRegionService(ɵɵinject(_HttpClient)); }, token: MSRegionService, providedIn: "root" });
MSRegionService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
MSRegionService.ctorParameters = () => [
    { type: _HttpClient }
];

class MSRegionComponent {
    constructor(srv, cdr) {
        this.srv = srv;
        this.cdr = cdr;
        this.inited = false;
    }
    ngOnInit() {
        this.srv.getData().subscribe(() => {
            this.inited = true;
            this.cdr.detectChanges();
        });
    }
    selected(item) {
        this.srv.setSelected(item);
        this.cdr.detectChanges();
    }
}
MSRegionComponent.decorators = [
    { type: Component, args: [{
                selector: 'ms-region',
                template: "<ng-container *ngIf=\"inited\">\r\n  <span class=\"alain-ms__topbar-item-btn\">\r\n    <i class=\"icon icon-{{ srv.item.country }}\"></i>\r\n    <span class=\"text-xs px-xs\">{{ srv.item.name }}</span>\r\n    <i nz-icon nzType=\"caret-up\" class=\"alain-ms__topbar-item-btn-arrow\"></i>\r\n  </span>\r\n  <div class=\"alain-ms__topbar-dd-menu alain-ms__topbar-dd-left alain-ms__region--wrap clearfix\">\r\n    <dl *ngFor=\"let p of srv.list\" class=\"alain-ms__region--list\">\r\n      <dt class=\"mb-sm\">{{ p.name }}</dt>\r\n      <dd *ngFor=\"let i of p.list\" (click)=\"selected(i)\">\r\n        <a class=\"d-block\" [ngClass]=\"{ 'brand-color': i.selected }\">\r\n          <i class=\"icon icon-{{ i.country }}\"></i>{{ i.name }}\r\n        </a>\r\n      </dd>\r\n    </dl>\r\n  </div>\r\n</ng-container>\r\n",
                host: {
                    '[class.alain-ms__topbar-item]': 'true',
                    '[class.alain-ms__topbar-dd]': 'true',
                    '[class.alain-ms__region]': 'true',
                },
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
MSRegionComponent.ctorParameters = () => [
    { type: MSRegionService },
    { type: ChangeDetectorRef }
];

class MSSearchComponent {
    constructor(http, srv, cdr) {
        this.srv = srv;
        this.cdr = cdr;
        this.show = false;
        this.q = '';
        this.search$ = new Subject();
        this.list = [];
        this.search$
            .pipe(debounceTime(300), distinctUntilChanged(), switchMap((q) => http.get('/user', { no: q, pi: 1, ps: 5 })))
            .subscribe((res) => {
            this.list = res.list;
            this.cdr.detectChanges();
        });
    }
    get l() {
        return this.srv.getNav('search');
    }
    _click() {
        this.ipt.nativeElement.focus();
        this.show = true;
    }
    ngOnDestroy() {
        this.search$.unsubscribe();
    }
}
MSSearchComponent.decorators = [
    { type: Component, args: [{
                selector: 'ms-search',
                template: "<div class=\"alain-ms__search\" [ngClass]=\"{ 'alain-ms__search-active': show }\">\r\n  <input\r\n    class=\"alain-ms__search-ipt\"\r\n    #ipt\r\n    placeholder=\"{{ l.placeholder }}\"\r\n    nz-input\r\n    [(ngModel)]=\"q\"\r\n    (input)=\"search$.next($event.target?.value)\"\r\n    [nzAutocomplete]=\"searchAuto\"\r\n    (blur)=\"show = false\"\r\n  />\r\n  <i class=\"alain-ms__search-icon\" nz-icon nzType=\"search\"></i>\r\n  <i class=\"alain-ms__search-outline\"></i>\r\n  <nz-autocomplete #searchAuto class=\"asdlfkjlj\">\r\n    <nz-auto-option *ngFor=\"let item of list\" [nzValue]=\"item\">\r\n      {{ item }}\r\n    </nz-auto-option>\r\n  </nz-autocomplete>\r\n</div>\r\n",
                host: {
                    '[class.alain-ms__topbar-item]': 'true',
                    '[class.mr-md]': 'true',
                },
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
MSSearchComponent.ctorParameters = () => [
    { type: _HttpClient },
    { type: MSTopbarService },
    { type: ChangeDetectorRef }
];
MSSearchComponent.propDecorators = {
    ipt: [{ type: ViewChild, args: ['ipt', { static: true },] }],
    _click: [{ type: HostListener, args: ['click',] }]
};

class MSUserComponent {
    constructor(authService, router, configStateService, srv, settings) {
        this.authService = authService;
        this.router = router;
        this.configStateService = configStateService;
        this.settings = settings;
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
MSUserComponent.decorators = [
    { type: Component, args: [{
                selector: 'ms-user',
                template: "<ng-template #loginBtnTpl>\r\n  <a (click)=\"initLogin()\"  class=\"alain-ms__topbar-item-btn\">{{'AbpAccount::Login' | abpLocalization}}</a>\r\n</ng-template>\r\n\r\n<div *ngIf=\"(currentUser$ | async) as currentUser\">\r\n  <div *ngIf=\"currentUser.isAuthenticated; else loginBtnTpl\">\r\n\r\n\r\n    <span class=\"alain-ms__topbar-item-btn\">\r\n      <!-- <nz-avatar [nzSrc]=\"settings.user.avatar\" nzSize=\"small\"></nz-avatar> -->\r\n      {{ currentUser.userName }}\r\n    </span>\r\n    <div class=\"alain-ms__topbar-dd-menu width-md\">\r\n      <div class=\"alain-ms__user-hd\">\r\n        <div class=\"d-flex\">\r\n          <!-- <nz-avatar [nzSrc]=\"settings.user.avatar\" nzSize=\"small\"></nz-avatar> -->\r\n          <span class=\"ml-md\">{{ currentUser.userName }}</span>\r\n        </div>\r\n        <!-- <div class=\"mt-sm\">\r\n          <ng-container *ngFor=\"let i of mainLinks; let last = last\">\r\n            <a [link-to]=\"i\">{{ i.text }}</a>\r\n            <nz-divider *ngIf=\"!last\" nzType=\"vertical\"></nz-divider>\r\n          </ng-container>\r\n        </div> -->\r\n      </div>\r\n      <div class=\"alain-ms__user-bd\">\r\n        <!-- <a *ngFor=\"let i of subLinks\" [link-to]=\"i\" class=\"alain-ms__user-bd-item\">\r\n          <i nz-icon nzType=\"safety\"></i>{{ i.text }}\r\n        </a> -->\r\n        <a routerLink=\"/account/manage-profile\" class=\"alain-ms__user-bd-item\">\r\n          <i nz-icon nzType=\"safety\"></i>{{ 'AbpAccount::ManageYourProfile' | abpLocalization }}\r\n        </a>\r\n      </div>\r\n      <div class=\"alain-ms__user-fd\">\r\n        <a (click)=\"logout()\" class=\"d-block pt-sm pb-xs text-center\">{{ 'AbpUi::Logout' | abpLocalization }}</a>\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </div>\r\n</div>\r\n\r\n",
                host: {
                    '[class.alain-ms__topbar-item]': 'true',
                    '[class.alain-ms__topbar-dd]': 'true',
                    '[class.alain-ms__user]': 'true',
                },
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
MSUserComponent.ctorParameters = () => [
    { type: AuthService },
    { type: Router },
    { type: ConfigStateService },
    { type: MSTopbarService },
    { type: SettingsService }
];

class RoutesProcessor {
    constructor(injector) {
        this.injector = injector;
    }
    get routesService() {
        return this.injector.get(RoutesService);
    }
    get localizationPipe() {
        return this.injector.get(LocalizationPipe);
    }
    get CurrentUrl() {
        var current_url = this.RouterState.url.split('?')[0];
        return decodeURI(current_url);
    }
    get CurrentRoute() {
        const result = this.routesService.find((x) => this.formatParams(x.path) === this.CurrentUrl);
        return result;
    }
    MergeRouteData(prop, defaultValue) {
        let result = defaultValue;
        let targetRoutes = [];
        let route = this.CurrentRoute;
        if (!route)
            return [];
        pushNode(route);
        while (!!route.parent) {
            route = route.parent;
            pushNode(route);
        }
        let stack = targetRoutes;
        while (stack.length !== 0) {
            let node = stack.pop();
            result = Object.assign(Object.assign({}, result), node[prop]);
        }
        return result;
        function pushNode(node) {
            if (!!node && node.hasOwnProperty(prop)) {
                targetRoutes.push(node);
            }
        }
    }
    get Category$() {
        return this.routesService.visible$.pipe(map((x) => {
            if (x.length === 0)
                return;
            return x
                .filter((y) => y.name === "AbpUiNavigation::Menu:Administration" /* Administration */ &&
                !this.routesService.hide(y))
                .map((r) => r.children)
                .reduce((a, b) => a.concat(b))
                .map((r) => {
                let category = {
                    id: r.name,
                    name: this.localizationPipe.transform(r.name),
                    icon: r.iconClass,
                    products: [],
                    link: r.path,
                };
                category.products = r.children
                    .filter((c) => !this.routesService.hide(c))
                    .map((c) => {
                    let product = {
                        productId: c.name,
                        name: this.localizationPipe.transform(c.name),
                        link: c.path,
                        icon: c.iconClass,
                        id: c.name,
                    };
                    return product;
                });
                return category;
            });
        }));
    }
    GetPageNavs(routerState, nav) {
        if (!this.CurrentRoute)
            return [];
        let pageNavs = [];
        this.RouterState = routerState;
        let target;
        target = this.routesService.find((x) => x.name == nav.name);
        if (!!target) {
            pageNavs.push(...this.transMenu(target));
        }
        return pageNavs;
    }
    transMenu(first, recursive = true) {
        let result = [];
        first.children
            .filter((r) => !this.routesService.hide(r))
            .forEach((second) => {
            var _a;
            let left = {
                text: second.displayName || this.localizationPipe.transform(second.name),
                link: this.formatParams(second.path),
                icon: second.iconClass,
                children: [],
            };
            if (((_a = second === null || second === void 0 ? void 0 : second.children) === null || _a === void 0 ? void 0 : _a.length) > 0 && recursive) {
                left.children = this.transMenu(second, false);
            }
            result.push(left);
        });
        return result;
    }
    formatParams(text, router = this.RouterState.root) {
        if (!text)
            return '';
        let regexp = /:([^(:\/\-\ )]+)/g;
        let result = text;
        let match = text.match(regexp);
        if (!!match) {
            text.match(regexp).forEach((i) => {
                var _a;
                let parameter = i.substr(1);
                let itemId = (_a = this.findRouter((x) => parameter in x.params, [router])) === null || _a === void 0 ? void 0 : _a.params[parameter];
                result = result.replace(':' + parameter, itemId);
            });
        }
        return result;
    }
    findRouter(predicate, routers) {
        return routers.reduce((acc, node) => acc
            ? acc
            : predicate(node)
                ? node
                : this.findRouter(predicate, node.children), null);
    }
}

class LayoutStateService {
    constructor(injector, localizationPipe) {
        this.injector = injector;
        this.localizationPipe = localizationPipe;
        this.store = new InternalStore({
            isFetching: false,
            categories: [],
            navConfig: Layout.defaultNavConfig,
            sidebarConfig: Layout.defaultSidebarConfig,
            pageNavs: [],
        });
        this.routesProcessor = new RoutesProcessor(this.injector);
        this.listenRoutes();
    }
    getStore$() {
        return this.store.sliceState((state) => state);
    }
    getFetching$() {
        return this.store.sliceState(({ isFetching }) => isFetching);
    }
    getCategories() {
        return this.store.state.categories;
    }
    getCategories$() {
        return this.store.sliceState((state) => state.categories);
    }
    getShortcuts() {
        const categories = this.getCategories();
        const result = [];
        categories.forEach((p) => {
            result.push(p);
        });
        return result;
    }
    getShortcuts$() {
        return this.getCategories$().pipe(map((x) => {
            const result = [];
            x.forEach((p) => {
                result.push(p);
            });
            return result;
        }));
    }
    getNavConfig() {
        return this.store.state.navConfig;
    }
    getNavConfig$() {
        return this.store.sliceState((state) => state.navConfig);
    }
    getPageNavs$() {
        return this.store.sliceState((state) => state.pageNavs);
    }
    getPageNavs() {
        return this.store.state.pageNavs;
    }
    setStore(state) {
        this.store.patch(Object.assign({}, state));
    }
    setFetching(isFetching) {
        this.store.patch({ isFetching });
    }
    setNavConfig(navConfig) {
        this.store.patch({ navConfig });
        let pageNavs;
        if (navConfig.name !== "AbpUiNavigation::Menu:Administration" /* Administration */) {
            pageNavs = this.routesProcessor.GetPageNavs(this.routesProcessor.RouterState, navConfig);
            this.store.state.sidebarConfig.hasPageNav = true;
        }
        else {
            this.store.state.sidebarConfig.hasPageNav = false;
        }
        this.store.patch({
            pageNavs,
            sidebarConfig: this.store.state.sidebarConfig,
        });
    }
    fetchPageNavs(routerState) {
        var _a, _b;
        this.routesProcessor.RouterState = routerState;
        let navConfig = this.routesProcessor.MergeRouteData('navConfig', Object.assign(Object.assign({}, Layout.defaultNavConfig), { name: (_b = (_a = this.routesProcessor.CurrentRoute) === null || _a === void 0 ? void 0 : _a.parentName) !== null && _b !== void 0 ? _b : "" //eTicketRouteNames.Ticket//
         }));
        let sidebarConfig = this.routesProcessor.MergeRouteData('sidebarConfig', Layout.defaultSidebarConfig);
        this.setStore({
            sidebarConfig,
        });
        this.setNavConfig(navConfig);
    }
    listenRoutes() {
        this.routesProcessor.Category$.subscribe((categories) => {
            if (!!this.routesProcessor.RouterState) {
                this.fetchPageNavs(this.routesProcessor.RouterState);
            }
            this.store.patch({
                categories,
            });
        });
    }
}
LayoutStateService.ɵprov = ɵɵdefineInjectable({ factory: function LayoutStateService_Factory() { return new LayoutStateService(ɵɵinject(INJECTOR), ɵɵinject(LocalizationPipe)); }, token: LayoutStateService, providedIn: "root" });
LayoutStateService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
LayoutStateService.ctorParameters = () => [
    { type: Injector },
    { type: LocalizationPipe }
];

class MSProductService {
    constructor(layoutSateService) {
        this.layoutSateService = layoutSateService;
    }
    get data() {
        return this._data;
    }
    get i18n() {
        return {
            showAll: true,
            keywords: '請輸入關鍵詞',
            allProduct: '查詢全部産品',
            show: true,
            hasResult: '以下是與“<strong>{filterTxt}</strong>”相關的産品：',
            noResult: '未找到與“<strong>{filterTxt}</strong>”相關的産品。',
            text: '産品與服務',
            recent: '最近訪問',
        };
    }
    getData() {
        return this.layoutSateService.getCategories$().pipe(tap((x) => {
            this._data = x;
        }));
    }
    search(q) {
        const column = 3;
        const list = [[], [], []];
        // Process search key
        let oldList = deepCopy(this._data);
        if (q) {
            oldList = oldList.map((p) => {
                var _a;
                p.products = (_a = p.products) === null || _a === void 0 ? void 0 : _a.filter((w) => {
                    return w.name.includes(q) || w.id.includes(q);
                });
                return p;
            });
        }
        // Clean empty children category
        const categories = [];
        let MockID = 0;
        oldList
            .filter((w) => w.products.length > 0)
            .forEach((i, idx) => {
            i._id = ++MockID;
            list[idx % column].push(i);
            // Collecting category data
            if (categories.findIndex((w) => w.name === i.name) === -1) {
                categories.push({ _id: i._id, name: i.name });
            }
        });
        return { list, categories };
    }
}
MSProductService.ɵprov = ɵɵdefineInjectable({ factory: function MSProductService_Factory() { return new MSProductService(ɵɵinject(LayoutStateService)); }, token: MSProductService, providedIn: "root" });
MSProductService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
MSProductService.ctorParameters = () => [
    { type: LayoutStateService }
];

class MSSidebarComponent {
    constructor(layoutStateService, brand, srv, cdr) {
        this.layoutStateService = layoutStateService;
        this.brand = brand;
        this.srv = srv;
        this.cdr = cdr;
        this.showProduct = false;
        this.inited = false;
        this.q = '';
        this.searchCategories = [];
        brand.setSidebar(true);
    }
    get store$() {
        return this.layoutStateService.getStore$();
    }
    get shortcuts$() {
        return this.layoutStateService.getShortcuts$();
    }
    get l() {
        return this.srv.i18n;
    }
    search(scroll = true) {
        const res = this.srv.search(this.q);
        this.searchList = res.list;
        this.searchCategories = res.categories;
        this.cdr.detectChanges();
        if (scroll) {
            // wait angular render
            setTimeout(() => {
                // 滚动至顶部
                this.categoryEl.nativeElement.scrollTop = 0;
            });
        }
    }
    ngAfterViewInit() {
        this.srv.getData().subscribe((x) => {
            this.inited = true;
            this.search();
        });
    }
    ngOnDestroy() {
        this.brand.setSidebar(false);
    }
}
MSSidebarComponent.decorators = [
    { type: Component, args: [{
                selector: 'ms-sidebar',
                template: "<ng-container *ngIf=\"store$ | async as store\">\r\n  <div class=\"alain-ms__sidebar-wrap\">\r\n    <div\r\n      *ngIf=\"store.sidebarConfig.hasProductNav\"\r\n      class=\"alain-ms__sidebar-product-all\"\r\n      (click)=\"showProduct = !showProduct\"\r\n    >\r\n      <div class=\"alain-ms__sidebar-product alain-ms__sidebar-product-all-wrap\">\r\n        <i class=\"alain-ms__sidebar-product-icon\" nz-icon nzType=\"appstore\"></i>\r\n        <span class=\"alain-ms__sidebar-product-name\">{{ l.text }}</span>\r\n        <span class=\"alain-ms__sidebar-product-toolbar\">\r\n          <i nz-icon nzType=\"right\"></i>\r\n        </span>\r\n      </div>\r\n    </div>\r\n    <ul class=\"alain-ms__sidebar-product-quick\">\r\n      <li\r\n        class=\"alain-ms__sidebar-product\"\r\n        *ngFor=\"let i of shortcuts$ | async; let idx = index\"\r\n      >\r\n        <i\r\n          class=\"alain-ms__sidebar-product-icon {{ i.icon }} \"\r\n          [link-to]=\"i\"\r\n          (linkToChanged)=\"showProduct = false\"\r\n        ></i>\r\n        <a\r\n          class=\"alain-ms__sidebar-product-name\"\r\n          [link-to]=\"i\"\r\n          (linkToChanged)=\"showProduct = false\"\r\n        >\r\n          {{ i.name }}\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"alain-ms__sidebar-products\">\r\n    <div class=\"alain-ms__products\">\r\n      <div class=\"alain-ms__products-close\" (click)=\"showProduct = false\">\r\n        <i nz-icon nzType=\"close\"></i>\r\n      </div>\r\n      <div class=\"alain-ms__products-left\">\r\n        <div class=\"alain-ms__products-category-wrap\" #categoryEl>\r\n          <div class=\"d-flex\">\r\n            <div\r\n              *ngFor=\"let c of searchList\"\r\n              class=\"alain-ms__products-category-column\"\r\n            >\r\n              <div *ngFor=\"let p of c\" class=\"alain-ms__products-category\">\r\n                <h3\r\n                  class=\"alain-ms__products-category-title\"\r\n                  id=\"product-cat-{{ p._id }}\"\r\n                >\r\n                  {{ p.name }}\r\n                </h3>\r\n                <ul class=\"list-unstyled\">\r\n                  <li\r\n                    *ngFor=\"let i of p.products\"\r\n                    class=\"alain-ms__products-category-item\"\r\n                    [ngClass]=\"{\r\n                      'alain-ms__products-category-item-active': i.shortcut\r\n                    }\"\r\n                  >\r\n                    <a\r\n                      [link-to]=\"i\"\r\n                      (linkToChanged)=\"showProduct = false\"\r\n                      class=\"alain-ms__products-category-item-link\"\r\n                      >{{ i.name }}</a\r\n                    >\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"alain-ms__products-right\">\r\n        <nz-anchor\r\n          nzAffix=\"false\"\r\n          nzContainer=\".alain-ms__products-category-wrap\"\r\n          nzOffsetTop=\"150\"\r\n          nzShowInkInFixed=\"false\"\r\n        >\r\n          <nz-link\r\n            *ngFor=\"let i of searchCategories\"\r\n            nzHref=\"#product-cat-{{ i._id }}\"\r\n            [nzTitle]=\"i.name\"\r\n          ></nz-link>\r\n        </nz-anchor>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-container>\r\n",
                host: {
                    '[class.alain-ms__sidebar]': 'true',
                    '[class.alain-ms__sidebar-showproduct]': 'showProduct',
                },
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
MSSidebarComponent.ctorParameters = () => [
    { type: LayoutStateService },
    { type: BrandService },
    { type: MSProductService },
    { type: ChangeDetectorRef }
];
MSSidebarComponent.propDecorators = {
    categoryEl: [{ type: ViewChild, args: ['categoryEl', { static: false },] }]
};

class MSTopbarComponent {
    constructor(srv, 
    //  public userSrv: UserService,
    cdr, environment) {
        this.srv = srv;
        this.cdr = cdr;
        this.environment = environment;
        this.inited = false;
        this.allNav = false;
    }
    get appInfo() {
        return this.environment.getEnvironment().application;
    }
    ngOnInit() {
        this.srv.getData().subscribe(() => {
            this.inited = true;
            this.mergeLinks();
            this.cdr.detectChanges();
        });
    }
    mergeLinks() {
        const res = this.srv.data.navLinks;
        this.links = [res.finance, res.workorder, res.support].map((i) => {
            if (i.className == null) {
                i.className = '';
            }
            if (!i.links || i.links.length === 0) {
                i.links = undefined;
            }
            else {
                i.className += ' alain-ms__topbar-dd';
            }
            return i;
        });
    }
}
MSTopbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'ms-topbar',
                template: "<ng-template #defaultLogo>\r\n  <img src=\"./assets/logo-color.svg\" />\r\n</ng-template>\r\n<div class=\"alain-ms__topbar-main\">\r\n  <ms-all-nav *ngIf=\"allNav\"></ms-all-nav>\r\n  <div class=\"alain-ms__topbar-logo\">\r\n    <a routerLink=\"/\" class=\"alain-ms__topbar-logo-img\">\r\n      <img *ngIf=\"appInfo.logoUrl; else defaultLogo\" [src]=\"appInfo.logoUrl\"/>\r\n    </a>\r\n    <a routerLink=\"/\" class=\"alain-ms__topbar-logo-link\">\r\n      {{ appInfo.name }}\r\n    </a>\r\n  </div>\r\n  <!-- <ms-region *ngIf=\"userSrv?.isLogin\" class=\"hidden-md\"></ms-region> -->\r\n</div>\r\n<div class=\"alain-ms__topbar-widget\" *ngIf=\"inited\">\r\n  <!-- \u641C\u7D22 -->\r\n  <!-- <ms-search class=\"hidden-xs\"></ms-search> -->\r\n  <!-- \u6D88\u606F -->\r\n  <!-- <ms-notice></ms-notice> -->\r\n  <!-- \u83DC\u5355 -->\r\n  <!-- <div *ngFor=\"let p of links\" class=\"alain-ms__topbar-item\" [ngClass]=\"p.className\">\r\n    <a class=\"alain-ms__topbar-item-btn\" [link-to]=\"p\">{{ p.text }}</a>\r\n    <ul class=\"alain-ms__topbar-dd-menu\" *ngIf=\"p.links\">\r\n      <li *ngFor=\"let i of p.links\">\r\n        <a class=\"alain-ms__topbar-dd-item\" [link-to]=\"i\">{{ i.text }}</a>\r\n      </li>\r\n    </ul>\r\n  </div> -->\r\n  <!-- \u8D2D\u7269\u8F66 -->\r\n  <!-- <div class=\"alain-ms__topbar-item hidden-mobile\" class=\"hidden-xs\">\r\n    <a class=\"alain-ms__topbar-item-btn alain-ms__topbar-item-icon\" routerLink=\"/\">\r\n      <i nz-icon nzType=\"shopping-cart\"></i>\r\n    </a>\r\n  </div> -->\r\n  <!-- \u8BED\u8A00 -->\r\n  <ms-langs></ms-langs>\r\n  <!-- \u7528\u6237 -->\r\n  <ms-user></ms-user>\r\n</div>\r\n",
                host: {
                    '[class.alain-ms__topbar]': 'true',
                    '[class.alain-ms__topbar-single]': 'allNav',
                },
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
MSTopbarComponent.ctorParameters = () => [
    { type: MSTopbarService },
    { type: ChangeDetectorRef },
    { type: EnvironmentService }
];
MSTopbarComponent.propDecorators = {
    allNav: [{ type: Input }]
};

class MSHelpComponent {
}
MSHelpComponent.decorators = [
    { type: Component, args: [{
                selector: 'help',
                template: "<div class=\"ms-help__wrap\" nz-popover nzPopoverTrigger=\"click\" [nzPopoverContent]=\"helpTpl\">\r\n  <span class=\"ms-help__text\">\r\n    \u54A8\u8BE2\u00B7\u5EFA\u8BAE\r\n  </span>\r\n</div>\r\n<ng-template #helpTpl>\r\n  <div class=\"d-flex align-items-center mb-sm\">\r\n    <i nz-icon nzType=\"phone\" class=\"mr-sm text-xl\"></i>\r\n    <a routerLink=\"/\">\r\n      \u552E\u524D\u54A8\u8BE2\u7535\u8BDD\r\n      <div class=\"text-orange text-xs\">xxxx \u8F6C 1</div>\r\n    </a>\r\n  </div>\r\n  <div class=\"d-flex align-items-center mb-sm\">\r\n    <i nz-icon nzType=\"customer-service\" class=\"mr-sm text-xl\"></i>\r\n    <a routerLink=\"/smart\">\r\n      \u667A\u80FD\u987E\u95EE\r\n      <div class=\"text-grey text-xs\">\u667A\u80FD\u8BCA\u65AD\uFF0C\u79D2\u7EA7\u89E3\u7B54</div>\r\n    </a>\r\n  </div>\r\n  <div class=\"d-flex align-items-center\">\r\n    <i nz-icon nzType=\"edit\" class=\"mr-sm text-xl\"></i>\r\n    <a routerLink=\"/\">\r\n      \u5EFA\u8BAE\u53CD\u9988\r\n      <div class=\"text-grey text-xs\">XXX\u4E0D\u662F\u5B8C\u7F8E\u7684\uFF0C\u6211\u4EEC\u6E34\u671B\u60A8\u7684\u5EFA\u8BAE</div>\r\n    </a>\r\n  </div>\r\n</ng-template>\r\n",
                host: {
                    '[class.ms-help]': 'true',
                },
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];

class MSLinkToDirective {
    constructor(router) {
        this.router = router;
        this.linkToChanged = new EventEmitter();
    }
    _click(e) {
        const { link, target } = this.i;
        if (target != null) {
            if (target === '_blank') {
                window.open(link);
            }
            else {
                window.location.href = link;
            }
            this.linkToChanged.emit(e);
            return;
        }
        setTimeout(() => {
            this.router.navigateByUrl(link).then(() => this.linkToChanged.emit(e));
        });
    }
}
MSLinkToDirective.decorators = [
    { type: Directive, args: [{ selector: '[link-to]' },] }
];
MSLinkToDirective.ctorParameters = () => [
    { type: Router }
];
MSLinkToDirective.propDecorators = {
    i: [{ type: Input, args: ['link-to',] }],
    linkToChanged: [{ type: Output }],
    _click: [{ type: HostListener, args: ['click', ['$event'],] }]
};

class MSPageBarComponent {
    // #endregion
    constructor(router, srv, menuSrv, cdr) {
        this.router = router;
        this.srv = srv;
        this.menuSrv = menuSrv;
        this.cdr = cdr;
        this._menus = null;
        // #region fields
        /**
         * 自动生成标题，以当前路由从主菜单中定位
         */
        this.autoTitle = true;
        this.recursiveBreadcrumb = true;
    }
    get menus() {
        if (this._menus) {
            return this._menus;
        }
        this._menus = this.menuSrv.getPathByUrl(this.router.url.split('?')[0], this.recursiveBreadcrumb);
        return this._menus;
    }
    setTitle() {
        if (typeof this.title === 'undefined' && this.autoTitle && this.menus.length > 0) {
            const item = this.menus[this.menus.length - 1];
            this.title = item.text;
        }
        this.cdr.detectChanges();
    }
    ngAfterViewInit() {
        this.router$ = merge(this.router.events.pipe(filter((e) => e instanceof NavigationEnd)), this.srv.notify, this.menuSrv.change).subscribe(() => {
            this._menus = null;
            this.setTitle();
        });
    }
    ngOnDestroy() {
        this.router$.unsubscribe();
    }
}
MSPageBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'page-bar',
                template: "<div class=\"ms-page-bar__title\">\r\n  <h2 *ngIf=\"title\" class=\"ms-page-bar__title-main\">\r\n    <ng-container *nzStringTemplateOutlet=\"title\">{{ title | abpLocalization }}</ng-container>\r\n  </h2>\r\n  <div *ngIf=\"subTitle\" class=\"ms-page-bar__title-sub\">\r\n    <ng-container *nzStringTemplateOutlet=\"subTitle\">{{ subTitle | abpLocalization }}</ng-container>\r\n  </div>\r\n</div>\r\n<div class=\"ms-page-bar__action\">\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                host: {
                    '[class.ms-page-bar]': 'true',
                },
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
MSPageBarComponent.ctorParameters = () => [
    { type: Router },
    { type: BrandService },
    { type: MenuService },
    { type: ChangeDetectorRef }
];
MSPageBarComponent.propDecorators = {
    autoTitle: [{ type: Input }],
    recursiveBreadcrumb: [{ type: Input }],
    title: [{ type: Input }],
    subTitle: [{ type: Input }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], MSPageBarComponent.prototype, "autoTitle", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], MSPageBarComponent.prototype, "recursiveBreadcrumb", void 0);

class MSPageNavComponent {
    constructor(srv, router, titSrv, menuSrv, 
    //@Inject(ALAIN_I18N_TOKEN) private i18n: I18NService,
    cdr) {
        this.srv = srv;
        this.router = router;
        this.titSrv = titSrv;
        this.menuSrv = menuSrv;
        this.cdr = cdr;
        this._config = {};
        this._menus = [];
    }
    set config(val) {
        const { title, titleI18n, backHref, doc, docI18n } = val;
        // this.titSrv.setTitle(docI18n ? this.i18n.fanyi(docI18n) : doc);
        // this._config.title = titleI18n ? this.i18n.fanyi(titleI18n) : title;
        this._config.title = title;
        this._config.backHref = backHref || '';
    }
    get config() {
        return this._config;
    }
    set list(list) {
        this.menuSrv.add(list);
        this.menuSrv.visit(list, (i) => (i.active = true));
        this._menus = this.menuSrv.menus;
    }
    get list() {
        return this._menus;
    }
    to(url, e) {
        e.preventDefault();
        if (!url) {
            return;
        }
        this.router.navigateByUrl(url);
    }
    toggle() {
        this.srv.hideNav = !this.srv.hideNav;
        this.srv.triggerNotify('page-nav');
    }
    ngOnChanges() {
        this.cdr.detectChanges();
    }
}
MSPageNavComponent.decorators = [
    { type: Component, args: [{
                selector: 'page-nav',
                template: "<div class=\"ms-page-nav__body\">\r\n  <div class=\"ms-page-nav__stage\">\r\n    <div class=\"ms-page-nav__scene ms-page-nav__scene-main\">\r\n      <div\r\n        class=\"ms-page-nav__title\"\r\n        [ngClass]=\"{ 'ms-page-nav__back': config.backHref }\"\r\n        (click)=\"to(config.backHref!, $event)\"\r\n        [title]=\"config.backHref ? ('ms.page-nav.back' | i18n) : ''\"\r\n      >\r\n        <i *ngIf=\"config.backHref\" nz-icon nzType=\"left\"></i>\r\n        {{ config.title | abpLocalization }}\r\n      </div>\r\n      <div class=\"ms-page-nav__list scrollbar\">\r\n        <ng-template #treeTpl let-ls let-level=\"level\">\r\n          <li *ngFor=\"let i of ls\">\r\n            <ng-container *ngIf=\"i.children.length == 0\">\r\n              <div\r\n                *ngIf=\"i.link\"\r\n                class=\"ms-page-nav__item\"\r\n                role=\"treeitem\"\r\n                routerLink=\"{{ i.link }}\"\r\n                routerLinkActive=\"ms-page-nav__item-active\"\r\n              >\r\n                <span class=\"ms-page-nav__item-icon\"></span>\r\n                <span class=\"ms-page-nav__item-tit\">{{ i.text }}</span>\r\n                <span *ngIf=\"i.badge\" class=\"ms-page-nav__item-badge\">{{ i.badge }}</span>\r\n              </div>\r\n              <a *ngIf=\"!i.link\" [href]=\"i.externalLink\" [target]=\"i.target\" class=\"ms-page-nav__item\" role=\"treeitem\">\r\n                <span class=\"ms-page-nav__item-icon\"></span>\r\n                <span class=\"ms-page-nav__item-tit\">{{ i.text }}</span>\r\n                <span *ngIf=\"i.badge\" class=\"ms-page-nav__item-badge\">{{ i.badge }}</span>\r\n              </a>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"i.children.length > 0\">\r\n              <div class=\"ms-page-nav__item\" role=\"treeitem\" (click)=\"i.active = !i.active\">\r\n                <span class=\"ms-page-nav__item-icon\">\r\n                  <i nz-icon [nzType]=\"i.active ? 'caret-down' : 'caret-right'\"></i>\r\n                </span>\r\n                <span class=\"ms-page-nav__item-tit\">{{ i.text }}</span>\r\n              </div>\r\n              <ul role=\"tree\" class=\"list-unstyled\" [ngClass]=\"{ 'd-none': !i.active }\">\r\n                <ng-container *ngTemplateOutlet=\"treeTpl; context: { $implicit: i.children, level: level + 1 }\"></ng-container>\r\n              </ul>\r\n            </ng-container>\r\n          </li>\r\n        </ng-template>\r\n        <ul role=\"tree\" class=\"list-unstyled\">\r\n          <ng-container *ngTemplateOutlet=\"treeTpl; context: { $implicit: list, level: 1 }\"></ng-container>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"ms-page-nav__control\" (click)=\"toggle()\">\r\n  <div class=\"ms-page-nav__control-wrap\">\r\n    <div class=\"ms-page-nav__control-bg\"></div>\r\n    <div class=\"ms-page-nav__control-btn\">\r\n      <i nz-icon nzType=\"menu-fold\"></i>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
MSPageNavComponent.ctorParameters = () => [
    { type: BrandService },
    { type: Router },
    { type: TitleService },
    { type: MenuService },
    { type: ChangeDetectorRef }
];
MSPageNavComponent.propDecorators = {
    config: [{ type: Input }],
    list: [{ type: Input }]
};

class MSPageSingleComponent {
    // #endregion
    constructor(brand) {
        this.brand = brand;
        // #region fileds
        this.wide = true;
        this.fixed = false;
    }
    ngOnInit() { }
    ngOnChanges() {
        this.brand.setFixed(this.fixed);
    }
    ngOnDestroy() {
        this.brand.setFixed(false);
    }
}
MSPageSingleComponent.decorators = [
    { type: Component, args: [{
                selector: 'page-single',
                template: "<div class=\"ms-page-single__bar\">\r\n  <div class=\"ms-page-single__wrap\" [ngClass]=\"{ 'ms-page-single__wide': wide }\">\r\n    <div class=\"ms-page-single__bar-desc\">\r\n      <div *ngIf=\"title\" class=\"ms-page-single__bar-title\">\r\n        <ng-container *nzStringTemplateOutlet=\"title\">{{ title }}</ng-container>\r\n      </div>\r\n      <div *ngIf=\"subTitle\" class=\"ms-page-single__bar-sub-title\">\r\n        <ng-container *nzStringTemplateOutlet=\"subTitle\">{{ subTitle }}</ng-container>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"extra\" class=\"ms-page-single__bar-extra\">\r\n      <ng-container *nzStringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"ms-page-single__wrap ms-page-single__body\" [ngClass]=\"{ 'ms-page-single__wide': wide }\">\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                host: {
                    '[class.ms-page-single]': 'true',
                },
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
MSPageSingleComponent.ctorParameters = () => [
    { type: BrandService }
];
MSPageSingleComponent.propDecorators = {
    wide: [{ type: Input }],
    fixed: [{ type: Input }],
    title: [{ type: Input }],
    subTitle: [{ type: Input }],
    extra: [{ type: Input }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], MSPageSingleComponent.prototype, "wide", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], MSPageSingleComponent.prototype, "fixed", void 0);

class MSPanelComponent {
}
MSPanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'panel',
                template: "<div class=\"ms-panel__hd\">\r\n  <div *ngIf=\"title\" class=\"ms-panel__hd-title\">\r\n    <ng-container *nzStringTemplateOutlet=\"title\">{{ title }}</ng-container>\r\n  </div>\r\n  <div *ngIf=\"extra\" class=\"ms-panel__hd-extra\">\r\n    <ng-container *nzStringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\r\n  </div>\r\n</div>\r\n<div class=\"ms-panel__bd\">\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                host: {
                    '[class.ms-panel]': 'true',
                },
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
MSPanelComponent.propDecorators = {
    title: [{ type: Input }],
    extra: [{ type: Input }]
};

class MSServiceLayoutComponent {
    constructor(srv) {
        this.srv = srv;
        this.nav = false;
        this.navConfig = {};
        this.navList = [];
        this.hasConsoleCss = true;
    }
    get hideNav() {
        return this.srv.hideNav;
    }
}
MSServiceLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'service-layout',
                template: "<div class=\"alain-ms__product\" [ngClass]=\"{ 'alain-ms__product-col-1': nav && !hideNav }\">\r\n  <page-nav *ngIf=\"nav\" [config]=\"navConfig\" [list]=\"navList\"></page-nav>\r\n  <div class=\"alain-ms__product-body scrollbar\">\r\n    <div [ngClass]=\"{'alain-ms__console':hasConsoleCss}\">\r\n      <ng-content></ng-content>\r\n    </div>\r\n  </div>\r\n</div>\r\n"
            },] }
];
MSServiceLayoutComponent.ctorParameters = () => [
    { type: BrandService }
];
MSServiceLayoutComponent.propDecorators = {
    nav: [{ type: Input }],
    navConfig: [{ type: Input }],
    navList: [{ type: Input }],
    hasConsoleCss: [{ type: Input }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], MSServiceLayoutComponent.prototype, "nav", void 0);

const COMPONENTS = [
    MSHelpComponent,
    MSLinkToDirective,
    MSPageBarComponent,
    MSPageNavComponent,
    MSPageSingleComponent,
    MSPanelComponent,
    MSServiceLayoutComponent,
];
class MSSharedModule {
}
MSSharedModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, RouterModule, FormsModule, AlainThemeModule.forChild(), NzPopoverModule, NzIconModule, NzOutletModule, LocalizationModule],
                declarations: COMPONENTS,
                exports: COMPONENTS,
            },] }
];

class MSLayoutComponent {
    constructor(bm, mediaMatcher, router, route, msg, reuseTabSrv, el, renderer, srv, doc) {
        this.el = el;
        this.renderer = renderer;
        this.srv = srv;
        this.doc = doc;
        this.isFetching = false;
        // 是否单页，单页不显示侧边栏
        this.hasAllNav = false;
        this.hasSidebar = true;
        const routerData = Object.assign({ hasAllNav: false, hasSidebar: true }, route.snapshot.data);
        this.hasAllNav = routerData.hasAllNav === true;
        this.hasSidebar = routerData.hasSidebar === true;
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
MSLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'layout-ms',
                template: "<ms-topbar [allNav]=\"hasAllNav\"></ms-topbar>\r\n<ms-sidebar *ngIf=\"hasSidebar\"></ms-sidebar>\r\n<div class=\"brand-page-loading\" [hidden]=\"!isFetching\">\r\n  <nz-spin nzSpinning></nz-spin>\r\n</div>\r\n<div class=\"alain-ms__body\" [hidden]=\"isFetching\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n<!-- <help></help>\r\n<theme-btn></theme-btn> -->\r\n"
            },] }
];
MSLayoutComponent.ctorParameters = () => [
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

const LAYOUT_INIT_PROVIDERS = [
    {
        provide: APP_INITIALIZER,
        useFactory: init,
        deps: [Injector],
        multi: true,
    },
];
function init(injector) {
    return () => {
        listenRouter(injector);
    };
}
function listenRouter(injector) {
    const router = injector.get(Router);
    const layoutStateService = injector.get(LayoutStateService);
    router.events
        .pipe(filter((event) => event instanceof ResolveEnd))
        .subscribe((event) => {
        //const currentUrl = decodeURI(event.state.url.split('?')[0]);
        //layoutStateService.setStore({ currentUrl });
        layoutStateService.fetchPageNavs(event.state);
    });
}

// import { default as en_US } from './ms/_i18n/en-US';
// import { default as zh_CN } from './ms/_i18n/zh-CN';
// import { default as zh_TW } from './ms/_i18n/zh-TW';
const MS_WIDGETS = [MSAllNavComponent, MSSearchComponent, MSLangsComponent, MSUserComponent, MSNoticeComponent, MSRegionComponent];
const MS_COMPONENTS = [MSLayoutComponent, MSSidebarComponent, MSTopbarComponent, ...MS_WIDGETS];
const MS_SHARED_COMPONENTS = [
    MSHelpComponent,
    MSPageNavComponent,
    MSPageBarComponent,
    MSPageSingleComponent,
    MSPanelComponent,
    MSServiceLayoutComponent,
    MSLinkToDirective,
];
//const MS_COMPONENTS=[]
class LayoutModule {
    constructor() {
        // i18n.load('zh-CN', zh_CN);
        // i18n.load('zh-TW', zh_TW);
        // i18n.load('en-US', en_US);
    }
    static forRoot() {
        return {
            ngModule: LayoutModule,
            providers: [
                LAYOUT_INIT_PROVIDERS
                //LAYOUT_MENU_PROVIDERS
            ]
        };
    }
}
LayoutModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CoreModule,
                    RouterModule,
                    FormsModule,
                    DragDropModule,
                    MSSharedModule,
                    NzSpinModule,
                    NzAnchorModule,
                    NzAutocompleteModule,
                    NzAvatarModule,
                    NzDividerModule,
                    NzInputModule,
                    NzIconModule,
                    AlainThemeModule.forChild(),
                    ThemeBtnModule,
                ],
                declarations: [...MS_COMPONENTS],
                exports: [...MS_COMPONENTS, MS_SHARED_COMPONENTS]
            },] }
];
LayoutModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { BrandService, Layout, LayoutModule, LayoutStateService, MSAllNavComponent, MSAllNavService, MSHelpComponent, MSLangsComponent, MSLayoutComponent, MSLinkToDirective, MSNoticeComponent, MSPageBarComponent, MSPageNavComponent, MSPageSingleComponent, MSPanelComponent, MSProductService, MSRegionComponent, MSRegionService, MSSearchComponent, MSServiceLayoutComponent, MSSharedModule, MSSidebarComponent, MSTopbarComponent, MSTopbarService, MSUserComponent, MS_COMPONENTS, MS_SHARED_COMPONENTS, MS_WIDGETS, RoutesProcessor, LAYOUT_INIT_PROVIDERS as ɵa, init as ɵb };
//# sourceMappingURL=fs-tw-theme-alain-ms-layout.js.map

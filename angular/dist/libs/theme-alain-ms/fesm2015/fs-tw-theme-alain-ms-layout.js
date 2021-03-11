import { DOCUMENT, NgIf, NgForOf, NgClass, NgTemplateOutlet, AsyncPipe, CommonModule } from '@angular/common';
import { ɵɵinject, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, EventEmitter, ɵɵdirectiveInject, ɵɵdefineDirective, ɵɵlistener, Directive, Input, Output, HostListener, ɵɵelement, ɵɵgetCurrentView, ɵɵelementStart, ɵɵrestoreView, ɵɵnextContext, ɵɵtext, ɵɵelementEnd, ɵɵproperty, ɵɵpureFunction1, ɵɵadvance, ɵɵtextInterpolate1, ɵɵtemplate, ɵɵtextInterpolate, ɵɵreference, ɵɵclassMapInterpolate2, ChangeDetectorRef, ɵɵdefineComponent, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵclassProp, ɵɵtemplateRefExtractor, Component, ChangeDetectionStrategy, Inject, ViewChild, ɵɵelementContainerStart, ɵɵpipe, ɵɵelementContainerEnd, ɵɵpipeBind1, ɵɵclassMapInterpolate1, ɵɵpropertyInterpolate, Injector, ɵɵpropertyInterpolate1, ɵɵsanitizeUrl, ɵɵprojectionDef, ɵɵprojection, ɵɵelementContainer, ɵɵpureFunction2, ɵɵNgOnChangesFeature, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule, ElementRef, Renderer2, APP_INITIALIZER } from '@angular/core';
import { BehaviorSubject, of, Subject, merge } from 'rxjs';
import { map, takeUntil, auditTime, tap, debounceTime, distinctUntilChanged, switchMap, filter } from 'rxjs/operators';
import { BreakpointObserver, MediaMatcher } from '@angular/cdk/layout';
import { SettingsService, _HttpClient, MenuService, TitleService, ɵa, AlainThemeModule } from '@delon/theme';
import { ArrayService, deepCopy, InputBoolean, updateHostClass } from '@delon/util';
import { RoutesService, LocalizationPipe, ConfigStateService, SessionStateService, InternalStore, EnvironmentService, LocalizationModule, CoreModule } from '@abp/ng.core';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpinComponent, NzSpinModule } from 'ng-zorro-antd/spin';
import { Router, RouterLinkWithHref, NavigationEnd, RouterLinkActive, RouterLink, RouterModule, RouteConfigLoadStart, NavigationError, ActivatedRoute, RouterOutlet, ResolveEnd } from '@angular/router';
import snq from 'snq';
import { DA_SERVICE_TOKEN } from '@delon/auth';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzInputDirective, NzInputModule } from 'ng-zorro-antd/input';
import { DefaultValueAccessor, NgControlStatus, NgModel, FormsModule } from '@angular/forms';
import { NzAutocompleteTriggerDirective, NzAutocompleteComponent, NzAutocompleteOptionComponent, NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { AuthService } from '@fs-tw/account';
import { NzAnchorComponent, NzAnchorLinkComponent, NzAnchorModule } from 'ng-zorro-antd/anchor';
import { NzStringTemplateOutletDirective, NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzPopoverDirective, NzPopoverModule } from 'ng-zorro-antd/popover';
import { __decorate, __metadata } from 'tslib';
import { ReuseTabService } from '@delon/abc/reuse-tab';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ThemeBtnModule } from '@delon/theme/theme-btn';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDividerModule } from 'ng-zorro-antd/divider';

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
BrandService.ɵfac = function BrandService_Factory(t) { return new (t || BrandService)(ɵɵinject(BreakpointObserver), ɵɵinject(SettingsService)); };
BrandService.ɵprov = ɵɵdefineInjectable({ token: BrandService, factory: BrandService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(BrandService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: BreakpointObserver }, { type: SettingsService }]; }, null); })();

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
MSAllNavService.ɵfac = function MSAllNavService_Factory(t) { return new (t || MSAllNavService)(ɵɵinject(RoutesService), ɵɵinject(LocalizationPipe), ɵɵinject(_HttpClient), ɵɵinject(ArrayService)); };
MSAllNavService.ɵprov = ɵɵdefineInjectable({ token: MSAllNavService, factory: MSAllNavService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(MSAllNavService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: RoutesService }, { type: LocalizationPipe }, { type: _HttpClient }, { type: ArrayService }]; }, null); })();

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
MSLinkToDirective.ɵfac = function MSLinkToDirective_Factory(t) { return new (t || MSLinkToDirective)(ɵɵdirectiveInject(Router)); };
MSLinkToDirective.ɵdir = ɵɵdefineDirective({ type: MSLinkToDirective, selectors: [["", "link-to", ""]], hostBindings: function MSLinkToDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("click", function MSLinkToDirective_click_HostBindingHandler($event) { return ctx._click($event); });
    } }, inputs: { i: ["link-to", "i"] }, outputs: { linkToChanged: "linkToChanged" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(MSLinkToDirective, [{
        type: Directive,
        args: [{ selector: '[link-to]' }]
    }], function () { return [{ type: Router }]; }, { i: [{
            type: Input,
            args: ['link-to']
        }], linkToChanged: [{
            type: Output
        }], _click: [{
            type: HostListener,
            args: ['click', ['$event']]
        }] }); })();

const _c0 = ["dropdown"];
function MSAllNavComponent_nz_spin_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "nz-spin");
} }
const _c1 = function (a0) { return { "alain-ms__an-menu-item--active": a0 }; };
function MSAllNavComponent_ng_template_3_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 10);
    ɵɵlistener("mouseenter", function MSAllNavComponent_ng_template_3_li_1_Template_li_mouseenter_0_listener() { ɵɵrestoreView(_r11); const i_r9 = ctx.$implicit; const ctx_r10 = ɵɵnextContext(2); return ctx_r10.mouseHandle(i_r9, true); });
    ɵɵtext(1);
    ɵɵelement(2, "i", 11);
    ɵɵelementEnd();
} if (rf & 2) {
    const i_r9 = ctx.$implicit;
    ɵɵproperty("ngClass", ɵɵpureFunction1(2, _c1, i_r9.active));
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", i_r9.text, " ");
} }
function MSAllNavComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "ul", 8);
    ɵɵtemplate(1, MSAllNavComponent_ng_template_3_li_1_Template, 3, 4, "li", 9);
    ɵɵelementEnd();
} if (rf & 2) {
    const ls_r7 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ls_r7);
} }
function MSAllNavComponent_ng_template_5_div_0_a_4_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 19);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const i_r16 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(i_r16.tip);
} }
function MSAllNavComponent_ng_template_5_div_0_a_4_Template(rf, ctx) { if (rf & 1) {
    const _r20 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 17);
    ɵɵlistener("linkToChanged", function MSAllNavComponent_ng_template_5_div_0_a_4_Template_a_linkToChanged_0_listener() { ɵɵrestoreView(_r20); const ctx_r19 = ɵɵnextContext(3); return ctx_r19._leave(); });
    ɵɵtext(1);
    ɵɵtemplate(2, MSAllNavComponent_ng_template_5_div_0_a_4_span_2_Template, 2, 1, "span", 18);
    ɵɵelementEnd();
} if (rf & 2) {
    const i_r16 = ctx.$implicit;
    ɵɵproperty("link-to", i_r16);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", i_r16.text, " ");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", i_r16.tip);
} }
function MSAllNavComponent_ng_template_5_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 13);
    ɵɵelementStart(1, "h3", 14);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 15);
    ɵɵtemplate(4, MSAllNavComponent_ng_template_5_div_0_a_4_Template, 3, 3, "a", 16);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const p_r14 = ctx.$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate(p_r14.text);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", p_r14.list);
} }
function MSAllNavComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, MSAllNavComponent_ng_template_5_div_0_Template, 5, 2, "div", 12);
} if (rf & 2) {
    const ls_r12 = ctx.$implicit;
    ɵɵproperty("ngForOf", ls_r12);
} }
function MSAllNavComponent_div_9_ng_template_3_Template(rf, ctx) { }
function MSAllNavComponent_div_9_div_4_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r29 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 30);
    ɵɵlistener("linkToChanged", function MSAllNavComponent_div_9_div_4_a_1_Template_a_linkToChanged_0_listener() { ɵɵrestoreView(_r29); const ctx_r28 = ɵɵnextContext(3); return ctx_r28._leave(); });
    ɵɵtext(1);
    ɵɵelement(2, "i", 31);
    ɵɵelementEnd();
} if (rf & 2) {
    const i_r27 = ctx.$implicit;
    ɵɵproperty("link-to", i_r27);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", i_r27.text, " ");
} }
function MSAllNavComponent_div_9_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 28);
    ɵɵtemplate(1, MSAllNavComponent_div_9_div_4_a_1_Template, 3, 2, "a", 29);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r22 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r22.data.navBottom);
} }
function MSAllNavComponent_div_9_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 32);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r23 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r23.data.bottomText);
} }
function MSAllNavComponent_div_9_div_6_ng_template_2_Template(rf, ctx) { }
const _c2 = function (a0) { return { "alain-ms__an-level2-active": a0 }; };
const _c3 = function (a0) { return { $implicit: a0 }; };
function MSAllNavComponent_div_9_div_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 33);
    ɵɵelementStart(1, "div", 22);
    ɵɵtemplate(2, MSAllNavComponent_div_9_div_6_ng_template_2_Template, 0, 0, "ng-template", 23);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const p_r30 = ctx.$implicit;
    ɵɵnextContext(2);
    const _r1 = ɵɵreference(4);
    ɵɵproperty("ngClass", ɵɵpureFunction1(3, _c2, p_r30.active));
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", _r1)("ngTemplateOutletContext", ɵɵpureFunction1(5, _c3, p_r30.children));
} }
function MSAllNavComponent_div_9_div_7_div_1_div_1_ng_template_1_Template(rf, ctx) { }
function MSAllNavComponent_div_9_div_7_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 39);
    ɵɵtemplate(1, MSAllNavComponent_div_9_div_7_div_1_div_1_ng_template_1_Template, 0, 0, "ng-template", 23);
    ɵɵelementEnd();
} if (rf & 2) {
    const col_r36 = ctx.$implicit;
    ɵɵnextContext(4);
    const _r3 = ɵɵreference(6);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r3)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c3, col_r36.list));
} }
function MSAllNavComponent_div_9_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 37);
    ɵɵtemplate(1, MSAllNavComponent_div_9_div_7_div_1_div_1_Template, 2, 4, "div", 38);
    ɵɵelementEnd();
} if (rf & 2) {
    const i_r32 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", i_r32._left);
} }
function MSAllNavComponent_div_9_div_7_div_2_ng_template_1_Template(rf, ctx) { }
function MSAllNavComponent_div_9_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 40);
    ɵɵtemplate(1, MSAllNavComponent_div_9_div_7_div_2_ng_template_1_Template, 0, 0, "ng-template", 23);
    ɵɵelementEnd();
} if (rf & 2) {
    const i_r32 = ɵɵnextContext().$implicit;
    ɵɵnextContext(2);
    const _r3 = ɵɵreference(6);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r3)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c3, i_r32.right));
} }
const _c4 = function (a0) { return { "alain-ms__an-content-active": a0 }; };
function MSAllNavComponent_div_9_div_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 34);
    ɵɵtemplate(1, MSAllNavComponent_div_9_div_7_div_1_Template, 2, 1, "div", 35);
    ɵɵtemplate(2, MSAllNavComponent_div_9_div_7_div_2_Template, 2, 4, "div", 36);
    ɵɵelementEnd();
} if (rf & 2) {
    const i_r32 = ctx.$implicit;
    ɵɵclassMapInterpolate2("alain-ms__an-content alain-ms__an-level", i_r32.level, "-content alain-ms__an-left-col-", i_r32.leftColumn, "");
    ɵɵproperty("ngClass", ɵɵpureFunction1(7, _c4, i_r32.active));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", i_r32._left && i_r32._left.length > 0);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", i_r32.right && i_r32.right.length > 0);
} }
function MSAllNavComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 20);
    ɵɵelementStart(1, "div", 21);
    ɵɵelementStart(2, "div", 22);
    ɵɵtemplate(3, MSAllNavComponent_div_9_ng_template_3_Template, 0, 0, "ng-template", 23);
    ɵɵtemplate(4, MSAllNavComponent_div_9_div_4_Template, 2, 1, "div", 24);
    ɵɵtemplate(5, MSAllNavComponent_div_9_div_5_Template, 2, 1, "div", 25);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtemplate(6, MSAllNavComponent_div_9_div_6_Template, 3, 7, "div", 26);
    ɵɵtemplate(7, MSAllNavComponent_div_9_div_7_Template, 3, 9, "div", 27);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = ɵɵnextContext();
    const _r1 = ɵɵreference(4);
    ɵɵadvance(3);
    ɵɵproperty("ngTemplateOutlet", _r1)("ngTemplateOutletContext", ɵɵpureFunction1(6, _c3, ctx_r6.data.nav));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r6.data.navBottom);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r6.data.bottomText);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r6.allL2);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r6.allPanel);
} }
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
MSAllNavComponent.ɵfac = function MSAllNavComponent_Factory(t) { return new (t || MSAllNavComponent)(ɵɵdirectiveInject(MSAllNavService), ɵɵdirectiveInject(BrandService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(DOCUMENT)); };
MSAllNavComponent.ɵcmp = ɵɵdefineComponent({ type: MSAllNavComponent, selectors: [["ms-all-nav"]], viewQuery: function MSAllNavComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0, 3);
    } if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dropdownEl = _t.first);
    } }, hostVars: 2, hostBindings: function MSAllNavComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("mouseenter", function MSAllNavComponent_mouseenter_HostBindingHandler() { return ctx._enter(); })("mouseleave", function MSAllNavComponent_mouseleave_HostBindingHandler() { return ctx._leave(); });
    } if (rf & 2) {
        ɵɵclassProp("alain-ms__an-active", ctx.validOpen);
    } }, decls: 10, vars: 2, consts: [[1, "alain-ms__an-trigger"], ["nz-icon", "", "nzType", "bars"], [4, "ngIf"], ["menuTpl", ""], ["categoryTpl", ""], [1, "alain-ms__an-dropdown"], ["dropdown", ""], ["class", "alain-ms__an", 4, "ngIf"], [1, "alain-ms__an-menu"], ["class", "alain-ms__an-menu-item", 3, "ngClass", "mouseenter", 4, "ngFor", "ngForOf"], [1, "alain-ms__an-menu-item", 3, "ngClass", "mouseenter"], ["nz-icon", "", "nzType", "right"], ["class", "alain-ms__an-category", 4, "ngFor", "ngForOf"], [1, "alain-ms__an-category"], [1, "alain-ms__an-category-title"], [1, "alain-ms__an-category-list"], ["class", "alain-ms__an-category-link", 3, "link-to", "linkToChanged", 4, "ngFor", "ngForOf"], [1, "alain-ms__an-category-link", 3, "link-to", "linkToChanged"], ["class", "alain-ms__an-category-tip", 4, "ngIf"], [1, "alain-ms__an-category-tip"], [1, "alain-ms__an"], [1, "alain-ms__an-panel", "alain-ms__an-panel-active", "alain-ms__an-level1"], [1, "alain-ms__an-panel-inner"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "alain-ms__an-menu-bottom", 4, "ngIf"], ["class", "alain-ms__an-bottom", 4, "ngIf"], ["class", "alain-ms__an-panel alain-ms__an-level2", 3, "ngClass", 4, "ngFor", "ngForOf"], [3, "class", "ngClass", 4, "ngFor", "ngForOf"], [1, "alain-ms__an-menu-bottom"], [3, "link-to", "linkToChanged", 4, "ngFor", "ngForOf"], [3, "link-to", "linkToChanged"], ["nz-icon", "", "nzType", "share-alt"], [1, "alain-ms__an-bottom"], [1, "alain-ms__an-panel", "alain-ms__an-level2", 3, "ngClass"], [3, "ngClass"], ["class", "alain-ms__an-left", 4, "ngIf"], ["class", "alain-ms__an-right", 4, "ngIf"], [1, "alain-ms__an-left"], ["class", "alain-ms__an-left-col", 4, "ngFor", "ngForOf"], [1, "alain-ms__an-left-col"], [1, "alain-ms__an-right"]], template: function MSAllNavComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelement(1, "i", 1);
        ɵɵtemplate(2, MSAllNavComponent_nz_spin_2_Template, 1, 0, "nz-spin", 2);
        ɵɵelementEnd();
        ɵɵtemplate(3, MSAllNavComponent_ng_template_3_Template, 2, 1, "ng-template", null, 3, ɵɵtemplateRefExtractor);
        ɵɵtemplate(5, MSAllNavComponent_ng_template_5_Template, 1, 1, "ng-template", null, 4, ɵɵtemplateRefExtractor);
        ɵɵelementStart(7, "div", 5, 6);
        ɵɵtemplate(9, MSAllNavComponent_div_9_Template, 8, 8, "div", 7);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.open && !ctx.data);
        ɵɵadvance(7);
        ɵɵproperty("ngIf", ctx.data);
    } }, directives: [NzIconDirective, NgIf, NzSpinComponent, NgForOf, NgClass, MSLinkToDirective, NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(MSAllNavComponent, [{
        type: Component,
        args: [{
                selector: 'ms-all-nav',
                templateUrl: './all-nav.component.html',
                host: {
                    '[class.alain-ms__an-active]': 'validOpen',
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: MSAllNavService }, { type: BrandService }, { type: ChangeDetectorRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, { dropdownEl: [{
            type: ViewChild,
            args: ['dropdown', { static: true }]
        }], _enter: [{
            type: HostListener,
            args: ['mouseenter']
        }], _leave: [{
            type: HostListener,
            args: ['mouseleave']
        }] }); })();

function MSLangsComponent_ng_container_0_li_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 4);
    ɵɵlistener("click", function MSLangsComponent_ng_container_0_li_5_Template_li_click_0_listener() { ɵɵrestoreView(_r5); const lang_r3 = ctx.$implicit; const ctx_r4 = ɵɵnextContext(2); return ctx_r4.change(lang_r3.cultureName); });
    ɵɵelementStart(1, "a", 5);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const lang_r3 = ctx.$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate(lang_r3 == null ? null : lang_r3.displayName);
} }
function MSLangsComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span", 1);
    ɵɵelementStart(2, "span");
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(4, "ul", 2);
    ɵɵtemplate(5, MSLangsComponent_ng_container_0_li_5_Template, 3, 1, "li", 3);
    ɵɵpipe(6, "async");
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const defaultLang_r1 = ctx.ngIf;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵtextInterpolate(defaultLang_r1.displayName);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ɵɵpipeBind1(6, 2, ctx_r0.dropdownLanguages$));
} }
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
MSLangsComponent.ɵfac = function MSLangsComponent_Factory(t) { return new (t || MSLangsComponent)(ɵɵdirectiveInject(ConfigStateService), ɵɵdirectiveInject(SessionStateService)); };
MSLangsComponent.ɵcmp = ɵɵdefineComponent({ type: MSLangsComponent, selectors: [["ms-langs"]], hostVars: 4, hostBindings: function MSLangsComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵɵclassProp("alain-ms__topbar-item", true)("alain-ms__topbar-dd", true);
    } }, decls: 2, vars: 3, consts: [[4, "ngIf"], [1, "alain-ms__topbar-item-btn"], [1, "alain-ms__topbar-dd-menu"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], [1, "alain-ms__topbar-dd-item"]], template: function MSLangsComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, MSLangsComponent_ng_container_0_Template, 7, 4, "ng-container", 0);
        ɵɵpipe(1, "async");
    } if (rf & 2) {
        ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.defaultLanguage$));
    } }, directives: [NgIf, NgForOf], pipes: [AsyncPipe], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(MSLangsComponent, [{
        type: Component,
        args: [{
                selector: 'ms-langs',
                templateUrl: './langs.component.html',
                host: {
                    '[class.alain-ms__topbar-item]': 'true',
                    '[class.alain-ms__topbar-dd]': 'true',
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: ConfigStateService }, { type: SessionStateService }]; }, null); })();

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
MSTopbarService.ɵfac = function MSTopbarService_Factory(t) { return new (t || MSTopbarService)(ɵɵinject(_HttpClient)); };
MSTopbarService.ɵprov = ɵɵdefineInjectable({ token: MSTopbarService, factory: MSTopbarService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(MSTopbarService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _HttpClient }]; }, null); })();

function MSNoticeComponent_em_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "em", 9);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r0.list.length);
} }
function MSNoticeComponent_a_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "a", 10);
    ɵɵelementStart(1, "div", 11);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "span", 12);
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const i_r2 = ctx.$implicit;
    ɵɵproperty("link-to", i_r2);
    ɵɵadvance(2);
    ɵɵtextInterpolate(i_r2.title);
    ɵɵadvance(2);
    ɵɵtextInterpolate(i_r2.time);
} }
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
MSNoticeComponent.ɵfac = function MSNoticeComponent_Factory(t) { return new (t || MSNoticeComponent)(ɵɵdirectiveInject(MSTopbarService), ɵɵdirectiveInject(Router), ɵɵdirectiveInject(DA_SERVICE_TOKEN), ɵɵdirectiveInject(SettingsService), ɵɵdirectiveInject(NzMessageService)); };
MSNoticeComponent.ɵcmp = ɵɵdefineComponent({ type: MSNoticeComponent, selectors: [["ms-notice"]], hostVars: 6, hostBindings: function MSNoticeComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵɵclassProp("alain-ms__topbar-item", true)("alain-ms__topbar-dd", true)("alain-ms__notice", true);
    } }, decls: 13, vars: 8, consts: [[1, "alain-ms__topbar-item-btn"], [1, "position-relative"], ["class", "alain-ms__topbar-item-num", 4, "ngIf"], [1, "alain-ms__topbar-dd-menu"], [1, "alain-ms__notice-hd"], [1, "brand-color", 3, "link-to"], ["class", "alain-ms__notice-item", 3, "link-to", 4, "ngFor", "ngForOf"], [1, "alain-ms__notice-fd"], [1, "d-block", "pt-sm", "pb-xs", "text-center", 3, "link-to"], [1, "alain-ms__topbar-item-num"], [1, "alain-ms__notice-item", 3, "link-to"], [1, "alain-ms__notice-item--title"], [1, "alain-ms__notice-item--time"]], template: function MSNoticeComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "span", 0);
        ɵɵelementStart(1, "span", 1);
        ɵɵtext(2);
        ɵɵtemplate(3, MSNoticeComponent_em_3_Template, 2, 1, "em", 2);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(4, "div", 3);
        ɵɵelementStart(5, "div", 4);
        ɵɵtext(6);
        ɵɵelementStart(7, "a", 5);
        ɵɵtext(8);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵtemplate(9, MSNoticeComponent_a_9_Template, 5, 3, "a", 6);
        ɵɵelementStart(10, "div", 7);
        ɵɵelementStart(11, "a", 8);
        ɵɵtext(12);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(2);
        ɵɵtextInterpolate1(" ", ctx.l.titleText, "");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.list.length > 0);
        ɵɵadvance(3);
        ɵɵtextInterpolate1(" ", ctx.l.title, " ");
        ɵɵadvance(1);
        ɵɵproperty("link-to", ctx.l.subscribe);
        ɵɵadvance(1);
        ɵɵtextInterpolate(ctx.l.subscribe.title);
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.list);
        ɵɵadvance(2);
        ɵɵproperty("link-to", ctx.l);
        ɵɵadvance(1);
        ɵɵtextInterpolate(ctx.l.text);
    } }, directives: [NgIf, MSLinkToDirective, NgForOf], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(MSNoticeComponent, [{
        type: Component,
        args: [{
                selector: 'ms-notice',
                templateUrl: './notice.component.html',
                host: {
                    '[class.alain-ms__topbar-item]': 'true',
                    '[class.alain-ms__topbar-dd]': 'true',
                    '[class.alain-ms__notice]': 'true',
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: MSTopbarService }, { type: Router }, { type: undefined, decorators: [{
                type: Inject,
                args: [DA_SERVICE_TOKEN]
            }] }, { type: SettingsService }, { type: NzMessageService }]; }, null); })();

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
MSRegionService.ɵfac = function MSRegionService_Factory(t) { return new (t || MSRegionService)(ɵɵinject(_HttpClient)); };
MSRegionService.ɵprov = ɵɵdefineInjectable({ token: MSRegionService, factory: MSRegionService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(MSRegionService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _HttpClient }]; }, null); })();

const _c0$1 = function (a0) { return { "brand-color": a0 }; };
function MSRegionComponent_ng_container_0_dl_7_dd_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "dd", 9);
    ɵɵlistener("click", function MSRegionComponent_ng_container_0_dl_7_dd_3_Template_dd_click_0_listener() { ɵɵrestoreView(_r6); const i_r4 = ctx.$implicit; const ctx_r5 = ɵɵnextContext(3); return ctx_r5.selected(i_r4); });
    ɵɵelementStart(1, "a", 10);
    ɵɵelement(2, "i");
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const i_r4 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ɵɵpureFunction1(5, _c0$1, i_r4.selected));
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("icon icon-", i_r4.country, "");
    ɵɵadvance(1);
    ɵɵtextInterpolate1("", i_r4.name, " ");
} }
function MSRegionComponent_ng_container_0_dl_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "dl", 6);
    ɵɵelementStart(1, "dt", 7);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵtemplate(3, MSRegionComponent_ng_container_0_dl_7_dd_3_Template, 4, 7, "dd", 8);
    ɵɵelementEnd();
} if (rf & 2) {
    const p_r2 = ctx.$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate(p_r2.name);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", p_r2.list);
} }
function MSRegionComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span", 1);
    ɵɵelement(2, "i");
    ɵɵelementStart(3, "span", 2);
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelement(5, "i", 3);
    ɵɵelementEnd();
    ɵɵelementStart(6, "div", 4);
    ɵɵtemplate(7, MSRegionComponent_ng_container_0_dl_7_Template, 4, 2, "dl", 5);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵclassMapInterpolate1("icon icon-", ctx_r0.srv.item.country, "");
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r0.srv.item.name);
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", ctx_r0.srv.list);
} }
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
MSRegionComponent.ɵfac = function MSRegionComponent_Factory(t) { return new (t || MSRegionComponent)(ɵɵdirectiveInject(MSRegionService), ɵɵdirectiveInject(ChangeDetectorRef)); };
MSRegionComponent.ɵcmp = ɵɵdefineComponent({ type: MSRegionComponent, selectors: [["ms-region"]], hostVars: 6, hostBindings: function MSRegionComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵɵclassProp("alain-ms__topbar-item", true)("alain-ms__topbar-dd", true)("alain-ms__region", true);
    } }, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "alain-ms__topbar-item-btn"], [1, "text-xs", "px-xs"], ["nz-icon", "", "nzType", "caret-up", 1, "alain-ms__topbar-item-btn-arrow"], [1, "alain-ms__topbar-dd-menu", "alain-ms__topbar-dd-left", "alain-ms__region--wrap", "clearfix"], ["class", "alain-ms__region--list", 4, "ngFor", "ngForOf"], [1, "alain-ms__region--list"], [1, "mb-sm"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], [1, "d-block", 3, "ngClass"]], template: function MSRegionComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, MSRegionComponent_ng_container_0_Template, 8, 5, "ng-container", 0);
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.inited);
    } }, directives: [NgIf, NzIconDirective, NgForOf, NgClass], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(MSRegionComponent, [{
        type: Component,
        args: [{
                selector: 'ms-region',
                templateUrl: './region.component.html',
                host: {
                    '[class.alain-ms__topbar-item]': 'true',
                    '[class.alain-ms__topbar-dd]': 'true',
                    '[class.alain-ms__region]': 'true',
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: MSRegionService }, { type: ChangeDetectorRef }]; }, null); })();

const _c0$2 = ["ipt"];
function MSSearchComponent_nz_auto_option_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "nz-auto-option", 8);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    ɵɵproperty("nzValue", item_r3);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", item_r3, " ");
} }
const _c1$1 = function (a0) { return { "alain-ms__search-active": a0 }; };
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
MSSearchComponent.ɵfac = function MSSearchComponent_Factory(t) { return new (t || MSSearchComponent)(ɵɵdirectiveInject(_HttpClient), ɵɵdirectiveInject(MSTopbarService), ɵɵdirectiveInject(ChangeDetectorRef)); };
MSSearchComponent.ɵcmp = ɵɵdefineComponent({ type: MSSearchComponent, selectors: [["ms-search"]], viewQuery: function MSSearchComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0$2, 3);
    } if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.ipt = _t.first);
    } }, hostVars: 4, hostBindings: function MSSearchComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("click", function MSSearchComponent_click_HostBindingHandler() { return ctx._click(); });
    } if (rf & 2) {
        ɵɵclassProp("alain-ms__topbar-item", true)("mr-md", true);
    } }, decls: 8, vars: 7, consts: [[1, "alain-ms__search", 3, "ngClass"], ["nz-input", "", 1, "alain-ms__search-ipt", 3, "placeholder", "ngModel", "nzAutocomplete", "ngModelChange", "input", "blur"], ["ipt", ""], ["nz-icon", "", "nzType", "search", 1, "alain-ms__search-icon"], [1, "alain-ms__search-outline"], [1, "asdlfkjlj"], ["searchAuto", ""], [3, "nzValue", 4, "ngFor", "ngForOf"], [3, "nzValue"]], template: function MSSearchComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "input", 1, 2);
        ɵɵlistener("ngModelChange", function MSSearchComponent_Template_input_ngModelChange_1_listener($event) { return ctx.q = $event; })("input", function MSSearchComponent_Template_input_input_1_listener($event) { return ctx.search$.next($event.target == null ? null : $event.target.value); })("blur", function MSSearchComponent_Template_input_blur_1_listener() { return ctx.show = false; });
        ɵɵelementEnd();
        ɵɵelement(3, "i", 3);
        ɵɵelement(4, "i", 4);
        ɵɵelementStart(5, "nz-autocomplete", 5, 6);
        ɵɵtemplate(7, MSSearchComponent_nz_auto_option_7_Template, 2, 2, "nz-auto-option", 7);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r1 = ɵɵreference(6);
        ɵɵproperty("ngClass", ɵɵpureFunction1(5, _c1$1, ctx.show));
        ɵɵadvance(1);
        ɵɵpropertyInterpolate("placeholder", ctx.l.placeholder);
        ɵɵproperty("ngModel", ctx.q)("nzAutocomplete", _r1);
        ɵɵadvance(6);
        ɵɵproperty("ngForOf", ctx.list);
    } }, directives: [NgClass, NzInputDirective, DefaultValueAccessor, NzAutocompleteTriggerDirective, NgControlStatus, NgModel, NzIconDirective, NzAutocompleteComponent, NgForOf, NzAutocompleteOptionComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(MSSearchComponent, [{
        type: Component,
        args: [{
                selector: 'ms-search',
                templateUrl: './search.component.html',
                host: {
                    '[class.alain-ms__topbar-item]': 'true',
                    '[class.mr-md]': 'true',
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: _HttpClient }, { type: MSTopbarService }, { type: ChangeDetectorRef }]; }, { ipt: [{
            type: ViewChild,
            args: ['ipt', { static: true }]
        }], _click: [{
            type: HostListener,
            args: ['click']
        }] }); })();

function MSUserComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 2);
    ɵɵlistener("click", function MSUserComponent_ng_template_0_Template_a_click_0_listener() { ɵɵrestoreView(_r4); const ctx_r3 = ɵɵnextContext(); return ctx_r3.initLogin(); });
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "AbpAccount::Login"));
} }
function MSUserComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "span", 4);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 5);
    ɵɵelementStart(4, "div", 6);
    ɵɵelementStart(5, "div", 7);
    ɵɵelementStart(6, "span", 8);
    ɵɵtext(7);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(8, "div", 9);
    ɵɵelementStart(9, "a", 10);
    ɵɵelement(10, "i", 11);
    ɵɵtext(11);
    ɵɵpipe(12, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(13, "div", 12);
    ɵɵelementStart(14, "a", 13);
    ɵɵlistener("click", function MSUserComponent_div_2_div_1_Template_a_click_14_listener() { ɵɵrestoreView(_r8); const ctx_r7 = ɵɵnextContext(2); return ctx_r7.logout(); });
    ɵɵtext(15);
    ɵɵpipe(16, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const currentUser_r5 = ɵɵnextContext().ngIf;
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", currentUser_r5.userName, " ");
    ɵɵadvance(5);
    ɵɵtextInterpolate(currentUser_r5.userName);
    ɵɵadvance(4);
    ɵɵtextInterpolate1("", ɵɵpipeBind1(12, 4, "AbpAccount::ManageYourProfile"), " ");
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind1(16, 6, "AbpUi::Logout"));
} }
function MSUserComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, MSUserComponent_div_2_div_1_Template, 17, 8, "div", 3);
    ɵɵelementEnd();
} if (rf & 2) {
    const currentUser_r5 = ctx.ngIf;
    ɵɵnextContext();
    const _r0 = ɵɵreference(1);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", currentUser_r5.isAuthenticated)("ngIfElse", _r0);
} }
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
MSUserComponent.ɵfac = function MSUserComponent_Factory(t) { return new (t || MSUserComponent)(ɵɵdirectiveInject(AuthService), ɵɵdirectiveInject(Router), ɵɵdirectiveInject(ConfigStateService), ɵɵdirectiveInject(MSTopbarService), ɵɵdirectiveInject(SettingsService)); };
MSUserComponent.ɵcmp = ɵɵdefineComponent({ type: MSUserComponent, selectors: [["ms-user"]], hostVars: 6, hostBindings: function MSUserComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵɵclassProp("alain-ms__topbar-item", true)("alain-ms__topbar-dd", true)("alain-ms__user", true);
    } }, decls: 4, vars: 3, consts: [["loginBtnTpl", ""], [4, "ngIf"], [1, "alain-ms__topbar-item-btn", 3, "click"], [4, "ngIf", "ngIfElse"], [1, "alain-ms__topbar-item-btn"], [1, "alain-ms__topbar-dd-menu", "width-md"], [1, "alain-ms__user-hd"], [1, "d-flex"], [1, "ml-md"], [1, "alain-ms__user-bd"], ["routerLink", "/account/manage-profile", 1, "alain-ms__user-bd-item"], ["nz-icon", "", "nzType", "safety"], [1, "alain-ms__user-fd"], [1, "d-block", "pt-sm", "pb-xs", "text-center", 3, "click"]], template: function MSUserComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, MSUserComponent_ng_template_0_Template, 3, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        ɵɵtemplate(2, MSUserComponent_div_2_Template, 2, 2, "div", 1);
        ɵɵpipe(3, "async");
    } if (rf & 2) {
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ɵɵpipeBind1(3, 1, ctx.currentUser$));
    } }, directives: [NgIf, RouterLinkWithHref, NzIconDirective], pipes: [AsyncPipe, LocalizationPipe], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(MSUserComponent, [{
        type: Component,
        args: [{
                selector: 'ms-user',
                templateUrl: './user.component.html',
                host: {
                    '[class.alain-ms__topbar-item]': 'true',
                    '[class.alain-ms__topbar-dd]': 'true',
                    '[class.alain-ms__user]': 'true',
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: AuthService }, { type: Router }, { type: ConfigStateService }, { type: MSTopbarService }, { type: SettingsService }]; }, null); })();

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
LayoutStateService.ɵfac = function LayoutStateService_Factory(t) { return new (t || LayoutStateService)(ɵɵinject(Injector), ɵɵinject(LocalizationPipe)); };
LayoutStateService.ɵprov = ɵɵdefineInjectable({ token: LayoutStateService, factory: LayoutStateService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(LayoutStateService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: Injector }, { type: LocalizationPipe }]; }, null); })();

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
MSProductService.ɵfac = function MSProductService_Factory(t) { return new (t || MSProductService)(ɵɵinject(LayoutStateService)); };
MSProductService.ɵprov = ɵɵdefineInjectable({ token: MSProductService, factory: MSProductService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(MSProductService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: LayoutStateService }]; }, null); })();

const _c0$3 = ["categoryEl"];
function MSSidebarComponent_ng_container_0_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 17);
    ɵɵlistener("click", function MSSidebarComponent_ng_container_0_div_2_Template_div_click_0_listener() { ɵɵrestoreView(_r8); const ctx_r7 = ɵɵnextContext(2); return ctx_r7.showProduct = !ctx_r7.showProduct; });
    ɵɵelementStart(1, "div", 18);
    ɵɵelement(2, "i", 19);
    ɵɵelementStart(3, "span", 20);
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementStart(5, "span", 21);
    ɵɵelement(6, "i", 22);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance(4);
    ɵɵtextInterpolate(ctx_r2.l.text);
} }
function MSSidebarComponent_ng_container_0_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r12 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 23);
    ɵɵelementStart(1, "i", 24);
    ɵɵlistener("linkToChanged", function MSSidebarComponent_ng_container_0_li_4_Template_i_linkToChanged_1_listener() { ɵɵrestoreView(_r12); const ctx_r11 = ɵɵnextContext(2); return ctx_r11.showProduct = false; });
    ɵɵelementEnd();
    ɵɵelementStart(2, "a", 25);
    ɵɵlistener("linkToChanged", function MSSidebarComponent_ng_container_0_li_4_Template_a_linkToChanged_2_listener() { ɵɵrestoreView(_r12); const ctx_r13 = ɵɵnextContext(2); return ctx_r13.showProduct = false; });
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const i_r9 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("alain-ms__sidebar-product-icon ", i_r9.icon, " ");
    ɵɵproperty("link-to", i_r9);
    ɵɵadvance(1);
    ɵɵproperty("link-to", i_r9);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", i_r9.name, " ");
} }
const _c1$2 = function (a0) { return { "alain-ms__products-category-item-active": a0 }; };
function MSSidebarComponent_ng_container_0_div_14_div_1_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r20 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 32);
    ɵɵelementStart(1, "a", 33);
    ɵɵlistener("linkToChanged", function MSSidebarComponent_ng_container_0_div_14_div_1_li_4_Template_a_linkToChanged_1_listener() { ɵɵrestoreView(_r20); const ctx_r19 = ɵɵnextContext(4); return ctx_r19.showProduct = false; });
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const i_r18 = ctx.$implicit;
    ɵɵproperty("ngClass", ɵɵpureFunction1(3, _c1$2, i_r18.shortcut));
    ɵɵadvance(1);
    ɵɵproperty("link-to", i_r18);
    ɵɵadvance(1);
    ɵɵtextInterpolate(i_r18.name);
} }
function MSSidebarComponent_ng_container_0_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 28);
    ɵɵelementStart(1, "h3", 29);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "ul", 30);
    ɵɵtemplate(4, MSSidebarComponent_ng_container_0_div_14_div_1_li_4_Template, 3, 5, "li", 31);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const p_r16 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵpropertyInterpolate1("id", "product-cat-", p_r16._id, "");
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", p_r16.name, " ");
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", p_r16.products);
} }
function MSSidebarComponent_ng_container_0_div_14_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 26);
    ɵɵtemplate(1, MSSidebarComponent_ng_container_0_div_14_div_1_Template, 5, 3, "div", 27);
    ɵɵelementEnd();
} if (rf & 2) {
    const c_r14 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", c_r14);
} }
function MSSidebarComponent_ng_container_0_nz_link_17_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "nz-link", 34);
} if (rf & 2) {
    const i_r21 = ctx.$implicit;
    ɵɵpropertyInterpolate1("nzHref", "#product-cat-", i_r21._id, "");
    ɵɵproperty("nzTitle", i_r21.name);
} }
function MSSidebarComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r23 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 1);
    ɵɵtemplate(2, MSSidebarComponent_ng_container_0_div_2_Template, 7, 1, "div", 2);
    ɵɵelementStart(3, "ul", 3);
    ɵɵtemplate(4, MSSidebarComponent_ng_container_0_li_4_Template, 4, 6, "li", 4);
    ɵɵpipe(5, "async");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(6, "div", 5);
    ɵɵelementStart(7, "div", 6);
    ɵɵelementStart(8, "div", 7);
    ɵɵlistener("click", function MSSidebarComponent_ng_container_0_Template_div_click_8_listener() { ɵɵrestoreView(_r23); const ctx_r22 = ɵɵnextContext(); return ctx_r22.showProduct = false; });
    ɵɵelement(9, "i", 8);
    ɵɵelementEnd();
    ɵɵelementStart(10, "div", 9);
    ɵɵelementStart(11, "div", 10, 11);
    ɵɵelementStart(13, "div", 12);
    ɵɵtemplate(14, MSSidebarComponent_ng_container_0_div_14_Template, 2, 1, "div", 13);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(15, "div", 14);
    ɵɵelementStart(16, "nz-anchor", 15);
    ɵɵtemplate(17, MSSidebarComponent_ng_container_0_nz_link_17_Template, 1, 2, "nz-link", 16);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const store_r1 = ctx.ngIf;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngIf", store_r1.sidebarConfig.hasProductNav);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ɵɵpipeBind1(5, 4, ctx_r0.shortcuts$));
    ɵɵadvance(10);
    ɵɵproperty("ngForOf", ctx_r0.searchList);
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", ctx_r0.searchCategories);
} }
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
MSSidebarComponent.ɵfac = function MSSidebarComponent_Factory(t) { return new (t || MSSidebarComponent)(ɵɵdirectiveInject(LayoutStateService), ɵɵdirectiveInject(BrandService), ɵɵdirectiveInject(MSProductService), ɵɵdirectiveInject(ChangeDetectorRef)); };
MSSidebarComponent.ɵcmp = ɵɵdefineComponent({ type: MSSidebarComponent, selectors: [["ms-sidebar"]], viewQuery: function MSSidebarComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0$3, 1);
    } if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.categoryEl = _t.first);
    } }, hostVars: 4, hostBindings: function MSSidebarComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵɵclassProp("alain-ms__sidebar", true)("alain-ms__sidebar-showproduct", ctx.showProduct);
    } }, decls: 2, vars: 3, consts: [[4, "ngIf"], [1, "alain-ms__sidebar-wrap"], ["class", "alain-ms__sidebar-product-all", 3, "click", 4, "ngIf"], [1, "alain-ms__sidebar-product-quick"], ["class", "alain-ms__sidebar-product", 4, "ngFor", "ngForOf"], [1, "alain-ms__sidebar-products"], [1, "alain-ms__products"], [1, "alain-ms__products-close", 3, "click"], ["nz-icon", "", "nzType", "close"], [1, "alain-ms__products-left"], [1, "alain-ms__products-category-wrap"], ["categoryEl", ""], [1, "d-flex"], ["class", "alain-ms__products-category-column", 4, "ngFor", "ngForOf"], [1, "alain-ms__products-right"], ["nzAffix", "false", "nzContainer", ".alain-ms__products-category-wrap", "nzOffsetTop", "150", "nzShowInkInFixed", "false"], [3, "nzHref", "nzTitle", 4, "ngFor", "ngForOf"], [1, "alain-ms__sidebar-product-all", 3, "click"], [1, "alain-ms__sidebar-product", "alain-ms__sidebar-product-all-wrap"], ["nz-icon", "", "nzType", "appstore", 1, "alain-ms__sidebar-product-icon"], [1, "alain-ms__sidebar-product-name"], [1, "alain-ms__sidebar-product-toolbar"], ["nz-icon", "", "nzType", "right"], [1, "alain-ms__sidebar-product"], [3, "link-to", "linkToChanged"], [1, "alain-ms__sidebar-product-name", 3, "link-to", "linkToChanged"], [1, "alain-ms__products-category-column"], ["class", "alain-ms__products-category", 4, "ngFor", "ngForOf"], [1, "alain-ms__products-category"], [1, "alain-ms__products-category-title", 3, "id"], [1, "list-unstyled"], ["class", "alain-ms__products-category-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "alain-ms__products-category-item", 3, "ngClass"], [1, "alain-ms__products-category-item-link", 3, "link-to", "linkToChanged"], [3, "nzHref", "nzTitle"]], template: function MSSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, MSSidebarComponent_ng_container_0_Template, 18, 6, "ng-container", 0);
        ɵɵpipe(1, "async");
    } if (rf & 2) {
        ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.store$));
    } }, directives: [NgIf, NgForOf, NzIconDirective, NzAnchorComponent, MSLinkToDirective, NgClass, NzAnchorLinkComponent], pipes: [AsyncPipe], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(MSSidebarComponent, [{
        type: Component,
        args: [{
                selector: 'ms-sidebar',
                templateUrl: './sidebar.component.html',
                host: {
                    '[class.alain-ms__sidebar]': 'true',
                    '[class.alain-ms__sidebar-showproduct]': 'showProduct',
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: LayoutStateService }, { type: BrandService }, { type: MSProductService }, { type: ChangeDetectorRef }]; }, { categoryEl: [{
            type: ViewChild,
            args: ['categoryEl', { static: false }]
        }] }); })();

function MSTopbarComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "img", 8);
} }
function MSTopbarComponent_ms_all_nav_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "ms-all-nav");
} }
function MSTopbarComponent_img_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "img", 9);
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("src", ctx_r3.appInfo.logoUrl, ɵɵsanitizeUrl);
} }
function MSTopbarComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 10);
    ɵɵelement(1, "ms-langs");
    ɵɵelement(2, "ms-user");
    ɵɵelementEnd();
} }
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
MSTopbarComponent.ɵfac = function MSTopbarComponent_Factory(t) { return new (t || MSTopbarComponent)(ɵɵdirectiveInject(MSTopbarService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(EnvironmentService)); };
MSTopbarComponent.ɵcmp = ɵɵdefineComponent({ type: MSTopbarComponent, selectors: [["ms-topbar"]], hostVars: 4, hostBindings: function MSTopbarComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵɵclassProp("alain-ms__topbar", true)("alain-ms__topbar-single", ctx.allNav);
    } }, inputs: { allNav: "allNav" }, decls: 10, vars: 5, consts: [["defaultLogo", ""], [1, "alain-ms__topbar-main"], [4, "ngIf"], [1, "alain-ms__topbar-logo"], ["routerLink", "/", 1, "alain-ms__topbar-logo-img"], [3, "src", 4, "ngIf", "ngIfElse"], ["routerLink", "/", 1, "alain-ms__topbar-logo-link"], ["class", "alain-ms__topbar-widget", 4, "ngIf"], ["src", "./assets/logo-color.svg"], [3, "src"], [1, "alain-ms__topbar-widget"]], template: function MSTopbarComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, MSTopbarComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        ɵɵelementStart(2, "div", 1);
        ɵɵtemplate(3, MSTopbarComponent_ms_all_nav_3_Template, 1, 0, "ms-all-nav", 2);
        ɵɵelementStart(4, "div", 3);
        ɵɵelementStart(5, "a", 4);
        ɵɵtemplate(6, MSTopbarComponent_img_6_Template, 1, 1, "img", 5);
        ɵɵelementEnd();
        ɵɵelementStart(7, "a", 6);
        ɵɵtext(8);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵtemplate(9, MSTopbarComponent_div_9_Template, 3, 0, "div", 7);
    } if (rf & 2) {
        const _r0 = ɵɵreference(1);
        ɵɵadvance(3);
        ɵɵproperty("ngIf", ctx.allNav);
        ɵɵadvance(3);
        ɵɵproperty("ngIf", ctx.appInfo.logoUrl)("ngIfElse", _r0);
        ɵɵadvance(2);
        ɵɵtextInterpolate1(" ", ctx.appInfo.name, " ");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.inited);
    } }, directives: [NgIf, RouterLinkWithHref, MSAllNavComponent, MSLangsComponent, MSUserComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(MSTopbarComponent, [{
        type: Component,
        args: [{
                selector: 'ms-topbar',
                templateUrl: './topbar.component.html',
                host: {
                    '[class.alain-ms__topbar]': 'true',
                    '[class.alain-ms__topbar-single]': 'allNav',
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: MSTopbarService }, { type: ChangeDetectorRef }, { type: EnvironmentService }]; }, { allNav: [{
            type: Input
        }] }); })();

function MSHelpComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 3);
    ɵɵelement(1, "i", 4);
    ɵɵelementStart(2, "a", 5);
    ɵɵtext(3, " \u552E\u524D\u54A8\u8BE2\u7535\u8BDD ");
    ɵɵelementStart(4, "div", 6);
    ɵɵtext(5, "xxxx \u8F6C 1");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(6, "div", 3);
    ɵɵelement(7, "i", 7);
    ɵɵelementStart(8, "a", 8);
    ɵɵtext(9, " \u667A\u80FD\u987E\u95EE ");
    ɵɵelementStart(10, "div", 9);
    ɵɵtext(11, "\u667A\u80FD\u8BCA\u65AD\uFF0C\u79D2\u7EA7\u89E3\u7B54");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(12, "div", 10);
    ɵɵelement(13, "i", 11);
    ɵɵelementStart(14, "a", 5);
    ɵɵtext(15, " \u5EFA\u8BAE\u53CD\u9988 ");
    ɵɵelementStart(16, "div", 9);
    ɵɵtext(17, "XXX\u4E0D\u662F\u5B8C\u7F8E\u7684\uFF0C\u6211\u4EEC\u6E34\u671B\u60A8\u7684\u5EFA\u8BAE");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
class MSHelpComponent {
}
MSHelpComponent.ɵfac = function MSHelpComponent_Factory(t) { return new (t || MSHelpComponent)(); };
MSHelpComponent.ɵcmp = ɵɵdefineComponent({ type: MSHelpComponent, selectors: [["help"]], hostVars: 2, hostBindings: function MSHelpComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵɵclassProp("ms-help", true);
    } }, decls: 5, vars: 1, consts: [["nz-popover", "", "nzPopoverTrigger", "click", 1, "ms-help__wrap", 3, "nzPopoverContent"], [1, "ms-help__text"], ["helpTpl", ""], [1, "d-flex", "align-items-center", "mb-sm"], ["nz-icon", "", "nzType", "phone", 1, "mr-sm", "text-xl"], ["routerLink", "/"], [1, "text-orange", "text-xs"], ["nz-icon", "", "nzType", "customer-service", 1, "mr-sm", "text-xl"], ["routerLink", "/smart"], [1, "text-grey", "text-xs"], [1, "d-flex", "align-items-center"], ["nz-icon", "", "nzType", "edit", 1, "mr-sm", "text-xl"]], template: function MSHelpComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "span", 1);
        ɵɵtext(2, " \u54A8\u8BE2\u00B7\u5EFA\u8BAE ");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵtemplate(3, MSHelpComponent_ng_template_3_Template, 18, 0, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r0 = ɵɵreference(4);
        ɵɵproperty("nzPopoverContent", _r0);
    } }, directives: [NzPopoverDirective, NzIconDirective, RouterLinkWithHref], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(MSHelpComponent, [{
        type: Component,
        args: [{
                selector: 'help',
                templateUrl: './help.component.html',
                host: {
                    '[class.ms-help]': 'true',
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, null); })();

function MSPageBarComponent_h2_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, ctx_r2.title));
} }
function MSPageBarComponent_h2_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "h2", 4);
    ɵɵtemplate(1, MSPageBarComponent_h2_1_ng_container_1_Template, 3, 3, "ng-container", 5);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r0.title);
} }
function MSPageBarComponent_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, ctx_r3.subTitle));
} }
function MSPageBarComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 6);
    ɵɵtemplate(1, MSPageBarComponent_div_2_ng_container_1_Template, 3, 3, "ng-container", 5);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r1.subTitle);
} }
const _c0$4 = ["*"];
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
MSPageBarComponent.ɵfac = function MSPageBarComponent_Factory(t) { return new (t || MSPageBarComponent)(ɵɵdirectiveInject(Router), ɵɵdirectiveInject(BrandService), ɵɵdirectiveInject(MenuService), ɵɵdirectiveInject(ChangeDetectorRef)); };
MSPageBarComponent.ɵcmp = ɵɵdefineComponent({ type: MSPageBarComponent, selectors: [["page-bar"]], hostVars: 2, hostBindings: function MSPageBarComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵɵclassProp("ms-page-bar", true);
    } }, inputs: { autoTitle: "autoTitle", recursiveBreadcrumb: "recursiveBreadcrumb", title: "title", subTitle: "subTitle" }, ngContentSelectors: _c0$4, decls: 5, vars: 2, consts: [[1, "ms-page-bar__title"], ["class", "ms-page-bar__title-main", 4, "ngIf"], ["class", "ms-page-bar__title-sub", 4, "ngIf"], [1, "ms-page-bar__action"], [1, "ms-page-bar__title-main"], [4, "nzStringTemplateOutlet"], [1, "ms-page-bar__title-sub"]], template: function MSPageBarComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "div", 0);
        ɵɵtemplate(1, MSPageBarComponent_h2_1_Template, 2, 1, "h2", 1);
        ɵɵtemplate(2, MSPageBarComponent_div_2_Template, 2, 1, "div", 2);
        ɵɵelementEnd();
        ɵɵelementStart(3, "div", 3);
        ɵɵprojection(4);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.title);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.subTitle);
    } }, directives: [NgIf, NzStringTemplateOutletDirective], pipes: [LocalizationPipe], encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], MSPageBarComponent.prototype, "autoTitle", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], MSPageBarComponent.prototype, "recursiveBreadcrumb", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(MSPageBarComponent, [{
        type: Component,
        args: [{
                selector: 'page-bar',
                templateUrl: './page-bar.component.html',
                host: {
                    '[class.ms-page-bar]': 'true',
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: Router }, { type: BrandService }, { type: MenuService }, { type: ChangeDetectorRef }]; }, { autoTitle: [{
            type: Input
        }], recursiveBreadcrumb: [{
            type: Input
        }], title: [{
            type: Input
        }], subTitle: [{
            type: Input
        }] }); })();

function MSPageNavComponent_i_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 14);
} }
function MSPageNavComponent_ng_template_9_li_0_ng_container_1_div_1_span_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 23);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const i_r7 = ɵɵnextContext(3).$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(i_r7.badge);
} }
function MSPageNavComponent_ng_template_9_li_0_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 19);
    ɵɵelement(1, "span", 20);
    ɵɵelementStart(2, "span", 21);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵtemplate(4, MSPageNavComponent_ng_template_9_li_0_ng_container_1_div_1_span_4_Template, 2, 1, "span", 22);
    ɵɵelementEnd();
} if (rf & 2) {
    const i_r7 = ɵɵnextContext(2).$implicit;
    ɵɵpropertyInterpolate("routerLink", i_r7.link);
    ɵɵadvance(3);
    ɵɵtextInterpolate(i_r7.text);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", i_r7.badge);
} }
function MSPageNavComponent_ng_template_9_li_0_ng_container_1_a_2_span_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 23);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const i_r7 = ɵɵnextContext(3).$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(i_r7.badge);
} }
function MSPageNavComponent_ng_template_9_li_0_ng_container_1_a_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "a", 24);
    ɵɵelement(1, "span", 20);
    ɵɵelementStart(2, "span", 21);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵtemplate(4, MSPageNavComponent_ng_template_9_li_0_ng_container_1_a_2_span_4_Template, 2, 1, "span", 22);
    ɵɵelementEnd();
} if (rf & 2) {
    const i_r7 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("href", i_r7.externalLink, ɵɵsanitizeUrl)("target", i_r7.target);
    ɵɵadvance(3);
    ɵɵtextInterpolate(i_r7.text);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", i_r7.badge);
} }
function MSPageNavComponent_ng_template_9_li_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, MSPageNavComponent_ng_template_9_li_0_ng_container_1_div_1_Template, 5, 3, "div", 17);
    ɵɵtemplate(2, MSPageNavComponent_ng_template_9_li_0_ng_container_1_a_2_Template, 5, 4, "a", 18);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const i_r7 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", i_r7.link);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !i_r7.link);
} }
function MSPageNavComponent_ng_template_9_li_0_ng_container_2_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
const _c0$5 = function (a0) { return { "d-none": a0 }; };
const _c1$3 = function (a0, a1) { return { $implicit: a0, level: a1 }; };
function MSPageNavComponent_ng_template_9_li_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r22 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 25);
    ɵɵlistener("click", function MSPageNavComponent_ng_template_9_li_0_ng_container_2_Template_div_click_1_listener() { ɵɵrestoreView(_r22); const i_r7 = ɵɵnextContext().$implicit; return i_r7.active = !i_r7.active; });
    ɵɵelementStart(2, "span", 20);
    ɵɵelement(3, "i", 26);
    ɵɵelementEnd();
    ɵɵelementStart(4, "span", 21);
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(6, "ul", 27);
    ɵɵtemplate(7, MSPageNavComponent_ng_template_9_li_0_ng_container_2_ng_container_7_Template, 1, 0, "ng-container", 8);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const i_r7 = ɵɵnextContext().$implicit;
    const level_r5 = ɵɵnextContext().level;
    ɵɵnextContext();
    const _r1 = ɵɵreference(10);
    ɵɵadvance(3);
    ɵɵproperty("nzType", i_r7.active ? "caret-down" : "caret-right");
    ɵɵadvance(2);
    ɵɵtextInterpolate(i_r7.text);
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ɵɵpureFunction1(5, _c0$5, !i_r7.active));
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r1)("ngTemplateOutletContext", ɵɵpureFunction2(7, _c1$3, i_r7.children, level_r5 + 1));
} }
function MSPageNavComponent_ng_template_9_li_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "li");
    ɵɵtemplate(1, MSPageNavComponent_ng_template_9_li_0_ng_container_1_Template, 3, 2, "ng-container", 16);
    ɵɵtemplate(2, MSPageNavComponent_ng_template_9_li_0_ng_container_2_Template, 8, 10, "ng-container", 16);
    ɵɵelementEnd();
} if (rf & 2) {
    const i_r7 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", i_r7.children.length == 0);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", i_r7.children.length > 0);
} }
function MSPageNavComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, MSPageNavComponent_ng_template_9_li_0_Template, 3, 2, "li", 15);
} if (rf & 2) {
    const ls_r4 = ctx.$implicit;
    ɵɵproperty("ngForOf", ls_r4);
} }
function MSPageNavComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
const _c2$1 = function (a0) { return { "ms-page-nav__back": a0 }; };
const _c3$1 = function (a0) { return { $implicit: a0, level: 1 }; };
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
MSPageNavComponent.ɵfac = function MSPageNavComponent_Factory(t) { return new (t || MSPageNavComponent)(ɵɵdirectiveInject(BrandService), ɵɵdirectiveInject(Router), ɵɵdirectiveInject(TitleService), ɵɵdirectiveInject(MenuService), ɵɵdirectiveInject(ChangeDetectorRef)); };
MSPageNavComponent.ɵcmp = ɵɵdefineComponent({ type: MSPageNavComponent, selectors: [["page-nav"]], inputs: { config: "config", list: "list" }, features: [ɵɵNgOnChangesFeature], decls: 18, vars: 14, consts: [[1, "ms-page-nav__body"], [1, "ms-page-nav__stage"], [1, "ms-page-nav__scene", "ms-page-nav__scene-main"], [1, "ms-page-nav__title", 3, "ngClass", "title", "click"], ["nz-icon", "", "nzType", "left", 4, "ngIf"], [1, "ms-page-nav__list", "scrollbar"], ["treeTpl", ""], ["role", "tree", 1, "list-unstyled"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ms-page-nav__control", 3, "click"], [1, "ms-page-nav__control-wrap"], [1, "ms-page-nav__control-bg"], [1, "ms-page-nav__control-btn"], ["nz-icon", "", "nzType", "menu-fold"], ["nz-icon", "", "nzType", "left"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "ms-page-nav__item", "role", "treeitem", "routerLinkActive", "ms-page-nav__item-active", 3, "routerLink", 4, "ngIf"], ["class", "ms-page-nav__item", "role", "treeitem", 3, "href", "target", 4, "ngIf"], ["role", "treeitem", "routerLinkActive", "ms-page-nav__item-active", 1, "ms-page-nav__item", 3, "routerLink"], [1, "ms-page-nav__item-icon"], [1, "ms-page-nav__item-tit"], ["class", "ms-page-nav__item-badge", 4, "ngIf"], [1, "ms-page-nav__item-badge"], ["role", "treeitem", 1, "ms-page-nav__item", 3, "href", "target"], ["role", "treeitem", 1, "ms-page-nav__item", 3, "click"], ["nz-icon", "", 3, "nzType"], ["role", "tree", 1, "list-unstyled", 3, "ngClass"]], template: function MSPageNavComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵelementStart(2, "div", 2);
        ɵɵelementStart(3, "div", 3);
        ɵɵlistener("click", function MSPageNavComponent_Template_div_click_3_listener($event) { return ctx.to(ctx.config.backHref, $event); });
        ɵɵpipe(4, "i18n");
        ɵɵtemplate(5, MSPageNavComponent_i_5_Template, 1, 0, "i", 4);
        ɵɵtext(6);
        ɵɵpipe(7, "abpLocalization");
        ɵɵelementEnd();
        ɵɵelementStart(8, "div", 5);
        ɵɵtemplate(9, MSPageNavComponent_ng_template_9_Template, 1, 1, "ng-template", null, 6, ɵɵtemplateRefExtractor);
        ɵɵelementStart(11, "ul", 7);
        ɵɵtemplate(12, MSPageNavComponent_ng_container_12_Template, 1, 0, "ng-container", 8);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(13, "div", 9);
        ɵɵlistener("click", function MSPageNavComponent_Template_div_click_13_listener() { return ctx.toggle(); });
        ɵɵelementStart(14, "div", 10);
        ɵɵelement(15, "div", 11);
        ɵɵelementStart(16, "div", 12);
        ɵɵelement(17, "i", 13);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r1 = ɵɵreference(10);
        ɵɵadvance(3);
        ɵɵproperty("ngClass", ɵɵpureFunction1(10, _c2$1, ctx.config.backHref))("title", ctx.config.backHref ? ɵɵpipeBind1(4, 6, "ms.page-nav.back") : "");
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.config.backHref);
        ɵɵadvance(1);
        ɵɵtextInterpolate1(" ", ɵɵpipeBind1(7, 8, ctx.config.title), " ");
        ɵɵadvance(6);
        ɵɵproperty("ngTemplateOutlet", _r1)("ngTemplateOutletContext", ɵɵpureFunction1(12, _c3$1, ctx.list));
    } }, directives: [NgClass, NgIf, NgTemplateOutlet, NzIconDirective, NgForOf, RouterLinkActive, RouterLink], pipes: [ɵa, LocalizationPipe], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(MSPageNavComponent, [{
        type: Component,
        args: [{
                selector: 'page-nav',
                templateUrl: './page-nav.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: BrandService }, { type: Router }, { type: TitleService }, { type: MenuService }, { type: ChangeDetectorRef }]; }, { config: [{
            type: Input
        }], list: [{
            type: Input
        }] }); })();

function MSPageSingleComponent_div_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r3.title);
} }
function MSPageSingleComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵtemplate(1, MSPageSingleComponent_div_3_ng_container_1_Template, 2, 1, "ng-container", 8);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r0.title);
} }
function MSPageSingleComponent_div_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r4.subTitle);
} }
function MSPageSingleComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 9);
    ɵɵtemplate(1, MSPageSingleComponent_div_4_ng_container_1_Template, 2, 1, "ng-container", 8);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r1.subTitle);
} }
function MSPageSingleComponent_div_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r5.extra);
} }
function MSPageSingleComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 10);
    ɵɵtemplate(1, MSPageSingleComponent_div_5_ng_container_1_Template, 2, 1, "ng-container", 8);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r2.extra);
} }
const _c0$6 = function (a0) { return { "ms-page-single__wide": a0 }; };
const _c1$4 = ["*"];
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
MSPageSingleComponent.ɵfac = function MSPageSingleComponent_Factory(t) { return new (t || MSPageSingleComponent)(ɵɵdirectiveInject(BrandService)); };
MSPageSingleComponent.ɵcmp = ɵɵdefineComponent({ type: MSPageSingleComponent, selectors: [["page-single"]], hostVars: 2, hostBindings: function MSPageSingleComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵɵclassProp("ms-page-single", true);
    } }, inputs: { wide: "wide", fixed: "fixed", title: "title", subTitle: "subTitle", extra: "extra" }, features: [ɵɵNgOnChangesFeature], ngContentSelectors: _c1$4, decls: 8, vars: 9, consts: [[1, "ms-page-single__bar"], [1, "ms-page-single__wrap", 3, "ngClass"], [1, "ms-page-single__bar-desc"], ["class", "ms-page-single__bar-title", 4, "ngIf"], ["class", "ms-page-single__bar-sub-title", 4, "ngIf"], ["class", "ms-page-single__bar-extra", 4, "ngIf"], [1, "ms-page-single__wrap", "ms-page-single__body", 3, "ngClass"], [1, "ms-page-single__bar-title"], [4, "nzStringTemplateOutlet"], [1, "ms-page-single__bar-sub-title"], [1, "ms-page-single__bar-extra"]], template: function MSPageSingleComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵelementStart(2, "div", 2);
        ɵɵtemplate(3, MSPageSingleComponent_div_3_Template, 2, 1, "div", 3);
        ɵɵtemplate(4, MSPageSingleComponent_div_4_Template, 2, 1, "div", 4);
        ɵɵelementEnd();
        ɵɵtemplate(5, MSPageSingleComponent_div_5_Template, 2, 1, "div", 5);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(6, "div", 6);
        ɵɵprojection(7);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("ngClass", ɵɵpureFunction1(5, _c0$6, ctx.wide));
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.title);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.subTitle);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.extra);
        ɵɵadvance(1);
        ɵɵproperty("ngClass", ɵɵpureFunction1(7, _c0$6, ctx.wide));
    } }, directives: [NgClass, NgIf, NzStringTemplateOutletDirective], encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], MSPageSingleComponent.prototype, "wide", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], MSPageSingleComponent.prototype, "fixed", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(MSPageSingleComponent, [{
        type: Component,
        args: [{
                selector: 'page-single',
                templateUrl: './page-single.component.html',
                host: {
                    '[class.ms-page-single]': 'true',
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: BrandService }]; }, { wide: [{
            type: Input
        }], fixed: [{
            type: Input
        }], title: [{
            type: Input
        }], subTitle: [{
            type: Input
        }], extra: [{
            type: Input
        }] }); })();

function MSPanelComponent_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r2.title);
} }
function MSPanelComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 4);
    ɵɵtemplate(1, MSPanelComponent_div_1_ng_container_1_Template, 2, 1, "ng-container", 5);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r0.title);
} }
function MSPanelComponent_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r3.extra);
} }
function MSPanelComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 6);
    ɵɵtemplate(1, MSPanelComponent_div_2_ng_container_1_Template, 2, 1, "ng-container", 5);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r1.extra);
} }
const _c0$7 = ["*"];
class MSPanelComponent {
}
MSPanelComponent.ɵfac = function MSPanelComponent_Factory(t) { return new (t || MSPanelComponent)(); };
MSPanelComponent.ɵcmp = ɵɵdefineComponent({ type: MSPanelComponent, selectors: [["panel"]], hostVars: 2, hostBindings: function MSPanelComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵɵclassProp("ms-panel", true);
    } }, inputs: { title: "title", extra: "extra" }, ngContentSelectors: _c0$7, decls: 5, vars: 2, consts: [[1, "ms-panel__hd"], ["class", "ms-panel__hd-title", 4, "ngIf"], ["class", "ms-panel__hd-extra", 4, "ngIf"], [1, "ms-panel__bd"], [1, "ms-panel__hd-title"], [4, "nzStringTemplateOutlet"], [1, "ms-panel__hd-extra"]], template: function MSPanelComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "div", 0);
        ɵɵtemplate(1, MSPanelComponent_div_1_Template, 2, 1, "div", 1);
        ɵɵtemplate(2, MSPanelComponent_div_2_Template, 2, 1, "div", 2);
        ɵɵelementEnd();
        ɵɵelementStart(3, "div", 3);
        ɵɵprojection(4);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.title);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.extra);
    } }, directives: [NgIf, NzStringTemplateOutletDirective], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(MSPanelComponent, [{
        type: Component,
        args: [{
                selector: 'panel',
                templateUrl: './panel.component.html',
                host: {
                    '[class.ms-panel]': 'true',
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, { title: [{
            type: Input
        }], extra: [{
            type: Input
        }] }); })();

function MSServiceLayoutComponent_page_nav_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "page-nav", 4);
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("config", ctx_r0.navConfig)("list", ctx_r0.navList);
} }
const _c0$8 = function (a0) { return { "alain-ms__product-col-1": a0 }; };
const _c1$5 = function (a0) { return { "alain-ms__console": a0 }; };
const _c2$2 = ["*"];
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
MSServiceLayoutComponent.ɵfac = function MSServiceLayoutComponent_Factory(t) { return new (t || MSServiceLayoutComponent)(ɵɵdirectiveInject(BrandService)); };
MSServiceLayoutComponent.ɵcmp = ɵɵdefineComponent({ type: MSServiceLayoutComponent, selectors: [["service-layout"]], inputs: { nav: "nav", navConfig: "navConfig", navList: "navList", hasConsoleCss: "hasConsoleCss" }, ngContentSelectors: _c2$2, decls: 5, vars: 7, consts: [[1, "alain-ms__product", 3, "ngClass"], [3, "config", "list", 4, "ngIf"], [1, "alain-ms__product-body", "scrollbar"], [3, "ngClass"], [3, "config", "list"]], template: function MSServiceLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "div", 0);
        ɵɵtemplate(1, MSServiceLayoutComponent_page_nav_1_Template, 1, 2, "page-nav", 1);
        ɵɵelementStart(2, "div", 2);
        ɵɵelementStart(3, "div", 3);
        ɵɵprojection(4);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("ngClass", ɵɵpureFunction1(3, _c0$8, ctx.nav && !ctx.hideNav));
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.nav);
        ɵɵadvance(2);
        ɵɵproperty("ngClass", ɵɵpureFunction1(5, _c1$5, ctx.hasConsoleCss));
    } }, directives: [NgClass, NgIf, MSPageNavComponent], encapsulation: 2 });
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], MSServiceLayoutComponent.prototype, "nav", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(MSServiceLayoutComponent, [{
        type: Component,
        args: [{
                selector: 'service-layout',
                templateUrl: './service-layout.component.html',
            }]
    }], function () { return [{ type: BrandService }]; }, { nav: [{
            type: Input
        }], navConfig: [{
            type: Input
        }], navList: [{
            type: Input
        }], hasConsoleCss: [{
            type: Input
        }] }); })();

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
MSSharedModule.ɵfac = function MSSharedModule_Factory(t) { return new (t || MSSharedModule)(); };
MSSharedModule.ɵmod = ɵɵdefineNgModule({ type: MSSharedModule });
MSSharedModule.ɵinj = ɵɵdefineInjector({ imports: [[CommonModule, RouterModule, FormsModule, AlainThemeModule.forChild(), NzPopoverModule, NzIconModule, NzOutletModule, LocalizationModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(MSSharedModule, { declarations: [MSHelpComponent,
        MSLinkToDirective,
        MSPageBarComponent,
        MSPageNavComponent,
        MSPageSingleComponent,
        MSPanelComponent,
        MSServiceLayoutComponent], imports: [CommonModule, RouterModule, FormsModule, AlainThemeModule, NzPopoverModule, NzIconModule, NzOutletModule, LocalizationModule], exports: [MSHelpComponent,
        MSLinkToDirective,
        MSPageBarComponent,
        MSPageNavComponent,
        MSPageSingleComponent,
        MSPanelComponent,
        MSServiceLayoutComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(MSSharedModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, RouterModule, FormsModule, AlainThemeModule.forChild(), NzPopoverModule, NzIconModule, NzOutletModule, LocalizationModule],
                declarations: COMPONENTS,
                exports: COMPONENTS,
            }]
    }], null, null); })();

function MSLayoutComponent_ms_sidebar_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "ms-sidebar");
} }
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
MSLayoutComponent.ɵfac = function MSLayoutComponent_Factory(t) { return new (t || MSLayoutComponent)(ɵɵdirectiveInject(BreakpointObserver), ɵɵdirectiveInject(MediaMatcher), ɵɵdirectiveInject(Router), ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(NzMessageService), ɵɵdirectiveInject(ReuseTabService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(BrandService), ɵɵdirectiveInject(DOCUMENT)); };
MSLayoutComponent.ɵcmp = ɵɵdefineComponent({ type: MSLayoutComponent, selectors: [["layout-ms"]], decls: 6, vars: 4, consts: [[3, "allNav"], [4, "ngIf"], [1, "brand-page-loading", 3, "hidden"], ["nzSpinning", ""], [1, "alain-ms__body", 3, "hidden"]], template: function MSLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "ms-topbar", 0);
        ɵɵtemplate(1, MSLayoutComponent_ms_sidebar_1_Template, 1, 0, "ms-sidebar", 1);
        ɵɵelementStart(2, "div", 2);
        ɵɵelement(3, "nz-spin", 3);
        ɵɵelementEnd();
        ɵɵelementStart(4, "div", 4);
        ɵɵelement(5, "router-outlet");
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("allNav", ctx.hasAllNav);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.hasSidebar);
        ɵɵadvance(1);
        ɵɵproperty("hidden", !ctx.isFetching);
        ɵɵadvance(2);
        ɵɵproperty("hidden", ctx.isFetching);
    } }, directives: [MSTopbarComponent, NgIf, NzSpinComponent, RouterOutlet, MSSidebarComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(MSLayoutComponent, [{
        type: Component,
        args: [{
                selector: 'layout-ms',
                templateUrl: './ms.component.html',
            }]
    }], function () { return [{ type: BreakpointObserver }, { type: MediaMatcher }, { type: Router }, { type: ActivatedRoute }, { type: NzMessageService }, { type: ReuseTabService }, { type: ElementRef }, { type: Renderer2 }, { type: BrandService }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, null); })();

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
LayoutModule.ɵfac = function LayoutModule_Factory(t) { return new (t || LayoutModule)(); };
LayoutModule.ɵmod = ɵɵdefineNgModule({ type: LayoutModule });
LayoutModule.ɵinj = ɵɵdefineInjector({ imports: [[
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
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(LayoutModule, { declarations: [MSLayoutComponent, MSSidebarComponent, MSTopbarComponent, MSAllNavComponent, MSSearchComponent, MSLangsComponent, MSUserComponent, MSNoticeComponent, MSRegionComponent], imports: [CoreModule,
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
        NzIconModule, AlainThemeModule, ThemeBtnModule], exports: [MSLayoutComponent, MSSidebarComponent, MSTopbarComponent, MSAllNavComponent, MSSearchComponent, MSLangsComponent, MSUserComponent, MSNoticeComponent, MSRegionComponent, MSHelpComponent,
        MSPageNavComponent,
        MSPageBarComponent,
        MSPageSingleComponent,
        MSPanelComponent,
        MSServiceLayoutComponent,
        MSLinkToDirective] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(LayoutModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], function () { return []; }, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { BrandService, Layout, LayoutModule, LayoutStateService, MSAllNavComponent, MSAllNavService, MSHelpComponent, MSLangsComponent, MSLayoutComponent, MSLinkToDirective, MSNoticeComponent, MSPageBarComponent, MSPageNavComponent, MSPageSingleComponent, MSPanelComponent, MSProductService, MSRegionComponent, MSRegionService, MSSearchComponent, MSServiceLayoutComponent, MSSharedModule, MSSidebarComponent, MSTopbarComponent, MSTopbarService, MSUserComponent, MS_COMPONENTS, MS_SHARED_COMPONENTS, MS_WIDGETS, RoutesProcessor };
//# sourceMappingURL=fs-tw-theme-alain-ms-layout.js.map

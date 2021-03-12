import { LocalizationService, PermissionDirective, LocalizationPipe, ConfigStateService, CoreModule } from '@abp/ng.core';
import { ɵɵdirectiveInject, ChangeDetectorRef, ɵɵdefineDirective, ɵɵNgOnChangesFeature, ɵsetClassMetadata, Directive, Input, TemplateRef, ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵtext, ɵɵpipe, ɵɵelementEnd, ɵɵadvance, ɵɵtextInterpolate, ɵɵpipeBind1, ɵɵelementContainerStart, ɵɵtemplate, ɵɵelementContainerEnd, ɵɵproperty, ɵɵelement, ɵɵreference, Injector, ɵɵdefineComponent, ɵɵProvidersFeature, ɵɵInheritDefinitionFeature, Component, ChangeDetectionStrategy, ɵɵpureFunction0, ɵɵtextInterpolate1, ɵɵclassProp, ɵɵsanitizeHtml, ɵɵelementContainer, ɵɵpureFunction1, ɵɵtemplateRefExtractor, ɵɵpureFunction2, EventEmitter, LOCALE_ID, ɵɵcontentQuery, ɵɵqueryRefresh, ɵɵloadQuery, Inject, ContentChild, Output, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { Subscription } from 'rxjs';
import { NzTableComponent, NzTheadComponent, NzTrDirective, NzTableCellDirective, NzThMeasureDirective, NzTbodyComponent, NzThAddOnComponent, NzTrExpandDirective, NzTableFixedRowComponent, NzTdAddOnComponent, NzTableModule } from 'ng-zorro-antd/table';
import { GridActionsComponent as GridActionsComponent$1, EXTENSIONS_ACTION_TYPE, ExtensibleTableComponent as ExtensibleTableComponent$1, PageToolbarComponent as PageToolbarComponent$1, UiExtensionsModule as UiExtensionsModule$1 } from '@abp/ng.theme.shared/extensions';
import { NgIf, NgForOf, NgClass, NgTemplateOutlet, AsyncPipe, NgComponentOutlet } from '@angular/common';
import { NzButtonComponent, NzButtonModule } from 'ng-zorro-antd/button';
import { NzWaveDirective } from 'ng-zorro-antd/core/wave';
import { ɵNzTransitionPatchDirective } from 'ng-zorro-antd/core/transition-patch';
import { NzDropdownButtonDirective, NzDropDownDirective, NzDropdownMenuComponent, NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuDirective, NzMenuItemDirective } from 'ng-zorro-antd/menu';
import { SVContainerComponent, SVComponent, SVModule } from '@delon/abc/sv';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';

class NzTableListDirective {
    constructor(
    //private body:NzTbodyComponent,
    table, cdRef, localizationService) {
        this.table = table;
        this.cdRef = cdRef;
        this.localizationService = localizationService;
        this.subscription = new Subscription();
        this.querySubscription = new Subscription();
        this.loadingSubscription = new Subscription();
        this.setInitialValues();
    }
    setInitialValues() {
        this.table.nzSize = 'small';
        this.table.nzFrontPagination = false;
        this.table.nzBordered = true;
        this.table.nzShowSizeChanger = true;
    }
    subscribeToPage() {
        const sub = this.table.nzQueryParams.subscribe((params) => {
            var self = this;
            var sort = params.sort
                .filter((x) => !!x.value)
                .map((x) => {
                return { key: x.key, order: x.value === 'ascend' ? 'asc' : 'desc' };
            })[0];
            var sortChanged = isParamsChange();
            if (!!sort) {
                this.list.sortKey = sort.key;
                this.list.sortOrder = sort.order;
            }
            else {
                this.list.sortKey = '';
                this.list.sortOrder = '';
            }
            this.list.maxResultCount = params.pageSize;
            if (sortChanged) {
                this.list.page = 0;
            }
            else {
                this.list.page = params.pageIndex - 1;
            }
            this.cdRef.detectChanges();
            function isParamsChange() {
                var currentSortKey = `${self.list.sortKey}-${self.list.sortOrder}-${self.list.maxResultCount}`;
                var changeSortKey = `--${params.pageSize}`;
                if (!!sort) {
                    changeSortKey = `${sort.key}-${sort.order}-${params.pageSize}`;
                }
                return currentSortKey !== changeSortKey;
            }
        });
        this.subscription.add(sub);
    }
    subscribeToLoading() {
        if (!this.loadingSubscription.closed)
            this.loadingSubscription.unsubscribe();
        this.loadingSubscription = this.list.isLoading$.subscribe((x) => {
            this.table.nzLoading = x;
        });
    }
    subscribeToQuery() {
        if (!this.querySubscription.closed)
            this.querySubscription.unsubscribe();
        this.querySubscription = this.list.query$.subscribe((q) => {
            this.table.onPageIndexChange(this.list.page + 1);
            this.table.onPageSizeChange(this.list.maxResultCount);
        });
    }
    ngOnChanges({ list }) {
        //console.log(list.currentValue);
        this.subscribeToQuery();
        if (!list.firstChange)
            return;
        const { maxResultCount, page } = list.currentValue;
        //this.table.nzPageSize = maxResultCount;
        this.table.onPageSizeChange(maxResultCount);
        this.table.onPageIndexChange(page + 1);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.querySubscription.unsubscribe();
    }
    ngOnInit() {
        this.subscribeToPage();
        this.subscribeToLoading();
    }
}
NzTableListDirective.ɵfac = function NzTableListDirective_Factory(t) { return new (t || NzTableListDirective)(ɵɵdirectiveInject(NzTableComponent), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(LocalizationService)); };
NzTableListDirective.ɵdir = ɵɵdefineDirective({ type: NzTableListDirective, selectors: [["nz-table", "list", ""]], inputs: { list: "list" }, exportAs: ["nzTableList"], features: [ɵɵNgOnChangesFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(NzTableListDirective, [{
        type: Directive,
        args: [{
                // tslint:disable-next-line
                selector: 'nz-table[list]',
                exportAs: 'nzTableList',
            }]
    }], function () { return [{ type: NzTableComponent }, { type: ChangeDetectorRef }, { type: LocalizationService }]; }, { list: [{
            type: Input
        }] }); })();

class NzTableRowDetailDirective {
    constructor(template) {
        this.template = template;
    }
}
NzTableRowDetailDirective.ɵfac = function NzTableRowDetailDirective_Factory(t) { return new (t || NzTableRowDetailDirective)(ɵɵdirectiveInject(TemplateRef)); };
NzTableRowDetailDirective.ɵdir = ɵɵdefineDirective({ type: NzTableRowDetailDirective, selectors: [["", "row-detail-template", ""]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(NzTableRowDetailDirective, [{
        type: Directive,
        args: [{
                selector: '[row-detail-template]',
            }]
    }], function () { return [{ type: TemplateRef }]; }, null); })();

function GridActionsComponent_ng_container_0_ng_container_9_ng_container_1_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 8);
    ɵɵelementStart(1, "a", 9);
    ɵɵlistener("click", function GridActionsComponent_ng_container_0_ng_container_9_ng_container_1_li_1_Template_a_click_1_listener() { ɵɵrestoreView(_r7); const action_r3 = ɵɵnextContext(2).$implicit; const ctx_r6 = ɵɵnextContext(2); return action_r3.action(ctx_r6.data); });
    ɵɵtext(2);
    ɵɵpipe(3, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const action_r3 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(3, 1, action_r3.text));
} }
function GridActionsComponent_ng_container_0_ng_container_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, GridActionsComponent_ng_container_0_ng_container_9_ng_container_1_li_1_Template, 4, 3, "li", 7);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const action_r3 = ɵɵnextContext().$implicit;
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", action_r3.visible(ctx_r4.data));
} }
function GridActionsComponent_ng_container_0_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, GridActionsComponent_ng_container_0_ng_container_9_ng_container_1_Template, 2, 1, "ng-container", 6);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const action_r3 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("abpPermission", action_r3.permission);
} }
function GridActionsComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "button", 1);
    ɵɵelement(2, "i", 2);
    ɵɵelementStart(3, "span");
    ɵɵtext(4);
    ɵɵpipe(5, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(6, "nz-dropdown-menu", null, 3);
    ɵɵelementStart(8, "ul", 4);
    ɵɵtemplate(9, GridActionsComponent_ng_container_0_ng_container_9_Template, 2, 1, "ng-container", 5);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r1 = ɵɵreference(7);
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("nzDropdownMenu", _r1);
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(5, 4, "AbpUi::Actions"));
    ɵɵadvance(5);
    ɵɵproperty("ngForOf", ctx_r0.actionList)("ngForTrackBy", ctx_r0.trackByFn);
} }
class GridActionsComponent extends GridActionsComponent$1 {
    constructor(injector) {
        super(injector);
        this.icon = 'fa fa-cog';
        this.text = '';
        this.trackByFn = (_, item) => item.text;
    }
}
GridActionsComponent.ɵfac = function GridActionsComponent_Factory(t) { return new (t || GridActionsComponent)(ɵɵdirectiveInject(Injector)); };
GridActionsComponent.ɵcmp = ɵɵdefineComponent({ type: GridActionsComponent, selectors: [["nz-grid-actions"]], inputs: { icon: "icon", index: "index", text: "text" }, exportAs: ["nzGridActions"], features: [ɵɵProvidersFeature([
            {
                provide: EXTENSIONS_ACTION_TYPE,
                useValue: 'entityActions',
            },
        ]), ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [[4, "ngIf"], ["nz-button", "", "nzType", "default", "nz-dropdown", "", 1, "ml-md", 3, "nzDropdownMenu"], ["nz-icon", "", "nzType", "down"], ["menu", "nzDropdownMenu"], ["nz-menu", ""], [4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "abpPermission"], ["nz-menu-item", "", 4, "ngIf"], ["nz-menu-item", ""], [3, "click"]], template: function GridActionsComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, GridActionsComponent_ng_container_0_Template, 10, 6, "ng-container", 0);
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.actionList.length > 0);
    } }, directives: [NgIf, NzButtonComponent, NzWaveDirective, ɵNzTransitionPatchDirective, NzDropdownButtonDirective, NzDropDownDirective, NzIconDirective, NzDropdownMenuComponent, NzMenuDirective, NgForOf, PermissionDirective, NzMenuItemDirective], pipes: [LocalizationPipe], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GridActionsComponent, [{
        type: Component,
        args: [{
                exportAs: 'nzGridActions',
                selector: 'nz-grid-actions',
                templateUrl: './grid-actions.component.html',
                providers: [
                    {
                        provide: EXTENSIONS_ACTION_TYPE,
                        useValue: 'entityActions',
                    },
                ],
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: Injector }]; }, { icon: [{
            type: Input
        }], index: [{
            type: Input
        }], text: [{
            type: Input
        }] }); })();

function ExtensibleTableComponent_th_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "th");
} }
const _c0 = function () { return ["ascend", "descend"]; };
function ExtensibleTableComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "th", 5);
    ɵɵtext(2);
    ɵɵpipe(3, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const prop_r3 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("nzSortFn", prop_r3.sortable)("nzColumnKey", prop_r3.name)("nzSortDirections", ɵɵpureFunction0(6, _c0));
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 4, prop_r3.displayName), " ");
} }
function ExtensibleTableComponent_ng_container_8_td_4_Template(rf, ctx) { if (rf & 1) {
    const _r16 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td", 14);
    ɵɵlistener("nzExpandChange", function ExtensibleTableComponent_ng_container_8_td_4_Template_td_nzExpandChange_0_listener($event) { ɵɵrestoreView(_r16); const row_r5 = ɵɵnextContext().$implicit; const ctx_r14 = ɵɵnextContext(); return ctx_r14.onExpandChange(row_r5["id"], $event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const row_r5 = ɵɵnextContext().$implicit;
    const ctx_r7 = ɵɵnextContext();
    ɵɵproperty("nzExpand", ctx_r7.expandSet.has(row_r5["id"]));
} }
function ExtensibleTableComponent_ng_container_8_ng_container_5_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 18);
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementEnd();
} if (rf & 2) {
    const prop_r18 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, prop_r18.displayName), " ");
} }
function ExtensibleTableComponent_ng_container_8_ng_container_5_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r25 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 19);
    ɵɵlistener("click", function ExtensibleTableComponent_ng_container_8_ng_container_5_div_3_Template_div_click_0_listener() { ɵɵrestoreView(_r25); const ctx_r24 = ɵɵnextContext(); const prop_r18 = ctx_r24.$implicit; const i_r19 = ctx_r24.index; const row_r5 = ɵɵnextContext().$implicit; const ctx_r23 = ɵɵnextContext(); return prop_r18.action && prop_r18.action({ getInjected: ctx_r23.getInjected, record: row_r5, index: i_r19 }); });
    ɵɵpipe(1, "async");
    ɵɵelementEnd();
} if (rf & 2) {
    const prop_r18 = ɵɵnextContext().$implicit;
    const row_r5 = ɵɵnextContext().$implicit;
    ɵɵclassProp("pointer", prop_r18.action);
    ɵɵproperty("innerHTML", ɵɵpipeBind1(1, 3, row_r5["_" + prop_r18.name].value), ɵɵsanitizeHtml);
} }
function ExtensibleTableComponent_ng_container_8_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r31 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "td", 15);
    ɵɵlistener("click", function ExtensibleTableComponent_ng_container_8_ng_container_5_Template_td_click_1_listener() { ɵɵrestoreView(_r31); const row_r5 = ɵɵnextContext().$implicit; const ctx_r29 = ɵɵnextContext(); return ctx_r29.selected(row_r5); });
    ɵɵtemplate(2, ExtensibleTableComponent_ng_container_8_ng_container_5_span_2_Template, 3, 3, "span", 16);
    ɵɵtemplate(3, ExtensibleTableComponent_ng_container_8_ng_container_5_div_3_Template, 2, 5, "div", 17);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const prop_r18 = ctx.$implicit;
    const row_r5 = ɵɵnextContext().$implicit;
    const ctx_r8 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r8.scroll);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", row_r5["_" + prop_r18.name].visible);
} }
function ExtensibleTableComponent_ng_container_8_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function ExtensibleTableComponent_ng_container_8_ng_template_8_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
const _c1 = function (a0) { return { $implicit: a0 }; };
function ExtensibleTableComponent_ng_container_8_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, ExtensibleTableComponent_ng_container_8_ng_template_8_ng_container_0_Template, 1, 0, "ng-container", 10);
} if (rf & 2) {
    const node_r33 = ctx.$implicit;
    ɵɵnextContext();
    const _r12 = ɵɵreference(11);
    const ctx_r11 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r11.rowDetailTemplate ? ctx_r11.rowDetailTemplate == null ? null : ctx_r11.rowDetailTemplate.template : _r12)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c1, node_r33));
} }
function ExtensibleTableComponent_ng_container_8_ng_template_10_ng_container_1_sv_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "sv", 22);
    ɵɵpipe(1, "abpLocalization");
    ɵɵelement(2, "span", 23);
    ɵɵpipe(3, "async");
    ɵɵelementEnd();
} if (rf & 2) {
    const prop_r37 = ɵɵnextContext().$implicit;
    const row_r5 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("label", ɵɵpipeBind1(1, 2, prop_r37.displayName));
    ɵɵadvance(2);
    ɵɵproperty("innerHTML", ɵɵpipeBind1(3, 4, row_r5["_" + prop_r37.name].value), ɵɵsanitizeHtml);
} }
function ExtensibleTableComponent_ng_container_8_ng_template_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ExtensibleTableComponent_ng_container_8_ng_template_10_ng_container_1_sv_1_Template, 4, 6, "sv", 21);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const prop_r37 = ctx.$implicit;
    const row_r5 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", row_r5["_" + prop_r37.name].visible);
} }
function ExtensibleTableComponent_ng_container_8_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "sv-container", 20);
    ɵɵtemplate(1, ExtensibleTableComponent_ng_container_8_ng_template_10_ng_container_1_Template, 2, 1, "ng-container", 3);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r13 = ɵɵnextContext(2);
    ɵɵproperty("col", ctx_r13.svRowCount);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r13.propList)("ngForTrackBy", ctx_r13.trackByFn);
} }
const _c2 = function (a0, a1) { return { listSelected: a0, pointer: a1 }; };
function ExtensibleTableComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "tr", 6);
    ɵɵelementStart(2, "td");
    ɵɵelement(3, "nz-grid-actions", 7);
    ɵɵelementEnd();
    ɵɵtemplate(4, ExtensibleTableComponent_ng_container_8_td_4_Template, 1, 1, "td", 8);
    ɵɵtemplate(5, ExtensibleTableComponent_ng_container_8_ng_container_5_Template, 4, 2, "ng-container", 3);
    ɵɵelementEnd();
    ɵɵelementStart(6, "tr", 9);
    ɵɵtemplate(7, ExtensibleTableComponent_ng_container_8_ng_container_7_Template, 1, 0, "ng-container", 10);
    ɵɵelementEnd();
    ɵɵtemplate(8, ExtensibleTableComponent_ng_container_8_ng_template_8_Template, 1, 4, "ng-template", 11, 12, ɵɵtemplateRefExtractor);
    ɵɵtemplate(10, ExtensibleTableComponent_ng_container_8_ng_template_10_Template, 2, 3, "ng-template", null, 13, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r5 = ctx.$implicit;
    const _r10 = ɵɵreference(9);
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ɵɵpureFunction2(8, _c2, row_r5["id"] == ctx_r2.selectId, ctx_r2.haveSelect));
    ɵɵadvance(2);
    ɵɵproperty("record", row_r5);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2.haveRowDetail);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r2.propList)("ngForTrackBy", ctx_r2.trackByFn);
    ɵɵadvance(1);
    ɵɵproperty("nzExpand", ctx_r2.expandSet.has(row_r5["id"]));
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r10)("ngTemplateOutletContext", ɵɵpureFunction1(11, _c1, row_r5));
} }
const DEFAULT_ACTIONS_COLUMN_WIDTH = 100;
class ExtensibleTableComponent extends ExtensibleTableComponent$1 {
    constructor(_locale, _config, _injector) {
        super(_locale, _config, _injector);
        this._locale = _locale;
        this._config = _config;
        this.responsive = true;
        this.expandSet = new Set();
        this.selectId = null;
        this.haveRowDetail = false;
        this.haveSelect = false;
        this.svRowCount = 2;
        this.select = new EventEmitter();
        this._setColumnWidths(DEFAULT_ACTIONS_COLUMN_WIDTH);
    }
    onExpandChange(id, check) {
        if (check) {
            this.expandSet.add(id);
        }
        else
            this.expandSet.delete(id);
    }
    set actionsText(value) {
        this._actionsText = value;
    }
    get actionsText() {
        var _a;
        return (_a = this._actionsText) !== null && _a !== void 0 ? _a : (this.actionList.length > 1 ? 'AbpUi::Actions' : '');
    }
    set actionsColumnWidth(width) {
        this._setColumnWidths(width ? Number(width) : undefined);
    }
    set defaultSelectId(value) {
        this.selectId = value;
    }
    ngOnInit() {
        if (this.scroll) {
            this.responsive = false;
        }
    }
    _setColumnWidths(actionsColumn) {
        const widths = [actionsColumn];
        this.propList.forEach(({ value: prop }) => {
            widths.push(prop.columnWidth);
        });
        this.columnWidths = widths;
    }
    selected(data) {
        if (this.haveSelect) {
            this.selectId = data['id'];
            this.select.emit(data);
        }
    }
}
ExtensibleTableComponent.ɵfac = function ExtensibleTableComponent_Factory(t) { return new (t || ExtensibleTableComponent)(ɵɵdirectiveInject(LOCALE_ID), ɵɵdirectiveInject(ConfigStateService), ɵɵdirectiveInject(Injector)); };
ExtensibleTableComponent.ɵcmp = ɵɵdefineComponent({ type: ExtensibleTableComponent, selectors: [["nz-extensible-table"]], contentQueries: function ExtensibleTableComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵɵcontentQuery(dirIndex, NzTableRowDetailDirective, 1);
    } if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.rowDetailTemplate = _t.first);
    } }, hostVars: 2, hostBindings: function ExtensibleTableComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵɵclassProp("ant-table-rep", ctx.responsive);
    } }, inputs: { responsive: "responsive", actionsText: "actionsText", data: "data", list: "list", recordsTotal: "recordsTotal", actionsColumnWidth: "actionsColumnWidth", actionsTemplate: "actionsTemplate", haveRowDetail: "haveRowDetail", haveSelect: "haveSelect", svRowCount: "svRowCount", defaultSelectId: "defaultSelectId", scroll: "scroll" }, outputs: { select: "select" }, exportAs: ["nzExtensibleTable"], features: [ɵɵInheritDefinitionFeature], decls: 9, vars: 12, consts: [[3, "nzData", "nzTotal", "list", "nzScroll", "nzLoading"], [3, "nzWidth"], [4, "ngIf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngFor", "ngForOf"], [3, "nzSortFn", "nzColumnKey", "nzSortDirections"], [1, "bg-white", 3, "ngClass"], [3, "record"], [3, "nzExpand", "nzExpandChange", 4, "ngIf"], [3, "nzExpand"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["row-detail-template", ""], ["nodeTemplate", ""], ["defaultTemplate", ""], [3, "nzExpand", "nzExpandChange"], [3, "click"], ["class", "ant-table-rep__title", 4, "ngIf"], [3, "innerHTML", "pointer", "click", 4, "ngIf"], [1, "ant-table-rep__title"], [3, "innerHTML", "click"], [3, "col"], [3, "label", 4, "ngIf"], [3, "label"], [2, "color", "black", 3, "innerHTML"]], template: function ExtensibleTableComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "nz-table", 0);
        ɵɵpipe(1, "async");
        ɵɵelementStart(2, "thead");
        ɵɵelementStart(3, "tr");
        ɵɵelement(4, "th", 1);
        ɵɵtemplate(5, ExtensibleTableComponent_th_5_Template, 1, 0, "th", 2);
        ɵɵtemplate(6, ExtensibleTableComponent_ng_container_6_Template, 4, 7, "ng-container", 3);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(7, "tbody");
        ɵɵtemplate(8, ExtensibleTableComponent_ng_container_8_Template, 12, 13, "ng-container", 4);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("nzData", ctx.data)("nzTotal", ctx.recordsTotal)("list", ctx.list)("nzScroll", ctx.scroll)("nzLoading", ɵɵpipeBind1(1, 10, ctx.list.isLoading$));
        ɵɵadvance(4);
        ɵɵproperty("nzWidth", ctx.columnWidths[0] + "px");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.haveRowDetail);
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.propList)("ngForTrackBy", ctx.trackByFn);
        ɵɵadvance(2);
        ɵɵproperty("ngForOf", ctx.data);
    } }, directives: [NzTableComponent, NzTableListDirective, NzTheadComponent, NzTrDirective, NzTableCellDirective, NzThMeasureDirective, NgIf, NgForOf, NzTbodyComponent, NzThAddOnComponent, NgClass, GridActionsComponent, NzTrExpandDirective, NzTableFixedRowComponent, NgTemplateOutlet, NzTableRowDetailDirective, NzTdAddOnComponent, SVContainerComponent, SVComponent], pipes: [AsyncPipe, LocalizationPipe], styles: [".listSelected[_ngcontent-%COMP%]{background-color:rgba(33,33,230,.4392156862745098)!important}nz-list-item[_ngcontent-%COMP%]{font-size:15px}.bg-white[_ngcontent-%COMP%]{background-color:#fff}.pointer[_ngcontent-%COMP%]{cursor:pointer}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ExtensibleTableComponent, [{
        type: Component,
        args: [{
                exportAs: 'nzExtensibleTable',
                selector: 'nz-extensible-table',
                styleUrls: ['./extensible-table.component.css'],
                templateUrl: './extensible-table.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    '[class.ant-table-rep]': `responsive`,
                },
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [LOCALE_ID]
            }] }, { type: ConfigStateService }, { type: Injector }]; }, { responsive: [{
            type: Input
        }], actionsText: [{
            type: Input
        }], rowDetailTemplate: [{
            type: ContentChild,
            args: [NzTableRowDetailDirective]
        }], data: [{
            type: Input
        }], list: [{
            type: Input
        }], recordsTotal: [{
            type: Input
        }], actionsColumnWidth: [{
            type: Input
        }], actionsTemplate: [{
            type: Input
        }], haveRowDetail: [{
            type: Input
        }], haveSelect: [{
            type: Input
        }], svRowCount: [{
            type: Input
        }], defaultSelectId: [{
            type: Input
        }], scroll: [{
            type: Input
        }], select: [{
            type: Output
        }] }); })();

function PageToolbarComponent_div_1_ng_container_1_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PageToolbarComponent_div_1_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PageToolbarComponent_div_1_ng_container_1_ng_container_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 7);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const component_r7 = ctx.ngIf;
    const action_r1 = ɵɵnextContext(3).$implicit;
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngComponentOutlet", component_r7)("ngComponentOutletInjector", ctx_r4.createInjector(action_r1));
} }
function PageToolbarComponent_div_1_ng_container_1_ng_container_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 8);
    ɵɵlistener("click", function PageToolbarComponent_div_1_ng_container_1_ng_container_1_ng_template_2_Template_button_click_0_listener() { ɵɵrestoreView(_r11); const action_r1 = ɵɵnextContext(3).$implicit; const ctx_r10 = ɵɵnextContext(); return action_r1.action(ctx_r10.data); });
    ɵɵelement(1, "i", 9);
    ɵɵtext(2);
    ɵɵpipe(3, "abpLocalization");
    ɵɵelementEnd();
} if (rf & 2) {
    const action_r1 = ɵɵnextContext(3).$implicit;
    ɵɵadvance(1);
    ɵɵclassProp("mr-1", action_r1.icon);
    ɵɵproperty("ngClass", action_r1.icon);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 4, action_r1.text), " ");
} }
function PageToolbarComponent_div_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PageToolbarComponent_div_1_ng_container_1_ng_container_1_ng_container_1_Template, 2, 2, "ng-container", 5);
    ɵɵtemplate(2, PageToolbarComponent_div_1_ng_container_1_ng_container_1_ng_template_2_Template, 4, 6, "ng-template", null, 6, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r5 = ɵɵreference(3);
    const action_r1 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", action_r1.component)("ngIfElse", _r5);
} }
function PageToolbarComponent_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PageToolbarComponent_div_1_ng_container_1_ng_container_1_Template, 4, 2, "ng-container", 4);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const action_r1 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵproperty("abpPermission", action_r1.permission);
} }
function PageToolbarComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵtemplate(1, PageToolbarComponent_div_1_ng_container_1_Template, 2, 1, "ng-container", 3);
    ɵɵelementEnd();
} if (rf & 2) {
    const action_r1 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", action_r1.visible(ctx_r0.data));
} }
class PageToolbarComponent extends PageToolbarComponent$1 {
    constructor(_injector) {
        super(_injector);
        this._injector = _injector;
        this.trackByFn = (_, item) => item.action || item.component;
    }
}
PageToolbarComponent.ɵfac = function PageToolbarComponent_Factory(t) { return new (t || PageToolbarComponent)(ɵɵdirectiveInject(Injector)); };
PageToolbarComponent.ɵcmp = ɵɵdefineComponent({ type: PageToolbarComponent, selectors: [["nz-page-toolbar"]], exportAs: ["nzPageToolbar"], features: [ɵɵProvidersFeature([
            {
                provide: EXTENSIONS_ACTION_TYPE,
                useValue: 'toolbarActions',
            },
        ]), ɵɵInheritDefinitionFeature], decls: 2, vars: 2, consts: [["id", "AbpContentToolbar", 1, "row", "justify-content-end", "mx-n1"], ["class", "col-auto px-1 pt-2", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "col-auto", "px-1", "pt-2"], [4, "ngIf"], [4, "abpPermission"], [4, "ngIf", "ngIfElse"], ["button", ""], [4, "ngComponentOutlet", "ngComponentOutletInjector"], ["nz-button", "", "nzType", "primary", 3, "click"], [3, "ngClass"]], template: function PageToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵtemplate(1, PageToolbarComponent_div_1_Template, 2, 1, "div", 1);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.actionList)("ngForTrackBy", ctx.trackByFn);
    } }, directives: [NgForOf, NgIf, PermissionDirective, NgComponentOutlet, NzButtonComponent, NzWaveDirective, ɵNzTransitionPatchDirective, NgClass], pipes: [LocalizationPipe], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(PageToolbarComponent, [{
        type: Component,
        args: [{
                exportAs: 'nzPageToolbar',
                selector: 'nz-page-toolbar',
                templateUrl: './page-toolbar.component.html',
                providers: [
                    {
                        provide: EXTENSIONS_ACTION_TYPE,
                        useValue: 'toolbarActions',
                    },
                ],
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: Injector }]; }, null); })();

const declarationsWithExports = [
    ExtensibleTableComponent,
    NzTableRowDetailDirective,
    GridActionsComponent,
    PageToolbarComponent,
    NzTableListDirective,
];
const ZORRO_MODULES = [
    NzButtonModule,
    NzDropDownModule,
    NzIconModule,
    NzTableModule
];
class BaseUiExtensionsModule {
}
BaseUiExtensionsModule.ɵfac = function BaseUiExtensionsModule_Factory(t) { return new (t || BaseUiExtensionsModule)(); };
BaseUiExtensionsModule.ɵmod = ɵɵdefineNgModule({ type: BaseUiExtensionsModule });
BaseUiExtensionsModule.ɵinj = ɵɵdefineInjector({ imports: [[
            CoreModule,
            ThemeSharedModule,
            NgxValidateCoreModule,
            UiExtensionsModule$1,
            SVModule,
            ...ZORRO_MODULES,
        ], UiExtensionsModule$1,
        SVModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(BaseUiExtensionsModule, { declarations: [ExtensibleTableComponent,
        NzTableRowDetailDirective,
        GridActionsComponent,
        PageToolbarComponent,
        NzTableListDirective], imports: [CoreModule,
        ThemeSharedModule,
        NgxValidateCoreModule,
        UiExtensionsModule$1,
        SVModule, NzButtonModule,
        NzDropDownModule,
        NzIconModule,
        NzTableModule], exports: [ExtensibleTableComponent,
        NzTableRowDetailDirective,
        GridActionsComponent,
        PageToolbarComponent,
        NzTableListDirective, UiExtensionsModule$1,
        SVModule] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(BaseUiExtensionsModule, [{
        type: NgModule,
        args: [{
                exports: [
                    ...declarationsWithExports,
                    UiExtensionsModule$1,
                    SVModule
                ],
                declarations: [
                    ...declarationsWithExports
                ],
                imports: [
                    CoreModule,
                    ThemeSharedModule,
                    NgxValidateCoreModule,
                    UiExtensionsModule$1,
                    SVModule,
                    ...ZORRO_MODULES,
                ],
            }]
    }], null, null); })();
class UiExtensionsModule {
}
UiExtensionsModule.ɵfac = function UiExtensionsModule_Factory(t) { return new (t || UiExtensionsModule)(); };
UiExtensionsModule.ɵmod = ɵɵdefineNgModule({ type: UiExtensionsModule });
UiExtensionsModule.ɵinj = ɵɵdefineInjector({ imports: [[BaseUiExtensionsModule], BaseUiExtensionsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(UiExtensionsModule, { imports: [BaseUiExtensionsModule], exports: [BaseUiExtensionsModule] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(UiExtensionsModule, [{
        type: NgModule,
        args: [{
                exports: [BaseUiExtensionsModule],
                imports: [BaseUiExtensionsModule],
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { BaseUiExtensionsModule, ExtensibleTableComponent, GridActionsComponent, NzTableListDirective, NzTableRowDetailDirective, PageToolbarComponent, UiExtensionsModule };
//# sourceMappingURL=fs-tw-theme-alain-ms-shared-extensions.js.map

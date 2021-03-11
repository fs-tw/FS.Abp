import { LocalizationService, PermissionDirective, LocalizationPipe, ConfigStateService, CoreModule } from '@abp/ng.core';
import { ɵɵdirectiveInject, ChangeDetectorRef, ɵɵdefineDirective, ɵɵNgOnChangesFeature, ɵsetClassMetadata, Directive, Input, ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵtext, ɵɵpipe, ɵɵelementEnd, ɵɵadvance, ɵɵtextInterpolate, ɵɵpipeBind1, ɵɵelementContainerStart, ɵɵtemplate, ɵɵelementContainerEnd, ɵɵproperty, ɵɵelement, ɵɵreference, Injector, ɵɵdefineComponent, ɵɵProvidersFeature, ɵɵInheritDefinitionFeature, Component, ChangeDetectionStrategy, ɵɵpureFunction0, ɵɵtextInterpolate1, ɵɵclassProp, ɵɵsanitizeHtml, LOCALE_ID, Inject, ɵɵelementContainer, ɵɵtemplateRefExtractor, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { Subscription } from 'rxjs';
import { NzTableComponent, NzTheadComponent, NzTrDirective, NzTableCellDirective, NzThMeasureDirective, NzTbodyComponent, NzThAddOnComponent, NzTableModule } from 'ng-zorro-antd/table';
import { GridActionsComponent as GridActionsComponent$1, EXTENSIONS_ACTION_TYPE, ExtensibleTableComponent as ExtensibleTableComponent$1, PageToolbarComponent as PageToolbarComponent$1, UiExtensionsModule as UiExtensionsModule$1 } from '@abp/ng.theme.shared/extensions';
import { NgIf, NgForOf, AsyncPipe, NgComponentOutlet, NgClass } from '@angular/common';
import { NzButtonComponent, NzButtonModule } from 'ng-zorro-antd/button';
import { NzWaveDirective } from 'ng-zorro-antd/core/wave';
import { ɵNzTransitionPatchDirective } from 'ng-zorro-antd/core/transition-patch';
import { NzDropdownButtonDirective, NzDropDownDirective, NzDropdownMenuComponent, NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuDirective, NzMenuItemDirective } from 'ng-zorro-antd/menu';
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

const _c0 = function () { return ["ascend", "descend"]; };
function ExtensibleTableComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "th", 4);
    ɵɵtext(2);
    ɵɵpipe(3, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const prop_r2 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("nzSortFn", prop_r2.sortable)("nzColumnKey", prop_r2.name)("nzSortDirections", ɵɵpureFunction0(6, _c0));
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 4, prop_r2.displayName), " ");
} }
function ExtensibleTableComponent_tr_6_ng_container_3_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 8);
    ɵɵlistener("click", function ExtensibleTableComponent_tr_6_ng_container_3_div_2_Template_div_click_0_listener() { ɵɵrestoreView(_r11); const ctx_r10 = ɵɵnextContext(); const prop_r6 = ctx_r10.$implicit; const i_r7 = ctx_r10.index; const row_r4 = ɵɵnextContext().$implicit; const ctx_r9 = ɵɵnextContext(); return prop_r6.action && prop_r6.action({ getInjected: ctx_r9.getInjected, record: row_r4, index: i_r7 }); });
    ɵɵpipe(1, "async");
    ɵɵelementEnd();
} if (rf & 2) {
    const prop_r6 = ɵɵnextContext().$implicit;
    const row_r4 = ɵɵnextContext().$implicit;
    ɵɵclassProp("pointer", prop_r6.action);
    ɵɵproperty("innerHTML", ɵɵpipeBind1(1, 3, row_r4["_" + prop_r6.name].value), ɵɵsanitizeHtml);
} }
function ExtensibleTableComponent_tr_6_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "td");
    ɵɵtemplate(2, ExtensibleTableComponent_tr_6_ng_container_3_div_2_Template, 2, 5, "div", 7);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const prop_r6 = ctx.$implicit;
    const row_r4 = ɵɵnextContext().$implicit;
    ɵɵadvance(2);
    ɵɵproperty("ngIf", row_r4["_" + prop_r6.name].visible);
} }
function ExtensibleTableComponent_tr_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "tr", 5);
    ɵɵelementStart(1, "td");
    ɵɵelement(2, "nz-grid-actions", 6);
    ɵɵelementEnd();
    ɵɵtemplate(3, ExtensibleTableComponent_tr_6_ng_container_3_Template, 3, 1, "ng-container", 2);
    ɵɵelementEnd();
} if (rf & 2) {
    const row_r4 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("record", row_r4);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r1.propList)("ngForTrackBy", ctx_r1.trackByFn);
} }
const DEFAULT_ACTIONS_COLUMN_WIDTH = 75;
class ExtensibleTableComponent extends ExtensibleTableComponent$1 {
    constructor(_locale, _config, _injector) {
        super(_locale, _config, _injector);
        this._locale = _locale;
        this._config = _config;
        this._setColumnWidths(DEFAULT_ACTIONS_COLUMN_WIDTH);
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
    _setColumnWidths(actionsColumn) {
        const widths = [actionsColumn];
        this.propList.forEach(({ value: prop }) => {
            widths.push(prop.columnWidth);
        });
        this.columnWidths = widths;
    }
}
ExtensibleTableComponent.ɵfac = function ExtensibleTableComponent_Factory(t) { return new (t || ExtensibleTableComponent)(ɵɵdirectiveInject(LOCALE_ID), ɵɵdirectiveInject(ConfigStateService), ɵɵdirectiveInject(Injector)); };
ExtensibleTableComponent.ɵcmp = ɵɵdefineComponent({ type: ExtensibleTableComponent, selectors: [["nz-extensible-table"]], inputs: { actionsText: "actionsText", data: "data", list: "list", recordsTotal: "recordsTotal", actionsColumnWidth: "actionsColumnWidth", actionsTemplate: "actionsTemplate" }, exportAs: ["nzExtensibleTable"], features: [ɵɵInheritDefinitionFeature], decls: 7, vars: 7, consts: [[3, "nzData", "nzTotal", "list"], [3, "nzWidth"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "bg-white", 4, "ngFor", "ngForOf"], [3, "nzSortFn", "nzColumnKey", "nzSortDirections"], [1, "bg-white"], [3, "record"], [3, "innerHTML", "pointer", "click", 4, "ngIf"], [3, "innerHTML", "click"]], template: function ExtensibleTableComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "nz-table", 0);
        ɵɵelementStart(1, "thead");
        ɵɵelementStart(2, "tr");
        ɵɵelement(3, "th", 1);
        ɵɵtemplate(4, ExtensibleTableComponent_ng_container_4_Template, 4, 7, "ng-container", 2);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(5, "tbody");
        ɵɵtemplate(6, ExtensibleTableComponent_tr_6_Template, 4, 3, "tr", 3);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("nzData", ctx.data)("nzTotal", ctx.recordsTotal)("list", ctx.list);
        ɵɵadvance(3);
        ɵɵproperty("nzWidth", ctx.columnWidths[0] + "px");
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.propList)("ngForTrackBy", ctx.trackByFn);
        ɵɵadvance(2);
        ɵɵproperty("ngForOf", ctx.data);
    } }, directives: [NzTableComponent, NzTableListDirective, NzTheadComponent, NzTrDirective, NzTableCellDirective, NzThMeasureDirective, NgForOf, NzTbodyComponent, NzThAddOnComponent, GridActionsComponent, NgIf], pipes: [LocalizationPipe, AsyncPipe], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ExtensibleTableComponent, [{
        type: Component,
        args: [{
                exportAs: 'nzExtensibleTable',
                selector: 'nz-extensible-table',
                templateUrl: './extensible-table.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [LOCALE_ID]
            }] }, { type: ConfigStateService }, { type: Injector }]; }, { actionsText: [{
            type: Input
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
    GridActionsComponent,
    PageToolbarComponent,
    NzTableListDirective
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
            ...ZORRO_MODULES,
        ], UiExtensionsModule$1] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(BaseUiExtensionsModule, { declarations: [ExtensibleTableComponent,
        GridActionsComponent,
        PageToolbarComponent,
        NzTableListDirective], imports: [CoreModule,
        ThemeSharedModule,
        NgxValidateCoreModule,
        UiExtensionsModule$1, NzButtonModule,
        NzDropDownModule,
        NzIconModule,
        NzTableModule], exports: [ExtensibleTableComponent,
        GridActionsComponent,
        PageToolbarComponent,
        NzTableListDirective, UiExtensionsModule$1] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(BaseUiExtensionsModule, [{
        type: NgModule,
        args: [{
                exports: [
                    ...declarationsWithExports,
                    UiExtensionsModule$1
                ],
                declarations: [
                    ...declarationsWithExports
                ],
                imports: [
                    CoreModule,
                    ThemeSharedModule,
                    NgxValidateCoreModule,
                    UiExtensionsModule$1,
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

export { BaseUiExtensionsModule, ExtensibleTableComponent, GridActionsComponent, NzTableListDirective, PageToolbarComponent, UiExtensionsModule };
//# sourceMappingURL=fs-tw-theme-alain-ms-shared-extensions.js.map

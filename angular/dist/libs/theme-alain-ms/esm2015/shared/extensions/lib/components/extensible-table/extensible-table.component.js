import { ListService, ConfigStateService, } from '@abp/ng.core';
import { ChangeDetectionStrategy, Component, Inject, Injector, Input, LOCALE_ID, TemplateRef, ContentChild, Output, EventEmitter } from '@angular/core';
import { ExtensibleTableComponent as AbpExtensibleTableComponent } from '@abp/ng.theme.shared/extensions';
import { NzTableRowDetailDirective } from '../../directives/nz-table-row-detail.directive';
import * as i0 from "@angular/core";
import * as i1 from "@abp/ng.core";
import * as i2 from "ng-zorro-antd/table";
import * as i3 from "../../directives/nz-table-list.directive";
import * as i4 from "@angular/common";
import * as i5 from "../grid-actions/grid-actions.component";
import * as i6 from "../../directives/nz-table-row-detail.directive";
import * as i7 from "@delon/abc/sv";
function ExtensibleTableComponent_th_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th");
} }
const _c0 = function () { return ["ascend", "descend"]; };
function ExtensibleTableComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "th", 5);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "abpLocalization");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const prop_r3 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzSortFn", prop_r3.sortable)("nzColumnKey", prop_r3.name)("nzSortDirections", i0.ɵɵpureFunction0(6, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 4, prop_r3.displayName), " ");
} }
function ExtensibleTableComponent_ng_container_8_td_4_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 14);
    i0.ɵɵlistener("nzExpandChange", function ExtensibleTableComponent_ng_container_8_td_4_Template_td_nzExpandChange_0_listener($event) { i0.ɵɵrestoreView(_r16); const row_r5 = i0.ɵɵnextContext().$implicit; const ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.onExpandChange(row_r5["id"], $event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r5 = i0.ɵɵnextContext().$implicit;
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵproperty("nzExpand", ctx_r7.expandSet.has(row_r5["id"]));
} }
function ExtensibleTableComponent_ng_container_8_ng_container_5_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 18);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "abpLocalization");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const prop_r18 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, prop_r18.displayName), " ");
} }
function ExtensibleTableComponent_ng_container_8_ng_container_5_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 19);
    i0.ɵɵlistener("click", function ExtensibleTableComponent_ng_container_8_ng_container_5_div_3_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r25); const ctx_r24 = i0.ɵɵnextContext(); const prop_r18 = ctx_r24.$implicit; const i_r19 = ctx_r24.index; const row_r5 = i0.ɵɵnextContext().$implicit; const ctx_r23 = i0.ɵɵnextContext(); return prop_r18.action && prop_r18.action({ getInjected: ctx_r23.getInjected, record: row_r5, index: i_r19 }); });
    i0.ɵɵpipe(1, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const prop_r18 = i0.ɵɵnextContext().$implicit;
    const row_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵclassProp("pointer", prop_r18.action);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 3, row_r5["_" + prop_r18.name].value), i0.ɵɵsanitizeHtml);
} }
function ExtensibleTableComponent_ng_container_8_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r31 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "td", 15);
    i0.ɵɵlistener("click", function ExtensibleTableComponent_ng_container_8_ng_container_5_Template_td_click_1_listener() { i0.ɵɵrestoreView(_r31); const row_r5 = i0.ɵɵnextContext().$implicit; const ctx_r29 = i0.ɵɵnextContext(); return ctx_r29.selected(row_r5); });
    i0.ɵɵtemplate(2, ExtensibleTableComponent_ng_container_8_ng_container_5_span_2_Template, 3, 3, "span", 16);
    i0.ɵɵtemplate(3, ExtensibleTableComponent_ng_container_8_ng_container_5_div_3_Template, 2, 5, "div", 17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const prop_r18 = ctx.$implicit;
    const row_r5 = i0.ɵɵnextContext().$implicit;
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r8.scroll);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", row_r5["_" + prop_r18.name].visible);
} }
function ExtensibleTableComponent_ng_container_8_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ExtensibleTableComponent_ng_container_8_ng_template_8_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c1 = function (a0) { return { $implicit: a0 }; };
function ExtensibleTableComponent_ng_container_8_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ExtensibleTableComponent_ng_container_8_ng_template_8_ng_container_0_Template, 1, 0, "ng-container", 10);
} if (rf & 2) {
    const node_r33 = ctx.$implicit;
    i0.ɵɵnextContext();
    const _r12 = i0.ɵɵreference(11);
    const ctx_r11 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r11.rowDetailTemplate ? ctx_r11.rowDetailTemplate == null ? null : ctx_r11.rowDetailTemplate.template : _r12)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c1, node_r33));
} }
function ExtensibleTableComponent_ng_container_8_ng_template_10_ng_container_1_sv_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "sv", 22);
    i0.ɵɵpipe(1, "abpLocalization");
    i0.ɵɵelement(2, "span", 23);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const prop_r37 = i0.ɵɵnextContext().$implicit;
    const row_r5 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("label", i0.ɵɵpipeBind1(1, 2, prop_r37.displayName));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(3, 4, row_r5["_" + prop_r37.name].value), i0.ɵɵsanitizeHtml);
} }
function ExtensibleTableComponent_ng_container_8_ng_template_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ExtensibleTableComponent_ng_container_8_ng_template_10_ng_container_1_sv_1_Template, 4, 6, "sv", 21);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const prop_r37 = ctx.$implicit;
    const row_r5 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", row_r5["_" + prop_r37.name].visible);
} }
function ExtensibleTableComponent_ng_container_8_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "sv-container", 20);
    i0.ɵɵtemplate(1, ExtensibleTableComponent_ng_container_8_ng_template_10_ng_container_1_Template, 2, 1, "ng-container", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r13 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("col", ctx_r13.svRowCount);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r13.propList)("ngForTrackBy", ctx_r13.trackByFn);
} }
const _c2 = function (a0, a1) { return { listSelected: a0, pointer: a1 }; };
function ExtensibleTableComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "tr", 6);
    i0.ɵɵelementStart(2, "td");
    i0.ɵɵelement(3, "nz-grid-actions", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, ExtensibleTableComponent_ng_container_8_td_4_Template, 1, 1, "td", 8);
    i0.ɵɵtemplate(5, ExtensibleTableComponent_ng_container_8_ng_container_5_Template, 4, 2, "ng-container", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "tr", 9);
    i0.ɵɵtemplate(7, ExtensibleTableComponent_ng_container_8_ng_container_7_Template, 1, 0, "ng-container", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, ExtensibleTableComponent_ng_container_8_ng_template_8_Template, 1, 4, "ng-template", 11, 12, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(10, ExtensibleTableComponent_ng_container_8_ng_template_10_Template, 2, 3, "ng-template", null, 13, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r5 = ctx.$implicit;
    const _r10 = i0.ɵɵreference(9);
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(8, _c2, row_r5["id"] == ctx_r2.selectId, ctx_r2.haveSelect));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("record", row_r5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.haveRowDetail);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r2.propList)("ngForTrackBy", ctx_r2.trackByFn);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzExpand", ctx_r2.expandSet.has(row_r5["id"]));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r10)("ngTemplateOutletContext", i0.ɵɵpureFunction1(11, _c1, row_r5));
} }
const DEFAULT_ACTIONS_COLUMN_WIDTH = 100;
export class ExtensibleTableComponent extends AbpExtensibleTableComponent {
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
ExtensibleTableComponent.ɵfac = function ExtensibleTableComponent_Factory(t) { return new (t || ExtensibleTableComponent)(i0.ɵɵdirectiveInject(LOCALE_ID), i0.ɵɵdirectiveInject(i1.ConfigStateService), i0.ɵɵdirectiveInject(i0.Injector)); };
ExtensibleTableComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ExtensibleTableComponent, selectors: [["nz-extensible-table"]], contentQueries: function ExtensibleTableComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, NzTableRowDetailDirective, 1);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.rowDetailTemplate = _t.first);
    } }, hostVars: 2, hostBindings: function ExtensibleTableComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("ant-table-rep", ctx.responsive);
    } }, inputs: { responsive: "responsive", actionsText: "actionsText", data: "data", list: "list", recordsTotal: "recordsTotal", actionsColumnWidth: "actionsColumnWidth", actionsTemplate: "actionsTemplate", haveRowDetail: "haveRowDetail", haveSelect: "haveSelect", svRowCount: "svRowCount", defaultSelectId: "defaultSelectId", scroll: "scroll" }, outputs: { select: "select" }, exportAs: ["nzExtensibleTable"], features: [i0.ɵɵInheritDefinitionFeature], decls: 9, vars: 12, consts: [[3, "nzData", "nzTotal", "list", "nzScroll", "nzLoading"], [3, "nzWidth"], [4, "ngIf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngFor", "ngForOf"], [3, "nzSortFn", "nzColumnKey", "nzSortDirections"], [1, "bg-white", 3, "ngClass"], [3, "record"], [3, "nzExpand", "nzExpandChange", 4, "ngIf"], [3, "nzExpand"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["row-detail-template", ""], ["nodeTemplate", ""], ["defaultTemplate", ""], [3, "nzExpand", "nzExpandChange"], [3, "click"], ["class", "ant-table-rep__title", 4, "ngIf"], [3, "innerHTML", "pointer", "click", 4, "ngIf"], [1, "ant-table-rep__title"], [3, "innerHTML", "click"], [3, "col"], [3, "label", 4, "ngIf"], [3, "label"], [2, "color", "black", 3, "innerHTML"]], template: function ExtensibleTableComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "nz-table", 0);
        i0.ɵɵpipe(1, "async");
        i0.ɵɵelementStart(2, "thead");
        i0.ɵɵelementStart(3, "tr");
        i0.ɵɵelement(4, "th", 1);
        i0.ɵɵtemplate(5, ExtensibleTableComponent_th_5_Template, 1, 0, "th", 2);
        i0.ɵɵtemplate(6, ExtensibleTableComponent_ng_container_6_Template, 4, 7, "ng-container", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "tbody");
        i0.ɵɵtemplate(8, ExtensibleTableComponent_ng_container_8_Template, 12, 13, "ng-container", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("nzData", ctx.data)("nzTotal", ctx.recordsTotal)("list", ctx.list)("nzScroll", ctx.scroll)("nzLoading", i0.ɵɵpipeBind1(1, 10, ctx.list.isLoading$));
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("nzWidth", ctx.columnWidths[0] + "px");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.haveRowDetail);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.propList)("ngForTrackBy", ctx.trackByFn);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.data);
    } }, directives: [i2.NzTableComponent, i3.NzTableListDirective, i2.NzTheadComponent, i2.NzTrDirective, i2.NzTableCellDirective, i2.NzThMeasureDirective, i4.NgIf, i4.NgForOf, i2.NzTbodyComponent, i2.NzThAddOnComponent, i4.NgClass, i5.GridActionsComponent, i2.NzTrExpandDirective, i2.NzTableFixedRowComponent, i4.NgTemplateOutlet, i6.NzTableRowDetailDirective, i2.NzTdAddOnComponent, i7.SVContainerComponent, i7.SVComponent], pipes: [i4.AsyncPipe, i1.LocalizationPipe], styles: [".listSelected[_ngcontent-%COMP%]{background-color:rgba(33,33,230,.4392156862745098)!important}nz-list-item[_ngcontent-%COMP%]{font-size:15px}.bg-white[_ngcontent-%COMP%]{background-color:#fff}.pointer[_ngcontent-%COMP%]{cursor:pointer}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ExtensibleTableComponent, [{
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
            }] }, { type: i1.ConfigStateService }, { type: i0.Injector }]; }, { responsive: [{
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
//# sourceMappingURL=extensible-table.component.js.map
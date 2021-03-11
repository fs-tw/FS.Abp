import { ListService, ConfigStateService } from '@abp/ng.core';
import { ChangeDetectionStrategy, Component, Inject, Injector, Input, LOCALE_ID, TemplateRef } from '@angular/core';
import { ExtensibleTableComponent as AbpExtensibleTableComponent } from '@abp/ng.theme.shared/extensions';
import * as i0 from "@angular/core";
import * as i1 from "@abp/ng.core";
import * as i2 from "ng-zorro-antd/table";
import * as i3 from "../../directives/nz-table-list.directive";
import * as i4 from "@angular/common";
import * as i5 from "../grid-actions/grid-actions.component";
const _c0 = function () { return ["ascend", "descend"]; };
function ExtensibleTableComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "th", 4);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "abpLocalization");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const prop_r2 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzSortFn", prop_r2.sortable)("nzColumnKey", prop_r2.name)("nzSortDirections", i0.ɵɵpureFunction0(6, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 4, prop_r2.displayName), " ");
} }
function ExtensibleTableComponent_tr_6_ng_container_3_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵlistener("click", function ExtensibleTableComponent_tr_6_ng_container_3_div_2_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(); const prop_r6 = ctx_r10.$implicit; const i_r7 = ctx_r10.index; const row_r4 = i0.ɵɵnextContext().$implicit; const ctx_r9 = i0.ɵɵnextContext(); return prop_r6.action && prop_r6.action({ getInjected: ctx_r9.getInjected, record: row_r4, index: i_r7 }); });
    i0.ɵɵpipe(1, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const prop_r6 = i0.ɵɵnextContext().$implicit;
    const row_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵclassProp("pointer", prop_r6.action);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 3, row_r4["_" + prop_r6.name].value), i0.ɵɵsanitizeHtml);
} }
function ExtensibleTableComponent_tr_6_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "td");
    i0.ɵɵtemplate(2, ExtensibleTableComponent_tr_6_ng_container_3_div_2_Template, 2, 5, "div", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const prop_r6 = ctx.$implicit;
    const row_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", row_r4["_" + prop_r6.name].visible);
} }
function ExtensibleTableComponent_tr_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr", 5);
    i0.ɵɵelementStart(1, "td");
    i0.ɵɵelement(2, "nz-grid-actions", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, ExtensibleTableComponent_tr_6_ng_container_3_Template, 3, 1, "ng-container", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r4 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("record", row_r4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.propList)("ngForTrackBy", ctx_r1.trackByFn);
} }
const DEFAULT_ACTIONS_COLUMN_WIDTH = 75;
export class ExtensibleTableComponent extends AbpExtensibleTableComponent {
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
ExtensibleTableComponent.ɵfac = function ExtensibleTableComponent_Factory(t) { return new (t || ExtensibleTableComponent)(i0.ɵɵdirectiveInject(LOCALE_ID), i0.ɵɵdirectiveInject(i1.ConfigStateService), i0.ɵɵdirectiveInject(i0.Injector)); };
ExtensibleTableComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ExtensibleTableComponent, selectors: [["nz-extensible-table"]], inputs: { actionsText: "actionsText", data: "data", list: "list", recordsTotal: "recordsTotal", actionsColumnWidth: "actionsColumnWidth", actionsTemplate: "actionsTemplate" }, exportAs: ["nzExtensibleTable"], features: [i0.ɵɵInheritDefinitionFeature], decls: 7, vars: 7, consts: [[3, "nzData", "nzTotal", "list"], [3, "nzWidth"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "bg-white", 4, "ngFor", "ngForOf"], [3, "nzSortFn", "nzColumnKey", "nzSortDirections"], [1, "bg-white"], [3, "record"], [3, "innerHTML", "pointer", "click", 4, "ngIf"], [3, "innerHTML", "click"]], template: function ExtensibleTableComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "nz-table", 0);
        i0.ɵɵelementStart(1, "thead");
        i0.ɵɵelementStart(2, "tr");
        i0.ɵɵelement(3, "th", 1);
        i0.ɵɵtemplate(4, ExtensibleTableComponent_ng_container_4_Template, 4, 7, "ng-container", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "tbody");
        i0.ɵɵtemplate(6, ExtensibleTableComponent_tr_6_Template, 4, 3, "tr", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("nzData", ctx.data)("nzTotal", ctx.recordsTotal)("list", ctx.list);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("nzWidth", ctx.columnWidths[0] + "px");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.propList)("ngForTrackBy", ctx.trackByFn);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.data);
    } }, directives: [i2.NzTableComponent, i3.NzTableListDirective, i2.NzTheadComponent, i2.NzTrDirective, i2.NzTableCellDirective, i2.NzThMeasureDirective, i4.NgForOf, i2.NzTbodyComponent, i2.NzThAddOnComponent, i5.GridActionsComponent, i4.NgIf], pipes: [i1.LocalizationPipe, i4.AsyncPipe], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ExtensibleTableComponent, [{
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
            }] }, { type: i1.ConfigStateService }, { type: i0.Injector }]; }, { actionsText: [{
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
//# sourceMappingURL=extensible-table.component.js.map
import { ChangeDetectionStrategy, Component, Injector, Input, } from '@angular/core';
import { GridActionsComponent as AbpGridActionsComponent } from '@abp/ng.theme.shared/extensions';
import { EXTENSIONS_ACTION_TYPE } from '@abp/ng.theme.shared/extensions';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/button";
import * as i3 from "ng-zorro-antd/core/wave";
import * as i4 from "ng-zorro-antd/core/transition-patch";
import * as i5 from "ng-zorro-antd/dropdown";
import * as i6 from "ng-zorro-antd/icon";
import * as i7 from "ng-zorro-antd/menu";
import * as i8 from "@abp/ng.core";
function GridActionsComponent_ng_container_0_ng_container_9_ng_container_1_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 8);
    i0.ɵɵelementStart(1, "a", 9);
    i0.ɵɵlistener("click", function GridActionsComponent_ng_container_0_ng_container_9_ng_container_1_li_1_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r7); const action_r3 = i0.ɵɵnextContext(2).$implicit; const ctx_r6 = i0.ɵɵnextContext(2); return action_r3.action(ctx_r6.data); });
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "abpLocalization");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const action_r3 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 1, action_r3.text));
} }
function GridActionsComponent_ng_container_0_ng_container_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, GridActionsComponent_ng_container_0_ng_container_9_ng_container_1_li_1_Template, 4, 3, "li", 7);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const action_r3 = i0.ɵɵnextContext().$implicit;
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", action_r3.visible(ctx_r4.data));
} }
function GridActionsComponent_ng_container_0_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, GridActionsComponent_ng_container_0_ng_container_9_ng_container_1_Template, 2, 1, "ng-container", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const action_r3 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("abpPermission", action_r3.permission);
} }
function GridActionsComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "button", 1);
    i0.ɵɵelement(2, "i", 2);
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "abpLocalization");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "nz-dropdown-menu", null, 3);
    i0.ɵɵelementStart(8, "ul", 4);
    i0.ɵɵtemplate(9, GridActionsComponent_ng_container_0_ng_container_9_Template, 2, 1, "ng-container", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r1 = i0.ɵɵreference(7);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzDropdownMenu", _r1);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(5, 4, "AbpUi::Actions"));
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r0.actionList)("ngForTrackBy", ctx_r0.trackByFn);
} }
export class GridActionsComponent extends AbpGridActionsComponent {
    constructor(injector) {
        super(injector);
        this.icon = 'fa fa-cog';
        this.text = '';
        this.trackByFn = (_, item) => item.text;
    }
}
GridActionsComponent.ɵfac = function GridActionsComponent_Factory(t) { return new (t || GridActionsComponent)(i0.ɵɵdirectiveInject(i0.Injector)); };
GridActionsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: GridActionsComponent, selectors: [["nz-grid-actions"]], inputs: { icon: "icon", index: "index", text: "text" }, exportAs: ["nzGridActions"], features: [i0.ɵɵProvidersFeature([
            {
                provide: EXTENSIONS_ACTION_TYPE,
                useValue: 'entityActions',
            },
        ]), i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [[4, "ngIf"], ["nz-button", "", "nzType", "default", "nz-dropdown", "", 1, "ml-md", 3, "nzDropdownMenu"], ["nz-icon", "", "nzType", "down"], ["menu", "nzDropdownMenu"], ["nz-menu", ""], [4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "abpPermission"], ["nz-menu-item", "", 4, "ngIf"], ["nz-menu-item", ""], [3, "click"]], template: function GridActionsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, GridActionsComponent_ng_container_0_Template, 10, 6, "ng-container", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.actionList.length > 0);
    } }, directives: [i1.NgIf, i2.NzButtonComponent, i3.NzWaveDirective, i4.ɵNzTransitionPatchDirective, i5.NzDropdownButtonDirective, i5.NzDropDownDirective, i6.NzIconDirective, i5.NzDropdownMenuComponent, i7.NzMenuDirective, i1.NgForOf, i8.PermissionDirective, i7.NzMenuItemDirective], pipes: [i8.LocalizationPipe], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GridActionsComponent, [{
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
    }], function () { return [{ type: i0.Injector }]; }, { icon: [{
            type: Input
        }], index: [{
            type: Input
        }], text: [{
            type: Input
        }] }); })();
//# sourceMappingURL=grid-actions.component.js.map
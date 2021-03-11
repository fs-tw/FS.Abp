import { ChangeDetectionStrategy, Component, Injector, } from '@angular/core';
import { EXTENSIONS_ACTION_TYPE, } from '@abp/ng.theme.shared/extensions';
import { PageToolbarComponent as AbpPageToolbarComponent } from '@abp/ng.theme.shared/extensions';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@abp/ng.core";
import * as i3 from "ng-zorro-antd/button";
import * as i4 from "ng-zorro-antd/core/wave";
import * as i5 from "ng-zorro-antd/core/transition-patch";
function PageToolbarComponent_div_1_ng_container_1_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PageToolbarComponent_div_1_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PageToolbarComponent_div_1_ng_container_1_ng_container_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 7);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const component_r7 = ctx.ngIf;
    const action_r1 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngComponentOutlet", component_r7)("ngComponentOutletInjector", ctx_r4.createInjector(action_r1));
} }
function PageToolbarComponent_div_1_ng_container_1_ng_container_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 8);
    i0.ɵɵlistener("click", function PageToolbarComponent_div_1_ng_container_1_ng_container_1_ng_template_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r11); const action_r1 = i0.ɵɵnextContext(3).$implicit; const ctx_r10 = i0.ɵɵnextContext(); return action_r1.action(ctx_r10.data); });
    i0.ɵɵelement(1, "i", 9);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "abpLocalization");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const action_r1 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("mr-1", action_r1.icon);
    i0.ɵɵproperty("ngClass", action_r1.icon);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 4, action_r1.text), " ");
} }
function PageToolbarComponent_div_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PageToolbarComponent_div_1_ng_container_1_ng_container_1_ng_container_1_Template, 2, 2, "ng-container", 5);
    i0.ɵɵtemplate(2, PageToolbarComponent_div_1_ng_container_1_ng_container_1_ng_template_2_Template, 4, 6, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r5 = i0.ɵɵreference(3);
    const action_r1 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", action_r1.component)("ngIfElse", _r5);
} }
function PageToolbarComponent_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PageToolbarComponent_div_1_ng_container_1_ng_container_1_Template, 4, 2, "ng-container", 4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const action_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("abpPermission", action_r1.permission);
} }
function PageToolbarComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵtemplate(1, PageToolbarComponent_div_1_ng_container_1_Template, 2, 1, "ng-container", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const action_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", action_r1.visible(ctx_r0.data));
} }
export class PageToolbarComponent extends AbpPageToolbarComponent {
    constructor(_injector) {
        super(_injector);
        this._injector = _injector;
        this.trackByFn = (_, item) => item.action || item.component;
    }
}
PageToolbarComponent.ɵfac = function PageToolbarComponent_Factory(t) { return new (t || PageToolbarComponent)(i0.ɵɵdirectiveInject(i0.Injector)); };
PageToolbarComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PageToolbarComponent, selectors: [["nz-page-toolbar"]], exportAs: ["nzPageToolbar"], features: [i0.ɵɵProvidersFeature([
            {
                provide: EXTENSIONS_ACTION_TYPE,
                useValue: 'toolbarActions',
            },
        ]), i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 2, consts: [["id", "AbpContentToolbar", 1, "row", "justify-content-end", "mx-n1"], ["class", "col-auto px-1 pt-2", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "col-auto", "px-1", "pt-2"], [4, "ngIf"], [4, "abpPermission"], [4, "ngIf", "ngIfElse"], ["button", ""], [4, "ngComponentOutlet", "ngComponentOutletInjector"], ["nz-button", "", "nzType", "primary", 3, "click"], [3, "ngClass"]], template: function PageToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, PageToolbarComponent_div_1_Template, 2, 1, "div", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.actionList)("ngForTrackBy", ctx.trackByFn);
    } }, directives: [i1.NgForOf, i1.NgIf, i2.PermissionDirective, i1.NgComponentOutlet, i3.NzButtonComponent, i4.NzWaveDirective, i5.ɵNzTransitionPatchDirective, i1.NgClass], pipes: [i2.LocalizationPipe], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PageToolbarComponent, [{
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
    }], function () { return [{ type: i0.Injector }]; }, null); })();
//# sourceMappingURL=page-toolbar.component.js.map
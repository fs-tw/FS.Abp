import { SubscriptionService } from '@abp/ng.core';
import { Component } from '@angular/core';
import { ToasterService } from '@abp/ng.theme.shared';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LayoutStateService } from '../../service/layout-state.service';
import * as i0 from "@angular/core";
import * as i1 from "@abp/ng.theme.shared";
import * as i2 from "@angular/router";
import * as i3 from "@abp/ng.core";
import * as i4 from "../../service/layout-state.service";
import * as i5 from "@angular/forms";
import * as i6 from "@ngx-validate/core";
export class SettingsComponent {
    constructor(toaster, router, subscription, layoutStateService, fb) {
        this.toaster = toaster;
        this.router = router;
        this.subscription = subscription;
        this.layoutStateService = layoutStateService;
        this.fb = fb;
        this.form = this.fb.group({
            skin: []
        });
    }
    ngOnInit() {
        //this.layoutStateService.fetchThemeSettings();
        // this.subscription.addOne(
        //   this.layoutStateService.getThemeSettings$().pipe(filter(Boolean)),
        //   ({ skin }: Layout.ThemeSettings) => {
        //     this.form.patchValue({
        //       skin: skin
        //     });
        //   },
        // );
    }
    save() {
        // this.loading = true;
        // this.layoutStateService.updateThemeSettings(this.form.value);
        // this.layoutStateService
        //   .getThemeSettings$()
        //   .pipe(
        //     //skip(1),
        //     take(1),
        //     finalize(() => (this.loading = false)),
        //   )
        //   .subscribe(async () => {
        //     const { shouldReuseRoute } = this.router.routeReuseStrategy;
        //     this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        //     this.router.navigated = false;
        //     await this.router.navigateByUrl(this.router.url).catch(noop);
        //     this.router.routeReuseStrategy.shouldReuseRoute = shouldReuseRoute;
        //     setTimeout(() => {
        //       this.toaster.success('LeptonThemeManagement::SuccessfullySaved', null);
        //     }, 0);
        //   });
    }
}
SettingsComponent.ɵfac = function SettingsComponent_Factory(t) { return new (t || SettingsComponent)(i0.ɵɵdirectiveInject(i1.ToasterService), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i3.SubscriptionService), i0.ɵɵdirectiveInject(i4.LayoutStateService), i0.ɵɵdirectiveInject(i5.FormBuilder)); };
SettingsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SettingsComponent, selectors: [["ng-component"]], decls: 44, vars: 16, consts: [[1, "my-4"], ["id", "TheProjectThemeSettingsForm", "novalidate", "novalidate", 3, "formGroup"], [1, "row"], [1, "col", "col-md-12"], [1, "form-group"], ["for", "Skin"], ["id", "Skin", "name", "Skin", "formControlName", "skin", 1, "custom-select", "form-control", "valid"], [3, "ngValue"], ["data-valmsg-for", "Skin", "data-valmsg-replace", "true", 1, "text-danger", "field-validation-valid"], ["buttonType", "button", "iconClass", "fa fa-save", 3, "loading", "click"]], template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "h2");
        i0.ɵɵtext(1, "TheProject Settings");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(2, "hr", 0);
        i0.ɵɵelementStart(3, "form", 1);
        i0.ɵɵelementStart(4, "div", 2);
        i0.ɵɵelementStart(5, "div", 3);
        i0.ɵɵelementStart(6, "div");
        i0.ɵɵelementStart(7, "div", 4);
        i0.ɵɵelementStart(8, "label", 5);
        i0.ɵɵtext(9, "Skin");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "select", 6);
        i0.ɵɵelementStart(11, "option", 7);
        i0.ɵɵtext(12, "blue");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "option", 7);
        i0.ɵɵtext(14, "brown");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "option", 7);
        i0.ɵɵtext(16, "cool_green");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "option", 7);
        i0.ɵɵtext(18, "dark_cyan");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(19, "option", 7);
        i0.ɵɵtext(20, "dark_red");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "option", 7);
        i0.ɵɵtext(22, "gold");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(23, "option", 7);
        i0.ɵɵtext(24, "gray");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(25, "option", 7);
        i0.ɵɵtext(26, "green");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(27, "option", 7);
        i0.ɵɵtext(28, "light_blue");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(29, "option", 7);
        i0.ɵɵtext(30, "orange");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(31, "option", 7);
        i0.ɵɵtext(32, "pink");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(33, "option", 7);
        i0.ɵɵtext(34, "purple");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(35, "option", 7);
        i0.ɵɵtext(36, "red");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(37, "option", 7);
        i0.ɵɵtext(38, "vivid_red");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(39, "span", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(40, "hr", 0);
        i0.ɵɵelementStart(41, "div");
        i0.ɵɵelementStart(42, "abp-button", 9);
        i0.ɵɵlistener("click", function SettingsComponent_Template_abp_button_click_42_listener() { return ctx.save(); });
        i0.ɵɵtext(43, " Save ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("formGroup", ctx.form);
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("ngValue", 0);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngValue", 1);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngValue", 2);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngValue", 3);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngValue", 4);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngValue", 5);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngValue", 6);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngValue", 7);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngValue", 8);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngValue", 9);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngValue", 10);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngValue", 11);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngValue", 12);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngValue", 13);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("loading", ctx.loading);
    } }, directives: [i5.ɵangular_packages_forms_forms_y, i5.NgControlStatusGroup, i5.FormGroupDirective, i6.ValidationGroupDirective, i5.SelectControlValueAccessor, i5.NgControlStatus, i5.FormControlName, i6.ValidationDirective, i5.NgSelectOption, i5.ɵangular_packages_forms_forms_x, i1.ButtonComponent], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SettingsComponent, [{
        type: Component,
        args: [{
                templateUrl: './settings.component.html',
                styleUrls: ['./settings.component.less']
            }]
    }], function () { return [{ type: i1.ToasterService }, { type: i2.Router }, { type: i3.SubscriptionService }, { type: i4.LayoutStateService }, { type: i5.FormBuilder }]; }, null); })();
//# sourceMappingURL=settings.component.js.map
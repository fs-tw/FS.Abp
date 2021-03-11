import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { MSTopbarService } from '../../services/topbar.service';
import * as i0 from "@angular/core";
import * as i1 from "@delon/theme";
import * as i2 from "../../services/topbar.service";
import * as i3 from "@angular/common";
import * as i4 from "ng-zorro-antd/input";
import * as i5 from "@angular/forms";
import * as i6 from "ng-zorro-antd/auto-complete";
import * as i7 from "ng-zorro-antd/icon";
const _c0 = ["ipt"];
function MSSearchComponent_nz_auto_option_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nz-auto-option", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    i0.ɵɵproperty("nzValue", item_r3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r3, " ");
} }
const _c1 = function (a0) { return { "alain-ms__search-active": a0 }; };
export class MSSearchComponent {
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
MSSearchComponent.ɵfac = function MSSearchComponent_Factory(t) { return new (t || MSSearchComponent)(i0.ɵɵdirectiveInject(i1._HttpClient), i0.ɵɵdirectiveInject(i2.MSTopbarService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
MSSearchComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MSSearchComponent, selectors: [["ms-search"]], viewQuery: function MSSearchComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 3);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.ipt = _t.first);
    } }, hostVars: 4, hostBindings: function MSSearchComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function MSSearchComponent_click_HostBindingHandler() { return ctx._click(); });
    } if (rf & 2) {
        i0.ɵɵclassProp("alain-ms__topbar-item", true)("mr-md", true);
    } }, decls: 8, vars: 7, consts: [[1, "alain-ms__search", 3, "ngClass"], ["nz-input", "", 1, "alain-ms__search-ipt", 3, "placeholder", "ngModel", "nzAutocomplete", "ngModelChange", "input", "blur"], ["ipt", ""], ["nz-icon", "", "nzType", "search", 1, "alain-ms__search-icon"], [1, "alain-ms__search-outline"], [1, "asdlfkjlj"], ["searchAuto", ""], [3, "nzValue", 4, "ngFor", "ngForOf"], [3, "nzValue"]], template: function MSSearchComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "input", 1, 2);
        i0.ɵɵlistener("ngModelChange", function MSSearchComponent_Template_input_ngModelChange_1_listener($event) { return ctx.q = $event; })("input", function MSSearchComponent_Template_input_input_1_listener($event) { return ctx.search$.next($event.target == null ? null : $event.target.value); })("blur", function MSSearchComponent_Template_input_blur_1_listener() { return ctx.show = false; });
        i0.ɵɵelementEnd();
        i0.ɵɵelement(3, "i", 3);
        i0.ɵɵelement(4, "i", 4);
        i0.ɵɵelementStart(5, "nz-autocomplete", 5, 6);
        i0.ɵɵtemplate(7, MSSearchComponent_nz_auto_option_7_Template, 2, 2, "nz-auto-option", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(6);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(5, _c1, ctx.show));
        i0.ɵɵadvance(1);
        i0.ɵɵpropertyInterpolate("placeholder", ctx.l.placeholder);
        i0.ɵɵproperty("ngModel", ctx.q)("nzAutocomplete", _r1);
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngForOf", ctx.list);
    } }, directives: [i3.NgClass, i4.NzInputDirective, i5.DefaultValueAccessor, i6.NzAutocompleteTriggerDirective, i5.NgControlStatus, i5.NgModel, i7.NzIconDirective, i6.NzAutocompleteComponent, i3.NgForOf, i6.NzAutocompleteOptionComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MSSearchComponent, [{
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
    }], function () { return [{ type: i1._HttpClient }, { type: i2.MSTopbarService }, { type: i0.ChangeDetectorRef }]; }, { ipt: [{
            type: ViewChild,
            args: ['ipt', { static: true }]
        }], _click: [{
            type: HostListener,
            args: ['click']
        }] }); })();
//# sourceMappingURL=search.component.js.map
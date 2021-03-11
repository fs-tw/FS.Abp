import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DA_SERVICE_TOKEN } from '@delon/auth';
import { SettingsService } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import { MSTopbarService } from '../../services/topbar.service';
import * as i0 from "@angular/core";
import * as i1 from "../../services/topbar.service";
import * as i2 from "@angular/router";
import * as i3 from "@delon/theme";
import * as i4 from "ng-zorro-antd/message";
import * as i5 from "@angular/common";
import * as i6 from "../../shared/link-to/link-to.directive";
function MSNoticeComponent_em_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r0.list.length);
} }
function MSNoticeComponent_a_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 10);
    i0.ɵɵelementStart(1, "div", 11);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 12);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r2 = ctx.$implicit;
    i0.ɵɵproperty("link-to", i_r2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i_r2.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i_r2.time);
} }
export class MSNoticeComponent {
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
MSNoticeComponent.ɵfac = function MSNoticeComponent_Factory(t) { return new (t || MSNoticeComponent)(i0.ɵɵdirectiveInject(i1.MSTopbarService), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(DA_SERVICE_TOKEN), i0.ɵɵdirectiveInject(i3.SettingsService), i0.ɵɵdirectiveInject(i4.NzMessageService)); };
MSNoticeComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MSNoticeComponent, selectors: [["ms-notice"]], hostVars: 6, hostBindings: function MSNoticeComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("alain-ms__topbar-item", true)("alain-ms__topbar-dd", true)("alain-ms__notice", true);
    } }, decls: 13, vars: 8, consts: [[1, "alain-ms__topbar-item-btn"], [1, "position-relative"], ["class", "alain-ms__topbar-item-num", 4, "ngIf"], [1, "alain-ms__topbar-dd-menu"], [1, "alain-ms__notice-hd"], [1, "brand-color", 3, "link-to"], ["class", "alain-ms__notice-item", 3, "link-to", 4, "ngFor", "ngForOf"], [1, "alain-ms__notice-fd"], [1, "d-block", "pt-sm", "pb-xs", "text-center", 3, "link-to"], [1, "alain-ms__topbar-item-num"], [1, "alain-ms__notice-item", 3, "link-to"], [1, "alain-ms__notice-item--title"], [1, "alain-ms__notice-item--time"]], template: function MSNoticeComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 0);
        i0.ɵɵelementStart(1, "span", 1);
        i0.ɵɵtext(2);
        i0.ɵɵtemplate(3, MSNoticeComponent_em_3_Template, 2, 1, "em", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div", 3);
        i0.ɵɵelementStart(5, "div", 4);
        i0.ɵɵtext(6);
        i0.ɵɵelementStart(7, "a", 5);
        i0.ɵɵtext(8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(9, MSNoticeComponent_a_9_Template, 5, 3, "a", 6);
        i0.ɵɵelementStart(10, "div", 7);
        i0.ɵɵelementStart(11, "a", 8);
        i0.ɵɵtext(12);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", ctx.l.titleText, "");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.list.length > 0);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1(" ", ctx.l.title, " ");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("link-to", ctx.l.subscribe);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx.l.subscribe.title);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.list);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("link-to", ctx.l);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx.l.text);
    } }, directives: [i5.NgIf, i6.MSLinkToDirective, i5.NgForOf], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MSNoticeComponent, [{
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
    }], function () { return [{ type: i1.MSTopbarService }, { type: i2.Router }, { type: undefined, decorators: [{
                type: Inject,
                args: [DA_SERVICE_TOKEN]
            }] }, { type: i3.SettingsService }, { type: i4.NzMessageService }]; }, null); })();
//# sourceMappingURL=notice.component.js.map
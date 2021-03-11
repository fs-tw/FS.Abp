import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class MSLinkToDirective {
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
MSLinkToDirective.ɵfac = function MSLinkToDirective_Factory(t) { return new (t || MSLinkToDirective)(i0.ɵɵdirectiveInject(i1.Router)); };
MSLinkToDirective.ɵdir = i0.ɵɵdefineDirective({ type: MSLinkToDirective, selectors: [["", "link-to", ""]], hostBindings: function MSLinkToDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function MSLinkToDirective_click_HostBindingHandler($event) { return ctx._click($event); });
    } }, inputs: { i: ["link-to", "i"] }, outputs: { linkToChanged: "linkToChanged" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MSLinkToDirective, [{
        type: Directive,
        args: [{ selector: '[link-to]' }]
    }], function () { return [{ type: i1.Router }]; }, { i: [{
            type: Input,
            args: ['link-to']
        }], linkToChanged: [{
            type: Output
        }], _click: [{
            type: HostListener,
            args: ['click', ['$event']]
        }] }); })();
//# sourceMappingURL=link-to.directive.js.map
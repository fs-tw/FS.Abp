import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
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
MSLinkToDirective.decorators = [
    { type: Directive, args: [{ selector: '[link-to]' },] }
];
MSLinkToDirective.ctorParameters = () => [
    { type: Router }
];
MSLinkToDirective.propDecorators = {
    i: [{ type: Input, args: ['link-to',] }],
    linkToChanged: [{ type: Output }],
    _click: [{ type: HostListener, args: ['click', ['$event'],] }]
};
//# sourceMappingURL=link-to.directive.js.map
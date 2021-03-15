import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { InputBoolean } from '@delon/util';
import { BrandService } from '../../ms.service';
export class MSServiceLayoutComponent {
    constructor(srv) {
        this.srv = srv;
        this.nav = false;
        this.navConfig = {};
        this.navList = [];
        this.hasConsoleCss = true;
    }
    get hideNav() {
        return this.srv.hideNav;
    }
}
MSServiceLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'service-layout',
                template: "<div class=\"alain-ms__product\" [ngClass]=\"{ 'alain-ms__product-col-1': nav && !hideNav }\">\r\n  <page-nav *ngIf=\"nav\" [config]=\"navConfig\" [list]=\"navList\"></page-nav>\r\n  <div class=\"alain-ms__product-body scrollbar\">\r\n    <div [ngClass]=\"{'alain-ms__console':hasConsoleCss}\">\r\n      <ng-content></ng-content>\r\n    </div>\r\n  </div>\r\n</div>\r\n"
            },] }
];
MSServiceLayoutComponent.ctorParameters = () => [
    { type: BrandService }
];
MSServiceLayoutComponent.propDecorators = {
    nav: [{ type: Input }],
    navConfig: [{ type: Input }],
    navList: [{ type: Input }],
    hasConsoleCss: [{ type: Input }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], MSServiceLayoutComponent.prototype, "nav", void 0);
//# sourceMappingURL=service-layout.component.js.map
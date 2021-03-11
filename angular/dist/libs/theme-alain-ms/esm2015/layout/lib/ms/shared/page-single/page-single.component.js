import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { InputBoolean } from '@delon/util';
import { BrandService } from '../../ms.service';
export class MSPageSingleComponent {
    // #endregion
    constructor(brand) {
        this.brand = brand;
        // #region fileds
        this.wide = true;
        this.fixed = false;
    }
    ngOnInit() { }
    ngOnChanges() {
        this.brand.setFixed(this.fixed);
    }
    ngOnDestroy() {
        this.brand.setFixed(false);
    }
}
MSPageSingleComponent.decorators = [
    { type: Component, args: [{
                selector: 'page-single',
                template: "<div class=\"ms-page-single__bar\">\r\n  <div class=\"ms-page-single__wrap\" [ngClass]=\"{ 'ms-page-single__wide': wide }\">\r\n    <div class=\"ms-page-single__bar-desc\">\r\n      <div *ngIf=\"title\" class=\"ms-page-single__bar-title\">\r\n        <ng-container *nzStringTemplateOutlet=\"title\">{{ title }}</ng-container>\r\n      </div>\r\n      <div *ngIf=\"subTitle\" class=\"ms-page-single__bar-sub-title\">\r\n        <ng-container *nzStringTemplateOutlet=\"subTitle\">{{ subTitle }}</ng-container>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"extra\" class=\"ms-page-single__bar-extra\">\r\n      <ng-container *nzStringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"ms-page-single__wrap ms-page-single__body\" [ngClass]=\"{ 'ms-page-single__wide': wide }\">\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                host: {
                    '[class.ms-page-single]': 'true',
                },
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
MSPageSingleComponent.ctorParameters = () => [
    { type: BrandService }
];
MSPageSingleComponent.propDecorators = {
    wide: [{ type: Input }],
    fixed: [{ type: Input }],
    title: [{ type: Input }],
    subTitle: [{ type: Input }],
    extra: [{ type: Input }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], MSPageSingleComponent.prototype, "wide", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], MSPageSingleComponent.prototype, "fixed", void 0);
//# sourceMappingURL=page-single.component.js.map
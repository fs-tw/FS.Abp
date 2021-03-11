import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { merge } from 'rxjs';
import { filter } from 'rxjs/operators';
import { MenuService } from '@delon/theme';
import { InputBoolean } from '@delon/util';
import { BrandService } from '../../ms.service';
export class MSPageBarComponent {
    // #endregion
    constructor(router, srv, menuSrv, cdr) {
        this.router = router;
        this.srv = srv;
        this.menuSrv = menuSrv;
        this.cdr = cdr;
        this._menus = null;
        // #region fields
        /**
         * 自动生成标题，以当前路由从主菜单中定位
         */
        this.autoTitle = true;
        this.recursiveBreadcrumb = true;
    }
    get menus() {
        if (this._menus) {
            return this._menus;
        }
        this._menus = this.menuSrv.getPathByUrl(this.router.url.split('?')[0], this.recursiveBreadcrumb);
        return this._menus;
    }
    setTitle() {
        if (typeof this.title === 'undefined' && this.autoTitle && this.menus.length > 0) {
            const item = this.menus[this.menus.length - 1];
            this.title = item.text;
        }
        this.cdr.detectChanges();
    }
    ngAfterViewInit() {
        this.router$ = merge(this.router.events.pipe(filter((e) => e instanceof NavigationEnd)), this.srv.notify, this.menuSrv.change).subscribe(() => {
            this._menus = null;
            this.setTitle();
        });
    }
    ngOnDestroy() {
        this.router$.unsubscribe();
    }
}
MSPageBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'page-bar',
                template: "<div class=\"ms-page-bar__title\">\r\n  <h2 *ngIf=\"title\" class=\"ms-page-bar__title-main\">\r\n    <ng-container *nzStringTemplateOutlet=\"title\">{{ title | abpLocalization }}</ng-container>\r\n  </h2>\r\n  <div *ngIf=\"subTitle\" class=\"ms-page-bar__title-sub\">\r\n    <ng-container *nzStringTemplateOutlet=\"subTitle\">{{ subTitle | abpLocalization }}</ng-container>\r\n  </div>\r\n</div>\r\n<div class=\"ms-page-bar__action\">\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                host: {
                    '[class.ms-page-bar]': 'true',
                },
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
MSPageBarComponent.ctorParameters = () => [
    { type: Router },
    { type: BrandService },
    { type: MenuService },
    { type: ChangeDetectorRef }
];
MSPageBarComponent.propDecorators = {
    autoTitle: [{ type: Input }],
    recursiveBreadcrumb: [{ type: Input }],
    title: [{ type: Input }],
    subTitle: [{ type: Input }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], MSPageBarComponent.prototype, "autoTitle", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], MSPageBarComponent.prototype, "recursiveBreadcrumb", void 0);
//# sourceMappingURL=page-bar.component.js.map
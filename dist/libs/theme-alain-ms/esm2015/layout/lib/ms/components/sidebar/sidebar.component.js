import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewChild, } from '@angular/core';
import { LayoutStateService } from '../../../services/layout-state.service';
import { BrandService } from '../../ms.service';
import { MSProductService } from '../../services/product.service';
export class MSSidebarComponent {
    constructor(layoutStateService, brand, srv, cdr) {
        this.layoutStateService = layoutStateService;
        this.brand = brand;
        this.srv = srv;
        this.cdr = cdr;
        this.showProduct = false;
        this.inited = false;
        this.q = '';
        this.searchCategories = [];
        brand.setSidebar(true);
    }
    get shortcuts$() {
        return this.layoutStateService.getShortcuts$();
    }
    get l() {
        return this.srv.i18n;
    }
    search(scroll = true) {
        const res = this.srv.search(this.q);
        this.searchList = res.list;
        this.searchCategories = res.categories;
        this.cdr.detectChanges();
        if (scroll) {
            // wait angular render
            setTimeout(() => {
                // 滚动至顶部
                this.categoryEl.nativeElement.scrollTop = 0;
            });
        }
    }
    ngAfterViewInit() {
        this.srv.getData().subscribe((x) => {
            this.inited = true;
            this.search();
        });
    }
    ngOnDestroy() {
        this.brand.setSidebar(false);
    }
}
MSSidebarComponent.decorators = [
    { type: Component, args: [{
                selector: 'ms-sidebar',
                template: "<ng-container *ngIf=\"inited\">\r\n  <div class=\"alain-ms__sidebar-wrap\">\r\n    <div class=\"alain-ms__sidebar-product-all\" (click)=\"showProduct = !showProduct\">\r\n      <div class=\"alain-ms__sidebar-product alain-ms__sidebar-product-all-wrap\">\r\n        <i class=\"alain-ms__sidebar-product-icon\" nz-icon nzType=\"appstore\"></i>\r\n        <span class=\"alain-ms__sidebar-product-name\">{{ l.text }}</span>\r\n        <span class=\"alain-ms__sidebar-product-toolbar\">\r\n          <i nz-icon nzType=\"right\"></i>\r\n        </span>\r\n      </div>\r\n    </div>\r\n    <ul class=\"alain-ms__sidebar-product-quick\">\r\n      <li class=\"alain-ms__sidebar-product\" *ngFor=\"let i of shortcuts$|async; let idx = index\">\r\n        <i class=\"alain-ms__sidebar-product-icon {{ i.icon }} \" [link-to]=\"i\" (linkToChanged)=\"showProduct = false\"></i>\r\n        <a class=\"alain-ms__sidebar-product-name\" [link-to]=\"i\" (linkToChanged)=\"showProduct = false\">\r\n          {{ i.name }}\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"alain-ms__sidebar-products\">\r\n    <div class=\"alain-ms__products\">\r\n      <div class=\"alain-ms__products-close\" (click)=\"showProduct = false\">\r\n        <i nz-icon nzType=\"close\"></i>\r\n      </div>\r\n      <div class=\"alain-ms__products-left\">\r\n        <div class=\"alain-ms__products-category-wrap\" #categoryEl>\r\n          <div class=\"d-flex\">\r\n            <div *ngFor=\"let c of searchList\" class=\"alain-ms__products-category-column\">\r\n              <div *ngFor=\"let p of c\" class=\"alain-ms__products-category\">\r\n                <h3 class=\"alain-ms__products-category-title\" id=\"product-cat-{{ p._id }}\">{{ p.name }}</h3>\r\n                <ul class=\"list-unstyled\">\r\n                  <li\r\n                    *ngFor=\"let i of p.products\"\r\n                    class=\"alain-ms__products-category-item\"\r\n                    [ngClass]=\"{ 'alain-ms__products-category-item-active': i.shortcut }\"\r\n                  >\r\n                    <a [link-to]=\"i\" (linkToChanged)=\"showProduct = false\" class=\"alain-ms__products-category-item-link\">{{ i.name }}</a>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-container>\r\n",
                host: {
                    '[class.alain-ms__sidebar]': 'true',
                    '[class.alain-ms__sidebar-showproduct]': 'showProduct',
                },
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
MSSidebarComponent.ctorParameters = () => [
    { type: LayoutStateService },
    { type: BrandService },
    { type: MSProductService },
    { type: ChangeDetectorRef }
];
MSSidebarComponent.propDecorators = {
    categoryEl: [{ type: ViewChild, args: ['categoryEl', { static: false },] }]
};
//# sourceMappingURL=sidebar.component.js.map
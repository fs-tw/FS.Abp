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
    get store$() {
        return this.layoutStateService.getStore$();
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
                template: "<ng-container *ngIf=\"store$ | async as store\">\r\n  <div class=\"alain-ms__sidebar-wrap\">\r\n    <div\r\n      *ngIf=\"store.sidebarConfig.hasProductNav\"\r\n      class=\"alain-ms__sidebar-product-all\"\r\n      (click)=\"showProduct = !showProduct\"\r\n    >\r\n      <div class=\"alain-ms__sidebar-product alain-ms__sidebar-product-all-wrap\">\r\n        <i class=\"alain-ms__sidebar-product-icon\" nz-icon nzType=\"appstore\"></i>\r\n        <span class=\"alain-ms__sidebar-product-name\">{{ l.text }}</span>\r\n        <span class=\"alain-ms__sidebar-product-toolbar\">\r\n          <i nz-icon nzType=\"right\"></i>\r\n        </span>\r\n      </div>\r\n    </div>\r\n    <ul class=\"alain-ms__sidebar-product-quick\">\r\n      <li\r\n        class=\"alain-ms__sidebar-product\"\r\n        *ngFor=\"let i of shortcuts$ | async; let idx = index\"\r\n      >\r\n        <i\r\n          class=\"alain-ms__sidebar-product-icon {{ i.icon }} \"\r\n          [link-to]=\"i\"\r\n          (linkToChanged)=\"showProduct = false\"\r\n        ></i>\r\n        <a\r\n          class=\"alain-ms__sidebar-product-name\"\r\n          [link-to]=\"i\"\r\n          (linkToChanged)=\"showProduct = false\"\r\n        >\r\n          {{ i.name }}\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"alain-ms__sidebar-products\">\r\n    <div class=\"alain-ms__products\">\r\n      <div class=\"alain-ms__products-close\" (click)=\"showProduct = false\">\r\n        <i nz-icon nzType=\"close\"></i>\r\n      </div>\r\n      <div class=\"alain-ms__products-left\">\r\n        <div class=\"alain-ms__products-category-wrap\" #categoryEl>\r\n          <div class=\"d-flex\">\r\n            <div\r\n              *ngFor=\"let c of searchList\"\r\n              class=\"alain-ms__products-category-column\"\r\n            >\r\n              <div *ngFor=\"let p of c\" class=\"alain-ms__products-category\">\r\n                <h3\r\n                  class=\"alain-ms__products-category-title\"\r\n                  id=\"product-cat-{{ p._id }}\"\r\n                >\r\n                  {{ p.name }}\r\n                </h3>\r\n                <ul class=\"list-unstyled\">\r\n                  <li\r\n                    *ngFor=\"let i of p.products\"\r\n                    class=\"alain-ms__products-category-item\"\r\n                    [ngClass]=\"{\r\n                      'alain-ms__products-category-item-active': i.shortcut\r\n                    }\"\r\n                  >\r\n                    <a\r\n                      [link-to]=\"i\"\r\n                      (linkToChanged)=\"showProduct = false\"\r\n                      class=\"alain-ms__products-category-item-link\"\r\n                      >{{ i.name }}</a\r\n                    >\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"alain-ms__products-right\">\r\n        <nz-anchor\r\n          nzAffix=\"false\"\r\n          nzContainer=\".alain-ms__products-category-wrap\"\r\n          nzOffsetTop=\"150\"\r\n          nzShowInkInFixed=\"false\"\r\n        >\r\n          <nz-link\r\n            *ngFor=\"let i of searchCategories\"\r\n            nzHref=\"#product-cat-{{ i._id }}\"\r\n            [nzTitle]=\"i.name\"\r\n          ></nz-link>\r\n        </nz-anchor>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-container>\r\n",
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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService, TitleService } from '@delon/theme';
import { BrandService } from '../../ms.service';
export class MSPageNavComponent {
    constructor(srv, router, titSrv, menuSrv, 
    //@Inject(ALAIN_I18N_TOKEN) private i18n: I18NService,
    cdr) {
        this.srv = srv;
        this.router = router;
        this.titSrv = titSrv;
        this.menuSrv = menuSrv;
        this.cdr = cdr;
        this._config = {};
        this._menus = [];
    }
    set config(val) {
        const { title, titleI18n, backHref, doc, docI18n } = val;
        // this.titSrv.setTitle(docI18n ? this.i18n.fanyi(docI18n) : doc);
        // this._config.title = titleI18n ? this.i18n.fanyi(titleI18n) : title;
        this._config.title = title;
        this._config.backHref = backHref || '';
    }
    get config() {
        return this._config;
    }
    set list(list) {
        this.menuSrv.add(list);
        this.menuSrv.visit(list, (i) => (i.active = true));
        this._menus = this.menuSrv.menus;
    }
    get list() {
        return this._menus;
    }
    to(url, e) {
        e.preventDefault();
        if (!url) {
            return;
        }
        this.router.navigateByUrl(url);
    }
    toggle() {
        this.srv.hideNav = !this.srv.hideNav;
        this.srv.triggerNotify('page-nav');
    }
    ngOnChanges() {
        this.cdr.detectChanges();
    }
}
MSPageNavComponent.decorators = [
    { type: Component, args: [{
                selector: 'page-nav',
                template: "<div class=\"ms-page-nav__body\">\r\n  <div class=\"ms-page-nav__stage\">\r\n    <div class=\"ms-page-nav__scene ms-page-nav__scene-main\">\r\n      <div\r\n        class=\"ms-page-nav__title\"\r\n        [ngClass]=\"{ 'ms-page-nav__back': config.backHref }\"\r\n        (click)=\"to(config.backHref!, $event)\"\r\n        [title]=\"config.backHref ? ('ms.page-nav.back' | i18n) : ''\"\r\n      >\r\n        <i *ngIf=\"config.backHref\" nz-icon nzType=\"left\"></i>\r\n        {{ config.title | abpLocalization }}\r\n      </div>\r\n      <div class=\"ms-page-nav__list scrollbar\">\r\n        <ng-template #treeTpl let-ls let-level=\"level\">\r\n          <li *ngFor=\"let i of ls\">\r\n            <ng-container *ngIf=\"i.children.length == 0\">\r\n              <div\r\n                *ngIf=\"i.link\"\r\n                class=\"ms-page-nav__item\"\r\n                role=\"treeitem\"\r\n                routerLink=\"{{ i.link }}\"\r\n                routerLinkActive=\"ms-page-nav__item-active\"\r\n              >\r\n                <span class=\"ms-page-nav__item-icon\"></span>\r\n                <span class=\"ms-page-nav__item-tit\">{{ i.text }}</span>\r\n                <span *ngIf=\"i.badge\" class=\"ms-page-nav__item-badge\">{{ i.badge }}</span>\r\n              </div>\r\n              <a *ngIf=\"!i.link\" [href]=\"i.externalLink\" [target]=\"i.target\" class=\"ms-page-nav__item\" role=\"treeitem\">\r\n                <span class=\"ms-page-nav__item-icon\"></span>\r\n                <span class=\"ms-page-nav__item-tit\">{{ i.text }}</span>\r\n                <span *ngIf=\"i.badge\" class=\"ms-page-nav__item-badge\">{{ i.badge }}</span>\r\n              </a>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"i.children.length > 0\">\r\n              <div class=\"ms-page-nav__item\" role=\"treeitem\" (click)=\"i.active = !i.active\">\r\n                <span class=\"ms-page-nav__item-icon\">\r\n                  <i nz-icon [nzType]=\"i.active ? 'caret-down' : 'caret-right'\"></i>\r\n                </span>\r\n                <span class=\"ms-page-nav__item-tit\">{{ i.text }}</span>\r\n              </div>\r\n              <ul role=\"tree\" class=\"list-unstyled\" [ngClass]=\"{ 'd-none': !i.active }\">\r\n                <ng-container *ngTemplateOutlet=\"treeTpl; context: { $implicit: i.children, level: level + 1 }\"></ng-container>\r\n              </ul>\r\n            </ng-container>\r\n          </li>\r\n        </ng-template>\r\n        <ul role=\"tree\" class=\"list-unstyled\">\r\n          <ng-container *ngTemplateOutlet=\"treeTpl; context: { $implicit: list, level: 1 }\"></ng-container>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"ms-page-nav__control\" (click)=\"toggle()\">\r\n  <div class=\"ms-page-nav__control-wrap\">\r\n    <div class=\"ms-page-nav__control-bg\"></div>\r\n    <div class=\"ms-page-nav__control-btn\">\r\n      <i nz-icon nzType=\"menu-fold\"></i>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
MSPageNavComponent.ctorParameters = () => [
    { type: BrandService },
    { type: Router },
    { type: TitleService },
    { type: MenuService },
    { type: ChangeDetectorRef }
];
MSPageNavComponent.propDecorators = {
    config: [{ type: Input }],
    list: [{ type: Input }]
};
//# sourceMappingURL=page-nav.component.js.map
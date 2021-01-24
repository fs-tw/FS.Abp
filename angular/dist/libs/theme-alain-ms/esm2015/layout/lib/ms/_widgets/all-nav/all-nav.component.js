import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostListener, Inject, ViewChild, } from '@angular/core';
import { Subject } from 'rxjs';
import { auditTime, takeUntil } from 'rxjs/operators';
import { BrandService } from '../../ms.service';
import { MSAllNavService } from './all-nav.service';
const ANT_TIMEOUT = 150;
/**
 * 顶部所有菜单组件，当单页布局模式时渲染
 */
export class MSAllNavComponent {
    constructor(srv, brandSrv, cdr, doc) {
        this.srv = srv;
        this.brandSrv = brandSrv;
        this.cdr = cdr;
        this.doc = doc;
        this.unsubscribe$ = new Subject();
        this.loading = false;
        this.$mouse = new Subject();
        this.open = false;
    }
    get allL2() {
        return this.srv.allL2;
    }
    get allPanel() {
        return this.srv.allPanel;
    }
    get validOpen() {
        return this.data && this.open;
    }
    handleOpen(status) {
        this.doc.body.classList[status ? 'add' : 'remove']('alain-ms__an-body');
        this.open = status;
        this.cdr.markForCheck();
        this.updateHeight().load();
    }
    load() {
        if (this.loading || this.data) {
            return;
        }
        this.loading = true;
        this.srv.getData().subscribe((res) => {
            this.data = res;
            this.cdr.markForCheck();
        });
    }
    updateHeight() {
        const height = window.innerHeight - this.brandSrv.topHeight;
        this.dropdownEl.nativeElement.style.height = `${height}px`;
        return this;
    }
    _enter() {
        if (!this.validOpen) {
            this.handleOpen(true);
        }
    }
    _leave() {
        this.handleOpen(false);
    }
    mouseHandle(i, status) {
        this.$mouse.next({ i, status });
    }
    handleMouse(i) {
        this.srv.refreshActive(i);
        this.cdr.detectChanges();
    }
    ngOnInit() {
        // this._enter();
        const { $mouse, unsubscribe$ } = this;
        $mouse
            .asObservable()
            .pipe(takeUntil(unsubscribe$), auditTime(ANT_TIMEOUT))
            .subscribe((res) => this.handleMouse(res.i));
    }
    ngOnDestroy() {
        const { unsubscribe$ } = this;
        unsubscribe$.next();
        unsubscribe$.complete();
    }
}
MSAllNavComponent.decorators = [
    { type: Component, args: [{
                selector: 'ms-all-nav',
                template: "<div class=\"alain-ms__an-trigger\">\r\n  <i nz-icon nzType=\"bars\"></i>\r\n  <nz-spin *ngIf=\"open && !data\"></nz-spin>\r\n</div>\r\n<ng-template #menuTpl let-ls>\r\n  <ul class=\"alain-ms__an-menu\">\r\n    <li\r\n      *ngFor=\"let i of ls\"\r\n      class=\"alain-ms__an-menu-item\"\r\n      [ngClass]=\"{ 'alain-ms__an-menu-item--active': i.active }\"\r\n      (mouseenter)=\"mouseHandle(i, true)\"\r\n    >\r\n      {{ i.text }}\r\n      <i nz-icon nzType=\"right\"></i>\r\n    </li>\r\n  </ul>\r\n</ng-template>\r\n<ng-template #categoryTpl let-ls>\r\n  <div *ngFor=\"let p of ls\" class=\"alain-ms__an-category\">\r\n    <h3 class=\"alain-ms__an-category-title\">{{ p.text }}</h3>\r\n    <div class=\"alain-ms__an-category-list\">\r\n      <a *ngFor=\"let i of p.list\" [link-to]=\"i\" (linkToChanged)=\"_leave()\" class=\"alain-ms__an-category-link\">\r\n        {{ i.text }}\r\n        <span *ngIf=\"i.tip\" class=\"alain-ms__an-category-tip\">{{ i.tip }}</span>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n<div #dropdown class=\"alain-ms__an-dropdown\">\r\n  <div *ngIf=\"data\" class=\"alain-ms__an\">\r\n    <div class=\"alain-ms__an-panel alain-ms__an-panel-active alain-ms__an-level1\">\r\n      <div class=\"alain-ms__an-panel-inner\">\r\n        <ng-template [ngTemplateOutlet]=\"menuTpl\" [ngTemplateOutletContext]=\"{ $implicit: data.nav }\"></ng-template>\r\n        <div *ngIf=\"data.navBottom\" class=\"alain-ms__an-menu-bottom\">\r\n          <a *ngFor=\"let i of data.navBottom\" [link-to]=\"i\" (linkToChanged)=\"_leave()\">\r\n            {{ i.text }}\r\n            <i nz-icon nzType=\"share-alt\"></i>\r\n          </a>\r\n        </div>\r\n        <div *ngIf=\"data.bottomText\" class=\"alain-ms__an-bottom\">{{ data.bottomText }}</div>\r\n      </div>\r\n    </div>\r\n    <div\r\n      *ngFor=\"let p of allL2\"\r\n      class=\"alain-ms__an-panel alain-ms__an-level2\"\r\n      [ngClass]=\"{ 'alain-ms__an-level2-active': p.active }\"\r\n    >\r\n      <div class=\"alain-ms__an-panel-inner\">\r\n        <ng-template [ngTemplateOutlet]=\"menuTpl\" [ngTemplateOutletContext]=\"{ $implicit: p.children }\"></ng-template>\r\n      </div>\r\n    </div>\r\n    <div\r\n      *ngFor=\"let i of allPanel\"\r\n      class=\"alain-ms__an-content alain-ms__an-level{{ i.level }}-content alain-ms__an-left-col-{{ i.leftColumn }}\"\r\n      [ngClass]=\"{ 'alain-ms__an-content-active': i.active }\"\r\n    >\r\n      <div *ngIf=\"i._left && i._left.length > 0\" class=\"alain-ms__an-left\">\r\n        <div *ngFor=\"let col of i._left\" class=\"alain-ms__an-left-col\">\r\n          <ng-template\r\n            [ngTemplateOutlet]=\"categoryTpl\"\r\n            [ngTemplateOutletContext]=\"{ $implicit: col.list }\"\r\n          ></ng-template>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"i.right && i.right.length > 0\" class=\"alain-ms__an-right\">\r\n        <ng-template [ngTemplateOutlet]=\"categoryTpl\" [ngTemplateOutletContext]=\"{ $implicit: i.right }\"></ng-template>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                host: {
                    '[class.alain-ms__an-active]': 'validOpen',
                },
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
MSAllNavComponent.ctorParameters = () => [
    { type: MSAllNavService },
    { type: BrandService },
    { type: ChangeDetectorRef },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
MSAllNavComponent.propDecorators = {
    dropdownEl: [{ type: ViewChild, args: ['dropdown', { static: true },] }],
    _enter: [{ type: HostListener, args: ['mouseenter',] }],
    _leave: [{ type: HostListener, args: ['mouseleave',] }]
};
//# sourceMappingURL=all-nav.component.js.map
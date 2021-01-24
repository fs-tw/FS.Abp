import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { MSRegionService } from './region.service';
export class MSRegionComponent {
    constructor(srv, cdr) {
        this.srv = srv;
        this.cdr = cdr;
        this.inited = false;
    }
    ngOnInit() {
        this.srv.getData().subscribe(() => {
            this.inited = true;
            this.cdr.detectChanges();
        });
    }
    selected(item) {
        this.srv.setSelected(item);
        this.cdr.detectChanges();
    }
}
MSRegionComponent.decorators = [
    { type: Component, args: [{
                selector: 'ms-region',
                template: "<ng-container *ngIf=\"inited\">\r\n  <span class=\"alain-ms__topbar-item-btn\">\r\n    <i class=\"icon icon-{{ srv.item.country }}\"></i>\r\n    <span class=\"text-xs px-xs\">{{ srv.item.name }}</span>\r\n    <i nz-icon nzType=\"caret-up\" class=\"alain-ms__topbar-item-btn-arrow\"></i>\r\n  </span>\r\n  <div class=\"alain-ms__topbar-dd-menu alain-ms__topbar-dd-left alain-ms__region--wrap clearfix\">\r\n    <dl *ngFor=\"let p of srv.list\" class=\"alain-ms__region--list\">\r\n      <dt class=\"mb-sm\">{{ p.name }}</dt>\r\n      <dd *ngFor=\"let i of p.list\" (click)=\"selected(i)\">\r\n        <a class=\"d-block\" [ngClass]=\"{ 'brand-color': i.selected }\">\r\n          <i class=\"icon icon-{{ i.country }}\"></i>{{ i.name }}\r\n        </a>\r\n      </dd>\r\n    </dl>\r\n  </div>\r\n</ng-container>\r\n",
                host: {
                    '[class.alain-ms__topbar-item]': 'true',
                    '[class.alain-ms__topbar-dd]': 'true',
                    '[class.alain-ms__region]': 'true',
                },
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
MSRegionComponent.ctorParameters = () => [
    { type: MSRegionService },
    { type: ChangeDetectorRef }
];
//# sourceMappingURL=region.component.js.map
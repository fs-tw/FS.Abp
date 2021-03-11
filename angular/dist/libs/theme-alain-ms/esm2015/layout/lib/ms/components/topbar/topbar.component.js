import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, } from '@angular/core';
import { MSTopbarService, } from '../../services/topbar.service';
import { EnvironmentService } from '@abp/ng.core';
export class MSTopbarComponent {
    constructor(srv, 
    //  public userSrv: UserService,
    cdr, environment) {
        this.srv = srv;
        this.cdr = cdr;
        this.environment = environment;
        this.inited = false;
        this.allNav = false;
    }
    get appInfo() {
        return this.environment.getEnvironment().application;
    }
    ngOnInit() {
        this.srv.getData().subscribe(() => {
            this.inited = true;
            this.mergeLinks();
            this.cdr.detectChanges();
        });
    }
    mergeLinks() {
        const res = this.srv.data.navLinks;
        this.links = [res.finance, res.workorder, res.support].map((i) => {
            if (i.className == null) {
                i.className = '';
            }
            if (!i.links || i.links.length === 0) {
                i.links = undefined;
            }
            else {
                i.className += ' alain-ms__topbar-dd';
            }
            return i;
        });
    }
}
MSTopbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'ms-topbar',
                template: "<ng-template #defaultLogo>\r\n  <img src=\"./assets/logo-color.svg\" />\r\n</ng-template>\r\n<div class=\"alain-ms__topbar-main\">\r\n  <ms-all-nav *ngIf=\"allNav\"></ms-all-nav>\r\n  <div class=\"alain-ms__topbar-logo\">\r\n    <a routerLink=\"/\" class=\"alain-ms__topbar-logo-img\">\r\n      <img *ngIf=\"appInfo.logoUrl; else defaultLogo\" [src]=\"appInfo.logoUrl\"/>\r\n    </a>\r\n    <a routerLink=\"/\" class=\"alain-ms__topbar-logo-link\">\r\n      {{ appInfo.name }}\r\n    </a>\r\n  </div>\r\n  <!-- <ms-region *ngIf=\"userSrv?.isLogin\" class=\"hidden-md\"></ms-region> -->\r\n</div>\r\n<div class=\"alain-ms__topbar-widget\" *ngIf=\"inited\">\r\n  <!-- \u641C\u7D22 -->\r\n  <!-- <ms-search class=\"hidden-xs\"></ms-search> -->\r\n  <!-- \u6D88\u606F -->\r\n  <!-- <ms-notice></ms-notice> -->\r\n  <!-- \u83DC\u5355 -->\r\n  <!-- <div *ngFor=\"let p of links\" class=\"alain-ms__topbar-item\" [ngClass]=\"p.className\">\r\n    <a class=\"alain-ms__topbar-item-btn\" [link-to]=\"p\">{{ p.text }}</a>\r\n    <ul class=\"alain-ms__topbar-dd-menu\" *ngIf=\"p.links\">\r\n      <li *ngFor=\"let i of p.links\">\r\n        <a class=\"alain-ms__topbar-dd-item\" [link-to]=\"i\">{{ i.text }}</a>\r\n      </li>\r\n    </ul>\r\n  </div> -->\r\n  <!-- \u8D2D\u7269\u8F66 -->\r\n  <!-- <div class=\"alain-ms__topbar-item hidden-mobile\" class=\"hidden-xs\">\r\n    <a class=\"alain-ms__topbar-item-btn alain-ms__topbar-item-icon\" routerLink=\"/\">\r\n      <i nz-icon nzType=\"shopping-cart\"></i>\r\n    </a>\r\n  </div> -->\r\n  <!-- \u8BED\u8A00 -->\r\n  <ms-langs></ms-langs>\r\n  <!-- \u7528\u6237 -->\r\n  <ms-user></ms-user>\r\n</div>\r\n",
                host: {
                    '[class.alain-ms__topbar]': 'true',
                    '[class.alain-ms__topbar-single]': 'allNav',
                },
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
MSTopbarComponent.ctorParameters = () => [
    { type: MSTopbarService },
    { type: ChangeDetectorRef },
    { type: EnvironmentService }
];
MSTopbarComponent.propDecorators = {
    allNav: [{ type: Input }]
};
//# sourceMappingURL=topbar.component.js.map
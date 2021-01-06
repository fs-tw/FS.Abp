import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DA_SERVICE_TOKEN } from '@delon/auth';
import { SettingsService } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import { MSTopbarService } from '../../services/topbar.service';
export class MSNoticeComponent {
    constructor(srv, router, tokenService, settings, msg) {
        this.srv = srv;
        this.router = router;
        this.tokenService = tokenService;
        this.settings = settings;
        this.msg = msg;
    }
    get list() {
        return this.srv.messages.map((i) => {
            i.link = this.l.messageUrl + i.id;
            return i;
        });
    }
    get l() {
        return this.srv.getNav('message');
    }
    logout() {
        this.tokenService.clear();
        this.router.navigateByUrl(this.tokenService.login_url);
    }
}
MSNoticeComponent.decorators = [
    { type: Component, args: [{
                selector: 'ms-notice',
                template: "<span class=\"alain-ms__topbar-item-btn\">\r\n  <span class=\"position-relative\">\r\n    {{ l.titleText }}<em *ngIf=\"list.length > 0\" class=\"alain-ms__topbar-item-num\">{{ list.length }}</em>\r\n  </span>\r\n</span>\r\n<div class=\"alain-ms__topbar-dd-menu\">\r\n  <div class=\"alain-ms__notice-hd\">\r\n    {{ l.title }}\r\n    <a class=\"brand-color\" [link-to]=\"l.subscribe\">{{ l.subscribe.title }}</a>\r\n  </div>\r\n  <a class=\"alain-ms__notice-item\" *ngFor=\"let i of list\" [link-to]=\"i\">\r\n    <div class=\"alain-ms__notice-item--title\">{{ i.title }}</div>\r\n    <span class=\"alain-ms__notice-item--time\">{{ i.time }}</span>\r\n  </a>\r\n  <div class=\"alain-ms__notice-fd\">\r\n    <a class=\"d-block pt-sm pb-xs text-center\" [link-to]=\"l\">{{ l.text }}</a>\r\n  </div>\r\n</div>\r\n",
                host: {
                    '[class.alain-ms__topbar-item]': 'true',
                    '[class.alain-ms__topbar-dd]': 'true',
                    '[class.alain-ms__notice]': 'true',
                },
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
MSNoticeComponent.ctorParameters = () => [
    { type: MSTopbarService },
    { type: Router },
    { type: undefined, decorators: [{ type: Inject, args: [DA_SERVICE_TOKEN,] }] },
    { type: SettingsService },
    { type: NzMessageService }
];
//# sourceMappingURL=notice.component.js.map
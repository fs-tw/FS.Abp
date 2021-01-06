import { ChangeDetectionStrategy, Component } from '@angular/core';
export class MSHelpComponent {
}
MSHelpComponent.decorators = [
    { type: Component, args: [{
                selector: 'help',
                template: "<div class=\"ms-help__wrap\" nz-popover nzPopoverTrigger=\"click\" [nzPopoverContent]=\"helpTpl\">\r\n  <span class=\"ms-help__text\">\r\n    \u54A8\u8BE2\u00B7\u5EFA\u8BAE\r\n  </span>\r\n</div>\r\n<ng-template #helpTpl>\r\n  <div class=\"d-flex align-items-center mb-sm\">\r\n    <i nz-icon nzType=\"phone\" class=\"mr-sm text-xl\"></i>\r\n    <a routerLink=\"/\">\r\n      \u552E\u524D\u54A8\u8BE2\u7535\u8BDD\r\n      <div class=\"text-orange text-xs\">xxxx \u8F6C 1</div>\r\n    </a>\r\n  </div>\r\n  <div class=\"d-flex align-items-center mb-sm\">\r\n    <i nz-icon nzType=\"customer-service\" class=\"mr-sm text-xl\"></i>\r\n    <a routerLink=\"/smart\">\r\n      \u667A\u80FD\u987E\u95EE\r\n      <div class=\"text-grey text-xs\">\u667A\u80FD\u8BCA\u65AD\uFF0C\u79D2\u7EA7\u89E3\u7B54</div>\r\n    </a>\r\n  </div>\r\n  <div class=\"d-flex align-items-center\">\r\n    <i nz-icon nzType=\"edit\" class=\"mr-sm text-xl\"></i>\r\n    <a routerLink=\"/\">\r\n      \u5EFA\u8BAE\u53CD\u9988\r\n      <div class=\"text-grey text-xs\">XXX\u4E0D\u662F\u5B8C\u7F8E\u7684\uFF0C\u6211\u4EEC\u6E34\u671B\u60A8\u7684\u5EFA\u8BAE</div>\r\n    </a>\r\n  </div>\r\n</ng-template>\r\n",
                host: {
                    '[class.ms-help]': 'true',
                },
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
//# sourceMappingURL=help.component.js.map
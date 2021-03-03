import { Component } from '@angular/core';
export class LayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
LayoutComponent.decorators = [
    { type: Component, args: [{
                template: "<div class=\"row entry-row\">\r\n  <div class=\"col-auto\">\r\n    <h1 class=\"content-header-title\">\r\n        \u4F01\u696D\u5BA2\u6236\u7BA1\u7406\r\n    </h1>\r\n  </div>\r\n  <div class=\"col-lg-auto pl-lg-0\">\r\n    <abp-breadcrumb></abp-breadcrumb>\r\n  </div>\r\n  <div class=\"col\">\r\n    <!-- <abp-page-toolbar [record]=\"data\"></abp-page-toolbar> -->\r\n  </div>\r\n</div>\r\n<router-outlet></router-outlet>\r\n<!-- <div class=\"card\">\r\n  <div class=\"card-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col col-md-6\">\r\n        <h5 class=\"card-title\">\u4F01\u696D\u5BA2\u6236\u7BA1\u7406</h5>\r\n      </div>\r\n      <div class=\"text-right col col-md-6\">\r\n        <abp-page-toolbar [record]=\"data$ | async\"></abp-page-toolbar>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card-body\">\r\n    \r\n  </div>\r\n</div> -->\r\n",
                styles: [""]
            },] }
];
LayoutComponent.ctorParameters = () => [];
//# sourceMappingURL=layout.component.js.map
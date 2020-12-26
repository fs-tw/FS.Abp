import { Component, Inject } from '@angular/core';
import { DA_SERVICE_TOKEN } from '@delon/auth';
export class LayoutPassportComponent {
    constructor(tokenService) {
        this.tokenService = tokenService;
        this.links = [
            {
                title: '帮助',
                href: '',
            },
            {
                title: '隐私',
                href: '',
            },
            {
                title: '条款',
                href: '',
            },
        ];
    }
    ngOnInit() {
        this.tokenService.clear();
    }
}
LayoutPassportComponent.decorators = [
    { type: Component, args: [{
                selector: 'layout-passport',
                template: "<div class=\"container\">\r\n  <header-i18n showLangText=\"false\" class=\"langs\"></header-i18n>\r\n  <div class=\"wrap\">\r\n    <div class=\"top\">\r\n      <div class=\"head\">\r\n        <img class=\"logo\" src=\"./assets/logo-color.svg\" />\r\n        <span class=\"title\">ng-alain</span>\r\n      </div>\r\n      <div class=\"desc\">FS Demo</div>\r\n    </div>\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n",
                styles: [":host ::ng-deep .container{background:#f0f2f5;display:flex;flex-direction:column;min-height:100%}:host ::ng-deep .langs{height:40px;line-height:44px;text-align:right;width:100%}:host ::ng-deep .langs .anticon{cursor:pointer;font-size:14px;margin-right:24px;margin-top:24px;vertical-align:top}:host ::ng-deep .wrap{flex:1;padding:32px 0}:host ::ng-deep .ant-form-item{display:flex;justify-content:space-between;margin-bottom:24px}@media (min-width:768px){:host ::ng-deep .container{background-image:url(https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg);background-position:center 110px;background-repeat:no-repeat;background-size:100%}:host ::ng-deep .wrap{padding:32px 0 24px}}:host ::ng-deep .top{text-align:center}:host ::ng-deep .header{height:44px;line-height:44px}:host ::ng-deep .header a{text-decoration:none}:host ::ng-deep .logo{height:44px;margin-right:16px}:host ::ng-deep .title{color:rgba(0,0,0,.85);font-family:Myriad Pro,Helvetica Neue,Arial,Helvetica,sans-serif;font-size:33px;font-weight:600;position:relative;vertical-align:middle}:host ::ng-deep .desc{color:rgba(0,0,0,.45);font-size:14px;margin-bottom:40px;margin-top:12px}[data-theme=dark] :host ::ng-deep .container{background:#141414}[data-theme=dark] :host ::ng-deep .title{color:hsla(0,0%,100%,.85)}[data-theme=dark] :host ::ng-deep .desc{color:hsla(0,0%,100%,.45)}@media (min-width:768px){[data-theme=dark] :host ::ng-deep .container{background-image:none}}[data-theme=compact] :host ::ng-deep .ant-form-item{margin-bottom:16px}"]
            },] }
];
LayoutPassportComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DA_SERVICE_TOKEN,] }] }
];
//# sourceMappingURL=passport.component.js.map
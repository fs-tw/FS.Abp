import { Component } from '@angular/core';
import { EnvironmentService } from '@abp/ng.core';
export class ApplicationLayoutComponent {
    constructor(environment) {
        this.environment = environment;
        this.headerComponentKey = "Theme.ApplicationLayoutHeaderComponent" /* ApplicationLayoutHeader */;
        this.footerComponentKey = "Theme.ApplicationLayoutFooterComponent" /* ApplicationLayoutFooter */;
    }
    get appInfo() {
        return this.environment.getEnvironment().application;
    }
}
ApplicationLayoutComponent.type = "application" /* application */;
ApplicationLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'fs-application-layout',
                template: "<main>\r\n  <fs-header *abpReplaceableTemplate=\"{ \r\n    componentKey: 'Theme.ApplicationLayoutHeaderComponent'\r\n  }\">\r\n  </fs-header>\r\n\r\n  <!-- <fs-banner *abpReplaceableTemplate=\"{ \r\n    componentKey: 'Theme.ApplicationLayoutBannerComponent'\r\n  }\">\r\n  </fs-banner> -->\r\n\r\n  <router-outlet></router-outlet>\r\n\r\n  <fs-footer *abpReplaceableTemplate=\"{ \r\n    componentKey: 'Theme.ApplicationLayoutFooterComponent'\r\n  }\">\r\n  </fs-footer>\r\n  <a class=\"js-go-to u-go-to-v1\" href=\"#\" data-type=\"fixed\" data-position='{\r\n     \"bottom\": 15,\r\n     \"right\": 15\r\n   }' data-offset-top=\"400\" data-compensation=\"#js-header\" data-show-effect=\"zoomIn\">\r\n    <i class=\"hs-icon hs-icon-arrow-top\"></i>\r\n  </a>\r\n</main>\r\n\r\n"
            },] }
];
ApplicationLayoutComponent.ctorParameters = () => [
    { type: EnvironmentService }
];
//# sourceMappingURL=application-layout.component.js.map
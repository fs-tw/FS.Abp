import { SubscriptionService, MultiTenancyService, ConfigStateService } from '@abp/ng.core';
import { Component, Input, TemplateRef } from '@angular/core';
import { Store } from '@ngxs/store';
export class AuthWrapperComponent {
    constructor(multiTenancy, store, subscription, configStateService) {
        this.multiTenancy = multiTenancy;
        this.store = store;
        this.subscription = subscription;
        this.configStateService = configStateService;
        this.enableLocalLogin = true;
        this.tenantBoxKey = "Account.TenantBoxComponent" /* TenantBox */;
        this.isMultiTenancyEnabled$ = this.configStateService.getDeep$('multiTenancy.isEnabled');
    }
    ngOnInit() {
        this.subscription.addOne(this.configStateService.getSetting$('Abp.Account.EnableLocalLogin'), value => {
            if (value) {
                this.enableLocalLogin = value.toLowerCase() !== 'false';
            }
        });
    }
}
AuthWrapperComponent.decorators = [
    { type: Component, args: [{
                selector: 'abp-auth-wrapper',
                template: "<div class=\"row\">\r\n  <div class=\"mx-auto col col-md-5\">\r\n    <ng-container *ngIf=\"(isMultiTenancyEnabled$ | async) && multiTenancy.isTenantBoxVisible\">\r\n      <abp-tenant-box *abpReplaceableTemplate=\"{ componentKey: tenantBoxKey }\"></abp-tenant-box>\r\n    </ng-container>\r\n\r\n    <div class=\"abp-account-container\">\r\n      <div\r\n        *ngIf=\"enableLocalLogin; else disableLocalLoginTemplate\"\r\n        class=\"card mt-3 shadow-sm rounded\"\r\n      >\r\n        <div class=\"card-body p-5\">\r\n          <ng-content *ngTemplateOutlet=\"mainContentRef\"></ng-content>\r\n        </div>\r\n        <ng-content *ngTemplateOutlet=\"cancelContentRef\"></ng-content>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #disableLocalLoginTemplate>\r\n  <div class=\"alert alert-warning\">\r\n    <strong>{{ 'AbpAccount::InvalidLoginRequest' | abpLocalization }}</strong>\r\n    {{ 'AbpAccount::ThereAreNoLoginSchemesConfiguredForThisClient' | abpLocalization }}\r\n  </div>\r\n</ng-template>\r\n",
                exportAs: 'abpAuthWrapper',
                providers: [SubscriptionService]
            },] }
];
AuthWrapperComponent.ctorParameters = () => [
    { type: MultiTenancyService },
    { type: Store },
    { type: SubscriptionService },
    { type: ConfigStateService }
];
AuthWrapperComponent.propDecorators = {
    mainContentRef: [{ type: Input }],
    cancelContentRef: [{ type: Input }]
};
//# sourceMappingURL=auth-wrapper.component.js.map
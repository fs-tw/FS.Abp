import { SubscriptionService, MultiTenancyService, ConfigStateService } from '@abp/ng.core';
import { OnInit, TemplateRef } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { eAccountComponents } from '../../enums/components';
import { Account } from '../../models/account';
import * as i0 from "@angular/core";
export declare class AuthWrapperComponent implements Account.AuthWrapperComponentInputs, Account.AuthWrapperComponentOutputs, OnInit {
    readonly multiTenancy: MultiTenancyService;
    private store;
    private subscription;
    private configStateService;
    readonly mainContentRef: TemplateRef<any>;
    readonly cancelContentRef: TemplateRef<any>;
    isMultiTenancyEnabled$: Observable<boolean>;
    enableLocalLogin: boolean;
    tenantBoxKey: eAccountComponents;
    constructor(multiTenancy: MultiTenancyService, store: Store, subscription: SubscriptionService, configStateService: ConfigStateService);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<AuthWrapperComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<AuthWrapperComponent, "abp-auth-wrapper", ["abpAuthWrapper"], { "mainContentRef": "mainContentRef"; "cancelContentRef": "cancelContentRef"; }, {}, never, ["*", "*"]>;
}
//# sourceMappingURL=auth-wrapper.component.d.ts.map
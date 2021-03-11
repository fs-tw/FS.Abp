import { SessionStateService, CurrentTenantDto, SubscriptionService, AbpApplicationConfigurationService, ConfigStateService } from '@abp/ng.core';
import { ToasterService } from '@abp/ng.theme.shared';
import { Observable } from 'rxjs';
import { Account } from '../../models/account';
import { AccountService } from '../../services/account.service';
import * as i0 from "@angular/core";
export declare class TenantBoxComponent implements Account.TenantBoxComponentInputs, Account.TenantBoxComponentOutputs {
    private toasterService;
    private accountService;
    private sessionStateService;
    private subscriptionService;
    private abpApplicationConfigurationService;
    private configStateService;
    currentTenant$: Observable<CurrentTenantDto>;
    name: string;
    isModalVisible: boolean;
    modalBusy: boolean;
    constructor(toasterService: ToasterService, accountService: AccountService, sessionStateService: SessionStateService, subscriptionService: SubscriptionService, abpApplicationConfigurationService: AbpApplicationConfigurationService, configStateService: ConfigStateService);
    onSwitch(): void;
    save(): void;
    private setTenant;
    private showError;
    static ɵfac: i0.ɵɵFactoryDef<TenantBoxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<TenantBoxComponent, "abp-tenant-box", never, {}, {}, never, never>;
}
//# sourceMappingURL=tenant-box.component.d.ts.map
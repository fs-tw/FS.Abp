import { SessionStateService, CurrentTenantDto, SubscriptionService, AbpApplicationConfigurationService, ConfigStateService } from '@abp/ng.core';
import { ToasterService } from '@abp/ng.theme.shared';
import { Observable } from 'rxjs';
import { Account } from '../../models/account';
import { AccountService } from '../../services/account.service';
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
}

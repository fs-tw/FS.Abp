import type { EmailSettingsDto, EmailSettingsGetDto } from './dtos/models';
import { RestService } from '@abp/ng.core';
export declare class EmailingApiService {
    private restService;
    apiName: string;
    getByEmailSettingsGet: (EmailSettingsGet?: EmailSettingsGetDto) => import("rxjs").Observable<EmailSettingsDto>;
    updateByEmailSettingsAndProviderNameAndProviderKey: (EmailSettings: EmailSettingsDto, providerName?: string, providerKey?: string) => import("rxjs").Observable<void>;
    constructor(restService: RestService);
}

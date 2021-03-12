import type { EmailSettingsDto, EmailSettingsGetDto } from './dtos/models';
import { RestService } from '@abp/ng.core';
import * as i0 from "@angular/core";
export declare class EmailingApiService {
    private restService;
    apiName: string;
    getByEmailSettingsGet: (EmailSettingsGet?: EmailSettingsGetDto) => import("rxjs").Observable<EmailSettingsDto>;
    updateByEmailSettingsAndProviderNameAndProviderKey: (EmailSettings: EmailSettingsDto, providerName?: string, providerKey?: string) => import("rxjs").Observable<void>;
    constructor(restService: RestService);
    static ɵfac: i0.ɵɵFactoryDef<EmailingApiService, never>;
    static ɵprov: i0.ɵɵInjectableDef<EmailingApiService>;
}
//# sourceMappingURL=emailing-api.service.d.ts.map
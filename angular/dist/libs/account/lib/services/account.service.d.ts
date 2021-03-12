import { Observable } from 'rxjs';
import { RestService } from '@abp/ng.core';
import { RegisterResponse, RegisterRequest, TenantIdResponse } from '../models';
import * as i0 from "@angular/core";
export declare class AccountService {
    private rest;
    apiName: string;
    constructor(rest: RestService);
    findTenant(tenantName: string): Observable<TenantIdResponse>;
    register(body: RegisterRequest): Observable<RegisterResponse>;
    static ɵfac: i0.ɵɵFactoryDef<AccountService, never>;
    static ɵprov: i0.ɵɵInjectableDef<AccountService>;
}
//# sourceMappingURL=account.service.d.ts.map
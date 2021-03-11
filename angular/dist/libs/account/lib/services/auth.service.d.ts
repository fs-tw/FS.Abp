import { Injector } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { EnvironmentService, ConfigStateService, AbpApplicationConfigurationService, SessionStateService } from '@abp/ng.core';
import * as i0 from "@angular/core";
export declare class AuthService {
    private injector;
    private environment;
    private oAuthService;
    private abpApplicationConfigurationService;
    private router;
    private sessionStateService;
    private configStateService;
    private options;
    private flow;
    private strategy;
    constructor(injector: Injector, environment: EnvironmentService, oAuthService: OAuthService, abpApplicationConfigurationService: AbpApplicationConfigurationService, router: Router, sessionStateService: SessionStateService, configStateService: ConfigStateService, options: any);
    initLogin(): void;
    private setStrategy;
    get isInternalAuth(): boolean;
    private listenToSetEnvironment;
    init(): Promise<any>;
    logout(): Observable<any>;
    login(username: string, password: string): Observable<any>;
    static ɵfac: i0.ɵɵFactoryDef<AuthService, [null, null, null, null, null, null, null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDef<AuthService>;
}
//# sourceMappingURL=auth.service.d.ts.map
import { __awaiter } from "tslib";
import { HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, Injector, Optional } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { from } from 'rxjs';
import { switchMap, take, tap } from 'rxjs/operators';
import snq from 'snq';
import { Router } from '@angular/router';
import { EnvironmentService, ConfigStateService, AbpApplicationConfigurationService, SessionStateService, AUTH_FLOW_STRATEGY } from '@abp/ng.core';
import { AuthPasswordFlowStrategy } from '../strategies/auth-flow.strategy';
import * as i0 from "@angular/core";
import * as i1 from "@abp/ng.core";
import * as i2 from "angular-oauth2-oidc";
import * as i3 from "@angular/router";
export class AuthService {
    constructor(injector, environment, oAuthService, abpApplicationConfigurationService, router, sessionStateService, configStateService, options) {
        this.injector = injector;
        this.environment = environment;
        this.oAuthService = oAuthService;
        this.abpApplicationConfigurationService = abpApplicationConfigurationService;
        this.router = router;
        this.sessionStateService = sessionStateService;
        this.configStateService = configStateService;
        this.options = options;
        this.setStrategy = () => {
            const flow = this.environment.getEnvironment().oAuthConfig.responseType || 'password';
            if (this.flow === flow)
                return;
            if (this.strategy)
                this.strategy.destroy();
            this.flow = flow;
            if (flow === 'password') {
                this.strategy = new AuthPasswordFlowStrategy(this.injector);
            }
            else {
                this.strategy = AUTH_FLOW_STRATEGY.Code(this.injector);
            }
        };
        this.setStrategy();
        this.listenToSetEnvironment();
    }
    initLogin() {
        this.strategy.login();
    }
    get isInternalAuth() {
        return this.strategy.isInternalAuth;
    }
    listenToSetEnvironment() {
        this.environment.createOnUpdateStream(state => state.oAuthConfig).subscribe(this.setStrategy);
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.strategy.init();
        });
    }
    logout() {
        return this.strategy.logout();
    }
    login(username, password) {
        const tenant = this.sessionStateService.getTenant();
        return from(this.oAuthService.fetchTokenUsingPasswordFlow(username, password, new HttpHeaders(Object.assign({}, (tenant && tenant.id && { __tenant: tenant.id }))))).pipe(switchMap(() => {
            return this.abpApplicationConfigurationService.get()
                .pipe(tap(x => this.configStateService.setState(x)));
        }), tap(() => {
            const redirectUrl = snq(() => window.history.state.redirectUrl) || (this.options || {}).redirectUrl || '/';
            this.router.navigateByUrl(redirectUrl);
        }), take(1));
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(i0.ɵɵinject(i0.Injector), i0.ɵɵinject(i1.EnvironmentService), i0.ɵɵinject(i2.OAuthService), i0.ɵɵinject(i1.AbpApplicationConfigurationService), i0.ɵɵinject(i3.Router), i0.ɵɵinject(i1.SessionStateService), i0.ɵɵinject(i1.ConfigStateService), i0.ɵɵinject('ACCOUNT_OPTIONS', 8)); };
AuthService.ɵprov = i0.ɵɵdefineInjectable({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i0.Injector }, { type: i1.EnvironmentService }, { type: i2.OAuthService }, { type: i1.AbpApplicationConfigurationService }, { type: i3.Router }, { type: i1.SessionStateService }, { type: i1.ConfigStateService }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: ['ACCOUNT_OPTIONS']
            }] }]; }, null); })();
//# sourceMappingURL=auth.service.js.map
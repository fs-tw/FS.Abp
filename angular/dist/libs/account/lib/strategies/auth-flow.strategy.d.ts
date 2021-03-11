import { AuthFlowStrategy } from '@abp/ng.core';
export declare const oAuthStorage: Storage;
export declare class AuthPasswordFlowStrategy extends AuthFlowStrategy {
    readonly isInternalAuth = true;
    login(): void;
    checkIfInternalAuth(): boolean;
    logout(): import("rxjs").Observable<import("@abp/ng.core").ApplicationConfigurationDto>;
    destroy(): void;
}
//# sourceMappingURL=auth-flow.strategy.d.ts.map
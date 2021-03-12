import { RoutesService } from '@abp/ng.core';
export declare const CMS_ROUTE_PROVIDERS: {
    provide: import("@angular/core").InjectionToken<(() => void)[]>;
    useFactory: typeof configureRoutes;
    deps: (typeof RoutesService)[];
    multi: boolean;
}[];
export declare function configureRoutes(routes: RoutesService): () => void;
//# sourceMappingURL=route.provider.d.ts.map
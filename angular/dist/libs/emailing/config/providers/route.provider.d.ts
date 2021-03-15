import { RoutesService } from '@abp/ng.core';
export declare const EMAILING_ROUTE_PROVIDERS: {
    provide: import("@angular/core").InjectionToken<(() => void)[]>;
    useFactory: typeof configureRoutes;
    deps: (typeof RoutesService)[];
    multi: boolean;
}[];
export declare function configureRoutes(routesService: RoutesService): () => void;

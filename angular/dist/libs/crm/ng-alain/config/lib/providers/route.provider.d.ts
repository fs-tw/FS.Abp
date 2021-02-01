import { eLayoutType } from '@abp/ng.core';
import { eCrmRouteNames } from '../enums/route-names';
import { RoutesService } from '@abp/ng.core';
import { eThemeSharedRouteNames } from '@abp/ng.theme.shared';
export declare const ROUTE_PROVIDERS: {
    provide: import("@angular/core").InjectionToken<(() => void)[]>;
    useFactory: typeof configureRoutes;
    deps: (typeof RoutesService)[];
    multi: boolean;
}[];
export declare const CrmCore: {
    path: string;
    parentName: eThemeSharedRouteNames;
    name: eCrmRouteNames;
    iconClass: string;
    layout: eLayoutType;
    order: number;
    navConfig: {
        title: eCrmRouteNames;
        doc: eCrmRouteNames;
        name: eCrmRouteNames;
    };
}[];
export declare const CrmBasic: {
    path: string;
    name: eCrmRouteNames;
    parentName: eCrmRouteNames;
    order: number;
    navConfig: {
        title: eCrmRouteNames;
    };
}[];
export declare const Selectoroption: {
    path: string;
    name: eCrmRouteNames;
    parentName: eCrmRouteNames;
    order: number;
    navConfig: {
        title: eCrmRouteNames;
    };
}[];
declare function configureRoutes(routes: RoutesService): () => void;
export {};

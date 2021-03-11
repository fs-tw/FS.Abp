import { Injector } from '@angular/core';
export declare const LAYOUT_INIT_PROVIDERS: {
    provide: import("@angular/core").InjectionToken<(() => void)[]>;
    useFactory: typeof init;
    deps: (typeof Injector)[];
    multi: boolean;
}[];
export declare function init(injector: Injector): () => void;
export declare function listenRouter(injector: Injector): void;

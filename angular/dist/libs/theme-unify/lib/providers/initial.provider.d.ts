import { Injector } from '@angular/core';
export declare const UNIFY_THEME_INITIAL_PROVIDERS: {
    provide: import("@angular/core").InjectionToken<(() => void)[]>;
    useFactory: typeof configureInitial;
    deps: (typeof Injector)[];
    multi: boolean;
}[];
export declare function configureInitial(injector: Injector): () => void;

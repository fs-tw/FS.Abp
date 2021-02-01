import { Injector } from '@angular/core';
export declare const NGALAINMS_THEME_STYLES_PROVIDERS: {
    provide: import("@angular/core").InjectionToken<(() => void)[]>;
    useFactory: typeof configureStyles;
    deps: (typeof Injector)[];
    multi: boolean;
}[];
export declare function configureStyles(injector: Injector): () => void;

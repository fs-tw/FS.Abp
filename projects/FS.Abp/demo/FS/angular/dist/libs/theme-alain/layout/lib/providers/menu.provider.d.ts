import { Injector } from '@angular/core';
export declare const LAYOUT_MENU_PROVIDERS: {
    provide: import("@angular/core").InjectionToken<(() => void)[]>;
    useFactory: typeof configureMenus;
    deps: (typeof Injector)[];
    multi: boolean;
}[];
export declare function configureMenus(injector: Injector): () => void;

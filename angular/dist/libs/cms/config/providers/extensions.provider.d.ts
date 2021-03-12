import { Injector } from '@angular/core';
export declare const EXTENSIONS_PROVIDERS: {
    provide: import("@angular/core").InjectionToken<(() => void)[]>;
    useFactory: typeof configure;
    deps: (typeof Injector)[];
    multi: boolean;
}[];
declare function configure(injector: Injector): () => Promise<boolean>;
export {};
//# sourceMappingURL=extensions.provider.d.ts.map
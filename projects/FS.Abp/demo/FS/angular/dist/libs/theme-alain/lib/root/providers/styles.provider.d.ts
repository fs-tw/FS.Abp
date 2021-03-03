import { NzIconService } from 'ng-zorro-antd/icon';
export declare const STYLES_PROVIDERS: {
    provide: import("@angular/core").InjectionToken<(() => void)[]>;
    useFactory: typeof configureStyles;
    deps: (typeof NzIconService)[];
    multi: boolean;
}[];
export declare function configureStyles(iconSrv: NzIconService): () => void;

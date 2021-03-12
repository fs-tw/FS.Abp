import { SettingTabsService } from '@abp/ng.core';
export declare const UNIFY_THEME_SETTING_TAB_PROVIDERS: {
    provide: import("@angular/core").InjectionToken<(() => void)[]>;
    useFactory: typeof configureSettingTabs;
    deps: (typeof SettingTabsService)[];
    multi: boolean;
}[];
export declare function configureSettingTabs(settingtabs: SettingTabsService): () => void;
//# sourceMappingURL=setting-tab.provider.d.ts.map
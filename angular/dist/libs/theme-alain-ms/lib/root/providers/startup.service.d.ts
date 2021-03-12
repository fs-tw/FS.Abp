import { HttpClient } from '@angular/common/http';
import { SettingsService, TitleService } from '@delon/theme';
import { NzIconService } from 'ng-zorro-antd/icon';
import * as i0 from "@angular/core";
/**
 * 用于应用启动时
 * 一般用来获取应用所需要的基础数据等
 */
export declare class StartupService {
    private settingService;
    private httpClient;
    private doc;
    private titleSrv;
    constructor(iconSrv: NzIconService, settingService: SettingsService, httpClient: HttpClient, doc: any, titleSrv: TitleService);
    load(): Promise<any>;
    private removeLoading;
    static ɵfac: i0.ɵɵFactoryDef<StartupService, never>;
    static ɵprov: i0.ɵɵInjectableDef<StartupService>;
}
export declare function StartupServiceFactory(startupService: StartupService): () => Promise<any>;
export declare const APPINIT_PROVIDES: (typeof StartupService | {
    provide: import("@angular/core").InjectionToken<(() => void)[]>;
    useFactory: typeof StartupServiceFactory;
    deps: (typeof StartupService)[];
    multi: boolean;
})[];
//# sourceMappingURL=startup.service.d.ts.map
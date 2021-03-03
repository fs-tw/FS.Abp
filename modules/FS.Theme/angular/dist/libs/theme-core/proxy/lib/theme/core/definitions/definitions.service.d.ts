import type { BannerForCreateDto, BannerForSort, MenuForCreateDto, MenuForUpdateDto, ThemeDto, ThemeForUpdateDto } from './models';
import { RestService } from '@abp/ng.core';
export declare class DefinitionsService {
    private restService;
    apiName: string;
    createThemeBannerByThemeNoAndInput: (themeNo: string, input: BannerForCreateDto) => import("rxjs").Observable<void>;
    createThemeMenuByThemeNoAndInput: (themeNo: string, input: MenuForCreateDto) => import("rxjs").Observable<void>;
    deleteThemeCodeById: (id: string) => import("rxjs").Observable<void>;
    getThemeByThemeNo: (themeNo: string) => import("rxjs").Observable<ThemeDto>;
    getThemeDefinitionChildren: () => import("rxjs").Observable<string[]>;
    putBannersForSortByThemeNoAndInput: (themeNo: string, input: BannerForSort) => import("rxjs").Observable<void>;
    putThemeMenuByThemeNoAndInput: (themeNo: string, input: MenuForUpdateDto) => import("rxjs").Observable<void>;
    putThemeSettingByThemeNoAndInput: (themeNo: string, input: ThemeForUpdateDto) => import("rxjs").Observable<void>;
    constructor(restService: RestService);
}

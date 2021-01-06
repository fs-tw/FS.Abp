import { BannerSettingDto, CompanyInfoDto, MenuSettingDto, RelatedLinkDto, ThemeSettingDto } from '../dtos/models';
export interface BannerDto {
    displayName: string;
    no: string;
    id: string;
    settings: BannerSettingDto;
}
export interface BannerForCreateDto {
    displayName: string;
    no: string;
    fileContent: string;
    fileName: string;
    sequence: number;
}
export interface BannerForSort {
    bannerIds: string[];
}
export interface LogoInfoForUpdate {
    url: string;
}
export interface MenuDto {
    displayName: string;
    no: string;
    id: string;
    settings: MenuSettingDto;
    menus: MenuDto[];
}
export interface MenuForCreateDto {
    displayName: string;
    no: string;
    parentId?: string;
    settings: MenuSettingDto;
}
export interface MenuForUpdateDto {
    displayName: string;
    no: string;
    id: string;
    settings: MenuSettingDto;
}
export interface ThemeDto {
    no: string;
    id: string;
    themeSetting: ThemeSettingDto;
    banners: BannerDto[];
    menus: MenuDto[];
}
export interface ThemeForUpdateDto {
    logoContent: string;
    faviconContent: string;
    companyInfo: CompanyInfoDto;
    webInfo: WebInfoDtoForUpdate;
    relatedLink: RelatedLinkDto;
    logoInfo: LogoInfoForUpdate;
}
export interface WebInfoDtoForUpdate {
    title: string;
    count: number;
    copyright: string;
}

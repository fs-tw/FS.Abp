
export interface BannerSettingDto {
  fileName: string;
  fileUrl: string;
  sequence: number;
}

export interface CompanyInfoDto {
  name: string;
  phone: string;
  fax: string;
  email: string;
  contactPerson: string;
  address: string;
}

export interface LogoInfoDto {
  logo: string;
  url: string;
}

export interface MenuSettingDto {
  icon: string;
  url: string;
  sequence: number;
  openAnotherWindow: boolean;
}

export interface RelatedLinkDto {
  facebook: string;
  googleMap: string;
}

export interface ThemeSettingDto {
  logoInfo: LogoInfoDto;
  companyInfo: CompanyInfoDto;
  webInfo: WebInfoDto;
  relatedLink: RelatedLinkDto;
}

export interface WebInfoDto {
  title: string;
  favicon: string;
  count: number;
  copyright: string;
}

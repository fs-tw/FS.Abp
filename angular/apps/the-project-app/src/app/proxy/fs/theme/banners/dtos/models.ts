import type { AuditedEntityDto } from '@abp/ng.core';
import type { SearchResultRequestDto } from '../../../abp/application/dtos/models';

export interface BannerConfigDto {
  fileName?: string;
  fileUrl?: string;
  sequence: number;
}

export interface BannerDefinitionDto extends AuditedEntityDto<string> {
  no?: string;
  displayName?: string;
  description?: string;
  enable: boolean;
}

export interface BannerDefinitionGetListDto extends SearchResultRequestDto {
}

export interface BannerDefinitionWithDetailsDto extends BannerDefinitionDto {
  banners: BannerDto[];
}

export interface BannerDto extends AuditedEntityDto<string> {
  no?: string;
  displayName?: string;
  description?: string;
  enable: boolean;
  bannerConfig: BannerConfigDto;
  bannerDefinitionId?: string;
}

export interface BannerGetListDto extends SearchResultRequestDto {
}

export interface BannerWithDetailsDto extends BannerDto {
  bannerDefinition: BannerDefinitionDto;
}

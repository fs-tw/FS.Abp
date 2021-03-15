import type { AuditedEntityDto, EntityDto } from '@abp/ng.core';
import type { SearchResultRequestDto } from '../../../abp/application/dtos/index'
export interface BannerCreateDto {
  no?: string;
  displayName?: string;
  description?: string;
  disable: boolean;
  fileName?: string;
  imageFileId?: string;
  sequence: number;
  bannerDefinitionId?: string;
}

export interface BannerDefinitionCreateDto {
  no?: string;
  displayName?: string;
  description?: string;
  disable: boolean;
}

export interface BannerDefinitionDto extends AuditedEntityDto<string> {
  no?: string;
  displayName?: string;
  description?: string;
  disable: boolean;
}

export interface BannerDefinitionGetListDto extends SearchResultRequestDto {
}

export interface BannerDefinitionPrimaryKeyDto extends EntityDto<string> {
}

export interface BannerDefinitionUpdateDto {
  no?: string;
  displayName?: string;
  description?: string;
  disable: boolean;
}

export interface BannerDefinitionWithDetailsDto extends BannerDefinitionDto {
  banners: BannerDto[];
}

export interface BannerDto extends AuditedEntityDto<string> {
  no?: string;
  displayName?: string;
  description?: string;
  disable: boolean;
  fileName?: string;
  imageFileId?: string;
  sequence: number;
  bannerDefinitionId?: string;
}

export interface BannerGetListDto extends SearchResultRequestDto {
}

export interface BannerPrimaryKeyDto extends EntityDto<string> {
}

export interface BannerUpdateDto {
  no?: string;
  displayName?: string;
  description?: string;
  disable: boolean;
  fileName?: string;
  imageFileId?: string;
  sequence: number;
  bannerDefinitionId?: string;
}

export interface BannerWithDetailsDto extends BannerDto {
  bannerDefinition: BannerDefinitionDto;
}

export interface MetaData {
  bannerDefinitionPrimaryKeyDto: BannerDefinitionPrimaryKeyDto;
  bannerDefinitionDto: BannerDefinitionDto;
  bannerDefinitionCreateDto: BannerDefinitionCreateDto;
  bannerDefinitionUpdateDto: BannerDefinitionUpdateDto;
  bannerDefinitionGetListDto: BannerDefinitionGetListDto;
  bannerDefinitionWithDetailsDto: BannerDefinitionWithDetailsDto;
  bannerPrimaryKeyDto: BannerPrimaryKeyDto;
  bannerDto: BannerDto;
  bannerCreateDto: BannerCreateDto;
  bannerUpdateDto: BannerUpdateDto;
  bannerGetListDto: BannerGetListDto;
  bannerWithDetailsDto: BannerWithDetailsDto;
}

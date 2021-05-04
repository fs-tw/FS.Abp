import type { AuditedEntityDto, EntityDto } from '@abp/ng.core';
import type { SearchResultRequestDto } from '../../../fs/abp/application/dtos/models';
import type { SocialType } from '../social-type.enum';

export interface MetaData {
  storePrimaryKeyDto: StorePrimaryKeyDto;
  storeDto: StoreDto;
  storeCreateDto: StoreCreateDto;
  storeUpdateDto: StoreUpdateDto;
  storeGetListDto: StoreGetListDto;
  storeWithDetailsDto: StoreWithDetailsDto;
  storeSocialAccountServicePrimaryKeyDto: StoreSocialAccountServicePrimaryKeyDto;
  storeSocialAccountServiceDto: StoreSocialAccountServiceDto;
  storeSocialAccountServiceCreateDto: StoreSocialAccountServiceCreateDto;
  storeSocialAccountServiceUpdateDto: StoreSocialAccountServiceUpdateDto;
  storeSocialAccountServiceGetListDto: StoreSocialAccountServiceGetListDto;
  storeSocialAccountServiceWithDetailsDto: StoreSocialAccountServiceWithDetailsDto;
}

export interface StoreCreateDto {
  no?: string;
  name?: string;
  address?: string;
}

export interface StoreDto extends AuditedEntityDto<string> {
  no?: string;
  name?: string;
  address?: string;
}

export interface StoreGetListDto extends SearchResultRequestDto {
}

export interface StorePrimaryKeyDto extends EntityDto<string> {
}

export interface StoreSocialAccountServiceCreateDto {
  socialType: SocialType;
  storeId?: string;
  socialAccountServiceId?: string;
  current: boolean;
}

export interface StoreSocialAccountServiceDto extends AuditedEntityDto<string> {
  socialType: SocialType;
  storeId?: string;
  socialAccountServiceId?: string;
  current: boolean;
}

export interface StoreSocialAccountServiceGetListDto extends SearchResultRequestDto {
}

export interface StoreSocialAccountServicePrimaryKeyDto extends EntityDto<string> {
}

export interface StoreSocialAccountServiceUpdateDto {
  socialType: SocialType;
  storeId?: string;
  socialAccountServiceId?: string;
  current: boolean;
}

export interface StoreSocialAccountServiceWithDetailsDto extends StoreSocialAccountServiceDto {
  store: StoreDto;
}

export interface StoreUpdateDto {
  no?: string;
  name?: string;
  address?: string;
}

export interface StoreWithDetailsDto extends StoreDto {
  storeSocialAccounts: StoreSocialAccountServiceDto[];
}

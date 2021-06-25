import type { EntityDto, ExtensibleAuditedEntityDto, ExtensibleObject } from '@abp/ng.core';
import type { SearchResultRequestDto } from '../../abp/application/dtos/models';

export interface CustomerCreateDto extends ExtensibleObject {
  phone?: string;
  email?: string;
  discriminator?: string;
}

export interface CustomerGetListDto extends SearchResultRequestDto {
  discriminator?: string;
}

export interface CustomerPrimaryKeyDto extends EntityDto<string> {
}

export interface CustomerUpdateDto extends ExtensibleObject {
  phone?: string;
  email?: string;
  discriminator?: string;
}

export interface CustomerDto extends ExtensibleAuditedEntityDto<string> {
  phone?: string;
  email?: string;
  discriminator?: string;
}

export interface CustomerWithDetailsDto extends CustomerDto {
}

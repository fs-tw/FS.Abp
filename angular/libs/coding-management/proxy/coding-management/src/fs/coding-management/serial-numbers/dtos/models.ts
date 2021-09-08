import type { ExtensibleAuditedEntityDto, ExtensibleObject, PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface SerialNumberCreateDto extends ExtensibleObject {
  providerName?: string;
  providerKey?: string;
  value: number;
}

export interface SerialNumberDto extends ExtensibleAuditedEntityDto<string> {
  providerName?: string;
  providerKey?: string;
  value: number;
}

export interface SerialNumberGetListDto extends PagedAndSortedResultRequestDto {
}

export interface SerialNumberUpdateDto extends ExtensibleObject {
  providerName?: string;
  providerKey?: string;
  value: number;
}

export interface SerialNumberWithDetailsDto extends SerialNumberDto {
}

import type { AuditedEntityDto } from '@abp/ng.core';
import type { SearchResultRequestDto } from '../../../abp/application/dtos/models';

export interface AreaDto extends AuditedEntityDto<string> {
  name?: string;
}

export interface AreaGetListDto extends SearchResultRequestDto {
}

export interface AreaWithDetailsDto extends AreaDto {
}

export interface CustomerDto extends AuditedEntityDto<string> {
  name?: string;
}

export interface CustomerGetListDto extends SearchResultRequestDto {
}

export interface CustomerWithDetailsDto extends CustomerDto {
}

import type { AuditedEntityDto, EntityDto } from '@abp/ng.core';
import type { SearchResultRequestDto } from '../../../abp/application/dtos/models';

export interface EmployeeCreateDto {
  name: string;
  no: string;
  jobTitle: string;
}

export interface EmployeeDto extends AuditedEntityDto<string> {
  name: string;
  no: string;
  jobTitle: string;
}

export interface EmployeeGetListDto extends SearchResultRequestDto {
}

export interface EmployeePrimaryKeyDto extends EntityDto<string> {
}

export interface EmployeeUpdateDto {
  name: string;
  no: string;
  jobTitle: string;
}

export interface EmployeeWithDetailsDto extends EmployeeDto {
}

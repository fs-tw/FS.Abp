import type { CustomerDiscriminator } from '../customer-discriminator.enum';
import type { GenderType } from '../../gender-type.enum';
import type { AuditedEntityDto, EntityDto } from '@abp/ng.core';
import type { SearchResultRequestDto } from '../../../abp/application/dtos/models';

export interface CustomerCreateDto {
  no: string;
  contactPerson: string;
  ageRange: string;
  jobTitle: string;
  phone: string;
  email: string;
  discriminator: CustomerDiscriminator;
  pipelineSource: string;
  gender: GenderType;
}

export interface CustomerDto extends AuditedEntityDto<string> {
  no: string;
  contactPerson: string;
  ageRange: string;
  jobTitle: string;
  phone: string;
  email: string;
  discriminator: CustomerDiscriminator;
  pipelineSource: string;
  gender: GenderType;
}

export interface CustomerGetListDto extends SearchResultRequestDto {
}

export interface CustomerPrimaryKeyDto extends EntityDto<string> {
}

export interface CustomerUpdateDto {
  no: string;
  contactPerson: string;
  ageRange: string;
  jobTitle: string;
  phone: string;
  email: string;
  discriminator: CustomerDiscriminator;
  pipelineSource: string;
  gender: GenderType;
}

export interface CustomerWithDetailsDto extends CustomerDto {
}

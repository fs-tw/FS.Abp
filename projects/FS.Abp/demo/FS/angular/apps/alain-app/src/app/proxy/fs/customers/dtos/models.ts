import type { CustomerDiscriminator } from '../customer-discriminator.enum';
import type { AuditedEntityDto, EntityDto } from '@abp/ng.core';
import type { SearchResultRequestDto } from '../../abp/application/dtos/models';

export interface CustomerCreateDto {
  phone?: string;
  email?: string;
  discriminator: CustomerDiscriminator;
}

export interface CustomerDto extends AuditedEntityDto<string> {
  phone?: string;
  email?: string;
  discriminator: CustomerDiscriminator;
}

export interface CustomerGetListDto extends SearchResultRequestDto {
  discriminator: CustomerDiscriminator;
}

export interface CustomerPrimaryKeyDto extends EntityDto<string> {
}

export interface CustomerUpdateDto {
  phone?: string;
  email?: string;
  discriminator: CustomerDiscriminator;
}

export interface CustomerWithDetailsDto extends CustomerDto {
}

export interface EnterpriseCreateDto extends CustomerCreateDto {
  companyName?: string;
  industry?: string;
  product?: string;
  address?: string;
  discriminator: CustomerDiscriminator;
}

export interface EnterpriseDto extends CustomerDto {
  companyName?: string;
  industry?: string;
  product?: string;
  address?: string;
  discriminator: CustomerDiscriminator;
}

export interface EnterpriseGetListDto extends CustomerGetListDto {
  discriminator: CustomerDiscriminator;
}

export interface EnterpriseUpdateDto extends CustomerUpdateDto {
  companyName?: string;
  industry?: string;
  product?: string;
  address?: string;
  discriminator: CustomerDiscriminator;
}

export interface EnterpriseWithDetailsDto extends CustomerWithDetailsDto {
  companyName?: string;
  industry?: string;
  product?: string;
  address?: string;
  discriminator: CustomerDiscriminator;
}

export interface MetaData {
  customerPrimaryKeyDto: CustomerPrimaryKeyDto;
  customerDto: CustomerDto;
  customerCreateDto: CustomerCreateDto;
  customerUpdateDto: CustomerUpdateDto;
  customerGetListDto: CustomerGetListDto;
  customerWithDetailsDto: CustomerWithDetailsDto;
  enterpriseDto: EnterpriseDto;
  enterpriseCreateDto: EnterpriseCreateDto;
  enterpriseUpdateDto: EnterpriseUpdateDto;
  enterpriseGetListDto: EnterpriseGetListDto;
  enterpriseWithDetailsDto: EnterpriseWithDetailsDto;
  personDto: PersonDto;
  personCreateDto: PersonCreateDto;
  personUpdateDto: PersonUpdateDto;
  personGetListDto: PersonGetListDto;
  personWithDetailsDto: PersonWithDetailsDto;
}

export interface PersonCreateDto extends CustomerCreateDto {
  name?: string;
  discriminator: CustomerDiscriminator;
}

export interface PersonDto extends CustomerDto {
  name?: string;
  discriminator: CustomerDiscriminator;
}

export interface PersonGetListDto extends CustomerGetListDto {
  discriminator: CustomerDiscriminator;
}

export interface PersonUpdateDto extends CustomerUpdateDto {
  name?: string;
  discriminator: CustomerDiscriminator;
}

export interface PersonWithDetailsDto extends CustomerWithDetailsDto {
  name?: string;
  discriminator: CustomerDiscriminator;
}

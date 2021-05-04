import type { AnswerDto, CreateAnswerDto } from '../answers/models';
import type { EntityDto, FullAuditedEntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';
import type { FormDto } from '../forms/models';

export interface CreateResponseDto {
  email?: string;
  answers: CreateAnswerDto[];
}

export interface FormResponseDto extends FullAuditedEntityDto<string> {
  userId?: string;
  formId?: string;
  email?: string;
  answers: string[];
}

export interface FormWithResponseDto {
  form: FormDto;
  response: FormResponseDto;
}

export interface GetUserFormListInputDto extends PagedAndSortedResultRequestDto {
  filter?: string;
}

export interface UpdateResponseDto extends EntityDto<string> {
  formId?: string;
  email?: string;
  answers: AnswerDto[];
}

export interface FormResponseDetailedDto extends FullAuditedEntityDto<string> {
  userId?: string;
  formId?: string;
  email?: string;
  answers: AnswerDto[];
}

export interface GetResponseListInputDto extends PagedAndSortedResultRequestDto {
  filter?: string;
}

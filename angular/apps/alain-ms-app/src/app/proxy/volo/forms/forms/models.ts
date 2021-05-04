import type { FullAuditedEntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';
import type { QuestionDto } from '../questions/models';

export interface CreateFormDto {
  title: string;
  description?: string;
}

export interface FormDto extends FullAuditedEntityDto<string> {
  title?: string;
  description?: string;
  tenantId?: string;
  canEditResponse: boolean;
  isCollectingEmail: boolean;
  requiresLogin: boolean;
  hasLimitOneResponsePerUser: boolean;
  isAcceptingResponses: boolean;
  isQuiz: boolean;
}

export interface FormInviteEmailInputDto {
  to?: string;
  subject?: string;
  body?: string;
}

export interface FormSettingsDto {
  canEditResponse: boolean;
  isCollectingEmail: boolean;
  hasLimitOneResponsePerUser: boolean;
  isAcceptingResponses: boolean;
  isQuiz: boolean;
  requiresLogin: boolean;
}

export interface FormWithDetailsDto extends FullAuditedEntityDto<string> {
  title?: string;
  description?: string;
  tenantId?: string;
  canEditResponse: boolean;
  isCollectingEmail: boolean;
  hasLimitOneResponsePerUser: boolean;
  isAcceptingResponses: boolean;
  isQuiz: boolean;
  requiresLogin: boolean;
  questions: QuestionDto[];
}

export interface GetFormListInputDto extends PagedAndSortedResultRequestDto {
  filter?: string;
}

export interface UpdateFormDto {
  title: string;
  description?: string;
}

export interface UpdateFormSettingInputDto {
  canEditResponse: boolean;
  isCollectingEmail: boolean;
  hasLimitOneResponsePerUser: boolean;
  isAcceptingResponses: boolean;
  isQuiz: boolean;
  requiresLogin: boolean;
}

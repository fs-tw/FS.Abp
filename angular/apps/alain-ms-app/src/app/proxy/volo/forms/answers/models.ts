import type { EntityDto } from '@abp/ng.core';

export interface AnswerDto extends EntityDto<string> {
  questionId?: string;
  choiceId?: string;
  formResponseId?: string;
  answerDate?: string;
  value?: string;
}

export interface CreateAnswerDto {
  questionId?: string;
  choiceId?: string;
  value?: string;
}

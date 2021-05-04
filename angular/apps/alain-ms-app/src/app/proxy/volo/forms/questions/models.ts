import type { FullAuditedEntityDto } from '@abp/ng.core';
import type { QuestionTypes } from '../question-types.enum';
import type { ChoiceDto } from '../choices/models';
import type { AnswerDto } from '../answers/models';

export interface GetQuestionListDto {
}

export interface QuestionDto extends FullAuditedEntityDto<string> {
  formId?: string;
  index: number;
  title?: string;
  description?: string;
  isRequired: boolean;
  hasOtherOption: boolean;
  questionType: QuestionTypes;
  choices: ChoiceDto[];
}

export interface UpdateQuestionDto {
  index: number;
  title: string;
  description?: string;
  isRequired: boolean;
  hasOtherOption: boolean;
  questionType: QuestionTypes;
  choices: ChoiceDto[];
}

export interface CreateQuestionDto {
  index: number;
  title: string;
  description?: string;
  isRequired: boolean;
  hasOtherOption: boolean;
  questionType: QuestionTypes;
  choices: ChoiceDto[];
}

export interface QuestionWithAnswersDto extends FullAuditedEntityDto<string> {
  formId?: string;
  index: number;
  title?: string;
  description?: string;
  isRequired: boolean;
  hasOtherOption: boolean;
  questionType: QuestionTypes;
  choices: ChoiceDto[];
  answers: AnswerDto[];
}

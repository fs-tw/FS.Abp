import type { EntityDto } from '@abp/ng.core';

export interface ChoiceDto extends EntityDto<string> {
  index: number;
  isCorrect: boolean;
  value?: string;
}

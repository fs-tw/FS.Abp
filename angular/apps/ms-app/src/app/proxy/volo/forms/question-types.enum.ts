import { mapEnumToOptions } from '@abp/ng.core';

export enum QuestionTypes {
  ShortText = 1,
  ParagraphText = 2,
  ChoiceMultiple = 3,
  Checkbox = 4,
  DropdownList = 5,
  Scale = 6,
  ChoiceGrid = 7,
  CheckboxGrid = 8,
}

export const questionTypesOptions = mapEnumToOptions(QuestionTypes);

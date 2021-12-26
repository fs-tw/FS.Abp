import { mapEnumToOptions } from '@abp/ng.core';

export enum Sorting {
  Ascending = 0,
  Descending = 1,
}

export const sortingOptions = mapEnumToOptions(Sorting);

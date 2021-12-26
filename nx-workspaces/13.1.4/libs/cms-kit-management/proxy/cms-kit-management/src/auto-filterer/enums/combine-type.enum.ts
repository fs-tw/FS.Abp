import { mapEnumToOptions } from '@abp/ng.core';

export enum CombineType {
  And = 0,
  Or = 1,
}

export const combineTypeOptions = mapEnumToOptions(CombineType);

import { mapEnumToOptions } from '@abp/ng.core';

export enum RepeatType {
  不重複 = 0,
  每日 = 1,
  每周 = 2,
  每月 = 3,
}

export const repeatTypeOptions = mapEnumToOptions(RepeatType);

import { mapEnumToOptions } from '@abp/ng.core';

export enum GenderType {
  男 = 0,
  女 = 1,
  不公開 = 3,
}

export const genderTypeOptions = mapEnumToOptions(GenderType);

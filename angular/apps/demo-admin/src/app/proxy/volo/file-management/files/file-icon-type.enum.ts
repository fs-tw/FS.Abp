import { mapEnumToOptions } from '@abp/ng.core';

export enum FileIconType {
  FontAwesome = 0,
  Url = 1,
}

export const fileIconTypeOptions = mapEnumToOptions(FileIconType);

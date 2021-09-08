import { mapEnumToOptions } from '@abp/ng.core';

export enum UrlType {
  內部連結 = 0,
  外部連結 = 1,
}

export const urlTypeOptions = mapEnumToOptions(UrlType);

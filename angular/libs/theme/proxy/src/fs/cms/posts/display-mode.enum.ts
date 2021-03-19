import { mapEnumToOptions } from '@abp/ng.core';

export enum DisplayMode {
  內文 = 0,
  連結 = 1,
}

export const displayModeOptions = mapEnumToOptions(DisplayMode);

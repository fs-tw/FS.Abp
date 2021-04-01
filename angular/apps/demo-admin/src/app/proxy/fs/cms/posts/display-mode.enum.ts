import { mapEnumToOptions } from '@abp/ng.core';

export enum DisplayMode {
  Content = 0,
  Link = 1,
}

export const displayModeOptions = mapEnumToOptions(DisplayMode);

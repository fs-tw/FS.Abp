import { mapEnumToOptions } from '@abp/ng.core';

export enum DisplayMode {
  Content = 0,
  Link = 1,
  HtmlRaw = 2,
}

export const displayModeOptions = mapEnumToOptions(DisplayMode);

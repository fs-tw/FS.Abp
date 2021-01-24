import { mapEnumToOptions } from '@abp/ng.core';

export enum TheProjectSkin {
  blue = 0,
  brown = 1,
  cool_green = 2,
  dark_cyan = 3,
  dark_red = 4,
  gold = 5,
  gray = 6,
  green = 7,
  light_blue = 8,
  orange = 9,
  pink = 10,
  purple = 11,
  red = 12,
  vivid_red = 13,
}

export const theProjectSkinOptions = mapEnumToOptions(TheProjectSkin);

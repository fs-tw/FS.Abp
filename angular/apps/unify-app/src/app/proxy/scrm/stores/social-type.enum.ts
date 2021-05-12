import { mapEnumToOptions } from '@abp/ng.core';

export enum SocialType {
  Line = 0,
  FaceBook = 1,
  Telegram = 2,
  GoogleMyBusiness = 3,
  WhatApp = 4,
  Instagram = 5,
  WeChat = 6,
}

export const socialTypeOptions = mapEnumToOptions(SocialType);

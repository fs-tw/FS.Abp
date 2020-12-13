import { mapEnumToOptions } from '@abp/ng.core';

export enum ProfilePictureType {
  None = 0,
  Gravatar = 1,
  Image = 2,
}

export const profilePictureTypeOptions = mapEnumToOptions(ProfilePictureType);

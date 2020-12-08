import { mapEnumToOptions } from '@abp/ng.core';

export enum eTwoFactorBehaviour {
  Optional = 0,
  Disabled = 1,
  Forced = 2,
}

export const twoFactorBehaviourOptions = mapEnumToOptions(eTwoFactorBehaviour);

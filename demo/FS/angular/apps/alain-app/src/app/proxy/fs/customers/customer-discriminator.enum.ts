import { mapEnumToOptions } from '@abp/ng.core';

export enum CustomerDiscriminator {
  Personal = 1,
  Enterprise = 2,
}

export const customerDiscriminatorOptions = mapEnumToOptions(CustomerDiscriminator);

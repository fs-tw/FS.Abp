import { mapEnumToOptions } from '@abp/ng.core';

export enum CustomerDiscriminator {
  客戶 = 0,
  個人 = 1,
  企業 = 2,
}

export const customerDiscriminatorOptions = mapEnumToOptions(CustomerDiscriminator);

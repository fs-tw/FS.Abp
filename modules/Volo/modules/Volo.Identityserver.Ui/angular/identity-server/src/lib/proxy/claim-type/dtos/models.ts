import type { ExtensibleEntityDto } from '@abp/ng.core';

export interface IdentityClaimTypeDto extends ExtensibleEntityDto<string> {
  name: string;
}

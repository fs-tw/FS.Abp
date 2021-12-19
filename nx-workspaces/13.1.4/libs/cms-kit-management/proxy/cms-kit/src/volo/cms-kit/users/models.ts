import type { EntityDto } from '@abp/ng.core';

export interface CmsUserDto extends EntityDto<string> {
  tenantId?: string;
  userName?: string;
  name?: string;
  surname?: string;
}

import type { EntityDto } from '@abp/ng.core';

export interface TagDto extends EntityDto<string> {
  entityType?: string;
  name?: string;
}

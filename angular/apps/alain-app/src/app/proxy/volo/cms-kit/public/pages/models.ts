import type { EntityDto } from '@abp/ng.core';

export interface PageDto extends EntityDto<string> {
  title?: string;
  slug?: string;
  content?: string;
  script?: string;
  style?: string;
}

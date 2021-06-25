import type { EntityDto } from '@abp/ng.core';

export interface MediaDescriptorDto extends EntityDto<string> {
    name?: string;
    mimeType?: string;
    size: number;
  }
  
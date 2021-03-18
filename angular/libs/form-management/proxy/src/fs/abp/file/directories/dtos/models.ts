import type { AuditedEntityDto } from '@abp/ng.core';

export interface DirectoryDescriptorDto extends AuditedEntityDto<string> {
  name?: string;
  parentId?: string;
  parent: DirectoryDescriptorDto;
}

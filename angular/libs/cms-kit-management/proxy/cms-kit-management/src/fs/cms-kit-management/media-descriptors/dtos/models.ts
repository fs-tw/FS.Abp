import type { ExtensibleAuditedEntityDto } from '@abp/ng.core';
import type { SearchResultRequestDto } from '../../../abp/application/dtos/models';

export interface AttachmentMediaDto extends ExtensibleAuditedEntityDto<string> {
  entityType?: string;
  entityId?: string;
  mediaDescriptorId?: string;
}

export interface AttachmentMediaGetListDto extends SearchResultRequestDto {
}

export interface AttachmentMediaWithDetailsDto extends AttachmentMediaDto {
}

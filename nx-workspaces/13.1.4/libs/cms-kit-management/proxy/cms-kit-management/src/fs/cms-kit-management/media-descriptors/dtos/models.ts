import type { ExtensibleAuditedEntityDto, ExtensibleObject, PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface AttachmentMediaCreateDto extends ExtensibleObject {
  entityType?: string;
  entityId?: string;
  mediaDescriptorId?: string;
}

export interface AttachmentMediaDto extends ExtensibleAuditedEntityDto<string> {
  entityType?: string;
  entityId?: string;
  mediaDescriptorId?: string;
}

export interface AttachmentMediaGetListDto extends PagedAndSortedResultRequestDto {
}

export interface AttachmentMediaUpdateDto extends ExtensibleObject {
  entityType?: string;
  entityId?: string;
  mediaDescriptorId?: string;
}

export interface AttachmentMediaWithDetailsDto extends AttachmentMediaDto {
}

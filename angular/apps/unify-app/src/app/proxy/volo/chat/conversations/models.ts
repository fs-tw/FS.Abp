import type { PagedResultRequestDto } from '@abp/ng.core';

export interface GetConversationInput extends PagedResultRequestDto {
  targetUserId?: string;
}

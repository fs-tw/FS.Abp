

import { PagedResultRequestDto } from '@abp/ng.core';

export class GetConversationInput extends PagedResultRequestDto {
  targetUserId: string;
  skipCount: number;
  maxResultCount: number;

  constructor(initialValues: Partial<GetConversationInput> = {}) {
    super(initialValues);
  }
}

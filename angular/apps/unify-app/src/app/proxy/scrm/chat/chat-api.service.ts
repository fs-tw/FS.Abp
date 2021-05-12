import type { ChatConversationWithDetailDto } from './dtos/models';
import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { GetConversationInput } from '../../volo/chat/conversations/models';

@Injectable({
  providedIn: 'root',
})
export class ChatApiService {
  apiName = 'Default';

  conversationsByInput = (input: GetConversationInput) =>
    this.restService.request<any, ChatConversationWithDetailDto>({
      method: 'POST',
      url: `/api/chat/conversations`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}

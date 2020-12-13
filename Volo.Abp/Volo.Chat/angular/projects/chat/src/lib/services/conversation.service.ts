import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SendMessageInput } from '../models/send-message-input';
import { GetConversationInput } from '../models/get-conversation-input';
import { MarkConversationAsReadInput } from '../models/mark-conversation-as-read-input';
import { ChatConversationDto } from '../models/chat-conversation-dto';

@Injectable({ providedIn: 'root' })
export class ConversationService {
  apiName = 'Chat';

  constructor(private restService: RestService) {}

  sendMessageByInput(body: SendMessageInput): Observable<void> {
    return this.restService.request(
      { url: '/api/chat/conversation/send-message', method: 'POST', body },
      { apiName: this.apiName }
    );
  }
  getConversationByInput(params = {} as GetConversationInput): Observable<ChatConversationDto> {
    return this.restService.request(
      { url: '/api/chat/conversation/conversation', method: 'GET', params },
      { apiName: this.apiName }
    );
  }
  markConversationAsReadByInput(body: MarkConversationAsReadInput): Observable<void> {
    return this.restService.request(
      { url: '/api/chat/conversation/mark-conversation-as-read', method: 'POST', body },
      { apiName: this.apiName }
    );
  }
}

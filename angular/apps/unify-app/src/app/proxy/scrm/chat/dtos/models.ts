import type { ChatTargetUserInfo } from '../../../volo/chat/users/models';
import type { ChatMessageDto } from '../../../volo/chat/messages/models';

export interface ChatConversationWithDetailDto {
  messages: ChatMessageDtoWithDetail[];
  targetUserInfo: ChatTargetUserInfo;
}

export interface ChatMessageDtoWithDetail extends ChatMessageDto {
}

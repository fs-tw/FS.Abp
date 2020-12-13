import { ChatTargetUserInfo } from './chat-target-user-info';
import { ChatMessageDto } from './chat-message-dto';
export class ChatConversationDto {
  messages: ChatMessageDto[];
  targetUserInfo: ChatTargetUserInfo;

  constructor(initialValues: Partial<ChatConversationDto> = {}) {
    if (initialValues) {
      for (const key in initialValues) {
        if (initialValues.hasOwnProperty(key)) {
          this[key] = initialValues[key];
        }
      }
    }
  }
}

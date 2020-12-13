import { ChatMessageSide } from '../enums/chat-message-side';

export class ChatMessageDto {
  message: string;
  messageDate: Date | string;
  isRead: boolean;
  readDate: Date | string;
  side: ChatMessageSide;

  constructor(initialValues: Partial<ChatMessageDto> = {}) {
    if (initialValues) {
      for (const key in initialValues) {
        if (initialValues.hasOwnProperty(key)) {
          this[key] = initialValues[key];
        }
      }
    }
  }
}

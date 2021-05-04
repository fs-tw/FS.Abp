import type { ChatMessageSide } from './chat-message-side.enum';

export interface ChatMessageDto {
  message?: string;
  messageDate?: string;
  isRead: boolean;
  readDate?: string;
  side: ChatMessageSide;
}

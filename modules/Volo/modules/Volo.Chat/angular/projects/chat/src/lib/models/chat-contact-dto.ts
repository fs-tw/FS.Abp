export class ChatContactDto {
  userId: string;
  name: string;
  surname: string;
  username: string;
  lastMessageSide: number;
  lastMessage: string;
  lastMessageDate: Date | string;
  unreadMessageCount: number;

  constructor(initialValues: Partial<ChatContactDto> = {}) {
    if (initialValues) {
      for (const key in initialValues) {
        if (initialValues.hasOwnProperty(key)) {
          this[key] = initialValues[key];
        }
      }
    }
  }
}

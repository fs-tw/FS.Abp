
export class SendMessageInput  {
  targetUserId: string;
  message: string;

  constructor(initialValues: Partial<SendMessageInput> = {}) {
    if (initialValues) {
      for (const key in initialValues) {
        if (initialValues.hasOwnProperty(key)) {
          this[key] = initialValues[key];
        }
      }
    }
  }
}

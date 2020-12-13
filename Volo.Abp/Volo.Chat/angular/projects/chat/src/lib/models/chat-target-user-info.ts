
export class ChatTargetUserInfo  {
  userId: string;
  name: string;
  surname: string;
  username: string;

  constructor(initialValues: Partial<ChatTargetUserInfo> = {}) {
    if (initialValues) {
      for (const key in initialValues) {
        if (initialValues.hasOwnProperty(key)) {
          this[key] = initialValues[key];
        }
      }
    }
  }
}


export class SendOnEnterSettingDto  {
  sendOnEnter: boolean;

  constructor(initialValues: Partial<SendOnEnterSettingDto> = {}) {
    if (initialValues) {
      for (const key in initialValues) {
        if (initialValues.hasOwnProperty(key)) {
          this[key] = initialValues[key];
        }
      }
    }
  }
}

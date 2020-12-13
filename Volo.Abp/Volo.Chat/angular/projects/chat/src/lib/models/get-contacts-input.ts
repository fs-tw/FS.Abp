export class GetContactsInput {
  filter?: string;
  includeOtherContacts?: boolean;

  constructor(initialValues: Partial<GetContactsInput> = {}) {
    if (initialValues) {
      for (const key in initialValues) {
        if (initialValues.hasOwnProperty(key)) {
          this[key] = initialValues[key];
        }
      }
    }
  }
}

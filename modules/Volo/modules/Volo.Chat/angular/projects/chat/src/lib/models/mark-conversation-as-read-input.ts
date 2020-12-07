
export class MarkConversationAsReadInput  {
  targetUserId: string;

  constructor(initialValues: Partial<MarkConversationAsReadInput> = {}) {
    if (initialValues) {
      for (const key in initialValues) {
        if (initialValues.hasOwnProperty(key)) {
          this[key] = initialValues[key];
        }
      }
    }
  }
}

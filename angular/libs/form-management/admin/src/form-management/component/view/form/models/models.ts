import { Volo } from '@fs-tw/form-management/proxy';

export namespace FormModel {
  export interface State {
    Form: FormInfo,
    Questions: Array<QuestionInfo>,
    Choices: Array<ChoiceInfo>,
    QuestionType: Array<QuestionTypeInfo>
  }

  export class FormInfo {
    id: string;
    title: string;
    description: string;
    tenantId?: string;
    canEditResponse: boolean;
    isCollectingEmail: boolean;
    hasLimitOneResponsePerUser: boolean;
    isAcceptingResponses: boolean;
    isQuiz: boolean;
    requiresLogin: boolean;
    questions?: Array<QuestionInfo>;

    constructor(initialValues: Partial<Volo.Forms.Forms.FormDto>, questions?: Array<Volo.Forms.Questions.QuestionDto>) {
      this.id = initialValues.id;
      this.title = initialValues.title;
      this.description = initialValues.description;
      this.tenantId = initialValues.tenantId;
      this.canEditResponse = initialValues.canEditResponse;
      this.isCollectingEmail = initialValues.isCollectingEmail;
      this.hasLimitOneResponsePerUser = initialValues.hasLimitOneResponsePerUser;
      this.isAcceptingResponses = initialValues.isAcceptingResponses;
      this.isQuiz = initialValues.isQuiz;
      this.requiresLogin = initialValues.requiresLogin;
      this.questions = questions.map(x => new QuestionInfo(x));
    }
  }

  export class QuestionInfo {
    formId: string;
    id: string;
    index: number;
    title: string;
    description: string;
    isRequired: boolean;
    hasOtherOption: boolean;
    questionType: QuestionTypeInfo;
    choices: Array<ChoiceInfo>;

    constructor(initialValues: Partial<Volo.Forms.Questions.QuestionDto>) {
      this.formId = initialValues.formId;
      this.id = initialValues.id;
      this.index = initialValues.index;
      this.title = initialValues.title;
      this.description = initialValues.description;
      this.isRequired = initialValues.isRequired;
      this.hasOtherOption = initialValues.hasOtherOption;
      this.questionType = new QuestionTypeInfo(initialValues.formId, initialValues.id, initialValues.questionType);
      this.choices = initialValues.choices.map(x => new ChoiceInfo(initialValues.formId, initialValues.id, x));
    }
  }

  export class ChoiceInfo {
    formId: string;
    questionId: string;
    id: string;
    index: number;
    isCorrect: boolean;
    value: string;

    constructor(formId: string, questionId: string, choice: Volo.Forms.Choices.ChoiceDto) {
      this.formId = formId;
      this.questionId = questionId;
      this.id = choice.id;
      this.index = choice.index;
      this.isCorrect = choice.isCorrect;
      this.value = choice.value;
    }
  }

  export class QuestionTypeInfo {
    formId: string;
    questionId: string;
    questionType: QuestionTypes;

    constructor(formId: string, questionId: string, questionType: Volo.Forms.QuestionTypes) {
      this.formId = formId;
      this.questionId = questionId;
      this.questionType = questionType;
    }
  }

  export enum QuestionTypes {
    ShortText = 1,
    ParagraphText = 2,
    ChoiceMultiple = 3,
    Checkbox = 4,
    DropdownList = 5,
    Scale = 6,
    ChoiceGrid = 7,
    CheckboxGrid = 8,
  }
}
  
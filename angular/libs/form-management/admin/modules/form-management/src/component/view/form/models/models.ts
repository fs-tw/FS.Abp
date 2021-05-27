import { EmbeddedTemplateAst } from '@angular/compiler';
import { Volo } from '@fs-tw/form-management/proxy';

export namespace FormModel {
  export interface State {
    Forms: Array<FormInfo>,
    Questions: Array<QuestionInfo>,
    Choices: Array<ChoiceInfo>
  }

  export class FormInfo implements Volo.Forms.Forms.FormWithDetailsDto {
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
    questions: Array<QuestionInfo>;

    constructor(initialValues: Volo.Forms.Forms.FormDto | Volo.Forms.Forms.FormWithDetailsDto, questions: Array<Volo.Forms.Questions.QuestionDto> = []) {
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

  export class QuestionInfo implements Volo.Forms.Questions.QuestionDto {
    id: string;
    index: number;
    title: string;
    description: string;
    isRequired: boolean;
    hasOtherOption: boolean;
    questionType: QuestionTypes;
    choices: Array<ChoiceInfo>;

    constructor(initialValues: Volo.Forms.Questions.QuestionDto) {
      this.id = initialValues.id;
      this.index = initialValues.index;
      this.title = initialValues.title;
      this.description = initialValues.description;
      this.isRequired = initialValues.isRequired;
      this.hasOtherOption = initialValues.hasOtherOption;
      this.questionType = initialValues.questionType;
      this.choices = initialValues.choices ? initialValues.choices.map(x => new ChoiceInfo(initialValues.id, x)) : [];
    }
  }

  export class ChoiceInfo implements Volo.Forms.Choices.ChoiceDto {
    questionId: string;
    id: string;
    index: number;
    isCorrect: boolean;
    value: string;

    constructor(questionId: string, choice: Volo.Forms.Choices.ChoiceDto) {
      this.questionId = questionId;
      this.id = choice.id;
      this.index = choice.index;
      this.isCorrect = choice.isCorrect;
      this.value = choice.value;
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
  
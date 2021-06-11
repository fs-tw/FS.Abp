import { Component, EventEmitter, Injector, Input, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import * as _ from 'lodash';
import { Volo } from '@fs-tw/form-management/proxy';

class ResponseFormControlInfo {
  questionType: Volo.Forms.QuestionTypes;
  isRequired: boolean;
  [key: string]: any;
}

@Component({
  selector: 'fs-preview',
  templateUrl: 'preview.component.html',
})
export class PreviewComponent implements OnInit {
  @Input() onlyView: boolean = false;
  @Input() isSubmitAnswer: boolean = false;
  @Input() formId: string = null;
  @Input() response: Volo.Forms.Responses.FormResponseDetailedDto = null;
  formDetail: Volo.Forms.Forms.FormWithDetailsDto = null;
  formGroup: FormGroup = this.fb.group({});
  subscription: Subscription = new Subscription();

  @Output()
  submitOtherResponseEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  submitResponseEvent: EventEmitter<Volo.Forms.Responses.CreateResponseDto | Volo.Forms.Responses.UpdateResponseDto>
    = new EventEmitter<Volo.Forms.Responses.CreateResponseDto | Volo.Forms.Responses.UpdateResponseDto>();

  private formService: Volo.Forms.Forms.FormService = null;
  constructor(
    private fb: FormBuilder,
    private injector: Injector
  ) {
    this.formService = this.injector.get(Volo.Forms.Forms.FormService);
  }

  ngOnInit() {}

  ngOnChanges() {
    if (!this.formId || this.isSubmitAnswer) return null;
    this.loadFormData();
  }

  loadFormData() {
    this.subscription.add(
      this.formService.getById(this.formId).subscribe((x) => {
        this.formDetail = x;
        this.buildForm();
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  buildForm() {
    const { required, choiceValidator } = PreviewValidators;
    this.formGroup = this.fb.group({
      questions: this.fb.array(
        this.formDetail.questions.map((x, i) => {
          return this.fb.group(this.mapperRespones(required, choiceValidator, x));
        })
      )
    });
  }

  mapperRespones(required, choiceValidator, data: Volo.Forms.Questions.QuestionDto): ResponseFormControlInfo {
    let result = { questionType: data.questionType, isRequired: data.isRequired } as ResponseFormControlInfo;
    switch(data.questionType) {
      case 4:
        result.choices = this.fb.array(
          data.choices.map((x) => {
            let findAnswer = (this.response)
              ? this.response.answers.find((y) => y.questionId == data.id && y.choiceId == x.id)
              : null;
            return this.fb.group({
              questionId: data.id,
              choiceId: x.id,
              isChecked: findAnswer
                ? true : false,
              value: [x.value, undefined],
              formResponseId: findAnswer ? findAnswer.formResponseId : null
            })
          }),
          data.isRequired ? [choiceValidator] : undefined
        );
        break;
      default:
        let findAnswer = (this.response) ? this.response.answers.find((x) => x.questionId == data.id) : null;
        let resValue = findAnswer
          ? data.questionType == 3 || data.questionType == 5
            ? findAnswer.choiceId
            : findAnswer.value
          : null;
        result.questionId = data.id;
        result.value = [{ value: resValue, disabled: this.onlyView }, data.isRequired ? [required] : undefined];
        result.formResponseId = findAnswer ? findAnswer.formResponseId : null;
        break;
    };
    return result;
  }

  submitForm(data): void {
    let answers = _.flatten(
      data.questions.map((x) => {
        switch (x.questionType) {
          case 4:
            return x.choices
            .filter((y) => y.isChecked == true)
            .map((y) => {
              return y;
            });
            break;
          case 3:
          case 5:
            return {
              ...x,
              choiceId: x.value,
              value: x.value
                ? this.formDetail.questions
                    .find((y) => y.id == x.questionId)
                    .choices.find((y) => y.id == x.value).value
                : x.value,
            };
            break;
          default:
            return x;
            break;
        }
      })
    );
    if(answers.filter(x => x.formResponseId).length > 0) {
      let result = {
        formId: this.formId,
        email: null,
        answers: answers as Array<Volo.Forms.Answers.AnswerDto>,
      } as Volo.Forms.Responses.UpdateResponseDto;
      this.submitResponseEvent.emit(result);
    } else {
      let result = {
        email: null,
        answers: answers as Array<Volo.Forms.Answers.CreateAnswerDto>,
      } as Volo.Forms.Responses.CreateResponseDto;
      this.submitResponseEvent.emit(result);
    }
  }
}

export class PreviewValidators extends Validators {
  static choiceValidator(control: AbstractControl) {
    let result =
      control.value.filter((x) => x.value != null && x.value != false).length > 0;
    return result ? null : { choiceValidator: false };
  }
}

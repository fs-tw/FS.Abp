import { Component, Injector, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import * as _ from 'lodash';
import { Volo } from '@fs-tw/form-management/proxy';
import { ToasterService } from '@abp/ng.theme.shared';

@Component({
  selector: 'fs-preview',
  templateUrl: 'preview.component.html',
})
export class PreviewComponent implements OnInit {
  @Input() formId: string = null;
  formGroup: FormGroup = this.fb.group({});
  subscription: Subscription = new Subscription();
  formDetail: Volo.Forms.Forms.FormWithDetailsDto = null;
  isSubmitAnswer: boolean = false;

  private formService: Volo.Forms.Forms.FormService = null;
  private responseService: Volo.Forms.Responses.ResponseService = null;

  constructor(
    private fb: FormBuilder,
    private toasterService: ToasterService,
    private injector: Injector
  ) {
    this.formService = this.injector.get(Volo.Forms.Forms.FormService);
    this.responseService = this.injector.get(
      Volo.Forms.Responses.ResponseService
    );
  }

  ngOnInit() {}

  ngOnChanges() {
    if (!this.formId) return null;
    this.loadFormData();
  }

  loadFormData() {
    this.isSubmitAnswer = false;
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
    let questionsControls = this.fb.array(
      this.formDetail.questions.map((x, i) => {
        let result = { questionType: x.questionType };
        if (x.questionType == 4) {
          result['choices'] = this.fb.array(
            x.choices.map((y) =>
              this.fb.group({
                questionId: x.id,
                choiceId: y.id,
                isChecked: false,
                value: y.value,
              })
            ),
            x.isRequired ? [choiceValidator] : undefined
          );
        } else {
          result['questionId'] = x.id;
          result['value'] = [null, x.isRequired ? [required] : undefined];
        }
        return this.fb.group(result);
      })
    );
    this.formGroup = this.fb.group({
      questions: questionsControls,
    });
  }

  submitForm(data): void {
    let answers = _.flatten(
      data.questions.map((x) => {
        if (x.questionType == 4) {
          return x.choices
            .filter((y) => y.isChecked == true)
            .map((y) => {
              return y;
            });
        } else if (x.questionType == 3 || x.questionType == 5) {
          return {
            ...x,
            choiceId: x.value,
            value: x.value
              ? this.formDetail.questions
                  .find((y) => y.id == x.questionId)
                  .choices.find((y) => y.id == x.value).value
              : x.value,
          };
        } else {
          return x;
        }
      })
    );
    let input = {
      email: null,
      answers: answers as Array<Volo.Forms.Answers.CreateAnswerDto>,
    } as Volo.Forms.Responses.CreateResponseDto;
    this.responseService
      .saveAnswersByFormIdAndInput(this.formId, input)
      .subscribe(
        (x) => {
          this.toasterService.success('Forms::Submit');
          this.isSubmitAnswer = true;
        },
        (error) => this.toasterService.error('Forms::Error')
      );
  }
}

export class PreviewValidators extends Validators {
  static choiceValidator(control: AbstractControl) {
    let result =
      control.value.filter((x) => x.value != null && x.value != false).length >
      0;
    return result ? null : { choiceValidator: false };
  }
}

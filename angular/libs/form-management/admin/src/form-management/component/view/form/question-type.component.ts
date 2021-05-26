import { Component, Input, OnInit } from '@angular/core';
import { Volo } from '@fs-tw/form-management/proxy';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FormStateService } from './providers/form-state.service';
import { FormModel } from './models/models';

@Component({
  selector: 'fs-tw-question-type',
  template: `
    <form [formGroup]="formGroup" validateOnSubmit>
        <div class="form-group">
            <label [for]="'questionType'">類型</label>
            <nz-select style="width: 100%;" [nzSize]="'large'" [formControlName]="'questionType'" [id]="'questionType'" nzShowSearch>
              <nz-option style="word-wrap: break-word;" nzLabel="{{ shortText | abpLocalization }}" [nzValue]="1"></nz-option>
              <nz-option style="word-wrap: break-word;" nzLabel="{{ paragraphText | abpLocalization }}" [nzValue]="2"></nz-option>
              <nz-option style="word-wrap: break-word;" nzLabel="{{ choiceMultiple | abpLocalization }}" [nzValue]="3"></nz-option>
              <nz-option style="word-wrap: break-word;" nzLabel="{{ checkbox | abpLocalization }}" [nzValue]="4"></nz-option>
              <nz-option style="word-wrap: break-word;" nzLabel="{{ dropdownList | abpLocalization }}" [nzValue]="5"></nz-option>
            </nz-select>
        </div>
    </form>
  `,
})
export class QuestionTypeComponent implements OnInit {
  readonly shortText: string = "Forms::QuestionType:ShortText";
  readonly paragraphText: string = "Forms::QuestionType:ParagraphText";
  readonly choiceMultiple: string = "Forms::QuestionType:ChoiceMultiple";
  readonly checkbox: string = "Forms::QuestionType:Checkbox";
  readonly dropdownList: string = "Forms::QuestionType:DropdownList";

  @Input() questionId: string = null;

  formGroup: FormGroup = this.fb.group({});
  subscription: Array<Subscription> = [];
  questionType: FormModel.QuestionTypeInfo = null;

  updateQuestionType = (data: FormModel.QuestionTypeInfo) => {
    if(!data) return;
    this.questionType = data;
    this.buildForm(data);
  };

  constructor(
    private formStateService: FormStateService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if(!this.questionId) return;
    this.ngOnDestroy();
    this.subscription.push(this.formStateService.getQuestionTypeByQuestionId$(this.questionId).subscribe(
      this.updateQuestionType
    ));
  }

  ngOnDestroy() {
    this.subscription.forEach(x => {
      x.unsubscribe();
    });
  }

  buildForm(questionType: FormModel.QuestionTypeInfo) {
    this.formGroup = this.fb.group({
      questionType: [questionType.questionType],
    });
    this.subscription.push(
      this.formGroup.valueChanges.subscribe((x) => {
        let resulr = { ...this.questionType, ...x };
        this.formStateService.setQuestionTypeOne(resulr);
      })
    );
  }
}

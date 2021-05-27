import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FormModel } from './models/models';

@Component({
  selector: 'fs-tw-question-type',
  template: `
    <form [formGroup]="formGroup" validateOnSubmit *ngIf="questionType">
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

  @Input() questionType: FormModel.QuestionTypes = null;
  
  @Output()
  questionTypeChange: EventEmitter<FormModel.QuestionTypes> = new EventEmitter<FormModel.QuestionTypes>();

  formGroup: FormGroup = this.fb.group({});
  subscription: Array<Subscription> = [];

  constructor(
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if(!this.questionType) return;
    this.ngOnDestroy();
    this.buildForm(this.questionType);
  }

  ngOnDestroy() {
    this.subscription.forEach(x => {
      x.unsubscribe();
    });
  }

  buildForm(questionType: FormModel.QuestionTypes) {
    this.formGroup = this.fb.group({
      questionType: [questionType],
    });
    this.subscription.push(
      this.formGroup.valueChanges.subscribe((x) => {
        this.questionTypeChange.emit(x.questionType);
      })
    );
  }
}

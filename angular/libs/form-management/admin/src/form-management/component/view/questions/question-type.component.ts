import { Component, Input, OnInit } from '@angular/core';
import { Volo } from '@fs-tw/form-management/proxy';
import { FormBuilder, FormGroup } from '@angular/forms';

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

  @Input() questionType: Volo.Forms.QuestionTypes;
  formGroup: FormGroup;
  constructor(
    private fb: FormBuilder
  ) {
    this.formGroup = this.fb.group({});
  }

  ngOnInit() {
  }

  ngOnChanges() {
      this.buildForm();
  }

  buildForm() {
    this.formGroup = this.fb.group({
      questionType: [this.questionType]
    });
  }
}

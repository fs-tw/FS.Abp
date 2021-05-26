import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FormStateService } from './providers/form-state.service';
import { FormModel } from './models/models';

@Component({
  selector: 'fs-tw-question-info',
  template: `
    <form [formGroup]="formGroup" validateOnSubmit *ngIf="question">
      <nz-row [nzGutter]="16">
        <nz-col [nzXs]="24" [nzSm]="12">
          <div class="form-group">
            <label [for]="'title'">{{
              'Forms::Title' | abpLocalization
            }}</label>
            <input
              class="form-control"
              [formControlName]="'title'"
              [id]="'title'"
              type="text"
            />
          </div>
        </nz-col>
        <nz-col [nzXs]="24" [nzSm]="12">
          <fs-tw-question-type
            [questionId]="questionId"
          ></fs-tw-question-type>
        </nz-col>
      </nz-row>
      <div class="form-group">
        <label [for]="'description'">{{
          'Forms::description' | abpLocalization
        }}</label>
        <textarea
          class="form-control"
          [formControlName]="'description'"
          [id]="'description'"
          type="text"
        ></textarea>
      </div>
    </form>
  `,
})
export class QuestionInfoComponent implements OnInit {
  @Input() questionId: string = null;

  formGroup: FormGroup = this.fb.group({});
  subscription: Array<Subscription> = [];
  question: FormModel.QuestionInfo = null;

  updateQuestion = (data: FormModel.QuestionInfo) => {
    if(!data) return;
    this.question = data;
    this.buildForm(data);
  };

  constructor(
    private formStateService: FormStateService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {}

  ngOnChanges() {
    if(!this.questionId) return;
    this.ngOnDestroy();
    this.subscription.push(this.formStateService.getQuestionsByQuestionId$(this.questionId).subscribe(
      this.updateQuestion
    ));
  }

  ngOnDestroy() {
    this.subscription.forEach(x => {
      x.unsubscribe();
    });
  }

  buildForm(question: FormModel.QuestionInfo) {
    this.formGroup = this.fb.group({
      title: [question.title],
      description: [question.description],
    });
    this.subscription.push(
      this.formGroup.valueChanges.subscribe((x) => {
        let resulr = { ...this.question, ...x };
        this.formStateService.setQuestionOne(resulr);
      })
    );
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { FormModel } from './models/models';

export type QuestionProvider ={
  getQuestionsByQuestionId$(key: string): Observable<FormModel.QuestionInfo>;
  setQuestionOne(data: FormModel.QuestionInfo);
}

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
            [questionType]="question.questionType"
            (questionTypeChange)="onQuestionTypeChange($event)"
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
  @Input() provider: QuestionProvider;

  formGroup: FormGroup = this.fb.group({});
  subscription: Subscription = null;
  question: FormModel.QuestionInfo = null;

  updateQuestion = (data: FormModel.QuestionInfo) => {
    if(!data) return;
    this.question = data;
    this.buildForm(data);
  };

  constructor(
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {}

  ngOnChanges() {
    if(!this.questionId) return;
    this.ngOnDestroy();
    this.subscription.add(this.provider.getQuestionsByQuestionId$(this.questionId).subscribe(
      this.updateQuestion
    ));
  }

  ngOnDestroy() {
    if(!this.subscription) { this.subscription = new Subscription(); return; }
    this.subscription.unsubscribe();
  }

  buildForm(question: FormModel.QuestionInfo) {
    this.formGroup = this.fb.group({
      title: [question.title],
      description: [question.description],
    });
    this.subscription.add(
      this.formGroup.valueChanges.pipe(debounceTime(500), distinctUntilChanged()).subscribe((x) => {
        let resulr = { ...this.question, ...x };
        this.question = resulr;
        this.provider.setQuestionOne(resulr);
      })
    );
  }

  onQuestionTypeChange(questionType: FormModel.QuestionTypes) {
    this.question.questionType = questionType;
    this.provider.setQuestionOne(this.question);
  }
}

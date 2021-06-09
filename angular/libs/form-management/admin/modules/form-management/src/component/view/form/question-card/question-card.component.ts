import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import * as _ from 'lodash';
import { FormModel } from '../../../providers/models';

export type QuestionCardProvider ={
  getQuestionsByQuestionId$(key: string): Observable<FormModel.QuestionInfo>;
  getQuestionsByQuestionId(key: string): FormModel.QuestionInfo;
  setQuestionsWithForms(data: Array<FormModel.QuestionInfo>);
  onSaveQuestion$: BehaviorSubject<FormModel.QuestionInfo>;
}

@Component({
  selector: 'fs-question-card',
  templateUrl: 'question-card.component.html'
})
export class QuestionCardComponent implements OnInit {
  @Input() questionId: string = null;
  @Input() provider: QuestionCardProvider;
  @Input() questionNo: number = null;

  subscription: Subscription = new Subscription();
  
  formGroup: FormGroup = this.fb.group({});
  question: FormModel.QuestionInfo = null;

  updateQuestion = (data: FormModel.QuestionInfo) => {
    if(!data) return;
    this.question = data;
    this.buildForm(data);
  };

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit() {
  }

  ngOnChanges() {
    if(!this.questionId) return;
    this.subscription.add(this.provider.getQuestionsByQuestionId$(this.questionId).subscribe(
      this.updateQuestion
    ));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  buildForm(question: FormModel.QuestionInfo) {
    this.formGroup = this.fb.group({
      isRequired: question.isRequired
    });
    this.subscription.add(
      this.formGroup.valueChanges.pipe(debounceTime(500), distinctUntilChanged()).subscribe((x) => {
        let question = _.cloneDeep(this.question);
        question.isRequired = x.isRequired;
        question.isDirty = true;
        this.provider.setQuestionsWithForms([question]);
      })
    );
  }

  removeQuestion() {
    let question = _.cloneDeep(this.question);
    question.isDeleteQuestion = question.isDirty = true;
    this.provider.setQuestionsWithForms([question]);
  }

  onSave(questionId: string) {
    let result = this.provider.getQuestionsByQuestionId(questionId);
    this.provider.onSaveQuestion$.next(result);
  }
}

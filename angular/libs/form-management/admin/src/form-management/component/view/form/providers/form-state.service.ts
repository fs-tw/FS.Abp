import { Injectable } from '@angular/core';
import { InternalStore } from '@abp/ng.core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FormModel } from '../models/models';
import * as _ from 'lodash';

// @dynamic
@Injectable({
  providedIn: 'root',
})
export class FormStateService {
  private store = new InternalStore({
    Form: {} as FormModel.FormInfo,
    Questions: [] as Array<FormModel.QuestionInfo>,
    Choices: [] as Array<FormModel.ChoiceInfo>,
    QuestionType: [] as Array<FormModel.QuestionTypeInfo>
  } as FormModel.State);

  refresh$: BehaviorSubject<boolean>;

  get$() {
    return this.store.sliceState((state) => state);
  }

  get() {
    return this.store.state;
  }

  set(data: FormModel.State) {
    this.store.patch(data);
  }

  getOne$(key: string) {
    return this.store.sliceState((state) => state[key]);
  }

  getQuestionsByQuestionId$(key: string): Observable<FormModel.QuestionInfo> {
    return this.store.sliceState((state) => state['Questions'].find(x => x.id == key));
  }

  getChoicesByQuestionId$(key: string): Observable<Array<FormModel.ChoiceInfo>> {
    return this.store.sliceState((state) => state['Choices'].filter(x => x.questionId == key));
  }

  getQuestionTypeByQuestionId$(key: string): Observable<FormModel.QuestionTypeInfo> {
    return this.store.sliceState((state) => state['QuestionType'].find(x => x.questionId == key));
  }

  setForm(data: FormModel.FormInfo) {
    if(!data) return;
    this.store.patch({
      Form: data
    });
  }

  setQuestions(data: Array<FormModel.QuestionInfo>) {
    if(!data || data.length <= 0) return;
    this.store.patch({
      Questions: data
    });
    let choices = _.flatten(data.map(x => x.choices.map(y => y)));
    this.setChoices(choices);
    let questionType = _.flatten(data.map(x => x.questionType.questionType));
    this.setQuestionTypes(questionType);
  }

  setQuestionOne(data: FormModel.QuestionInfo) {
    if(!data) return;
    let result = _.unionBy([data], this.store.state['Questions'], 'id');
    this.store.patch({
      Questions: result
    });
    let choices = data.choices.map(y => y);
    this.setChoices(choices);
    this.setQuestionTypeOne(data.questionType);
  }

  setChoices(data: Array<FormModel.ChoiceInfo>) {
    if(!data || data.length <= 0) return;
    let result = _.unionBy(data, this.store.state['Choices'], 'id');
    this.store.patch({
      Choices: result
    });
  }

  setQuestionTypes(data: Array<FormModel.QuestionTypeInfo>) {
    if(!data || data.length <= 0) return;
    this.store.patch({
      QuestionType: data
    });
  }

  setQuestionTypeOne(data: FormModel.QuestionTypeInfo) {
    if(!data) return;
    let result = _.unionBy([data], this.store.state['QuestionType'], 'questionId');
    this.store.patch({
      QuestionType: result
    });
  }

  constructor(
  ) {
    this.refresh$ = new BehaviorSubject<boolean>(false);
    this.store.set(this.store.state);
  }
}

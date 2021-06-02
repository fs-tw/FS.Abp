import { Injectable } from '@angular/core';
import { InternalStore } from '@abp/ng.core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FormModel } from '../models/models';
import * as _ from 'lodash';
import { CheckboxProvider } from './../checkbox.component';
import { DropdownListProvider } from './../dropdown-list.component';
import { FormProvider } from '../form/form.component';
import { QuestionCardProvider } from '../question-card/question-card.component';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

// @dynamic
@Injectable({
  providedIn: 'root',
})
export class FormStateService
  implements
    CheckboxProvider,
    DropdownListProvider,
    FormProvider,
    QuestionCardProvider {
  public store = new InternalStore({
    Forms: [] as Array<FormModel.FormInfo>,
    Questions: [] as Array<FormModel.QuestionInfo>,
    Choices: [] as Array<FormModel.ChoiceInfo>,
  } as FormModel.State);

  refresh$: BehaviorSubject<boolean>;

  getAllDataOfDelayTime$(): Observable<FormModel.State> {
    return this.store.sliceState((state) => state).pipe(debounceTime(500), distinctUntilChanged());
  }

  get$() {
    return this.store.sliceState((state) => state);
  }

  get() {
    return this.store.state;
  }

  getOne$(key: string) {
    return this.store.sliceState((state) => state[key]);
  }

  getFormById$(key: string): Observable<FormModel.FormInfo> {
    return this.store.sliceState((state) =>
      state.Forms.find((x) => x.id == key)
    );
  }

  getFormById(key: string): FormModel.FormInfo {
    return this.store.state.Forms.find((x) => x.id == key);
  }

  getQuestionsByQuestionId$(key: string): Observable<FormModel.QuestionInfo> {
    return this.store.sliceState((state) =>
      state.Questions.find((x) => x.id == key)
    );
  }

  getQuestionsByQuestionId(key: string): FormModel.QuestionInfo {
    return this.store.state.Questions.find((x) => x.id == key);
  }

  getChoicesByQuestionId$(
    key: string
  ): Observable<Array<FormModel.ChoiceInfo>> {
    return this.store.sliceState((state) =>
      state.Choices.filter((x) => x.questionId == key)
    );
  }

  getChoicesByQuestionId(
    key: string
  ): Array<FormModel.ChoiceInfo> {
    return this.store.state.Choices.filter((x) => x.questionId == key);
  }

  set(data: FormModel.State) {
    this.store.patch(data);
  }

  setForms(data: Array<FormModel.FormInfo>) {
    if (!data || data.length <= 0) return;
    let result = _.unionBy(data, this.store.state.Forms, 'id');
    this.store.patch({
      Forms: result,
    });
    let questions = _.flatten(data.map((x) => x.questions.map((y) => y)));
    this.setQuestions(questions);
  }

  setFormOne(data: FormModel.FormInfo) {
    if (!data) return;
    let result = _.unionBy([data], this.store.state.Forms, 'id');
    this.store.patch({
      Forms: result,
    });
    let questions = data.questions.map((y) => y);
    this.setQuestions(questions);
  }

  setQuestionsWithForms(data: Array<FormModel.QuestionInfo>) {
    if (!data || data.length <= 0) return;
    let questionsResult = _.unionBy(data, this.store.state.Questions, 'id').sort((a, b) => {
      return a.index - b.index;
    });
    let formsResult = this.store.state.Forms.map(x => {
      let questions = questionsResult.filter(y => y.formId == x.id);
      return { ...x, questions: questions }
    });
    this.store.patch({
      Forms: formsResult,
      Questions: questionsResult
    });
    let choices = _.flatten(data.map((x) => x.choices.map((y) => y)));
    this.setChoices(choices);
  }

  setQuestions(data: Array<FormModel.QuestionInfo>) {
    if (!data || data.length <= 0) return;
    let result = _.unionBy(data, this.store.state.Questions, 'id').sort((a, b) => {
      return a.index - b.index;
    });
    this.store.patch({
      Questions: result,
    });
    let choices = _.flatten(data.map((x) => x.choices.map((y) => y)));
    this.setChoices(choices);
  }

  setQuestionOne(data: FormModel.QuestionInfo) {
    if (!data) return;
    let result = _.unionBy([data], this.store.state.Questions, 'id').sort((a, b) => {
      return a.index - b.index;
    });
    this.store.patch({
      Questions: result,
    });
    let choices = data.choices.map((y) => y);
    this.setChoices(choices);
  }

  setChoicesWithFormsAndQuestions(data: Array<FormModel.ChoiceInfo>) {
    if (!data || data.length <= 0) return;
    let choicesResult = this.choicesDataProcessing(data);
    this.choicesWithFormsAndQuestionsDataProcessing(choicesResult);
  }

  setChoiceOneWithFormsAndQuestions(data: FormModel.ChoiceInfo) {
    if (!data) return;
    let choicesResult = _.unionBy([data], this.store.state.Choices, 'id');
    this.choicesWithFormsAndQuestionsDataProcessing(choicesResult);
  }

  private choicesWithFormsAndQuestionsDataProcessing(choicesResult: Array<FormModel.ChoiceInfo>) {
    choicesResult = choicesResult.sort((a, b) => {
      return a.index - b.index;
    });
    let questionsResult = this.store.state.Questions.map(x => {
      let choices = choicesResult.filter(y => y.questionId == x.id);
      return { ...x, choices: choices }
    }).sort((a, b) => {
      return a.index - b.index;
    });
    let formsResult = this.store.state.Forms.map(x => {
      let questions = questionsResult.filter(y => y.formId == x.id);
      return { ...x, questions: questions }
    });
    this.store.patch({
      Forms: formsResult,
      Questions: questionsResult,
      Choices: choicesResult,
    });
  }

  setChoices(data: Array<FormModel.ChoiceInfo>) {
    if (!data || data.length <= 0) return;
    let result = this.choicesDataProcessing(data);
    this.store.patch({
      Choices: result,
    });
  }

  setChoiceOne(data: FormModel.ChoiceInfo) {
    if (!data) return;
    let result = _.unionBy([data], this.store.state.Choices, 'id').sort((a, b) => {
      return a.index - b.index;
    });
    this.store.patch({
      Choices: result,
    });
  }

  private choicesDataProcessing(data: Array<FormModel.ChoiceInfo>): Array<FormModel.ChoiceInfo> {
    let questionIds = _.unionBy(data.map(x => x.questionId));
    let removeChoicesByQuestionId = _.remove(this.store.state.Choices, function(o) {
      return questionIds.filter(x => x == o.questionId).length <= 0;
    });
    let result = _.unionBy(data, removeChoicesByQuestionId, 'id').sort((a, b) => {
      return a.index - b.index;
    });
    return result;
  }

  constructor() {
    this.refresh$ = new BehaviorSubject<boolean>(false);
    this.store.set(this.store.state);
  }
}

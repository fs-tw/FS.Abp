import { Injectable } from '@angular/core';
import { InternalStore } from '@abp/ng.core';
import { BehaviorSubject, Observable } from 'rxjs';
import * as _ from 'lodash';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { CheckboxProvider } from '../view/form/choice/checkbox.component';
import { DropdownListProvider } from '../view/form/choice/dropdown-list.component';
import { FormProvider } from '../view/form/form/form.component';
import { QuestionCardProvider } from '../view/form/question-card/question-card.component';
import { RadioProvider } from '../view/form/choice/radio.component';
import { FormModel } from './models';

// @dynamic
@Injectable({
  providedIn: 'root',
})
export class FormStateService
  implements
    CheckboxProvider,
    DropdownListProvider,
    FormProvider,
    QuestionCardProvider,
    RadioProvider {
  public store = new InternalStore({
    Forms: [] as Array<FormModel.FormInfo>,
    Questions: [] as Array<FormModel.QuestionInfo>,
    Choices: [] as Array<FormModel.ChoiceInfo>,
  } as FormModel.State);

  refresh$: BehaviorSubject<boolean>;
  onSaveQuestion$: BehaviorSubject<FormModel.QuestionInfo>;
  
  getAllDataOfDelayTime$(): Observable<FormModel.State> {
    return this.store.sliceState((state) => state).pipe(debounceTime(500), distinctUntilChanged());
  }

  getFormsDataOfDelayTime$(): Observable<Array<FormModel.FormInfo>> {
    return this.store.sliceState((state) => state.Forms).pipe(debounceTime(500), distinctUntilChanged());
  }

  getQuestionsDataOfDelayTime$(): Observable<Array<FormModel.QuestionInfo>> {
    return this.store.sliceState((state) => state.Questions).pipe(debounceTime(500), distinctUntilChanged());
  }

  getChoicesDataOfDelayTime$(): Observable<Array<FormModel.ChoiceInfo>> {
    return this.store.sliceState((state) => state.Choices).pipe(debounceTime(500), distinctUntilChanged());
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

  getOne(key: string) {
    return this.store.state[key];
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

  setChoicesWithFormsAndQuestions(data: Array<FormModel.ChoiceInfo>) {
    if (!data || data.length <= 0) return;
    let choicesResult = _.unionBy(data, this.store.state.Choices, 'id');
    choicesResult = choicesResult.sort((a, b) => {
      return a.index - b.index;
    });
    let questionsResult = this.store.state.Questions.map(x => {
      let choices = choicesResult.filter(y => y.questionId == x.id);
      x.isDirty = (choices.filter(y => y.isDirty == true).length > 0) ? true : x.isDirty;
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
    let result = _.unionBy([data], this.store.state.Choices, 'id').sort((a, b) => {
      return a.index - b.index;
    });
    this.store.patch({
      Choices: result,
    });
  }

  constructor() {
    this.refresh$ = new BehaviorSubject<boolean>(false);
    this.onSaveQuestion$ = new BehaviorSubject<FormModel.QuestionInfo>(null);
    this.store.set(this.store.state);
  }
}

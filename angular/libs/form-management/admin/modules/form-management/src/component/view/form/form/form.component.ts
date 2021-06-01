import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { FormModel } from '../models/models';
import { Volo } from '@fs-tw/form-management/proxy';
import * as _ from 'lodash';

export type FormProvider = {
  getFormById$(key: string): Observable<FormModel.FormInfo>;
  getFormById(key: string): FormModel.FormInfo;
  setFormOne(data: FormModel.FormInfo);
};

@Component({
  selector: 'fs-tw-form',
  templateUrl: 'form.component.html',
})
export class FormComponent implements OnInit {
  @Input() formId: string = null;
  @Input() provider: FormProvider;

  formGroup: FormGroup = this.fb.group({});
  subscription: Subscription = new Subscription();
  form: FormModel.FormInfo = null;

  updateForm = (data: FormModel.FormInfo) => {
    if (!data) return;
    this.form = data;
    this.buildForm(data);
  };

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {}

  ngOnChanges() {
    if (!this.formId) return;
    this.subscription.add(
      this.provider.getFormById$(this.formId).subscribe(this.updateForm)
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  buildForm(form: FormModel.FormInfo) {
    this.formGroup = this.fb.group({
      title: [form.title],
      description: [form.description],
    });
    this.subscription.add(
      this.formGroup.valueChanges.pipe(debounceTime(500), distinctUntilChanged()).subscribe((x) => {
        let result = { ...this.form, ...x };
        this.form = result;
        this.provider.setFormOne(result);
      })
    );
  }

  addNewQuestion() {
    let form = this.provider.getFormById(this.formId);
    let questions = form.questions;
    let index = Math.max(...questions.map(x => x.index)) + 1;
    let question = new FormModel.QuestionInfo({
      formId: this.formId,
      id: index.toString(),
      index: index,
      title: "Question " + index.toString(),
      description: "Question " + index.toString(),
      isRequired: false,
      hasOtherOption: false,
      questionType: 1,
      choices: []
    } as Volo.Forms.Questions.QuestionDto);
    this.provider.setFormOne({ ...form, questions: questions.concat([question]) });
  }

  onRemoveQuestionEvent(questionId: string) {
    let form = _.cloneDeep(this.form);
    form.questions = _.remove(form.questions, function(o) {
      return o.id != questionId;
    });
    this.provider.setFormOne(form);
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Volo } from '@fs-tw/form-management/proxy';
import * as _ from 'lodash';
import { Router } from '@angular/router';
import { FormModel } from '../../../providers/models';

export type FormProvider = {
  getFormById$(key: string): Observable<FormModel.FormInfo>;
  getFormById(key: string): FormModel.FormInfo;
  setForms(data: Array<FormModel.FormInfo>)
};

@Component({
  selector: 'fs-form',
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

  constructor(private fb: FormBuilder, private router: Router) {
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
        let result = { ...this.form, isDirty: true, ...x };
        this.provider.setForms([result]);
      })
    );
  }

  addNewQuestion() {
    let form = this.provider.getFormById(this.formId);
    let questions = form.questions;
    let index = (questions.length <= 0) ? 1 : Math.max(...questions.map(x => x.index)) + 1;
    let question = new FormModel.QuestionInfo({
      formId: this.formId,
      id: index.toString(),
      index: index,
      title: "Question " + index.toString(),
      description: "Question " + index.toString(),
      isRequired: false,
      hasOtherOption: false,
      questionType: 1,
      choices: [],
    } as Volo.Forms.Questions.QuestionDto, true, true);
    this.provider.setForms([{ ...form, questions: questions.concat([question]) }]);
  }

  goToPreView(id: string) {
    this.router.navigate(["/form-management/form/preview/" + id]);
  }
}

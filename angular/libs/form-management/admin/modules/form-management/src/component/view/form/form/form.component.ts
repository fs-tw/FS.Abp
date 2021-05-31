import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { FormModel } from '../models/models';

export type FormProvider = {
  getFormById$(key: string): Observable<FormModel.FormInfo>;
  getFormById(key: string): FormModel.FormInfo;
  setFormOne(data: FormModel.FormInfo);
  refresh$: BehaviorSubject<boolean>;
};

@Component({
  selector: 'fs-tw-form',
  templateUrl: 'form.component.html',
})
export class FormComponent implements OnInit {
  @Input() formId: string = null;
  @Input() provider: FormProvider;

  formGroup: FormGroup = this.fb.group({});
  subscription: Subscription = null;
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
    this.ngOnDestroy();
    this.subscription.add(
      this.provider.getFormById$(this.formId).subscribe(this.updateForm)
    );
  }

  ngOnDestroy() {
    if(!this.subscription) { this.subscription = new Subscription(); return; }
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
        this.provider.refresh$.next(true);
      })
    );
  }

  addNewQuestion() {
    let form = this.provider.getFormById(this.formId);
    let questions = form.questions;
    let index = Math.max(...questions.map(x => x.index)) + 1;
    let question = {
      formId: this.formId,
      id: index.toString(),
      index: index,
      title: "Question " + index.toString(),
      description: "Question " + index.toString(),
      isRequired: false,
      hasOtherOption: false,
      questionType: 1,
      choices: []
    } as FormModel.QuestionInfo;
    this.provider.setFormOne({ ...form, questions: questions.concat([question]) });
    this.provider.refresh$.next(true);
  }
}

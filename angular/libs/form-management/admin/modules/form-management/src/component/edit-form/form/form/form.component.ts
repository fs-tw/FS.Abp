import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Volo } from '@fs-tw/form-management/proxy';
import * as _ from 'lodash';
import { FormModel } from '../../../providers/models';

declare let $: any;

export type FormProvider = {
  getFormById$(key: string): Observable<FormModel.FormInfo>;
  getFormById(key: string): FormModel.FormInfo;
  setForms(data: Array<FormModel.FormInfo>): BehaviorSubject<boolean>;
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
  isLoading: boolean = false;
  isAddNewQuestion: boolean = false;

  updateForm = (data: FormModel.FormInfo) => {
    if (!data) return;
    this.form = data;
    this.buildForm(data);
  };

  loadingData = (data: boolean) => {
    this.isLoading = data;
    if(this.isLoading && this.isAddNewQuestion) {
      this.isAddNewQuestion = false;
      $("div.alain-ms__product-body.scrollbar")
        .scrollTop(
          $("div.alain-ms__product-body.scrollbar").prop("scrollHeight")
        );
    }
  };

  constructor(
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
  }

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
    this.isLoading = true;
    this.isAddNewQuestion = true;
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
    this.subscription.add(
      this.provider.setForms([{ ...form, questions: questions.concat([question]) }])
                   .subscribe(this.loadingData)
    );
  }
}

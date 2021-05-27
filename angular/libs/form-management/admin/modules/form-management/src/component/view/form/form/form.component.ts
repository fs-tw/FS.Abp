import { Component, Input, OnInit } from '@angular/core';
import { Volo } from '@fs-tw/form-management/proxy';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { FormModel } from '../models/models';
import { FormStateService } from '../providers';

export type FormProvider = {
  getFormById$(key: string): Observable<FormModel.FormInfo>;
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
  subscription: Array<Subscription> = [];
  form: FormModel.FormInfo = null;

  updateForm = (data: FormModel.FormInfo) => {
    if (!data) return;
    this.form = data;
    this.buildForm(data);
  };

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({});
  }

  ngOnInit() {}

  ngOnChanges() {
    if (!this.formId) return;
    this.ngOnDestroy();
    this.subscription.push(
      this.provider.getFormById$(this.formId).subscribe(this.updateForm)
    );
  }

  ngOnDestroy() {
    this.subscription.forEach((x) => {
      x.unsubscribe();
    });
  }

  buildForm(form: FormModel.FormInfo) {
    this.formGroup = this.fb.group({
      title: [form.title],
      description: [form.description],
    });
    this.subscription.push(
      this.formGroup.valueChanges.subscribe((x) => {
        let result = { ...this.form, ...x };
        this.form = result;
        this.provider.setFormOne(result);
      })
    );
  }
}

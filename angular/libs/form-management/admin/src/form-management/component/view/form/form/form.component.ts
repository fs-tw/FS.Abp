import { Component, Input, OnInit } from '@angular/core';
import { Volo } from '@fs-tw/form-management/proxy';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FormModel } from '../models/models';
import { FormStateService } from '../providers';

@Component({
  selector: 'fs-tw-form',
  templateUrl:'form.component.html'
})
export class FormComponent implements OnInit {
  @Input() formId: string = null;

  formGroup: FormGroup = this.fb.group({});
  subscription: Array<Subscription> = [];
  form: FormModel.FormInfo = null;
  
  updateForm = (data: FormModel.FormInfo) => {
    if(!data) return;
    this.form = data;
    this.buildForm(data);
  };

  constructor(
    private formStateService: FormStateService,
    private fb: FormBuilder
  ) {
    this.formGroup = this.fb.group({});
  }

  ngOnInit() {}

  ngOnChanges() {
    if(!this.formId) return;
    this.ngOnDestroy();
    this.subscription.push(this.formStateService.getFormById$(this.formId).subscribe(
      this.updateForm
    ));
  }

  ngOnDestroy() {
    this.subscription.forEach(x => {
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
        let resulr = { ...this.form, ...x };
        this.form = resulr;
        this.formStateService.setFormOne(resulr);
      })
    );
  }
}

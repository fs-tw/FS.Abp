import { Component, Input, OnInit } from '@angular/core';
import { Volo } from '@fs-tw/form-management/proxy';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'fs-tw-form',
  templateUrl:'form.component.html'
})
export class FormComponent implements OnInit {
  @Input() formDetail: Volo.Forms.Forms.FormWithDetailsDto;

  formGroup: FormGroup;
  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({});
  }

  ngOnInit() {}

  ngOnChanges() {
    if (!this.formDetail) return;
    this.buildForm();
  }

  buildForm() {
    this.formGroup = this.fb.group({
      title: [this.formDetail.title],
      description: [this.formDetail.description],
    });
  }
}

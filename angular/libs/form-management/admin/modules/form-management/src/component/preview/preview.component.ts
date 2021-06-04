import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import * as _ from 'lodash';
import { Volo } from '@fs-tw/form-management/proxy';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'fs-preview',
  templateUrl: 'preview.component.html',
})
export class PreviewComponent implements OnInit {
    formId: string = null;
    formGroup: FormGroup = this.fb.group({});
    questionsControls: FormArray = new FormArray([]);
    subscription: Subscription = new Subscription();
    formDetail: Volo.Forms.Forms.FormWithDetailsDto;

    constructor(
      private fb: FormBuilder,
      private formService: Volo.Forms.Forms.FormService,
      private route: ActivatedRoute,
    ) {
        this.route.paramMap.subscribe(paramMap => {
            if (!paramMap.get('id')) return null;
            this.formId = paramMap.get('id');
            this.loadFormData();
        });
    }

    ngOnInit() {}

    loadFormData() {
        this.subscription.add(this.formService.getById(this.formId).subscribe((x) => {
            this.formDetail = x;
            this.buildForm();
        }));
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    buildForm() {
        const { required, choiceValidator } = PreviewValidators;
        this.questionsControls = this.fb.array(this.formDetail.questions.map(((x, i) => {
            let result = { questionId: x.id }; 
            if (x.questionType == 4) {
                result["choices"] = this.fb.array(x.choices.map(y =>
                    this.fb.group({ id: y.id, value: null })
                ), (x.isRequired) ? [choiceValidator] : undefined);
            } else {
                result['value'] = [null, (x.isRequired) ? [required] : undefined];
            }
            return this.fb.group(result);
        })));
        this.formGroup = this.fb.group({
            questions: this.questionsControls
        });
    }

    submitForm(value): void {
        console.log(value);
    }
}

export class PreviewValidators extends Validators {
    static choiceValidator(control: AbstractControl) {
        let result = control.value.filter(x => x.value != null && x.value != false).length > 0;
        return (result) ? null : { choiceValidator: false };
    }
}

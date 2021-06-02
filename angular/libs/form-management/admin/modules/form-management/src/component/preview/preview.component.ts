import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import * as _ from 'lodash';
import { PageService } from '../../providers/page.service';
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

    autoTips: Record<string, Record<string, string>> = {
        'zh-cn': {
          required: '必填題目'
        },
        en: {
          required: 'Question is required'
        },
    };

    constructor(
      private fb: FormBuilder,
      private pageService: PageService,
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
        this.subscription.add(this.pageService.getById(this.formId).subscribe((x) => {
            this.formDetail = x;
            this.buildForm();
        }));
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    buildForm() {
        this.questionsControls = this.fb.array(this.formDetail.questions.map(((x, i) => {
            let result = { questionId: x.id }; 
            if (x.questionType == 4) {
                result["choices"] = this.fb.array(x.choices.map(y =>
                    this.fb.group({ id: y.id, value: [null, undefined] })
                ));
            } else {
                result['value'] = [null, (x.isRequired) ? [Validators.required] : undefined];
            }
            return this.fb.group(result);
        })));
        this.formGroup = this.fb.group({
            questions: this.questionsControls
        });
    }

    submitForm(value): void {
        for (const key in this.formGroup.controls) {
          this.formGroup.controls[key].markAsDirty();
          this.formGroup.controls[key].updateValueAndValidity();
        }
        console.log(value);
    }
}

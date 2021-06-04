import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { FormModel } from './models/models';
import { Volo } from '@fs-tw/form-management/proxy';
import * as _ from 'lodash';

export type DropdownListProvider ={
  getChoicesByQuestionId$(key: string): Observable<Array<FormModel.ChoiceInfo>>;
  setChoicesWithFormsAndQuestions(data: Array<FormModel.ChoiceInfo>);
}

@Component({
  selector: 'fs-dropdown-list',
  template: `
    <form [formGroup]="formGroup" validateOnSubmit *ngIf="questionId">
      <div class="form-group" [formArrayName]="'choices'">
        <label [for]="'choices'">題項</label>
        <nz-row
          [nzGutter]="16"
          style="padding: 5px;"
          *ngFor="let choice of choicesControls.controls; let i = index"
          [formGroupName]="i"
        >
          <nz-col [nzSpan]="18">
            <nz-row [nzGutter]="16">
              <nz-col [nzLg]="2" [nzSm]="24" [nzXs]="24">
                <button
                  nz-button
                  nzType="default"
                  style="height: 100%; width: 100%;"
                >
                  <span style="font-weight:bold;">{{ i + 1 }}</span>
                </button>
              </nz-col>
              <nz-col [nzLg]="20" [nzSm]="24" [nzXs]="24">
                <input
                  style="width: 100%;"
                  class="form-control"
                  [formControlName]="'value'"
                  type="text"
                />
              </nz-col>
              <nz-col [nzSpan]="2"  >
                <button nz-button nzType="default" style="height: 100%;" (click)="removeChoice(choicesControls.controls[i].value.id)">
                  <span style="font-weight:bold;">X</span>
                </button>
              </nz-col>
            </nz-row>
          </nz-col>
        </nz-row>
        <nz-row [nzGutter]="16" style="padding: 5px;">
          <nz-col [nzSpan]="18">
            <nz-row [nzGutter]="16">
              <nz-col [nzLg]="2" [nzSm]="24" [nzXs]="24">
                <button
                  nz-button
                  nzType="default"
                  style="height: 100%; width: 100%;"
                >
                  <span style="font-weight:bold;">
                    {{ choices.length + 1 }}
                  </span>
                </button>
              </nz-col>
              <nz-col [nzLg]="22" [nzSm]="24" [nzXs]="24" style="padding: 5px;">
                <a style="color: blue;" (click)="addNewChoice()">
                  {{ 'Forms::Choice:AddOption' | abpLocalization }}
                </a>
              </nz-col>
            </nz-row>
          </nz-col>
        </nz-row>
      </div>
    </form>
  `,
  styles: [
    '::ng-deep .ant-checkbox + span { width: 100%; padding-left: 15px; }',
  ],
})
export class DropdownListComponent implements OnInit {
  @Input() questionId: string = null;
  @Input() provider: DropdownListProvider;

  formGroup: FormGroup = this.fb.group({});
  subscription: Subscription = new Subscription();
  choicesControls: FormArray = new FormArray([]);
  choices: Array<FormModel.ChoiceInfo> = [];

  updateChoices = (data: Array<FormModel.ChoiceInfo>) => {
    if(!data) return;
    this.choices = data;
    this.buildForm(data);
  };

  constructor(
    private fb: FormBuilder) {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if(!this.questionId) return;
    this.subscription.add(this.provider.getChoicesByQuestionId$(this.questionId).subscribe(
      this.updateChoices
    ));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  buildForm(choices: Array<FormModel.ChoiceInfo>) {
    this.choicesControls = this.fb.array(choices.map(((x, i) => {
      return this.fb.group(x);
    })));
    this.formGroup = this.fb.group({
      choices: this.choicesControls
    });
    this.subscription.add(
      this.formGroup.valueChanges.pipe(debounceTime(500), distinctUntilChanged()).subscribe((x) => {
        let result = _.cloneDeep(x.choices);
        result = result.map(y => { return { ...y, isDirty: true } });
        this.provider.setChoicesWithFormsAndQuestions(result);
      })
    );
  }

  addNewChoice() {
    let index = (this.choices.length <= 0) ? 1 : Math.max(...this.choices.map(x => x.index)) + 1;
    let choice = new FormModel.ChoiceInfo(this.questionId,
    {
      id: index.toString(),
      index: index,
      isCorrect: false,
      value: "Choice " + index.toString()
    } as Volo.Forms.Choices.ChoiceDto, true, true);
    this.provider.setChoicesWithFormsAndQuestions([choice]);
  }

  removeChoice(id: string) {
    let result = _.cloneDeep(this.choices.find(x => x.id == id));
    result.isDeleteChoice = result.isDirty = true;
    this.provider.setChoicesWithFormsAndQuestions([result]);
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { FormModel } from './models/models';
import { Volo } from '@fs-tw/form-management/proxy';
import * as _ from 'lodash';

export type CheckboxProvider ={
  getChoicesByQuestionId$(key: string): Observable<Array<FormModel.ChoiceInfo>>;
  setChoices(data: Array<FormModel.ChoiceInfo>);
  setChoiceOne(data: FormModel.ChoiceInfo);
}

@Component({
  selector: 'fs-tw-checkbox',
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
              <nz-col [nzSpan]="22">
                <label nz-checkbox nzDisabled style="width: 100%;">
                  <input
                    style="width: 100%;"
                    class="form-control"
                    [formControlName]="'value'"
                    type="text"
                  />
                </label>
              </nz-col>
              <nz-col [nzSpan]="2">
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
              <nz-col [nzSpan]="24">
                <label nz-checkbox nzDisabled>
                  <a style="color: blue;" (click)="addNewChoice(1)">{{
                    'Forms::Choice:AddOption' | abpLocalization
                  }}</a>
                  <span style="padding: 5px;">{{
                    'Forms::Choice:Or' | abpLocalization
                  }}</span>
                  <a style="color: blue;" (click)="addNewChoice(2)">{{
                    'Forms::Choice:AddOther' | abpLocalization
                  }}</a>
                </label>
              </nz-col>
            </nz-row>
          </nz-col>
        </nz-row>
      </div>
    </form>
  `,
  styles: [
    '::ng-deep .ant-checkbox + span { width: 100%; padding-left: 15px; }',
  ]
})
export class CheckboxComponent implements OnInit {
  @Input() questionId: string = null;
  @Input() provider: CheckboxProvider;

  subscription: Subscription = new Subscription();

  formGroup: FormGroup = this.fb.group({});

  choicesControls: FormArray = new FormArray([]);
  choices: Array<FormModel.ChoiceInfo> = [];

  updateChoices = (data: Array<FormModel.ChoiceInfo>) => {
    if (!data) return;
    this.choices = data;
    this.buildForm(data);
  };

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit() {}

  ngOnChanges() {
    if (!this.questionId) return;
    this.subscription.add(
      this.provider
        .getChoicesByQuestionId$(this.questionId)
        .subscribe(this.updateChoices)
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  buildForm(choices: Array<FormModel.ChoiceInfo>) {
    this.choicesControls = this.fb.array(
      choices.map((x, i) => {
        return this.fb.group(x);
      })
    );
    this.formGroup = this.fb.group({
      choices: this.choicesControls,
    });

    this.subscription.add(
      this.formGroup.valueChanges.pipe(debounceTime(500), distinctUntilChanged()).subscribe((x) => {
        this.provider.setChoices(x.choices);
      })
    );
  }

  addNewChoice(type: number = 1) {
    let index = (this.choices.length <= 0) ? 1 : Math.max(...this.choices.map(x => x.index)) + 1;
    let value = (type == 1) ? "Question " + index.toString() : "Other...";
    let choice = new FormModel.ChoiceInfo(this.questionId,
    {
      id: index.toString(),
      index: index,
      isCorrect: false,
      value: value
    } as Volo.Forms.Choices.ChoiceDto);
    this.provider.setChoiceOne(choice);
  }

  removeChoice(id: string) {
    let choices = _.cloneDeep(this.choices);
    let result = _.remove(choices, function(o) {
      return o.id != id;
    });
    this.provider.setChoices(result);
  }
}

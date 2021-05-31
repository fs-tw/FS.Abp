import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { FormModel } from './models/models';

export type DropdownListProvider ={
  getChoicesByQuestionId$(key: string): Observable<Array<FormModel.ChoiceInfo>>;
  setChoices(data: Array<FormModel.ChoiceInfo>);
  refresh$: BehaviorSubject<boolean>;
}

@Component({
  selector: 'fs-tw-dropdown-list',
  template: `
    <form [formGroup]="formGroup" validateOnSubmit *ngIf="questionId">
      <div class="form-group" [formArrayName]="'choices'">
        <label [for]="'choices'">題項</label>
        <nz-row
          [nzGutter]="16"
          style="padding: 5px;"
          *ngFor="let choice of choices.controls; let i = index"
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
                <button nz-button nzType="default" style="height: 100%;">
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
                  <a style="color: blue;">{{
                    'Forms::Choice:AddOption' | abpLocalization
                  }}</a>
                  <span style="padding: 5px;">{{
                    'Forms::Choice:Or' | abpLocalization
                  }}</span>
                  <a style="color: blue;">{{
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
  ],
})
export class DropdownListComponent implements OnInit {
  @Input() questionId: string = null;
  @Input() provider: DropdownListProvider;

  formGroup: FormGroup = this.fb.group({});
  subscription: Subscription = null;
  choices: FormArray = new FormArray([]);

  updateChoices = (data: Array<FormModel.ChoiceInfo>) => {
    if(!data) return;
    this.buildForm(data);
  };

  constructor(
    private fb: FormBuilder) {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if(!this.questionId) return;
    this.ngOnDestroy();
    this.subscription.add(this.provider.getChoicesByQuestionId$(this.questionId).subscribe(
      this.updateChoices
    ));
  }

  ngOnDestroy() {
    if(!this.subscription) { this.subscription = new Subscription(); return; }
    this.subscription.unsubscribe();
  }

  buildForm(choices: Array<FormModel.ChoiceInfo>) {
    this.choices = this.fb.array(choices.map(((x, i) => {
      return this.fb.group(x);
    })));
    this.formGroup = this.fb.group({
      choices: this.choices
    });
    this.subscription.add(
      this.formGroup.valueChanges.pipe(debounceTime(500), distinctUntilChanged()).subscribe((x) => {
        this.provider.setChoices(x.choices);
        this.provider.refresh$.next(true);
      })
    );
  }
}

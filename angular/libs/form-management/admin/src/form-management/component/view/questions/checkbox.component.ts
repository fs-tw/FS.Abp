import { Component, Input, OnInit } from '@angular/core';
import { Volo } from '@fs-tw/form-management/proxy';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

class Dictionaryinfo {
  [key: string]: string;
}

@Component({
  selector: 'fs-tw-checkbox',
  template: `
    <form [formGroup]="formGroup" validateOnSubmit>
        <div class="form-group">
            <label [for]="'choices'">題項</label>
            <nz-row [nzGutter]="16" style="padding: 5px;" *ngFor="let choice of choices; let i = index;">
                <nz-col [nzSpan]="18">
                    <nz-row [nzGutter]="16">
                        <nz-col [nzSpan]="22">
                            <label nz-checkbox nzDisabled style="width: 100%;">
                                <input style="width: 100%;" class="form-control" [formControlName]="choice.id" [id]="choice.id" type="text" />
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
                                <a style="color: blue;">{{ 'Forms::Choice:AddOption' | abpLocalization }}</a>
                                <span style="padding: 5px;">{{ 'Forms::Choice:Or' | abpLocalization }}</span>
                                <a style="color: blue;">{{ 'Forms::Choice:AddOther' | abpLocalization }}</a>
                            </label>
                        </nz-col>
                    </nz-row>
                </nz-col>
            </nz-row>
        </div>
    </form>
  `,
  styles: ['::ng-deep .ant-checkbox + span { width: 100%; padding-left: 15px; }']
})
export class CheckboxComponent implements OnInit {
  @Input() choices: Array<Volo.Forms.Choices.ChoiceDto>;
  formGroup: FormGroup;
  private subscribe: Subscription;
  private checkboxSubject: BehaviorSubject<Dictionaryinfo>;
  public checkboxSubject$: Observable<Dictionaryinfo>;
  constructor(
    private fb: FormBuilder
  ) {
    this.formGroup = this.fb.group({});
  }

  ngOnInit() {
    this.checkboxSubject$ = this.checkboxSubject.asObservable();
    this.subscribe = this.formGroup.valueChanges.subscribe();
    this.formGroup.valueChanges.subscribe(x => {
        this.checkboxSubject.next(x);
    })
  }

  ngOnChanges() {
    this.buildForm();
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }

  buildForm() {
    let choiceControl = {};
    this.choices.some(x => {
        choiceControl[x.id] = [x.value]
    });
    this.formGroup = this.fb.group(choiceControl);
    this.checkboxSubject = new BehaviorSubject<Dictionaryinfo>(choiceControl);
  }
}

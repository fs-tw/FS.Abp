import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Volo } from '@fs-tw/form-management/proxy';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

class Dictionaryinfo {
  [key: string]: string;
}

@Component({
  selector: 'fs-tw-dropdown-list',
  template: `
    <form [formGroup]="formGroup" validateOnSubmit>
      <div class="form-group">
        <label [for]="'choices'">題項</label>
        <nz-row
          [nzGutter]="16"
          style="padding: 5px;"
          *ngFor="let choice of choices; let i = index"
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
                  class="form-control"
                  [formControlName]="choice.id"
                  [id]="choice.id"
                  type="text"
                />
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
              <nz-col [nzLg]="2" [nzSm]="24" [nzXs]="24">
                <button
                  nz-button
                  nzType="default"
                  style="height: 100%; width: 100%;"
                >
                  <span style="font-weight:bold;">{{
                    choices.length + 1
                  }}</span>
                </button>
              </nz-col>
              <nz-col [nzLg]="22" [nzSm]="24" [nzXs]="24" style="padding: 5px;">
                <a style="color: blue;">{{
                  'Forms::Choice:AddOption' | abpLocalization
                }}</a>
              </nz-col>
            </nz-row>
          </nz-col>
        </nz-row>
      </div>
    </form>
  `,
})
export class DropdownListComponent implements OnInit {
  @Input() choices: Array<Volo.Forms.Choices.ChoiceDto>;
  @Output()
  choicesChange: EventEmitter<
    Volo.Forms.Choices.ChoiceDto[]
  > = new EventEmitter<Volo.Forms.Choices.ChoiceDto[]>();
  formGroup: FormGroup;
  private subscription: Subscription = new Subscription();
  // private dropdownListSubject: BehaviorSubject<Dictionaryinfo>;
  // public dropdownListSubject$: Observable<Dictionaryinfo>;
  constructor(private fb: FormBuilder) {
    //this.formGroup = this.fb.group({});
  }

  ngOnInit() {
    // this.dropdownListSubject$ = this.dropdownListSubject.asObservable();
    // this.subscribe = this.formGroup.valueChanges.subscribe();
    // this.formGroup.valueChanges.subscribe((x) => {
    //   this.dropdownListSubject.next(x);
    // });
  }

  ngOnChanges() {
    this.buildForm();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  buildForm() {
    let choiceControl = {};
    this.choices.some((x) => {
      choiceControl[x.id] = [x.value];
    });
    this.formGroup = this.fb.group(choiceControl);
    this.subscription.add(
      this.formGroup.valueChanges.subscribe((x) => {
        Object.keys(x).forEach((p) => {
          this.choices.find((x) => x.id === p).value = x[p];
        });
        this.choicesChange.emit(this.choices);
      })
    );

    // this.dropdownListSubject = new BehaviorSubject<Dictionaryinfo>(
    //   choiceControl
    // );
  }
}

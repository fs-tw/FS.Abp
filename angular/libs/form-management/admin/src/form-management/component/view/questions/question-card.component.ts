import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Volo } from '@fs-tw/form-management/proxy';
import { CheckboxComponent } from './checkbox.component';
import { DropdownListComponent } from './dropdown-list.component';

@Component({
  selector: 'fs-tw-question-card',
  template: `
    <nz-card [nzBordered]="true" [nzTitle]="questionTitle" [nzExtra]="extraTemplate">
        <fs-tw-question-info [questionDetail]="questionDetail"></fs-tw-question-info>
        <div [ngSwitch]="questionDetail.questionType">
            <ng-container *ngSwitchCase="4">
                <fs-tw-checkbox [choices]="questionDetail.choices"></fs-tw-checkbox>
            </ng-container>
            <ng-container *ngSwitchCase="5">
                <fs-tw-dropdown-list [choices]="questionDetail.choices"></fs-tw-dropdown-list>
            </ng-container>
        </div>
        
        <ng-template #questionTitle>
            <span>{{ 'Forms::Form:Questions:QuestionIndex' | abpLocalization : questionDetail.index }}</span>
        </ng-template>
        <ng-template #extraTemplate>
            <nz-row>
                <nz-col style="padding: 9px;">
                    <nz-switch style="padding-right: 10px;"></nz-switch>
                    <span>{{ 'Forms::Form:Questions:Required' | abpLocalization }}</span>
                </nz-col>
                <nz-col style="padding: 5px;">
                    <button nz-button nzType="default" style="height: 100%;">
                        <span style="font-weight:bold;">{{ 'Forms::Form:Questions:Save' | abpLocalization }}</span>
                    </button>
                </nz-col>
                <nz-col style="padding: 5px;">
                    <button nz-button nzType="default" style="height: 100%;">
                        <span style="font-weight:bold;">{{ 'Forms::Form:Questions:Remove' | abpLocalization }}</span>
                    </button>
                </nz-col>
            </nz-row>
        </ng-template>
    </nz-card>
  `,
})
export class QuestionCardComponent implements OnInit {
  @ViewChild(CheckboxComponent) checkboxComponent: CheckboxComponent;
  @ViewChild(DropdownListComponent) dropdownListComponent: DropdownListComponent;
  @Input() questionDetail: Volo.Forms.Questions.QuestionDto;
  constructor(
  ) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if (this.checkboxComponent != null) {
        this.checkboxComponent.checkboxSubject$.subscribe((x) => {
            console.log(x)
        })
    }
    if (this.dropdownListComponent != null) {
        this.dropdownListComponent.dropdownListSubject$.subscribe((x) => {
            console.log(x)
        })
    }
  }
}

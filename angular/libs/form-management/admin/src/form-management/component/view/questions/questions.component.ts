import { Component, Input, OnInit } from '@angular/core';
import { Volo } from '@fs-tw/form-management/proxy';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'fs-tw-questions',
  template: `
    <div style="background: #ECECEC;">
      <form [formGroup]="formGroup" validateOnSubmit *ngIf="formDetail">
        <nz-row>
          <nz-col style="width: 100%; padding: 15px 15px 0px 15px;">
            <nz-card [nzBordered]="true">
                <div class="form-group">
                  <label [for]="'title'">{{ 'Forms::Title' | abpLocalization }}</label>
                  <input class="form-control" [formControlName]="'title'" [id]="'title'" type="text" />
                </div>
                <div class="form-group">
                  <label for="description">{{ 'Forms::description' | abpLocalization }}</label>
                  <textarea class="form-control" [formControlName]="'description'" [id]="'description'" type="text"></textarea>
                </div>
                <nz-row [nzGutter]="16">
                  <nz-col [nzMd]="8" [nzSm]="24" [nzXs]="24" style="padding: 8px;">
                    <button nz-button nzType="default" style="width: 100%;">
                      <span style="font-weight:bold;">
                        {{ 'Forms::Form:Questions:Settings' | abpLocalization }}
                      </span>
                    </button>
                  </nz-col>
                  <nz-col [nzMd]="8" [nzSm]="24" [nzXs]="24" style="padding: 8px;">
                    <button nz-button nzType="default" style="width: 100%;">
                      <span style="font-weight:bold;">
                        {{ 'Forms::Form:Questions:NewQuestion' | abpLocalization }}
                      </span>
                    </button>
                  </nz-col>
                  <nz-col [nzMd]="8" [nzSm]="24" [nzXs]="24" style="padding: 8px;">
                    <button nz-button nzType="default" style="width: 100%;">
                      <span style="font-weight:bold;">
                        {{ 'Forms::Form:Questions:Preview' | abpLocalization }}
                      </span>
                    </button>
                  </nz-col>
                </nz-row>
            </nz-card>
          </nz-col>
        </nz-row>
        <nz-row *ngFor="let item of formDetail?.questions; let index = index;">
          <nz-col style="width: 100%; padding: 0px 15px 0px 15px;">
            <fs-tw-question-card [questionDetail]="item"></fs-tw-question-card>
          </nz-col>
        </nz-row>
        <nz-row>
          <nz-col style="width: 100%; padding: 0px 15px 15px 15px;">
            <button nz-button nzType="default" style="width: 100%; height: 50px;">
              <span style="font-weight:bold;">
                {{ 'Forms::Form:Questions:NewQuestion' | abpLocalization }}
              </span>
            </button>
          </nz-col>
        </nz-row>
      </form>
    </div>
  `,
})
export class QuestionsComponent implements OnInit {
  @Input() formDetail: Volo.Forms.Forms.FormWithDetailsDto;
  formGroup: FormGroup;
  constructor(
    private fb: FormBuilder
  ) {
    this.formGroup = this.fb.group({});
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if(!this.formDetail) return;
    this.buildForm();
  }

  buildForm() {
    this.formGroup = this.fb.group({
      title: [this.formDetail.title],
      description: [this.formDetail.description],
    });
  }
}

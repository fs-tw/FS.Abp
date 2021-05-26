import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Volo } from '@fs-tw/form-management/proxy';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'fs-tw-question-info',
  template: `
    <form [formGroup]="formGroup" validateOnSubmit>
      <nz-row [nzGutter]="16">
        <nz-col [nzXs]="24" [nzSm]="12">
          <div class="form-group">
            <label [for]="'title'">{{
              'Forms::Title' | abpLocalization
            }}</label>
            <input
              class="form-control"
              [formControlName]="'title'"
              [id]="'title'"
              type="text"
            />
          </div>
        </nz-col>
        <nz-col [nzXs]="24" [nzSm]="12">
          <fs-tw-question-type
            [questionType]="questionDetail.questionType"
          ></fs-tw-question-type>
        </nz-col>
      </nz-row>
      <div class="form-group">
        <label [for]="'description'">{{
          'Forms::description' | abpLocalization
        }}</label>
        <textarea
          class="form-control"
          [formControlName]="'description'"
          [id]="'description'"
          type="text"
        ></textarea>
      </div>
    </form>
  `,
})
export class QuestionInfoComponent implements OnInit {
  @Input() questionDetail: Volo.Forms.Questions.QuestionDto = {} as any;
  @Output()
  questionDetailChange: EventEmitter<Volo.Forms.Questions.QuestionDto> = new EventEmitter<Volo.Forms.Questions.QuestionDto>();

  public formGroup: FormGroup;
  private subs: Subscription = new Subscription();

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({});
  }

  ngOnInit() {}
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  ngOnChanges() {
    this.buildForm();
  }

  buildForm() {
    this.formGroup = this.fb.group({
      title: [this.questionDetail.title],
      description: [this.questionDetail.description],
    });
    this.subs.add(
      this.formGroup.valueChanges.subscribe((x) => {
        this.questionDetailChange?.emit({...this.questionDetail,...x});
        
      })
    );
  }
}

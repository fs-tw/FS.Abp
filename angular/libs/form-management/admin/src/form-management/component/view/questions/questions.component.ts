import { Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Volo } from '@fs-tw/form-management/proxy';
import { FormBuilder, FormGroup } from '@angular/forms';
import { QuestionCardComponent } from './question-card/question-card.component';
import { merge } from 'rxjs';

@Component({
  selector: 'fs-tw-questions',
  templateUrl:'questions.component.html'
})
export class QuestionsComponent implements OnInit {
  @ViewChildren(QuestionCardComponent) views:QueryList<QuestionCardComponent>;
  @Input() formDetail: Volo.Forms.Forms.FormWithDetailsDto;

  formGroup: FormGroup;
  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({});
  }

  ngOnInit() {}

  ngAfterViewInit(){
    let obs=this.views.map(x=>x.questionDetailChange);
    obs.forEach(o=>{
      o.subscribe(x=>{
        console.log(x);
      })
    });

    
  }

  ngOnChanges() {
    if (!this.formDetail) return;
    this.buildForm();
  }

  buildForm() {
    this.formGroup = this.fb.group({
      title: [this.formDetail.title],
      description: [this.formDetail.description],
    });
  }
  onQuestionDetailChange(data:Volo.Forms.Questions.QuestionDto){
    //console.log(data);
  }
}

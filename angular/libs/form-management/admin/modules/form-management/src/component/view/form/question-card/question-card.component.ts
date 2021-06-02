import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { FormModel } from '../models/models';
import * as _ from 'lodash';

export type QuestionCardProvider ={
  getQuestionsByQuestionId$(key: string): Observable<FormModel.QuestionInfo>;
  setQuestionsWithForms(data: Array<FormModel.QuestionInfo>)
}

@Component({
  selector: 'fs-question-card',
  templateUrl: 'question-card.component.html'
})
export class QuestionCardComponent implements OnInit {
  @Input() questionId: string = null;
  @Input() provider: QuestionCardProvider;

  @Output()
  removeQuestionEvent: EventEmitter<string> = new EventEmitter<string>();

  subscription: Subscription = new Subscription();
  
  formGroup: FormGroup = this.fb.group({});
  question: FormModel.QuestionInfo = null;

  updateQuestion = (data: FormModel.QuestionInfo) => {
    if(!data) return;
    this.question = data;
    this.buildForm(data);
  };

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit() {
  }

  ngOnChanges() {
    if(!this.questionId) return;
    this.subscription.add(this.provider.getQuestionsByQuestionId$(this.questionId).subscribe(
      this.updateQuestion
    ));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  buildForm(question: FormModel.QuestionInfo) {
    this.formGroup = this.fb.group({
      isRequired: question.isRequired
    });
    this.subscription.add(
      this.formGroup.valueChanges.pipe(debounceTime(500), distinctUntilChanged()).subscribe((x) => {
        let question = _.cloneDeep(this.question);
        question.isRequired = x.isRequired;
        this.provider.setQuestionsWithForms([question]);
      })
    );
  }

  removeQuestion() {
    this.removeQuestionEvent.emit(this.questionId);
  }
}

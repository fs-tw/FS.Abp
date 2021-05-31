import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { FormModel } from '../models/models';

export type QuestionCardProvider ={
  getQuestionsByQuestionId$(key: string): Observable<FormModel.QuestionInfo>;
}

@Component({
  selector: 'fs-tw-question-card',
  templateUrl: 'question-card.component.html'
})
export class QuestionCardComponent implements OnInit {
  @Input() questionId: string = null;
  @Input() provider: QuestionCardProvider;

  subscription: Subscription = null;
  question: FormModel.QuestionInfo = null;

  updateQuestion = (data: FormModel.QuestionInfo) => {
    if(!data) return;
    this.question = data;
  };

  constructor(
    //public formStateService: FormStateService,
  ) {}

  ngOnInit() {
  }

  ngOnChanges() {
    if(!this.questionId) return;
    this.ngOnDestroy();
    this.subscription.add(this.provider.getQuestionsByQuestionId$(this.questionId).subscribe(
      this.updateQuestion
    ));
  }

  ngOnDestroy() {
    if(!this.subscription) { this.subscription = new Subscription(); return; }
    this.subscription.unsubscribe();
  }
}

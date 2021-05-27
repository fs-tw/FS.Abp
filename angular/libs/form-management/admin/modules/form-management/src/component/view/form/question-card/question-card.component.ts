import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import { Volo } from '@fs-tw/form-management/proxy';
import { Observable, Subscription } from 'rxjs';
import { FormModel } from '../models/models';
import { FormStateService } from '../providers';
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

  subscription: Array<Subscription> = [];
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
    this.subscription.push(this.provider.getQuestionsByQuestionId$(this.questionId).subscribe(
      this.updateQuestion
    ));
  }

  ngOnDestroy() {
    this.subscription.forEach(x => {
      x.unsubscribe();
    });
  }
}

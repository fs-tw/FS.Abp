import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import { Volo } from '@fs-tw/form-management/proxy';
import { FormModel } from '../models/models';
import { FormStateService } from '../providers';

@Component({
  selector: 'fs-tw-question-card',
  templateUrl: 'question-card.component.html'
})
export class QuestionCardComponent implements OnInit {
  @Input() questionDetail = {} as Volo.Forms.Questions.QuestionDto;

  constructor(
    private formStateService: FormStateService,
  ) {}

  ngOnInit() {
  }

  ngOnChanges() {
    if(!this.questionDetail) return;
    let result = new FormModel.QuestionInfo(this.questionDetail);
    this.formStateService.setQuestionOne(result);
  }
}

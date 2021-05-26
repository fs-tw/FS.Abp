import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Volo } from '@fs-tw/form-management/proxy';
import { Observable } from 'rxjs';
import { CheckboxComponent } from '../checkbox.component';
import { DropdownListComponent } from '../dropdown-list.component';
import { QuestionInfoComponent } from '../question-info.component';

@Component({
  selector: 'fs-tw-question-card',
  templateUrl: 'question-card.component.html'
})
export class QuestionCardComponent implements OnInit {
  //   @ViewChild(CheckboxComponent) checkboxComponent: CheckboxComponent;
  //   @ViewChild(DropdownListComponent)
  //   dropdownListComponent: DropdownListComponent;
  //   @ViewChild('questionInfo') questionInfo: QuestionInfoComponent;

  @Input() questionDetail: Volo.Forms.Questions.QuestionDto={} as any;
  @Output()
  questionDetailChange: EventEmitter<Volo.Forms.Questions.QuestionDto> = new EventEmitter<Volo.Forms.Questions.QuestionDto>();

  constructor() {}

  ngOnInit() {
    //   this.questionDetailChange$.subscribe(x=>{
    //       console.log(x);
    //   })
  }
  ngOnChanges() {}

  ngAfterViewInit() {
    // if (this.checkboxComponent != null) {
    //     this.checkboxComponent.checkboxSubject$.subscribe((x) => {
    //         console.log(x)
    //     })
    // }
    // if (this.dropdownListComponent != null) {
    //     this.dropdownListComponent.dropdownListSubject$.subscribe((x) => {
    //         console.log(x)
    //     })
    // }
    // this.questionInfo.questionDetailChange.subscribe((x) => {
    //   console.log(x);
    // });
  }

  onQuestionDetailChange(data: Volo.Forms.Questions.QuestionDto) {
    this.questionDetail = { ...this.questionDetail, ...data };
    this.questionDetailChange.emit(this.questionDetail);
  }
  onChoicesChange(data: Volo.Forms.Choices.ChoiceDto[]) {
    this.questionDetail.choices = data;
    this.questionDetailChange.emit(this.questionDetail);
  }
}

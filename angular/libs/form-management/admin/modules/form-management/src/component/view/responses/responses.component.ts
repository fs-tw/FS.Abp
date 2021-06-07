import {
    Component,
    Injector,
    Input,
    OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Volo } from '@fs-tw/form-management/proxy';
import * as _ from 'lodash';
import { FormBuilder, FormGroup } from '@angular/forms';
  
@Component({
    selector: 'fs-responses',
    templateUrl: 'responses.component.html'
})
export class ResponsesComponent implements OnInit {
    @Input() formDetail: Volo.Forms.Forms.FormWithDetailsDto = null;
    responses: Array<Volo.Forms.Responses.FormResponseDetailedDto> = null;
    subscription: Subscription = new Subscription();
    formGroup: FormGroup = this.fb.group({});
    constructor(
      protected injector: Injector,
      private fb: FormBuilder,
      private formService: Volo.Forms.Forms.FormService,
    ) {}
  
    ngOnInit() {
    }
  
    ngOnChanges() {
        if(!this.formDetail) return;
        let input = { maxResultCount: 999 } as Volo.Forms.Responses.GetResponseListInputDto;
        this.subscription.add(this.formService.getResponsesByIdAndInput(this.formDetail.id, input).subscribe(res => {
            this.responses = res.items;
            this.buildForm();
        }));
        
    }
  
    ngOnDestroy() {
      this.subscription.unsubscribe();
    }

    buildForm() {
        let responses = this.fb.array(this.responses.map(res => {
            let questions = {
                questions: this.fb.array(this.formDetail.questions.map(((x, i) => {
                    let result = { questionType: x.questionType, isRequired: x.isRequired };
                    if (x.questionType == 4) {
                        result["choices"] = this.fb.array(x.choices.map(y =>
                            this.fb.group({
                                questionId: x.id,
                                choiceId: y.id,
                                isChecked: (res.answers.find(z => z.questionId == x.id && z.choiceId == y.id))
                                            ? true
                                            : false,
                                value: [{ value: y.value, disabled: true }, undefined]
                            })
                        ), undefined);
                    } else {
                        let findAnswer = res.answers.find(z => z.questionId == x.id);
                        let resValue = (findAnswer)
                                    ? (x.questionType == 3 || x.questionType == 5)
                                        ? findAnswer.choiceId
                                        : findAnswer.value
                                    : null;
                        result['questionId'] = x.id;
                        result['value'] = [{ value: resValue, disabled: true }, undefined];
                    };
                    return this.fb.group(result);
                })))
            };
            return this.fb.group(questions);
        }));
        this.formGroup = this.fb.group({
            responses: responses
        });
    }
}

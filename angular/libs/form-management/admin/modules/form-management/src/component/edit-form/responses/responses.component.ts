import {
    ChangeDetectorRef,
    Component,
    Injector,
    Input,
    OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Volo } from '@fs-tw/form-management/proxy';
import * as _ from 'lodash';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToasterService, ConfirmationService, Confirmation } from '@abp/ng.theme.shared';

@Component({
    selector: 'fs-responses',
    templateUrl: 'responses.component.html'
})
export class ResponsesComponent implements OnInit {
    @Input() formId: string = null;
    formDetail: Volo.Forms.Forms.FormWithDetailsDto = null;
    response: Volo.Forms.Responses.FormResponseDetailedDto = null;
    subscription: Subscription = new Subscription();
    formGroup: FormGroup = this.fb.group({});
    isLoading: boolean = true;
    totalCount: number = 0;
    pageIndex = 1;
    constructor(
      protected injector: Injector,
      private fb: FormBuilder,
      private cdr: ChangeDetectorRef,
      private toasterService: ToasterService,
      private formService: Volo.Forms.Forms.FormService,
      private responseService: Volo.Forms.Responses.ResponseService,
      private confirmationService: ConfirmationService
    ) {}
  
    ngOnInit() {
    }
  
    ngOnChanges() {
        if(!this.formId) return;
        this.isLoading = true;
        this.subscription.add(this.formService.getById(this.formId).subscribe((x) => {
            this.formDetail = _.cloneDeep(x);
            this.isLoading = false
            this.loadResponses();
        }, error => this.isLoading = false));
    }

    loadResponses() {
        this.isLoading = true;
        let input = { skipCount: (this.pageIndex - 1) * 1, maxResultCount: 1 } as Volo.Forms.Responses.GetResponseListInputDto;
        this.subscription.add(this.formService.getResponsesByIdAndInput(this.formDetail.id, input).subscribe(res => {
            if(!res || res.items.length <= 0) {
                this.totalCount = this.pageIndex = 0;
                this.response = null;
                this.isLoading = false;
                return;
            }
            this.totalCount = res.totalCount;
            this.response = _.head(res.items);
            this.isLoading = false;
            this.buildForm();
        }, error => this.isLoading = false));
    }
  
    ngOnDestroy() {
      this.subscription.unsubscribe();
    }

    previousResponses() {
        if (this.pageIndex <= 1) return;
        this.pageIndex -= 1;
        this.loadResponses();
    }

    nextResponses() {
        if(this.pageIndex >= this.totalCount) return;
        this.pageIndex += 1;
        this.loadResponses();
    }

    goToResponse() {
        this.cdr.detectChanges();
        if(this.pageIndex < 1) {
            this.pageIndex = 1;
        } else if ( this.pageIndex > this.totalCount) {
            this.pageIndex = this.totalCount;
        }
        this.loadResponses();
    }

    deleteResponse() {
        this.confirmationService.warn("Forms::Form:Responses:ResponseWillBeDeletedMsg" , "Warn")
        .subscribe(x => {
            if (x != Confirmation.Status.confirm) return;
            toDelete();
        })

        function toDelete() {
            this.subscription.add(this.responseService.deleteById(this.response.id).subscribe(x => {
                this.pageIndex = 1;
                this.toasterService.success("Forms::DeletedSuccessfully");
                this.loadResponses();
            }, error => this.toasterService.error("Forms::Error")));
        }
    }

    buildForm() {
        let questions = this.fb.array(this.formDetail.questions.map(((x, i) => {
                let result = { questionType: x.questionType, isRequired: x.isRequired };
                if (x.questionType == 4) {
                    result["choices"] = this.fb.array(x.choices.map(y =>
                        this.fb.group({
                            questionId: x.id,
                            choiceId: y.id,
                            isChecked: (this.response.answers.find(z => z.questionId == x.id && z.choiceId == y.id))
                                        ? true
                                        : false,
                            value: [{ value: y.value, disabled: true }, undefined]
                        })
                    ), undefined);
                } else {
                    let findAnswer = this.response.answers.find(z => z.questionId == x.id);
                    let resValue = (findAnswer)
                                ? (x.questionType == 3 || x.questionType == 5)
                                    ? findAnswer.choiceId
                                    : findAnswer.value
                                : null;
                    result['questionId'] = x.id;
                    result['value'] = [{ value: resValue, disabled: true }, undefined];
                };
                return this.fb.group(result);
            })));
        this.formGroup = this.fb.group({
            questions: questions
        });
    }
}

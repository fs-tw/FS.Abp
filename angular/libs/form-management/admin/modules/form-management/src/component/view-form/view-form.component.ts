import { Component, Injector, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { ActivatedRoute } from '@angular/router';
import { Volo } from '@fs-tw/form-management/proxy';
import { ToasterService } from '@abp/ng.theme.shared';
import { ConfigStateService } from '@abp/ng.core'
import { Subscription } from 'rxjs';

@Component({
  selector: 'fs-view-form',
  templateUrl: 'view-form.component.html',
})
export class ViewFormComponent implements OnInit {
    formId: string = null;
    currentUserId: string = null;
    isSubmitAnswer: boolean = false;
    responseEmail: string = null;
    responseId: string = null;
    response: Volo.Forms.Responses.FormResponseDetailedDto = null;
    subscription: Subscription = new Subscription();
    private formService: Volo.Forms.Forms.FormService = null;
    private responseService: Volo.Forms.Responses.ResponseService = null;

    constructor(
        private route: ActivatedRoute,
        private injector: Injector,
        private toasterService: ToasterService,
        private configStateService: ConfigStateService
    ) {
      this.formService = this.injector.get(Volo.Forms.Forms.FormService);
      this.responseService = this.injector.get(Volo.Forms.Responses.ResponseService);
      this.route.paramMap.subscribe(paramMap => {
          if (!paramMap.get('id')) return null;
          this.formId = paramMap.get('id');
          this.currentUserId = this.configStateService.getAll().currentUser.id;
          this.subscription.add( this.responseService.getUserFormsByUserIdByUserId(this.currentUserId).subscribe(x => {
            let result = x.items.find(y => y.form.id == this.formId).response;
            this.responseId = result.id
            this.responseEmail = result.email;
            this.loadResponses();
          }));
      });
    }

    ngOnInit() {}

    loadResponses() {
      this.isSubmitAnswer = false;
      this.subscription.add(this.responseService
        .getQuestionsWithAnswersById(this.responseId)
          .subscribe(
            (res) => {
              if(!res || res.length <= 0) {
                this.response = null;
                return;
              }
              let answers = _.flatten(res.map(x => {
                return x.answers;
              }));
              this.response = {
                userId: this.currentUserId,
                formId: this.formId,
                email: this.responseEmail,
                answers: answers
              }
            }
          )
        );
    }

    ngOnDestroy() {
      this.subscription.unsubscribe();
    }

    submitForm(data): void {
      this.isSubmitAnswer = false;
      let service =  (data.answers.filter(x => x.formResponseId).length > 0)
        ? this.responseService.updateAnswersByIdAndInput(this.responseId, data)
        : this.responseService.saveAnswersByFormIdAndInput(this.formId, data)
        this.subscription.add(service.subscribe(
        (x) => {
          this.toasterService.success('Forms::Submit');
          this.isSubmitAnswer = true;
        },
        (error) => this.toasterService.error('Forms::Error')
      ));
    }

    submitOtherResponse($event): void {
      this.loadResponses();
    }
}
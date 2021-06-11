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
import {
  ToasterService,
  ConfirmationService,
  Confirmation,
} from '@abp/ng.theme.shared';

@Component({
  selector: 'fs-responses',
  templateUrl: 'responses.component.html',
})
export class ResponsesComponent implements OnInit {
  @Input() formId: string = null;
  response: Volo.Forms.Responses.FormResponseDetailedDto = null;
  subscription: Subscription = new Subscription();
  formGroup: FormGroup = this.fb.group({});
  isLoading: boolean = true;
  totalCount: number = 0;
  pageIndex = 1;

  private formService: Volo.Forms.Forms.FormService = null;
  private responseService: Volo.Forms.Responses.ResponseService = null;

  constructor(
    protected injector: Injector,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
    private toasterService: ToasterService,
    private confirmationService: ConfirmationService
  ) {
    this.formService = this.injector.get(Volo.Forms.Forms.FormService);
    this.responseService = this.injector.get(Volo.Forms.Responses.ResponseService);
  }

  ngOnInit() {}

  ngOnChanges() {
    if (!this.formId) return;
    this.loadResponses();
  }

  loadResponses() {
    this.isLoading = true;
    let input = {
      skipCount: (this.pageIndex - 1) * 1,
      maxResultCount: 1,
    } as Volo.Forms.Responses.GetResponseListInputDto;
    this.subscription.add(
      this.formService
        .getResponsesByIdAndInput(this.formId, input)
        .subscribe(
          (res) => {
            if (!res || res.items.length <= 0) {
              this.totalCount = this.pageIndex = 0;
              this.response = null;
              this.isLoading = false;
              return;
            }
            this.totalCount = res.totalCount;
            this.response = _.head(res.items);
            this.isLoading = false;
          },
          (error) => (this.isLoading = false)
        )
    );
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
    if (this.pageIndex >= this.totalCount) return;
    this.pageIndex += 1;
    this.loadResponses();
  }

  goToResponse() {
    this.cdr.detectChanges();
    if (this.pageIndex < 1) {
      this.pageIndex = 1;
    } else if (this.pageIndex > this.totalCount) {
      this.pageIndex = this.totalCount;
    }
    this.loadResponses();
  }

  deleteResponse() {
    this.confirmationService
      .warn('Forms::Form:Responses:ResponseWillBeDeletedMsg', 'Warn')
      .subscribe((x) => {
        if (x != Confirmation.Status.confirm) return;
        toDelete();
      });

    function toDelete() {
      this.subscription.add(
        this.responseService.deleteById(this.response.id).subscribe(
          (x) => {
            this.pageIndex = 1;
            this.toasterService.success('Forms::DeletedSuccessfully');
            this.loadResponses();
          },
          (error) => this.toasterService.error('Forms::Error')
        )
      );
    }
  }

  submitForm(data): void {
    let service =  this.responseService.updateAnswersByIdAndInput(this.response.id, data);
    this.subscription.add(service.subscribe(
      (x) => {
        this.toasterService.success('Forms::Submit');
        this.loadResponses();
      },
      (error) => this.toasterService.error('Forms::Error')
    ));
  }
}

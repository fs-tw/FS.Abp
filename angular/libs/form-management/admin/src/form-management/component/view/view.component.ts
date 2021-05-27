import {
  ChangeDetectorRef,
  Component,
  Injector,
  Input,
  OnInit,
} from '@angular/core';
import { InternalStore } from '@abp/ng.core';
import { PageService } from '../../providers/page.service';
import { Volo } from '@fs-tw/form-management/proxy';
import { FormStateService } from './form/providers';
import { FormModel } from './form/models/models';

@Component({
  selector: 'fs-tw-view',
  template: `
    <abp-page [title]="'Forms::Form' | abpLocalization">
      <nz-tabset>
        <nz-tab nzTitle="{{ 'Forms::Menu:Questions' | abpLocalization }}">
          <fs-tw-form [formId]="formId"></fs-tw-form>
        </nz-tab>
        <nz-tab nzTitle="{{ 'Forms::Menu:Responses' | abpLocalization }}">
        </nz-tab>
      </nz-tabset>
    </abp-page>
  `,
})
export class ViewComponent implements OnInit {
  @Input() formId: string;

  constructor(
    protected injector: Injector,
    private formStateService: FormStateService,
    private pageService: PageService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {}

  ngOnChanges() {
    if (!this.formId) return null;
    this.loadQuestionsData();
  }

  loadQuestionsData() {
    this.pageService.getById(this.formId).subscribe((x) => {
      let result = new FormModel.FormInfo(x, x.questions);
      this.formStateService.setFormOne(result);
      this.cdr.markForCheck();
    });
  }
}

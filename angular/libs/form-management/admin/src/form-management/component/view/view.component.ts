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

@Component({
  selector: 'fs-tw-view',
  template: `
    <abp-page [title]="'Forms::Form' | abpLocalization">
      <nz-tabset>
        <nz-tab nzTitle="{{ 'Forms::Menu:Questions' | abpLocalization }}">
          <fs-tw-questions [formDetail]="formDetail"></fs-tw-questions>
          <!-- <fs-tw-questions [formDetail]="store.state"></fs-tw-questions> -->
        </nz-tab>
        <nz-tab nzTitle="{{ 'Forms::Menu:Responses' | abpLocalization }}">
        </nz-tab>
      </nz-tabset>
    </abp-page>
  `,
})
export class ViewComponent implements OnInit {
  @Input() formId: string;
  formDetail: Volo.Forms.Forms.FormWithDetailsDto;

  public store = new InternalStore({} as Volo.Forms.Forms.FormWithDetailsDto);

  constructor(
    protected injector: Injector,
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
      this.formDetail = x;
      // this.store.set(x);
      this.cdr.markForCheck();
    });
  }
}

import { ChangeDetectorRef, Component, Injector, Input, OnInit } from '@angular/core';
import { PageService } from '../../providers/page.service';
import { Volo } from '@fs-tw/form-management/proxy';

@Component({
  selector: 'fs-tw-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.less']
})
export class ViewComponent implements OnInit {
  @Input() formId: string;
  formDetail: Volo.Forms.Forms.FormWithDetailsDto;
  constructor(
    protected injector: Injector,
    private pageService: PageService,
    private cdr: ChangeDetectorRef,
  ) {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if (!this.formId) return null;
    this.loadQuestionsData();
  }

  loadQuestionsData() {
    this.pageService.getById(this.formId).subscribe(x => {
      this.formDetail = x;
      this.cdr.markForCheck();
    });
  }
}

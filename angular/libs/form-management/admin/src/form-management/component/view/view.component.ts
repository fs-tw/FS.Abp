import { ChangeDetectorRef, Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageService } from '../../providers/page.service';
import { Volo } from '@fs-tw/form-management/proxy';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.less']
})
export class ViewComponent implements OnInit {
  form: FormGroup;
  formId: string;
  formData: Volo.Forms.Forms.FormWithDetailsDto;
  constructor(
    protected injector: Injector,
    private pageService: PageService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({});
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.get('id')) return null;
      this.formId = paramMap.get('id');
      this.loadQuestionsData();
    });
  }

  ngOnInit() {
  }

  loadQuestionsData() {
    this.pageService.getById(this.formId).subscribe(x => {
      this.formData = x;
      this.buildForm();
      this.cdr.markForCheck();
    });
  }

  buildForm() {
    let formControl = { title: this.formData.title, description: this.formData.description };
    this.form.addControl('title', new FormControl(undefined));
    this.form.addControl('description', new FormControl(undefined));
    this.formData.questions.some(x => {
      this.form.addControl(x.id, new FormControl(undefined));
    });
    this.form.patchValue(formControl);
  }
}

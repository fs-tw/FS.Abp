import {
  ChangeDetectorRef,
  Component,
  Injectable,
  Injector,
  Input,
  OnInit,
} from '@angular/core';
import { PageService } from '../../providers/page.service';
import { FormStateService } from './form/providers';
import { FormModel } from './form/models/models';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ViewStateService extends FormStateService {
  mergeForm(data: FormModel.State): Array<FormModel.FormInfo> {
    return data.Forms.map(x => {
      return {
        ...x,
        questions: data.Questions.filter((y) => x.id == y.formId).map((z) => {
          return { ...z, choices: data.Choices.filter((res) => res.questionId == z.id) };
        })
      }
    });
  }
}

@Component({
  selector: 'fs-view',
  template: `
    <abp-page [title]="'Forms::Form' | abpLocalization">
      <nz-tabset>
        <nz-tab nzTitle="{{ 'Forms::Menu:Questions' | abpLocalization }}">
          <fs-form [formId]="formId" [provider]="viewStateService"></fs-form>
        </nz-tab>
        <nz-tab nzTitle="{{ 'Forms::Menu:Responses' | abpLocalization }}">
        </nz-tab>
      </nz-tabset>
    </abp-page>
  `,
  providers: [ViewStateService]
})
export class ViewComponent implements OnInit {
  @Input() formId: string;

  subscription: Subscription = new Subscription();
  constructor(
    protected injector: Injector,
    public viewStateService: ViewStateService,
    private pageService: PageService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.subscription.add(this.viewStateService.getAllDataOfDelayTime$().subscribe(x => {
      let result = this.viewStateService.mergeForm(x);
      console.log(result);
    }));
  }

  ngOnChanges() {
    if (!this.formId) return null;
    this.loadFormData();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  loadFormData() {
    this.subscription.add(this.pageService.getById(this.formId).subscribe((x) => {
      let result = new FormModel.FormInfo(x, x.questions);
      this.viewStateService.setFormOne(result);
      this.cdr.detectChanges();
    }));
  }
}

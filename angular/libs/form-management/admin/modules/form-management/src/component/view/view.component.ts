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
  mergeForm(): Array<FormModel.FormInfo> {
    return this.store.state.Forms.map(x => {
      return {
        ...x,
        questions: this.store.state.Questions.filter((y) => x.id == y.formId).map((z) => {
          return { ...z, choices: this.store.state.Choices.filter((res) => res.questionId == z.id) };
        })
      }
    });
  }
}

@Component({
  selector: 'fs-tw-view',
  template: `
    <abp-page [title]="'Forms::Form' | abpLocalization">
      <nz-tabset>
        <nz-tab nzTitle="{{ 'Forms::Menu:Questions' | abpLocalization }}">
          <fs-tw-form [formId]="formId" [provider]="viewStateService"></fs-tw-form>
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

  subscription: Subscription = new Subscription();;
  constructor(
    protected injector: Injector,
    public viewStateService: ViewStateService,
    private pageService: PageService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.subscription.add(this.viewStateService.refresh$.subscribe(x => {
      if(x) {
        let result = this.viewStateService.mergeForm();
        console.log(result);
      }
    }));
  }

  ngOnChanges() {
    if (!this.formId) return null;
    this.loadQuestionsData();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  loadQuestionsData() {
    this.pageService.getById(this.formId).subscribe((x) => {
      let result = new FormModel.FormInfo(x, x.questions);
      this.viewStateService.setFormOne(result);
      this.cdr.markForCheck();
    });
  }
}

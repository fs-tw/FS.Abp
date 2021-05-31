import {
  Component,
  Injector,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { setContributors } from '@fs-tw/theme-alain/shared/extensions';
import { FormsComponent } from '@fs-tw/form-management/admin/shared';
import { FORMS_ENTITY_ACTIONS } from './defaults/forms-entity-actions';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './main.component.html',
})
export class MainComponent implements OnInit {
  subs: Subscription = new Subscription();
  @ViewChild('formsTemplate') formsTemplate: TemplateRef<HTMLElement>;
  @ViewChild('viewTemplate') viewTemplate: TemplateRef<HTMLElement>;
  itemTemplate: TemplateRef<HTMLElement> = null;
  formId: string;
  constructor(private injector: Injector) {
    this.subs.add(
      setContributors(this.injector, FormsComponent.NAME, {
        actionContributors: FORMS_ENTITY_ACTIONS,
      }).subscribe((x) => {
        switch (x.method) {
          case 'View':
            this.onView(x.data.record.id);
            break;
        }
      })
    );
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.itemTemplate = this.formsTemplate;
  }
  onView(id: string) {
    this.formId = id;
    this.itemTemplate = this.viewTemplate;
  }
}

import {
  Component,
  Input,
  Injector,
  ContentChild
} from '@angular/core';
import { ListService, ABP, PagedResultDto } from '@abp/ng.core';
import { Observable } from 'rxjs';
import { PageSearchTemplateDirective } from './templates';
import { FormBuilder, FormGroup } from '@angular/forms';

export type EntityService<R> = {
  getList: (query: ABP.PageQueryParams) => Observable<PagedResultDto<R>>;
};

export type SearchService = {};

@Component({
  selector: 'fs-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.less']
})
export class PageComponent<R> {
  @ContentChild(PageSearchTemplateDirective) customSearchTemplate: PageSearchTemplateDirective;

  @Input() title: string;
  @Input() list: ListService;
  @Input() service: EntityService<R>;
  @Input() form: FormGroup;

  data$: Observable<PagedResultDto<R>>;

  constructor(
    private readonly injector: Injector,
    private fb: FormBuilder,
  ) {
  }

  ngOnInit() {
    this.hookToQuery();
  }

  ngOnChanges() {
    if(!this.form) {
      this.form = this.fb.group({ filter: "" });
    }
  }

  hookToQuery() {
    this.data$ = this.list.hookToQuery((query) =>{
      query = { ...query, ...this.form?.value }
      return this.service.getList(query as any);
    });
  }
}

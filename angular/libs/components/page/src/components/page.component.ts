import {
  Component,
  Input,
  Injector,
  ContentChild
} from '@angular/core';
import { ListService, ABP, PagedResultDto } from '@abp/ng.core';
import { Observable } from 'rxjs';
import { PageSearchFormTemplateDirective, PageSearchTemplateDirective } from './templates';
import { FormGroup } from '@angular/forms';

export type EntityService<R> = {
  getList: (query: ABP.PageQueryParams) => Observable<PagedResultDto<R>>;
};

@Component({
  selector: 'fs-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.less']
})
export class PageComponent<R> {
  @ContentChild(PageSearchTemplateDirective) customSearchTemplate: PageSearchTemplateDirective;
  @ContentChild(PageSearchFormTemplateDirective) customSearchFormTemplate: PageSearchFormTemplateDirective;

  @Input() title: string;
  @Input() list: ListService;
  @Input() service: EntityService<R>;
  @Input() form: FormGroup;

  data$: Observable<PagedResultDto<R>>;

  constructor(
    private readonly injector: Injector,
  ) {
  }

  ngOnInit() {
    this.hookToQuery();
  }

  hookToQuery() {
    this.data$ = this.list.hookToQuery((query) =>{
      return this.service.getList(query as any);
    });
  }
}

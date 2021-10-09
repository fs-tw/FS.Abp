import {
  Component,
  OnInit,
  Input,
  Injector
} from '@angular/core';
import { ListService, ABP, PagedResultDto } from '@abp/ng.core';
import { Observable } from 'rxjs';

export type EntityService<T> = {
  getList: (query: ABP.PageQueryParams) => Observable<PagedResultDto<T>>;
};

@Component({
  selector: 'fs-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.less']
})
export class PageComponent<T> {
  @Input() title: string;
  @Input() list: ListService;
  @Input() service: EntityService<T>;

  data$: Observable<PagedResultDto<T>>;

  constructor(
    private readonly injector: Injector,
  ) {
  }

  ngOnInit() {
    this.hookToQuery();
  }

  hookToQuery() {
    this.data$ = this.list.hookToQuery((query) =>{
      return this.service.getList(query);
    });
  }


  
}

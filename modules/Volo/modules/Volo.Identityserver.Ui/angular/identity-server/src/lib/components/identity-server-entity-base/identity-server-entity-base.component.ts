import { Component, OnInit, Input } from '@angular/core';
import { ListService, ABP, PagedResultDto } from '@abp/ng.core';
import { Observable } from 'rxjs';

export type EntityService<T> = {
  getList: (query: ABP.PageQueryParams) => Observable<PagedResultDto<T>>;
};

@Component({
  selector: 'abp-identity-server-entity-base',
  templateUrl: './identity-server-entity-base.component.html',
})
export class IdentityServerEntityBaseComponent<T> implements OnInit {
  @Input() entityName: string;
  @Input() list: ListService;
  @Input() service: EntityService<T>;

  data$: Observable<PagedResultDto<T>>;
  totalCount;

  constructor() {}

  ngOnInit() {
    this.hookToQuery();
  }

  private hookToQuery() {
    this.data$ = this.list.hookToQuery(query => this.service.getList(query));
  }
}

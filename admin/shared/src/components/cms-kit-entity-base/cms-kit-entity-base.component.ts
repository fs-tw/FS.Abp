import {
  Component,
  OnInit,
  Input,
  Injector
} from '@angular/core';
import { ListService, ABP, PagedResultDto } from '@abp/ng.core';
import { Observable } from 'rxjs';

export type EntityService<T> = {
  getListByInput: (query: ABP.PageQueryParams) => Observable<PagedResultDto<T>>;
};

@Component({
  selector: 'fs-tw-cms-kit-entity-base',
  templateUrl: './cms-kit-entity-base.component.html',
  styleUrls: ['./cms-kit-entity-base.component.less'],
})
export class CmsKitEntityBaseComponent<T> implements OnInit {
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
      return this.service.getListByInput(query);
    });
  }

}

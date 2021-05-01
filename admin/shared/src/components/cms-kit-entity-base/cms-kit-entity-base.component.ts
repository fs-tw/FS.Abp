import {
  Component,
  OnInit,
  Input,
  Injector,
  EventEmitter,
  Output,
} from '@angular/core';
import { ListService, ABP, PagedResultDto } from '@abp/ng.core';
import { Observable, Subject } from 'rxjs';
import { EXTENSIONS_IDENTIFIER } from '@abp/ng.theme.shared/extensions';
import { ActionItem, ExtensionsService } from '@fs-tw/cms-kit-management/config';
import { Volo } from '@fs-tw/cms-kit-management/proxy';

export type EntityService<T> = {
  getListByInput: (query: ABP.PageQueryParams) => Observable<PagedResultDto<T>>;
};

@Component({
  selector: 'fs-tw-cms-kit-entity-base',
  templateUrl: './cms-kit-entity-base.component.html',
  styleUrls: ['./cms-kit-entity-base.component.less'],
})
export class CmsKitEntityBaseComponent<T> implements OnInit {
  @Input() entityName: string;
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

  private hookToQuery() {
    this.data$ = this.list.hookToQuery((query) =>
      this.service.getListByInput(query)
    );
  }
}

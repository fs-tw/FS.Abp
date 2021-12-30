import {
  Component,
  Injector,
  OnInit,
  Inject,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Fs } from '@fs-tw/abp/audit-logging/proxy/audit-logging';
import { Observable, of, Subscription } from 'rxjs';
import { ListService, PagedResultDto } from '@abp/ng.core';
import { NzTableComponent } from 'ng-zorro-antd/table';
import { QueryStreamCreatorCallback, ABP } from '@abp/ng.core';

@Component({
  selector: 'fs-tw-logs',
  templateUrl: './logs.component.html',
  providers: [ListService],
})
export class LogsComponent implements OnInit {
  subs: Subscription = new Subscription();

  data$: Observable<PagedResultDto<Fs.Abp.AuditLogging.Dtos.AuditLogDto>>;
  search: string;

  searchChange(arg) {
    this.listService.get();
  }

  @ViewChild('table')
  table: NzTableComponent<Fs.Abp.AuditLogging.Dtos.AuditLogDto>;

  listOfColumn = [
    {
      name: 'userName',
      title: 'User Name',
      sortable: true,
      priority: false,
    },
    {
      name: 'url',
      title: 'Url',
      sortable: true,
      priority: false,
    },
    {
      name: 'executionTime',
      title: 'Execution Time',
      sortable: true,
      priority: false,
    },
  ];

  //selectedData: Fs.Abp.AuditLogging.AuditLogDto;
  constructor(
    private readonly injector: Injector,

    @Inject(Fs.Abp.AuditLogging.AuditLogMediator.AuditLogMediatorQueryService)
    private queryService: Fs.Abp.AuditLogging.AuditLogMediator.AuditLogMediatorQueryService,

    public listService: ListService
  ) {
    // this.service = injector.get(Fs.Abp.AuditLogging.AuditLogsService);
    // this.service.getFilters().subscribe(x => {
    //   if(!x) return;
    //   this.filtersOptions = { "全部": { applicationName: null, clientName: null }, ...x };
    //   this.selectedFiltersOption = this.filtersOptions.全部;
    //   this.loadData();
    // });
  }

  ngOnInit() {
    this.hookToQuery();
  }
  hookToQuery() {
    let query: QueryStreamCreatorCallback<
      Fs.Abp.AuditLogging.Dtos.AuditLogDto,
      ABP.PageQueryParams
    > = (q) => {
      
      let request: Fs.Abp.AuditLogging.AuditLogMediator.ListAuditLogByAbpRouteName =
        {
          ...{
            abpRouteName: this.search,
            executionTime: null,
            maxResultCount: 30,
            skipCount: 0,
          },
          ...q,
        };
     this.queryService.listAuditLogByAbpRouteName({} as any);
      return  this.queryService.listAuditLogByAbpRouteName({} as any);
    };

    this.listService.get();
    this.data$ = this.listService.hookToQuery(query);
  }
}

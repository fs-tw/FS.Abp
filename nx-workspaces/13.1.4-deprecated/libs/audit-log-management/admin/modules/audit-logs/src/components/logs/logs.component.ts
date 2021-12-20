import { Component, Injector, OnInit } from '@angular/core';
import { Fs } from '@fs-tw/audit-log-management/proxy/auditLogging';
import { Observable, Subscription } from 'rxjs';
import { PagedResultDto } from '@abp/ng.core';

@Component({
  selector: 'fs-tw-logs',
  templateUrl: './logs.component.html',
})
export class LogsComponent implements OnInit {
  subs: Subscription = new Subscription();
  service: Fs.Abp.AuditLogging.AuditLogsService;
  filtersOptions: Record<string, Fs.Abp.AuditLogging.AuditLoggingFilter>;
  selectedFiltersOption: Fs.Abp.AuditLogging.AuditLoggingFilter;
  data$: Observable<PagedResultDto<Fs.Abp.AuditLogging.AuditLogDto>>;
  
  listOfColumn = [
    {
      title: 'User Name',
      compare: null,
      priority: false
    },
    {
      title: 'Url',
      compare: null,
      priority: false
    },
    {
      title: 'Execution Time',
      compare: null,
      priority: false
    }
  ];
  
  selectedData: Fs.Abp.AuditLogging.AuditLogDto;
  constructor(
    private readonly injector: Injector,
  ) {
    this.service = injector.get(Fs.Abp.AuditLogging.AuditLogsService);
    this.service.getFilters().subscribe(x => {
      if(!x) return;
      this.filtersOptions = { "全部": { applicationName: null, clientName: null }, ...x };
      this.selectedFiltersOption = this.filtersOptions.全部;
      this.loadData();
    });
  }

  ngOnInit(): void {
  }

  loadData() {
    let input = {
      applicationName: this.selectedFiltersOption.applicationName,
      clientName: this.selectedFiltersOption.clientName
    } as Fs.Abp.AuditLogging.GetAuditLogListInput;
    this.data$ = this.service.getDetailsListByInput(input);
  }
}

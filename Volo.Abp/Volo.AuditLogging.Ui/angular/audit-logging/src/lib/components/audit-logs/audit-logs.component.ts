import { ListService } from '@abp/ng.core';
import { collapse, fadeIn } from '@abp/ng.theme.shared';
import { EXTENSIONS_IDENTIFIER } from '@abp/ng.theme.shared/extensions';
import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { GetAuditLogs } from '../../actions/audit-logging.actions';
import { HTTP_METHODS, HTTP_STATUS_CODES } from '../../constants/http';
import { eAuditLoggingComponents } from '../../enums/components';
import { AuditLogsService } from '../../proxy/audit-logging/audit-logs.service';
import { AuditLogDto, GetAuditLogListDto } from '../../proxy/audit-logging/models';
import { AuditLoggingState } from '../../states/audit-logging.state';

@Component({
  selector: 'abp-audit-logs',
  templateUrl: './audit-logs.component.html',
  animations: [collapse, trigger('fadeIn', [transition('* <=> *', useAnimation(fadeIn))])],
  providers: [
    ListService,
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: eAuditLoggingComponents.AuditLogs,
    },
  ],
})
export class AuditLogsComponent implements OnInit {
  @Select(AuditLoggingState.get)
  datas$: Observable<AuditLogDto[]>;

  @Select(AuditLoggingState.getTotalCount)
  totalCount$: Observable<number>;

  selected = {} as AuditLogDto;

  pageQuery = { maxResultCount: 10, skipCount: 0 } as GetAuditLogListDto;

  filterForm: FormGroup;

  httpMethods = HTTP_METHODS;

  httpStatusCodes = HTTP_STATUS_CODES;

  modalVisible: boolean = false;

  collapseActionStates = [true];

  collapseChangeStates = [true];

  sortOrder: string = '';

  sortKey: string = '';

  selectedTab = 'audit-logs';

  constructor(
    public readonly list: ListService<GetAuditLogListDto>,
    private service: AuditLogsService,
    private store: Store,
  ) {}

  ngOnInit() {
    this.hookToQuery();
  }

  private hookToQuery() {
    this.list
      .hookToQuery(query =>
        this.store.dispatch(
          new GetAuditLogs({
            ...this.pageQuery,
            ...(this.pageQuery.minExecutionDuration === null && {
              minExecutionDuration: undefined,
            }),
            ...(this.pageQuery.maxExecutionDuration === null && {
              maxExecutionDuration: undefined,
            }),
            ...query,
          }),
        ),
      )
      .subscribe();
  }

  openModal(id: string) {
    this.service
      .get(id)
      .pipe(take(1))
      .subscribe(log => {
        this.selected = log;
        this.modalVisible = true;
      });
  }

  httpCodeClass(httpStatusCode: number): string {
    switch (httpStatusCode.toString()[0]) {
      case '2':
        return 'badge-success';
      case '3':
        return 'badge-warning';
      case '4':
      case '5':
        return 'badge-danger';
      default:
        return 'badge-light';
    }
  }

  httpMethodClass(httpMethod: string): string {
    switch (httpMethod) {
      case 'GET':
        return 'badge-dark';
      case 'POST':
        return 'badge-success';
      case 'DELETE':
        return 'badge-danger';
      case 'PUT':
        return 'badge-warning';
      default:
        return '';
    }
  }
}

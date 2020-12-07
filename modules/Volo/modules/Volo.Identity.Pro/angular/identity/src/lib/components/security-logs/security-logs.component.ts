import { ListService, PagedResultDto } from '@abp/ng.core';
import { DateAdapter, EXTENSIONS_IDENTIFIER } from '@abp/ng.theme.shared/extensions';
import { Component, OnInit } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { eIdentityComponents } from '../../enums/components';
import { IdentitySecurityLogService } from '../../proxy/identity/identity-security-log.service';
import {
  GetIdentitySecurityLogListInput,
  IdentitySecurityLogDto,
} from '../../proxy/identity/models';

@Component({
  selector: 'abp-security-logs',
  templateUrl: './security-logs.component.html',
  providers: [
    ListService,
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: eIdentityComponents.SecurityLogs,
    },
    { provide: NgbDateAdapter, useClass: DateAdapter },
  ],
})
export class SecurityLogsComponent implements OnInit {
  data: PagedResultDto<IdentitySecurityLogDto> = { items: [], totalCount: 0 };

  filter = {} as GetIdentitySecurityLogListInput;

  constructor(public readonly list: ListService, private service: IdentitySecurityLogService) {}

  ngOnInit(): void {
    this.hookToQuery();
  }

  private hookToQuery() {
    this.list
      .hookToQuery(query =>
        this.service.getList({
          ...query,
          ...this.filter,
        }),
      )
      .subscribe(res => (this.data = res));
  }
}

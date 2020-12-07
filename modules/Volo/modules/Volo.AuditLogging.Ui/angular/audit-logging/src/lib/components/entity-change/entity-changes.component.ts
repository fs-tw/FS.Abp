import { ListService, mapEnumToOptions, PagedResultDto, TrackByService } from '@abp/ng.core';
import { DateAdapter, EXTENSIONS_IDENTIFIER } from '@abp/ng.theme.shared/extensions';
import { AfterViewInit, ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { eAuditLoggingComponents } from '../../enums/components';
import { AuditLogsService } from '../../proxy/audit-logging/audit-logs.service';
import { EntityChangeDto } from '../../proxy/audit-logging/models';
import { EntityChangeType } from '../../proxy/auditing/entity-change-type.enum';

@Component({
  selector: 'abp-entity-changes',
  templateUrl: './entity-changes.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    ListService,
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: eAuditLoggingComponents.EntityChanges,
    },
    { provide: NgbDateAdapter, useClass: DateAdapter },
  ],
})
export class EntityChangesComponent implements AfterViewInit {
  form = this.fb.group({
    entityChangeType: [''],
    entityTypeFullName: [''],
    startDate: [''],
    endDate: [''],
  });

  private response = { items: [], totalCount: 0 } as PagedResultDto<EntityChangeDto>;

  get data() {
    return this.response.items;
  }

  get count() {
    return this.response.totalCount;
  }

  changeType = EntityChangeType;

  changeTypes = mapEnumToOptions(EntityChangeType);

  constructor(
    public readonly list: ListService,
    private fb: FormBuilder,
    private auditLogsService: AuditLogsService,
    public readonly track: TrackByService,
  ) {}

  ngAfterViewInit() {
    this.hookToQuery();
  }

  private hookToQuery() {
    this.list
      .hookToQuery(query =>
        this.auditLogsService.getEntityChanges({ ...this.form.value, ...query }),
      )
      .subscribe(res => (this.response = res));
  }

  handleSubmit() {
    this.list.get();
  }
}

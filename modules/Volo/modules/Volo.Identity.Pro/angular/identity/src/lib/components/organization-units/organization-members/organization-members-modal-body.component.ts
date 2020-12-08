import { ABP, ListService, PagedResultDto } from '@abp/ng.core';
import { Component, Input, OnInit } from '@angular/core';
import { IdentityUserService } from '../../../proxy/identity/identity-user.service';
import { GetIdentityUsersInput, IdentityUserDto } from '../../../proxy/identity/models';

@Component({
  selector: 'abp-organization-members-modal-body',
  template: `
    <div id="data-tables-table-filter" class="data-tables-filter">
      <div class="input-group">
        <input
          type="search"
          class="form-control"
          [placeholder]="'AbpUi::PagerSearch' | abpLocalization"
          [(ngModel)]="list.filter"
        />
        <div class="input-group-append">
          <button class="btn btn-sm btn-primary" (click)="list.get()">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
    </div>

    <div class="card">
      <abp-extensible-table
        actionsText=""
        [data]="allUnits.items"
        [recordsTotal]="allUnits.totalCount"
        [actionsColumnWidth]="38"
        [actionsTemplate]="customAction"
        [list]="list"
      ></abp-extensible-table>
    </div>

    <ng-template #customAction let-row>
      <input
        type="checkbox"
        [(ngModel)]="checkedUnits[row.id]"
        [disabled]="isCheckboxDisabled(row.id)"
      />
    </ng-template>
  `,
  providers: [ListService],
})
export class OrganizationMembersModalBodyComponent implements OnInit {
  @Input() checkedUnits: ABP.Dictionary<boolean>;
  @Input() isCheckboxDisabled: (id: string) => boolean;

  allUnits = { items: [] } as PagedResultDto<IdentityUserDto>;

  constructor(
    public readonly list: ListService<GetIdentityUsersInput>,
    private userService: IdentityUserService,
  ) {}

  ngOnInit() {
    this.hookToQuery();
  }

  private hookToQuery() {
    this.list
      .hookToQuery(query => this.userService.getList(query))
      .subscribe(response => {
        this.allUnits = response;
      });
  }
}

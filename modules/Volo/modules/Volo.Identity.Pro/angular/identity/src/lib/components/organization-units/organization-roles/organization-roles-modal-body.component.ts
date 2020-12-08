import { ABP, ListService, PagedResultDto } from '@abp/ng.core';
import { Component, Input, OnInit } from '@angular/core';
import { IdentityRoleService } from '../../../proxy/identity/identity-role.service';
import { GetIdentityRoleListInput, IdentityRoleDto } from '../../../proxy/identity/models';

@Component({
  selector: 'abp-organization-roles-modal-body',
  template: `
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
export class OrganizationRolesModalBodyComponent implements OnInit {
  @Input() checkedUnits: ABP.Dictionary<boolean>;
  @Input() isCheckboxDisabled: (id: string) => boolean;

  allUnits = { items: [] } as PagedResultDto<IdentityRoleDto>;

  constructor(
    public readonly list: ListService<GetIdentityRoleListInput>,
    private roleService: IdentityRoleService,
  ) {}

  ngOnInit() {
    this.hookToQuery();
  }

  private hookToQuery() {
    this.list
      .hookToQuery(query => this.roleService.getList(query))
      .subscribe(response => {
        this.allUnits = response;
      });
  }
}

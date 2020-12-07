import { ABP, ListService, PagedResultDto } from '@abp/ng.core';
import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';
import {
  Component,
  InjectionToken,
  Injector,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { finalize } from 'rxjs/operators';
import {
  IdentityRoleDto,
  IdentityUserDto,
  OrganizationUnitWithDetailsDto,
} from '../../../proxy/identity/models';
import { OrganizationUnitService } from '../../../proxy/identity/organization-unit.service';

export interface OrganizationUnitConfig {
  getCurrentUnitsMethodName: string;
  addUnitsMethodName: string;
  addUnitsBodyPropName: string;
  deleteMethodName: string;
  deletionLocalizationKey: string;
}

export const ORGANIZATION_UNIT_CONFIG = new InjectionToken<any>('ORGANIZATION_UNIT_CONFIG');

@Component({
  template: '',
})
export class AbstractOrganizationUnitComponent<T = IdentityUserDto | IdentityRoleDto>
  implements OnChanges {
  @Input()
  selectedOrganizationUnit: OrganizationUnitWithDetailsDto;

  currentOrganizationUnits = { items: [] } as PagedResultDto<T>;

  checkedUnits = {} as ABP.Dictionary<boolean>;

  isModalVisible: boolean;

  isModalBusy: boolean;

  public readonly list: ListService;
  protected readonly organizationUnitService: OrganizationUnitService;
  protected readonly confirmation: ConfirmationService;
  protected readonly config: OrganizationUnitConfig;

  constructor(protected injector: Injector) {
    this.list = injector.get(ListService);
    this.list.maxResultCount = 1000;
    this.organizationUnitService = injector.get(OrganizationUnitService);
    this.confirmation = injector.get(ConfirmationService);
    this.config = injector.get(ORGANIZATION_UNIT_CONFIG, {});
  }

  ngOnChanges({ selectedOrganizationUnit }: SimpleChanges) {
    if (selectedOrganizationUnit?.firstChange) {
      this.hookToQuery();
    } else if (selectedOrganizationUnit?.currentValue) {
      this.list.get();
    }
  }

  private hookToQuery() {
    this.list
      .hookToQuery(query =>
        this.organizationUnitService[this.config.getCurrentUnitsMethodName](
          this.selectedOrganizationUnit.id,
          query,
        ),
      )
      .subscribe((response: PagedResultDto<T>) => {
        this.currentOrganizationUnits = response;

        this.checkedUnits = {};
        response.items.forEach((item: any) => {
          this.checkedUnits[item.id] = true;
        });
      });
  }

  addUnits() {
    this.isModalBusy = true;
    this.organizationUnitService[this.config.addUnitsMethodName](this.selectedOrganizationUnit.id, {
      [this.config.addUnitsBodyPropName]: Object.keys(this.checkedUnits),
    })
      .pipe(finalize(() => (this.isModalBusy = false)))
      .subscribe(() => {
        this.isModalVisible = false;
        this.list.get();
      });
  }

  delete(unitId: string, unitName: string) {
    this.confirmation
      .warn(this.config.deletionLocalizationKey, 'AbpIdentity::AreYouSure', {
        messageLocalizationParams: [unitName, this.selectedOrganizationUnit.displayName],
      })
      .subscribe((status: Confirmation.Status) => {
        if (status === Confirmation.Status.confirm) {
          this.organizationUnitService[this.config.deleteMethodName](
            this.selectedOrganizationUnit.id,
            unitId,
          ).subscribe(() => this.list.get());
        }
      });
  }

  openModal() {
    this.isModalVisible = true;
  }

  isCheckboxDisabled = (id: string): boolean => {
    return this.currentOrganizationUnits.items.findIndex((item: any) => item.id === id) > -1;
  };
}

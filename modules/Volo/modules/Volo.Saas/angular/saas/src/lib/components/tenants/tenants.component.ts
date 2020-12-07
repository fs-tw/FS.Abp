import { ListService } from '@abp/ng.core';
import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';
import {
  EXTENSIONS_IDENTIFIER,
  FormPropData,
  generateFormFromProps,
} from '@abp/ng.theme.shared/extensions';
import { Component, Injector, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { finalize, switchMap, take, tap } from 'rxjs/operators';
import {
  CreateTenant,
  DeleteTenant,
  GetEditions,
  GetTenants,
  UpdateTenant,
} from '../../actions/saas.actions';
import { eSaasComponents } from '../../enums/components';
import {
  EditionDto,
  GetEditionsInput,
  GetTenantsInput,
  SaasTenantDto,
} from '../../proxy/host/dtos/models';
import { TenantService } from '../../proxy/host/tenant.service';
import { SaasState } from '../../states/saas.state';

interface SelectedModalContent {
  type: 'saveConnStr' | 'saveTenant';
  title: string;
  template: TemplateRef<any>;
}

@Component({
  selector: 'abp-tenants',
  templateUrl: './tenants.component.html',
  providers: [
    ListService,
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: eSaasComponents.Tenants,
    },
  ],
})
export class TenantsComponent implements OnInit {
  @Select(SaasState.getTenants)
  tenants$: Observable<SaasTenantDto[]>;

  @Select(SaasState.getTenantsTotalCount)
  totalCount$: Observable<number>;

  @Select(SaasState.getEditions)
  editions$: Observable<EditionDto[]>;

  selected: SaasTenantDto;

  tenantForm: FormGroup;

  defaultConnectionStringForm: FormGroup;

  defaultConnectionString: string;

  isModalVisible: boolean;

  selectedModalContent = {} as SelectedModalContent;

  visibleFeatures: boolean = false;

  providerKey: string;

  // tslint:disable-next-line: variable-name
  _useSharedDatabase: boolean;

  modalBusy: boolean = false;

  @ViewChild('tenantModalTemplate')
  tenantModalTemplate: TemplateRef<any>;

  @ViewChild('connectionStringModalTemplate')
  connectionStringModalTemplate: TemplateRef<any>;

  get useSharedDatabase(): boolean {
    return this.defaultConnectionStringForm.get('useSharedDatabase').value;
  }

  get connectionString(): string {
    return this.defaultConnectionStringForm.get('defaultConnectionString').value;
  }

  get hasSelectedTenant(): boolean {
    return Boolean(this.selected.id);
  }

  get isDisabledSaveButton(): boolean {
    if (!this.selectedModalContent) return false;

    if (
      this.selectedModalContent.type === 'saveConnStr' &&
      this.defaultConnectionStringForm &&
      this.defaultConnectionStringForm.invalid
    ) {
      return true;
    } else if (
      this.selectedModalContent.type === 'saveTenant' &&
      this.tenantForm &&
      this.tenantForm.invalid
    ) {
      return true;
    } else {
      return false;
    }
  }

  onVisibleFeaturesChange = (value: boolean) => {
    this.visibleFeatures = value;
  };

  constructor(
    public readonly list: ListService<GetTenantsInput>,
    private confirmationService: ConfirmationService,
    private tenantService: TenantService,
    private fb: FormBuilder,
    private store: Store,
    private injector: Injector,
  ) {}

  ngOnInit() {
    this.hookToQuery();
  }

  private hookToQuery() {
    this.list.hookToQuery(query => this.store.dispatch(new GetTenants(query))).subscribe();
  }

  private createTenantForm() {
    this.store
      .select(SaasState.getEditions)
      .pipe(
        switchMap(editions =>
          editions.length
            ? of(editions)
            : this.store.dispatch(new GetEditions({ maxResultCount: 1000 } as GetEditionsInput)),
        ),
      )
      .subscribe(() => {
        const data = new FormPropData(this.injector, this.selected);
        this.tenantForm = generateFormFromProps(data);
      });
  }

  private createDefaultConnectionStringForm() {
    this.defaultConnectionStringForm = this.fb.group({
      useSharedDatabase: this._useSharedDatabase,
      defaultConnectionString: this.defaultConnectionString || '',
    });
  }

  openModal(title: string, template: TemplateRef<any>, type: 'saveConnStr' | 'saveTenant') {
    this.selectedModalContent = {
      title,
      template,
      type,
    };

    this.isModalVisible = true;
  }

  onEditConnectionString(id: string) {
    this.tenantService
      .get(id)
      .pipe(
        tap(selectedTenant => (this.selected = selectedTenant)),
        switchMap(() => this.tenantService.getDefaultConnectionString(id)),
      )
      .subscribe(fetchedConnectionString => {
        this._useSharedDatabase = fetchedConnectionString ? false : true;
        this.defaultConnectionString = fetchedConnectionString ? fetchedConnectionString : '';
        this.createDefaultConnectionStringForm();
        this.openModal(
          'Saas::ConnectionStrings',
          this.connectionStringModalTemplate,
          'saveConnStr',
        );
      });
  }

  onAddTenant() {
    this.selected = {} as SaasTenantDto;
    this.createTenantForm();
    this.openModal('Saas::NewTenant', this.tenantModalTemplate, 'saveTenant');
  }

  onEditTenant(id: string) {
    this.tenantService.get(id).subscribe(selectedTenant => {
      this.selected = selectedTenant;
      this.createTenantForm();
      this.openModal('Saas::Edit', this.tenantModalTemplate, 'saveTenant');
    });
  }

  save() {
    const { type } = this.selectedModalContent;
    if (!type) return;
    if (type === 'saveTenant') this.saveTenant();
    else if (type === 'saveConnStr') this.saveConnectionString();
  }

  saveConnectionString() {
    if (this.modalBusy) return;

    this.modalBusy = true;
    if (this.useSharedDatabase || (!this.useSharedDatabase && !this.connectionString)) {
      this.tenantService
        .deleteDefaultConnectionString(this.selected.id)
        .pipe(
          take(1),
          finalize(() => (this.modalBusy = false)),
        )
        .subscribe(() => {
          this.isModalVisible = false;
        });
    } else {
      this.tenantService
        .updateDefaultConnectionString(this.selected.id, this.connectionString)
        .pipe(
          take(1),
          finalize(() => (this.modalBusy = false)),
        )
        .subscribe(() => {
          this.isModalVisible = false;
        });
    }
  }

  saveTenant() {
    if (!this.tenantForm.valid || this.modalBusy) return;
    this.modalBusy = true;

    this.store
      .dispatch(
        this.selected.id
          ? new UpdateTenant({ ...this.selected, ...this.tenantForm.value, id: this.selected.id })
          : new CreateTenant(this.tenantForm.value),
      )
      .pipe(finalize(() => (this.modalBusy = false)))
      .subscribe(() => {
        this.list.get();
        this.isModalVisible = false;
      });
  }

  delete(id: string, name: string) {
    this.confirmationService
      .warn('Saas::TenantDeletionConfirmationMessage', 'Saas::AreYouSure', {
        messageLocalizationParams: [name],
      })
      .subscribe((status: Confirmation.Status) => {
        if (status === Confirmation.Status.confirm) {
          this.store.dispatch(new DeleteTenant(id)).subscribe(() => this.list.get());
        }
      });
  }

  onSharedDatabaseChange(value: boolean) {
    if (!value) {
      setTimeout(() => {
        const defaultConnectionString = document.getElementById(
          'defaultConnectionString',
        ) as HTMLInputElement;
        if (defaultConnectionString) {
          defaultConnectionString.focus();
        }
      }, 0);
    }
  }

  openFeaturesModal(providerKey: string) {
    this.providerKey = providerKey;
    setTimeout(() => {
      this.visibleFeatures = true;
    }, 0);
  }
}

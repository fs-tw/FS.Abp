import { ListService } from '@abp/ng.core';
import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';
import {
  EXTENSIONS_IDENTIFIER,
  FormPropData,
  generateFormFromProps,
} from '@abp/ng.theme.shared/extensions';
import { Component, Injector, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { finalize, take } from 'rxjs/operators';
import { CreateRole, DeleteRole, GetRoles, UpdateRole } from '../../actions/identity.actions';
import { eIdentityComponents } from '../../enums/components';
import { IdentityRoleService } from '../../proxy/identity/identity-role.service';
import { GetIdentityRoleListInput, IdentityRoleDto } from '../../proxy/identity/models';
import { IdentityState } from '../../states/identity.state';

@Component({
  selector: 'abp-roles',
  templateUrl: './roles.component.html',
  providers: [
    ListService,
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: eIdentityComponents.Roles,
    },
  ],
})
export class RolesComponent implements OnInit {
  @Select(IdentityState.getRoles)
  data$: Observable<IdentityRoleDto[]>;

  @Select(IdentityState.getRolesTotalCount)
  totalCount$: Observable<number>;

  form: FormGroup;

  selected: IdentityRoleDto;

  isModalVisible: boolean;

  visiblePermissions: boolean = false;

  providerKey: string;

  modalBusy: boolean = false;

  visibleClaims: boolean = false;

  claimSubject = {} as { id: string; type: 'roles' | 'users' };

  @ViewChild('modalContent')
  modalContent: TemplateRef<any>;

  onVisiblePermissionChange = (value: boolean) => {
    this.visiblePermissions = value;
  };

  constructor(
    public readonly list: ListService<GetIdentityRoleListInput>,
    protected confirmationService: ConfirmationService,
    protected roleService: IdentityRoleService,
    protected store: Store,
    protected injector: Injector,
  ) {}

  private createForm() {
    const data = new FormPropData(this.injector, this.selected);
    this.form = generateFormFromProps(data);
  }

  private hookToQuery() {
    this.list.hookToQuery(query => this.store.dispatch(new GetRoles(query))).subscribe();
  }

  ngOnInit() {
    this.hookToQuery();
  }

  openModal() {
    this.createForm();
    this.isModalVisible = true;
  }

  onAdd() {
    this.selected = {} as IdentityRoleDto;
    this.openModal();
  }

  onEdit(id: string) {
    this.roleService
      .get(id)
      .pipe(take(1))
      .subscribe(selectedRole => {
        this.selected = selectedRole;
        this.openModal();
      });
  }

  save() {
    if (!this.form.valid) return;
    this.modalBusy = true;

    this.store
      .dispatch(
        this.selected.id
          ? new UpdateRole({
              ...this.selected,
              ...this.form.value,
              id: this.selected.id,
              concurrencyStamp: this.selected.concurrencyStamp,
            })
          : new CreateRole(this.form.value),
      )
      .pipe(finalize(() => (this.modalBusy = false)))
      .subscribe(() => {
        this.list.get();
        this.isModalVisible = false;
      });
  }

  delete(id: string, name: string) {
    this.confirmationService
      .warn('AbpIdentity::RoleDeletionConfirmationMessage', 'AbpIdentity::AreYouSure', {
        messageLocalizationParams: [name],
      })
      .subscribe((status: Confirmation.Status) => {
        if (status === Confirmation.Status.confirm) {
          this.store.dispatch(new DeleteRole(id)).subscribe(() => this.list.get());
        }
      });
  }

  onManageClaims(id: string) {
    this.claimSubject = {
      id,
      type: 'roles',
    };

    this.visibleClaims = true;
  }

  openPermissionsModal(providerKey: string) {
    this.providerKey = providerKey;
    setTimeout(() => {
      this.visiblePermissions = true;
    }, 0);
  }
}

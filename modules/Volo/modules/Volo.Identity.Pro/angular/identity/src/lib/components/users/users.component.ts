import { BaseNode, TreeAdapter } from '@abp/ng.components/tree';
import {
  ConfigStateService,
  generatePassword,
  ListService,
  mapEnumToOptions,
  PagedResultDto,
} from '@abp/ng.core';
import {
  Confirmation,
  ConfirmationService,
  getPasswordValidators,
  ToasterService,
} from '@abp/ng.theme.shared';
import {
  EXTENSIONS_IDENTIFIER,
  FormPropData,
  generateFormFromProps,
} from '@abp/ng.theme.shared/extensions';
import {
  Component,
  Injector,
  OnInit,
  TemplateRef,
  TrackByFunction,
  ViewChild,
} from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { finalize, pluck, switchMap, take, tap } from 'rxjs/operators';
import snq from 'snq';
import {
  CreateUser,
  DeleteUser,
  GetUserRoles,
  GetUsers,
  UnlockUser,
  UpdateUser,
} from '../../actions/identity.actions';
import { eIdentityComponents } from '../../enums/components';
import { identityTwoFactorBehaviourOptions } from '../../enums/two-factor-behaviour';
import { IdentityUserService } from '../../proxy/identity/identity-user.service';
import {
  GetIdentityUsersInput,
  IdentityRoleDto,
  IdentityUserDto,
  OrganizationUnitDto,
  OrganizationUnitWithDetailsDto,
} from '../../proxy/identity/models';
import { IdentityState } from '../../states/identity.state';

enum UserLockDurationType {
  Second = 1,
  Minute = 60,
  Hour = 60 * 60,
  Day = 60 * 60 * 24,
  Month = 60 * 60 * 24 * 30,
  Year = 60 * 60 * 24 * 365,
}

@Component({
  selector: 'abp-users',
  templateUrl: './users.component.html',
  providers: [
    ListService,
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: eIdentityComponents.Users,
    },
  ],
  styles: [
    `
      .mh-35 {
        max-height: 35px;
      }
    `,
  ],
})
export class UsersComponent implements OnInit {
  @Select(IdentityState.getUsers)
  data$: Observable<IdentityUserDto[]>;

  @Select(IdentityState.getUsersTotalCount)
  totalCount$: Observable<number>;

  @ViewChild('modalContent')
  modalContent: TemplateRef<any>;

  form: FormGroup;

  setPasswordForm = this.fb.group({
    newPassword: ['', [Validators.required, ...getPasswordValidators(this.injector)]],
  });

  selected: IdentityUserDto;

  selectedUserRoles: IdentityRoleDto[];

  roles: IdentityRoleDto[];

  selectedOrganizationUnits: OrganizationUnitDto[];

  visiblePermissions: boolean = false;

  providerKey: string;

  isModalVisible: boolean;

  isSetPasswordModalVisible: boolean;

  modalBusy: boolean = false;

  visibleClaims: boolean = false;

  claimSubject = {} as { id: string; type: 'roles' | 'users' };

  organization = {
    response: {} as PagedResultDto<OrganizationUnitWithDetailsDto>,
    nodes: [],
    checkedKeys: [],
    expandedKeys: [],
    selectFn: () => false,
  };

  isLockModalVisible: boolean;

  twoFactor = {
    isModalVisible: false,
    checkboxValue: false,
    isOptional: false,
  };

  lockForm = this.fb.group({
    lockoutDuration: [0, [Validators.required]],
    lockDurationType: [UserLockDurationType.Second],
  });

  lockDurationTypeOptions = mapEnumToOptions(UserLockDurationType);

  trackByFn: TrackByFunction<AbstractControl> = (index, item) => Object.keys(item)[0] || index;

  get roleGroups(): FormGroup[] {
    return snq(() => (this.form.get('roleNames') as FormArray).controls as FormGroup[], []);
  }

  onVisiblePermissionChange = (value: boolean) => {
    this.visiblePermissions = value;
  };

  constructor(
    public readonly list: ListService<GetIdentityUsersInput>,
    public confirmationService: ConfirmationService,
    public userService: IdentityUserService,
    public fb: FormBuilder,
    public store: Store,
    public toasterService: ToasterService,
    public injector: Injector,
    public configState: ConfigStateService,
  ) {}

  ngOnInit() {
    const { key } = identityTwoFactorBehaviourOptions[0];
    this.twoFactor.isOptional =
      this.configState.getFeature('Identity.TwoFactor') === key &&
      this.configState.getSetting('Abp.Identity.TwoFactor.Behaviour') === key;

    this.hookToQuery();
  }

  private hookToQuery() {
    this.list.hookToQuery(query => this.store.dispatch(new GetUsers(query))).subscribe();
  }

  buildForm() {
    const data = new FormPropData(this.injector, this.selected);
    this.form = generateFormFromProps(data);

    this.userService.getAssignableRoles().subscribe(({ items }) => {
      this.roles = items;
      this.form.addControl(
        'roleNames',
        this.fb.array(
          this.roles.map(role =>
            this.fb.group({
              [role.name]: [
                this.selected.id
                  ? !!snq(() => this.selectedUserRoles.find(userRole => userRole.id === role.id))
                  : role.isDefault,
              ],
            }),
          ),
        ),
      );
    });

    this.userService.getAvailableOrganizationUnits().subscribe(res => {
      this.organization.response = res;
      this.organization.nodes = new TreeAdapter(res.items as BaseNode[]).getTree();
      this.organization.expandedKeys = res.items.map(item => item.id);
      this.organization.checkedKeys = this.selectedOrganizationUnits.map(unit => unit.id);
    });
  }

  openModal() {
    this.buildForm();
    this.isModalVisible = true;
  }

  onAdd() {
    this.selected = {} as IdentityUserDto;
    this.selectedUserRoles = [];
    this.selectedOrganizationUnits = [];
    this.openModal();
  }

  onEdit(id: string) {
    this.userService
      .get(id)
      .pipe(
        tap(selectedUser => (this.selected = selectedUser)),
        switchMap(() => this.store.dispatch(new GetUserRoles(id))),
        pluck('IdentityState'),
        tap(state => (this.selectedUserRoles = state.selectedUserRoles || [])),
        switchMap(() => this.userService.getOrganizationUnits(id)),
        tap(res => (this.selectedOrganizationUnits = res)),
        take(1),
      )
      .subscribe(() => this.openModal());
  }

  save() {
    if (!this.form.valid) return;
    this.modalBusy = true;

    const { roleNames } = this.form.value;
    const mappedRoleNames = snq(
      () =>
        roleNames.filter(role => !!role[Object.keys(role)[0]]).map(role => Object.keys(role)[0]),
      [],
    );

    this.store
      .dispatch(
        this.selected.id
          ? new UpdateUser({
              ...this.selected,
              ...this.form.value,
              id: this.selected.id,
              roleNames: mappedRoleNames,
              organizationUnitIds: this.organization.checkedKeys,
            })
          : new CreateUser({
              ...this.form.value,
              roleNames: mappedRoleNames,
              organizationUnitIds: this.organization.checkedKeys,
            }),
      )
      .pipe(finalize(() => (this.modalBusy = false)))
      .subscribe(() => {
        this.list.get();
        this.isModalVisible = false;
      });
  }

  delete(id: string, userName: string) {
    this.confirmationService
      .warn('AbpIdentity::UserDeletionConfirmationMessage', 'AbpIdentity::AreYouSure', {
        messageLocalizationParams: [userName],
      })
      .subscribe((status: Confirmation.Status) => {
        if (status === Confirmation.Status.confirm) {
          this.store.dispatch(new DeleteUser(id)).subscribe(() => this.list.get());
        }
      });
  }

  onManageClaims(id: string) {
    this.claimSubject = {
      id,
      type: 'users',
    };

    this.visibleClaims = true;
  }

  unlock(id: string) {
    this.store.dispatch(new UnlockUser(id)).subscribe(() => {
      this.toasterService.success('AbpIdentity::UserUnlocked');
      this.list.get();
    });
  }

  openPermissionsModal(providerKey: string) {
    this.providerKey = providerKey;
    setTimeout(() => {
      this.visiblePermissions = true;
    }, 0);
  }

  setPassword() {
    if (this.setPasswordForm.invalid) return;

    this.modalBusy = true;
    this.userService
      .updatePassword(this.selected.id, this.setPasswordForm.value)
      .pipe(finalize(() => (this.modalBusy = false)))
      .subscribe(() => {
        this.isSetPasswordModalVisible = false;
        this.selected = {} as IdentityUserDto;
        this.setPasswordForm.reset();
      });
  }

  generatePassword() {
    this.setPasswordForm.get('newPassword').setValue(generatePassword());
  }

  lock() {
    const { lockoutDuration, lockDurationType } = this.lockForm.value;

    this.modalBusy = true;
    this.userService
      .lock(this.selected.id, lockoutDuration * lockDurationType)
      .pipe(finalize(() => (this.modalBusy = false)))
      .subscribe(() => {
        this.isLockModalVisible = false;
        this.lockForm.reset({
          lockoutDuration: 0,
          lockDurationType: UserLockDurationType.Second,
        });
        this.list.get();
      });
  }

  setTwoFactor() {
    this.modalBusy = true;
    this.userService
      .setTwoFactorEnabled(this.selected.id, this.twoFactor.checkboxValue)
      .pipe(finalize(() => (this.modalBusy = false)))
      .subscribe(() => (this.twoFactor.isModalVisible = false));
  }
}

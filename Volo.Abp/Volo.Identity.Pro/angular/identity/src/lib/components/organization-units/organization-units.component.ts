import { BaseNode, DropEvent, TreeAdapter } from '@abp/ng.components/tree';
import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';
import {
  EXTENSIONS_IDENTIFIER,
  FormPropData,
  generateFormFromProps,
} from '@abp/ng.theme.shared/extensions';
import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngxs/store';
import { finalize, pluck } from 'rxjs/operators';
import { GetOrganizationUnits } from '../../actions/identity.actions';
import { eIdentityComponents } from '../../enums/components';
import {
  OrganizationUnitUpdateDto,
  OrganizationUnitWithDetailsDto,
} from '../../proxy/identity/models';
import { OrganizationUnitService } from '../../proxy/identity/organization-unit.service';

@Component({
  selector: 'abp-organization-units',
  templateUrl: './organization-units.component.html',
  providers: [
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: eIdentityComponents.OrganizationUnits,
    },
  ],
})
export class OrganizationUnitsComponent implements OnInit {
  organizationUnits: OrganizationUnitWithDetailsDto[] = [];
  selectedUnit: OrganizationUnitWithDetailsDto;
  nodes = [];
  treeAdapter: TreeAdapter;
  expandedKeys: string[] = [];
  isNodeModalVisible: boolean;
  isModalBusy: boolean;
  organizationMembersKey = eIdentityComponents.OrganizationMembers;
  organizationRolesKey = eIdentityComponents.OrganizationRoles;
  loading: boolean;

  nodeForm: FormGroup;

  constructor(
    protected injector: Injector,
    protected store: Store,
    protected organizationUnitService: OrganizationUnitService,
    protected fb: FormBuilder,
    protected confirmation: ConfirmationService,
  ) {}

  ngOnInit() {
    this.get();
  }

  get = () => {
    this.loading = true;
    this.store
      .dispatch(new GetOrganizationUnits())
      .pipe(
        pluck('IdentityState', 'organizationUnits', 'items'),
        finalize(() => (this.loading = false)),
      )
      .subscribe((items: OrganizationUnitWithDetailsDto[] = []) => {
        this.organizationUnits = items;
        this.treeAdapter = new TreeAdapter(
          (items as OrganizationUnitWithDetailsDto[]) as BaseNode[],
        );
        this.nodes = this.treeAdapter.getTree();
        this.expandedKeys = [...this.expandedKeys];
      });
  };

  buildForm(selected = {} as OrganizationUnitWithDetailsDto) {
    const data = new FormPropData(this.injector, selected);
    this.nodeForm = generateFormFromProps(data);
    this.nodeForm.addControl('parentId', new FormControl(undefined));
    this.nodeForm.addControl('id', new FormControl(undefined));
  }

  add() {
    this.buildForm();
    this.isNodeModalVisible = true;
  }

  edit(selected: OrganizationUnitWithDetailsDto) {
    this.buildForm(selected);
    this.nodeForm.patchValue({
      parentId: '',
      displayName: selected.displayName,
      id: selected.id,
    });
    this.isNodeModalVisible = true;
  }

  addSubUnit({ id }: OrganizationUnitWithDetailsDto) {
    this.buildForm();
    this.nodeForm.patchValue({ parentId: id, displayName: '', id: undefined });
    this.isNodeModalVisible = true;
    this.expandedKeys = this.expandedKeys.concat(id);
  }

  save() {
    if (this.nodeForm.invalid) return;

    const { id, ...form } = this.nodeForm.value;

    const request = id
      ? this.organizationUnitService.update(id, {
          displayName: form.displayName,
        } as OrganizationUnitUpdateDto)
      : this.organizationUnitService.create(form);

    this.isModalBusy = true;
    request.pipe(finalize(() => (this.isModalBusy = false))).subscribe(() => {
      this.get();
      this.isNodeModalVisible = false;
    });
  }

  delete({ id, displayName }: OrganizationUnitWithDetailsDto) {
    this.confirmation
      .warn('AbpIdentity::OrganizationUnitDeletionConfirmationMessage', 'AbpIdentity::AreYouSure', {
        messageLocalizationParams: [displayName],
      })
      .subscribe((status: Confirmation.Status) => {
        if (status === Confirmation.Status.confirm) {
          this.organizationUnitService.delete(id).subscribe(() => this.get());
        }
      });
  }

  getParentName(parentId: string) {
    const parent = this.organizationUnits.find(unit => unit.id === parentId);

    if (!parent) return '';

    return parent.displayName;
  }

  onDrop(event: DropEvent) {
    if (!event.node) return;

    let parentId = event.node.key;
    if (!event.node.origin.parentId && event.pos === -1) {
      parentId = null;
    }

    this.move(event.dragNode.key, parentId);
  }

  move(id: string, newParentId: string) {
    this.organizationUnitService.move(id, { newParentId }).subscribe(this.get);
  }
}

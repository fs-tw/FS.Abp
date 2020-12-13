import { ListService } from '@abp/ng.core';
import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';
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
import { AbstractControl, FormGroup } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { finalize, pluck, take } from 'rxjs/operators';
import {
  CreateClaimType,
  DeleteClaimType,
  GetClaimTypeById,
  GetClaimTypes,
  UpdateClaimType,
} from '../../actions/identity.actions';
import { eIdentityComponents } from '../../enums/components';
import { Identity } from '../../models/identity';
import { ClaimTypeDto, GetIdentityClaimTypesInput } from '../../proxy/identity/models';
import { IdentityState } from '../../states/identity.state';
@Component({
  selector: 'abp-claims',
  templateUrl: './claims.component.html',
  providers: [
    ListService,
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: eIdentityComponents.Claims,
    },
  ],
})
export class ClaimsComponent implements OnInit {
  @Select(IdentityState.getClaimTypes) data$: Observable<ClaimTypeDto[]>;

  @Select(IdentityState.getClaimTypesTotalCount) totalCount$: Observable<number>;

  @ViewChild('modalContent') modalContent: TemplateRef<any>;

  form: FormGroup;

  selected: ClaimTypeDto;

  isModalVisible: boolean;

  modalBusy: boolean = false;

  trackByFn: TrackByFunction<AbstractControl> = (index, item) => Object.keys(item)[0] || index;

  constructor(
    public readonly list: ListService<GetIdentityClaimTypesInput>,
    protected confirmationService: ConfirmationService,
    protected store: Store,
    protected injector: Injector,
  ) {}

  ngOnInit() {
    this.hookToQuery();
  }

  private hookToQuery() {
    this.list.hookToQuery(query => this.store.dispatch(new GetClaimTypes(query))).subscribe();
  }

  buildForm() {
    const data = new FormPropData(this.injector, this.selected);
    this.form = generateFormFromProps(data);
  }

  getTypeName(valueType: number) {
    switch (valueType) {
      case 0:
        return 'String';
      case 1:
        return 'Int';
      case 2:
        return 'Boolean';
      case 3:
        return 'DateTime';
      default:
        return valueType;
    }
  }

  openModal() {
    this.buildForm();
    this.isModalVisible = true;
  }

  onAdd() {
    this.selected = {} as ClaimTypeDto;
    this.openModal();
  }

  onEdit(id: string) {
    this.store
      .dispatch(new GetClaimTypeById(id))
      .pipe(pluck('IdentityState'), take(1))
      .subscribe((state: Identity.State) => {
        this.selected = state.selectedClaim;
        this.openModal();
      });
  }

  save() {
    if (!this.form.valid || this.modalBusy) return;
    this.modalBusy = true;

    this.store
      .dispatch(
        this.selected.id
          ? new UpdateClaimType({
              ...this.selected,
              ...this.form.value,
              id: this.selected.id,
            })
          : new CreateClaimType({
              ...this.form.value,
            }),
      )
      .pipe(finalize(() => (this.modalBusy = false)))
      .subscribe(() => {
        this.list.get();
        this.isModalVisible = false;
      });
  }

  delete(id: string, name: string) {
    this.confirmationService
      .warn('AbpIdentity::ClaimTypeDeletionConfirmationMessage', 'AbpIdentity::AreYouSure', {
        messageLocalizationParams: [name],
      })
      .subscribe((status: Confirmation.Status) => {
        if (status === Confirmation.Status.confirm) {
          this.store.dispatch(new DeleteClaimType(id)).subscribe(() => this.list.get());
        }
      });
  }
}

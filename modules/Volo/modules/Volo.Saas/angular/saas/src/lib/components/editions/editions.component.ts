import { ListService } from '@abp/ng.core';
import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';
import {
  EXTENSIONS_IDENTIFIER,
  FormPropData,
  generateFormFromProps,
} from '@abp/ng.theme.shared/extensions';
import { Component, Injector, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import {
  CreateEdition,
  DeleteEdition,
  GetEditions,
  UpdateEdition,
} from '../../actions/saas.actions';
import { eSaasComponents } from '../../enums/components';
import { EditionDto, GetEditionsInput } from '../../proxy/host/dtos/models';
import { EditionService } from '../../proxy/host/edition.service';
import { SaasState } from '../../states/saas.state';

@Component({
  selector: 'abp-editions',
  templateUrl: './editions.component.html',
  providers: [
    ListService,
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: eSaasComponents.Editions,
    },
  ],
})
export class EditionsComponent implements OnInit {
  @Select(SaasState.getEditions)
  data$: Observable<EditionDto[]>;

  @Select(SaasState.getEditionsTotalCount)
  totalCount$: Observable<number>;

  selected: EditionDto;

  editionForm: FormGroup;

  isModalVisible: boolean;

  visibleFeatures: boolean = false;

  providerKey: string;

  modalBusy: boolean = false;

  onVisibleFeaturesChange = (value: boolean) => {
    this.visibleFeatures = value;
  };

  constructor(
    public readonly list: ListService<GetEditionsInput>,
    private confirmationService: ConfirmationService,
    private editionService: EditionService,
    private store: Store,
    private injector: Injector,
  ) {}

  ngOnInit() {
    this.hookToQuery();
  }

  private hookToQuery() {
    this.list.hookToQuery(query => this.store.dispatch(new GetEditions(query))).subscribe();
  }

  private createEditionForm() {
    const data = new FormPropData(this.injector, this.selected);
    this.editionForm = generateFormFromProps(data);
  }

  onAddEdition() {
    this.selected = {} as EditionDto;
    this.createEditionForm();
    this.isModalVisible = true;
  }

  onEditEdition(id: string) {
    this.editionService.get(id).subscribe(selectedEdition => {
      this.selected = selectedEdition;
      this.createEditionForm();
      this.isModalVisible = true;
    });
  }

  save() {
    if (!this.editionForm.valid) return;
    this.modalBusy = true;

    this.store
      .dispatch(
        this.selected.id
          ? new UpdateEdition({ ...this.selected, ...this.editionForm.value, id: this.selected.id })
          : new CreateEdition(this.editionForm.value),
      )
      .pipe(finalize(() => (this.modalBusy = false)))
      .subscribe(() => {
        this.list.get();
        this.isModalVisible = false;
      });
  }

  delete({ id, displayName }: EditionDto) {
    this.confirmationService
      .warn('Saas::EditionDeletionConfirmationMessage', 'Saas::AreYouSure', {
        messageLocalizationParams: [displayName],
      })
      .subscribe((status: Confirmation.Status) => {
        if (status === Confirmation.Status.confirm) {
          this.store.dispatch(new DeleteEdition(id)).subscribe(() => this.list.get());
        }
      });
  }

  openFeaturesModal(providerKey: string) {
    this.providerKey = providerKey;
    setTimeout(() => {
      this.visibleFeatures = true;
    }, 0);
  }
}

import { ApplicationConfigurationService, ConfigStateService, ListService } from '@abp/ng.core';
import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';
import {
  EXTENSIONS_IDENTIFIER,
  FormPropData,
  generateFormFromProps,
} from '@abp/ng.theme.shared/extensions';
import { Component, Injector, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { finalize, pluck, switchMap } from 'rxjs/operators';
import {
  CreateUpdateLanguage,
  DeleteLanguage,
  GetLanguageById,
  GetLanguageCultures,
  GetLanguages,
  SetAsDefaultLanguage,
} from '../../actions/language-management.actions';
import { eLanguageManagementComponents } from '../../enums/components';
import { CultureInfoDto, GetLanguagesTextsInput, LanguageDto } from '../../proxy/dto/models';
import { LanguageManagementState } from '../../states/language-management.state';
import flagIcons from './flag-icons';

@Component({
  selector: 'abp-languages',
  templateUrl: './languages.component.html',
  providers: [
    ListService,
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: eLanguageManagementComponents.Languages,
    },
  ],
})
export class LanguagesComponent implements OnInit {
  @Select(LanguageManagementState.getLanguages)
  datas$: Observable<LanguageDto[]>;

  @Select(LanguageManagementState.getLanguagesTotalCount)
  totalCount$: Observable<number>;

  @Select(LanguageManagementState.getCultures)
  cultures$: Observable<CultureInfoDto[]>;

  form: FormGroup;

  selected: LanguageDto;

  isModalVisible: boolean = false;

  modalBusy: boolean = false;

  flagIcons = flagIcons;

  constructor(
    public readonly list: ListService<GetLanguagesTextsInput>,
    private confirmationService: ConfirmationService,
    private store: Store,
    private injector: Injector,
    private configState: ConfigStateService,
    private appConfigService: ApplicationConfigurationService,
  ) {}

  private createForm() {
    this.store
      .select(LanguageManagementState.getCultures)
      .pipe(
        switchMap(cultures =>
          cultures.length ? of(cultures) : this.store.dispatch(new GetLanguageCultures()),
        ),
      )
      .subscribe(() => {
        const data = new FormPropData(this.injector, this.selected);
        this.form = generateFormFromProps(data);
      });
  }

  private hookToQuery() {
    this.list.hookToQuery(query => this.store.dispatch(new GetLanguages(query))).subscribe();
  }

  ngOnInit() {
    this.hookToQuery();
  }

  openModal() {
    this.createForm();
    this.isModalVisible = true;
  }

  add() {
    this.selected = {} as LanguageDto;
    this.openModal();
  }

  edit(id: string) {
    this.store
      .dispatch(new GetLanguageById(id))
      .pipe(pluck('LanguageManagementState', 'selectedItem'))
      .subscribe(selected => {
        this.selected = selected;
        this.openModal();
      });
  }

  save() {
    if (!this.form.valid) return;
    this.modalBusy = true;

    this.store
      .dispatch(new CreateUpdateLanguage(this.form.value, this.selected.id))
      .pipe(finalize(() => (this.modalBusy = false)))
      .subscribe(() => {
        this.isModalVisible = false;
        this.list.get();
        if (!this.selected.id) {
          this.appConfigService.getConfiguration().subscribe(res => this.configState.setState(res));
        }
      });
  }

  delete(id: string, name: string) {
    this.confirmationService
      .warn(
        'LanguageManagement::LanguageDeletionConfirmationMessage',
        'LanguageManagement::AreYouSure',
        {
          messageLocalizationParams: [name],
        },
      )
      .subscribe((status: Confirmation.Status) => {
        if (status === Confirmation.Status.confirm) {
          this.store.dispatch(new DeleteLanguage(id)).subscribe(() => this.list.get());
        }
      });
  }

  setAsDefault(id: string) {
    this.store.dispatch(new SetAsDefaultLanguage(id)).subscribe(() => this.list.get());
  }
}

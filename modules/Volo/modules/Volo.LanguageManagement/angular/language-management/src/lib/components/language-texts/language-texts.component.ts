import { ApplicationConfiguration, ConfigStateService, ListService } from '@abp/ng.core';
import { EXTENSIONS_IDENTIFIER } from '@abp/ng.theme.shared/extensions';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { finalize, take, withLatestFrom } from 'rxjs/operators';
import snq from 'snq';
import {
  GetLanguageResources,
  GetLanguageTexts,
  RestoreLanguageTextByName,
  UpdateLanguageTextByName,
} from '../../actions/language-management.actions';
import { eLanguageManagementComponents } from '../../enums/components';
import { GetLanguagesTextsInput, LanguageTextDto } from '../../proxy/dto/models';
import { LanguageManagementState } from '../../states/language-management.state';

@Component({
  selector: 'abp-language-texts',
  templateUrl: './language-texts.component.html',
  providers: [
    ListService,
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: eLanguageManagementComponents.LanguageTexts,
    },
  ],
})
export class LanguageTextsComponent implements OnInit {
  @Select(LanguageManagementState.getLanguageTexts)
  datas$: Observable<LanguageTextDto[]>;

  @Select(LanguageManagementState.getLanguageTextsTotalCount)
  totalCount$: Observable<number>;

  columns: { field: string; header: string }[];

  selected: LanguageTextDto;

  selectedIndex: number;

  pageQuery = {} as GetLanguagesTextsInput;

  isModalVisible: boolean = false;

  modalBusy: boolean = false;

  languages: ApplicationConfiguration.Language[];

  resources: { name: string }[] = [];

  constructor(
    public readonly list: ListService<GetLanguagesTextsInput>,
    private store: Store,
    private renderer: Renderer2,
    private configState: ConfigStateService,
  ) {}

  ngOnInit() {
    this.languages = this.configState.getDeep('localization.languages');
    this.store.dispatch(new GetLanguageResources()).subscribe(() => {
      this.resources = this.store.selectSnapshot(LanguageManagementState.getResources);
    });

    this.pageQuery = {
      baseCultureName: this.languages[0].cultureName,
      targetCultureName: snq(() => this.languages[1].cultureName, this.languages[0].cultureName),
      getOnlyEmptyValues: false,
    } as GetLanguagesTextsInput;

    this.hookToQuery();

    this.columns = [
      { field: 'name', header: 'LanguageManagement::Key' },
      { field: 'baseValue', header: 'LanguageManagement::BaseValue' },
      { field: 'value', header: 'LanguageManagement::Value' },
      { field: 'resourceName', header: 'LanguageManagement::ResourceName' },
    ];
  }

  openModal() {
    this.isModalVisible = true;
  }

  closeModal() {
    this.isModalVisible = false;
    this.selected = {} as LanguageTextDto;
    this.selectedIndex = null;
  }

  private hookToQuery() {
    this.list
      .hookToQuery(query =>
        this.store.dispatch(new GetLanguageTexts({ ...query, ...this.pageQuery })),
      )
      .pipe(withLatestFrom(this.datas$))
      .subscribe(([_, datas]) => {
        if (this.isModalVisible) {
          if (!datas[this.selectedIndex]) {
            this.closeModal();
            return;
          }

          this.selected = datas[this.selectedIndex] || ({} as LanguageTextDto);
        }
      });
  }

  edit(data: LanguageTextDto, index: number) {
    this.selectedIndex = index % this.list.maxResultCount;

    this.selected = data;
    this.openModal();
  }

  save(next?: boolean) {
    if (this.modalBusy) return;
    this.modalBusy = true;

    this.store
      .dispatch(
        new UpdateLanguageTextByName({
          cultureName: this.selected.cultureName,
          name: this.selected.name,
          resourceName: this.selected.resourceName,
          value: this.selected.value || '',
        }),
      )
      .pipe(
        finalize(() => {
          setTimeout(() => {
            this.modalBusy = false;
          }, 200);

          if (!next) {
            this.closeModal();
          }
        }),
      )
      .subscribe(() => {
        if (next) {
          this.datas$.pipe(take(1)).subscribe(data => {
            const totalCount = this.store.selectSnapshot(
              LanguageManagementState.getLanguageTextsTotalCount,
            );

            const { maxResultCount } = this.list;
            if (
              this.selectedIndex + 1 === totalCount % maxResultCount &&
              this.list.page * 10 + maxResultCount >= totalCount
            ) {
              this.closeModal();
              return;
            }

            if ((this.selectedIndex + 1) % maxResultCount === 0) {
              this.selectedIndex = 0;
              this.list.page = this.list.page + 1;
              this.renderer.removeClass(
                document.getElementById('LanguageTextToEdit_TargetCultureValue'),
                'ng-dirty',
              );
            } else {
              this.selectedIndex += 1;
              this.selected = data[this.selectedIndex] || ({} as LanguageTextDto);
              this.renderer.removeClass(
                document.getElementById('LanguageTextToEdit_TargetCultureValue'),
                'ng-dirty',
              );
            }
          });
        }

        this.list.get();
      });
  }

  restore() {
    this.store
      .dispatch(
        new RestoreLanguageTextByName({
          cultureName: this.selected.cultureName,
          name: this.selected.name,
          resourceName: this.selected.resourceName,
        }),
      )
      .subscribe(() => {
        this.closeModal();
        this.list.get();
      });
  }
}

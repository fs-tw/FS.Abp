import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import {
  CreateUpdateLanguage,
  DeleteLanguage,
  GetLanguageById,
  GetLanguageCultures,
  GetLanguageResources,
  GetLanguages,
  GetLanguageTexts,
  RestoreLanguageTextByName,
  SetAsDefaultLanguage,
  UpdateLanguageTextByName,
} from '../actions/language-management.actions';
import { LanguageManagement } from '../models/language-management';
import { CreateLanguageDto, LanguageTextDto } from '../proxy/dto/models';
import { LanguageTextService } from '../proxy/language-text.service';
import { LanguageService } from '../proxy/language.service';

@State<LanguageManagement.State>({
  name: 'LanguageManagementState',
  defaults: {
    languageResponse: {},
    selectedItem: {},
    cultures: [],
    resources: [],
  } as LanguageManagement.State,
})
@Injectable()
export class LanguageManagementState {
  @Selector()
  static getLanguages({ languageResponse }: LanguageManagement.State) {
    return languageResponse.items || [];
  }

  @Selector()
  static getLanguagesTotalCount({ languageResponse }: LanguageManagement.State) {
    return languageResponse.totalCount;
  }

  @Selector()
  static getLanguageTexts({ languageTextsResponse }: LanguageManagement.State): LanguageTextDto[] {
    return languageTextsResponse.items || [];
  }

  @Selector()
  static getLanguageTextsTotalCount({ languageTextsResponse }: LanguageManagement.State): number {
    return languageTextsResponse.totalCount || 0;
  }

  @Selector()
  static getCultures({ cultures }: LanguageManagement.State) {
    return cultures;
  }

  @Selector()
  static getResources({ resources }: LanguageManagement.State) {
    return resources;
  }

  constructor(
    private languageService: LanguageService,
    private languageTextService: LanguageTextService,
  ) {}

  @Action(GetLanguages)
  get({ patchState }: StateContext<LanguageManagement.State>, { payload }: GetLanguages) {
    return this.languageService.getList(payload).pipe(
      tap(languageResponse => {
        patchState({
          languageResponse,
        });
      }),
    );
  }

  @Action(GetLanguageById)
  getById({ patchState }: StateContext<LanguageManagement.State>, { payload }: GetLanguageById) {
    return this.languageService.get(payload).pipe(
      tap(selectedItem =>
        patchState({
          selectedItem,
        }),
      ),
    );
  }

  @Action(DeleteLanguage)
  delete({ dispatch }: StateContext<LanguageManagement.State>, { payload }: DeleteLanguage) {
    return this.languageService.delete(payload);
  }

  @Action(SetAsDefaultLanguage)
  setAsDefault(
    { dispatch }: StateContext<LanguageManagement.State>,
    { payload }: SetAsDefaultLanguage,
  ) {
    return this.languageService.setAsDefault(payload);
  }

  @Action(CreateUpdateLanguage)
  create(
    { dispatch }: StateContext<LanguageManagement.State>,
    { payload, id }: CreateUpdateLanguage,
  ) {
    return id
      ? this.languageService.update(id, payload)
      : this.languageService.create(payload as CreateLanguageDto);
  }

  @Action(GetLanguageTexts)
  getLanguageTexts(
    { patchState }: StateContext<LanguageManagement.State>,
    { payload }: GetLanguageTexts,
  ) {
    return this.languageTextService.getList(payload).pipe(
      tap(languageTextsResponse =>
        patchState({
          languageTextsResponse,
        }),
      ),
    );
  }

  @Action(GetLanguageCultures)
  getCultures({ patchState }: StateContext<LanguageManagement.State>) {
    return this.languageService.getCulturelist().pipe(
      tap(cultures =>
        patchState({
          cultures,
        }),
      ),
    );
  }

  @Action(GetLanguageResources)
  getResources({ patchState }: StateContext<LanguageManagement.State>) {
    return this.languageService.getResources().pipe(
      tap(resources =>
        patchState({
          resources,
        }),
      ),
    );
  }

  @Action(UpdateLanguageTextByName)
  updateLanguageTextByName(_, { payload }: UpdateLanguageTextByName) {
    return this.languageTextService.update(
      payload.resourceName,
      payload.cultureName,
      payload.name,
      payload.value,
    );
  }

  @Action(RestoreLanguageTextByName)
  restoreLanguageTextByName(_, { payload }: RestoreLanguageTextByName) {
    return this.languageTextService.restoreToDefault(
      payload.resourceName,
      payload.cultureName,
      payload.name,
    );
  }
}

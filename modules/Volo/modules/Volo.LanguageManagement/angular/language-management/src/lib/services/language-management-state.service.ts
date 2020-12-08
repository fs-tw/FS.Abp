import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { LanguageManagementState } from '../states';
import {
  GetLanguages,
  GetLanguageById,
  CreateUpdateLanguage,
  DeleteLanguage,
  SetAsDefaultLanguage,
  GetLanguageTexts,
  GetLanguageCultures,
  GetLanguageResources,
  UpdateLanguageTextByName,
  RestoreLanguageTextByName,
} from '../actions';

@Injectable({
  providedIn: 'root',
})
export class LanguageManagementStateService {
  constructor(private store: Store) {}

  getLanguages() {
    return this.store.selectSnapshot(LanguageManagementState.getLanguages);
  }

  getLanguagesTotalCount() {
    return this.store.selectSnapshot(LanguageManagementState.getLanguagesTotalCount);
  }

  getLanguageTexts() {
    return this.store.selectSnapshot(LanguageManagementState.getLanguageTexts);
  }

  getLanguageTextsTotalCount() {
    return this.store.selectSnapshot(LanguageManagementState.getLanguageTextsTotalCount);
  }

  getCultures() {
    return this.store.selectSnapshot(LanguageManagementState.getCultures);
  }

  getResources() {
    return this.store.selectSnapshot(LanguageManagementState.getResources);
  }

  dispatchGetLanguages(...args: ConstructorParameters<typeof GetLanguages>) {
    return this.store.dispatch(new GetLanguages(...args));
  }

  dispatchGetLanguageById(...args: ConstructorParameters<typeof GetLanguageById>) {
    return this.store.dispatch(new GetLanguageById(...args));
  }

  dispatchCreateUpdateLanguage(...args: ConstructorParameters<typeof CreateUpdateLanguage>) {
    return this.store.dispatch(new CreateUpdateLanguage(...args));
  }

  dispatchDeleteLanguage(...args: ConstructorParameters<typeof DeleteLanguage>) {
    return this.store.dispatch(new DeleteLanguage(...args));
  }

  dispatchSetAsDefaultLanguage(...args: ConstructorParameters<typeof SetAsDefaultLanguage>) {
    return this.store.dispatch(new SetAsDefaultLanguage(...args));
  }

  dispatchGetLanguageTexts(...args: ConstructorParameters<typeof GetLanguageTexts>) {
    return this.store.dispatch(new GetLanguageTexts(...args));
  }

  dispatchGetLanguageCultures() {
    return this.store.dispatch(new GetLanguageCultures());
  }

  dispatchGetLanguageResources() {
    return this.store.dispatch(new GetLanguageResources());
  }

  dispatchUpdateLanguageTextByName(
    ...args: ConstructorParameters<typeof UpdateLanguageTextByName>
  ) {
    return this.store.dispatch(new UpdateLanguageTextByName(...args));
  }

  dispatchRestoreLanguageTextByName(
    ...args: ConstructorParameters<typeof RestoreLanguageTextByName>
  ) {
    return this.store.dispatch(new RestoreLanguageTextByName(...args));
  }
}

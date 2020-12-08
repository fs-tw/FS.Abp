import { CreateLanguageDto, GetLanguagesTextsInput, UpdateLanguageDto } from '../proxy/dto/models';

export class GetLanguages {
  static readonly type = '[LanguageManagement] Get';
  constructor(public payload = {} as GetLanguagesTextsInput) {}
}

export class GetLanguageById {
  static readonly type = '[LanguageManagement] Get By Id';
  constructor(public payload: string) {}
}

export class CreateUpdateLanguage {
  static readonly type = '[LanguageManagement] Create';
  constructor(public payload: CreateLanguageDto | UpdateLanguageDto, public id?: string) {}
}

export class DeleteLanguage {
  static readonly type = '[LanguageManagement] Delete';
  constructor(public payload: string) {}
}

export class SetAsDefaultLanguage {
  static readonly type = '[LanguageManagement] Set As Default';
  constructor(public payload: string) {}
}

export class GetLanguageTexts {
  static readonly type = '[LanguageManagement] Get Texts';
  constructor(public payload: GetLanguagesTextsInput) {}
}

export class GetLanguageCultures {
  static readonly type = '[LanguageManagement] Get Cultures';
}

export class GetLanguageResources {
  static readonly type = '[LanguageManagement] Get Resources';
}

export class UpdateLanguageTextByName {
  static readonly type = '[LanguageManagement] Update Language Text By Name';
  constructor(
    public payload: { resourceName: string; cultureName: string; name: string; value: string },
  ) {}
}

export class RestoreLanguageTextByName {
  static readonly type = '[LanguageManagement] Restore Language Text By Name';
  constructor(public payload: { resourceName: string; cultureName: string; name: string }) {}
}

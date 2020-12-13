import {
  CreateFormPropContributorCallback,
  EditFormPropContributorCallback,
  EntityActionContributorCallback,
  EntityPropContributorCallback,
  ToolbarActionContributorCallback,
} from '@abp/ng.theme.shared/extensions';
import { InjectionToken } from '@angular/core';
import { DEFAULT_LANGUAGE_TEXTS_ENTITY_ACTIONS } from '../defaults/default-language-texts-entity-actions';
import { DEFAULT_LANGUAGE_TEXTS_TOOLBAR_ACTIONS } from '../defaults/default-language-texts-toolbar-actions';
import { DEFAULT_LANGUAGES_ENTITY_ACTIONS } from '../defaults/default-languages-entity-actions';
import { DEFAULT_LANGUAGES_ENTITY_PROPS } from '../defaults/default-languages-entity-props';
import {
  DEFAULT_LANGUAGES_CREATE_FORM_PROPS,
  DEFAULT_LANGUAGES_EDIT_FORM_PROPS,
} from '../defaults/default-languages-form-props';
import { DEFAULT_LANGUAGES_TOOLBAR_ACTIONS } from '../defaults/default-languages-toolbar-actions';
import { eLanguageManagementComponents } from '../enums/components';
import { LanguageDto, LanguageTextDto } from '../proxy/dto/models';

export const DEFAULT_LANGUAGE_MANAGEMENT_ENTITY_ACTIONS = {
  [eLanguageManagementComponents.Languages]: DEFAULT_LANGUAGES_ENTITY_ACTIONS,
  [eLanguageManagementComponents.LanguageTexts]: DEFAULT_LANGUAGE_TEXTS_ENTITY_ACTIONS,
};

export const DEFAULT_LANGUAGE_MANAGEMENT_TOOLBAR_ACTIONS = {
  [eLanguageManagementComponents.Languages]: DEFAULT_LANGUAGES_TOOLBAR_ACTIONS,
  [eLanguageManagementComponents.LanguageTexts]: DEFAULT_LANGUAGE_TEXTS_TOOLBAR_ACTIONS,
};

export const DEFAULT_LANGUAGE_MANAGEMENT_ENTITY_PROPS = {
  [eLanguageManagementComponents.Languages]: DEFAULT_LANGUAGES_ENTITY_PROPS,
};

export const DEFAULT_LANGUAGE_MANAGEMENT_CREATE_FORM_PROPS = {
  [eLanguageManagementComponents.Languages]: DEFAULT_LANGUAGES_CREATE_FORM_PROPS,
};

export const DEFAULT_LANGUAGE_MANAGEMENT_EDIT_FORM_PROPS = {
  [eLanguageManagementComponents.Languages]: DEFAULT_LANGUAGES_EDIT_FORM_PROPS,
};

export const LANGUAGE_MANAGEMENT_ENTITY_ACTION_CONTRIBUTORS = new InjectionToken<
  EntityActionContributors
>('LANGUAGE_MANAGEMENT_ENTITY_ACTION_CONTRIBUTORS');

export const LANGUAGE_MANAGEMENT_TOOLBAR_ACTION_CONTRIBUTORS = new InjectionToken<
  ToolbarActionContributors
>('LANGUAGE_MANAGEMENT_TOOLBAR_ACTION_CONTRIBUTORS');

export const LANGUAGE_MANAGEMENT_ENTITY_PROP_CONTRIBUTORS = new InjectionToken<
  EntityPropContributors
>('LANGUAGE_MANAGEMENT_ENTITY_PROP_CONTRIBUTORS');

export const LANGUAGE_MANAGEMENT_CREATE_FORM_PROP_CONTRIBUTORS = new InjectionToken<
  CreateFormPropContributors
>('LANGUAGE_MANAGEMENT_CREATE_FORM_PROP_CONTRIBUTORS');

export const LANGUAGE_MANAGEMENT_EDIT_FORM_PROP_CONTRIBUTORS = new InjectionToken<
  EditFormPropContributors
>('LANGUAGE_MANAGEMENT_EDIT_FORM_PROP_CONTRIBUTORS');

// https://github.com/microsoft/TypeScript/issues/9944#issuecomment-254693497
type EntityActionContributors = Partial<{
  [eLanguageManagementComponents.Languages]: EntityActionContributorCallback<LanguageDto>[];
  [eLanguageManagementComponents.LanguageTexts]: EntityActionContributorCallback<LanguageTextDto>[];
}>;
type ToolbarActionContributors = Partial<{
  [eLanguageManagementComponents.Languages]: ToolbarActionContributorCallback<LanguageDto[]>[];
  [eLanguageManagementComponents.LanguageTexts]: ToolbarActionContributorCallback<
    LanguageTextDto[]
  >[];
}>;
type EntityPropContributors = Partial<{
  [eLanguageManagementComponents.Languages]: EntityPropContributorCallback<LanguageDto>[];
  [eLanguageManagementComponents.LanguageTexts]: EntityPropContributorCallback<LanguageTextDto>[];
}>;
type CreateFormPropContributors = Partial<{
  [eLanguageManagementComponents.Languages]: CreateFormPropContributorCallback<LanguageDto>[];
  [eLanguageManagementComponents.LanguageTexts]: CreateFormPropContributorCallback<
    LanguageTextDto
  >[];
}>;
type EditFormPropContributors = Partial<{
  [eLanguageManagementComponents.Languages]: EditFormPropContributorCallback<LanguageDto>[];
  [eLanguageManagementComponents.LanguageTexts]: EditFormPropContributorCallback<LanguageTextDto>[];
}>;

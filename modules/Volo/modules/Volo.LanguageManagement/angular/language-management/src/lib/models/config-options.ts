import {
  CreateFormPropContributorCallback,
  EditFormPropContributorCallback,
  EntityActionContributorCallback,
  EntityPropContributorCallback,
  ToolbarActionContributorCallback,
} from '@abp/ng.theme.shared/extensions';
import { eLanguageManagementComponents } from '../enums/components';
import { LanguageDto, LanguageTextDto } from '../proxy/dto/models';

export type LanguageManagementEntityActionContributors = Partial<{
  [eLanguageManagementComponents.Languages]: EntityActionContributorCallback<LanguageDto>[];
  [eLanguageManagementComponents.LanguageTexts]: EntityActionContributorCallback<LanguageTextDto>[];
}>;

export type LanguageManagementToolbarActionContributors = Partial<{
  [eLanguageManagementComponents.Languages]: ToolbarActionContributorCallback<LanguageDto[]>[];
  [eLanguageManagementComponents.LanguageTexts]: ToolbarActionContributorCallback<
    LanguageTextDto[]
  >[];
}>;

export type LanguageManagementEntityPropContributors = Partial<{
  [eLanguageManagementComponents.Languages]: EntityPropContributorCallback<LanguageDto>[];
  [eLanguageManagementComponents.LanguageTexts]: EntityPropContributorCallback<LanguageTextDto>[];
}>;

export type LanguageManagementCreateFormPropContributors = Partial<{
  [eLanguageManagementComponents.Languages]: CreateFormPropContributorCallback<LanguageDto>[];
  [eLanguageManagementComponents.LanguageTexts]: CreateFormPropContributorCallback<
    LanguageTextDto
  >[];
}>;

export type LanguageManagementEditFormPropContributors = Partial<{
  [eLanguageManagementComponents.Languages]: EditFormPropContributorCallback<LanguageDto>[];
  [eLanguageManagementComponents.LanguageTexts]: EditFormPropContributorCallback<LanguageTextDto>[];
}>;

export interface LanguageManagementConfigOptions {
  entityActionContributors?: LanguageManagementEntityActionContributors;
  toolbarActionContributors?: LanguageManagementToolbarActionContributors;
  entityPropContributors?: LanguageManagementEntityPropContributors;
  createFormPropContributors?: LanguageManagementCreateFormPropContributors;
  editFormPropContributors?: LanguageManagementEditFormPropContributors;
}

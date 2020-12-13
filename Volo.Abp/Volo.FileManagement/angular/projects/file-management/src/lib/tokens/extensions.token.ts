import { InjectionToken } from '@angular/core';
import {
  EntityActionContributorCallback,
  EntityPropContributorCallback,
  ToolbarActionContributorCallback,
} from '@abp/ng.theme.shared/extensions';
import { eFileManagementComponents } from '../enums/components';
import { DEFAULT_FILE_MANAGEMENT_DIRECTORY_CONTENT_DTO_ENTITY_PROPS } from '../defaults/default-file-management-entity-props';
import { DirectoryContentDto } from '../proxy/directories/models';
import { DEFAULT_FILE_MANAGEMENT_DIRECTORY_CONTENT_DTO_ENTITY_ACTIONS } from '../defaults/default-file-management-entity-actions';
import { DEFAULT_FILE_MANAGEMENT_DIRECTORY_CONTENT_TOOLBAR_ACTIONS } from '../defaults/default-file-management-toolbar-actions';

export const DEFAULT_FILE_MANAGEMENT_ENTITY_ACTIONS = {
  [eFileManagementComponents.FolderContent]: DEFAULT_FILE_MANAGEMENT_DIRECTORY_CONTENT_DTO_ENTITY_ACTIONS,
};

export const DEFAULT_FILE_MANAGEMENT_TOOLBAR_ACTIONS = {
  [eFileManagementComponents.FolderContent]: DEFAULT_FILE_MANAGEMENT_DIRECTORY_CONTENT_TOOLBAR_ACTIONS,
};

export const DEFAULT_FILE_MANAGEMENT_ENTITY_PROPS = {
  [eFileManagementComponents.FolderContent]: DEFAULT_FILE_MANAGEMENT_DIRECTORY_CONTENT_DTO_ENTITY_PROPS,
};

export const FILE_MANAGEMENT_ENTITY_ACTION_CONTRIBUTORS = new InjectionToken<
  EntityActionContributors
>('FILE_MANAGEMENT_ENTITY_ACTION_CONTRIBUTORS');

export const FILE_MANAGEMENT_TOOLBAR_ACTION_CONTRIBUTORS = new InjectionToken<
  ToolbarActionContributors
>('FILE_MANAGEMENT_TOOLBAR_ACTION_CONTRIBUTORS');

export const FILE_MANAGEMENT_ENTITY_PROP_CONTRIBUTORS = new InjectionToken<
  EntityPropContributors
>('FILE_MANAGEMENT_ENTITY_PROP_CONTRIBUTORS');

export const FILE_MANAGEMENT_XSRF_HEADER_NAME = new InjectionToken(
  'FILE_MANAGEMENT_XSRF_HEADER_NAME'
);

// Fix for TS4023 -> https://github.com/microsoft/TypeScript/issues/9944#issuecomment-254693497
type EntityActionContributors = Partial<{
  [eFileManagementComponents.FolderContent]: EntityActionContributorCallback<
    DirectoryContentDto
  >[];
}>;

type ToolbarActionContributors = Partial<{
  [eFileManagementComponents.FolderContent]: ToolbarActionContributorCallback<
    DirectoryContentDto[]
  >[];
}>;

type EntityPropContributors = Partial<{
  [eFileManagementComponents.FolderContent]: EntityPropContributorCallback<
    DirectoryContentDto
  >[];
}>;

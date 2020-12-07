import {
  EntityActionContributorCallback,
  EntityPropContributorCallback,
  ToolbarActionContributorCallback,
} from '@abp/ng.theme.shared/extensions';
import { DirectoryContentDto } from '../proxy/directories/models';
import { eFileManagementComponents } from '../enums/components';

export type FileManagementEntityActionContributors = Partial<{
  [eFileManagementComponents.FolderContent]: EntityActionContributorCallback<
    DirectoryContentDto
  >[];
}>;

export type FileManagementToolbarActionContributors = Partial<{
  [eFileManagementComponents.FolderContent]: ToolbarActionContributorCallback<
    DirectoryContentDto[]
  >[];
}>;

export type FileManagementEntityPropContributors = Partial<{
  [eFileManagementComponents.FolderContent]: EntityPropContributorCallback<
    DirectoryContentDto
  >[];
}>;

export interface FileManagementConfigOptions {
  entityActionContributors?: FileManagementEntityActionContributors;
  entityPropContributors?: FileManagementEntityPropContributors;
  toolbarActionContributors?: FileManagementToolbarActionContributors;
  xsrfHeaderName?: string;
}

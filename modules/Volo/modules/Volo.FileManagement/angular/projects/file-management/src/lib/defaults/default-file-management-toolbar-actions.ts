import { ToolbarAction } from '@abp/ng.theme.shared/extensions';
import { DirectoryContentDto } from '../proxy/directories';

export const DEFAULT_FILE_MANAGEMENT_DIRECTORY_CONTENT_TOOLBAR_ACTIONS = ToolbarAction.createMany<
  DirectoryContentDto[]
>([]);

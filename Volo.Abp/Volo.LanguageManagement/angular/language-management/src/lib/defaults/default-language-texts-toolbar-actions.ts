import { ToolbarAction } from '@abp/ng.theme.shared/extensions';
import { LanguageTextDto } from '../proxy/dto/models';

export const DEFAULT_LANGUAGE_TEXTS_TOOLBAR_ACTIONS = ToolbarAction.createMany<LanguageTextDto[]>(
  [],
);

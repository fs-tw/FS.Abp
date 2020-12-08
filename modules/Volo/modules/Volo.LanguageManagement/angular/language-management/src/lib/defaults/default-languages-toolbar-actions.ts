import { ToolbarAction } from '@abp/ng.theme.shared/extensions';
import { LanguagesComponent } from '../components/languages/languages.component';
import { LanguageDto } from '../proxy/dto/models';

export const DEFAULT_LANGUAGES_TOOLBAR_ACTIONS = ToolbarAction.createMany<LanguageDto[]>([
  {
    text: 'LanguageManagement::CreateNewLanguage',
    action: data => {
      const component = data.getInjected(LanguagesComponent);
      component.add();
    },
    permission: 'LanguageManagement.Languages.Create',
    icon: 'fa fa-plus',
  },
]);

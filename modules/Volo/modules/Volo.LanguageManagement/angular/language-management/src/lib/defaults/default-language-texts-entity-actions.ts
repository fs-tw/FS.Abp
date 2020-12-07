import { EntityAction } from '@abp/ng.theme.shared/extensions';
import { LanguageTextsComponent } from '../components/language-texts/language-texts.component';
import { LanguageTextDto } from '../proxy/dto/models';

export const DEFAULT_LANGUAGE_TEXTS_ENTITY_ACTIONS = EntityAction.createMany<LanguageTextDto>([
  {
    text: 'LanguageManagement::Edit',
    action: data => {
      const component = data.getInjected(LanguageTextsComponent);
      component.edit(data.record, data.index);
    },
    permission: 'LanguageManagement.Languages.Edit',
  },
]);

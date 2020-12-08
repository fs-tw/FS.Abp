import { LocalizationService } from '@abp/ng.core';
import { EntityProp, ePropType } from '@abp/ng.theme.shared/extensions';
import { of } from 'rxjs';
import { LanguageDto } from '../proxy/dto/models';

export const DEFAULT_LANGUAGES_ENTITY_PROPS = EntityProp.createMany<LanguageDto>([
  {
    type: ePropType.String,
    name: 'displayName',
    displayName: 'LanguageManagement::DisplayName',
    columnWidth: 200,
    valueResolver: data => {
      const { displayName, isDefaultLanguage } = data.record;

      if (!isDefaultLanguage) return of(displayName);

      const l10n = data.getInjected(LocalizationService);
      const t = l10n.instant.bind(l10n);

      return of(`<strong>${displayName} (${t('LanguageManagement::DefaultLanguage')})</strong>`);
    },
  },
  {
    type: ePropType.String,
    name: 'cultureName',
    displayName: 'LanguageManagement::CultureName',
    columnWidth: 200,
  },
  {
    type: ePropType.String,
    name: 'uiCultureName',
    displayName: 'LanguageManagement::UiCultureName',
    columnWidth: 200,
  },
  {
    type: ePropType.Boolean,
    name: 'isEnabled',
    displayName: 'LanguageManagement::IsEnabled',
    columnWidth: 100,
  },
  {
    type: ePropType.String,
    name: 'flagIcon',
    displayName: 'LanguageManagement::FlagIcon',
    columnWidth: 100,
    valueResolver: data => {
      const { displayName, flagIcon } = data.record;
      return of(
        `<span class="flag-icon flag-icon-squared flag-icon-${flagIcon}" title="${displayName}"></span>`,
      );
    },
  },
]);

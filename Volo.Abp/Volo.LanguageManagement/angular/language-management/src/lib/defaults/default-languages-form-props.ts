import { ePropType, FormProp } from '@abp/ng.theme.shared/extensions';
import { Validators } from '@angular/forms';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { LanguagesComponent } from '../components/languages/languages.component';
import { LanguageDto } from '../proxy/dto/models';

export const DEFAULT_LANGUAGES_CREATE_FORM_PROPS = FormProp.createMany<LanguageDto>([
  {
    type: ePropType.String,
    name: 'cultureName',
    displayName: 'LanguageManagement::CultureName',
    id: 'culture-name',
    validators: () => [Validators.required],
    options: data =>
      data.getInjected(LanguagesComponent).cultures$.pipe(
        map(cultures =>
          cultures.map(culture => ({
            key: culture.displayName,
            value: culture.name,
          })),
        ),
      ),
  },
  {
    type: ePropType.String,
    name: 'uiCultureName',
    displayName: 'LanguageManagement::UiCultureName',
    id: 'ui-culture-name',
    validators: () => [Validators.required],
    options: data =>
      data.getInjected(LanguagesComponent).cultures$.pipe(
        map(cultures =>
          cultures.map(culture => ({
            key: culture.displayName,
            value: culture.name,
          })),
        ),
      ),
  },
  {
    type: ePropType.String,
    name: 'displayName',
    displayName: 'LanguageManagement::DisplayName',
    id: 'name',
    validators: () => [Validators.required, Validators.maxLength(256)],
  },
  {
    type: ePropType.String,
    name: 'flagIcon',
    displayName: 'LanguageManagement::FlagIcon',
    id: 'flag-icon',
    validators: () => [Validators.required],
    options: data =>
      of(
        data.getInjected(LanguagesComponent).flagIcons.map(flag => ({
          key: flag,
          value: flag,
        })),
      ),
  },

  {
    type: ePropType.Boolean,
    name: 'isEnabled',
    displayName: 'LanguageManagement::IsEnabled',
    id: 'is-enabled',
    defaultValue: false,
  },
]);

export const DEFAULT_LANGUAGES_EDIT_FORM_PROPS = DEFAULT_LANGUAGES_CREATE_FORM_PROPS.slice(2);

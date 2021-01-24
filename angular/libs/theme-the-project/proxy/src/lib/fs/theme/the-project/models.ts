import type { TheProjectSkin } from './settings/the-project-skin.enum';

export interface TheProjectThemeSettingsDto {
  skin: TheProjectSkin;
}

export interface UpdateTheProjectThemeSettingsDto {
  skin: TheProjectSkin;
}

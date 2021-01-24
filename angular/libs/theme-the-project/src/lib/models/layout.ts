import { TemplateRef } from '@angular/core';
import { Fs } from '@fs-tw/theme-the-project/proxy'

export namespace Layout {
  export interface ThemeSettings {
    skin: Fs.Theme.TheProject.Settings.TheProjectSkin;
  }

  export interface State {
    skin: Fs.Theme.TheProject.Settings.TheProjectSkin;
    skinElement: HTMLStyleElement;
    themeSettings: ThemeSettings;
  }
}

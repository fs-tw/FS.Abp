import { TemplateRef } from '@angular/core';
//import { Settings } from '@fs/theme.the-project/proxy'

export namespace Layout {
  export interface ThemeSettings {
  //  skin: Settings.TheProjectSkin;
  }

  export interface State {
    //skin: Settings.TheProjectSkin;
    //skinElement: HTMLStyleElement;
    themeSettings: ThemeSettings;
  }
}

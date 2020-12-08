import { TemplateRef } from '@angular/core';

export namespace Layout {
  export interface ThemeSettings {
    boxedLayout: boolean;
    menuPlacement: MenuPlacement;
    menuStatus: MenuStatus;
    style: number;
  }

  export enum MenuStatus {
    AlwaysOpened,
    OpenOnHover,
  }

  export enum MenuPlacement {
    Left,
    Top,
  }

  export type LogoColor = 'dark' | 'light';

  export interface NavigationElement {
    name: string;
    element: TemplateRef<any>;
    order?: number;
  }

  export interface State {
    isMenuExpanded: boolean;
    isNavbarExpanded: boolean;
    smallScreen: boolean;
    isSidebarCollapsed: boolean;
    isMenuPlacementTop: boolean;
    mouseOnSidebar: boolean;
    isMenuSwitched: boolean;
    style: number;
    styleElement: HTMLStyleElement;
    menuPlacement: MenuPlacement;
    boxedLayout: boolean;
    menuStatus: MenuStatus;
    themeSettings: ThemeSettings;
  }
}

import { NavItemsService } from '@abp/ng.theme.shared';
import { APP_INITIALIZER } from '@angular/core';
import { CurrentUserComponent } from '../components/nav-items/current-user.component';
import { FullScreenComponent } from '../components/nav-items/full-screen.component';
import { LanguagesComponent } from '../components/nav-items/languages.component';
import { eThemeLeptonComponents } from '../enums/components';

export const LEPTON_THEME_NAV_ITEM_PROVIDERS = [
  {
    provide: APP_INITIALIZER,
    useFactory: configureNavItems,
    deps: [NavItemsService],
    multi: true,
  },
];

export function configureNavItems(navItems: NavItemsService) {
  return () => {
    navItems.addItems([
      {
        id: eThemeLeptonComponents.Languages,
        order: 100,
        component: LanguagesComponent,
      },
      {
        id: eThemeLeptonComponents.CurrentUser,
        order: 100,
        component: CurrentUserComponent,
      },
      {
        id: eThemeLeptonComponents.FullScreen,
        order: 100,
        component: FullScreenComponent,
      },
    ]);
  };
}

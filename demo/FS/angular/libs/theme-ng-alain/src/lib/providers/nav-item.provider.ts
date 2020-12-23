import { NavItemsService,NavItem } from '@abp/ng.theme.shared';
import { APP_INITIALIZER } from '@angular/core';
import { CurrentUserComponent } from '../components/current-user/current-user.component';
import { LanguagesComponent } from '../components/languages/languages.component';
import { eThemeNgAlainComponents } from '../enums/components';

export const NGALAIN_THEME_NAV_ITEM_PROVIDERS = [
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
        id: eThemeNgAlainComponents.Languages,
        order: 100,
        component: LanguagesComponent,
        data:{
          direction:'right'
        }
      } as NavItem,
      {
        id: eThemeNgAlainComponents.CurrentUser,
        order: 100,
        component: CurrentUserComponent,
        data:{
          direction:'right'
        }
      } as NavItem,
    //   {
    //     id: eThemeNgAlainComponents.FullScreen,
    //     order: 100,
    //     component: FullScreenComponent,
    //   },
    ]);
  };
}

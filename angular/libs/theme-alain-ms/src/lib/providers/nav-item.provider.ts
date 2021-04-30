import { NavItemsService,NavItem } from '@abp/ng.theme.shared';
import { APP_INITIALIZER } from '@angular/core';
// import { HeaderFullScreenComponent } from '@fs-tw/theme-alain-ms/layout';
// import { CurrentUserComponent } from '../components/current-user/current-user.component';
// import { LanguagesComponent } from '../components/languages/languages.component';
import { eThemeNgAlainMsComponents } from '../enums/components';

export const NG_ALAIN_MS_THEME_NAV_ITEM_PROVIDERS = [
  {
    provide: APP_INITIALIZER,
    useFactory: configureNavItems,
    deps: [NavItemsService],
    multi: true,
  },
];

export function configureNavItems(navItems: NavItemsService) {
  return () => {
  //   navItems.addItems([
  //     {
  //       id: eThemeNgAlainMsComponents.Languages,
  //       order: 1,
  //       component: LanguagesComponent,
  //       data:{
  //         direction:'right'
  //       }
  //     } as NavItem,
  //     {
  //       id: eThemeNgAlainMsComponents.FullScreen,
  //       order: 2,
  //       component: HeaderFullScreenComponent,
  //       data:{
  //         direction:'right'
  //       }
  //     } as NavItem,
  //     {
  //       id: eThemeNgAlainMsComponents.CurrentUser,
  //       order: 999,
  //       component: CurrentUserComponent,
  //       data:{
  //         direction:'right'
  //       }
  //     } as NavItem
  //   ]);
   };
}

import { NavItemsService } from '@abp/ng.theme.shared';
import { APP_INITIALIZER } from '@angular/core';
import { HeaderFullScreenComponent } from '@fs/theme-alain/layout';
import { CurrentUserComponent } from '../components/current-user/current-user.component';
import { LanguagesComponent } from '../components/languages/languages.component';
export const NGALAIN_THEME_NAV_ITEM_PROVIDERS = [
    {
        provide: APP_INITIALIZER,
        useFactory: configureNavItems,
        deps: [NavItemsService],
        multi: true,
    },
];
export function configureNavItems(navItems) {
    return () => {
        navItems.addItems([
            {
                id: "Theme.LanguagesComponent" /* Languages */,
                order: 1,
                component: LanguagesComponent,
                data: {
                    direction: 'right'
                }
            },
            {
                id: "Theme.FullScreenComponent" /* FullScreen */,
                order: 2,
                component: HeaderFullScreenComponent,
                data: {
                    direction: 'right'
                }
            },
            {
                id: "Theme.CurrentUserComponent" /* CurrentUser */,
                order: 999,
                component: CurrentUserComponent,
                data: {
                    direction: 'right'
                }
            }
        ]);
    };
}
//# sourceMappingURL=nav-item.provider.js.map